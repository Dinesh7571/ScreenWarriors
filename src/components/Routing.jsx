import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Roadmaps from './Roadmaps'
import HomePage from './HomePage';
import VideoResources from './VideoResources';
import { Jobs } from './Jobs';
import DsaProblems from './DsaProblems';
import Explore from './Explore';

const Routing = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/> 
          <Route path='/roadmaps' element={<Roadmaps/>}/>
          <Route path='/videoResource' element={<VideoResources/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/dsa' element={<DsaProblems/>}/>
          <Route path='/explore' element={<Explore/>}/>

       </Routes>
   </Router>
  )
}

export default Routing