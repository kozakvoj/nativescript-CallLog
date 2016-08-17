var CallLog = (function () {
    function CallLog() {
        this.number = "";
        this.type = "";
        this.date = "";
        this.duration = "";
    }

    CallLog.prototype.initializeFromNative = function(nativeData) {
        // Abstract Method
    };

    return CallLog;
})();

module.exports = CallLog;
