import styles from './styles.module.scss';
export function Section() {


    return (
        <section className={styles.content}>
            <div className={styles.text}>
                <a href="posts/por-que-comecar-a-treinar">Por que começar a treinar? <br />
                    <span>Quais são os benefícios?</span>
                </a>

            </div>

            <div className={styles.image}>
                <img src="/images/gym.svg" alt="Academia" />
            </div>
        </section>
    )
}