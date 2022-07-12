// import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import AddEedit from './pages/AddEdit';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return(
    <div>
      <Router>
        <ToastContainer position="bottom-center" />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='addContact' element={<AddEedit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;