import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainAdminDashboard from './dashboards/MainAdminDashboard';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<MainAdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
