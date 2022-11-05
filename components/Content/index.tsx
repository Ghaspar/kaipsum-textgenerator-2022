import styles from './style.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from 'react';

type Inputs = {
    paragraphs: number,
};

export default function Content() {
    const [text, setText] = useState({
        "title": "ah sim claro",
        "paragraph": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    });
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        const text = await fetch('/api/generator',{
            method: 'POST',
            body: JSON.stringify(data)
          }).then(response=>response.json()).then(data=>{
            if(data){
                const phrases = JSON.parse(data.phrases)
                setText(phrases)
            }
          })
    };
    useEffect(() => {
        setText(text);
    }, [text])
    
    return (
    <>
            <main className={styles.content}>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row justify-content-center">
                            <div className="col-lg-3">
                                <fieldset>
                                    <label className="pb-2 d-block text-center" htmlFor="setParagraphs">how paragraphs do you want?</label>
                                    <input className="form-control" type="number" disabled {...register("paragraphs")} />
                                </fieldset>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Generate</button>
                    </form>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <article>
                                <h2>{text.title}</h2>
                                <p>
                                    {text.paragraph}
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
    </>
    )
}