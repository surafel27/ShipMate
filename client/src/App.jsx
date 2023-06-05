import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx";
import Identity from "./pages/Identity.jsx";
import SenderDashboard from "./pages/sender/Dashboard.jsx";
import TravellerDashboard from "./pages/traveller/Dashboard.jsx";

const SenderIdentity = Identity.sender;
const TravellerIdentity = Identity.traveller;
const SignupTraveller = SignUp.signUptraveller;
const SignupSender = SignUp.signUpsender;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/account/login",
    element: <Login />
  },
  {
    path: "/account/traveller/signupTraveller",
    element: <SignupTraveller />
  },
  {
    path: "/account/sender/signupSender",
    element: <SignupSender />
  },
  {
    path: "/account/Identity/sender",
    element: <SenderIdentity />
  },
  {
    path: "/account/Identity/traveller",
    element: <TravellerIdentity />
  },
  {
    path: "/user/account/traveller/dashboard",
    element: <TravellerDashboard />
  },
  {
    path: "/user/account/sender/dashboard",
    element: <SenderDashboard />
  }

]);


function App() {
  return (
    <div className="app">
        <div className="container">
             <RouterProvider router={router} />
        </div>
  </div>
  );
}
export default App;
