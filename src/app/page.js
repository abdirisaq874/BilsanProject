'use client';
import Image from 'next/image';
import SideBarComponent from './Components/SideBar';
import Header from './Components/Header';
import TransactionPro from './TransactionPro/page';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-4 font-normal ">
      <Link href="/Dashboard">
        click to see Dashboard and other related pages
      </Link>
      <br />
      <Link href="/Registeration">click to see Authentication pages </Link>
    </div>
  );
}
