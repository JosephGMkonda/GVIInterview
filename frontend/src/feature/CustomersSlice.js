import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from "../api/axiosInstance.js";


export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    const res = await api.get('customers/getAllCustomers');
    console.log('Fetched customers:', res.data);
    return res.data; 
  }
);


export const addCustomer = createAsyncThunk(
  'customers/addCustomer',
  async (customerData) => {
    const res = await api.post('/customers/createCustomer', customerData);
    return res.data;
  }
);


export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id) => {
    await api.delete(`/customers/deleteCustomer/${id}`);
    return id;
  }
);

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload; 
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.list = state.list.filter(c => c.customer_id !== action.payload);
      });
  },
});

export default customerSlice.reducer;