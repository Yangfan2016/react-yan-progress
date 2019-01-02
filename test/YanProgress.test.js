let YanProgress = require('../build/YanProgress.min.js').default;
let expect = require("chai").expect;
let React = require("react");
let ReactDOM = require("react-dom");


describe("render", function () {
    let app = document.createElement("div");
    document.body.appendChild(app);

    let TOTAL = 100;
    let DONE = 60;
    let MODIFY = 30;
    let UNDO = TOTAL - DONE;

    let progressBar = React.createElement(YanProgress, {
        total: TOTAL,
        done: DONE,
        modify: MODIFY,
    });

    ReactDOM.render(progressBar, app);

    let tipTextList = app.innerHTML.match(/(?<=>)([^<>]+)(?=<)/g); // e.g. 已提交60人

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