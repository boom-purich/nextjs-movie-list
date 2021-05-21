import * as _ from 'lodash';
import { Response } from 'models/response.model';

const responseMapping = (data?:any):Response => {
    return {
        resultCode:_.isEmpty(data) ? '40400' : '20000',
        resultData:data,
        resultDescription:_.isEmpty(data) ? 'Not Found' : 'Success'
    }
}

export default responseMapping;