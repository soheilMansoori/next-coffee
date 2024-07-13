import swal from 'sweetalert';
import { useState } from 'react'
export default function Offer() {
    const [emailValue, setEmailValue] = useState("");
    const showSuccessModal = () => swal({
        icon: "success",
        title: "Your Email Send Success",
        buttons: "OK"
    });
    const showErrorModal = (message) => swal({
        icon: "error",
        title: message,
        buttons: "OK"
    });

    // send email to server 
    const sendEmailToSever = (event) => {
        event.preventDefault();
        const emailRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i);
        if (emailRegex.test(emailValue)) {
            fetch("http://localhost:4000/newsLetters", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailValue })
            }).then(res => {
                if (res.ok) {
                    setEmailValue("");
                    showSuccessModal("Send Your Email Failed");
                } else {
                    showErrorModal()
                }
            }).catch(error => showErrorModal("Send Your Email Failed"));
        } else {
            showErrorModal("Your Email Is Not Valid");
        }
    }
    return (
        <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
            <div className="container py-5">
                <h1 className="display-3 text-primary mt-3">50% OFF</h1>
                <h1 className="text-white mb-3">Sunday Special Offer</h1>
                <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
                <form onSubmit={sendEmailToSever} className="form-inline justify-content-center mb-4">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control p-4"
                            placeholder="Your Email"
                            style={{ height: "60px" }}
                            value={emailValue}
                            onChange={(event) => setEmailValue(event.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary font-weight-bold px-4" type="submit">Join</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
