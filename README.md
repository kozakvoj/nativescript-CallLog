# NativeScript Call Log

## Usage
```js
calllog.getCallLog().then(function(callLogs){
    callLogs.data.forEach(callLog => {
        console.log(`${callLog['number']} ${callLog['type']} ${callLog['date']} ${callLog['duration']}`);
    })
});
```