import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from '../profile/pro';
import Bel from '../profile/bel';
import Lye from '../profile/lye';
import Home from '../home/home';
import About from '../home/about';
import Contact from '../home/contact';
import Nav from '../navbars/nav';
import Have from '../list/have/have';
import Hire from '../list/hire/hire';
import PowerTiller from '../list/hire/h-p';
import Harvaster from '../list/hire/harvaster/h-h';
import Sprayer from '../list/hire/h-s';
import Mtractore from '../list/hire/h-m';
import Tractore from '../list/hire/tractore/h-t';
import Paddy from '../list/hire/harvaster/paddy';
import Corn from '../list/hire/harvaster/corn';
import Sugar from '../list/hire/harvaster/sugar';
import SignIn from '../auth/in';
import SignUp from '../auth/up';
import Tipper from '../list/hire/tractore/t-t';
import Cultivator from '../list/hire/tractore/t-c';
import Rotavator from '../list/hire/tractore/t-r';
export default function Main() {
    return (
        
        <Router>
            <Nav />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />}/>
                <Route path="/contact" exact element={<Contact />}/>
                <Route path="/profile" exact element={<Profile />}/>
                <Route path="/bel" exact element={<Bel />} />
                <Route path="/lye" exact element={<Lye />} />
                <Route path="/have" exact element={<Have />}/>
                <Route path="/hire" exact element={<Hire />}/>
                <Route path="/h-powertiller" exact element={<PowerTiller />}/>
                <Route path="/h-harvaster" exact element={<Harvaster />}/>
                <Route path="/h-tractore" exact element={<Tractore />}/>
                <Route path="/h-sprayer" exact element={<Sprayer />}/>
                <Route path="/h-minitractore" exact element={<Mtractore />}/>
                <Route path="/paddy" exact element={<Paddy />}/>
                <Route path="/corn" exact element={<Corn />}/>
                <Route path="/sugar" exact element={<Sugar />}/>
                <Route path="/signin" exact element={<SignIn />}/>
                <Route path="/signup" exact element={<SignUp />}/>
                <Route path="t-tipper" exact element={<Tipper />}/>
                <Route path="/t-cultivator" exact element={<Cultivator />}/>
                <Route path="/t-rotavator" exact element={<Rotavator />}/>
            </Routes>
        </Router>
    );
}