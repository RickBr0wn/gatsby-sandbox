import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import MovieInfoContainer from '../components/MovieInfoContainer'
import '../components/layout.css'

const styles = {
  movieContainer: {
    padding: '0',
    margin: '0',
  },
  backdrop: {
    filter: 'brightness(30%)',
    zIndex: '-10',
    opacity: '0.9',
  },
  poster: {
    position: 'absolute',
    top: '70%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
}

export const Movie = ({ data: { tmdbAccountFavoriteMovies: movie } }) => {
  console.log(movie.poster_path.childImageSharp.fixed)
  return (
    <div style={styles.movieContainer}>
      {movie.backdrop_path && (
        <Img
          fluid={movie.backdrop_path.childImageSharp.fluid}
          style={styles.backdrop}
        />
      )}
      {movie.poster_path && (
        <Img
          fixed={movie.poster_path.childImageSharp.fixed}
          style={styles.poster}
        />
      )}
      <MovieInfoContainer movie={movie} />
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
