import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditForm = ({ isOpen, onClose, customer, onSuccess }) => {
  const [form, setForm] = useState({
    full_name: '',
    phone_number: '',
    national_id: '',
    address: '',
    product_installed: '',
    payment_schedule: '',
    customer_status: '',
  });

  
  useEffect(() => {
    if (customer) {
      setForm({
        full_name: customer.full_name || '',
        phone_number: customer.phone_number || '',
        national_id: customer.national_id || '',
        address: customer.address || '',
        product_installed: customer.product_installed || '',
        payment_schedule: customer.payment_schedule || '',
        customer_status: customer.customer_status || '',
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/customers/updateCustomer/${customer.customer_id}`,
        form
      );

      onSuccess(); 
      onClose();   
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Customer</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key.replace('_', ' ')}
              className="w-full p-2 border rounded"
            />
          ))}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;