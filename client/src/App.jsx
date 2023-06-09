import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx";
import Identity from "./pages/Identity.jsx";
import SenderDashboard from "./pages/sender/Dashboard.jsx";
import TravellerDashboard from "./pages/traveller/Dashboard.jsx";
import PhoneIdentity from "./pages/PhoneVerification.jsx"
import Indexsender from "./pages/sender/Index.jsx"
import Indextraveller from "./pages/traveller/Index.jsx"
import Subscribe from "./components/Subscribe.jsx";
import SinglePackage from "./pages/sender/SinglePost.jsx";
import MyPackage from "./pages/sender/AllPackage.jsx";
import Checkout from "./pages/sender/MyProfile.jsx";

const SenderIdentity = Identity.sender;
const TravellerIdentity = Identity.traveller;
const SignupTraveller = SignUp.signUptraveller;
const SignupSender = SignUp.signUpsender;
const SenderMobileIdentity = PhoneIdentity.sender;
const TravellerMobileIdentity = PhoneIdentity.traveller;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Subscribe />
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
  },
  {
    path: "/user/account/sender/mobile/verify",
    element: <SenderMobileIdentity />
  },
  {
    path: "/user/account/traveller/mobile/verify",
    element: <TravellerMobileIdentity />
  },
  {
    path: "/personal",
    element: <Indexsender />
  },
  {
    path: "/traveller",
    element: <Indextraveller />
  },
  {
    path: "/package/:packageId",
    element: <SinglePackage />
  },
  {
    path: "/package/my_packages",
    element: <MyPackage />
  },
  {
    path: "/account/myprofile",
    element: <Checkout />
  },

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
