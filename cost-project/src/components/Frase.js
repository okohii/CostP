import styles from './Frase.module.css'

function Frase() {

  return (
    <div className={styles.fraseContainer}>
    <div className={styles.fraseContent}><p>Minha frase</p></div>
  </div>
  ) 

}

export default Frase;