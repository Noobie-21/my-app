import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login/Login';
import SignUp from './Auth/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/Home';
import Header from './components/Navbar/Header';
import VideoUpload from './components/Videos/Uploads/VideoUpload';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/upload' element={<VideoUpload />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/new' element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
