import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import swal from "sweetalert";

export default function Reservation() {
    // form validation
    const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm, isSubmitting, setSubmitting } = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: '',
            time: '',
            person: 'person ?'
        },
        validate: ({ name, email, date, time, person }) => {
            const errors = {}
            // Regex
            const nameRegex = new RegExp(/^[a-z0-9_-]{3,15}$/i);
            const emailRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i);
            const dateRegex = new RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i);
            const timeRegex = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/i);

            // error messages
            if (!nameRegex.test(name)) {
                errors.name = "name is not valid";
            }
            if (!emailRegex.test(email)) {
                errors.email = "email is not valid";
            }
            if (!dateRegex.test(date.split("-").reverse().join("-"))) {
                errors.date = "date is not valid";
            }
            if (person === "person ?") {
                errors.person = "person is not valid";
            }
            if (!timeRegex.test(time)) {
                errors.time = "time is not valid"
            }
            return errors;
        },
        onSubmit: ({ name, email, date, person, time }, { setSubmitting }) => {
            setSubmitting(true)
            sendFormToServer({ name, email, date, person, time });
            setTimeout(() => setSubmitting(false), 5000)
        },
    });

    // success modal
    const formSendSuccessFullModal = () => swal({
        title: "Table Reservation Success",
        icon: "success",
        buttons: "ok"
    });
    // error modal
    const formSendErrorModal = () => swal({
        title: "Table Reservation Failed",
        icon: "error",
        buttons: "try again"
    });

    // send form to server  
    const sendFormToServer = ({ name, email, date, person, time }) => {
        fetch('http://localhost:4000/reservations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, date, person, time })
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
        <div className="container-fluid my-5">
            <div className="container">
                <div className="reservation position-relative overlay-top overlay-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 my-5 my-lg-0">
                            <div className="p-5">
                                <div className="mb-4">
                                    <h1 className="display-3 text-primary">30% OFF</h1>
                                    <h1 className="text-white">For Online Reservation</h1>
                                </div>
                                <p className="text-white">Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                    ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                                <ul className="list-inline text-white m-0">
                                    <li className="py-2">
                                        <FontAwesomeIcon icon={faCheck} className='text-primary mr-3' />
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="py-2">
                                        <FontAwesomeIcon icon={faCheck} className='text-primary mr-3' />
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="py-2">
                                        <FontAwesomeIcon icon={faCheck} className='text-primary mr-3' />
                                        Lorem ipsum dolor sit amet
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                                <form onSubmit={handleSubmit} className="mb-5">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border-primary p-4"
                                            placeholder="Name"
                                            name='name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        {errors.name && touched.name && <div className='text-left text-danger my-1'>{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control bg-transparent border-primary p-4"
                                            placeholder="Email"
                                            name='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && <div className='text-left text-danger my-1'>{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input
                                                type="date"
                                                className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                                                placeholder="Date"
                                                data-target="#date"
                                                data-toggle="datetimepicker"
                                                name='date'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.date}
                                            />
                                            {errors.date && touched.date && <div className='text-left text-danger my-1'>{errors.date}</div>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input
                                                type="time"
                                                className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                                                placeholder="Time"
                                                data-target="#time"
                                                data-toggle="datetimepicker"
                                                name='time'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.time}
                                            />
                                            {errors.time && touched.time && <div className='text-left text-danger my-1'>{errors.time}</div>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            className="custom-select bg-transparent border-primary px-4"
                                            style={{ height: "49px" }}
                                            name='person'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.person}
                                        >
                                            <option defaultValue>person ?</option>
                                            <option value="1">person 1</option>
                                            <option value="2">person 2</option>
                                            <option value="3">person 3</option>
                                            <option value="3">person 4</option>
                                        </select>
                                        {errors.person && touched.person && <div className='text-left text-danger my-1'>{errors.person}</div>}
                                    </div>

                                    <div>
                                        <button
                                            className="btn btn-primary btn-block font-weight-bold py-3"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending ..." : "Book Now"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
