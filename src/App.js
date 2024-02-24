import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthGuard from './Pages/AuthGuard';
import Login from './Pages/Login';
// import { AuthProvider } from './Pages/AuthContext'; 
import Home from './Home';
import Navbar from './Pages/Navbar';
import { ApiProvider } from './ContextApi/ContextApi';
import AccountRegistration from './Pages/AccountRegistrationForm';
import TestEntry from './Pages/TestEntry';
import PatientList from './Pages/PatientList';
import PatientProfile from './Pages/PatientProfile';
import Dashboard from './Pages/Dashboard';
import SideBar from './Pages/Sidebar';
import SignUp from './Pages/SignUp';
import SelectTemplate from './Pages/SelectTemplate' 
import PatientRegistration from './Pages/PatientRegistration';

function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <ApiProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AccountRegistration" element={<AccountRegistration />} />
          <Route
            path="/Home/*"
            element={
              <AuthGuard>
                <Navbar />
                  <Routes>
                   <Route index element={<Dashboard />} />
                   <Route path="SignUp" element={<SignUp />} />
                   <Route path="TestEntry" element={<TestEntry />} />
                   <Route path="PatientList" element={<PatientList />} />
                   <Route path="PatientProfile/:id" element={<PatientProfile />} />
                   <Route path='SelectTemplate' element={<SelectTemplate />} />
                   <Route path='PatientRegistration' element={<PatientRegistration />} />
                 </Routes>
              </AuthGuard>
            }
          />
        </Routes>
        </ApiProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
