import BackgroundImage from '../../layouts/BackgroundImage';

import styles from './Guide.module.scss';

const Guide = () => {
  return (
    <BackgroundImage>
      <div className={styles.overlay}>
        <h1 className={styles.title}>How Uber works</h1>
        <section className={styles.content}>
          <p className={styles.introduction}>
            On-demand transportation technology is our core service, and the app
            that connects drivers-partners and riders is what makes it all
            possible. Here's how it works, step by step:
          </p>

          <section className={styles.steps}>
            <h3>Step 1: A rider opens the app</h3>
            <p>
              The rider enters their destination into the Where to? box on the
              top of the screen, taps each ride option to see the wait time, car
              sizes, and price; then confirms their pickup location and taps
              Request.
            </p>
            <h3>Step 2: The rider is matched with a driver</h3>
            <p>
              A nearby driver sees and chooses to accept the rider's trip
              request. the rider is automatically notified when the driver's
              vehicle is about a minute away
            </p>
            <h3>Step 3: The rider picks up the rider</h3>
            <p>
              The driver and the rider verify each other's names and the
              destination. Then the driver starts the ride.
            </p>
            <h3>Step 4: The driver takes the rider to the destination</h3>
            <p>
              The app gives the driver the option to access turn-by-turn
              directions. so the driver can focus on getting there and the rider
              can focus on enjoying a comfortable ride
            </p>
            <h3>Step 5: The driver and rider leave ratings and reviews</h3>
            <p>
              At the end of each trip, drivers and riders can rate each other
              from 1 to 5 stars. Riders can also give the driver compliments. In
              cities where tipping is available, they can also add a little
              extra to show their gratitude.
            </p>
          </section>
        </section>
      </div>
    </BackgroundImage>
  );
};

export default Guide;
