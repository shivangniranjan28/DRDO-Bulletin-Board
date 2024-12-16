import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import './index.css'
import Layout from "./Layout"
import Home from './Components/Home';
import Admin from './Components/admin';
import Cghs from './Components/cghs';
import Login from './Components/Login';
import Csd_Canteen from './Components/Csd_Canteen';
import Finance from './Components/Finance';
import ITR from './Components/ITR';
import Instrumentation from './Components/Instrumentation';
import Library from './Components/Library';
import Material_Management from './Components/Material_Management';
import Mask_facility from './Components/Mask_facility';
import Public from './Components/Public';
import Oms_group from './Components/Oms_group';
import Solid_State from './Components/Solid_State';
import Workshop from './Components/Workshop';
import Work_section from './Components/Works_section';
import Wet_canteen from './Components/Wet_canteen';
import Technical from './Components/Technical';
import HRD from './Components/HRD';
import Sports from './Components/sports';


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      <Route path='cghs' element={<Cghs/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='csd_canteen' element={<Csd_Canteen/>}></Route>
      <Route path='finance' element={<Finance/>}></Route>
      <Route path='information_technology_group' element={<ITR/>}></Route>
      <Route path='instrumentation' element={<Instrumentation/>}></Route>
      <Route path='library' element={<Library/>}></Route>
      <Route path='material_managemnet_group' element={<Material_Management/>}></Route>
      <Route path='mask_facility' element={<Mask_facility/>}></Route>
      <Route path='public' element={<Public/>}></Route>
      <Route path='oms_group' element={<Oms_group/>}></Route>
      <Route path='solid_state_physic_laboratory' element={<Solid_State/>}></Route>
      <Route path='technical_secretariat' element={<Technical/>}></Route>
      <Route path='wet_canteen' element={<Wet_canteen/>}></Route>
      <Route path='works_section' element={<Work_section/>}></Route>
      <Route path='workshop' element={<Workshop/>}></Route>
      <Route path='HRD' element={<HRD/>}></Route>
      <Route path='sports' element={<Sports/>}></Route>
    </Route>

  )
)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
