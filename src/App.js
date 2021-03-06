import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menubar from './Shared/Menubar/Menubar';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Contact from './Pages/Contact/Contact';
import Order from './Pages/Order/Order';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Error from './Pages/Error/Error';
import MyOrders from './Pages/MyOrders/MyOrders';
import AddService from './Pages/AddService/AddService';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Menubar/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>          
          <PrivateRoute exact path='/order/:id'>
            <Order></Order>
          </PrivateRoute>
          <Route exact path ='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path ='/manageOrders'>
            <ManageOrders></ManageOrders>
          </Route>
          <Route exact path ='/addService'>
            <AddService></AddService>
          </Route>
          <Route exact path ='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
