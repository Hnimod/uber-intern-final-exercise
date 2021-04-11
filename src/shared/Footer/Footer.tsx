import facebookSvg from '../../images/icons8-facebook.svg';
import linkedinSvg from '../../images/icons8-linkedin.svg';
import youtubeSvg from '../../images/icons8-youtube-squared.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>© 2019 Uber Technologies Inc. All Rights Reserved.</p>
          <ul className={styles.policies}>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Legal Notices</a>
            </li>
            <li>
              <a href="/">Privacy & Security</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <a href="/">
            <img src={facebookSvg} alt="Facebook" />
          </a>
          <a href="/">
            <img src={linkedinSvg} alt="Linkedin" />
          </a>
          <a href="/">
            <img src={youtubeSvg} alt="Youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
