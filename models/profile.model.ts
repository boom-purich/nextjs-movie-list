import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

export class ImageProfile {
    isOpenCropModal:boolean;
    saveUploadCropImage:any;
    cancelUploadProfile:any;
    uploadImage:any;
    cropper:any;
    setCropper:any;
}

export class Profile {
    username:string;
    firstname:string;
    lastname:string;
}

export class UpdateProfileStatus {
    isOpenSnackbar:boolean = false;
    isUpdateSuccess:boolean = false;
    message:string = 'Test Message';
}

export const SettingProfileSchema = yup.object({
    username: yup.string().min(1,'Please fill username.').required('Please fill username.'),
    firstname: yup.string().min(1,'Please fill firstname.').required('Please fill firstname.'),
    lastname: yup.string().min(1,'Please fill lastname.').required('Please fill lastname.')
});

export class User {
    id: string;
    email?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    method?:string;
    img_url?: any;
    like_movies?: Array<string>;
    love_movies?: Array<string>;

    constructor() {
        this.id = '';
        this.email = '';
        this.password = '';
        this.first_name = '';
        this.last_name = '';
        this.method = '';
        this.img_url = '';
        this.like_movies = [];
        this.love_movies = [];
    }
}