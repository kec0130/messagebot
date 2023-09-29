import { getMetaData } from '../sharedMetadata';

export const metadata = getMetaData({ url: '/chat' });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-[100dvh] h-full py-[70px] px-4 mb-safe bg-sky-50">{children}</div>;
};

export default Layout;
