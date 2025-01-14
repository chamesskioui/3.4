import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productlist from './Components/Productlist';
import Carouselle from './Components/Carousel';
import { Route, Routes } from 'react-router-dom';
import Allproducts from './Components/Allproducts';
import Singleproduct from './Components/Singleproduct';
import ChocolatsMacarons from './Components/Chocolats&Macarons';
import Testimonial from './Components/Testimonial';
import AdminProduct from './Components/Admin/AdminProduct';
import Dashboard from './Components/Admin/Dashboard';

function App() {
  return (
   <div style={{background:"#E6E6E6"}}>

<Header/>
<Routes>
  <Route path='/' element={
    <div>
<Carouselle/>
<Productlist/>



    </div>
    }/>
<Route path='/products' element={<Allproducts/>}/>
<Route path='/product/:id' element={<Singleproduct/>}/>
<Route path= '/Chocolats' element={<ChocolatsMacarons/>}/>
<Route path='/admin' element={<Dashboard/>}>
<Route index element={<AdminProduct/>}/>
</Route>
</Routes>


<Testimonial/>
<Footer/>


   </div>


  );
}

export default App;
