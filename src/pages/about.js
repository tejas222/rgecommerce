import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import "../components/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock" 
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Teamsection from "../components/About/Teamsection"


const AboutPage = ( {data} ) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
      img = {data.img.childImageSharp.fluid}
      title="About Me"
      subtitle= ""
      heroclass="about-background"
     />
      <DualInfoblock heading="Message From CEO"/>
      <Infoblock heading="About Our Vision" />
      <Teamsection />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

export default AboutPage
