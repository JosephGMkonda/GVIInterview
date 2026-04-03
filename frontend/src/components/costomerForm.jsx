import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = ({ isOpen, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    full_name: '',
    phone_number: '',
    national_id: '',
    address: '',
    product_installed: '',
    payment_schedule: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:5000/api/customers/createCustomer',
        form
      );

      onSuccess(); 
      onClose();   

    
      setForm({
        full_name: '',
        phone_number: '',
        national_id: '',
        address: '',
        product_installed: '',
        payment_schedule: '',
      });

    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Customer</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key.replace('_', ' ')}
              className="w-full p-2 border rounded"
              required={key !== 'address'}
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;