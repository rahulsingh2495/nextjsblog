"use client";
// import React from "react";
// import styles from "./page.module.css";
// import { signIn } from "next-auth/react";

// const Login = () => {
//   return (
//     <div className={styles.container}>
//       <button onClick={() => signIn("google")}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

const Login = () => {
  const handleSignIn = async () => {
    try {
      await signIn("google");
      console.log('success');
    } catch (error) {
      console.error("Error occurred during authentication:", error);
      // Handle the error or show an error message to the user
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleSignIn}>Login with Google</button>
    </div>
  );
};

export default Login;
