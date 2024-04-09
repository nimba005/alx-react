import React from 'react';
import './App.css';
import Notifications from './components/Notifications/Notifications';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">        
        <Header />        
          <Login />       
          <Footer />             
      </div>
    </React.Fragment>
  );
}

export default App;