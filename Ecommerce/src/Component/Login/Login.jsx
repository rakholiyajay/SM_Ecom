import React, { useState } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [ph, setPh] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
          <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
            Welcome to <br /> CODE A PROGRAM
          </h1>

          {showOTP ? (
            <>
              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                <BsFillShieldLockFill size={30} />
              </div>
              <label
                htmlFor="otp"
                className="font-bold text-xl text-white text-center "
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
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}

                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                <BsTelephoneFill size={30} />
              </div>
              <label
                htmlFor=""
                className="font-bold text-xl text-white text-center "
              >
                Verify Your Phone Number
              </label>
              <PhoneInput country={"in"} value={ph} onChange={setPh} />
              <button className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}

                <span>Send Code Via SMS</span>
              </button>
            </>
          )}
        </div>
        <h2 className="text-center leading-normal text-white font-medium text-3xl mb-6">
          👍 Login Success
        </h2>
      </div>
    </section>
  );
}

export default Login;
