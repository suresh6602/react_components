import { headerWithToken } from '../../api';

export const Changelanguage = async (data) => {
    const response = await headerWithToken.post('/user/updateLanguage', data);
    return response;
};
