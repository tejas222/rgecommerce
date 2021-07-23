import React from 'react'
import Heading from "../Reusable/Heading"

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/f/xgerlbal" method="POST">
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
