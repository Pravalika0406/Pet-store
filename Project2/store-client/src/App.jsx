import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"
import WebLayout from "./layout/WebLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import TwClasses from "./pages/TwClasses";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminProducts from "./pages/Admin/AdminProducts";
import Products from "./pages/Products";
// import {} from 'react'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About"  element={<About />} />
            <Route path='/temp' element={<TwClasses />} />
            {/* <Route path='/temp' element={<TwClasses />} /> */}
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/users" element={<AdminUsers />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
