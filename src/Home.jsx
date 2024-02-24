import { Route, Routes } from 'react-router-dom';
import TestEntry from './Pages/TestEntry';
import PatientList from './Pages/PatientList';
import PatientProfile from './Pages/PatientProfile';
import Dashboard from './Pages/Dashboard';
import SideBar from './Pages/Sidebar';
import SignUp from './Pages/SignUp';
import SelectTemplate from './Pages/SelectTemplate' 
// Other imports...

function Home() {
    return (
  <>
         {/* <Routes>
            <Route index element={<Dashboard />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="TestEntry" element={<TestEntry />} />
            <Route path="PatientList" element={<PatientList />} />
            <Route path="PatientProfile/:id" element={<PatientProfile />} />
            <Route path='SelectTemplate' element={<SelectTemplate />} />
          </Routes>
          <Routes>
          </Routes> */}
  </>
          
       
    );
  }
  

export default Home;
