import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/history'>History</Link>
                </li>
            </ul>

            <h1>RESTy Application</h1>
        </header>
    );
}

export default Header;
