import Image from 'next/image';
import React from 'react';
import TransactionPro from '../TransactionPro/page';

const Header = ({ children }) => {
  return (
    <div className="flex-grow   mt-6 flex flex-col">
      <div className="flex w-full h-[51px] items-end relative">
        <div class="w-[567.17px] h-[568.06px] absolute origin-top-left rotate-90 -top-32 left-[36rem] opacity-80 -z-10 bg-white">
          <div class="w-[318px] h-[338.36px] left-[150.07px] top-[155.96px] absolute">
            <div class="w-[225.22px] h-[225.57px] -left-0 top-1 absolute bg-lime-500 rounded-full"></div>
            <div class="w-[225.22px] h-[225.57px] left-[54.22px] top-[112.79px] absolute bg-lime-500 rounded-full"></div>
            <div class="w-[225.22px] h-[225.57px] left-[92.79px] top-0 absolute bg-lime-500 rounded-full"></div>
          </div>
          <div class="w-[567.17px] h-[568.06px] left-0 top-0 absolute bg-white bg-opacity-60 rounded-full backdrop-blur-[145.67px]"></div>
        </div>
        <div class="w-[567.17px] h-[568.06px] absolute origin-top-left rotate-90 top-[473px] left-[872px] opacity-80 -z-10 bg-white">
          <div class="w-[318px] h-[338.36px] left-[150.07px] top-[155.96px] absolute">
            <div class="w-[225.22px] h-[225.57px] -left-0 top-1 absolute bg-lime-500 rounded-full"></div>
            <div class="w-[225.22px] h-[225.57px] left-[54.22px] top-[112.79px] absolute bg-lime-500 rounded-full"></div>
            <div class="w-[225.22px] h-[225.57px] left-[92.79px] top-0 absolute bg-lime-500 rounded-full"></div>
          </div>
          <div class="w-[567.17px] h-[568.06px] left-0 top-0 absolute bg-white bg-opacity-60 rounded-full backdrop-blur-[145.67px]"></div>
        </div>
        <svg
          className="absolute top-0 left-0 ml-8 mt-[14px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
            fill="#A5B3CD"
          />
          <path
            d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.3304 20.3888 19.2522 20.1984 19.2522 19.9999C19.2522 19.8015 19.3304 19.6111 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
            fill="#A5B3CD"
          />
        </svg>

        <input
          type="text"
          className="flex-grow mr-8 outline-none h-[51px]  bg-white rounded-[12px] shadow-[0px_14px_54px_#00000008] pl-16  placeholder:absolute placeholder-[#A5B3CD] placeholder:mt-[18px] placeholder:top-0
          placeholder:text-[16px]

          placeholder:font-light
          placeholder:leading-[normal]

          "
          placeholder="Search a Transaction"
        />

        <div className="flex w-[85px] h-[39px] bg-[#1c1ba5] rounded-[12px] justify-center items-center gap-2">
          <Image
            src="/PAY.png"
            width={18}
            height={18}
            alt="pay icon"
            // className="w-[18px] h-[18px]"
          />
          <div className=" font-semibold text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            Pay
          </div>
        </div>

        <div className="w-[231px] h-[40px] flex gap-5 ml-6">
          <div className="w-[39px] h-[39px]  bg-[#d9d9d9] rounded-[19.53px]" />
          <div className="flex flex-col gap-1">
            <span className=" text-sm font-medium leading-[18px] text-[#1c1ba5] relative whitespace-nowrap ">
              Muhammed Abu Ali
            </span>
            <span className="text-xs font-normal leading-[14.523px] text-[#7a8699] relative whitespace-nowrap">
              Owner
            </span>
          </div>
          <svg
            className="mt-1"
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4853 1L6.6035 4.88179C6.14506 5.34022 5.3949 5.34022 4.93647 4.88179L1.05469 1"
              stroke="#1C1BA5"
              strokeWidth="1.90517"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
