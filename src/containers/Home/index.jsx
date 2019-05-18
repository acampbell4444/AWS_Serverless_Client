import Home 								                               from './HomeComponent'
import { connect }  					                             from 'react-redux'
import { getAllNotes }                                     from '../../reducers/note'


const mapStateToProps = (state, ownProps) => {
  const { sessionInfo } = state.auth || {}
  const isAuthenticated = Object.keys(sessionInfo).length > 0 ? true : false
  const { allNotes } = state.note
  
  return {
    isAuthenticated,
    allNotes
  }
}

const mapDispatchToProps = dispatch => ({
  getAllNotes(){
    dispatch(getAllNotes())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)