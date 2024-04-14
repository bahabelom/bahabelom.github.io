import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Header from './Compoents/Header';
import AppRoutes from './Compoents/AppRoutes ';
import Footer from './Compoents/Footer';
import Banner from './Compoents/Banner';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Header className="h-24 bg-gray-800 py-4 text-white flex justify-between items-center px-4">
        </Header>
        <div className="mt-16"> {/* Add margin-top to create space */}
          <Banner />
        </div>
        <main className="min-h-screen mx-auto px-4 pb-14">  {/* Reduced padding for closer content */}
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
