# NativeScript Call Log

[![NPM](https://nodei.co/npm/nativescript-CallLog.png?compact=true)](https://nodei.co/npm/nativescript-CallLog/)

## Limitations
Currently, it only works on Android.

## Usage

- args.filter[] - Types of calls that we want to get. If you send all three types it's the same as leaving it empty (all calls are returned by default).
- args.contactType - You can return only calls which are (callLogsService.ContactType.KNOWN)/are not (callLogsService.ContactType.UNKNOWN) in your contact list.

```js
let args = {
    filter: [
        callLogsService.Type.INCOMING,
        callLogsService.Type.OUTCOMING,
        callLogsService.Type.MISSED
    ],
    contactType: callLogsService.ContactType.UNKNOWN
};

callLogsService.getCallLog([args]).then(callLogs => {
    callLogs.data.forEach(callLog => {
        console.log(`${callLog['number']} ${callLog['type']} ${callLog['date']} ${callLog['duration']} ${callLog['contactid']}`);
    })
});
```

## Returned fields
- number
- type (callLogsService.Type.INCOMING, callLogsService.Type.OUTCOMING, callLogsService.Type.MISSED)
- date (timestamp)
- duration (in seconds)
- contactid (0 for not saved number)