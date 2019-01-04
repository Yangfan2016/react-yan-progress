let expect = require("chai").expect;
let React = require("react");
let ReactDOM = require("react-dom");
let YanProgress = require('../build/YanProgress.min.js').default;

let app;
let progressBar;
let tipTextList;
let TOTAL;
let DONE;
let MODIFY;
let UNDO;

function renderDOM({ total, done, modify, }) {
    app = document.createElement("div");
    document.body.appendChild(app);

    progressBar = React.createElement(YanProgress, {
        total,
        done,
        modify,
    });

    ReactDOM.render(progressBar, app);
}

function removeDOM() {
    app.remove();
    app = null;
}

describe("render html", function () {
    beforeAll(function () {
        TOTAL = 100;
        DONE = 60;
        MODIFY = 30;
        UNDO = TOTAL - DONE;
        renderDOM({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
        });
        tipTextList = app.innerHTML.match(/(?<=>)([^<>]+)(?=<)/g); // e.g. 已提交60人
    });
    afterAll(function () {
        removeDOM();
    });

    it("It must be string", function () {
        expect(app.innerHTML)
            .to
            .be
            .an("string");
    });
    it("Tips must be array", function () {
        expect(tipTextList)
            .to
            .be
            .an("array");
    });
    it("Tips has three items", function () {
        expect(tipTextList)
            .to
            .have
            .lengthOf(3);
    });
    it("Judge calc is correct", function () {
        let [undo, done, modify] = tipTextList.map(item => +item.match(/\d+/)[0]);

        expect(undo)
            .to
            .be
            .equal(UNDO);
        expect(done)
            .to
            .be
            .equal(DONE);
        expect(modify)
            .to
            .be
            .equal(MODIFY);
    });
});

describe("code strong", function () {
    it("total === 0", function () {
        TOTAL = 0;
        DONE = 60;
        MODIFY = 30;
        let progressBar = new YanProgress({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
        })
        let { modifyPercent, donePercent } = progressBar.state;
        expect(modifyPercent)
            .to
            .be
            .equal(0);
        expect(donePercent)
            .to
            .be
            .equal(0);
    });
    it("done === 0", function () {
        TOTAL = 100;
        DONE = 0;
        MODIFY = 30;
        let progressBar = new YanProgress({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
        })
        let { modifyPercent, donePercent } = progressBar.state;
        expect(modifyPercent)
            .to
            .be
            .equal(0);
        expect(donePercent)
            .to
            .be
            .equal(0);
    });
    it("tip is not array", function () {
        TOTAL = 100;
        DONE = 0;
        MODIFY = 30;
        let progressBar = new YanProgress({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
            tip: '[]',
        })
        let { tip } = progressBar.state;
        expect(tip)
            .to
            .be
            .an("array");
        expect(tip)
            .to
            .have
            .lengthOf(3);
    });
    it("total > done", function () {
        TOTAL = 100;
        DONE = 600;
        MODIFY = 30;
        let progressBar = new YanProgress({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
        })
        let { donePercent } = progressBar.state;
        let done = donePercent / 1e2 * TOTAL;
        expect(done)
            .to
            .be
            .equal(TOTAL);
    });
    it("modify > done", function () {
        TOTAL = 100;
        DONE = 60;
        MODIFY = 100;
        let progressBar = new YanProgress({
            total: TOTAL,
            done: DONE,
            modify: MODIFY,
        })
        let { modifyPercent } = progressBar.state;
        let modify = modifyPercent / 1e2 * DONE;
        expect(modify)
            .to
            .be
            .equal(DONE);
    });
});