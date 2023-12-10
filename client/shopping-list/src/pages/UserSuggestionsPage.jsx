import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function UserSuggestionsPage() {
    const { id } = useParams(); // Extract the ID from the URL
    console.log('ID:', id);
    const [purchases, setPurchases] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/userSuggestions/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setPurchases(data))
            .catch(error => {
                console.error("Suggestions are not yet available");
                setError({ message: "Suggestions are not yet available" });
            });
    }, [id]);

    if (error) {
        return <div> {error.message}</div>;
    } else if (purchases.length === 0) {
        return <div>No purchases available.</div>;
    } else {
        return (
            <div>
                <h1>User purchases page</h1>
                <ul>
                    {purchases.map((purchase, index) => (
                        <li key={index}>{purchase}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
