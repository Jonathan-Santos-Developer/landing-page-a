'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toogleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className='fixed top-2 z-50 w-screen px-4'>
      <div className='container flex items-center justify-between rounded-lg bg-black py-3'>
        <div className='flex flex-shrink-0 items-center justify-between'>
          <Image
            className='mr-2'
            src='/logo.png'
            width={60}
            height={30}
            alt='logo'
          />
          <span className='text-white text-sm tracking-tight'>Logo Name</span>
        </div>
        <div className=' hidden lg:flex'>
          <ul className='flex items-center gap-4'>
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className='text-sm text-white hover:text-neutral-500'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-white hidden text-sm lg:flex'>
          <Button className='mr-2 bg-black' variant={'outline'}>
            Sign in
          </Button>
          <Button className='bg-slate-800'>Sign up</Button>
        </div>
        <div className='flex-col justify-end text-white md:flex'>
          <button onClick={toogleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className='rounded-md bg-black lg:hidden'>
          <ul className='flex flex-col items-center'>
            {NAV_LINKS.map((item, index) => (
              <li key={index} className='py-4'>
                <Link
                  href={item.url}
                  className='text-sm text-white hover:text-neutral-500 '
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex text-white justify-center items-center pb-8'>
            <Button variant={'outline'} className='mr-2 bg-black'>
              Singn in
            </Button>
            <Button className='bg-slate-800'>Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
