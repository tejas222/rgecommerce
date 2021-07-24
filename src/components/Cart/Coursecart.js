import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'


const getCaty = items =>{
    let holdItems = items.map(items => {
        return items.node.authorName
    })

    let holdcategories = new Set(holdItems)
    let categories = Array.from(holdcategories)
    categories = ["All", ...categories]
    return categories
}


export default class CourseCart extends Component {
    constructor (props){
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }
    catyClicked = category =>{
        let originalCourses = [...this.state.courses]    

        if (category === 'all') {
            this.setState(() => {
                return { mycourses: originalCourses }
            })            
        }
        else {
            let authors = originalCourses.filter(({node}) => node.authorName === category )
            this.setState(()=>{
                return { mycourses: authors}
            })
        }
    }

    render() {
        console.log(this.state.courses);
        return (
            <div>
                 <section className="py-5">
                    <div className="container" id="cources">
                        <Heading title="Courses" />
                        <div className="row my-3">
                            <div className="col-10 mx-auto text-center">
                                {
                                    this.state.mycategories.map((category, index) => {
                                        
                                        return (
                                            <button
                                            type="button"
                                            className="btn btn-warning m-3 px-3"
                                            key={index}
                                            onClick={ ()=> {
                                                this.catyClicked(category)
                                            } }
                                            >{category}</button>
                                        )
                                    })
                                }
                            </div>
                        </div>
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
