import React from 'react';
import Update from './components/Update';
import AddData from './components/AddData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TurnOver from './components/Turnover';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import EmployeeReport from './components/EmployeeReport';
// import AnnualProfitReport from './components/AnnualProfitReport';
import TurnOverReport from './components/TurnOverReport';
import AddEmpData from './components/AddEmpData';
import EmpUpdate from './components/EmpUpdate';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TurnOver />} />
      <Route path="/AddData" element={<AddData />} />
     
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Product" element={<Product />} />
      {/* <Route path="/EmployeeReport" element={<EmployeeReport />} />
      <Route path="/AnnualProfitReport" element={<AnnualProfitReport />} /> */}
      <Route path="/TurnOverReport" element={<TurnOverReport />} />
      <Route path="/EmployeeReport" element={<EmployeeReport />} />
      <Route path="/AddEmpData" element={<AddEmpData />} />
      <Route path="/EmpUpdate/:id" element={<EmpUpdate />} />
     
    </Routes>
  </BrowserRouter>

</>
  )
}

export default App
