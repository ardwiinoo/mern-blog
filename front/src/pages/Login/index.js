import React from "react";
import { loginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <section className="main-page">
      <div className="left">
        <img src={loginBg} alt="register_image" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Ex: elon@gmail.com" />
        <Gap height={18} />
        <Input label="Password" placeholder="Your Password" />
        <Gap height={50} />
        <Button
          title="Login"
          onClick={() => {
            navigate("/");
          }}
        />
        <Gap height={10} />
        <Link
          title="Belum punya akun? daftar disini"
          onClick={() => {
            navigate("/register");
          }}
        />
      </div>
    </section>
  );
}

export default Login;
