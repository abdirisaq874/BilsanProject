'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const IsVAlidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const [Email, setEmail] = useState('');
  const SubmitHandler = (e) => {
    e.preventDefault();
    // check if email is empty
    if (!Email) {
      alert('Please enter email');
      return;
    }
    // check if email is valid
    if (!IsVAlidEmail(Email)) {
      alert('Please enter valid email');
      return;
    }
    // construct url with query of the email and navigate to that url
    const url = `/VerifyEmail?email=${Email}`;
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
          Forgot Password
        </div>
        <p className="font-normal text-[#000000b2] text-[16px] tracking-[0] leading-[20px]">
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </p>
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
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            className="w-[379px] h-[57px]  rounded-[5.33px] border-[0.89px] border-solid border-[#8591a5] placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]  pl-6    placeholder:font-light  placeholder:leading-[normal]

          "
            placeholder="Enter email address"
          />
        </div>

        <button className="h-[57px] bg-[#191bab] rounded-[5.31px]">
          <span className="font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Send code
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
