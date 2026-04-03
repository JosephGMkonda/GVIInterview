import Customer from "../models/Customers.js";
import  generateCustomerId  from "../middlewares/generateCustomerId.js"

export const createCustomer = async (customerData) => {
    try {
        let customerId;
        let exists = true;

        while (exists) {
            customerId = generateCustomerId();
            const existingCustomer = await Customer.findOne({ where: { customer_id: customerId } });
            exists = !!existingCustomer;
        }
        
        const customer = await Customer.create({ ...customerData, customer_id: customerId });
        return customer
    } catch (error) {
        throw error;
        
    }
}

export const getAllCustomers = async () => {
    try {
        const customers = await Customer.findAll();
        return customers;
    } catch (error) {
        throw error;
    }
}

export const getCustomerById = async (id) => {
    try {
        const customer = await Customer.findByPk(id);
        return customer;
    } catch (error) {
        throw error;
    }
}

export const updateCustomer = async (id, customerData) => {
    try {
        const customer = await Customer.findByPk(id);

        if(!customer){
            return null;
        }
        await customer.update(customerData);
        return customer;
    } catch (error) {
        throw error;
    }
}

export const deleteCustomer = async (id) => {
    try{
        const customer = await Customer.findByPk(id);

        if(!customer){
            return null;
        }
        await customer.destroy();
        return customer;
    } catch (error) {
        throw error;
    }
}
