class MainActivity extends Tape.Activity {

    ui = new ui.page.mainUI;

    onCreate() {
        this.ui.btnPopup.on(Laya.Event.CLICK, this, () => {
            Tape.popup.showPopup(TestPop, { data : "111"})
        });
        this.ui.btnToast.on(Laya.Event.CLICK, this, () => {
            Tape.toast.showToast(TestToast, { data : "111"})
        });
    }

}