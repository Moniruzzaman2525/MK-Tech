import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Layout></Layout>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
