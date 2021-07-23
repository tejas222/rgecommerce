import React from 'react'
import Heading from "../Reusable/Heading"
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xgerlbal");
    if (state.succeeded) {
        return <h3 align="center" className="py-4">Thanks for Contacting Us!</h3>;
    }

    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="number" name="phone" id="phone" className="form-control" placeholder="Enter Your Phone" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" name="description" id="description" className="form-control" placeholder="Enter Your Message" />
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">Submit</button>
                </form>     

            </div>
        </section>
    )
}
