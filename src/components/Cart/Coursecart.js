import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'


export default class CourseCart extends Component {
    constructor (props){
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
        }
    }
    render() {
        console.log(this.state.courses);
        return (
            <div>
                 <section className="py-5">
                    <div className="container">
                        <Heading title="Courses" />
                        <div className="row ">
                            {this.state.mycourses.map(({node}) =>{
                                  return (
                                      <div
                                      key = {node.id}
                                      className="col-11 col-md-6 d-flex mx-auto my-3" >
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex ">
                                                <h6 className="mb-0">{node.bookName}</h6>
                                                <h6 className="mb-0 text-success ml-5">${node.price}</h6>
                                            </div>
                                            <p className="text-muted">
                                                <small>{node.authorName}</small>
                                            </p>
                                            <button 
                                            className="btn-warning snipcart-add-item"
                                            data-item-id={node.id}
                                            data-item-name={node.bookName}
                                            data-item-price={node.price}
                                            data-item-url="/"
                                            data-item-image={node.image.fixed.src}
                                            >Add to Cart</button>
                                        </div>
                                      </div>
                                  )  
                            })

                            }
                        </div>
                    </div>
                 </section>
            </div>
        )
    }
}