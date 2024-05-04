import { useQuery } from 'react-query';
import { headerWithToken, tokenExpires } from '../../api';

export const getNurse = (pageNo, pageSize, value) => {
    return useQuery({
        queryKey: ['getNurse', pageNo, pageSize, value],
        queryFn: async () => {
            try {
                await tokenExpires();

                const SearchUrl = `/admin/getAllUser?pageNo=${pageNo + 1}&pageSize=${pageSize}&search=${value}`;
                const PaginatonUrl = `/admin/getAllUser?pageNo=${pageNo + 1}&pageSize=${pageSize}`;


                const response = await headerWithToken.get(value == '' ? PaginatonUrl : SearchUrl);
                return response.data;
            } catch (response) {
                return response?.response?.data;
            }
        },
    });
};