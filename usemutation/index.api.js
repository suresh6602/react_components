import { headerWithToken } from '../../api';

export const login = async (data) => {
	const response = await headerWithToken.post('/user/login', data);
	return response;
};