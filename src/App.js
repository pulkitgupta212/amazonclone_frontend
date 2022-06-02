    import Login1 from './Pages/Login/login1';
    import Login from './Pages/Login/login';
  import { useRoutes } from 'react-router';

  import Homemain from './Pages/Home/homemain';
  import Signup from './Pages/Signup/signup';
//import Cart from './Component/cart';
//import Cart from './Component/cart';
//import History from './Pages/History/history';
import Product from './Pages/Product/product';
import ShoppingCart from './Component/Shopping';
//import Cardshow from './component/cardshow';




function App() {
  

const routes = useRoutes([
  {
    path:'/',element:<Homemain/>
  },
  {
    path:'/signup',element:<Signup/>
   },
  {
   path:'/login',element:<Login/>
  },
  {
    path:'/login1',element:<Login1/>
  },
  {
    path:'/product',element:<Product/>
  },
  {
    path:'/shoppingCart',element:<ShoppingCart/>
  }
])


  return routes;
    
}
  
//  return(
//      <>
//      <div style={{overflow:"auto",height:"100vh"}}>
//      <History/>
//      </div>
//    </>
//  )}



export default App;  


