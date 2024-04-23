import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/userList/userList';
import UserDetails from './components/userDetalis/userDetalis';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
        </Router>
    );
}

export default App;


