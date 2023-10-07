import api from "../api/api";

const saleDetailsService = {
  registerDetail: async (saleId, productId, amount) => {
    try {
      const payload = {
          // "product": `/api/v1/financialProducts/${productId}`,
          "saleId": saleId,
          "product": `/api/v1/financialProducts/${productId}`,
          "amount": amount
      }

      const response = await api.post('/api/v1/saleDetails', payload);
      return response;
    } catch (error) {
      console.error('Failed to register the sale: ', error);
      throw error;  // Re-throw the error to be handled by the calling function
    }
  },

  registerDetails: async (details) => {
    /**
     * Here we assume details is an array of {saleId, productId, amount}
     * objects
     */
    try {
      // NOTE: This part is tricky, review if there is a problem
      const responses = await details.map(
        async (detail) => {
          return await saleDetailsService.registerDetail(
            detail.saleId,
            detail.productId,
            detail.amount
          );
        }
      );
      // const response = await api.post('/api/v1/saleDetails', payload);
      // return response;
    } catch (error) {
      console.error('Failed to register the sale: ', error);
      throw error;  // Re-throw the error to be handled by the calling function
    }
  },

  getDetails: async (saleId) => {
    try {
      const response = await api.get(`/api/v1/sales/${saleId}/details`);
      return response;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },

  updateDetail: async (saleId, updatedData) => {
    // try {
    //   const response = await api.put(`/api/v1/users/${username}`, updatedData);
    //   return response;
    // } catch (error) {
    //   console.error('Update user failed:', error);
    //   throw error;
    // }
  },

  deleteDetail: async (saleId, productId) => {
  },
};

export default saleDetailsService;
