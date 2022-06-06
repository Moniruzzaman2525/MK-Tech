import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="">
      <Layout></Layout>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
