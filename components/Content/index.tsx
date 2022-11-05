import styles from './style.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    paragraphs: number,
};

export default function Content() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    };
    
    return (
    <>
            <main className={styles.content}>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-center">
                            <div className="col-lg-3">
                                <fieldset>
                                    <label className="pb-2 d-block text-center" htmlFor="setParagraphs">how paragraphs do you want?</label>
                                    <input className="form-control" type="number" {...register("paragraphs")} />
                                </fieldset>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Generate</button>
                    </form>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <article>
                                <h2>ah sim claro</h2>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
    </>
    )
}