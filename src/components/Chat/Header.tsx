import Link from 'next/link';
import { ArrowBackIcon } from '../../../public/icons';

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-[56px] max-w-lg items-center justify-between bg-white shadow">
      <button className="flex h-full w-10 items-center justify-center">
        <Link href="/">
          <ArrowBackIcon className="fill-slate-400" />
        </Link>
      </button>
      <h1 className="text-center text-lg font-bold">메시지봇</h1>
      <div className="w-10" />
    </header>
  );
};

export default Header;
