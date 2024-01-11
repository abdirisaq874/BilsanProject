'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const data = [
  {
    icon: (
      <>
        <path d="M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2z" />
        <path
          opacity={0.6}
          d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2z"
        />
        <path d="M18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33z" />
        <path
          opacity={0.6}
          d="M7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34z"
        />
      </>
    ),
    title: 'Dashboard',
    PageLink: 'Dashboard',
  },
  {
    icon: (
      <>
        <path d="M5.2 10.46c-.19 0-.39-.08-.53-.22a.757.757 0 01-.16-.82l1.86-4.44c.04-.09.06-.15.09-.2C7.94 1.37 9.83.54 13.17 1.82c.19.07.34.22.42.41.08.19.08.4 0 .59l-2.93 6.8c-.12.28-.39.45-.69.45H7.12c-.57 0-1.11.11-1.63.33-.09.04-.19.06-.29.06zm5.41-7.71c-1.24 0-2 .81-2.79 2.65-.01.03-.03.06-.04.09L6.47 8.6c.22-.02.43-.03.65-.03h2.35l2.41-5.6c-.47-.15-.89-.22-1.27-.22z" />
        <path d="M18.29 10.27c-.07 0-.15-.01-.22-.03-.38-.11-.78-.17-1.2-.17h-6.9c-.25 0-.49-.13-.63-.34a.776.776 0 01-.06-.71l2.9-6.73c.15-.36.59-.61.96-.48.12.04.23.09.35.14l2.36.99c1.38.57 2.3 1.17 2.9 1.89.12.14.22.29.32.45.11.17.21.37.28.58.03.07.08.2.11.34.28.95.14 2.11-.46 3.61a.79.79 0 01-.71.46zm-7.18-1.7h5.77c.32 0 .63.03.94.08.28-.87.34-1.54.18-2.08-.02-.09-.04-.13-.05-.17-.06-.16-.1-.25-.15-.33-.07-.11-.12-.2-.2-.29-.43-.52-1.19-1-2.33-1.47l-1.97-.82-2.19 5.08z" />
        <path d="M15.9 22.75H8.1c-.28 0-.54-.02-.8-.05-3.51-.23-5.51-2.24-5.75-5.79-.03-.22-.05-.49-.05-.76V14.2c0-2.25 1.34-4.28 3.41-5.18.71-.3 1.45-.45 2.22-.45h9.76c.57 0 1.12.08 1.63.24 2.35.71 4 2.93 4 5.39v1.95c0 .22-.01.43-.02.63-.22 3.91-2.5 5.97-6.6 5.97zM7.12 10.07c-.57 0-1.11.11-1.63.33-1.52.66-2.5 2.15-2.5 3.8v1.95c0 .21.02.42.04.62.19 2.85 1.59 4.25 4.4 4.44.25.03.45.05.66.05h7.8c3.3 0 4.92-1.45 5.08-4.55.01-.18.02-.36.02-.56V14.2c0-1.81-1.21-3.43-2.93-3.96-.38-.11-.78-.17-1.2-.17H7.12z" />
        <path d="M2.24 14.95c-.41 0-.75-.34-.75-.75v-2.93c0-3.15 2.23-5.87 5.31-6.47.27-.05.55.05.73.26.17.21.22.51.11.76L5.89 10a.8.8 0 01-.39.4c-1.52.66-2.5 2.15-2.5 3.8-.01.41-.34.75-.76.75zM5.6 6.82a5.106 5.106 0 00-2.5 3.45c.44-.45.95-.83 1.53-1.11l.97-2.34zM21.76 14.95c-.41 0-.75-.34-.75-.75 0-1.81-1.21-3.43-2.93-3.96a.745.745 0 01-.48-.99c.47-1.17.59-2.02.4-2.68-.02-.09-.04-.13-.05-.17a.753.753 0 01.17-.85c.23-.22.58-.27.86-.12a6.569 6.569 0 013.53 5.84v2.93c0 .41-.34.75-.75.75zm-2.51-5.86c.63.29 1.19.7 1.66 1.19-.19-.98-.66-1.87-1.35-2.57-.05.42-.15.88-.31 1.38z" />
      </>
    ),
    title: 'My Cards',
    PageLink: 'MyCards',
  },
  {
    icon: (
      <>
        <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-2.36.75-4.6 2.17-6.48.25-.33.72-.39 1.05-.14.33.25.4.72.15 1.05A9.16 9.16 0 002.75 12c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75z" />
        <path d="M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75z" />
        <path d="M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75z" />
      </>
    ),
    title: 'Transactions',
    PageLink: 'Transactions',
  },
  {
    icon: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.897 2.842a.75.75 0 110 1.5H7.629c-2.508 0-4.13 1.724-4.13 4.394v8.082c0 2.705 1.583 4.385 4.13 4.385h8.604c2.508 0 4.129-1.72 4.129-4.385V9.78a.75.75 0 111.5 0v7.04c0 3.52-2.262 5.884-5.63 5.884H7.63c-3.367 0-5.63-2.365-5.63-5.885V8.736C2 5.21 4.263 2.842 7.63 2.842h7.268-.001zm2.115 6.83a.75.75 0 01.134 1.052l-2.93 3.78a.746.746 0 01-1.056.13l-2.818-2.214-2.53 3.289a.75.75 0 11-1.19-.914l2.993-3.89a.75.75 0 011.058-.132l2.82 2.215 2.467-3.183a.746.746 0 011.052-.134zM19.967 2a2.674 2.674 0 012.672 2.672 2.675 2.675 0 01-2.672 2.673 2.676 2.676 0 01-2.672-2.673A2.675 2.675 0 0119.967 2zm0 1.5a1.173 1.173 0 000 2.345 1.173 1.173 0 000-2.345z"
        />
      </>
    ),
    title: 'TransactPro',
    PageLink: 'TransactionPro',
  },

  {
    icon: (
      <>
        <mask
          id="prefix__a"
          style={{
            maskType: 'alpha',
          }}
          maskUnits="userSpaceOnUse"
          x={3}
          y={1}
          width={21}
          height={22}
        >
          <path fill="url(#prefix__pattern0)" d="M3 2h21v21H3z" />
        </mask>
        <g mask="url(#prefix__a)">
          <path d="M2.364 1.363h24.818v22.909H2.364z" />
        </g>
        <defs>
          <pattern
            id="prefix__pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#prefix__image0_1_9701" transform="scale(.00195)" />
          </pattern>
          <image
            id="prefix__image0_1_9701"
            width={512}
            height={512}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </>
    ),
    title: 'Wallet Manager ',
    PageLink: 'WalletManager',
  },
  {
    icon: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.324 20.2c.518.578 1.183.895 1.873.895h.001c.693 0 1.361-.317 1.88-.895a.75.75 0 111.115 1.003c-.808.898-1.87 1.392-2.995 1.392h-.002c-1.12-.002-2.182-.495-2.987-1.392a.75.75 0 011.115-1.002zm1.923-19.106c4.445 0 7.431 3.462 7.431 6.695 0 1.663.423 2.369.872 3.117.444.737.947 1.575.947 3.16-.349 4.046-4.574 4.376-9.25 4.376S3.345 18.113 3 14.13c-.003-1.647.5-2.486.944-3.223l.157-.264c.386-.664.715-1.386.715-2.853 0-3.233 2.986-6.695 7.431-6.695zm0 1.5c-3.495 0-5.93 2.738-5.93 5.195 0 2.08-.578 3.04-1.088 3.889-.409.68-.732 1.218-.732 2.387.167 1.886 1.412 2.877 7.75 2.877 6.303 0 7.587-1.034 7.753-2.941-.003-1.104-.326-1.643-.735-2.323-.51-.849-1.087-1.81-1.087-3.889 0-2.457-2.436-5.195-5.93-5.195h-.001z"
        />
      </>
    ),
    title: 'Notifications',
    PageLink: 'Notifications',
    badge: true,
  },
];

