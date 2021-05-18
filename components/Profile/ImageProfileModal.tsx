import imageModalStyles from 'styles/Common/ImageCropper.module.scss';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import Cropper from 'react-cropper';
import { ImageProfile } from 'models/profile.model';

const ImageProfileModal = ({ isOpenCropModal, uploadImage, saveUploadCropImage, setCropper, cancelUploadProfile, cropper }: ImageProfile) => {
    return (
        <Modal
            open={isOpenCropModal}
            onClose={() => cancelUploadProfile()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpenCropModal}>
                <div className={imageModalStyles.modal_cropper_container}>
                    <div className={imageModalStyles.modal_cropper_content}>
                        <div className={imageModalStyles.header_word}>Upload Picture Profile</div>
                        <div className={imageModalStyles.cropper_container}>
                            <Cropper
                                src={uploadImage}
                                className={imageModalStyles.cropper_content}
                                viewMode={1}
                                initialAspectRatio={1}
                                guides={true}
                                background={false}
                                zoomOnTouch={true}
                                responsive={true}
                                cropBoxResizable={false}
                                autoCropArea={1}
                                dragMode={'move'}
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }}
                            />
                        </div>
                        <div className={imageModalStyles.cancel_save_group}>
                            <span className={imageModalStyles.cancel_link} onClick={cancelUploadProfile}>Cancel</span>
                            <button type="button" className={imageModalStyles.save_btn} onClick={saveUploadCropImage}>Save</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}

export default ImageProfileModal;
