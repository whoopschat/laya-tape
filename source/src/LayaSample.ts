// 程序入口
class GameMain {
    constructor() {
        Laya.init(600, 400);
        let routes = {
            "Main": App.Main.ROUTE(),
            "Page2": {
                activity: App.Page2
            }
        };
        let options = {
            uriProfix: "baidu://elm/",
            fileVersion: "version.json",
            res: [
                { url: 'res/atlas/comp.atlas', type: Laya.Loader.ATLAS }
            ]
        };
        Tape.initApp(routes, "Page2", options);
    }
}
new GameMain();