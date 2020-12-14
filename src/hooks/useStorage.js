import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, firebaseTimestamp } from 'firebase/config';

const useStorage = file => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on(
            'state_changed',
            snapshot => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            err => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                const createdAt = firebaseTimestamp();
                collectionRef.add({ url, createdAt });
                setUrl(url);
            },
        );
    }, [file]);

    return { progress, error, url };
};

export default useStorage;
