import env from "../../../utils/env";
import { IApp } from "../_inters";

class App implements IApp {

    private _launchCallback = null;
    private _pauseCallback = null;

    constructor() {
        if (!env.isFacebookApp()) {
            return;
        }
        this._init();
    }

    private _init() {
        env.execFB('onPause', () => {
            this._pauseCallback && this._pauseCallback();
        });
        env.execFB('setSessionData', { message: 'start game' })
        env.execFB('player.canSubscribeBotAsync').then(can_subscribe => {
            if (can_subscribe) {
                env.execFB('player.subscribeBotAsync');
                env.printDebug('can subscribe bot');
            } else {
                env.printDebug('not can subscribe bot');
            }
        });
    }

    private _checkOnLaunch() {
        env.execFB('getEntryPointAsync').then(scene => {
            let query = env.execFB('getEntryPointData') || {};
            this._launchCallback && this._launchCallback({
                scene: `${scene}`,
                query,
                platform: env.getPlatform()
            });
        });
    }

    public onLaunch(callback: (data: object) => void) {
        this._launchCallback = callback;
        this._checkOnLaunch();
    }

    public onPause(callback: () => void) {
        this._pauseCallback = callback;
    }

    public getUserInfo(callback: (userinfo) => void) {
        callback && callback({
            platform: env.getPlatform(),
            nickname: env.execFB('player.getName'),
            avatarUrl: env.execFB('player.getPhoto'),
            city: '-',
            country: '-',
            province: '-',
            gender: 0,
            language: env.execFB('getLocale'),
            raw: null,
        });
    }

}

export default new App;