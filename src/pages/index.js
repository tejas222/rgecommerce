import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "../components/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock" 
import DualInfoblock from "../components/Reusable/DualInfoblock"
import CourseCart from "../components/Cart/Coursecart"


const IndexPage = ( {data} ) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img = {data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle= "First Ecommerce project"
      heroclass="hero-background"
     />
      <Infoblock heading="About Us" />
      <CourseCart courses={data.courses} />
      <DualInfoblock heading="Out Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
		edges {
		  node {
		    id
        bookName
        authorName
        price
        image{
					fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
		}
}
}

`

export default IndexPage
