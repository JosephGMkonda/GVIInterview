import { createCustomer, getAllCustomers, deleteCustomer, getCustomerById, updateCustomer } from "../services/CustomerServices.js";

export const createCustomerController = async (req, res, next) => {
  try {
    const customer = await createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    next(error); 
  }
};


export const getAllCustomersController = async (req, res, next) => {
  try {
    const customers = await getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};


export const getCustomerByIdController = async (req, res, next) => {
  try {
    const customer = await getCustomerById(req.params.id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(customer); 
  } catch (error) {
    next(error);
  }
};


export const updateCustomerController = async (req, res, next) => {
  try {
    const customer = await updateCustomer(req.params.id, req.body);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};


export const deleteCustomerController = async (req, res, next) => {
  try {
    const customer = await deleteCustomer(req.params.id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    next(error);
  }
};