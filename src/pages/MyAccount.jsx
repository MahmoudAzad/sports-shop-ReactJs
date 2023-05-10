import React, { useState } from "react";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      {activeTab === "login" ? (
        <div className="container">
          <div className="login-container mt-5 row">
            <div className="login-items col-xl-6 col-lg-6 col-md-6">
              <LoginForm />
            </div>

            <div className="login-register  col-xl-6 col-lg-6 col-md-6">
              <h4 className="font-weight-bold mb-4">ثبت نام</h4>
              <p>
                برای ثبت و مشاهده وضعیت سفارش و همچنین لازم است تا از این قسمت
                اطلاعات خود را وارد کنید تا ثبت‌نام شما در سایت انجام شود
                ثبت‌نام خیلی ساده و سریع انجام میشود
              </p>

              <button
                className="login-btn col-11 col-md-3 "
                onClick={() => setActiveTab("register")}
              >
                عضویت
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" container">
          <div className="register-container mt-5 row">
            <div className="register-items col-xl-6 col-lg-6 col-md-6">
              <RegisterForm />
            </div>

            <div className="register-login col-xl-6 col-lg-6 col-md-6">
              <h4 className="font-weight-bold mb-4">ورود به حساب کاربری</h4>
              <p>
                جهت مشاهده وضعیت سفارشات و ویرایش اطلاعات خود از قسمت زیر
                میتوانید وارد حساب کاربری شوید
              </p>

              <button
                onClick={() => setActiveTab("login")}
                className="register-btn col-11 col-md-3 "
              >
                ورود
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
