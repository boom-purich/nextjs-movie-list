import * as yup from 'yup';

export class RegisterField {
    email:string = '';
    password:string = '';
    confirmPassword:string = '';
}

export class LoginField {
    email:string = '';
    password:string = '';
}

export const LoginSchema = yup.object({
    email:yup.string().email('Please fill e-mail correctly.').required('Please fill e-mail complete.'),
    password:yup.string().required('Please fill password.')
})

export const RegisterSchema = yup.object({
    email:yup.string().email('Please fill e-mail correctly.').required('Please fill e-mail complete.'),
    password: yup.string().required('Please fill password (8-12 character).')
                .min(8,'Please fill password (8-12 character).')
                .max(12,'Please fill password (8-12 character)'),
    confirmPassword: yup.string().required('Please fill confirm password.').oneOf([yup.ref('password'),null],'Password not match.'),
})

