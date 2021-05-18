import * as yup from 'yup';

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