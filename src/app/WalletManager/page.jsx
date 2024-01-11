'use client';
import React from 'react';

const page = () => {
  const data = [
    {
      amount: '$2,360.00',
      label: 'Total Profit',
      svg1: (
        <svg
          width="61"
          height="53"
          viewBox="0 0 61 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.90264 24.9853C1.43597 25.1428 0.362593 26.463 0.649818 27.9098C1.42525 31.816 2.97278 35.5379 5.21117 38.8532C7.94895 42.9081 11.6371 46.2318 15.9541 48.5343C20.2711 50.8369 25.0859 52.0484 29.9785 52.0633C34.8711 52.0781 39.6931 50.8959 44.024 48.6196C48.3549 46.3433 52.0632 43.0421 54.8256 39.0038C57.5879 34.9656 59.3205 30.3129 59.8721 25.4514C60.4238 20.59 59.7778 15.6673 57.9905 11.1128C56.5293 7.38906 54.3413 4.0038 51.5638 1.14993C50.5349 0.0928509 48.8388 0.228239 47.8774 1.34699C46.916 2.46574 47.056 4.14294 48.0642 5.21967C50.1915 7.49154 51.8751 10.1519 53.0179 13.0642C54.4869 16.8075 55.0179 20.8535 54.5644 24.8491C54.111 28.8448 52.6871 32.6689 50.4167 35.9879C48.1463 39.307 45.0984 42.0203 41.5388 43.8911C37.9792 45.762 34.016 46.7337 29.9947 46.7215C25.9734 46.7093 22.0162 45.7136 18.468 43.8211C14.9199 41.9286 11.8885 39.1969 9.63833 35.8641C7.88774 33.2713 6.65127 30.3759 5.98645 27.3354C5.67136 25.8943 4.3693 24.8279 2.90264 24.9853Z"
            fill="url(#paint0_linear_1_9189)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_9189"
              x1="3.74714"
              y1="29.1857"
              x2="42.1589"
              y2="-5.49167"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80CC28" />
              <stop offset="1" stop-color="#BEF06D" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8996 5.48901C15.8996 5.2901 15.9786 5.09934 16.1193 4.95868C16.2599 4.81803 16.4507 4.73901 16.6496 4.73901H22.6496C22.8485 4.73901 23.0393 4.81803 23.1799 4.95868C23.3206 5.09934 23.3996 5.2901 23.3996 5.48901V11.489C23.3996 11.6879 23.3206 11.8787 23.1799 12.0193C23.0393 12.16 22.8485 12.239 22.6496 12.239C22.4507 12.239 22.2599 12.16 22.1193 12.0193C21.9786 11.8787 21.8996 11.6879 21.8996 11.489V7.58901L16.4801 14.2145C16.4137 14.2955 16.3312 14.3617 16.2377 14.4088C16.1442 14.456 16.0419 14.483 15.9374 14.4883C15.8328 14.4935 15.7283 14.4768 15.6306 14.4392C15.5329 14.4016 15.4442 14.344 15.3701 14.27L11.4896 10.3895L6.00558 17.93C5.88562 18.0826 5.71119 18.1827 5.51896 18.2093C5.32673 18.2359 5.13166 18.187 4.97474 18.0728C4.81783 17.9586 4.71128 17.788 4.6775 17.5969C4.64372 17.4058 4.68533 17.2091 4.79358 17.048L10.7936 8.79801C10.8573 8.71028 10.9392 8.6374 11.0338 8.58439C11.1283 8.53138 11.2333 8.4995 11.3413 8.49095C11.4494 8.48239 11.5581 8.49737 11.6598 8.53484C11.7615 8.57232 11.8539 8.6314 11.9306 8.70801L15.8441 12.623L21.0671 6.23901H16.6496C16.4507 6.23901 16.2599 6.16 16.1193 6.01934C15.9786 5.87869 15.8996 5.68793 15.8996 5.48901Z"
            fill="#80CC28"
          />
        </svg>
      ),
      svg3: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.3527 0.462281C48.8698 1.7235 61.2371 16.1356 59.9759 32.6527C58.7146 49.1698 44.3025 61.5371 27.7854 60.2758C11.2684 59.0146 -1.09891 44.6025 0.162308 28.0854C1.42353 11.5684 15.8357 -0.798942 32.3527 0.462281ZM28.1921 54.9496C41.7676 55.9862 53.613 45.8214 54.6496 32.246C55.6862 18.6706 45.5215 6.82514 31.946 5.78854C18.3706 4.75193 6.52517 14.9167 5.48856 28.4921C4.45196 42.0676 14.6167 53.913 28.1921 54.9496Z"
            fill="#7EE5DF"
            fill-opacity="0.04"
          />
        </svg>
      ),
    },
    {
      amount: '$6,169.00',
      label: 'Total Income',
      svg1: (
        <svg
          width="43"
          height="61"
          viewBox="0 0 43 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7469 3.58508C31.8503 2.13014 30.7532 0.854536 29.2948 0.880959C25.5916 0.948052 21.9255 1.70844 18.4889 3.13094C14.237 4.89091 10.453 7.61612 7.43613 11.091C4.41928 14.5659 2.25239 18.6951 1.10688 23.152C-0.0386259 27.6089 -0.131333 32.2712 0.836097 36.7701C1.80353 41.269 3.80455 45.4811 6.68088 49.0732C9.55721 52.6652 13.2299 55.5387 17.4085 57.4663C21.5871 59.3939 26.1569 60.3228 30.7564 60.1793C34.474 60.0634 38.1285 59.2496 41.532 57.7885C42.8723 57.2131 43.3481 55.5993 42.6558 54.3154C41.9635 53.0316 40.3655 52.5667 39.0143 53.1162C36.3413 54.2031 33.4899 54.8095 30.5918 54.8998C26.8114 55.0177 23.0555 54.2543 19.6211 52.67C16.1867 51.0857 13.1681 48.7239 10.804 45.7716C8.43994 42.8193 6.79528 39.3573 6.00015 35.6597C5.20501 31.962 5.28121 28.13 6.22271 24.4669C7.16421 20.8037 8.94518 17.4099 11.4247 14.5539C13.9043 11.6978 17.0144 9.45798 20.5091 8.01146C23.1881 6.90254 26.0368 6.28318 28.9203 6.17525C30.3779 6.12069 31.6436 5.04003 31.7469 3.58508Z"
            fill="url(#paint0_linear_1_9198)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_9198"
              x1="27.5428"
              y1="1.1714"
              x2="53.3922"
              y2="44.9571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80CC28" />
              <stop offset="1" stop-color="#BEF06D" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6618 5.96973C15.6618 5.77081 15.7408 5.58005 15.8814 5.4394C16.0221 5.29874 16.2129 5.21973 16.4118 5.21973H22.4118C22.6107 5.21973 22.8014 5.29874 22.9421 5.4394C23.0827 5.58005 23.1618 5.77081 23.1618 5.96973V11.9697C23.1618 12.1686 23.0827 12.3594 22.9421 12.5001C22.8014 12.6407 22.6107 12.7197 22.4118 12.7197C22.2129 12.7197 22.0221 12.6407 21.8814 12.5001C21.7408 12.3594 21.6618 12.1686 21.6618 11.9697V8.06973L16.2423 14.6952C16.1759 14.7762 16.0934 14.8424 15.9999 14.8895C15.9064 14.9367 15.8041 14.9637 15.6996 14.969C15.595 14.9742 15.4905 14.9575 15.3928 14.9199C15.2951 14.8823 15.2064 14.8247 15.1323 14.7507L11.2518 10.8702L5.76776 18.4107C5.64779 18.5633 5.47337 18.6634 5.28114 18.69C5.0889 18.7166 4.89383 18.6677 4.73692 18.5535C4.58 18.4393 4.47346 18.2688 4.43968 18.0777C4.40589 17.8866 4.4475 17.6898 4.55576 17.5287L10.5558 9.27873C10.6194 9.191 10.7014 9.11812 10.796 9.06511C10.8905 9.0121 10.9954 8.98022 11.1035 8.97166C11.2116 8.96311 11.3202 8.97808 11.422 9.01556C11.5237 9.05303 11.6161 9.11211 11.6928 9.18873L15.6063 13.1037L20.8293 6.71973H16.4118C16.2129 6.71973 16.0221 6.64071 15.8814 6.50006C15.7408 6.3594 15.6618 6.16864 15.6618 5.96973Z"
            fill="#80CC28"
          />
        </svg>
      ),
      svg3: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.089 0.258174C48.4216 1.50531 60.6507 15.7565 59.4036 32.089C58.1565 48.4216 43.9053 60.6508 27.5727 59.4036C11.2402 58.1565 -0.988997 43.9053 0.258139 27.5728C1.50527 11.2402 15.7564 -0.988962 32.089 0.258174ZM27.9749 54.1369C41.3987 55.1619 53.1118 45.1107 54.1368 31.6869C55.1619 18.2631 45.1107 6.54997 31.6869 5.52494C18.263 4.49991 6.54993 14.5511 5.5249 27.9749C4.49988 41.3988 14.5511 53.1119 27.9749 54.1369Z"
            fill="#BEF06D"
            fill-opacity="0.2"
          />
        </svg>
      ),
    },
    {
      amount: '$3,380.00',
      label: 'Total Expenses',
      svg1: (
        <svg
          width="51"
          height="61"
          viewBox="0 0 51 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.9233 11.4497C50.9856 10.4349 51.0314 8.74093 49.9263 7.77304C46.8242 5.05633 43.1854 3.00469 39.2347 1.75806C34.4363 0.243943 29.3332 -0.0335879 24.3988 0.951231C19.4645 1.93605 14.8589 4.1513 11.0094 7.39144C7.15984 10.6316 4.19112 14.7916 2.37869 19.4855C0.566256 24.1793 -0.0311529 29.255 0.641894 34.2414C1.31494 39.2278 3.23664 43.9634 6.22866 48.0088C9.22068 52.0542 13.1861 55.2783 17.7569 57.3819C21.5202 59.1138 25.5935 60.04 29.7164 60.1131C31.1853 60.1391 32.2898 58.8539 32.1851 57.3885C32.0804 55.9231 30.8052 54.8352 29.3371 54.7808C26.1105 54.6614 22.93 53.9062 19.9811 52.549C16.2243 50.8201 12.9651 48.1702 10.506 44.8453C8.0468 41.5204 6.46735 37.6281 5.91417 33.5298C5.36099 29.4314 5.852 25.2597 7.34165 21.4018C8.83129 17.5439 11.2713 14.1247 14.4353 11.4617C17.5992 8.79858 21.3846 6.97785 25.4401 6.16842C29.4957 5.35899 33.69 5.5871 37.6338 6.83156C40.7295 7.80841 43.5922 9.38666 46.0618 11.4667C47.1855 12.413 48.8609 12.4644 49.9233 11.4497Z"
            fill="url(#paint0_linear_1_9210)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_9210"
              x1="44.4155"
              y1="8.56117"
              x2="51.3684"
              y2="51.3684"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1C1BA5" />
              <stop offset="1" stop-color="#ECEFF2" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0766 18.0452C15.0766 18.2358 15.1556 18.4186 15.2963 18.5534C15.4369 18.6882 15.6277 18.7639 15.8266 18.7639H21.8266C22.0255 18.7639 22.2163 18.6882 22.3569 18.5534C22.4976 18.4186 22.5766 18.2358 22.5766 18.0452V12.2952C22.5766 12.1045 22.4976 11.9217 22.3569 11.7869C22.2163 11.6521 22.0255 11.5764 21.8266 11.5764C21.6277 11.5764 21.4369 11.6521 21.2963 11.7869C21.1556 11.9217 21.0766 12.1045 21.0766 12.2952V16.0327L15.6571 9.68323C15.5907 9.60563 15.5082 9.54219 15.4147 9.49701C15.3212 9.45183 15.2189 9.42589 15.1144 9.42088C15.0098 9.41587 14.9053 9.4319 14.8076 9.46792C14.7099 9.50394 14.6212 9.55917 14.5471 9.63004L10.6666 13.3489L5.18258 6.12254C5.06261 5.97635 4.88819 5.88042 4.69595 5.8549C4.50372 5.82938 4.30865 5.87626 4.15174 5.9857C3.99482 6.09513 3.88828 6.25859 3.85449 6.44173C3.82071 6.62488 3.86232 6.81344 3.97058 6.96779L9.97058 14.874C10.0343 14.9581 10.1162 15.028 10.2108 15.0788C10.3053 15.1296 10.4103 15.1601 10.5183 15.1683C10.6264 15.1765 10.735 15.1622 10.8368 15.1262C10.9385 15.0903 11.0309 15.0337 11.1076 14.9603L15.0211 11.2084L20.2441 17.3264H15.8266C15.6277 17.3264 15.4369 17.4021 15.2963 17.5369C15.1556 17.6717 15.0766 17.8545 15.0766 18.0452Z"
            fill="#1C1BA5"
          />
        </svg>
      ),
      svg3: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5208 0.398593C48.9709 1.6547 61.288 16.0084 60.0319 32.4584C58.7758 48.9084 44.4221 61.2256 27.9721 59.9694C11.522 58.7133 -0.795087 44.3597 0.461018 27.9096C1.71712 11.4596 16.0708 -0.857512 32.5208 0.398593ZM28.3771 54.6648C41.8975 55.6972 53.6948 45.5737 54.7272 32.0533C55.7596 18.533 45.6361 6.73563 32.1158 5.70323C18.5954 4.67084 6.79806 14.7943 5.76566 28.3147C4.73326 41.8351 14.8568 53.6324 28.3771 54.6648Z"
            fill="#F6F7FA"
          />
        </svg>
      ),
    },
    {
      amount: '625',
      label: 'Total Friends',
      svg1: (
        <svg
          width="60"
          height="39"
          viewBox="0 0 60 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.1186 38.3634C57.5112 38.7974 59.0042 38.0218 59.3126 36.5961C60.0959 32.9761 60.1957 29.2333 59.5985 25.5622C58.8596 21.0201 57.0739 16.7123 54.3827 12.9795C51.6915 9.24675 48.1687 6.19139 44.0928 4.05514C40.017 1.9189 35.4999 0.76038 30.899 0.671235C26.2982 0.58209 21.7396 1.56476 17.5841 3.54152C13.4285 5.51828 9.78996 8.43488 6.95621 12.0606C4.12245 15.6864 2.17125 19.9218 1.25696 24.4318C0.517975 28.077 0.472766 31.8208 1.11516 35.4685C1.36814 36.905 2.83003 37.7379 4.23834 37.3582C5.64666 36.9785 6.46531 35.5295 6.2401 34.0884C5.79456 31.2375 5.85767 28.3229 6.43375 25.4812C7.18521 21.7744 8.78891 18.2933 11.118 15.3133C13.4471 12.3333 16.4376 9.93615 19.8531 8.31144C23.2686 6.68674 27.0152 5.87907 30.7967 5.95234C34.5782 6.02561 38.2908 6.9778 41.6408 8.73359C44.9907 10.4894 47.8862 13.0006 50.0981 16.0686C52.31 19.1366 53.7776 22.6772 54.3849 26.4103C54.8505 29.2722 54.8007 32.187 54.245 35.0185C53.9641 36.4498 54.7261 37.9294 56.1186 38.3634Z"
            fill="url(#paint0_linear_1_9218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_9218"
              x1="59.4314"
              y1="34.8241"
              x2="10.8877"
              y2="49.9532"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#80CC28" />
              <stop offset="1" stop-color="#BEF06D" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg2: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.1522 5.75928C15.1522 5.56036 15.2312 5.3696 15.3719 5.22895C15.5125 5.0883 15.7033 5.00928 15.9022 5.00928H21.9022C22.1011 5.00928 22.2919 5.0883 22.4325 5.22895C22.5732 5.3696 22.6522 5.56036 22.6522 5.75928V11.7593C22.6522 11.9582 22.5732 12.149 22.4325 12.2896C22.2919 12.4303 22.1011 12.5093 21.9022 12.5093C21.7033 12.5093 21.5125 12.4303 21.3719 12.2896C21.2312 12.149 21.1522 11.9582 21.1522 11.7593V7.85928L15.7327 14.4848C15.6664 14.5658 15.5838 14.6319 15.4903 14.6791C15.3969 14.7262 15.2946 14.7533 15.19 14.7585C15.0855 14.7638 14.981 14.747 14.8833 14.7094C14.7856 14.6719 14.6968 14.6142 14.6227 14.5403L10.7422 10.6598L5.25821 18.2003C5.13824 18.3528 4.96382 18.4529 4.77158 18.4796C4.57935 18.5062 4.38428 18.4573 4.22737 18.3431C4.07045 18.2289 3.96391 18.0583 3.93012 17.8672C3.89634 17.6761 3.93795 17.4793 4.04621 17.3183L10.0462 9.06828C10.1099 8.98055 10.1918 8.90767 10.2864 8.85466C10.381 8.80165 10.4859 8.76977 10.594 8.76121C10.702 8.75266 10.8107 8.76763 10.9124 8.80511C11.0141 8.84258 11.1065 8.90166 11.1832 8.97828L15.0967 12.8933L20.3197 6.50928H15.9022C15.7033 6.50928 15.5125 6.43026 15.3719 6.28961C15.2312 6.14895 15.1522 5.95819 15.1522 5.75928Z"
            fill="#80CC28"
          />
        </svg>
      ),
      svg3: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.58 0.112666C48.9125 1.3598 61.1417 15.611 59.8945 31.9435C58.6474 48.2761 44.3962 60.5053 28.0637 59.2581C11.7311 58.011 -0.49806 43.7598 0.749076 27.4273C1.99621 11.0947 16.2474 -1.13447 32.58 0.112666ZM28.4658 53.9914C41.8897 55.0164 53.6028 44.9652 54.6278 31.5414C55.6528 18.1176 45.6016 6.40446 32.1778 5.37943C18.754 4.3544 7.04087 14.4056 6.01584 27.8294C4.99081 41.2532 15.042 52.9663 28.4658 53.9914Z"
            fill="#BEF06D"
            fill-opacity="0.2"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="w-full h-24 pl-12 flex items-center pt-8">
        <span className="flex h-[31px] justify-start items-start text-[26px] font-medium leading-[31px] text-[#141736]  text-left whitespace-nowrap">
          Wallet Management
        </span>
      </div>

      <Card data={data} />

      <div className="flex">
        <div className="flex-grow  bg-white rounded-xl shadow-sm">
          <div className="flex justify-between p-8 pb-6">
            <div className="font-normal flex-grow flex items-center text-[#141736] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Transaction History
            </div>
            <div className="flex p-3 items-center bg-white rounded-[10px] border border-solid border-[#eef1f6]">
              <div className="font-normal pr-2 text-[#a5b3cd] text-[14px] tracking-[0] leading-[normal]">
                All transactions
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9272 4.76392L6.9014 8.68712L2.87558 4.76392"
                  stroke="#A5B3CD"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <MyComponent />
        </div>
        <div className="flex flex-col gap-8 mt-[85px]">
          <div className="w-[381px] h-[381px] relative">
            <div className="absolute w-[385px] h-[381px] top-0 left-0">
              <div className="relative w-[299px] h-[308px] top-[27px] left-[49px]">
                <svg
                  className="absolute w-[220px] h-[220px] top-[53px] left-[31px] rounded-[110px] [background:linear-gradient(180deg,rgba(128,204,40,0.5)_0%)]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="221"
                  height="221"
                  viewBox="0 0 221 221"
                  fill="none"
                >
                  <circle
                    cx="110.266"
                    cy="110.266"
                    r="110"
                    fill="url(#paint0_linear_1_9225)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_9225"
                      x1="110.266"
                      y1="0.266113"
                      x2="110.266"
                      y2="220.266"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#80CC28" stop-opacity="0.5" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="absolute top-[98px] left-0"
                  width="274"
                  height="202"
                  viewBox="0 0 274 202"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_9226)">
                    <path
                      d="M32.1015 25.409C29.5077 24.4614 26.6262 25.794 25.7864 28.4246C16.555 57.3404 18.4954 88.7404 31.342 116.375C44.8928 145.525 69.4682 168.097 99.6619 179.127C129.856 190.157 163.194 188.741 192.344 175.19C219.979 162.344 241.702 139.589 253.284 111.531C254.337 108.979 252.993 106.103 250.4 105.155L141.251 65.282L32.1015 25.409Z"
                      fill="url(#paint0_linear_1_9226)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_9226"
                      x="0.0465088"
                      y="0.104248"
                      width="273.598"
                      height="201.382"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-5" />
                      <feGaussianBlur stdDeviation="10" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_9226"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_9226"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_9226"
                      x1="99.6619"
                      y1="179.127"
                      x2="182.839"
                      y2="-48.5635"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2DC80A" />
                      <stop offset="1" stop-color="#68EE76" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="absolute top-[34px] left-[48px]"
                  width="243"
                  height="274"
                  viewBox="0 0 243 274"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_9227)">
                    <path
                      d="M20.9835 230.736C19.3814 232.986 19.9016 236.117 22.2108 237.631C49.4473 255.49 82.478 262.469 114.718 257.052C148.605 251.359 178.842 232.437 198.778 204.45C218.713 176.462 226.715 141.701 221.021 107.814C215.604 75.5746 198.214 46.6383 172.435 26.7338C170.249 25.0461 167.12 25.5778 165.517 27.827L93.2505 129.282L20.9835 230.736Z"
                      fill="url(#paint0_linear_1_9227)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_9227"
                      x="0.0576477"
                      y="0.741699"
                      width="242.755"
                      height="273.102"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-5" />
                      <feGaussianBlur stdDeviation="10" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_9227"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_9227"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_9227"
                      x1="198.778"
                      y1="204.45"
                      x2="-12.2768"
                      y2="54.1139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.603125" stop-color="#1C1BA5" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="absolute top-0 left-[119px]"
                  width="182"
                  height="294"
                  viewBox="0 0 182 294"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_9228)">
                    <path
                      d="M94.0206 275.884C95.4897 278.222 98.5821 278.934 100.866 277.382C124.344 261.416 142.364 238.569 152.403 211.924C163.031 183.717 164.132 152.806 155.537 123.915C146.941 95.0233 129.123 69.7408 104.804 51.9308C81.8323 35.1071 54.254 25.8252 25.8665 25.2906C23.1056 25.2386 20.9053 27.5252 20.9533 30.2862L23.2419 161.873C23.2578 162.784 23.5225 163.674 24.0074 164.446L94.0206 275.884Z"
                      fill="url(#paint0_linear_1_9228)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_9228"
                      x="0.952515"
                      y="0.289795"
                      width="180.314"
                      height="292.918"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="-5" />
                      <feGaussianBlur stdDeviation="10" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_9228"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_9228"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_9228"
                      x1="140.118"
                      y1="89.8517"
                      x2="-93.5856"
                      y2="236.681"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#1C1BA5" />
                      <stop offset="0.358333" stop-color="#00ABFF" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="absolute top-24 left-[71px] z-10"
                  width="141"
                  height="142"
                  viewBox="0 0 141 142"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="70.7686"
                    cy="70.9981"
                    r="66.5"
                    transform="rotate(165 70.7686 70.9981)"
                    stroke="url(#paint0_linear_1_9230)"
                    stroke-width="7"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_9230"
                      x1="28.2686"
                      y1="15.9981"
                      x2="110.269"
                      y2="120.998"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9C88FB" stop-opacity="0" />
                      <stop
                        offset="0.514211"
                        stop-color="#9C88FB"
                        stop-opacity="0.29"
                      />
                      <stop offset="1" stop-color="#9C88FB" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute w-[158px] h-[158px] top-[84px] left-[62px] bg-white rounded-[79px] shadow-[0px_5px_25px_#0000001a]" />
                <svg
                  className="absolute top-[65px] left-[38px]"
                  width="209"
                  height="209"
                  viewBox="0 0 209 209"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_9229)">
                    <circle cx="104.266" cy="99.2661" r="79" fill="white" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_9229"
                      x="0.266052"
                      y="0.266113"
                      width="208"
                      height="208"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="12.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_9229"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_9229"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="absolute top-[138px] left-[97px] font-semibold text-[#1d265d] text-[23px] text-center tracking-[0] leading-[normal]">
                  $ 3 380
                </div>
                <div className="absolute top-[175px] left-[125px] opacity-80 font-medium text-[#1d265d] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Total
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_9242)">
                  <circle
                    cx="19.5"
                    cy="14.5"
                    r="7.5"
                    fill="url(#paint0_linear_1_9242)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_9242"
                    x="0"
                    y="0"
                    width="39"
                    height="39"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.611765 0 0 0 0 0.533333 0 0 0 0 0.984314 0 0 0 0.16 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_9242"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_9242"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_9242"
                    x1="19.5"
                    y1="7"
                    x2="19.5"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80CC28" />
                    <stop offset="1" stop-color="#1DC803" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col gap-1">
                <div className="font-normal text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Online shoping
                </div>
                <div className=" font-medium text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 632.50
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_9244)">
                  <circle
                    cx="19.5"
                    cy="14.5"
                    r="7.5"
                    fill="url(#paint0_linear_1_9244)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_9244"
                    x="0"
                    y="0"
                    width="39"
                    height="39"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.984314 0 0 0 0 0.8 0 0 0 0 0.392157 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_9244"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_9244"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_9244"
                    x1="19.5"
                    y1="7"
                    x2="19.5"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C1BA5" />
                    <stop offset="0.666667" stop-color="#0177FB" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col gap-1">
                <div className="opacity-80  font-normal text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Entertainments
                </div>
                <div className="font-medium text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 2,302.00
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5" filter="url(#filter0_d_1_9243)">
                  <circle
                    cx="19.5"
                    cy="14.5"
                    r="7.5"
                    fill="url(#paint0_linear_1_9243)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_9243"
                    x="0"
                    y="0"
                    width="39"
                    height="39"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.529412 0 0 0 0 0.964706 0 0 0 0 0.576471 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_9243"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_9243"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_9243"
                    x1="19.5"
                    y1="7"
                    x2="19.5"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80CC28" />
                    <stop offset="1" stop-color="#80CC28" stop-opacity="0.35" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col gap-1">
                <div className=" opacity-80 font-normal text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Health Pharmacy
                </div>
                <div className="font-medium text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 1,090.70
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_9245)">
                  <circle
                    cx="19.5"
                    cy="14.5"
                    r="7.5"
                    fill="url(#paint0_linear_1_9245)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_9245"
                    x="0"
                    y="0"
                    width="39"
                    height="39"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="6" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.929412 0 0 0 0 0.968627 0 0 0 0 0.988235 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_9245"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_9245"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_9245"
                    x1="19.5"
                    y1="7"
                    x2="19.5"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C1BA5" />
                    <stop offset="1" stop-color="#1C1BA5" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col gap-1">
                <div className="opacity-80  font-normal text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Households
                </div>
                <div className="font-medium text-[#1d265d] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                  $ 1,007.30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const lines = {
  1: (
    <svg
      width="59"
      height="29"
      viewBox="0 0 59 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_9053)">
        <path
          d="M7 19.0085C12.1568 16.6195 14.2754 22.6881 17.7133 20.2991C21.1511 17.9101 19.6811 13.3571 24.8378 10.7648C27.4785 9.43731 30.4136 14.402 32.9459 13.6501C35.3588 12.9336 36.9839 9.69866 39.5 7.36737C44.6568 2.58935 48.5622 11.8676 52 11.8676"
          stroke="url(#paint0_linear_1_9053)"
          stroke-width="1.5"
          stroke-linecap="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_9053"
          x="0.24982"
          y="0.249756"
          width="58.5002"
          height="28.3674"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.945098 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_9053"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_9053"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_9053"
          x1="54"
          y1="10.3672"
          x2="-6.47763"
          y2="25.954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1C1BA5" />
          <stop offset="1" stop-color="#E8E8E8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  2: (
    <svg
      width="59"
      height="29"
      viewBox="0 0 59 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_9079)">
        <path
          d="M7 18.0919C13 18.0919 12.6238 21.0919 17 21.0919C21.3762 21.0919 23.1238 12.5919 27.5 12.5919C31.8762 12.5919 33.1238 18.8202 37.5 17.0919C39.9245 16.1343 39.5555 10.696 42.5823 7.64295C45.7231 4.47489 47 7.03998 52 6.0918"
          stroke="url(#paint0_linear_1_9079)"
          stroke-width="1.5"
          stroke-linecap="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_9079"
          x="0.25"
          y="0.25"
          width="58.5001"
          height="28.5918"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.745098 0 0 0 0 0.941176 0 0 0 0 0.427451 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_9079"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_9079"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_9079"
          x1="51.8964"
          y1="3.50552"
          x2="-11.8635"
          y2="22.2643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#80CC28" />
          <stop offset="1" stop-color="#E7E7E7" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  3: (
    <svg
      width="59"
      height="29"
      viewBox="0 0 59 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_9103)">
        <path
          d="M7 19.0085C12.1568 16.6195 14.2754 22.6881 17.7133 20.2991C21.1511 17.9101 19.6811 13.3571 24.8378 10.7648C27.4785 9.43731 30.4136 14.402 32.9459 13.6501C35.3588 12.9336 36.9839 9.69866 39.5 7.36737C44.6568 2.58935 48.5622 11.8676 52 11.8676"
          stroke="url(#paint0_linear_1_9103)"
          stroke-width="1.5"
          stroke-linecap="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_9103"
          x="0.24982"
          y="0.249756"
          width="58.5002"
          height="28.3674"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.945098 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_9103"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_9103"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_9103"
          x1="54"
          y1="10.3672"
          x2="-6.47763"
          y2="25.954"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#80CC28" />
          <stop offset="1" stop-color="#E8E8E8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
const Icons = {
  OnlineShopping: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.7501C11.33 22.7501 10.65 22.5801 10.05 22.2301L4.11 18.8001C2.91 18.1001 2.16 16.8101 2.16 15.4201V8.58012C2.16 7.19012 2.91 5.90012 4.11 5.20012L10.05 1.77012C11.25 1.07012 12.74 1.07012 13.95 1.77012L19.89 5.20012C21.09 5.90012 21.84 7.19012 21.84 8.58012V15.4201C21.84 16.8101 21.09 18.1001 19.89 18.8001L13.95 22.2301C13.35 22.5801 12.67 22.7501 12 22.7501ZM12 2.75012C11.59 2.75012 11.17 2.86012 10.8 3.07012L4.86 6.50012C4.12 6.93012 3.66 7.72012 3.66 8.58012V15.4201C3.66 16.2701 4.12 17.0701 4.86 17.5001L10.8 20.9301C11.54 21.3601 12.46 21.3601 13.2 20.9301L19.14 17.5001C19.88 17.0701 20.34 16.2801 20.34 15.4201V8.58012C20.34 7.73012 19.88 6.93012 19.14 6.50012L13.2 3.07012C12.83 2.86012 12.41 2.75012 12 2.75012Z"
        fill="#1C1BA5"
      />
      <path
        d="M11.09 15.67C10.73 15.67 10.39 15.58 10.08 15.41C9.38999 15.01 8.98999 14.2 8.98999 13.19V10.79C8.98999 9.78005 9.38999 8.97005 10.08 8.57005C10.77 8.17005 11.67 8.23005 12.54 8.74005L14.62 9.94005C15.49 10.44 16 11.19 16 11.99C16 12.79 15.5 13.53 14.62 14.04L12.54 15.24C12.06 15.53 11.56 15.67 11.09 15.67ZM11.1 9.82005C11 9.82005 10.91 9.84005 10.84 9.88005C10.63 10 10.5 10.34 10.5 10.8V13.2C10.5 13.65 10.63 13.99 10.84 14.12C11.05 14.24 11.41 14.18 11.8 13.95L13.88 12.75C14.27 12.52 14.5 12.24 14.5 12C14.5 11.76 14.27 11.48 13.88 11.25L11.8 10.05C11.54 9.90005 11.29 9.82005 11.1 9.82005Z"
        fill="#1C1BA5"
      />
    </svg>
  ),
  Entertainment: (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.22522 11.8794V15.8296"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.2406 13.8542H6.21091"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.1002 12.0002H14.9875"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0129 15.7703H16.9001"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.40646 1C7.40834 1.18762 7.44716 1.37304 7.52069 1.54565C7.59423 1.71827 7.70105 1.87472 7.83505 2.00605C7.96906 2.13739 8.12762 2.24104 8.30168 2.31109C8.47574 2.38114 8.6619 2.41622 8.84952 2.41433H9.9633C10.5486 2.4099 11.1119 2.63727 11.5301 3.04677C11.9483 3.45628 12.1874 4.01465 12.1953 4.59991V5.71258"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.1 13.9042C22.1 7.76072 19.4625 5.71216 11.5511 5.71216C3.6375 5.71216 1 7.76072 1 13.9042C1 20.0477 3.6375 22.0963 11.5511 22.0963C19.4625 22.0963 22.1 20.0488 22.1 13.9042V13.9042Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  HealthCare: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.6499C11.69 21.6499 11.39 21.6099 11.14 21.5199C7.32 20.2099 1.25 15.5599 1.25 8.68991C1.25 5.18991 4.08 2.34991 7.56 2.34991C9.25 2.34991 10.83 3.00991 12 4.18991C12.5808 3.60377 13.2726 3.13919 14.0349 2.82327C14.7972 2.50736 15.6148 2.34644 16.44 2.34991C19.92 2.34991 22.75 5.19991 22.75 8.68991C22.75 15.5699 16.68 20.2099 12.86 21.5199C12.61 21.6099 12.31 21.6499 12 21.6499ZM7.56 3.84991C4.91 3.84991 2.75 6.01991 2.75 8.68991C2.75 15.5199 9.32 19.3199 11.63 20.1099C11.81 20.1699 12.2 20.1699 12.38 20.1099C14.68 19.3199 21.26 15.5299 21.26 8.68991C21.26 6.01991 19.1 3.84991 16.45 3.84991C14.93 3.84991 13.52 4.55991 12.61 5.78991C12.33 6.16991 11.69 6.16991 11.41 5.78991C10.9656 5.18699 10.3855 4.69718 9.71668 4.36014C9.04781 4.0231 8.30898 3.84831 7.56 3.84991Z"
        fill="#1C1BA5"
      />
      <path
        d="M11.0144 17C10.8025 17 10.2904 16.9124 9.99024 16.0658L8.98374 13.2632C8.84247 12.8643 8.33922 12.4945 7.95957 12.4945L2.66217 12.5139C2.57522 12.5139 2.48911 12.4951 2.40877 12.4584C2.32843 12.4217 2.25544 12.3679 2.19395 12.3002C2.13246 12.2324 2.08368 12.1519 2.0504 12.0634C2.01713 11.9748 2 11.8799 2 11.7841C2 11.6883 2.01713 11.5934 2.0504 11.5048C2.08368 11.4163 2.13246 11.3358 2.19395 11.268C2.25544 11.2003 2.32843 11.1465 2.40877 11.1098C2.48911 11.0731 2.57522 11.0543 2.66217 11.0543L7.95957 11.0348H7.9684C8.89545 11.0348 9.88429 11.7744 10.2286 12.728L11.0321 14.9662L12.8508 9.88653C13.1245 9.1275 13.6101 9.02045 13.8132 9.00099C14.0163 8.99126 14.5107 9.03992 14.855 9.76002L15.7732 11.6771C15.9322 12.0079 16.4089 12.329 16.7533 12.329H20.3378C20.6998 12.329 21 12.6599 21 13.0589C21 13.4579 20.6998 13.7887 20.3378 13.7887H16.7533C15.9145 13.7887 14.9963 13.1757 14.6078 12.3582L13.9191 10.918L12.0651 16.0658C11.7384 16.9027 11.2175 17 11.0144 17Z"
        fill="#1C1BA5"
      />
    </svg>
  ),
  Shopping: (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="63"
        height="63"
        rx="31.5"
        fill="#1C1BA5"
        stroke="#EEF1F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.892 25.796C36.892 24.524 36.3867 23.3042 35.4873 22.4047C34.5879 21.5053 33.3681 21.0001 32.0961 21.0001C31.4662 20.9971 30.8419 21.1183 30.2588 21.3567C29.6758 21.5951 29.1454 21.946 28.698 22.3894C28.2505 22.8328 27.8949 23.36 27.6512 23.9409C27.4076 24.5218 27.2807 25.145 27.278 25.7749V25.796"
        fill="#1C1BA5"
      />
      <path
        d="M36.892 25.796C36.892 24.524 36.3867 23.3042 35.4873 22.4047C34.5879 21.5053 33.3681 21.0001 32.0961 21.0001C31.4662 20.9971 30.8419 21.1183 30.2588 21.3567C29.6758 21.5951 29.1454 21.946 28.698 22.3894C28.2505 22.8328 27.8949 23.36 27.6512 23.9409C27.4076 24.5218 27.2807 25.145 27.278 25.7749V25.796"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35.3478 30.7966H35.2967H35.3478Z"
        fill="#1C1BA5"
      />
      <path
        d="M35.3478 30.7966H35.2967"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.8744 30.7966H28.8233H28.8744Z"
        fill="#1C1BA5"
      />
      <path
        d="M28.8744 30.7966H28.8233"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.085 42.0267C24.86 42.0267 24.0285 39.7509 22.4066 33.7371C20.7791 27.7045 24.0441 25.4475 32.085 25.4475C40.1259 25.4475 43.3909 27.7045 41.7634 33.7371C40.1426 39.7509 39.31 42.0267 32.085 42.0267Z"
        fill="#1C1BA5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Theater: (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.002 1.11084V4.04531"
        stroke="#1C1BA5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.002 16.5225V18.9761"
        stroke="#1C1BA5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.002 13.2058V7.36011"
        stroke="#1C1BA5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 12.6605C19.0268 12.6605 19.0268 8.12784 22 8.12784C22 2.87453 22 1 11.5 1C1 1 1 2.87453 1 8.12784C3.97316 8.12784 3.97316 12.6605 1 12.6605C1 17.9149 1 19.7895 11.5 19.7895C22 19.7895 22 17.9149 22 12.6605Z"
        stroke="#1C1BA5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Wedding: (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5 11.5084C14.5083 11.0441 14.424 10.5828 14.2521 10.1515C14.0801 9.72013 13.8239 9.32735 13.4985 8.99608C13.1731 8.66481 12.785 8.40169 12.3567 8.22207C11.9285 8.04246 11.4688 7.94995 11.0044 7.94995C10.5401 7.94995 10.0804 8.04246 9.65214 8.22207C9.22392 8.40169 8.83577 8.66481 8.51036 8.99608C8.18494 9.32735 7.92878 9.72013 7.75683 10.1515C7.58488 10.5828 7.50058 11.0441 7.50886 11.5084C7.52519 12.4247 7.90066 13.298 8.55443 13.9402C9.2082 14.5824 10.088 14.9422 11.0044 14.9422C11.9209 14.9422 12.8007 14.5824 13.4544 13.9402C14.1082 13.298 14.4837 12.4247 14.5 11.5084Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.005 20.0675C19.9454 20.0675 21.01 17.3893 21.01 11.5839C21.01 7.51655 20.471 5.33841 17.0827 4.4027C16.7242 4.29072 16.4015 4.08644 16.147 3.81038C15.6958 3.31474 15.3657 1.7956 14.2755 1.33552C13.1854 0.877665 8.80686 0.89878 7.73334 1.33552C6.66205 1.77448 6.31311 3.31474 5.86192 3.81038C5.60758 4.08673 5.28481 4.29105 4.92621 4.4027C1.53676 5.33841 1 7.51544 1 11.5839C1 17.3882 2.06462 20.0675 11.0061 20.0675H11.005Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4626 7.62085H16.4716"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
const data = [
  {
    title: 'Netflix Standard Plan',
    date: 'April 25, 2023, 09:30 am',
    amount: 132,
    line: lines[1],
    iconSrc: Icons.OnlineShopping,
    category: 'Online Shopping',
  },
  {
    title: 'Game Stream',
    date: 'April 25, 2023, 14:40 pm',
    amount: 986,
    line: lines[2],
    iconSrc: Icons.Entertainment,
    category: 'Entertainment',
  },
  {
    title: 'Health Pharmacy',
    date: 'April 25, 2023, 16:30 pm',
    amount: 620,
    line: lines[1],
    iconSrc: Icons.HealthCare,
    category: 'Health Care',
  },
  {
    title: 'Online Shopping',
    date: 'April 25, 2023, 16:30 pm',
    amount: 620,
    line: lines[3],
    iconSrc: Icons.Shopping,
    category: 'Shopping',
  },
  {
    title: 'Theater Ticket',
    date: 'April 25, 2023, 16:30 pm',
    amount: 26,
    line: lines[1],
    iconSrc: Icons.Theater,
    category: 'Theater',
  },
  {
    title: 'Wedding Photography',
    date: 'April 25, 2023, 16:30 pm',
    amount: 473,
    line: lines[3],
    iconSrc: Icons.Wedding,
    category: 'Wedding',
  },
  {
    title: 'Health Pharmacy',
    date: 'April 25, 2023, 16:30 pm',
    amount: 100,
    line: lines[1],
    iconSrc: Icons.HealthCare,
    category: 'Health Care',
  },
];

const Frame = ({ line, index, title, date, amount, category, iconSrc }) => {
  return (
    <tr className="h-16">
      <td>
        <div
          style={{
            backgroundColor: `${index % 2 === 0 ? '' : '#1c1ba5'}`,
          }}
          className="flex items-center justify-center w-[64px] h-[64px] rounded-[83px] border-solid border border-[#eef1f6] relative mx-auto my-0"
        >
          {iconSrc}
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-1">
          <div className="font-medium text-x-11 text-sm tracking-[0] leading-[normal]">
            {title}
          </div>
          <p className="font-normal text-x-10 text-[10px] tracking-[0] leading-[normal] whitespace-nowrap text-[#A5B3CD]">
            {date}
          </p>
        </div>
      </td>
      <td>
        <div className="flex gap-2">
          <div
            style={{
              backgroundColor: `${index % 2 === 0 ? '#1c1ba5' : '#80CC28'}`,
            }}
            className={`w-[12px] h-[12px] rounded-md`}
          />
          <div className="opacity-80 font-normal text-x-11 text-[12px] tracking-[0] leading-[normal]">
            {category}
          </div>
        </div>
      </td>
      <td>{line}</td>
      <td>
        <div className="font-normal text-x-11 text-sm tracking-[0] leading-[normal] whitespace-nowrap">
          -${amount}
        </div>
      </td>
    </tr>
  );
};

const MyComponent = () => {
  return (
    <table className="w-full border-separate border-spacing-6">
      <tbody className="">
        {data.map((item, index) => (
          <Frame
            key={index}
            index={index}
            title={item.title}
            date={item.date}
            amount={item.amount}
            category={item.category}
            iconSrc={item.iconSrc}
            line={item.line}
          />
        ))}
      </tbody>
    </table>
  );
};

const Card = ({ data }) => {
  const classNames = {
    1: {
      1: 'w-[60px] h-[60px] top-1 left-1',
      2: 'top-2 left-px w-[59px] h-[52px]',
      3: 'h-[24px] absolute w-[24px] top-[18px] left-[18px]',
    },
    2: {
      1: 'w-[59px] h-[59px] top-[2px] left-[2px]',
      2: 'w-[43px] h-[59px] top-0 left-0',
      3: 'w-[24px] h-[24px] top-[18px] left-[17px]',
    },
    3: {
      1: 'w-[84px] h-[84px] top-0 left-0',
      2: 'w-[50px] h-[60px] top-0 left-0',
      3: 'h-[23px] absolute w-[24px] top-[18px] left-[18px]',
    },
    4: {
      1: 'w-[73px] h-[73px] top-0 left-0',
      2: 'w-[59px] h-[38px] top-0 left-0',
      3: 'w-[24px] h-[24px] top-[18px] left-[17px]',
    },
  };
  return (
    <div className="flex items-center gap-[14px] mb-5 ml-3 mt-7">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex h-20 w-full items-start gap-[10px] bg-white rounded-[12px] shadow-[0px_14px_54px_#00000008] py-3 pl-5 pr-5"
        >
          <div className={`relative ${classNames && classNames[index + 1][1]}`}>
            <div
              className={`absolute z-20 ${
                classNames && classNames[index + 1][2]
              }`}
            >
              {item.svg1}
            </div>
            <div
              className={`absolute ${classNames && classNames[index + 1][3]}`}
            >
              {item.svg2}
            </div>
            <div className={`absolute z-10`}>{item.svg3}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-light text-[#a5b3cd] text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              {item.label}
            </div>
            <div className="font-light text-[#141736] text-[22px] tracking-[0] leading-[normal]">
              {item.amount}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
