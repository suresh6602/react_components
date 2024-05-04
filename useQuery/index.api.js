import { useQuery } from "react-query";
import { headerWithToken, tokenExpires } from "../api";

export const getDashboardDetails = () => {
    return useQuery({
        queryKey: ['dashboardapi'],
        queryFn: async () => {
            try {
                await tokenExpires();
                const response = await headerWithToken.get('/admin/getData');
                const result = await response?.data?.responseObj?.responseDataParams?.data;
                return result;
            } catch (response) {
                return response;
            }
        },
    });
};