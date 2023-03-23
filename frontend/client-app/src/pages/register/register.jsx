import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>StreamLearnr VirtualCampus</h1>
          <p>
            StreamLearnr provides you a platform to host virtual bootcamps and
            workshops with the support of live streaming, chat features and
            interactive elements such as polls and quizzes. Join us today.
          </p>
          <span>Already have an account.</span>
          <Link to="/login">
            <button className="button_register">Login</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="h1_login">Register User</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
          </form>
          <button className="button_login">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
