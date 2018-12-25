export interface IInit {
    start(callback: () => void): void;
    exit(): void;
    onLoaded(): void;
    onLoadProgress(progress): void;
}

export interface IApp {
    getUserInfo(callback: (userinfo: object) => void, options?: object): void;
    onPause(callback: () => void): void;
    onLaunch(callback: (options: object) => void);
}

export interface IAd {
    isSupportedRewardedVideoAd(): boolean;
    isPreloadRewardedVideoAd(): boolean;
    configRewardedVideoAd(platform: string, adId: string): void;
    watchRewardedVideoAd(onWatch?: () => void, onCancal?: () => void, onError?: (error: any) => void): void;
    isSupportedBannerAd(): boolean;
    configBannerAd(platform: string, adId: string): void;
    showBannerAd(x: number, y: number, w: number, h: number, onError?: (error: any) => void): void;
    hideBannerAd(): void;
}

export interface IRank {
    isSupportedRank(): boolean;
    createRankView(x?: number, y?: number, width?: number, height?: number): Laya.Sprite;
    setRankLocationSelf(enable: boolean, offset?: number);
    setRankKey(key: string, count?: number, offset?: number): void;
    setRankScore(key: string, score: number, extraData?: string): void;
    showRank(ui: object | object[]): void;
    hideRank(): void;
}