var helper = require("./calllog-helper");
var appModule = require("application");
var CallLogCommon = require("./calllog-model-common");

var CallLog = (function (_super) {
    global.__extends(CallLog, _super);

    function CallLog() {
        _super.call(this);
    }

    CallLog.prototype.initializeFromNative = function (cursor) {
        var mainCursorJson = helper.convertNativeCursorToJson(cursor);

        this.number = mainCursorJson['number'];
        this.type = mainCursorJson['type'];
        this.date = mainCursorJson['date'];
        this.duration = mainCursorJson['duration'];
    }

    return CallLog;
})(CallLogCommon);

module.exports = CallLog;