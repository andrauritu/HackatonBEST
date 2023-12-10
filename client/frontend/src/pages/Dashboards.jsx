import { Link } from 'react-router-dom';

export const Dashboards = () => {
    const managers = Array.from({ length: 15 }, (_, i) => i + 1); // Array of manager numbers [1, 2, ..., 15]

    return (
        <div>
            <h1>Manager Dashboards</h1>
            {managers.map(manager => (
                <p key={manager}>
                    <Link to={`/dashboard/manager${manager}`}>Manager {manager} Dashboard</Link>
                </p>
            ))}
        </div>
    );
};

