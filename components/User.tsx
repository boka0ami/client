"use client";
import React, { useEffect, useState, SubmitEvent, ChangeEvent} from 'react';
import axios, { AxiosError } from 'axios';
import { api } from '../services/user_service'; // Imported from step 2
import { User, CreateUserPayload } from '../response-dtos/user-response'; // Imported from step 1

export const UserManager: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) =>{
      setName(event.target.value);
    }
  
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>{
      setEmail(event.target.value);
    }

  // 1. GET Request Example
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // Pass the expected return type <User[]> to the generic parameter
        const response = await api.get<User[]>('/users?_limit=5');
        setUsers(response.data); // response.data is typed safely as User[]
        console.log(response.data);
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

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) =>{
    event.preventDefault(); // Prevents page reload

    const newUserPayload: CreateUserPayload = {
      name,
      email,
    };
    console.log(newUserPayload);
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
  }

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0'
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    padding: '12px',
    textAlign: 'left'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name">
      Name
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      />
    </label>
  </div>

  <div>
    <label htmlFor="email">
      Email
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
    </label>
  </div>

  <button className='customBtnPrimary' type="submit">Create User</button>
</form>

      <h3>Users List (GET)</h3>
      <table>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} style={{ marginBottom: '10px', backgroundColor: '#f2f2f2' }}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};