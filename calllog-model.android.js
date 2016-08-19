var helper = require("./calllog-helper");
var appModule = require("application");
var CallLogCommon = require("./calllog-model-common");

var CallLog = (function (_super) {
    global.__extends(CallLog, _super);

    function CallLog() {
        _super.call(this);
    }

    CallLog.prototype.initializeFromNative = function (cursor) {
        var CallLogs = android.provider.CallLog.Calls;
        var mainCursorJson = helper.convertNativeCursorToJson(cursor);

        this.number = mainCursorJson[CallLogs.NUMBER];
        this.type = mainCursorJson[CallLogs.TYPE];
        this.date = mainCursorJson[CallLogs.DATE];
        this.duration = mainCursorJson[CallLogs.DURATION];
        this.contactid = mainCursorJson[CallLogs.CONTACTID];
    };

    return CallLog;
})(CallLogCommon);

module.exports = CallLog;