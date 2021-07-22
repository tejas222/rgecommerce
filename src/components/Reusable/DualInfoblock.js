import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque veniam voluptate a aliquid dicta eveniet debitis doloribus, provident fuga eaque doloremque rem! Voluptates, fuga cum assumenda ut omnis labore quidem illo cumque commodi debitis laborum ex libero recusandae ipsa molestiae hic deserunt accusamus pariatur id, mollitia minima dolores velit, provident aliquam. Obcaecati error assumenda, architecto facere tenetur perferendis nobis ipsum labore, quisquam excepturi ducimus quia iste quae pariatur fugiat repellat! Officia distinctio consequuntur quis nesciunt voluptatem quaerat placeat ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam molestias et debitis reiciendis, consequuntur dolorum similique rerum officiis ducimus consequatur minima! Molestias esse laudantium temporibus quasi ea iste, mollitia necessitatibus quisquam, obcaecati provident expedita aliquam eos quam pariatur dolore eligendi hic. Tenetur cupiditate dolore perspiciatis magnam architecto ducimus debitis dicta velit rerum qui saepe repellendus maiores, esse excepturi tempore ex iste eligendi soluta voluptates molestiae, fugiat amet. Voluptates sequi praesentium sint earum veritatis pariatur quis eius laborum minus? Esse?
                        </p>
                    </div>
                    <div className="col-4">
                        <div className="card" >
                            <img src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="img goes here" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aspernatur omnis! Facilis voluptates rem tenetur debitis qui consequuntur at magni nobis adipisci? Error, eum consequatur similique saepe repellat veniam quae?  </p>
                                    <a href="#" className="btn btn-primary btn-block">{heading}</a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
