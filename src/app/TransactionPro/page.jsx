import React from 'react';

const TransactionPro = () => {
  return (
    <>
      <div className="w-full h-24 pl-12 flex items-center pt-8">
        <span className="flex h-[31px] justify-start items-start text-[26px] font-medium leading-[31px] text-[#141736]  text-left whitespace-nowrap">
          Payment managements
        </span>
      </div>
      <div className="w-full h-[450px] rounded-md bg-white">
        <div className="flex justify-between items-end border-b mt-8 ml-7">
          <div className="flex gap-5">
            <span className="text-sm  leading-4 text-[#1C1BA5] border-b-2 border-[#1C1BA5] pb-2">
              All payments
            </span>
            <span className="text-sm leading-4 text-[#4B5563]">Succeeded</span>
            <span className="text-sm  leading-4 text-[#4B5563]">Refunded</span>
          </div>
          <div className="pb-2">
            <div className="flex gap-2 shadow-md rounded-full py-[5px] px-4">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.125 8.70776V13.4578L8.70833 11.8744"
                  stroke="#7A8699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.12508 13.4583L5.54175 11.875"
                  stroke="#7A8699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4166 7.9161V11.8744C17.4166 15.8328 15.8333 17.4161 11.8749 17.4161H7.12492C3.16659 17.4161 1.58325 15.8328 1.58325 11.8744V7.12443C1.58325 3.1661 3.16659 1.58276 7.12492 1.58276H11.0833"
                  stroke="#7A8699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4166 7.9161H14.2499C11.8749 7.9161 11.0833 7.12443 11.0833 4.74943V1.58276L17.4166 7.9161Z"
                  stroke="#7A8699"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-sm  leading-4 text-[#4B5563]">Export</span>
            </div>
          </div>
        </div>
        <Filters />
        <Table />
      </div>
    </>
  );
};

const Filters = () => {
  return (
    <div className="flex h-20 justify-between items-center ml-9 font-light">
      <div className="flex items-center h-full gap-1">
        <div className="flex items-center gap-2 px-2 py-1 relative bg-white rounded-md border border-solid border-[#f0f2f4]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.56046 14.7405C4.09969 14.7405 1.29419 11.935 1.29419 8.47427C1.29419 5.01351 4.09969 2.20801 7.56046 2.20801C11.0212 2.20801 13.8267 5.01351 13.8267 8.47427C13.8267 11.935 11.0212 14.7405 7.56046 14.7405ZM7.56046 13.4873C10.3291 13.4873 12.5735 11.2429 12.5735 8.47427C12.5735 5.70566 10.3291 3.46126 7.56046 3.46126C4.79184 3.46126 2.54744 5.70566 2.54744 8.47427C2.54744 11.2429 4.79184 13.4873 7.56046 13.4873ZM8.18708 8.47427H10.6936V9.72753H6.93383V5.34114H8.18708V8.47427Z"
              fill="#4B5563"
            />
          </svg>
          <div className="relative w-fit mt-[-0.94px]   text-gray-600 text-[13.2px] tracking-[0] leading-[18.4px] whitespace-nowrap">
            Date range
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63895 9.2088L10.7406 6.10718L11.6268 6.99336L7.63895 10.9812L3.65112 6.99336L4.53731 6.10718L7.63895 9.2088Z"
              fill="#4B5563"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 px-2 py-1 relative bg-white rounded-md border border-solid border-[#f0f2f4]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.08873 2.83423C8.32603 2.83423 8.54303 2.96833 8.64918 3.18062L9.10261 4.08748H12.8624C13.2085 4.08748 13.489 4.36804 13.489 4.71411V11.607C13.489 11.9531 13.2085 12.2336 12.8624 12.2336H8.86324C8.62594 12.2336 8.40893 12.0995 8.30278 11.8872L7.84936 10.9804H3.46297V14.7401H2.20972V2.83423H8.08873ZM7.70141 4.08748H3.46297V9.72712H8.62393L9.25056 10.9804H12.2357V5.34074H8.32804L7.70141 4.08748Z"
              fill="#4B5563"
            />
          </svg>
          <div className="relative w-fit mt-[-0.94px]  text-gray-600 text-[13.2px] tracking-[0] leading-[18.4px] whitespace-nowrap">
            Status
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.92826 9.2088L11.0299 6.10718L11.9161 6.99336L7.92826 10.9812L3.94043 6.99336L4.82662 6.10718L7.92826 9.2088Z"
              fill="#4B5563"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 px-2 py-1 relative bg-white rounded-md border border-solid border-[#f0f2f4]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.30607 2.83423H13.5854C13.9314 2.83423 14.212 3.11478 14.212 3.46086V13.4869C14.212 13.833 13.9314 14.1135 13.5854 14.1135H2.30607C1.96 14.1135 1.67944 13.833 1.67944 13.4869V3.46086C1.67944 3.11478 1.96 2.83423 2.30607 2.83423ZM12.9587 7.84724H2.9327V12.8603H12.9587V7.84724ZM12.9587 6.59399V4.08748H2.9327V6.59399H12.9587ZM9.19898 10.3537H11.7055V11.607H9.19898V10.3537Z"
              fill="#4B5563"
            />
          </svg>
          <div className="relative w-fit mt-[-0.94px]   text-gray-600 text-[13.2px] tracking-[0] leading-[18.4px] whitespace-nowrap">
            P. Method
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.02396 9.2088L11.1256 6.10718L12.0118 6.99336L8.02396 10.9812L4.03613 6.99336L4.92232 6.10718L8.02396 9.2088Z"
              fill="#4B5563"
            />
          </svg>
        </div>
      </div>

      <div className="flex w-[386.32px] h-[37.6px] items-center gap-[7.52px] px-[7.52px] py-[9.4px] relative bg-neutral-50 rounded-[7.52px] border-[0.94px] border-solid border-transparent">
        <label for="searchByamount">
          <svg
            tabIndex="searchByamount"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.13378 1.96606C13.0251 1.96606 16.1833 5.12426 16.1833 9.01561C16.1833 12.907 13.0251 16.0652 9.13378 16.0652C5.24243 16.0652 2.08423 12.907 2.08423 9.01561C2.08423 5.12426 5.24243 1.96606 9.13378 1.96606ZM9.13378 14.4986C12.1631 14.4986 14.6168 12.045 14.6168 9.01561C14.6168 5.98627 12.1631 3.53263 9.13378 3.53263C6.10443 3.53263 3.6508 5.98627 3.6508 9.01561C3.6508 12.045 6.10443 14.4986 9.13378 14.4986ZM15.7802 14.5543L17.9956 16.7697L16.8879 17.8774L14.6725 15.662L15.7802 14.5543Z"
              fill="#959BA4"
            />
          </svg>
        </label>
        <input
          type="text"
          id="searchByamount"
          className="bg-inherit flex-grow outline-none relative placeholder:w-fit mt-[-0.54px] placeholder:text-[#959ba4] placeholder:text-[13.2px] placeholder:tracking-[0] placeholder:leading-[18.4px] placeholder:whitespace-nowrap"
          placeholder="Search by amount , payment method..."
        />
      </div>
    </div>
  );
};
const Table = () => {
  const data = [
    {
      paymentMethod: { type: 'visaCard', last4: '4242' },
      paymentID: '06c1774-06c1774...06c1774',
      creationDate: '2022-12-31T12:31:34',
      amount: '1073490',
      status: 'Succeeded',
    },
    {
      paymentMethod: { type: 'masterCard', last4: '1234' },
      paymentID: '06c1774-06c1774...06c1774',
      creationDate: '2022-12-30',
      amount: '50',
      status: 'Pending',
    },
    {
      paymentMethod: { type: 'BankTransfer', info: 'Bank Transfer' },
      paymentID: '06c1774-06c1774...06c1774',
      creationDate: '2022-12-29',
      amount: '200',
      status: 'Create',
    },
  ];

  const status = {
    Succeeded: {
      color: '#edffed',
      textColor: '#2dc709',
      svg: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.56935 15.3684C4.95441 15.3684 2.02393 12.4379 2.02393 8.82301C2.02393 5.20807 4.95441 2.27759 8.56935 2.27759C12.1843 2.27759 15.1148 5.20807 15.1148 8.82301C15.1148 12.4379 12.1843 15.3684 8.56935 15.3684ZM7.91651 11.4412L12.5448 6.81287L11.6192 5.88721L7.91651 9.58988L6.06521 7.7385L5.13954 8.66422L7.91651 11.4412Z"
            fill="#1DC803"
          />
        </svg>
      ),
    },
    Pending: {
      color: '#fff5e8',
      textColor: '#f9a000',
      svg: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.72389 14.4231C5.10895 14.4231 2.17847 11.4926 2.17847 7.8777C2.17847 4.26276 5.10895 1.33228 8.72389 1.33228C12.3388 1.33228 15.2693 4.26276 15.2693 7.8777C15.2693 11.4926 12.3388 14.4231 8.72389 14.4231ZM9.37844 7.8777V4.60499H8.06935V9.18679H11.9966V7.8777H9.37844Z"
            fill="#F9A000"
          />
        </svg>
      ),
    },
    Create: {
      color: '#e9ebff',
      textColor: '#1c1ba5',
      svg: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_9805)">
            <path
              d="M2.51025 3.26147H13.7077C13.8693 3.26147 14.0003 3.40916 14.0003 3.59133C14.0003 3.64873 13.987 3.70515 13.9617 3.75499L11.8715 7.87948L13.9617 12.004C14.0418 12.1622 13.9931 12.3636 13.8529 12.454C13.8086 12.4825 13.7586 12.4975 13.7077 12.4975H3.68041V15.7961H2.51025V3.26147Z"
              fill="#1C1BA5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_9805">
              <rect
                width="15.709"
                height="15.709"
                fill="white"
                transform="translate(0.453857 0.0432129)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  };

  const DateFormat = (creationDate) => {
    const dateTimeParts = creationDate.split('T');

    // Date
    const dateParts = dateTimeParts[0].split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based
    const day = parseInt(dateParts[2], 10);

    if (dateTimeParts[1]) {
      // Time
      const timeParts = dateTimeParts[1].split(':');
      const hours = parseInt(timeParts[0], 10);
      const minutes = parseInt(timeParts[1], 10);

      // Create a Date object from the parsed components
      const date = new Date(year, month, day, hours, minutes);
      // Format the date and time in the desired way
      const formattedDateTime =
        date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }) +
        ', ' +
        date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });

      return formattedDateTime;
    }
    const date = new Date(year, month, day);
    const formattedDateTime = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDateTime;
  };

  const paymentType = {
    visaCard: {
      svg: (
        <svg
          width="33"
          height="22"
          viewBox="0 0 33 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.33234"
            y="0.515685"
            width="30.4362"
            height="20.6181"
            rx="4.41816"
            stroke="white"
            stroke-width="0.981814"
          />
          <rect
            x="1.82349"
            y="1.00708"
            width="29.4544"
            height="19.6363"
            rx="3.92726"
            fill="#FBFBFB"
          />
          <path
            d="M14.4242 14.1663H12.7588L13.8005 7.9043H15.4658L14.4242 14.1663Z"
            fill="#00579F"
          />
          <path
            d="M20.4609 8.05761C20.1324 7.93091 19.6114 7.79102 18.9671 7.79102C17.3225 7.79102 16.1643 8.64367 16.1572 9.86271C16.1436 10.7621 16.9864 11.2617 17.6168 11.5616C18.2612 11.868 18.4802 12.068 18.4802 12.3412C18.4736 12.7607 17.9595 12.9541 17.48 12.9541C16.8151 12.9541 16.4589 12.8544 15.9174 12.621L15.6981 12.5209L15.4651 13.9266C15.8557 14.0996 16.5753 14.2531 17.3225 14.2599C19.07 14.2599 20.2076 13.4204 20.2211 12.1213C20.2278 11.4085 19.7827 10.8623 18.8232 10.4159C18.2407 10.1294 17.8839 9.9362 17.8839 9.64304C17.8908 9.37653 18.1857 9.10356 18.8432 9.10356C19.3846 9.09019 19.7824 9.21671 20.0838 9.34333L20.2344 9.40982L20.4609 8.05761Z"
            fill="#00579F"
          />
          <path
            d="M22.677 11.9479C22.8142 11.5882 23.3419 10.1958 23.3419 10.1958C23.335 10.2092 23.4788 9.82945 23.5611 9.59633L23.6774 10.1359C23.6774 10.1359 23.9928 11.6348 24.0613 11.9479C23.801 11.9479 23.006 11.9479 22.677 11.9479ZM24.7328 7.9043H23.4446C23.0473 7.9043 22.7455 8.01745 22.5741 8.42386L20.1003 14.1662H21.8478C21.8478 14.1662 22.1355 13.3933 22.1973 13.2269C22.3891 13.2269 24.089 13.2269 24.3356 13.2269C24.3834 13.4467 24.5343 14.1662 24.5343 14.1662H26.0763L24.7328 7.9043Z"
            fill="#00579F"
          />
          <path
            d="M11.3674 7.9043L9.7364 12.1744L9.55817 11.3084C9.25663 10.3091 8.31095 9.22339 7.25562 8.68355L8.74955 14.1597H10.5107L13.1284 7.9043H11.3674Z"
            fill="#00579F"
          />
          <path
            d="M8.22327 7.9043H5.54377L5.51636 8.03084C7.60653 8.55055 8.99082 9.80329 9.55956 11.309L8.97707 8.43074C8.88117 8.03075 8.58646 7.91749 8.22327 7.9043Z"
            fill="#FAA61A"
          />
        </svg>
      ),
    },
    masterCard: {
      svg: (
        <svg
          width="33"
          height="22"
          viewBox="0 0 33 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.33234"
            y="0.569396"
            width="30.4362"
            height="20.6181"
            rx="4.41816"
            stroke="#ECEFF2"
            stroke-width="0.981814"
          />
          <rect
            x="1.82373"
            y="1.06079"
            width="29.4544"
            height="19.6363"
            rx="3.92726"
            fill="#FBFBFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7643 15.0988C15.7614 15.9403 14.4605 16.4483 13.039 16.4483C9.86743 16.4483 7.29639 13.9197 7.29639 10.8005C7.29639 7.68123 9.86743 5.15259 13.039 5.15259C14.4605 5.15259 15.7614 5.6606 16.7643 6.5021C17.7671 5.6606 19.068 5.15259 20.4895 5.15259C23.6611 5.15259 26.2321 7.68123 26.2321 10.8005C26.2321 13.9197 23.6611 16.4483 20.4895 16.4483C19.068 16.4483 17.7671 15.9403 16.7643 15.0988Z"
            fill="#ED0006"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7632 15.0995C17.998 14.0636 18.781 12.5221 18.781 10.8007C18.781 9.07934 17.998 7.53784 16.7632 6.50192C17.7659 5.66067 19.0666 5.15283 20.488 5.15283C23.6595 5.15283 26.2305 7.68147 26.2305 10.8007C26.2305 13.9199 23.6595 16.4486 20.488 16.4486C19.0666 16.4486 17.7659 15.9407 16.7632 15.0995Z"
            fill="#F9A000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7636 15.0987C17.9981 14.0627 18.7809 12.5214 18.7809 10.8003C18.7809 9.07919 17.9981 7.53787 16.7636 6.50195C15.5291 7.53787 14.7463 9.07919 14.7463 10.8003C14.7463 12.5214 15.5291 14.0627 16.7636 15.0987Z"
            fill="#FF5E00"
          />
        </svg>
      ),
    },
    BankTransfer: {
      svg: (
        <div className="w-[29px] h-[20px] relative ">
          {' '}
          <div className="w-[29px] h-[20px] bg-neutral-50 rounded-[7.85px] flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.50977 13.1343H14.6006V14.4434H1.50977V13.1343ZM2.81885 7.89797H4.12794V12.4798H2.81885V7.89797ZM6.09156 7.89797H7.40065V12.4798H6.09156V7.89797ZM8.70973 7.89797H10.0188V12.4798H8.70973V7.89797ZM11.9824 7.89797H13.2915V12.4798H11.9824V7.89797ZM1.50977 4.62525L8.05519 1.35254L14.6006 4.62525V7.24342H1.50977V4.62525ZM8.05519 5.2798C8.4167 5.2798 8.70973 4.98674 8.70973 4.62525C8.70973 4.26376 8.4167 3.97071 8.05519 3.97071C7.69369 3.97071 7.40065 4.26376 7.40065 4.62525C7.40065 4.98674 7.69369 5.2798 8.05519 5.2798Z"
                fill="#2353FD"
              />
            </svg>
          </div>
        </div>
      ),
    },
  };

  return (
    <>
      <table className="w-full table-auto ">
        <thead className="bg-neutral-50">
          <tr className="uppercase border-y">
            <th className="px-4 py-2 text-start ">
              <input
                type="checkbox"
                className="w-[14px] h-[14px]  rounded-md border border-solid border-[#959ba4]"
              />
            </th>
            <th className="font-light text-start text-gray-700">Payment ID</th>
            <th className="font-light text-start text-gray-700">Status</th>
            <th className="font-light text-start text-gray-700">Amount</th>
            <th className="font-light text-start text-gray-700">P.Method</th>
            <th className="font-light text-start text-gray-700">
              Creation Date
            </th>
            <th className="font-light text-start"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 !== 0 ? 'bg-neutral-50' : 'bg-white'}`}
            >
              <td className="border-y px-4 py-2 h-12">
                <input
                  type="checkbox"
                  className="w-[14px] h-[14px]  rounded-md border border-solid border-[#959ba4]"
                />
              </td>
              <td className="border-y ">{row.paymentID}</td>

              <td className="border-y">
                {status[row.status] && (
                  <div
                    style={{ backgroundColor: status[row.status].color }}
                    className={`flex  w-fit items-center justify-center p-1 rounded-sm`}
                  >
                    {status[row.status].svg}
                    <div className="flex items-center justify-center px-1 py-0">
                      <div
                        style={{ color: status[row.status].textColor }}
                        className={`relative w-fit  font-light 
                          } text-xs whitespace-nowrap`}
                      >
                        {row.status}
                      </div>
                    </div>
                  </div>
                )}
              </td>
              <td className="border-y ">
                <p className="text-transparent text-sm tracking-[0] leading-[19.2px] whitespace-nowrap">
                  <span className="text-gray-600 pr-1">
                    $
                    {Number(row.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-[#959ba4]">USD</span>
                </p>
              </td>
              <td className="border-y">
                <div className="flex items-center gap-2">
                  {paymentType[row.paymentMethod.type] && (
                    <div className="flex items-center gap-2">
                      {paymentType[row.paymentMethod.type].svg}

                      {row.paymentMethod.last4 && (
                        <span className="text-xs font-light leading-[14.523px] text-[#7a8699] relative whitespace-nowrap">
                          •••• {row.paymentMethod.last4}
                        </span>
                      )}
                      {row.paymentMethod.info && (
                        <span
                          className="text-xs font-light  relative whitespace-nowrap
                          
                          text-gray-600 tracking-[0] leading-[19.6px] 
                          
                          
                          
                          "
                        >
                          {row.paymentMethod.info}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </td>
              <td className="border-y">
                <p className="text-gray-600 text-sm tracking-[0] leading-[19.2px] whitespace-nowrap">
                  {DateFormat(row.creationDate)}
                </p>
              </td>
              <td className="border-y">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.52828 9.58941L11.7681 6.34961L12.6938 7.27527L8.52828 11.4408L4.36279 7.27527L5.28846 6.34961L8.52828 9.58941Z"
                    fill="#4B5563"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full items-center justify-between py-2 bg-neutral-50 px-5">
        <div className="font-light text-gray-600 text-sm text-center tracking-[0] leading-[19.2px]">
          3 results
        </div>
        <div className="flex items-start gap-4">
          <button className="border-[#f0f2f4] rounded-md gap-2 border border-solid  p-2 flex bg-white ">
            Previous
          </button>
          <button
            className="border-[#f0f2f4] rounded-md gap-2 border border-solid p-2 flex bg-white"
            size="medium"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionPro;
