import React from 'react';

const data = [
  {
    Date: 'Mar 18, 2023',
    Time: '12:25PM',
    TransactionType: 'Netflix Standard Plan',
    Charges: 10,
    RefId: 'ID:5644638HG4',
    Amount: 132,
    status: 'Successful',
  },
  {
    Date: 'Mar 18, 2023',
    Time: '12:25PM',
    TransactionType: 'Game Stream',
    Charges: 10,
    RefId: 'ID:5644638HG4',
    Amount: 986,
    status: 'Completed',
  },
  {
    Date: 'Mar 18, 2023',
    Time: '12:25PM',
    TransactionType: 'Health Pharmacy',
    Charges: 10,
    RefId: 'ID:5644638HG4',
    Amount: 620,
    status: 'Failed',
  },
];
const page = () => {
  return (
    <>
      <div className="w-full h-24 pl-12 flex items-center pt-8">
        <span className="flex h-[31px] justify-start items-start text-[26px] font-medium leading-[31px] text-[#141736]  text-left whitespace-nowrap">
          Transactions managements
        </span>
      </div>
      <Filters />
    </>
  );
};

const Filters = () => {
  return (
    <div className="h-20 bg-white pl-9 font-light">
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
      <div className="bg-white h-72">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFBFB] ">
              <th className="pl-4 py-2 text-start ">
                <input
                  type="checkbox"
                  className="w-[14px] h-[14px]  rounded-md border border-solid border-[#959ba4]"
                />
              </th>
              <th className="font-light py-3 text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Date Settled
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Transaction type
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Charges
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Ref ID
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Amount
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                Status
              </th>
              <th className="font-light text-start text-[#667085] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap">
                view all
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                style={{
                  backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FAFBFB',
                }}
                key={index}
                className="border-b border-gray-200"
              >
                <td className="pl-4 text-start ">
                  <input
                    type="checkbox"
                    className="w-[14px] h-[14px]  rounded-md border border-solid border-[#959ba4]"
                  />
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3 ">
                    <div className="relative w-[40px] h-[40px] bg-[#F5F6F7] rounded-[20px] flex items-center justify-center p-[10px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66663 1.66663V4.16663"
                          stroke="#7A8699"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.3334 1.66663V4.16663"
                          stroke="#7A8699"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.91663 7.57495H17.0833"
                          stroke="#7A8699"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 7.08329V14.1666C17.5 16.6666 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329Z"
                          stroke="#7A8699"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.079 11.4167H13.0864"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.079 13.9167H13.0864"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.9962 11.4167H10.0037"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.9962 13.9167H10.0037"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.91197 11.4167H6.91945"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.91197 13.9167H6.91945"
                          stroke="#7A8699"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className=" flex flex-col gap-[6px]">
                      <span
                        className="font-normal text-start 
                      text-[#091e42] text-[14px] tracking-[0] leading-[normal]
                      
                      "
                      >
                        {item.Date}
                      </span>
                      <span
                        className="font-light text-start
                      text-[#98a1b0] text-[14px] tracking-[0] leading-[normal]
                      "
                      >
                        {item.Time}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-start font-medium text-[#141736] text-[14px] tracking-[0] leading-[normal]">
                  {item.TransactionType}
                </td>
                <td className="font-light text-start text-[#c21e22] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                  -${item.Charges}
                </td>
                <td className="font-light text-start text-[#475467] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                  {item.RefId}
                </td>
                <td className="font-light text-start text-[#141736] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  ${item.Amount}
                </td>
                <td className="font-light text-start text-[#141736] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  {item.status}
                </td>
                <td className="font-light text-start text-gray-700">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#1C1BA5" />
                    <path
                      d="M7.56046 4.66699V7.56046H4.66699V8.43951H7.56046V11.333H8.43951V8.43951H11.333V7.56046H8.43951V4.66699H7.56046Z"
                      fill="white"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
