
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';  
import About from './About';  
import Contact from './Contact';  

export const router = createBrowserRouter([
  {
    path: "/",  
    element: <HomePage />,
  },
  {
    path: "/about",  
    element: <About />,
  },
  {
    path: "/contact", 
    element: <Contact />,
  },
]);
