import { useState } from 'react'
import './App.jsx'
import Splashscreen from './assets/components/Splashscreen.jsx'
import Home from './assets/components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './assets/components/Profile.jsx'
import Myfriends from './assets/components/Myfriends.jsx'
import Settings from './assets/components/Settings.jsx'
import Trending from './assets/components/Trending.jsx'
import Messanger from './assets/components/Messanger.jsx'
import Loginpage from './assets/components/Loginpage.jsx';
import Signup from './assets/components/Signup.jsx';
import Groups from './assets/components/Groups.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

<BrowserRouter>
<Routes>
   <Route path="/" element={<Splashscreen />} />
  <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/Myfriends' element={<Myfriends/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/messanger' element={<Messanger/>}/>
        <Route path='/populargroups' element={<Groups/>}/>


      </Routes></BrowserRouter>

  
    </div>
    </>
  )
}

export default App