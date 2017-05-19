self.addEventListener('message', function(e: MessageEvent) {
    try {
        let result;
        switch(e.data.method) {
            case 'byteArrayToBase64':
                result = byteArrayToBase64(e.data.params[0]);
                break;
            default:
                console.error(`imageWorker: unknown method "${e.data.method}"`);
                return;
        }

        postMessage({msgId: e.data.msgId, result});

    } catch(error) {
        postMessage({msgId: e.data.msgId, error});
    }

}, false);


function byteArrayToBase64(buffer) {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}