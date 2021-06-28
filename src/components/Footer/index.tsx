import { TiSocialFacebook, TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.baseboard}>
      <div className={styles.social}>
        <a>
          <TiSocialFacebook size="40" color="white" />
        </a>
        <a>
          <TiSocialGithub size="40" color="white" />
        </a>
        <a>
          <TiSocialInstagram size="40" color="white" />
        </a>
        <a>
          <TiSocialLinkedin size="40" color="white" />
        </a>

      </div>

      <p className={styles.copy}>
        © 2021 Copyright: GymWorld.com.br
      </p>
    </footer>
  )
}