import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Shitty Horror Movies</h1>
    <p>A shitty site all about shitty horror movies</p>
    <p>Hope you all enjoy</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

// export const query = graphql`
//   query {
//     allTmdbAccountFavoriteMovies {
//       totalCount
//       edges {
//         node {
//           accountFavoriteMoviesId
//           overview
//           title
//           id
//           backdrop_path {
//             id
//           }
//           budget
//           homepage
//           original_title
//           budget
//           poster_path {
//             publicURL
//           }
//           imdb_id
//           revenue
//           tagline
//           vote_average
//         }
//       }
//     }
//   }
// `

export default IndexPage
