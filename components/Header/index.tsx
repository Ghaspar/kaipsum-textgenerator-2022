import styles from './style.module.scss'

type DataProps = {
  children: any;
};


export default function Header() {

  return (
   <>
        <header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="title text-center">
                        <h1 className="fw-bold p-4">
                            Kaipsum!
                        </h1>
                        <p>the best text generator!</p>
                    </div>
                </div>
            </div>
        </header>
   </>
  )
}