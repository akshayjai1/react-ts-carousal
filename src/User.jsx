import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    const d = async () => {
      try {
        const data = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        // setUsers(data);
        setLoading(false);
        setError('');
        if (Array.isArray(data?.data)) {
          setUsers(data.data);
        }
        console.log(data);
      } catch {
        setLoading(false);
        setUsers([]);
        setError('There was an error fetching users');
      }
    };
    d();
  }, []);
  const getUserList = () => {
    if (!loading && !users.length) {
      return <div>There are no users to display </div>;
    }
    if (loading) {
      return <div>Fetching Users...</div>;
    }
    return users.map((user) => {
      return (
        <div className="row">
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.website}</div>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>User List</h1>
      <div>
        <input type="search" className="user-search-input" />
      </div>
      <div className="row header">
        <div>Name</div>
        <div>User Name</div>
        <div>Email</div>
        <div>Website</div>
      </div>
      {getUserList()}
    </div>
  );
};
