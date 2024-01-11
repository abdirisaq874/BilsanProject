'use client';
import Link from 'next/link';
import React from 'react';
import { useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const [inputs, setInputs] = useState(['', '', '', '']);
  const inputRefs = useRef(
    Array(4)
      .fill(null)
      .map(() => React.createRef())
  );

  const Email = searchParams.get('email');
  const router = useRouter();
  const validateInput = (index, value) => {
    // Ensure the value is a number
    if (isNaN(value)) return;

    // Ensure the input is a single digit
    const singleDigit = value.slice(0, 1);

    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = singleDigit;
      return newInputs;
    });

    // Focus on the next input
    if (index < inputRefs.current.length - 1 && singleDigit !== '') {
      inputRefs.current[index + 1].current.focus();
    }
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    // check if the code is empty
    if (inputs.some((input) => input === '')) {
      alert('Please enter code');
      return;
    }
    // construct url with query of the email and navigate to that url
    const url = `/ResetPassword?email=${Email}`;
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
      <div className="flex flex-col gap-4 w-[380px]">
        <div className="h-[39px] font-semibold text-[#1c1ba5] text-[32px] tracking-[0] leading-[normal]">
          Please check your email
        </div>
        <p className="font-normal text-[#000000b2] text-[16px] tracking-[0] leading-[20px]">
          We’ve sent a code to
          <span className="font-semibold mx-1">{Email}.</span>
          Please enter it below to reset your password.
        </p>
      </div>
      <form
        className="bg-white flex flex-col pt-12 px-9 gap-11 pb-7 rounded-xl"
        onSubmit={SubmitHandler}
      >
        <div className="flex gap-4">
          {inputs.map((value, index) => (
            <input
              key={index}
              value={value}
              ref={inputRefs.current[index]}
              className="w-[77px] h-[77px] rounded-[15px] border border-solid border-[#d8dadc] text-[32px] text-center"
              onChange={(e) => validateInput(index, e.target.value)}
              min="0"
              max="9"
            />
          ))}
        </div>

        <button className="h-[57px] bg-[#191bab] rounded-[5.31px]">
          <span className="font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Verify
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
