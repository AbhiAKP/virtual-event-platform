import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card_login">
        <div className="left_login">
          <h1>StreamLearnr VirtualCampus</h1>
          <p>
            StreamLearnr provides you a platform to host virtual bootcamps and
            workshops with the support of live streaming, chat features and
            interactive elements such as polls and quizzes. Join us today.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button className="button_register">Register</button>
          </Link>
        </div>
        <div className="right_login">
          <h1 className="h1_login">Login</h1>
          <form action="">
            <input type="text" placeholder="Username  OR  Email" />
            <input type="password" placeholder="Password" />
          </form>
          <button className="button_login">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
