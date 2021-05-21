import * as type from '../types'
// import { User } from 'models/authentication.model';

const user = (state = {}, action) => {

    switch (action.type) {
        case type.GET_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {};
    }

}

export default user;