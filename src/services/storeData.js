const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
    const db = new Firestore();

    const predictsCollection = db.collection('predictions');
    return predictsCollection.doc(id).set(data);
}


// TODO: tambahin get history disini
async function getFirestoreData() {
    try {
        const db = new Firestore();

        const snapshot = await db.collection('predictions').get();
        const histories = [];
        snapshot.forEach(doc => {
            histories.push(doc.data());
        });
        // bakal ngasih array kosong kalo datanya gaada
        return histories.length > 0 ? histories : [];

    } catch (error) {
        console.error('Error in getFirestoreData:', error);
        return [];
    }
}

module.exports = { storeData, getFirestoreData, };