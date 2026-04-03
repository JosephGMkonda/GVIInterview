import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerForm from './costomerForm.jsx';
import EditForm from './editForm.jsx';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(false);


  
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/customers/getAllCustomers');
      console.log("API DATA:", res.data); 
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

    const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setShowEditModal(true);
  };


  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/deleteCustomer/${id}`);
      fetchCustomers();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading customers...</p>;
  }

  return (
    <div className="overflow-x-auto">

            <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Customers</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Customer
        </button>
      </div>


      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="text-left py-3 px-4">Customer ID</th>
            <th className="text-left py-3 px-4">Full Name</th>
            <th className="text-left py-3 px-4">Phone</th>
            <th className="text-left py-3 px-4">Product</th>
            <th className="text-left py-3 px-4">Payment Schedule</th>
            <th className="text-left py-3 px-4">Status</th>
            
            <th className="text-center py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((c) => (
              <tr key={c.customer_id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{c.customer_id}</td>
                <td className="py-2 px-4">{c.full_name}</td>
                <td className="py-2 px-4">{c.phone_number}</td>
                <td className="py-2 px-4">{c.product_installed}</td>
                <td className="py-2 px-4">{c.payment_schedule}</td>

                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    c.customer_status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {c.customer_status}
                  </span>
                </td>
                <td className="py-2 px-4 flex justify-center space-x-2">
                   <button
                    onClick={() => handleEdit(c)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(c.customer_id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 text-gray-500">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <CustomerForm
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={fetchCustomers}
      />

        <EditForm
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        customer={selectedCustomer}
        onSuccess={fetchCustomers}
      />

    </div>
  );
};

export default CustomerList;