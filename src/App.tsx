import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { fetchUsers } from './api/userApi';
import { User } from './types/User';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Register from "../Register";
import LoginPage from './LoginPage';
import Header from './components/header';
import SearchResults from './components/SearchResult';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Collection from './components/Collection';
import PaintingDisplay from './components/PaintingDisplay';
import ContentSection from './components/ContentSection';
//import QuizButton from '../components/QuizButton';//
import 'bootstrap/dist/css/bootstrap.min.css';


// Komponen untuk Daftar Pengguna
// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchUsers();
//         setUsers(data);
//       } catch (err) {
//         setError('Failed to fetch users');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Daftar Pengguna</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Register />
//     </div>
//   );
// }



// Komponen LandingPage
const LandingPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

// Komponen Koleksi Lengkap
const GalerryLengkap: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Collection />
      <PaintingDisplay />
      <Footer />
    </div>
  );
};

// Komponen Tentang
const Tentang: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

// Komponen Quiz
const Potato: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ContentSection />
      <Footer />
    </div>
  );
};

// Komponen Utama
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/koleksi" element={<GalerryLengkap />} />
        <Route path="/about" element={<Tentang />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/penjelasan" element={<Potato />} />
        {/* <Route path="*" element={<div>404 - Page Not Found</div>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
