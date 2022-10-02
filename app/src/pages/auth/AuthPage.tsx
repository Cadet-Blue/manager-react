import React, { useState } from "react";

function AuthPage() {
  const [showRegister, setSowRegister] = useState(false);

  const [signInData, setSignInData] = React.useState({
    email: "",
    password: "",
  });

  const changeForm = () => {
    setSowRegister(!showRegister);
  };

  const handleChangeSignIn = (e: any) => {
    const _signInData = {
      ...signInData,
    } as any;

    _signInData[e.target.name] = e.target.value;
    setSignInData(_signInData);
  };

  const handleSingIn = () => {
    console.log(signInData);
  };

  return (
    <section className="sign">
      <div className="sign_options-container">
        <div className="sign_options-text">
          <div className="sign_options-unregistered">
            <h2 className="sign_unregistered-title">Don't have an account?</h2>
            <p className="sign_unregistered-text">
              You can register an account in just a few moments.
            </p>
            <button className="btn btn_white m-t-30" onClick={changeForm}>
              Sign up
            </button>
          </div>
          <div className="sign_options-registered">
            <h2 className="sign_registered-title">Have an account?</h2>
            <p className="user_registered-text">
              Log in with your existing account to continue what you've already
              started.
            </p>
            <button className="btn btn_white m-t-30" onClick={changeForm}>
              Login
            </button>
          </div>
        </div>
        <div
          className={`sign_options-forms ${
            showRegister ? "bounceLeft" : "bounceRight"
          }`}
        >
          <div className="sign_forms-login">
            <h2 className="forms_title">Login</h2>
            <section className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="forms_field-input"
                    onChange={handleChangeSignIn}
                    value={signInData.email}
                    required
                    autoFocus
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="forms_field-input"
                    onChange={handleChangeSignIn}
                    value={signInData.password}
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">
                  Forgot password?
                </button>
                <input
                  type="submit"
                  value="Log In"
                  onClick={handleSingIn}
                  className="forms_buttons-action"
                />
              </div>
            </section>
          </div>
          <div className="sign_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <section className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input
                    type="email"
                    placeholder="Email"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Password"
                    className="forms_field-input"
                    required
                  />
                </div>
                <div className="forms_field">
                  <input
                    type="password"
                    placeholder="Re-Password"
                    className="forms_field-input"
                    required
                  />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <input
                  type="submit"
                  value="Sign up"
                  className="forms_buttons-action"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
