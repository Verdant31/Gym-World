import styles from './styles.module.scss';
import ReactPlayer from "react-player";

export function DayVideo() {
  return (
    <div className={styles.mainContent}>
      <h1>Recomendação de video do dia</h1>

      <div className={styles.text}>
        <p>Como nós sabemos que nao só de leitura vive o homem, essa seção será
          dedicada para colocar todo dia um video diferente sobre algum assunto relacionado
          a nutrição ou exercícios físicos.
        </p>
        <div className={styles.dayVideo}>
          <ReactPlayer width={"45rem"}
            url="https://www.youtube.com/watch?v=_Z4GgLDIpC4"
          />
        </div>

      </div>

    </div>
  )
}