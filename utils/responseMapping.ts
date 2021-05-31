import * as _ from 'lodash';
import { Response } from 'models/response.model';

const responseMapping = (data?:any):Response => {
    return {
        resultCode:_.isEmpty(data) ? '40400' : '20000',
        resultData:data,
        resultDescription:_.isEmpty(data) ? 'Not Found' : 'Success'
    }
}

const errorFireBaseMapping = (error?:any):Response => {
    return {
        resultCode: '50000',
        resultData: error?.code,
        resultDescription: error?.message,
    }
}

export {responseMapping,errorFireBaseMapping};