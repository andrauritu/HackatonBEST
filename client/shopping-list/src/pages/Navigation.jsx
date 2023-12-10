import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/dashboards">List</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/userSuggestions/:id">Fake</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;