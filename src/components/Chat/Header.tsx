import Link from 'next/link';
import { ArrowBackIcon } from '../../../public/icons';

const Header = () => {
  return (
    <header className="fixed z-10 top-0 left-0 right-0 max-w-lg h-[56px] mx-auto flex justify-between items-center bg-white shadow">
      <button className="flex justify-center items-center w-10 h-full">
        <Link href="/">
          <ArrowBackIcon className="fill-slate-400" />
        </Link>
      </button>
      <h1 className="text-center font-bold text-lg">메시지봇</h1>
      <div className="w-10" />
    </header>
  );
};

export default Header;
