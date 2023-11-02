import api from "../api/api";

const appUserService = {
  /**
   * NOTE: Register user, as well as password updates (maybe), should not be
   * handled here, because user create/register must pass by the 
   * /v1/auth/signup endpoint in order for they data to pass the proper
   * procedure. Else, they passwords might not get encrypted in for database
   * storage.
   */

  getUser: async (username) => {
    try {
      const response = await api.get(`/api/v1/applicationUsers/${username}`);
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

export default appUserService;
