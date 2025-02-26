import { Route,Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />       
         
        {/* user path */}
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />

        {/* captain path */}
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />

        {/* home routes */}
        <Route path='/home' element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
        <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}></Route>

        {/*logout route */}
        <Route path='/user/logout' element={<UserProtectWrapper> <UserLogout/> </UserProtectWrapper>} />
        <Route path='/captain/logout' element={<CaptainProtectWrapper> <CaptainLogout/> </CaptainProtectWrapper>} />

        <Route path='/riding' element={<Riding/>} ></Route>
        <Route path='/captain-riding' element={<CaptainRiding/>} ></Route>


      </Routes>
    </div>
  )
}

export default App
