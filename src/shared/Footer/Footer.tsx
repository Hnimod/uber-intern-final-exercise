import facebookSvg from '../../images/icons8-facebook.svg';
import linkedinSvg from '../../images/icons8-linkedin.svg';
import youtubeSvg from '../../images/icons8-youtube-squared.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <section className={styles.copyright}>
          <p>© 2019 Uber Technologies Inc. All Rights Reserved.</p>
          <div className={styles.policies}>
            <a href="/">Terms of Use</a>
            <a href="/">Legal Notices</a>
            <a href="/">Privacy & Security</a>
          </div>
        </section>
        <section className={styles.socialMedia}>
          <a href="/">
            <img src={facebookSvg} alt="Facebook" />
          </a>
          <a href="/">
            <img src={linkedinSvg} alt="Linkedin" />
          </a>
          <a href="/">
            <img src={youtubeSvg} alt="Youtube" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
