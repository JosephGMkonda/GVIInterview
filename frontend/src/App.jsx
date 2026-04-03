import React from 'react';
import CustomerForm from '../src/components/costomerForm.jsx'
import CustomerList from '../src/components/CustomerList.jsx';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">PAYG CRM</h1>
        <p className="text-gray-600 mt-2">Manage your customers easily</p>
      </header>

      
      <main className="max-w-4xl mx-auto space-y-6">
    
        

      
        <CustomerList />
      </main>
    </div>
  );
};

export default Home;