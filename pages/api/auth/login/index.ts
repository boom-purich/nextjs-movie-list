import firebase from 'firebase/app';
import initFirebase from '../../../../firebase/initFirebase';
import { responseMapping,errorFireBaseMapping } from 'utils/responseMapping';
import { HashService } from 'utils/hashService';

const loginHandler = async(req,res) => {
    if(req.method === 'POST') {
        try{
            initFirebase();
            const { id,email,password } = req?.body;
            const hashService = new HashService(password);
            let response:any = {};
            if(email && password) {
                // let hashPassword = hashService.hashingPlainText();
                response = await firebase.auth().signInWithEmailAndPassword(email,password);
                response = responseMapping(response?.user);
            } else {
                
            }
            
            res.status(200).json({response});
        }catch(error){
            const errorResponse = errorFireBaseMapping(error);
            res.status(500).json(errorResponse);   
        }
    }
}

export default loginHandler;