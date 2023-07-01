import {Routes, Route} from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'


export default function configRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/cadastrar' element={<Register></Register>}/>
        </Routes>
    )
}
