"use client";
import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { api } from '../services/user_service'; // Imported from step 2
import { User, CreateUserPayload } from '../response-dtos/user-response'; // Imported from step 1

export const UserManager: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 1. GET Request Example
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Pass the expected return type <User[]> to the generic parameter
        const response = await api.get<User[]>('/users?_limit=5');
        setUsers(response.data); // response.data is typed safely as User[]
      } catch (err) {
        // Handle typed Axios errors
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 2. POST Request Example
  const handleCreateUser = async () => {
    const newUserPayload: CreateUserPayload = {
      name: 'New TypeScript User',
      email: 'nayeem1@gmail.com'
    };

    try {
      // The first generic represents the response data, second can type the request payload if needed
      const response = await api.post<User>('/users', newUserPayload);
      
      // Update state with the newly created server item
      setUsers((prevUsers) => [response.data, ...prevUsers]);
      alert('User created successfully!');
    } catch (err) {
      const axiosError = err as AxiosError;
      console.error('Submission failed:', axiosError.message);
    }
  };

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>TypeScript React Axios Example</h2>
      <button onClick={handleCreateUser} style={{ marginBottom: '20px' }}>
        Add New User (POST)
      </button>

      <h3>Users List (GET)</h3>
      <ul>
        {users.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <strong>{post.name}</strong>
            <p>{post.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};