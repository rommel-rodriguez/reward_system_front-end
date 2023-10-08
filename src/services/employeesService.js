import api from "../api/api";
import { rawApi } from "../api/api";

const employeesService = {
  registerDetail: async (saleId, productId, amount) => {
  },

  registerDetails: async (details) => {
  },

  getEmployees: async (saleId) => {
    try {
      const response = await api.get(`/api/v1/sales/${saleId}/details`);
      return response;
    } catch (error) {
      console.error('Get user failed:', error);
      throw error;
    }
  },

  getEmployeesManagedEmployees: async (managerId) => {
    try {
      const response = await api.get(`/api/v1/managers/${managerId}/managedEmployees`);
      const data = response.data;
      const sellers = data._embedded.sellers;
      const managedEmployees = sellers.map(
        (seller) => {
            return (
                {
                    documentType: seller.person.documentType,
                    documentNumber: seller.person.documentNumber,
                    lastName: seller.person.lastName,
                    firstName: seller.person.firstName,
                    cellPhoneNumber: seller.person.cellPhoneNumber,
                    monthlyGoals: seller.monthlyGoals,
                    selfLink: seller._links.self.href,
                    salesLink: seller._links.sales.href,
                }
            );
        }
      );
      return managedEmployees;
    } catch (error) {
      console.error('Get Managed Employees Failed:', error);
      throw error;
    }
  },
// Define a function to filter and transform managed employees
  filterAndTransformManagedEmployees: (managedEmployees, targetMonth, targetYear) => {
        return managedEmployees
            .filter((employee) =>
                employee.monthlyGoals.some(
                    (goal) => goal.month === targetMonth && goal.year === targetYear
                )
            )
            .map((employee) => {
                const matchingGoal = employee.monthlyGoals.find(
                    (goal) => goal.month === targetMonth && goal.year === targetYear
                );

                return {
                    documentType: employee.documentType,
                    documentNumber: employee.documentNumber,
                    lastName: employee.lastName,
                    firstName: employee.firstName,
                    cellPhoneNumber: employee.cellPhoneNumber,
                    monthlyGoal: matchingGoal,
                    progress: matchingGoal.progress,
                    selfLink: employee.selfLink,
                    salesLink: employee.salesLink,
                };
            });
    },

    extractUniqueMonthsAndYears: (managedEmployees) => {
        const uniqueMonthsAndYears = [];

        managedEmployees.forEach((employee) => {
            employee.monthlyGoals.forEach((goal) => {
            const { month, year } = goal;

            // Check if the { month, year } object is already in the unique list
            const isDuplicate = uniqueMonthsAndYears.some(
                (uniqueObj) => uniqueObj.month === month && uniqueObj.year === year
            );

            // If not a duplicate, add it to the list
            if (!isDuplicate) {
                uniqueMonthsAndYears.push({ month, year });
            }
            });
        });

        return uniqueMonthsAndYears;
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

export default employeesService;
