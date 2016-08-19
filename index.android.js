var appModule = require("application");
var CallLog = require("./calllog-model");
var Type = require("./call-types");

exports.getCallLog = function (args) {
    return new Promise(function (resolve, reject) {
        var projection = null;

        if (args && args.filter && args.filter.length > 0) projection = "type = " + args.filter[0];
        if (args && args.filter && args.filter.length > 1) {
            for (var x = 1; x < args.filter.length; x++) {
                projection += " OR type = " + args.filter[x];
            }
        }

        var CallLogs = android.provider.CallLog.Calls;
        var c = appModule.android.context.getContentResolver().query(CallLogs.CONTENT_URI, null, projection, null, null);

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

exports.Type = Type;

