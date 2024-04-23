import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../store/actions';

const UserDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userDetails, loading, error } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(getUserDetails(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>{userDetails.name}</h1>
            <p>Email: {userDetails.email}</p>
            <p>Phone: {userDetails.phone}</p>
        </div>
    );
};

export default UserDetails;

