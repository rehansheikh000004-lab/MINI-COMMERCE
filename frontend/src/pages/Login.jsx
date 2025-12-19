import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      nav("/");
    } catch (e) {
      setErr(e.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={submit} className="card">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
      <p className="error">{err}</p>
      <Link to="/signup">Create account</Link>
    </form>
  );
}
