import api from "../api/api";
import { rawApi } from "../api/api";

const customerService = {

  register: async (documentType, documentNumber, lastName, firstName, cellPhoneNumber) => {
    try {
      const payload = {
        person: {
          documentType,
          documentNumber,
          lastName,
          firstName,
          cellPhoneNumber,
        },
      }

      const response = await api.post('/api/v1/customers', payload);
      return response.data;
    } catch (error) {
      console.error('Failed to register the sale: ', error);
      throw error;  // Re-throw the error to be handled by the calling function
    }
  },

  getCustomerOptions: async () => {
    try {
      const response = await api.get("/api/v1/customers");
      const customers = response.data._embedded.customers;
      const customerOptions =  customers.map((customer) => {
        const parts = (customer._links.self.href).split('/');
        const id = parseInt(parts[parts.length - 1]);
        const fullName = `${customer.person.firstName} ${customer.person.lastName}`;

        return { fullName, id };
      });
      return customerOptions;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },
  constructCustomerOptions: (customers) => {
      const customerOptions =  customers.map((customer) => {
        const parts = (customer._links.self.href).split('/');
        const id = parseInt(parts[parts.length - 1]);
        const fullName = `${customer.person.firstName} ${customer.person.lastName}`;

        return { fullName, id };
      });
      return customerOptions;
  },

};

export default customerService;
