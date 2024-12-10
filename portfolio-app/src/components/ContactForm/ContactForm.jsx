
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import './_contactForm.scss';

//-------------------------------------------------------------------------

const devMail = "thomas.pineau.webdev@protonmail.com";

export default function ContactForm() {

    const { register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async data => {
        console.log(data);
        const subject = encodeURIComponent(`Contact from ${data.name}`);
        const body = encodeURIComponent(`Message: ${data.mailBody}%0D%0A%0D%0AFrom: ${data.name}%0D%0AEmail: ${data.email}`);

        const mailToLink = `mailto:${devMail}?subject=${subject}&body=${body}`

        window.location.href = mailToLink;;
        reset();
    }

    const { t } = useTranslation('contactSection');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='name'>Name : </label>
            <input
                type='text'
                id='name'
                placeholder='John'
                {...register('name',
                    {
                        required: "You must enter your name"
                    }
                )}
            />
            {errors.name && (
                <p className='error'>{errors.name.message}</p>
            )}
            <label htmlFor='email'>E-mail : </label>
            <input
                type='email'
                id='email'
                placeholder='john.doe@email.com'
                {...register('email',
                    {
                        required: "E-mail is required",
                    }
                )}
            />
            {errors.email && (
                <p className='error'>{errors.email.message}</p>
            )}
            <label htmlFor='mailBody'>Message : </label>
            <textarea
                id='mailBody'
                {...register('mailBody',
                    {
                        required: "You must at least say something",
                        minLength: {
                            value: 30,
                            message: "The message needs to be at least 30 characters long"
                        },
                        maxLength: {
                            value: 1000,
                            message: "The message cannot be more than 1000 characters long"
                        }
                    }
                )}
            />
            {errors.mailBody && (
                <p className='error'>{errors.mailBody.message}</p>
            )}

            <input
                disabled={isSubmitting}
                type='submit'
            />

            {isSubmitting && (
                <span>Placeholder for icon animation</span>
            )}
        </form>
    );
} 