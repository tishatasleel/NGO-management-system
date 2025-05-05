import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManageVolunteers() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/volunteers')
      .then(res => setVolunteers(res.data));
  }, []);

  return (
    <div>
      <h2>Manage Volunteers</h2>
      <ul>
        {volunteers.map(v => <li key={v._id}>{v.name} - {v.email}</li>)}
      </ul>
    </div>
  );
}
