import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-[16.2rem] flex flex-row items-center justify-between px-[10rem] bg-black-2 text-[3rem] font-sans font-bold">
      <p className="text-white-F text-[1.5rem]">@PJW980921 - 2024</p>
      <div className="flex flex-row gap-[5rem] text-white-F">
        <Link href={'https://github.com/PJW980921'} target="_blank">
          <Github />
        </Link>
        <Link href={'mailto:jackgg12322@gmail.com'} target="_blank">
          <Mail />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
