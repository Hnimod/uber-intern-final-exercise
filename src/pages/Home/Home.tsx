import carSvg from '../../images/car.svg';
import MainLayout from '../../layouts/MainLayout';
import { PrimaryButton } from '../../shared/Buttons';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <MainLayout>
        <section className={styles.heroSection}></section>
        <main className={styles.main}>
          <img src={carSvg} alt="uber car" />
          <h1>Your ride, on demand</h1>
          <p>
            Whehter your're headed to work, the airport, or out on the town.
            Uber connects you with a reliable ride in minutes. On tap and a car
            comes directly to you.
          </p>
          <PrimaryButton>Register with Phone</PrimaryButton>
        </main>
      </MainLayout>
    </div>
  );
};

export default Home;
