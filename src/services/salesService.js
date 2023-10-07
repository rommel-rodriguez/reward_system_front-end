import api from "../api/api";
import saleDetailsService from "./saleDetailsService";

const salesService = {
  register: async (sellerId, clientId, productId, date, amount) => {
    try {
      const payload = {
        "seller": `/api/v1/sellers/${sellerId}`,
        "customer": `/api/v1/customers/${clientId}`,
        "date": date,
        // "details": [
        //   {
        //     // "product": `/api/v1/financialProducts/${productId}`,
        //     "product": "/api/v1/financialProducts/4",
        //     "amount": amount
        //   },
        // ]
      }

      const response = await api.post('/api/v1/sales', payload);
      // NOTE: If we reach this point that means the sale register went through
      // Now, we have to register the details
      // NOTE: How do I get the saleId?
      // saleDetailsService.registerDetail();

      // const saleUrlParts = response.data._links.self.href.split('/');
      const saleUrlParts = (response.data._links.self.href).split('/');
      // let url = response._links.self.href;

      const saleId = parseFloat(saleUrlParts[saleUrlParts.length - 1]);
      // console.log("[DEBUG] salesService id: ", saleId);
      const detailRsp = await saleDetailsService.registerDetail(saleId, productId, amount);

      //TODO: Register Sale Details here

      return response;
    } catch (error) {
      console.error('Failed to register the sale: ', error);
      throw error;  // Re-throw the error to be handled by the calling function
    }
  },

  getUser: async (username) => {
    try {
      const response = await api.get(`/api/v1/sales/${username}`);
      return response;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },

  updateUser: async (username, updatedData) => {
    try {
      const response = await api.put(`/api/v1/users/${username}`, updatedData);
      return response;
    } catch (error) {
      console.error('Update user failed:', error);
      throw error;
    }
  },

  deleteUser: async (username) => {
    try {
      const response = await api.delete(`/api/v1/users/${username}`);
      return response;
    } catch (error) {
      console.error('Delete user failed:', error);
      throw error;
    }
  },
};

export default salesService;
