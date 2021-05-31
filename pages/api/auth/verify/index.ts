import firebase from 'firebase/app';
import { responseMapping,errorFireBaseMapping } from 'utils/responseMapping';
import initFirebase from '../../../../firebase/initFirebase';
import initAdminFirebase from '../../../../firebase/initAdminFirebase';

const verifyHandler = async(req,res) => {

    if(req.method === 'GET') {
        try{
            initFirebase();
            // firebase.auth().currentUser.getIdToken(false).then((idToken) => console.log('Token : ',idToken));
            res.status(200).json({});
        }catch(error){
            res.status(500).json(errorFireBaseMapping(error));
        }
    }

}

export default verifyHandler;