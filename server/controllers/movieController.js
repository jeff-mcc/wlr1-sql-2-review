module.exports = {
  getMovies: (req, res) => {
    const db = req.app.get('db')
    db.movies.get_movies().then((movies) => {
      res.status(200).send(movies)
    }).catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}