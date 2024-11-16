import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Pets from './pages/Pets'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import TwClasses from './pages/TwClasses'
import AdminPets from './pages/Admin/AdminPets'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/pets' element={<Pets />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/temp' element={<TwClasses />}/>
                    </Route>
                    <Routes element={<AdminLayout />}>
                    <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/pets' element={<AdminPets />} />
                    
                  </Routes>      
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App