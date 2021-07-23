import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Infoblock({heading} ) {
    return (
        
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                         <h2 className="display-3">{heading}</h2> 
                        <p className="lead text-white mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam nulla vitae quo rerum? Beatae facilis nesciunt voluptate sed totam sunt nobis vel, quas maiores eius corporis officiis repellat voluptatem ea optio repellendus, nulla laborum, eum blanditiis inventore. Asperiores et sit non iure, quae delectus incidunt neque eum animi doloribus, illo distinctio soluta blanditiis corrupti minus voluptatem enim, veniam repellendus.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
           
        </section>
    )
}
