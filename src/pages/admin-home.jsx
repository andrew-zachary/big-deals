import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return <section id='admin-links'>
        <ul>
            <li>
                <Link to='change-password'>change password</Link>
            </li>
        </ul>
    </section>
};

AdminHome.displayName = 'admin home page';

export default AdminHome;