import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "modules/auth/store/thunks";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserThunk(email, password));
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
          value="Login"
        />
      </form>
    </div>
  );
};
