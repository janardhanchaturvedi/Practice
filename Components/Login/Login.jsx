import React from "react";


function Login() {
  return (
    <>
      <div className="main-Container flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 border-black">
        <h1>Login Form</h1>
        <form className="space-y-6">
          <div className=" form-conatainer flex-col">
            <div className="Form flex-col">
              <label className="EmailConatianer block text-sm font-medium leading-6 text-gray-900">
                Email:
                <input className="Input" type="email" placeholder="Email" name="name" />
              </label>
              <br/>

              <label>
                Password:
                <input className="Input" type="password" placeholder="Password" name="name" />
              </label>

              <br/>

              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
