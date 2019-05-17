import App 								                           from './AppComponent'
import { connect }  					                       from 'react-redux'
import { logout, isUserAuthenticated, newUserAdded, updateLoginErrors, updateSignupErrors } from '../reducers/auth'

const mapStateToProps = (state, ownProps) => {
  const { sessionInfo } = state.auth || {}
  const isAuthenticated = Object.keys(sessionInfo).length > 0 ? true : false
  
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => ({
  logout(routerHistory){
  	return dispatch(logout(routerHistory))
  },
  isUserAuthenticated(){
  	return dispatch(isUserAuthenticated())
  },
  newUserAdded(str){
    return dispatch(newUserAdded(''))
  },
  updateSignupErrors(err){
    return dispatch(updateSignupErrors(''))
  }, 
  updateLoginErrors(err){
    return dispatch(updateLoginErrors(''))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(App)