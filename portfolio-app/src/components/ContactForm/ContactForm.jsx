
import { useForm } from 'react-hook-form';
import './_contactForm.scss';

export default function ContactForm() {

    const { register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Name : </label>
            <input
                defaultValue={"John"}
                {...register('name')}
            />

            <label>E-mail : </label>
            <input
                type='email'
                {...register('email', { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <label>Message : </label>
            <input
                type='text-area'
                {...register('message')}
            />

            <input type='submit' />
        </form>
    );
} 