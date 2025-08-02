import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Coder from './Components/Coder';
import History from './Components/History';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [language, setLanguage] = useState("");

  return (
    <Router>

      <Routes>
        <Route path="/codezone" element={<> <ProtectedRoute>
          <Navbar setlang={setLanguage} />

          <Coder lang={language} />
        </ProtectedRoute></>} />
        <Route path="/codezone/:id" element={
          <>
            <ProtectedRoute>
              <Navbar setlang={setLanguage} />

              <Coder lang={language} />

            </ProtectedRoute>
          </>} />
        <Route path="/history" element={<ProtectedRoute>
          <Navbar setlang={setLanguage} />

          <History />
        </ProtectedRoute>} />
        <Route
          path="/codezone"
          element={
            <ProtectedRoute>
              <>
                <Navbar setlang={setLanguage} />
                <Coder lang={language} />
              </>
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
