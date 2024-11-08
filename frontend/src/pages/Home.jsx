import { useState } from 'react';
import axios from 'axios';
import AvailabilityForm from '../components/AvailabilityForm';

function Home() {
  const [user, setUser] = useState(null);

  const loginUser = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email });
      setUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container">
      <h1>Availability Scheduler</h1>
      <input type="email" placeholder="Enter your email" onBlur={(e) => loginUser(e.target.value)} className="form-control mb-3" />
      {user && <AvailabilityForm user={user._id} />}
    </div>
  );
}

export default Home;
