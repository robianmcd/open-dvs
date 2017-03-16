import {SongDetails} from "../../../models/songDetails";
import {Db} from "../db.service";

export function dbMigration20(db: IDBDatabase, upgradeTransaction: IDBTransaction) {
    let getSongCursor = upgradeTransaction.objectStore('songDetails').openCursor();

    let albumDataUrlById = {};
    let resizingImagesPromises = [];

    getSongCursor.onsuccess = (e) => {
        let cursor: IDBCursorWithValue = e.target['result'];
        if (cursor) {
            let details: SongDetails = cursor.value;
            if (details['base64Pic']) {
                resizingImagesPromises.push(
                    resizeBase64Img(details['picFormat'], details['base64Pic'], 100, 100)
                        .then((albumDataUrl) => {
                            albumDataUrlById[details.id] = albumDataUrl;
                            delete details['picFormat'];
                            delete details['base64Pic'];
                            details.albumDataUrl = albumDataUrl;
                        })
                );
            }
            cursor.continue();
        } else {
            //ლ(ಠ_ಠლ)
            setTimeout(() => {
                updateAlbumPics(db, albumDataUrlById, resizingImagesPromises);
            })
        }
    };
}

function updateAlbumPics(db, albumDataUrlById, resizingImagesPromises) {
    Promise.all(resizingImagesPromises)
        .then(() => {
            let updateAlbumCoversTransaction = db.transaction(['songDetails'], Db.READWRITE_TRANSACTION);
            let getSongCursor = updateAlbumCoversTransaction.objectStore('songDetails').openCursor();

            getSongCursor.onsuccess = (e) => {
                let cursor: IDBCursorWithValue = e.target['result'];
                if (cursor) {
                    let details: SongDetails = cursor.value;
                    if (details['base64Pic']) {
                        delete details['picFormat'];
                        delete details['base64Pic'];

                        details.albumDataUrl = albumDataUrlById[details.id];
                        cursor.update(details);
                        cursor.continue();
                    } else {
                        cursor.continue();
                    }
                }
            };
        })
}

//based on http://stackoverflow.com/a/20965997/373655
function resizeBase64Img(type: string, base64: string, maxWidth: number, maxHeight: number): Promise<string> {
    return new Promise((resolve) => {
        let img = new Image;

        img.onload = resizeImage;
        img.src = `data:${type};base64,${base64}`;

        function resizeImage() {
            let targetWidth = img.width;
            let targetHeight = img.height;

            if (img.width > maxWidth) {
                targetWidth = maxWidth;
                targetHeight = img.height / (img.width / maxWidth);
            }

            if (targetHeight > maxHeight) {
                targetHeight = maxHeight;
                targetWidth = img.width / (img.height / maxHeight);
            }
            resolve(imageToDataUri(img, targetWidth, targetHeight));
        }

        function imageToDataUri(img, width, height) {

            // create an off-screen canvas
            let canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            // set its dimension to target size
            canvas.width = width;
            canvas.height = height;

            // draw source image into the off-screen canvas:
            ctx.drawImage(img, 0, 0, width, height);

            // encode image to data-uri with base64 version of compressed image
            return canvas.toDataURL('image/jpeg', 0.8);
        }
    });
}