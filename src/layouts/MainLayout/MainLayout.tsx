import { ReactNode } from 'react';

import Header from '../../shared/Header';
import Footer from '../../shared/Footer';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
