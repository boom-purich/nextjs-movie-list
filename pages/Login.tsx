import { useState } from 'react';
import Link from 'next/link';
import { Formik } from 'formik'
import { LoginField, LoginSchema } from 'models/authentication.model';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import styles from 'styles/Layout/Login.module.scss';
import { Snackbar } from '@material-ui/core';

const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSuccessAuthorize, setIsSuccessAuthorize] = useState<any>({open:false,Transition:Fade,success:false});

    const SlideTransition = (props: TransitionProps) => {
        return <Slide {...props} direction="down" />;
    }

    const handleSubmit = async (value: any, action: any) => {
        console.log('Value : ', value)
        setIsLoading(true);
        setIsSuccessAuthorize({...isSuccessAuthorize,open:true,success:false,Transition:SlideTransition});
    }

    const handleCloseStatus = () => {
        setIsSuccessAuthorize({...isSuccessAuthorize,open:false});
        setIsLoading(false);
    }

    return (
        <>
            <div className={styles.login_container}>
                <div className={styles.backdrop_container}></div>
                <div className={styles.login_content}>
                    <div className={styles.login_header_container}>
                        <img src="/image/icons/play-button.svg" className={styles.header_logo} />
                        <div className={styles.header_word}>Welcome To Movie List</div>
                    </div>

                    <Formik
                        initialValues={{ ...new LoginField() }}
                        validationSchema={LoginSchema}
                        onSubmit={(value, action) => handleSubmit(value, action)}
                    >
                        {(props) => {
                            const {
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props

                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.input_group_container}>
                                        {/* <div className={`${styles.input_container} ${styles.error_field_container}`}> */}
                                        <div className={`${styles.input_container} ${errors?.email && touched?.email && styles.error_field_container}`}>
                                            <div className={styles.input_logo_container}>
                                                <i className={`fas fa-at ${styles.input_logo}`}></i>
                                            </div>
                                            <input type="text" className={styles.input_field} name="email" id="email" placeholder="E-mail" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        </div>
                                        {errors?.email && touched?.email && (
                                            <div className={styles.error_field_word}>{errors?.email}</div>
                                        )}
                                        {/* <div className={`${styles.input_container} ${styles.error_field_container}`}> */}
                                        <div className={`${styles.input_container} ${errors?.password && touched?.password && styles.error_field_container}`}>
                                            <div className={styles.input_logo_container}>
                                                <i className={`fas fa-lock ${styles.input_logo}`}></i>
                                            </div>
                                            <input type={isShowPassword ? "text" : "password"} className={`${styles.input_field} ${styles.password_field}`} name="password" id="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                            <button type="button" className={styles.password_btn} onClick={() => setIsShowPassword(!isShowPassword)}>
                                                {isShowPassword ?
                                                    <i className={`fas fa-eye-slash ${styles.input_logo}`}></i> :
                                                    <i className={`fas fa-eye ${styles.input_logo}`}></i>
                                                }
                                            </button>
                                        </div>
                                        {errors?.password && touched?.password && (
                                            <div className={`${styles.error_field_word} pb-0`}>{errors?.password}</div>
                                        )}
                                    </div>

                                    <div className={styles.sign_in_btn_container}>
                                        {
                                            isLoading ?
                                                <button type="button" className={styles.loading_btn}>
                                                    <CircularProgress disableShrink className={styles.loading_progress} />Loading
                                            </button> :
                                                <button type="submit" className={`${styles.sign_in_btn} ${errors.password && touched.password && styles.validate_open}`}>Sign in</button>
                                        }
                                    </div>

                                </form>

                            )
                        }}
                    </Formik>
                    <div className={styles.sign_in_method_container}>
                        <div className={`${styles.sign_in_method_content}`}>
                            <div className={styles.method_header}>
                                <div className={styles.separate_line}></div>
                                <span>or continue with</span>
                                <div className={styles.separate_line}></div>
                            </div>
                        </div>

                        <div className={styles.sign_in_method_btn_group}>
                            <button type="button">
                                <img src="image/icons/google.svg" className={styles.method_logo} />
                            </button>
                            <button type="button">
                                <img src="image/icons/facebook.svg" className={styles.method_logo} />
                            </button>
                            <button type="button">
                                <img src="image/icons/LINE.svg" className={styles.method_logo} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.sign_up_container}>
                        <span>Don't have account ?</span>
                        <Link href="/register">
                            <span className={styles.sign_up_word}>Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{vertical:'top',horizontal:'center'}}
                open={isSuccessAuthorize.open}
                onClose={handleCloseStatus}
                transitionDuration={{enter:300,exit:300}}
                autoHideDuration={1000}
                TransitionComponent={isSuccessAuthorize.Transition}
                className={styles.snackbar_container}
            >
                {
                    isSuccessAuthorize?.success ? <div className={`${styles.snackbar_content} ${styles.update_success}`}>Login Success</div>
                    : <div className={`${styles.snackbar_content} ${styles.update_fail}`}>Login Failed</div>
                }
                
            </Snackbar>
        </>
    );
}

export default Login;
