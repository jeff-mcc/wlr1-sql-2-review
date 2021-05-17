module.exports = {
  getFavorites: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    if(!user){
      return res.status(500).send("User not found.")
    }
    db.favorites.get_favorites(user.user_id)
    .then((movies) => {
      res.status(200).send(movies)
    }).catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },
  addFavorite: (req, res) => {},
  deleteFavorite: (req, res) => {},
  editFavorite: (req, res) => {}
}