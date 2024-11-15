import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Categories from './pages/Categories'
import WebLayout from './layout/WebLayout'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/Categories' element={<Categories />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App