import React from "react";
import { registerBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./register.scss";

function Register() {
  return (
    <section className="main-page">
      <div className="left">
        <img src={registerBg} alt="register_image" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Ex: Elon Musk" />
        <Gap height={18} />
        <Input label="Email" placeholder="Ex: elon@gmail.com" />
        <Gap height={18} />
        <Input label="Password" placeholder="Your Password" />
        <Gap height={50} />
        <Button title="Register" />
        <Gap height={10} />
        <Link title="Kembali Ke Login" />
      </div>
    </section>
  );
}

export default Register;
