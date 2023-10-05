import api from "../api/api";

const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/api/v1/auth/signin', {
        username,
        password,
      });
      
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return response;
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
  },

  isTokenValid: async () => {
    console.log("Inside isTokenValid")
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      const response = await api.get('/api/v1/me');
      return response.status === 200;
    } catch (error) {
      console.error('Token validation failed:', error);
      return false;
    }
  },
}

export default authService;