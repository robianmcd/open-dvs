export function dbMigration1(db: IDBDatabase) {
    db.createObjectStore('songDetails', {autoIncrement: true, keyPath: 'id'});
    db.createObjectStore('songBuffer');
    db.createObjectStore('preferences');
}