self.addEventListener('message', function (e) {
    try {
        var result = void 0;
        switch (e.data.method) {
            case 'byteArrayToBase64':
                result = byteArrayToBase64(e.data.params[0]);
                break;
            default:
                console.error("imageWorker: unknown method \"" + e.data.method + "\"");
                return;
        }
        postMessage({ msgId: e.data.msgId, result: result });
    }
    catch (error) {
        postMessage({ msgId: e.data.msgId, error: error });
    }
}, false);
function byteArrayToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
