import api from "../api/api";

const appUserService = {
  register: async (username, password, employeeId = null) => {
    try {
      const payload = {
        username,
        password,
      };
      if (employeeId) {
        payload.employeeId = employeeId;  // Only include employeeId if provided
      }
      const response = await api.post('/api/v1/applicationUsers', payload);
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;  // Re-throw the error to be handled by the calling function
    }
  },

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
