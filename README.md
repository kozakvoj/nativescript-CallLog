# NativeScript Call Log

## Limitations
Currently, it only works on Android.

## Usage
```js
callLogsService.getCallLog().then(callLogs => {
    callLogs.data.forEach(callLog => {
        console.log(`${callLog['number']} ${callLog['type']} ${callLog['date']} ${callLog['duration']}`);
    })
});
```