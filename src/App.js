
import ToApp from "./ToApp/ToApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Out from "./Outlet/Out";
import About from "./Pages/About/About";
import Faq from "./Pages/Faq/Faq";
import Terms from "./Pages/Terms/Terms";
import Contact from "./Pages/Contact/Contact";
import BecomeAgent from "./Pages/BeComeAn/BecomeAgent";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Out />,

    children: [
      {
        path: '/',
        element: <ToApp />
      },
      {
        path:'/About',
        element: <About />
      },
      {
        path:'/BecomeAnAgent',
        element: <BecomeAgent />
      },
      {
        path:'/ContactUs',
        element: <Contact />
      },
      {
        path:'/Faq',
        element: <Faq />
      },
      {
        path:'/Terms',
        element: <Terms />
      },
    ]
  }
])



//color rgba = #ff7b24
function App() {
  return <RouterProvider router={router} />
}

export default App;