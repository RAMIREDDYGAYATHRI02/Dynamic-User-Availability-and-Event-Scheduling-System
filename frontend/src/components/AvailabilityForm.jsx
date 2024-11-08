import { useState } from 'react';
import axios from 'axios';

function AvailabilityForm({ user }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [duration, setDuration] = useState(30);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Corrected API URL to point to the backend server running on port 5000
      await axios.post('http://localhost:5000/api/availability', {
        user,
        start,
        end,
        duration,
      });
      alert('Availability added!');
    } catch (error) {
      console.error('Error adding availability:', error);
      alert('Failed to add availability.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label>Start Time</label>
        <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>End Time</label>
        <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} className="form-control" required />
      </div>
      <div className="mb-3">
        <label>Duration (Minutes)</label>
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Availability
      </button>
    </form>
  );
}

export default AvailabilityForm;
