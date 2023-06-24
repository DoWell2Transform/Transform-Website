import React, { useState, useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import axios from 'axios';

import Navbar from './components/Navbar/Navbar.js'
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Lessons from './components/Lessons/Lessons.js';
import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';
import Events from './components/Events/Events.js';
import EditEvents from './components/Events/EditEvents/EditEvents.js';
import DeleteEvents from './components/Events/EditEvents/DeleteEvents.js';

function App() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const result = await axios.get(
      //   'http://stricker-softball.herokuapp.com/api/events/'
      // )
      // setEvents(result.data);
    }
    fetchData();
  }, []);

  return (
    <>

      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='container-after'>
          <Routes >
            <Route exact path="/" element={<Home />} render={props => <Home {...props} />} />
            <Route path="/events" element={<Events />} render={props => <Events {...props} eventList={events} />} />
            <Route path="/lessons" element={<Lessons />} render={props => <Lessons {...props} />} />
            <Route path="/meetthecoach" element={<Coaches />} render={props => <Coaches {...props} />} />
            <Route path="/contacts" element={<Contacts />} render={() => <Contacts />} />
            <Route path="/admin/events/edit" element={<EditEvents />} render={props => <EditEvents {...props} />} />
            <Route path="/admin/events/delete" element={<DeleteEvents />} render={props => <DeleteEvents {...props} eventList={events} />} />
          </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
