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
// import Lessons from './components/Lessons/Lessons.js';
// import Coaches from './components/Coaches/Coaches.js';
import Contacts from './components/Contact/Contact.js';
// import Events from './components/Events/Events.js';
// import EditEvents from './components/Events/EditEvents/EditEvents.js';
// import DeleteEvents from './components/Events/EditEvents/DeleteEvents.js';

function App() {

  const [events, setEvents] = useState([]);
  const [email, setEmail] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      // const result = await axios.get(
      //   'http://stricker-softball.herokuapp.com/api/events/'
      // )
      // setEvents(result.data);
    }
    fetchData();
    // <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
    // var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    // console.log(Email)
    const $link = document.createElement("link");
    $link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
    $link.rel = 'stylesheet'
    document.head.appendChild($link);
    // <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Satisfy&display=swap" rel="stylesheet"></link>
    const $link2 = document.createElement("link");
    $link2.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Satisfy&display=swap'
    $link2.rel = 'stylesheet'
    document.head.appendChild($link2);
  //   <script src=
  //   "https://smtpjs.com/v3/smtp.js">
  // </script>
  const $script = document.createElement("script");
    $script.src = 'https://smtpjs.com/v3/smtp.js'
    document.head.appendChild($script);
  }, []);

  return (
    <>

      <div className="App">
        <Navbar />
        <div className='container'>
          <div className='container-after'>
          <Routes >
            <Route exact path="/" element={<Home />} render={props => <Home {...props} />} />
            <Route path="/contacts" element={<Contacts />} render={() => <Contacts />} />
          </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
