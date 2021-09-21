import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Icon } from "@iconify/react"

const ArticleTemplate = ({ data }) => {
  console.log(data)
  const arrayButtons = [
    "Jedzenie i picie",
    "Sport i aktywny wypoczynek",
    "Wskazówki podróżnicze",
    "Plaże",
    "Przyroda",
    "Ciekawe miejsca",
    "Podróżowanie z rodziną",
    "Przyszłość podróży",
  ]

  return (
    <Layout>
      <div style={{ width: "100%", height: "300px" }}>
        <BackgroundImage
          style={{ width: "100%", height: "100%", backgroundSize: "cover" }}
          fluid={data.contentfulBlogPosts.background.fluid}
        />
      </div>

      <div className="article">
        <div className="article__wrapper">
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulBlogPosts.description.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="article__icons">
          <span>
            <Icon icon="brandico:facebook-rect" />
          </span>
          <span>
            <Icon icon="akar-icons:twitter-fill" />
          </span>
        </div>

        <div className="article__footer">
          <div className="article__form">
            <h3>Wyszukuj i odkryj więcej artykułów </h3>
            <div className="article__input">
              <Icon icon="ant-design:search-outlined" />
              <input
                type="text"
                placeholder="Spróbuj wpisać miejsce, kategorię itd."
              ></input>
              <button className="button-avaiable button-article">Szukaj</button>
            </div>
            <p>Odkrywaj kategorie podróżnicze</p>
            <div className="article__buttons">
              {arrayButtons.map((el, index) => {
                return (
                  <button key={index} className="button-header art">
                    <p>{el}</p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ($slug: String) {
    contentfulBlogPosts(slug: { eq: $slug }, node_locale: { eq: "pl" }) {
      name
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
      background {
        fluid {
          src
        }
      }
    }
  }
`
