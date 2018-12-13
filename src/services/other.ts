import env from "../utils/env";
import screen from "./manager/screen";
import { fixWidthForWechat, fixHeightForWechat } from "./platform/_size";

let _clubButton = null;

function isSupportClubButton() {
    if (env.isWechatApp()) {
        return true;
    }
    return false;
}

function showClubButton(icon: string, x: number, y: number, w: number, h: number) {
    if (!env.isWechatApp()) {
        return;
    }
    try {
        let left = fixWidthForWechat(x + screen.getOffestX());
        let top = fixHeightForWechat(y + screen.getOffestY());
        let width = fixWidthForWechat(w);
        let height = fixHeightForWechat(h);
        let icons = ['green', 'white', 'dark', 'light'];
        hideClubButton();
        if (!_clubButton) {
            _clubButton = env.execWX('createGameClubButton', {
                icon: icons.indexOf(icon) < 0 ? icons[0] : icon,
                style: {
                    left,
                    top,
                    width,
                    height
                }
            });
            if (_clubButton && icons.indexOf(icon) < 0) {
                _clubButton.image = icon;
            }
        }
        if (_clubButton) {
            _clubButton.style.left = left;
            _clubButton.style.top = top;
            _clubButton.style.width = width;
            _clubButton.style.height = height;
            _clubButton.show();
        }
    } catch (error) {
    }
}

function hideClubButton() {
    if (!env.isWechatApp()) {
        return;
    }
    try {
        if (_clubButton) {
            _clubButton.style.left = -_clubButton.style.width;
            _clubButton.style.top = -_clubButton.style.height;
            _clubButton.hide();
            _clubButton.destroy();
            _clubButton = null;
        }
    } catch (error) {
    }
}

function isSupportKefuConversation() {
    if (env.isWechatApp()) {
        return true;
    }
    return false;
}

function openKefuConversation(options = null) {
    if (env.isWechatApp()) {
        env.execWX('openCustomerServiceConversation', options);
    }
}


export default {
    isSupportKefuConversation,
    openKefuConversation,
    isSupportClubButton,
    showClubButton,
    hideClubButton,
}