import styles from './style.module.scss'

export default function Header() {

  return (
   <>
        <div className={styles.title + " text-center pt-5"}>
            <h1 className="fw-bold pb-2">
                Kaipsum!
            </h1>
            <p>the best text generator!</p>
        </div>
   </>
  )
}