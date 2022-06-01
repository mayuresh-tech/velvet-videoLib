import React from "react";

import "./SignupBox.css";

const SignupBox = () => {
  return (
    <section className="signup-section">
      <div class="auth-box-signup">
        <h4 id="h4">Signup</h4>
        <form class="validate">
          <label class="form-input-label required">Email address</label>
          <input
            id="email-valid"
            type="text"
            class="form-input-field"
            placeholder="user@example.com"
            required
          />
          {/* <span class="validation-errors error-msg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                    </svg>
                    Please enter correct email!
                </span> */}
          <label class="form-input-label required">Password</label>
          <input
            id="password-valid"
            type="password"
            class="form-input-field"
            placeholder="Enter password"
            required
          />
          {/* <span class="validation-errors error-msg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                    </svg>
                    Password should be at least 8 characters
                </span> */}
          <div class="form-valid-box">
            <div class="side-ways">
              <div>
                <input
                  id="checkbox-valid"
                  type="checkbox"
                  class="checbox-terms"
                />
                <label class="form-input-label">
                  I agree all Terms and Conditions
                </label>
                {/* <span class="validation-errors error-msg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                            d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z" />
                    </svg>
                    Please enter correct email!
                </span> */}
              </div>
            </div>
            <button
              id="signup-btn"
              type="button"
              class="btn-submit btn-solid-primary"
            >
              Create new account
            </button>
          </div>
          <label class="form-input-label have-acc">
            Already have an account?
          </label>
        </form>
      </div>
    </section>
  );
};

export default SignupBox;
