import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>
                <h1>GYMWORLD
                    <img src="/images/logo.svg" alt="Logo" />
                </h1>
                <span>Uma vida, uma chance. Tá esperando o que?</span>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
}