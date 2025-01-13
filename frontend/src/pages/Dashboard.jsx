import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await dispatch(fetchUserData(username));
      navigate(`/repos/${username}`);
    } catch (error) {
      setError('Failed to fetch user data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{paddingTop:'100px'}}>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Enter Github username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input'
        />
        <button
          onClick={handleSubmit}
          className='button-23'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
    </div>
  );
};


