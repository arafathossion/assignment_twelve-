import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import SignIn from './Pages/Authentication/SignIn';
import SignUp from './Pages/Authentication/SignUp';
import Privite from './Pages/Private/Private'
import RequireAuth from './Components/RequireAuth';
import Manufacturer_Tool from './Pages/Home/Manufacturer_Tool';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/DashBoard/MyOrder';
import MyReview from './Pages/DashBoard/MyReviews';
import MyProfile from './Pages/DashBoard/MyProfile';
import AllUsers from './Pages/DashBoard/AllUsers';
import AllOrders from './Pages/DashBoard/AllOrders';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './fierbase.init';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import RequireNotAdmin from './Pages/Authentication/RequireNotAdmin';
import AddProduct from './Pages/DashBoard/AddProduct';
import Payment from './Pages/DashBoard/Payment';
import SingleBlog from './Pages/Home/SingleBlog'
import UpdateProfile from './Pages/DashBoard/UpdateProfile';
import AddProfile from './Pages/DashBoard/AddProfile';



function App() {
  const [user] = useAuthState(auth)
  const { refetch } = useQuery();
  if (user) {
    refetch()
  }
  return (
    <div>

      <Routes>
        <Route path='/' element={
          <Header>

          </Header>
        }>

          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }></Route>
          <Route path='/singleTool/:_id' element={
            <RequireAuth>
              <Manufacturer_Tool></Manufacturer_Tool>
            </RequireAuth>
          }></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/signIn' element={<SignIn></SignIn>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>

          <Route path='/blog/:id' element={<SingleBlog></SingleBlog>}></Route>


          <Route path='/addprofile/:email' element={<AddProfile />}></Route>

          <Route path='/updateprifile/:email' element={<UpdateProfile />}></Route>

          <Route path='/dashboard' element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }>
            <Route path='/dashboard/myorder' element={
              <RequireNotAdmin>
                <MyOrder></MyOrder>
              </RequireNotAdmin>
            }></Route>
            <Route path='/dashboard/myreview' element={
              <RequireNotAdmin>
                <MyReview></MyReview>
              </RequireNotAdmin>
            }></Route>
            <Route path='/dashboard/allusers' element={
              <RequireAdmin>

                <AllUsers></AllUsers>
              </RequireAdmin>

            }></Route>
            <Route path='/dashboard/allorder' element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }></Route>

            <Route path='/dashboard/addproduct' element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }></Route>
            <Route path='/dashboard/payment/:id' element={
              <RequireNotAdmin>
                <Payment></Payment>
              </RequireNotAdmin>
            }></Route>
            <Route index element={<MyProfile></MyProfile>}></Route>


          </Route>
          <Route path='/private' element={<Privite></Privite>}></Route>



        </Route>
      </Routes>
    </div>
  );
}

export default App;
