import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import Customers from './screens/Customers';
import HistoryNotes from './screens/HistoryNotes';
import Category from './screens/Category';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/mynotes" element={<MyNotes />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/history" element={<HistoryNotes />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
