import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useCredits = () => {
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                setLoading(true);
                const creditsCollection = collection(db, 'credits');
                const creditsSnapshot = await getDocs(creditsCollection);

                const creditsList = creditsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setCredits(creditsList);
                setError(null);
            } catch (err) {
                console.error('Error al cargar créditos:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCredits();
    }, []);

    return { credits, loading, error };
};
