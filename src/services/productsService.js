import api from "../api/api";

const productsService = {
  register: async (saleId, productId, amount) => {
    try {
      const payload = {
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


  getProducts: async () => {
    try {
      const response = await api.get(`/api/v1/financialProducts`);
      return response.data;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },

  getProductIdsAndNames: async () => {
    try {
      const response = await productsService.getProducts();
      const products = response._embedded.financialProducts;
      const idsAndNames =  products.map((product) => {
        const parts = (product._links.self.href).split('/');
        const id = parseInt(parts[parts.length - 1]);
        const name = product.name;

        return { name, id };
      });

      return idsAndNames;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },

  getProductsById: async (productId) => {
    try {
      const response = await api.get(`/api/v1/financialProducts/${productId}`);
      return response;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },
};

export default productsService;
