import { useState } from 'react';
import { Formik } from 'formik';
import Link from 'next/link';
import styles from 'styles/Layout/Register.module.scss';
import { RegisterField, RegisterSchema } from 'models/authentication.model';


const Register = () => {

  // const [registerField,setRegisterField] = useState<RegisterField>(new RegisterField());
  // const [errorField, setErrorField] = useState<RegisterErrorField>(new RegisterErrorField());
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState<boolean>(false);

  const handleSubmit = async (value: any, action: any) => {
    console.log('Value : ', value);
  }

  return (
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
                <form onSubmit={handleSubmit}>
                  <div className={`${styles.register_input_container} ${errors?.email && touched?.email && styles.error_field_container}`}>
                    <div className={styles.register_input_content}>
                      <div className={styles.input_logo_container}>
                        <i className={`fas fa-at ${styles.input_logo}`}></i>
                      </div>
                      <input type="email" className={styles.input_field} placeholder="E-mail" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
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
                      <input type={isShowPassword ? 'text' : 'password'} id="password" name="password" className={`${styles.input_field} ${styles.password_field}`} placeholder="Password (8-12 character)" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                      <button className={styles.password_btn} onClick={() => setIsShowPassword(!isShowPassword)}>
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
                      <input type={isShowConfirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" className={`${styles.input_field} ${styles.password_field}`} placeholder="Confirm Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                      <button className={styles.password_btn} onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
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
                    <button type="submit" className={``}>
                      {/* <div className={`spinner-border ${styles.spinner_loading}`} role="status"></div> */}
                      Sign up
                    </button>
                  </div>
                </form>
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
  );
}

export default Register;
