import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { Container } from "react-bootstrap"


const ContactForm = () => {
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data

        console.log('Name: ', name)
        console.log('Email: ', email)
        console.log('Subject: ', subject)
        console.log('Message: ', message)

        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            }
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            )
            reset()
        } catch (e) {
            console.log(e)
        }
        setSent(true)
    }
    if (sent)
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>
                <h3 className="fw-light">Thank you for contacting me!</h3>
            </div>
        )

    return (
        <Container className="text-dark bg-dark p-4 rounded">
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-3">
                        <div className="form-floating">
                            <input
                                type='text'
                                name='name'
                                {...register('name', {
                                    required: { value: true, message: 'Please enter your name' },
                                    maxLength: {
                                        value: 30,
                                        message: 'Please use 30 characters or less'
                                    }
                                })}
                                className={"form-control " + (errors.name ? "is-invalid" : "")}
                                id="floatingEmail"
                                placeholder="Marti"
                                aria-describedby="nameFeedback"
                            />
                            <label htmlFor="floatingEmail">Name <span className="text-danger">*</span></label>
                            <div id="nameFeedback" className="invalid-feedback">{errors.name && errors.name.message}</div>
                        </div>
                    </div>
                    <div className="col mb-3">
                        <div className="form-floating">
                            <input
                                type='email'
                                name='email'
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                                className={"form-control " + (errors.email ? "is-invalid" : "")}
                                id="floatingEmail"
                                placeholder="name@example.com"
                                aria-describedby="emailFeedback"
                            />
                            <label htmlFor="floatingEmail">Email address <span className="text-danger">*</span></label>
                            <div id="emailFeedback" className="invalid-feedback">Please enter a valid email address.</div>
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                            }
                        })}
                        className={"form-control " + (errors.subject ? "is-invalid" : "")}
                        id="floatingSubject"
                        placeholder="Hey, ..."
                        aria-describedby="subjectFeedback"
                    />
                    <label htmlFor="floatingSubject">Subject <span className="text-danger">*</span></label>
                    <div id="subjectFeedback" className="invalid-feedback">{errors.subject && errors.subject.message}</div>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        name='message'
                        {...register('message', {
                            required: true
                        })}
                        className={"form-control " + (errors.subject ? "is-invalid" : "")}
                        id="floatingMessage"
                        placeholder='Message'
                        aria-describedby="messageFeedback"
                        style={{ height: "100px" }}
                    />
                    <label htmlFor="floatingMessage">Message <span className="text-danger">*</span></label>
                    <div id="messageFeedback" className="invalid-feedback">Please enter a message</div>
                </div>

                <button className='btn btn-light' type='submit'>
                    Submit
                </button>
            </form>
        </Container>
    )
}

export default ContactForm