import React, { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";

function Login() {
  const [otp, setOtp] = useState("");
  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            Welcome to <br /> CODE A PROGRAM
          </h1>

          <>
            <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
              <BsFillShieldLockFill size={30} />
            </div>
            <label
              htmlFor="ph"
              className="font-bold text-2xl text-white text-center "
            >
              Enter Your OTP
            </label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="otp-container"
            ></OtpInput>
            <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
              <CgSpinner size={20} />
              <span>Verify OTP</span>
            </button>
          </>
        </div>
      </div>
    </section>
  );
}

export default Login;
