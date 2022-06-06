import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home/Home';
import Services from './components/HomePage/Serivces/Services';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Layout></Layout>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
