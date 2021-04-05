import { ReactNode } from 'react';

import MainLayout from '../../layouts/MainLayout';

import styles from './BackgroundImage.module.scss';

type Props = {
  children: ReactNode;
};

const BackgroundImage = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <MainLayout>
        <main className={styles.main}>{children}</main>
      </MainLayout>
    </div>
  );
};

export default BackgroundImage;
