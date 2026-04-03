import { Router } from "express";
import {createCustomerController,getAllCustomersController,getCustomerByIdController,deleteCustomerController,updateCustomerController } from "../controllers/Customer.controller.js"

const customerRouter = Router();

customerRouter.post('/createCustomer', createCustomerController);
customerRouter.get('/getAllCustomers', getAllCustomersController);
customerRouter.get('/getCustomerById/:id', getCustomerByIdController);
customerRouter.put('/updateCustomer/:id', updateCustomerController);
customerRouter.delete('/deleteCustomer/:id', deleteCustomerController);

export default customerRouter;