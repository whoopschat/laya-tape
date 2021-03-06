import env from "../../../utils/env";
import { IApp } from "../_inters";
import { fixHeightForWechat, fixWidthForWechat } from "../_size";
import screen from "../../manager/screen";

class App implements IApp {

    private _pauseCallback = null;
    private _launchCallback = null;
    private _userinfoButton = null;

    constructor() {
        if (!env.isWechatApp()) {
            return;
        }
        this._init();
    }

    private _init() {
        env.execWX('onHide', () => {
            this._pauseCallback && this._pauseCallback();
        });
        env.execWX('onShow', (options) => {
            this._launchCallback && this._launchCallback({
                platform: env.getPlatform(),
                scene: `${options.scene || ''}`,
                query: options.query || {},
            });
        });
    }

    public onLaunch(callback: (data: object) => void) {
        this._launchCallback = callback;
        this._checkOnLaunch();
    }

    private _checkOnLaunch() {
        let options = env.execWX('getLaunchOptionsSync') || {};
        this._launchCallback && this._launchCallback({
            platform: env.getPlatform(),
            scene: `${options.scene || ''}`,
            query: options.query || {},
        });
    }

    public onPause(callback: () => void) {
        this._pauseCallback = callback;
    }

    public getUserInfo(callback: (userinfo) => void, options: any = {}) {
        let onHandler = (res) => {
            if (res && res.userInfo) {
                callback && callback({
                    platform: env.getPlatform(),
                    avatarUrl: res.userInfo.avatarUrl,
                    nickname: res.userInfo.nickName,
                    city: res.userInfo.city,
                    country: res.userInfo.country,
                    province: res.userInfo.province,
                    gender: res.userInfo.gender,
                    language: res.userInfo.language,
                    raw: res
                });
            } else {
                callback && callback(null);
            }
        }
        let onHide = () => {
            if (this._userinfoButton) {
                this._userinfoButton.style.left = -this._userinfoButton.style.width;
                this._userinfoButton.style.top = -this._userinfoButton.style.height;
                this._userinfoButton.hide();
                this._userinfoButton.destroy();
                this._userinfoButton = null;
            }
        }
        let onFail = () => {
            let x = options.x || 0;
            let y = options.y || 0;
            let w = options.width || screen.getDesignWidth();
            let h = options.height || screen.getDesignHeight();
            let left = fixWidthForWechat(x + screen.getOffestX());
            let top = fixHeightForWechat(y + screen.getOffestY());
            let width = fixWidthForWechat(w);
            let height = fixHeightForWechat(h);
            let imageUrl = options.imageUrl || '';
            if (!this._userinfoButton) {
                this._userinfoButton = env.execWX('createUserInfoButton', {
                    withCredentials: true,
                    type: 'image',
                    image: imageUrl,
                    style: {
                        left,
                        top,
                        width,
                        height,
                    }
                });
            }
            if (this._userinfoButton) {
                this._userinfoButton.onTap((res) => {
                    if (res.errMsg.indexOf(':ok') >= 0) {
                        onHide();
                        onHandler(res);
                    }
                });
                this._userinfoButton.show();
            }
        }
        onHide();
        env.execWX('getUserInfo', {
            withCredentials: true,
            success: onHandler,
            fail: onFail
        });
    }

}

export default new App;