import React from 'react'

const styles = {
  container: {
    color: '#fff',
    background: '#000',
    marginTop: '-350px',
    zIndex: '50',
    padding: '20px 80px 20px 80px',
    fontFamily: '"Raleway", sans-serif',
  },
  titleContainer: {
    padding: '10px',
    width: '700px',
    zIndex: '49',
  },
  h1: {
    fontWeight: 'lighter',
    fontSize: '56px',
  },
  paragraph: {
    margin: '0 auto',
    width: '600px',
  },
}

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

const MovieInfoContainer = ({
  movie: { title, imdb_id, revenue, tagline, overview, vote_average },
}) => {
  console.log(tagline)
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h1 style={styles.h1}>{title}</h1>
        <h2>{tagline}</h2>
        <h5>{imdb_id}</h5>
        <h5>{revenue}</h5>
        <h5>{vote_average}</h5>
        <div style={styles.paragraph}>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfoContainer
