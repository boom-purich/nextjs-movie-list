import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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
        this.id = uuidv4();
        this.email = '';
        this.password = '';
        this.first_name = '';
        this.last_name = '';
        this.method = '';
        this.img_url = '';
        this.like_movies = [];
        this.love_movies = [];
    }

    async createUserWithEmailPasswordMethod() {
        let registerStatus: any = { success: false, message: '' };

        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            console.log('Response : ', response);
            if (response && response.user) {
                this.id = response.user.uid;
                await firebase.firestore().collection('users').doc(this.id).set({
                    id: this.id,
                    email: this.email,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    img_url: this.img_url,
                    like_movies: this.like_movies,
                    love_movies: this.love_movies
                });
                registerStatus.message = 'Register Success';
                registerStatus.success = true;
            }

        } catch (error) {
            registerStatus.message = error.message;
            registerStatus.success = false;
        }
        return registerStatus;
    }

    async createUserWithAnotherMethod() {
        let isCreateSuccess: boolean = false;
        try {
            await firebase.firestore().collection('users').doc(this.id).set({
                id: this.id,
                email: this.email,
                first_name: this.first_name,
                last_name: this.last_name,
                img_url: this.img_url,
                like_movies: this.like_movies,
                love_movies: this.love_movies
            });
            isCreateSuccess = true;
            console.log('Is Success here : ', isCreateSuccess);
        } catch (error) {
            isCreateSuccess = false;
        }
        return isCreateSuccess;
    }

    editUser(id: string, editInfo: any) {

    }

    editImageUrl(id: string, newImageData: any) {

    }
}
