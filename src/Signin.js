import "./App.css";
import React from "react";
import Loginart from "./images/Loginart.png";
import Google from "./images/Google.png";
import Facebook from "./images/Facebook.png";

function Signin() {
  return (
    <div className="signin">
      <div className="signin0">
        <div className="signin1">
          <div className="signin10">
            <div className="signin11">
              <div className="signin111">
                Welcome Back <span>👋</span>
              </div>
              <div className="signin112">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </div>
              <div className="signin113">
                Email
                <input
                  name="myInput"
                  placeholder="Example@email.com"
                  className="signinput"
                />
              </div>
              <div className="signin113">
                Password
                <input
                  name="myInput"
                  placeholder="at least 8 characters"
                  className="signinput"
                />
                <div className="signin114">Forget password?</div>
              </div>

              <div className="signin115">Sign in</div>
            </div>
            or
            <div className="signin12">
              <img src={Google} width="15%" className="logosignin" alt="aaa" />
              SIgn in with google
            </div>
            <div className="signin13">
              <img
                src={Facebook}
                width="15%"
                className="logosignin"
                alt="aaa"
              />
              signin with facebook
            </div>
            <div className="signin14">Don't you have an account? Sign up</div>
          </div>
        </div>
        <div className="signin2">
          <img src={Loginart} width="100%" height="100%" alt="aaa" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
