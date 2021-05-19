import axios from 'axios'
import {useEffect} from 'react'
import {saveMovies} from '../redux/movieReducer'
// import {connect} from 'react-redux' //old method, can now use useSelector and useDispatch to bring in state in line instead of at the bottom of the function in the export default line
import {useSelector,useDispatch} from 'react-redux'

const Movies = (props) => {
  const {movies} = useSelector(state=>state.movieReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    // dispatch(saveMovies(['some movie']))
    axios.get('/api/movies')
      .then(res=>{
        dispatch(saveMovies(res.data))
      })
      .catch(err=>console.log(err))
  },[])

    return(
      <div>
        {movies.map(movie=>{
          return(
            <div>{movie.title}</div>
          )
        })}
      </div>
    )
  }
  
  export default Movies