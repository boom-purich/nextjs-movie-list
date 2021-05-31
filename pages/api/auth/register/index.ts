import axios from 'axios';
import { responseMapping, errorFireBaseMapping } from 'utils/responseMapping';
import { HashService } from 'utils/hashService';
import initFirebase from '../../../../firebase/initFirebase';
import firebase from 'firebase/app';
import { User } from 'models/profile.model';

const registerHandler = async (req, res) => {

    if (req.method === 'POST') {
        try {
            initFirebase();
            let cloneFilter: any = {};
            Object.keys(req.body).map(key => cloneFilter[key] = req.body[key]);
            let response: any = {};
            const newUser = new User();
            newUser.method = cloneFilter?.method;
            if (cloneFilter.method && cloneFilter?.method !== 'email') {
                newUser.id = cloneFilter?.id;
            } else {
                // const hashService = new HashService(cloneFilter?.password);
                // const hashedPassword = hashService.hashingPlainText();
                newUser.email = cloneFilter.email;
                newUser.password = cloneFilter.password;
                response = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
                const { user } = response;
                // console.log('User : ',user);
                if (user) {
                    await firebase.firestore().collection('users').doc(user.uid).set({
                        id: user.uid,
                        email: newUser.email,
                        first_name: newUser.first_name,
                        last_name: newUser.last_name,
                        img_url: newUser.img_url,
                        like_movies: newUser.like_movies,
                        love_movies: newUser.love_movies
                    })
                    res.status(200).json({ user });
                }

            }

        } catch (error) {
            const errorResponse = errorFireBaseMapping(error);
            res.status(500).json(errorResponse);
        }
    }
}

export default registerHandler;