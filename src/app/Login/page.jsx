'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState({
    email: '',
    password: '',
  });
  const IsVAlidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const ValidateEmail = (e) => {
    setEmail(e.target.value);
    if (IsVAlidEmail(e.target.value)) {
      setError({ ...Error, email: '' });
    }
  };
  const ValidatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setError({ ...Error, password: '' });
    }
  };

  const FormValidations = () => {
    // Assuming you have Email, Password, setError, and IsVAlidEmail defined

    let errors = { email: '', password: '' };

    // check if email is empty
    if (!Email) {
      errors = { ...errors, email: 'Please enter email' };
    }
    // check if email is valid
    else if (!IsVAlidEmail(Email)) {
      errors = { ...errors, email: 'Please enter valid email' };
    }

    // check if password is empty
    if (!Password) {
      errors = { ...errors, password: 'Please enter password' };
    }
    // check if password is valid
    else if (Password.length < 8) {
      errors = { ...errors, password: 'Password must be 8 characters' };
    }

    // Update the error state once all checks are done
    setError(errors);

    // Check if there are any errors
    if (errors.email !== '' || errors.password !== '') {
      // Validation failed
      return false;
    }

    // Validation passed, proceed with the form submission or other actions
    return true;
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // run validations
    if (!FormValidations()) {
      return;
    }
    // construct url with query of the email and navigate to that url
    const url = '/Dashboard';
    router.push(url);
  };
  return (
    <div className="flex flex-col items-center justify-center relative w-screen h-[1024px] gap-10">
      <div class="w-[567.17px] h-[568.06px] absolute origin-top-left rotate-90 -top-32 left-[45rem] opacity-80 -z-10 bg-white">
        <div class="w-[318px] h-[338.36px] left-[150.07px] top-[155.96px] absolute">
          <div class="w-[225.22px] h-[225.57px] -left-0 top-1 absolute bg-lime-500 rounded-full"></div>
          <div class="w-[225.22px] h-[225.57px] left-[54.22px] top-[112.79px] absolute bg-lime-500 rounded-full"></div>
          <div class="w-[225.22px] h-[225.57px] left-[92.79px] top-0 absolute bg-lime-500 rounded-full"></div>
        </div>
        <div class="w-[567.17px] h-[568.06px] left-0 top-0 absolute bg-white bg-opacity-60 rounded-full backdrop-blur-[145.67px]"></div>
      </div>
      <div class="w-[567.17px] h-[568.06px] absolute origin-top-left rotate-90 top-[473px] left-[1050px] opacity-80 -z-10 bg-white">
        <div class="w-[318px] h-[338.36px] left-[150.07px] top-[155.96px] absolute">
          <div class="w-[225.22px] h-[225.57px] -left-0 top-1 absolute bg-lime-500 rounded-full"></div>
          <div class="w-[225.22px] h-[225.57px] left-[54.22px] top-[112.79px] absolute bg-lime-500 rounded-full"></div>
          <div class="w-[225.22px] h-[225.57px] left-[92.79px] top-0 absolute bg-lime-500 rounded-full"></div>
        </div>
        <div class="w-[567.17px] h-[568.06px] left-0 top-0 absolute bg-white bg-opacity-60 rounded-full backdrop-blur-[145.67px]"></div>
      </div>
      <div className="h-[39px] font-bold text-[#1c1ba5] text-[32px] tracking-[0] leading-[normal]">
        Login
      </div>
      <form
        className="bg-white flex flex-col pt-12 px-9 gap-4 pb-7 rounded-xl"
        onSubmit={SubmitHandler}
      >
        <div className="flex flex-col gap-3">
          <label
            for="email"
            className="font-medium text-[#696f79] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            Enter email adress
          </label>
          <input
            style={{
              border:
                Error.email !== ''
                  ? '0.889px solid #EB4335'
                  : '0.889px solid #8692A6',
            }}
            id="email"
            value={Email}
            onChange={ValidateEmail}
            type="email"
            className="w-[379px] h-[57px]  rounded-[5.33px] border-[0.89px] border-solid border-[#8591a5] placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]  pl-6    placeholder:font-light  placeholder:leading-[normal]

          "
            placeholder="Enter email address"
          />
          {Error.email !== '' && (
            <span className="text-[#EB4335] text-[14px] tracking-[0] leading-[normal]">
              {Error.email}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label
            for="password"
            className="font-medium  text-[#696f79] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            password
          </label>
          <input
            style={{
              border:
                Error.password !== ''
                  ? '0.889px solid #EB4335'
                  : '0.889px solid #8692A6',
            }}
            value={Password}
            onChange={ValidatePassword}
            id="password"
            type="password"
            className="w-[379px] h-[57px] rounded-[5.33px] border-[0.89px] border-solid border-[#8591a5] placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]  pl-6    placeholder:font-light  placeholder:leading-[normal]

          "
            placeholder="Password"
          />
          {Error.password !== '' && (
            <span className="text-[#EB4335] text-[14px] tracking-[0] leading-[normal]">
              {Error.password}
            </span>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <CustomRadioButton />
            <label
              id="Remember_me"
              className="  font-medium text-transparent text-[14px] tracking-[0] leading-[normal]"
            >
              <span className="text-[#696f79]">Remember me</span>
            </label>
          </div>
          <Link
            className="font-light text-black text-[14px] tracking-[0] leading-[normal]"
            href="/ForgotPassword"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          className="h-[57px] bg-[#191bab] rounded-[5.31px]"
          type="submit"
        >
          <span className="font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Login account
          </span>
        </button>
        <div className="flex gap-7 items-center">
          <div className="bg-[#F5F5F5] h-px flex-grow" />
          <span className="font-normal text-[#b9b9b9] text-[14px] text-center tracking-[0] leading-[normal]">
            Or
          </span>
          <div className="bg-[#F5F5F5] h-px flex-grow" />
        </div>
        <button className="h-14 font-medium text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap shadow-md rounded-md">
          <div className="flex items-center justify-center gap-12 relative bg-white">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7185 9.25863H19.0059V9.22192H11.0436V12.7607H16.0435C15.314 14.8208 13.354 16.2995 11.0436 16.2995C8.1121 16.2995 5.73535 13.9228 5.73535 10.9913C5.73535 8.05986 8.1121 5.6831 11.0436 5.6831C12.3967 5.6831 13.6278 6.19358 14.5651 7.02741L17.0675 4.52502C15.4874 3.05244 13.3739 2.14429 11.0436 2.14429C6.15779 2.14429 2.19653 6.10555 2.19653 10.9913C2.19653 15.8771 6.15779 19.8384 11.0436 19.8384C15.9293 19.8384 19.8906 15.8771 19.8906 10.9913C19.8906 10.3981 19.8296 9.81909 19.7185 9.25863Z"
                fill="#FFC107"
              />
              <path
                d="M3.2168 6.87347L6.12349 9.00516C6.90999 7.05793 8.81476 5.6831 11.0438 5.6831C12.3969 5.6831 13.628 6.19358 14.5653 7.02741L17.0677 4.52502C15.4876 3.05244 13.3741 2.14429 11.0438 2.14429C7.64562 2.14429 4.69868 4.06277 3.2168 6.87347Z"
                fill="#FF3D00"
              />
              <path
                d="M11.0438 19.8384C13.329 19.8384 15.4054 18.9639 16.9753 17.5417L14.2371 15.2247C13.3191 15.9229 12.1972 16.3005 11.0438 16.2996C8.74268 16.2996 6.78882 14.8323 6.05274 12.7847L3.16772 15.0075C4.63191 17.8726 7.6054 19.8384 11.0438 19.8384Z"
                fill="#4CAF50"
              />
              <path
                d="M19.7187 9.25864H19.006V9.22192H11.0437V12.7607H16.0436C15.6947 13.7412 15.0662 14.5979 14.2357 15.2251L14.237 15.2242L16.9752 17.5412C16.7814 17.7173 19.8907 15.4148 19.8907 10.9913C19.8907 10.3981 19.8297 9.8191 19.7187 9.25864Z"
                fill="#1976D2"
              />
            </svg>
            <span>Login with Google</span>
          </div>
        </button>
        <button className="h-14 font-medium text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap shadow-md rounded-md">
          <div className="flex items-center justify-center gap-12 relative bg-white">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_8726)">
                <path
                  d="M14.4343 10.2192C14.4265 8.76729 15.0744 7.6714 16.3858 6.86432C15.652 5.80008 14.5436 5.21455 13.0799 5.09982C11.6943 4.98904 10.1799 5.91877 9.62571 5.91877C9.04025 5.91877 7.6976 5.13938 6.64378 5.13938C4.46588 5.17499 2.15137 6.89993 2.15137 10.4091C2.15137 11.4457 2.33871 12.5165 2.71341 13.6216C3.213 15.0736 5.01621 18.6342 6.89748 18.5749C7.88105 18.5512 8.57579 17.8667 9.85599 17.8667C11.0972 17.8667 11.7412 18.5749 12.8379 18.5749C14.7348 18.5472 16.3663 15.311 16.8425 13.8551C14.2977 12.6405 14.4343 10.2944 14.4343 10.2192ZM12.2251 3.72304C13.2907 2.4412 13.1931 1.2741 13.1619 0.854736C12.2212 0.910124 11.1323 1.50357 10.5117 2.23548C9.82867 3.01882 9.42666 3.98811 9.51252 5.08004C10.5312 5.15916 11.4601 4.62902 12.2251 3.72304Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_8726">
                  <rect
                    width="17.7795"
                    height="17.7795"
                    fill="white"
                    transform="translate(0.373535 0.854736)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>Login with Apple</span>
          </div>
        </button>
        <button className="h-14 font-medium text-black text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap shadow-md rounded-md">
          <div className="flex items-center justify-center gap-12 relative bg-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0357 3.71597C11.0484 3.71597 10.7677 4.1539 10.7677 5.11933V6.7128H13.3938L13.135 9.29408H10.7672V17.1156H7.62461V9.29359H5.50464V6.7123H7.62561V5.16362C7.62561 2.55944 8.66967 1.19092 11.5983 1.19092C12.2268 1.19092 12.9788 1.24068 13.4277 1.30339V3.72692"
                fill="#3C5A99"
              />
            </svg>

            <span>Login with Facebook</span>
          </div>
        </button>
        <p className="font-medium text-transparent text-[14px] tracking-[0] leading-[normal] text-center">
          <span className="text-[#696f79] ">Don&apos;t have an account? </span>
          <Link className="text-[#1c1ba5] underline" href="/Registeration">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

const CustomRadioButton = () => {
  const [checked, setchecked] = useState(false);
  return (
    <div className="w-[19px] h-[19px]">
      <div
        className="w-[19px] h-[19px] bg-[#ebebeb] rounded-[9.29px] border-[0.88px] border-solid border-[#80cc28] relative"
        onClick={() => setchecked(!checked)}
      >
        {checked && (
          <div className="absolute w-[12px] h-[12px] top-[3px] left-[3px]">
            <div className="w-[12px] h-[12px] bg-[#80cc28] rounded-[5.75px]" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
