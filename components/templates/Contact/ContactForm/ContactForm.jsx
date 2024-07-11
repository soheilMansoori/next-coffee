export default function ContactForm() {
    return (
        <div className="contact-form">
            <form name="sentMessage">
                <div className="control-group">
                    <input type="text" className="form-control bg-transparent p-4" id="name" placeholder="Your Name"
                        required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                    <input type="email" className="form-control bg-transparent p-4" id="email" placeholder="Your Email"
                        required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                    <input type="text" className="form-control bg-transparent p-4" id="subject" placeholder="Subject"
                        required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                    <textarea className="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter your message"></textarea>
                    <p className="help-block text-danger"></p>
                </div>
                <div>
                    <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit" id="sendMessageButton">Send
                        Message</button>
                </div>
            </form>
        </div>
    )
}
