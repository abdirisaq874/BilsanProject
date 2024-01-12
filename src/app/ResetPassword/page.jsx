'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Errors, showErrors] = useState({
    Password: '',
    ConfirmPassword: '',
  });

  const ValidatePassword = (e) => {
    setPassword(e.target.value);
    // if (Password !== '') {
    //   showErrors({ ...Errors, Password: '' });
    // }
    if (e.target.value.length >= 8) {
      showErrors({ ...Errors, Password: '' });
    }
  };

  const ValidateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length >= 8) {
      showErrors({ ...Errors, ConfirmPassword: '' });
    }
    if (Password === e.target.value) {
      showErrors({ ...Errors, ConfirmPassword: '' });
    }
  };

  const FormValidations = () => {
    const errors = {
      Password: '',
      ConfirmPassword: '',
    };
    // check if password is empty
    if (!Password) {
      errors.Password = 'Please enter password';
      showErrors(errors);
      return false;
    }
    // check if password is valid
    if (Password.length < 8) {
      errors.Password = 'Password must be 8 characters';
      showErrors(errors);
      return false;
    }
    // check if password is empty
    if (!ConfirmPassword) {
      errors.ConfirmPassword = 'Please enter password';
      showErrors(errors);
      return false;
    }
    // check if password is valid
    if (ConfirmPassword.length < 8) {
      errors.ConfirmPassword = 'Password must be 8 characters';
      showErrors(errors);
      return false;
    }
    // check if password is same
    if (Password !== ConfirmPassword) {
      errors.ConfirmPassword = 'Password must be same';
      showErrors(errors);
      return false;
    }

    return true;
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    // run validations
    const isValid = FormValidations();
    if (!isValid) {
      return;
    }
    // construct url with query of the email and navigate to that url
    const url = '/PasswordChanged';
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
      <div className="flex flex-col gap-4 w-[353px]">
        <div className="h-[39px] font-bold text-[#1c1ba5] text-[32px] tracking-[0] leading-[normal]">
          Reset Password
        </div>
        <p className="font-normal text-[#000000b2] text-[16px] tracking-[0] leading-[20px]">
          Please type something you’ll remember
        </p>
      </div>
      <form
        className="bg-white flex flex-col pt-12 px-9 gap-4 pb-7 rounded-xl"
        onSubmit={SubmitHandler}
      >
        <div className="flex flex-col gap-3 ">
          <label
            for="password"
            className="font-medium text-[#696f79] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            New password
          </label>
          <div className="relative flex flex-col">
            <input
              style={{
                border:
                  Errors.Password !== ''
                    ? '0.889px solid #EB4335'
                    : '0.889px solid #8692A6',
              }}
              value={Password}
              onChange={ValidatePassword}
              id="password"
              type={`${showPassword ? 'text' : 'password'}`}
              className="w-[379px] h-[57px]  rounded-[5.33px] border-[0.89px] border-solid border-[#8591a5] placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]  pl-6    placeholder:font-light  placeholder:leading-[normal]
          "
              placeholder="must be 8 characters"
            />
            <svg
              className="absolute top-0 right-0 mt-[18px] mr-6 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.626 3.00008C13.3789 3.05417 16.4579 6.48248 18 9.43226C18 9.43226 17.4573 10.5606 16.9484 11.2829C16.7021 11.6323 16.443 11.9727 16.1707 12.302C15.9766 12.5364 15.7761 12.7646 15.5681 12.9864C13.7094 14.9698 11.04 16.4493 8.22122 15.8749C5.08975 15.2366 2.53539 12.5104 1 9.57831C1 9.57831 1.54516 8.44888 2.05695 7.72766C2.28623 7.4042 2.52687 7.08939 2.77886 6.78395C2.97194 6.54991 3.17212 6.32165 3.37903 6.09987C5.02125 4.34155 7.12842 2.98782 9.626 3.00008ZM9.61287 4.44252C7.52238 4.43458 5.78398 5.62063 4.40866 7.09299C4.22162 7.29313 4.04132 7.4994 3.8667 7.71071C3.63706 7.9891 3.41772 8.27651 3.20867 8.57113C2.99962 8.86538 2.78525 9.23681 2.61525 9.55234C3.96891 11.8635 6.00083 13.951 8.50054 14.4606C10.8299 14.9355 13.0038 13.6308 14.5399 11.9919C14.7276 11.7917 14.909 11.5851 15.0843 11.3734C15.3328 11.073 15.5691 10.7625 15.7938 10.4434C16.0018 10.1481 16.2158 9.77592 16.3855 9.46003C14.9807 7.07099 12.5772 4.4894 9.61287 4.44252Z"
                fill="black"
                fill-opacity="0.6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 6.61424C11.0705 6.61424 12.3458 7.90991 12.3458 9.50524C12.3458 11.1009 11.0705 12.3962 9.5 12.3962C7.92983 12.3962 6.6546 11.1009 6.6546 9.50524C6.6546 7.90991 7.92983 6.61424 9.5 6.61424Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            {Errors.Password !== '' && (
              <span className="text-[#EB4335] text-[12px]">
                {Errors.Password}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label
            for="Cpassword"
            className="font-medium text-[#696f79] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            Confirm new password
          </label>
          <div className="relative flex flex-col">
            <input
              style={{
                border:
                  Errors.ConfirmPassword !== ''
                    ? '0.889px solid #EB4335'
                    : '0.889px solid #8692A6',
              }}
              value={ConfirmPassword}
              onChange={ValidateConfirmPassword}
              id="Cpassword"
              type={`${showConfirmPassword ? 'text' : 'password'}`}
              className="w-[379px] h-[57px]  rounded-[5.33px] border-[0.89px] border-solid border-[#8591a5] placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]  pl-6    placeholder:font-light  placeholder:leading-[normal]
          "
              placeholder="repeat Password"
            />
            <svg
              className="absolute top-0 right-0 mt-[18px] mr-6 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.626 3.00008C13.3789 3.05417 16.4579 6.48248 18 9.43226C18 9.43226 17.4573 10.5606 16.9484 11.2829C16.7021 11.6323 16.443 11.9727 16.1707 12.302C15.9766 12.5364 15.7761 12.7646 15.5681 12.9864C13.7094 14.9698 11.04 16.4493 8.22122 15.8749C5.08975 15.2366 2.53539 12.5104 1 9.57831C1 9.57831 1.54516 8.44888 2.05695 7.72766C2.28623 7.4042 2.52687 7.08939 2.77886 6.78395C2.97194 6.54991 3.17212 6.32165 3.37903 6.09987C5.02125 4.34155 7.12842 2.98782 9.626 3.00008ZM9.61287 4.44252C7.52238 4.43458 5.78398 5.62063 4.40866 7.09299C4.22162 7.29313 4.04132 7.4994 3.8667 7.71071C3.63706 7.9891 3.41772 8.27651 3.20867 8.57113C2.99962 8.86538 2.78525 9.23681 2.61525 9.55234C3.96891 11.8635 6.00083 13.951 8.50054 14.4606C10.8299 14.9355 13.0038 13.6308 14.5399 11.9919C14.7276 11.7917 14.909 11.5851 15.0843 11.3734C15.3328 11.073 15.5691 10.7625 15.7938 10.4434C16.0018 10.1481 16.2158 9.77592 16.3855 9.46003C14.9807 7.07099 12.5772 4.4894 9.61287 4.44252Z"
                fill="black"
                fill-opacity="0.6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 6.61424C11.0705 6.61424 12.3458 7.90991 12.3458 9.50524C12.3458 11.1009 11.0705 12.3962 9.5 12.3962C7.92983 12.3962 6.6546 11.1009 6.6546 9.50524C6.6546 7.90991 7.92983 6.61424 9.5 6.61424Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
            {Errors.ConfirmPassword !== '' && (
              <span className="text-[#EB4335] text-[12px]">
                {Errors.ConfirmPassword}
              </span>
            )}
          </div>
        </div>

        <button className="h-[57px] bg-[#191bab] rounded-[5.31px]">
          <span className="font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Reset Password
          </span>
        </button>
      </form>
      <div className="w-[353px] h-[20px]">
        <p className="w-[353px] font-normal text-transparent text-[16px] text-center tracking-[0] leading-[20px]">
          <span className="text-[#000000b2]">Remember password?</span>
          <Link href="/Login" className=" font-semibold text-[#191bab]">
            {' '}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
