import * as type from '../types';

export const getUser = (user) => {
    return {
        type: type.GET_USER,
        payload:user,
    }
}