import BackgroundImage from '../../layouts/BackgroundImage';

import styles from './Commitment.module.scss';

const Commitment = () => {
  return (
    <BackgroundImage>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          At Uber we care about you <br></br>& the trust you give use
        </h1>
        <div className={styles.content}>
          <p className={styles.description}>
            Uber puts transportation at your fingertips. Understanding how and
            why we use your information should be just as easy. Our Privacy
            Policy and Privacy FAQs provide the latest information about the
            data we collect and how we use it. We also want you to know a few
            more things about our approach to privacy:
          </p>

          <div className={styles.guide}>
            <h3>Your data works for you</h3>
            <p>
              We use your data to provide convenient transportation and delivery
              options, to help drivers amximize their earnings, and to protect
              the safety and security of our users. And we dont't rent or sell
              your data - to anyone
            </p>
            <h3>Safety first</h3>
            <p>
              Your data enables us to determine the safest pick-ups and
              drop-offs, deter unsafe driving habits, help you avoid
              accident-prone roads, and to develop new features to get where
              you're going, safe and sound
            </p>
            <h3>You are in control</h3>
            <p>
              Through the settings in the Uber app or on you device, you can
              choose when to share your location, sync your contacts and
              calendar, personalize your app, and even delete you account
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Commitment;
