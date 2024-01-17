import React from "react";

function Login() {
  return (
    <>
      <div className="main-Container absolute flex  flex-col align-center justify-center px-6 py-12 lg:px-8 border-3 border-sky-300   drop-shadow-lg">
        <h1 className="text-center  ">Login Form</h1>
        <form className="space-y-6  flex  flex-col align-center justify-center  ">
          <div className=" form-conatainer  flex  flex-col align-center justify-center">
            <div className="Form flex-col">
              <label
                htmlFor="name"
                className="EmailConatianer block text-sm font-medium leading-6 text-gray-900 "
              >
                Email:
                <input
                  className="Input block mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-cyan-200 text-slate-500 outline-1 border-1 p-2
                  "
                  type="email"
                  placeholder="Email"
                  name="name"
                />
              </label>
              <br />

              <label
                htmlFor="name"
                className=" block text-sm font-medium text-gray-700"
              >
                Password:
                <input
                  className="Input block mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-cyan-200 text-slate-500 outline-1 border-1 p-2"
                  type="password"
                  placeholder="Password"
                  name="name"
                />
              </label>

              <br />
              <div>
                <button
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase  bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
