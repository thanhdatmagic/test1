import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Report from './pages/report/report'
import Login from './pages/login/login'
import Forgot from './pages/login/forgotpass'
import Forgot2 from './pages/login/forgotpass2'
import Device from './pages/device/device'
import AddDevice from './pages/device/add-device'
import DeviceDetail from './pages/device/device-detail'
import UpdateDevice from './pages/device/update-device'
import Service from './pages/service/service'
import Profile from './pages/profile'




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/forgot2' element={<Forgot2/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/device' element={<Device/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/device/add' element={<AddDevice/>}/>
      </Routes>
    </div>
  );
}

export default App;
