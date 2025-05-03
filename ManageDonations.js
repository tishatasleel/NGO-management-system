import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManageDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/donations')
      .then(res => setDonations(res.data));
  }, []);

  return (
    <div>
      <h2>Manage Donations</h2>
      <ul>
        {donations.map(d => <li key={d._id}>{d.donorName} - ${d.amount}</li>)}
      </ul>
    </div>
  );
}