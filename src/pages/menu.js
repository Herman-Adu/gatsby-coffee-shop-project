import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Menu from "../components/Home/Menu"
import { Link } from "gatsby"

const MenuPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Coffee Meun" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title=""
        styleClass="menu-background"
      />
      <Menu items={data.menu} />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "menu-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeeItem(sort: { fields: category, order: ASC }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default MenuPage
