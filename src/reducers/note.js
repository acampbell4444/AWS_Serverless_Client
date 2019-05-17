import { API } from 'aws-amplify'

//INITIAL STATE//

const initState = {
  newNote: null
}

//////////////////

//REDUCER//

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

  case CREATE_NOTE:
    newState.newNote = action.note
    break    


  default:
    return state
  }
  return newState
}

//////////////////

//CONSTANTS//

const CREATE_NOTE  = 'CREATE_NOTE'


/////////////////

//ACTION CREATORS//

const postNote = note => dispatch => 
  dispatch({
    type: CREATE_NOTE,
    note
  })


/////////////////////

//THUNKS//

export const createNote = (e, content, upload, history) => dispatch => {
    const body = { content, attachment: upload}
    API.post('notes', '/notes', {
      body: {content}
    })
    .then(result => console.log('res', result))
    .then(() =>  dispatch(postNote(body)))
    .catch(err => console.log('err: ' + err))

    // history.push('/')
}




/////////////////////////////

export default reducer