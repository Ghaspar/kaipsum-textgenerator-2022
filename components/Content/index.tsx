import styles from './style.module.scss'

type DataProps = {
  children: any;
};


export default function Content() {

  return (
   <>
        <main>
            <div className="container">
                <div className="row">
                    <form>
                        <textarea></textarea>

                    </form>
                </div>
            </div>
        </main>
   </>
  )
}