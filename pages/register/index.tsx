import { useState,useEffect } from 'react';
import { Formik,Form,Field } from 'formik';
import Link from 'next/link';
import styles from 'styles/Layout/Register.module.scss';
import { RegisterField, RegisterSchema } from 'models/authentication.model';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { Snackbar } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import firebase from '../../firebase/initFirebase';
// import { User } from 'firestore/write';

firebase();

const Register = () => {

  // const [registerField,setRegisterField] = useState<RegisterField>(new RegisterField());
  // const [errorField, setErrorField] = useState<RegisterErrorField>(new RegisterErrorField());
  // const userService = new User();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState<boolean>(false);
  const [isRegistering, setIsResgistering] = useState<any>({ open: false, success: false, Transition: Fade });
  const [loading, setIsLoading] = useState<boolean>(false);
  const [registerMessage,setRegisterMessage] = useState<string>('');
  const SlideTransition = (props: TransitionProps) => {
    return <Slide {...props} direction="down" />;
  }

  const handleSubmit = async (value: any, action: any) => {
    
    console.log('Value : ', value);
    // try {
    //   setIsLoading(loading => loading = true);
    //   userService.email = value?.email;
    //   userService.password = value?.password;
    //   const { success,message } = await userService.createUserWithEmailPasswordMethod(); 
    //   if (success) {
    //     setIsResgistering({ ...isRegistering, open: true, success: success, Transition: SlideTransition });
    //     action.resetForm({});
    //     setIsLoading(loading => loading = false);
    //     // setTimeout(() => {
    //     //   window.location.href = "/";
    //     // }, 500);
    //   }else{
    //     setRegisterMessage(message);
    //     setIsResgistering({ ...isRegistering, open: true, success: success, Transition: SlideTransition });
        
    //   }
    //   setIsLoading(loading => loading = false);


    // } catch (error) {
    //   setIsResgistering({ ...isRegistering, open: true, success: false, Transition: SlideTransition });
    //   setIsLoading(loading => loading = false);
    // }


  }

  const handleCloseSubmit = () => {
    setIsResgistering({ ...isRegistering, open: false })
  }


  return (
    <>
      <div className={styles.register_container}>
        <div className={styles.register_backdrop_container}></div>
        <div className={styles.register_content}>
          <div className={styles.register_header_container}>
            <img src="/image/icons/play-button.svg" className={styles.header_logo} />
            <div className={styles.header_group_container}>
              <div className={styles.header_find}>Find your movie</div>
              <div className={styles.header_join}>Join Movie List</div>
            </div>
          </div>
          <div className={styles.register_input_group_container}>
            <Formik
              initialValues={{ ...new RegisterField() }}
              validationSchema={RegisterSchema}
              onSubmit={(value, action) => {
                handleSubmit(value, action)
              }}
            >
              {(props) => {
                const {
                  values,
                  errors,
                  touched,
                  setFieldValue,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                
                return (
                  <Form >
                    <div className={`${styles.register_input_container} ${errors?.email && touched?.email && styles.error_field_container}`}>
                      <div className={styles.register_input_content}>
                        <div className={styles.input_logo_container}>
                          <i className={`fas fa-at ${styles.input_logo}`}></i>
                        </div>
                        <Field type="email" className={styles.input_field} placeholder="E-mail" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                      </div>
                      {
                        errors?.email && touched?.email && (
                          <div className={`${styles.error_word}`}>{errors?.email}</div>
                        )
                      }

                    </div>
                    <div className={`${styles.register_input_container} ${errors?.password && touched?.password && styles.error_field_container}`}>
                      <div className={styles.register_input_content}>
                        <div className={styles.input_logo_container}>
                          <i className={`fas fa-lock ${styles.input_logo}`}></i>
                        </div>
                        <Field type={isShowPassword ? 'text' : 'password'} id="password" name="password" className={`${styles.input_field} ${styles.password_field}`} placeholder="Password (8-12 character)" value={values.password} onChange={handleChange} />
                        <button type="button" className={styles.password_btn} onClick={() => setIsShowPassword(isShow => isShow = !isShow)}>
                          {isShowPassword ? <i className={`fas fa-eye-slash ${styles.input_logo}`}></i> : <i className={`fas fa-eye ${styles.input_logo}`}></i>}
                        </button>
                      </div>
                      {
                        errors?.password && touched?.password && (
                          <div className={`${styles.error_word}`}>{errors?.password}</div>
                        )
                      }

                    </div>
                    <div className={`${styles.register_input_container} ${errors?.confirmPassword && touched?.confirmPassword && styles.error_field_container}`}>
                      <div className={styles.register_input_content}>
                        <div className={styles.input_logo_container}>
                          <i className={`fas fa-lock ${styles.input_logo}`}></i>
                        </div>
                        <Field type={isShowConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" className={`${styles.input_field} ${styles.password_field}`} placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                        <button type="button" className={styles.password_btn} onClick={() => setIsShowConfirmPassword(isShow => isShow = !isShow)}>
                          {isShowConfirmPassword ? <i className={`fas fa-eye-slash ${styles.input_logo}`}></i> : <i className={`fas fa-eye ${styles.input_logo}`}></i>}
                        </button>
                      </div>
                      {
                        errors?.confirmPassword && touched?.confirmPassword && (
                          <div className={`${styles.error_word}`}>{errors?.confirmPassword}</div>
                        )
                      }

                    </div>
                    <div className={styles.sign_up_btn_container}>
                      {/* sign_up_loading  */}
                      <button type={loading ? 'button' : 'submit'} className={`${styles.sign_up_btn} ${loading && styles.sign_up_loading}`}>
                        {loading && <CircularProgress className={styles.loading_spinner} disableShrink />}
                        {loading ? 'Loading' : 'Sign up'}
                      </button>
                    </div>
                  </Form>
                )
              }
              }

            </Formik>


          </div>
          <div className={styles.sign_in_container}>
            <span>Already has an account ?</span>
            <Link href="/login">
              <span className={styles.sign_in_word}>Sign in</span>
            </Link>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={isRegistering.open}
        onClose={handleCloseSubmit}
        transitionDuration={{ enter: 300, exit: 300 }}
        autoHideDuration={1000}
        TransitionComponent={isRegistering.Transition}
        className={styles.snackbar_container}
      >
        {
          isRegistering?.success ? <div className={`${styles.snackbar_content} ${styles.update_success}`}>Register Success</div>
            : <div className={`${styles.snackbar_content} ${styles.update_fail}`}>{registerMessage}</div>
        }

      </Snackbar>
    </>
  );
}

export default Register;
