import styles from './style.module.scss'
import Title from './Title'

type DataProps = {
  children: any;
};


export default function Header() {

  return (
   <>
        <header>
            <div className="container">
                <div className="row justify-content-center">
                    <Title />
                </div>
            </div>
        </header>
   </>
  )
}