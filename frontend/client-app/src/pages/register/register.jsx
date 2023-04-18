import styles from "./register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.card_register}>
        <div className={styles.left_register}>
          <h1 className={styles.title}>StreamLearnr VirtualCampus</h1>
          <p className={styles.desc}>
            StreamLearnr provides you a platform to host virtual bootcamps and
            workshops with the support of live streaming, chat features and
            interactive elements such as polls and quizzes. Join us today.
          </p>
          <span className={styles.span}>Already have an account.</span>
          <Link to="/login">
            <button className={styles.button_register}>Login</button>
          </Link>
        </div>
        <div className={styles.right_register}>
          <h1 className={styles.h1_login}>Register User</h1>
          <form action="" className={styles.form_register}>
            <input className={styles.form_input} type="text" placeholder="Username" />
            <input className={styles.form_input} type="text" placeholder="Email" />
            <input className={styles.form_input} type="password" placeholder="Password" />
            <input className={styles.form_input} type="text" placeholder="Full Name" />
          </form>
          <button className={styles.button_login}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
