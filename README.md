# NativeScript Call Log

[![NPM](https://nodei.co/npm/nativescript-CallLog.png?compact=true)](https://nodei.co/npm/nativescript-CallLog/)

## Limitations
Currently, it only works on Android.

## Usage

args.filter[] - Types of calls that we want to get. If you send all three types it's the same as leaving it empty (all calls are returned by default).

```js
let args = {
    filter: [
        callLogsService.Type.INCOMING,
        callLogsService.Type.OUTCOMING,
        callLogsService.Type.MISSED
    ]
};

callLogsService.getCallLog([args]).then(callLogs => {
    callLogs.data.forEach(callLog => {
        console.log(`${callLog['number']} ${callLog['type']} ${callLog['date']} ${callLog['duration']}`);
    })
});
```