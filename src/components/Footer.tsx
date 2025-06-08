import { SiLinkedin, SiInstagram, SiX, SiGithub } from 'react-icons/si'

export function Footer() {
  const now = new Date();

  return (
    <div className="p-8 container flex w-full flex-col justify-between gap-4 sm:flex-row text-slate-700 border-t border-gray-300">
      <span className='text-sm'>© {now.getFullYear()} <span className='font-semibold'>Michał Dziuba</span>. All rights reserved.</span>

      <div className='flex gap-6 text-xl'>
        <SiGithub />
        <SiLinkedin />
        <SiX />
        <SiInstagram />
      </div>
    </div>
  );
}