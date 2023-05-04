// import styles from "./register.module.css";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className={styles.register}>
//       <div className={styles.card_register}>
//         <div className={styles.right_register}>
//           <h1 className={styles.h1_login}>Register User</h1>
//           <form action="" className={styles.form_register}>
//             <input className={styles.form_input} type="text" placeholder="Username" />
//             <input className={styles.form_input} type="text" placeholder="Email" />
//             <input className={styles.form_input} type="password" placeholder="Password" />
//             <input className={styles.form_input} type="text" placeholder="Full Name" />
//           </form>
//           <button className={styles.button_login}>Register</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_.]*$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/;
    const nameRegex = /^[a-zA-Z ]+$/;

    // Username validation
    if (!usernameRegex.test(username)) {
      setError(
        "Username can only contain letters, numbers, underscores and a single period, and should start with a letter."
      );
      return;
    }
    // Email validation
    if (!emailRegex.test(email)) {
      setError("Email is invalid");
      return;
    }
    // Password validation
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 8 characters which should contain at least one lowercase letter, one uppercase letter, one digit and one special character."
      );
      return;
    }
    // Full name validation
    if (!nameRegex.test(name)) {
      setError("Name can only contain letters and spaces.");
      return;
    }

    setError(null);

    // Submit Register Form to create new user.
    const data = {
      email: email,
      password: password,
      name: name,
      username: username,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setError(result)
        
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

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
          <form onSubmit={handleSubmit} className={styles.form_register}>
            <input
              className={styles.form_input}
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className={styles.form_input}
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.form_input}
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={styles.form_input}
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            {error && (<p id={"errorMessage"} className={styles.error}>{error}</p>)}

            <button className={styles.button_login}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
