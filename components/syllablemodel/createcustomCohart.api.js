// eslint-disable-next-line quotes
import { headerWithToken } from '../../api';

export const createCustomCohort = async (data) => {
    const response = await headerWithToken.post('/teacher/createCustomCohort', data);
    return response;
};
