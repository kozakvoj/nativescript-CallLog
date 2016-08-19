var appModule = require("application");
var CallLog = require("./calllog-model");
var Type = require("./call-types");
var ContactType = require("./contact-types");

exports.getCallLog = function (args) {
    return new Promise(function (resolve, reject) {
        var CallLogs = android.provider.CallLog.Calls;
        var c = appModule.android.context.getContentResolver().query(CallLogs.CONTENT_URI, null, getWhereClause(args), null, null);

        if (c.getCount() > 0) {
            var cl = [];
            while (c.moveToNext()) {
                var calllogModel = new CallLog();
                calllogModel.initializeFromNative(c);
                cl.push(calllogModel);
            }
            c.close();
            resolve({data: cl, response: "fetch"});
        }
        else {
            c.close();
            resolve({data: null, response: "fetch"});
        }
    });
};

function getWhereClause(args) {
    var whereClause = "";

    if (args && args.filter && args.filter.length > 0) whereClause = "type = " + args.filter[0];
    if (args && args.filter && args.filter.length > 1) {
        for (var x = 1; x < args.filter.length; x++) {
            whereClause += " OR type = " + args.filter[x];
        }
    }

    if (args && args.contactType && whereClause !== "") whereClause += " AND ";
    if (args && args.contactType && args.contactType === ContactType.KNOWN) {
        whereClause += "contactid > 0";
    } else if (args && args.contactType && args.contactType === ContactType.UNKNOWN) {
        whereClause += "contactid = 0";
    }

    if (args && args.keepHiddenNumbers === false && whereClause !== "") whereClause += " AND ";
    if (args && args.keepHiddenNumbers === false) {
        whereClause += "number != -2";
    }

    return whereClause;
}

exports.Type = Type;
exports.ContactType = ContactType;

