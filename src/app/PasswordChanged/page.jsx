'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

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
      <svg
        width="91"
        height="84"
        viewBox="0 0 91 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.8257 0L33.1121 9.29071C34.4063 14.5494 35.0534 17.1787 36.4278 19.2991C37.6431 21.1742 39.2621 22.754 41.1663 23.9232C43.3197 25.2454 45.964 25.828 51.2527 26.9933L61.6514 29.2844L51.2527 31.5755C45.964 32.7408 43.3197 33.3234 41.1663 34.6456C39.2621 35.8148 37.6431 37.3946 36.4278 39.2697C35.0534 41.3901 34.4063 44.0194 33.1121 49.2781L30.8257 58.5688L28.5392 49.2781C27.2451 44.0194 26.598 41.3901 25.2236 39.2697C24.0082 37.3946 22.3893 35.8148 20.4851 34.6456C18.3317 33.3234 15.6874 32.7408 10.3986 31.5755L0 29.2844L10.3986 26.9933C15.6874 25.828 18.3317 25.2454 20.4851 23.9232C22.3893 22.754 24.0082 21.1742 25.2236 19.2991C26.598 17.1787 27.2451 14.5494 28.5392 9.2907L30.8257 0Z"
          fill="#20C604"
        />
        <path
          d="M71.2019 46.2385L71.4036 47.0675C72.6844 52.3307 73.3247 54.9623 74.6941 57.0867C75.9049 58.9652 77.5202 60.5494 79.4219 61.7235C81.5725 63.0512 84.2161 63.6403 89.5032 64.8184L90.8533 65.1193L89.5032 65.4201C84.2161 66.5982 81.5725 67.1873 79.4219 68.515C77.5202 69.6891 75.9049 71.2733 74.6941 73.1518C73.3247 75.2762 72.6844 77.9078 71.4036 83.1711L71.2019 84L71.0002 83.1711C69.7195 77.9078 69.0791 75.2762 67.7098 73.1518C66.4989 71.2733 64.8836 69.6891 62.9819 68.515C60.8313 67.1873 58.1878 66.5982 52.9006 65.4201L51.5505 65.1193L52.9006 64.8184C58.1878 63.6403 60.8313 63.0512 62.9819 61.7235C64.8836 60.5494 66.4989 58.9652 67.7098 57.0867C69.0791 54.9623 69.7195 52.3307 71.0002 47.0675L71.2019 46.2385Z"
          fill="#20C604"
        />
      </svg>

      <div className="flex flex-col gap-4 ">
        <div className="h-[39px] font-bold text-[#1c1ba5] text-[32px] tracking-[0] leading-[normal]">
          Password changed
        </div>
        <p className="font-normal text-[#000000b2] text-[16px] tracking-[0] leading-[20px] w-[257px] text-center">
          Your password has been changed succesfully
        </p>
      </div>

      <button className="w-[353px] h-[57px] bg-[#191bab] rounded-[5.31px]">
        <Link
          href="/Login"
          className="font-medium text-white text-[16px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Back to Login
        </Link>
      </button>
    </div>
  );
};

export default Page;
