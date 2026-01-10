import axios from "axios";

export default function Login() {
  async function login() {
    const res = await axios.post("http://localhost:3333/login", {
      email: "teste@email.com",
      password: "123456"
    });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  }

  return <button onClick={login}>Entrar</button>;
}
