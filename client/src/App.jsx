import './App.css'


import {Route, Router, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './Layout';
import axios from "axios";
import { UserContextProvider } from './UserContext.jsx';
import ProfilePage from './pages/ProfilePage';
import PublocksPage from './pages/PublocksPage';
import PublockFormPage from './pages/PublockFormPage';
import PublockPage from './pages/PublockPage';
import BookingPage from './pages/BookingPage';
import BookingsPage from './pages/BookingsPage';
import UserBookings from './pages/UserBookings';
import SearchBookings from './pages/SearchBookings';
import WalletUserPage from './pages/WalletUserPage';
import StoresPage from './pages/StoresPage';
import CreateStore from './pages/CreateStore';
import RedeemPage from './pages/RedeemPage';
import AuditPage from './pages/AuditPage';
import StorePage from './pages/StorePage'; 
import ListingPage from './pages/ListingPage';
import ListsPage from './pages/ListsPage';
import OrdersPage from './pages/OrdersPage';
import TagCreationPage from './pages/TagCreationPage';
import WrapExistingNFT from './pages/WrapExistingNFT';
import Footer from './Footer';
import { useConnect, useAccount} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  // We Want to add this <Route path="/store/:id" element={<StorePage isConnected={isConnected} address={address}/>} />

  //we may need to add wagmi hooks to some of these we cant to the header because its not in here for some reason
  return (
    <UserContextProvider>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage isConnected={isConnected} address={address}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchBookings isConnected={isConnected} address={address}/>} />
        <Route path="/account" element={<ProfilePage isConnected={isConnected} address={address}/>} />
        <Route path="/useraccount" element={<WalletUserPage isConnected={isConnected} address={address}/>} />
        <Route path="/useraccount/stores" element={<StoresPage isConnected={isConnected} address={address}/>} />
        <Route path="/createstore/new" element={<CreateStore isConnected={isConnected} address={address}/>} />
        <Route path="/useraccount/userbooking" element={<UserBookings isConnected={isConnected} address={address}/>} />
        <Route path="/account/publocks" element={<PublocksPage isConnected={isConnected} address={address}/>} />
        <Route path="/account/publocks/new" element={<PublockFormPage isConnected={isConnected} address={address}/>} />
        <Route path="/account/publocks/:id" element={<PublockFormPage isConnected={isConnected} address={address}/>} />
        <Route path="/publock/:id" element={<PublockPage isConnected={isConnected} address={address}/>} />
        <Route path="/account/bookings" element={<BookingsPage isConnected={isConnected} address={address}/>} />
        <Route path="/account/bookings/:id" element={<BookingPage isConnected={isConnected} address={address}/>} />
        <Route path="/redeem" element={<RedeemPage isConnected={isConnected} address={address}/>} />
        <Route path="/audit" element={<AuditPage isConnected={isConnected} address={address}/>} />
        <Route path="/footer" element={<Footer isConnected={isConnected} address={address}/>} />
        <Route path="/store" element={<StorePage isConnected={isConnected} address={address}/>} />
        <Route path="/listing" element={<ListingPage isConnected={isConnected} address={address}/>} />
        <Route path="/lists/userlists" element={<ListsPage isConnected={isConnected} address={address}/>} />
        <Route path="/orders/userorders" element={<OrdersPage isConnected={isConnected} address={address}/>} />
        <Route path="/tagcreation/new" element={<TagCreationPage isConnected={isConnected} address={address}/>} />
        <Route path="/wrapexistingnft/new" element={<WrapExistingNFT isConnected={isConnected} address={address}/>} />
      </Route>
    </Routes>  
    </UserContextProvider>
  )
}

export default App
