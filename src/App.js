import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RestView from './pages/RestView';

function App() {
  return (
    <div >
  
      <Routes>
      <Route path={'/'} element={<Home/>} /> 
      <Route path={'/restview/:id'} element={<RestView/>} /> 
     
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
