'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowBackIcon, GalleryIcon, HelpIcon } from '../../../public/icons';

interface Props {
  title: string;
  backUrl?: string;
  buttons?: ('tutorial' | 'gallery')[];
}

const Header = ({ title, backUrl, buttons }: Props) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-[56px] max-w-lg items-center justify-between bg-white px-2 shadow">
      <BackButton backUrl={backUrl} />
      <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-medium">{title}</h1>
      <div className="flex h-full">
        {buttons?.includes('gallery') && <IconButton href="/chat/gallery" icon={<GalleryIcon />} />}
        {buttons?.includes('tutorial') && <IconButton href="/chat/tutorial" icon={<HelpIcon />} />}
      </div>
    </header>
  );
};

export default Header;

const BackButton = ({ backUrl }: { backUrl?: string }) => {
  const router = useRouter();

  return backUrl ? (
    <Link href={backUrl} className="flex h-full w-10 items-center justify-center fill-slate-400">
      <ArrowBackIcon />
    </Link>
  ) : (
    <button
      className="flex h-full w-10 items-center justify-center fill-slate-400"
      onClick={() => router.back()}
    >
      <ArrowBackIcon />
    </button>
  );
};

const IconButton = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <Link href={href} className="flex h-full w-10 items-center justify-center fill-slate-400">
      {icon}
    </Link>
  );
};
