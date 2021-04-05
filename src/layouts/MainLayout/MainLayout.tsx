import { ReactNode } from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Sidebar from '../../shared/Sidebar';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
