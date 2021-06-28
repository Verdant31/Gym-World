import styles from './styles.module.scss';



export function DayWorkout({ post }) {
  return (
    <>
      <div className={styles.mainContent}>
        <h1>Treino do dia</h1>
      </div>

      <div className={styles.workoutDay}>
        <div className={styles.text}>
          <h1>Peitoral</h1>
          <span> {post.excerpt}
          </span>
          <button><a href="/daytraining">
            Read more</a>
          </button>
        </div>

        <div className={styles.img}>
          <img src="/images/peitoral.svg" alt="" />
        </div>

      </div>
    </>
  );
}

