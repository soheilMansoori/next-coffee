import { useFormik } from "formik";
import swal from "sweetalert";

export default function ContactForm() {
    // form validation
    const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm, isSubmitting, setSubmitting } = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: '',
        },
        validate: ({ name, email, subject, message, phone }) => {
            const errors = {}
            // Regex
            const nameRegex = new RegExp(/^[a-z0-9_-]{3,15}$/i);
            const emailRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i);
            const phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i);
            const subjectRegex = new RegExp(/^[a-z0-9_-]{5,20}$/i);
            const messageRegex = new RegExp(/^[a-z 0-9_-]{5,100}$/i);

            // error messages
            if (!nameRegex.test(name)) {
                errors.name = "name is not valid";
            }
            if (!emailRegex.test(email)) {
                errors.email = "email is not valid";
            }
            if (!phoneRegex.test(phone)) {
                errors.phone = "phone number is not valid";
            }
            if (!subjectRegex.test(subject)) {
                errors.subject = "subject is not valid";
            }
            if (!messageRegex.test(message)) {
                errors.message = "message is not valid";
            }
            return errors;
        },
        onSubmit: ({ name, email, subject, message, phone }, { setSubmitting }) => {
            setSubmitting(true)
            sendFormToServer({ name, email, subject, message, phone });
            setTimeout(() => setSubmitting(false), 5000)
        },
    });

    // success modal
    const formSendSuccessFullModal = () => swal({
        title: "Your Message Send To Admin",
        icon: "success",
        buttons: "ok"
    });
    // error modal
    const formSendErrorModal = () => swal({
        title: "Contact Failed",
        icon: "error",
        buttons: "try again"
    });

    // send form to server  
    const sendFormToServer = ({ name, email, subject, message, phone }) => {
        fetch('http://localhost:4000/contact-us', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, subject, message, phone })
        }).then(res => {
            if (res.ok) {
                resetForm()
                setSubmitting(false)
                formSendSuccessFullModal()
            } else {
                setSubmitting(false)
                formSendErrorModal()
            }
        }).catch(error => formSendErrorModal());
    }
    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control bg-transparent p-4"
                        placeholder="Your Name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <p className="help-block text-danger m-2">{errors.name && touched.name && errors.name}</p>
                </div>
                <div className="control-group">
                    <input
                        type="email"
                        className="form-control bg-transparent p-4"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <p className="help-block text-danger m-2">{errors.email && touched.email && errors.email}</p>
                </div>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control bg-transparent p-4 mb-2"
                        placeholder="Your Phone"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    <p className="help-block text-danger m-2">{errors.phone && touched.phone && errors.phone}</p>
                </div>
                <div className="control-group">
                    <input
                        type="text"
                        className="form-control bg-transparent p-4 mb-2"
                        placeholder="Subject"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                    />
                    <p className="help-block text-danger m-2">{errors.subject && touched.subject && errors.subject}</p>
                </div>
                <div className="control-group">
                    <textarea
                        className="form-control bg-transparent py-3 px-4 mb-2"
                        rows="5"
                        placeholder="Message"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    <p className="help-block text-danger m-2">{errors.message && touched.message && errors.message}</p>
                </div>
                <div>
                    <button
                        className="btn btn-primary font-weight-bold py-3 px-5"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending ..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    )
}
