import { useState, useRef, useEffect } from 'react';
import { Formik } from 'formik';
import styles from 'styles/Profile/SettingProfile.module.scss';
import ImageProfileModal from 'components/Profile/ImageProfileModal';
import { Profile, UpdateProfileStatus, SettingProfileSchema } from 'models/profile.model';
import { Snackbar,CircularProgress } from '@material-ui/core';
import Slide, { SlideProps } from '@material-ui/core/Slide';
import * as lodash from 'lodash';


const SettingProfile = () => {

    const [image, setImage] = useState('/image/profile/Nanno-profile.jpeg'); // url image
    const [isOpenCropModal, setIsOpenCropModal] = useState<boolean>(false);
    const [uploadImage, setUploadImage] = useState('/image/profile/Nanno-profile.jpeg');
    const [cropData, setCropData] = useState("#");
    const [cropper, setCropper] = useState<any>();
    const imageInputRef = useRef(null);
    const [profile, setProfile] = useState<Profile>({ username: 'Boom Purich', firstname: 'Purich', lastname: 'Sangprasert' });
    const [updateProfile, setUpdateProfile] = useState<UpdateProfileStatus>(new UpdateProfileStatus());
    const [isUpdating,setIsUpdating] = useState<boolean>(false); 

    type TransitionProps = Omit<SlideProps, 'direction'>;
    const TransitionDown = (props: TransitionProps) => {
        return <Slide {...props} direction="down" />;
    }

    const changeUploadImage = (event: any) => {
        let files: any = {};
        if (event.dataTransfer) {
            files = event.dataTransfer.files;
        } else if (event.target) {
            files = event.target.files;
        }

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            setUploadImage(reader.result as any);
        }
        setIsOpenCropModal(true);
        imageInputRef.current.value = "";
    }

    const cancelUploadProfile = () => {
        setIsOpenCropModal(false);
        setUploadImage('');
    }

    const saveUploadCropImage = () => {
        if (typeof cropper !== undefined) {
            setCropData(cropper.getCroppedCanvas().toDataURL());
            setIsOpenCropModal(false);
        }
    }

    const handleUpdateProfile = (value: any, action: any) => {
        console.log('Profile Object : ', value);
        setIsUpdating(true);
        setUpdateProfile({ ...updateProfile, isOpenSnackbar: true });
    }

    const handleCloseSnackBar = () => {
        setUpdateProfile({ ...updateProfile, isOpenSnackbar: false });
        setIsUpdating(false);
    }

    return (
        <>
            <div className={styles.setting_profile_container}>
                <div className={styles.setting_profile_content}>
                    <div className={styles.setting_profile_header_container}>
                        <div className={styles.setting_profile_header}>Setting Profile</div>
                    </div>
                    <div className={styles.setting_field_group_container}>
                        <div className={styles.setting_field_container}>
                            <div className={styles.setting_profile_image_container}>
                                <div className={styles.setting_profile_image_content}>
                                    <img src={image} />
                                </div>
                                <input type="file" ref={imageInputRef} style={{ display: 'none' }} accept="image/*" onChange={changeUploadImage} />
                                <button type="button" className={styles.upload_btn} onClick={() => imageInputRef.current.click()}>
                                    <i className={`fas fa-image ${styles.upload_icon}`}></i>
                                    <span className={styles.upload_word}>Upload</span>
                                </button>
                            </div>
                            <div className={styles.setting_field_box}>
                                <div className={styles.setting_field_content}>
                                    <div className={styles.profile_information_header}>
                                        <span>Profile Information</span>
                                    </div>
                                    <Formik
                                        initialValues={profile}
                                        enableReinitialize
                                        validationSchema={SettingProfileSchema}
                                        validateOnBlur={false}
                                        validateOnChange={true}
                                        onSubmit={(value, action) => handleUpdateProfile(value, action)}
                                    >
                                        {(props) => {
                                            const { values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset } = props;
                                            let isEdit = lodash.isEqual(profile, values);

                                            return (
                                                <form onSubmit={handleSubmit}>
                                                    <div className={styles.profile_input_field_container}>
                                                        <div className={styles.header_word}>Username</div>
                                                        <input type="text" name="username" id="username" value={values?.username} className={`${styles.input_field} ${errors.username && touched.username && styles.error_field}`} placeholder="Username" onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.username && touched.username && <div className={styles.error_word}>Please fill username.</div>}
                                                    </div>
                                                    <div className={styles.profile_two_field_container}>
                                                        <div className={styles.profile_input_field_container}>
                                                            <div className={styles.header_word}>Firstname</div>
                                                            <input type="text" name="firstname" id="firstname" value={values?.firstname} className={`${styles.input_field} ${errors.firstname && touched.firstname && styles.error_field}`} placeholder="Firstname" onChange={handleChange} onBlur={handleBlur} />
                                                            {errors.firstname && touched.firstname && <div className={styles.error_word}>Please fill firstname.</div>}
                                                        </div>
                                                        <div className={styles.profile_input_field_container}>
                                                            <div className={styles.header_word}>Lastname</div>
                                                            <input type="text" name="lastname" id="lastname" value={values?.lastname} className={`${styles.input_field} ${errors.lastname && touched.lastname && styles.error_field}`} placeholder="Lastname" onChange={handleChange} onBlur={handleBlur} />
                                                            {errors.lastname && touched.lastname && <div className={styles.error_word}>Please fill lastname.</div>}
                                                        </div>
                                                    </div>

                                                    <div className={styles.reset_save_btn_container}>
                                                        <button type="reset" className={styles.reset_btn} disabled={isEdit || isUpdating} onClick={handleReset}>Reset</button>
                                                        <button type="submit" className={styles.save_btn} disabled={isEdit || isUpdating}>
                                                            {isUpdating && <CircularProgress disableShrink className={styles.loading_progress}/>} 
                                                            Save
                                                        </button>
                                                    </div>
                                                </form>
                                            )
                                        }}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {
                    cropData && cropData !== '#' && (<img src={cropData}/>)
                }  */}
            </div>
            <ImageProfileModal {...{ isOpenCropModal: isOpenCropModal, uploadImage: uploadImage, saveUploadCropImage: saveUploadCropImage, cancelUploadProfile: cancelUploadProfile, cropper: cropper, setCropper: setCropper }} />
            <Snackbar
                open={updateProfile?.isOpenSnackbar}
                onClose={handleCloseSnackBar}
                TransitionComponent={TransitionDown}
                transitionDuration={{enter:300,exit:300}}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                className={styles.snackbar_container}
            >
                
                    <div className={`${styles.snackbar_content} ${updateProfile?.isUpdateSuccess && styles.update_success}`}>Text Message</div>
                
            </Snackbar>
        </>
    );
}

export default SettingProfile;
