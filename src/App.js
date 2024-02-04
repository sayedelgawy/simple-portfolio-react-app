//import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

import './App.css';
const routers = createBrowserRouter([{
  path:'',
  element:<Layout/>,
  children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'portfolio',
      element:<Portfolio/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'*',
      element:<NotFound/>
    }
    
  ]
}]);



function App() {
  
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  );
}

export default App;
