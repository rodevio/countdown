import React from 'react';
import Logo from './components/Logo/Logo';
import Footer from './components/Footer/Footer';
import './App.css';
import Countdown from './components/Countdown/Countdown';
function App() {
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  return (
    <div className="App">
      <Logo />
      <Countdown date={`${year}-12-25T00:00:00`} />
      <Footer />
    </div>
    
  );
}

export default App;
