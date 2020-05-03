import React, { useState } from "react";
import { FirebaseService, AuthError } from "modules/firebase";

export const Register = () => {
  const authProvider = FirebaseService.AuthProvider;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authProvider
      .createUserWithEmailAndPassword(email, password)
      .catch((error: AuthError) => setError(error.message));
  };
  return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control s--left--med s--right--med s--top--tny">
          <label>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="s--top--tny"
            type="email"
            name="email"
          />
        </div>

        <div className="form-control s--left--med s--right--med s--top--tny">
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="s--top--tny"
            type="password"
            name="password"
          />
        </div>
        <input
          className="s--left--med s--right--med s--top--sml"
          type="submit"
          value="Register"
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};
