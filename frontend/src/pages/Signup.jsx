import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/api/auth/signup", { username, email, password });
    nav("/login");
  };

  return (
    <form onSubmit={submit} className="card">
      <h2>Signup</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button>Create</button>
      <Link to="/login">Login</Link>
    </form>
  );
}
