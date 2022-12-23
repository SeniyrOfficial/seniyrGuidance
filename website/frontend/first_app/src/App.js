import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import homePage from './components/home/homePage';

function App() { // This is JSX
  // Can only return 1 thing
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/'component={Dashboard} />
            <Route path='/home' component={homePage} />
            {/* <Route path='/direction/q1' component={SignIn} />
            <Route path='/direction/q2' component={SignIn} />
            <Route path='/direction/q3' component={SignUp} />
            <Route path='/direction/q4' component={SignUp} /> */}
            {/* <Route path='/direction/thankyou' component={thankyou} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
