var appModule = require("application");
var CallLog = require("./calllog-model");

exports.getCallLog = function () {
    return new Promise(function (resolve, reject) {
        var CallLogs = android.provider.CallLog.Calls;
        var c = appModule.android.context.getContentResolver().query(CallLogs.CONTENT_URI, null, null, null, null);

        if (c.getCount() > 0) {
            var cl = [];
            while (c.moveToNext()) {
                var calllogModel = new CallLog();
                calllogModel.initializeFromNative(c);
                cl.push(calllogModel);
            }
            c.close();
            resolve({
                data    : cl,
                response: "fetch"
            });
        }
        else {
            c.close();
            resolve({
                data    : null,
                response: "fetch"
            });
        }
    });
};

