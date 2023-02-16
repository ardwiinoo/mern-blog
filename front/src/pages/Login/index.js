import React from "react";
import { registerBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

function Login() {
  return (
    <section className="main-page">
      <div className="left">
        <img src={registerBg} alt="register_image" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Ex: elon@gmail.com" />
        <Gap height={18} />
        <Input label="Password" placeholder="Your Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={10} />
        <Link title="Belum punya akun? daftar disini" />
      </div>
    </section>
  );
}

export default Login;
