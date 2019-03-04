import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

/**
|--------------------------------------------------
| movie.
| accountFavoriteMoviesId: `Number`
| budget: `Number`
| homepage: `String`
| id: `String`
| imdb_id: `String`
| original_title: `String`
| overview: `String`
| revenue: `Number`
| tagline: `String`
| title: `String`
| vote_average: `Number`
|--------------------------------------------------
*/

const styles = {
  movieContainer: {
    height: '100vh',
  },
  poster: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

export const Movie = ({ data: { tmdbAccountFavoriteMovies: movie } }) => {
  console.log(movie.poster_path.childImageSharp.fixed)
  const { title, imdb_id } = movie
  return (
    <div style={styles.movieContainer}>
      {movie.backdrop_path && (
        <Img fluid={movie.backdrop_path.childImageSharp.fluid} />
      )}
      <h1>{title}</h1>
      <h4>{imdb_id}</h4>
      {movie.poster_path && (
        <Img
          fixed={movie.poster_path.childImageSharp.fixed}
          style={styles.poster}
        />
      )}
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    tmdbAccountFavoriteMovies(imdb_id: { eq: $id }) {
      accountFavoriteMoviesId
      overview
      title
      id
      backdrop_path {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      budget
      homepage
      poster_path {
        childImageSharp {
          fixed(width: 300, height: 450) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      original_title
      budget
      imdb_id
      revenue
      tagline
      vote_average
    }
  }
`
export default Movie