const SideBArItem = ({ icon, title, badge, PageLink }) => {
  const pathname = usePathname();
  const activePath = pathname.split('/')[1];
  return (
    <Link className="flex gap-4" href={`/${PageLink}`}>
      <svg
        style={{ fill: activePath === PageLink ? '#1c1ba5' : '#6c6f75' }}
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
      <span
        style={{ color: activePath === PageLink ? '#1c1ba5' : '#6c6f75' }}
        className={`flex h-[22px] justify-start items-start  text-[18px] font-[300]  leading-[normal]  text-left whitespace-nowrap`}
      >
        {title}
      </span>
      {badge && (
        <>
          <div className="flex w-[25.701px] h-[25.701px] gap-[10px] items-center justify-center flex-nowrap bg-[#1c1ba5] bg-opacity-20 rounded-full ml-3">
            <span className="h-[12px] shrink-0 basis-auto text-[10px] font-medium leading-[12px] text-[#1c1ba5] text-left whitespace-nowrap">
              6
            </span>
          </div>
        </>
      )}
    </Link>
  );
};

const SideBarComponent = () => {
  const pathname = usePathname();
  const activePath = pathname.split('/')[1];
  return (
    <div className="w-[240px] h-[1024px] bg-[#fff]  border-r ">
      <Image
        src="/logo.jpg"
        alt="logo"
        width={144}
        height={67}
        className="py-[53px]"
      />
      <div className="w-[172px] h-[739px]">
        <span className="block text-[16px] font-[300]  leading-[19px] text-[#6c6f75] text-left whitespace-nowrap  uppercase">
          Manage
        </span>
        <div className="flex w-[172px] flex-col gap-8 items-start mt-[20px] ">
          {data.map((item, index) => (
            <SideBArItem key={index} {...item} />
          ))}
        </div>
        <span className="block h-[19px]  text-[16px] font-[300]  leading-[19px] text-[#6c6f75] relative text-left whitespace-nowrap  mt-[55.906px] ml-[4px] uppercase">
          preferences
        </span>
        <div className="flex w-[116px] flex-col gap-8 items-start mt-[18px] ">
          <Link href="/Contact" className="w-[116px] h-[24.095px] flex gap-4">
            <svg
              width={24}
              height={24}
              style={{ fill: activePath === 'Contact' ? '#1c1ba5' : '#6c6f75' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C4.56 3.99 6.54 2 9 2a4.436 4.436 0 11.16 8.87z"
                stroke="#6C6F75"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                // fill="#6c6f75"
                opacity={0.4}
                d="M16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 00-.26 0"
                stroke="#6C6F75"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0v0z"
                stroke="#6C6F75"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                // fill="#6c6f75"
                opacity={0.4}
                d="M18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
                stroke="#6C6F75"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span
              style={{
                color: activePath === 'Contact' ? '#1c1ba5' : '#6c6f75',
              }}
              className="flex h-[22px] justify-start items-start  text-[18px] font-[300]  leading-[21.784px]  text-left whitespace-nowrap"
            >
              Contacts
            </span>
          </Link>
          <div className="w-[100.583px] h-[24px] flex gap-4">
            <svg
              width={24}
              height={25}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 15.938c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25z"
                fill="#6C6F75"
              />
              <path
                d="M13.96 22.378c-.21 0-.42-.03-.63-.08-.62-.17-1.14-.56-1.47-1.11l-.12-.2c-.59-1.02-1.4-1.02-1.99 0l-.11.19c-.33.56-.85.96-1.47 1.12-.63.17-1.28.08-1.83-.25l-1.72-.99a2.65 2.65 0 01-.98-3.62c.29-.51.37-.97.2-1.26-.17-.29-.6-.46-1.19-.46-1.46 0-2.65-1.19-2.65-2.65v-1.76c0-1.46 1.19-2.65 2.65-2.65.59 0 1.02-.17 1.19-.46.17-.29.1-.75-.2-1.26-.35-.61-.44-1.33-.26-2.01.18-.69.62-1.26 1.24-1.61l1.73-.99c1.13-.67 2.62-.28 3.3.87l.12.2c.59 1.02 1.4 1.02 1.99 0l.11-.19c.68-1.16 2.17-1.55 3.31-.87l1.72.99a2.65 2.65 0 01.98 3.62c-.29.51-.37.97-.2 1.26.17.29.6.46 1.19.46 1.46 0 2.65 1.19 2.65 2.65v1.76c0 1.46-1.19 2.65-2.65 2.65-.59 0-1.02.17-1.19.46-.17.29-.1.75.2 1.26.35.61.45 1.33.26 2.01a2.58 2.58 0 01-1.24 1.61l-1.73.99c-.38.21-.79.32-1.21.32zm-3.21-3.7c.89 0 1.72.56 2.29 1.55l.11.19c.12.21.32.36.56.42.24.06.48.03.68-.09l1.73-1a1.157 1.157 0 00.43-1.57c-.57-.98-.64-1.99-.2-2.76.44-.77 1.35-1.21 2.49-1.21.64 0 1.15-.51 1.15-1.15v-1.76c0-.63-.51-1.15-1.15-1.15-1.14 0-2.05-.44-2.49-1.21-.44-.77-.37-1.78.2-2.76.15-.26.19-.57.11-.87-.08-.3-.27-.54-.53-.7l-1.73-.99a.92.92 0 00-1.26.33l-.11.19c-.57.99-1.4 1.55-2.29 1.55-.89 0-1.72-.56-2.29-1.55l-.11-.2a.918.918 0 00-1.24-.32l-1.73 1a1.157 1.157 0 00-.43 1.57c.57.98.64 1.99.2 2.76-.44.77-1.35 1.21-2.49 1.21-.64 0-1.15.51-1.15 1.15v1.76c0 .63.51 1.15 1.15 1.15 1.14 0 2.05.44 2.49 1.21.44.77.37 1.78-.2 2.76-.15.26-.19.57-.11.87.08.3.27.54.53.7l1.73.99c.21.13.46.16.69.1.24-.06.44-.22.57-.43l.11-.19c.57-.98 1.4-1.55 2.29-1.55z"
                fill="#6C6F75"
              />
            </svg>
            <span className="flex h-[22px] justify-start items-start  text-[18px] font-[300]  leading-[21.784px] text-[#6c6f75] text-left whitespace-nowrap">
              Setting
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.4-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39a.759.759 0 01-1.51-.13c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01z"
            fill="#6C6F75"
          />
          <path
            d="M15 12.75H3.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H15c.41 0 .75.34.75.75s-.34.75-.75.75z"
            fill="#6C6F75"
          />
          <path
            d="M5.85 16.1c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 010-1.06l3.35-3.35c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.56 12l2.82 2.82c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"
            fill="#6C6F75"
          />
        </svg>
        <span className="flex h-[22px] justify-start items-start  text-[18px] font-[300]  leading-[21.784px] text-[#6c6f75]  text-left whitespace-nowrap">
          Logout
        </span>
      </div>
      <Image
        src="/Bilsan.jpg"
        alt="Bilsan"
        width={102}
        height={29}
        className="mt-12"
      />
    </div>
  );
};

export default SideBarComponent;
