import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // это бесплатные сервис изображений, это я нашла с помощью интернета
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {users.map(user => (
                <div key={user.id} style={{ width: '200px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', padding: '20px', textAlign: 'center', borderRadius: '8px' }}>
                    <FontAwesomeIcon icon={faUser} size="3x" style={{ marginBottom: '10px' }} />
                    <h3>{user.name}</h3>
                    <Link to={`/users/${user.id}`} style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>View Profile</Link>
                </div>
            ))}
        </div>
    );
};

export default UserList;



