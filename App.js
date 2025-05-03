import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ManageVolunteers from './components/ManageVolunteers';
import ManageDonations from './components/ManageDonations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/volunteers" element={<ManageVolunteers />} />
        <Route path="/admin/donations" element={<ManageDonations />} />
      </Routes>
    </Router>
  );
}

export default App;
