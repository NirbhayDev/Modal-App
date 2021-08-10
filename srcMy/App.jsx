import React,{useState, useMemo, useEffect} from 'react'
import { Redirect, Route, Switch } from "react-router-dom";


import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Screens/HomePage/Home'
import Login from './Screens/Auth/Login'
import SignUp from './Screens/Auth/SignUp'
import CreateProfile from './Screens/Auth/CreateProfile'
import ForgotPassword from './Screens/Auth/ForgotPassword'
import ModelWorld from './Screens/UserRole/ModalWorld/Modelworld'
import ModelsInfo from './Screens/UserRole/ModalWorld/ModelsInfo'
import ModelsImageGallery from './Screens/UserRole/ModalWorld/ModelsImageGallery'

import MapArtists from './Screens/UserRole/ArtistsPage/MapArtists'
import ImageGallery from './Screens/UserRole/ArtistsPage/Gallery/ImageGallery'
import Plan from './Screens/Plan/Plan'
import EditProfile from './Screens/Admin/EditProfile/EditProfile'
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import Dashboard from './Screens/Admin/Dashboard/Dashboard'
import Timeline from './Screens/Admin/Timeline/Timeline'


const App = () => {
 
  return (
    <>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign' component={SignUp} />
        <Route exact path='/forgot-password' component={ForgotPassword} />

        
        <Route exact path='/create-profile' component={CreateProfile} />
        <AuthenticatedRoute exact path='/modal' component={ModelWorld} />
        <AuthenticatedRoute exact path='/modals' component={ModelsInfo} />
        <AuthenticatedRoute exact path='/image' component={ModelsImageGallery} />
        <AuthenticatedRoute exact path='/search-artist' component={MapArtists} />
        <AuthenticatedRoute exact path='/img' component={ImageGallery} />
        <AuthenticatedRoute exact path='/plan' component={Plan} />
        <AuthenticatedRoute exact path='/edit-profile' component={EditProfile} />
        <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
        <AuthenticatedRoute exact path='/timeline' component={Timeline} />
      </Switch>
    </>
  )
}
export default App
