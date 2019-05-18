import { API, Storage } from 'aws-amplify'

//INITIAL STATE//

const initState = {
  newNote: null,
  allNotes: []
}

//////////////////

//REDUCER//

const reducer = (state=initState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {

  case CREATE_NOTE:
    newState.newNote = action.note
    break      

  case LIST_ALL_NOTES:
    newState.allNotes = action.notes
    break    

  default:
    return state
  }
  return newState
}

//////////////////

//CONSTANTS//

const CREATE_NOTE     = 'CREATE_NOTE'
const LIST_ALL_NOTES  = 'LIST_ALL_NOTES'


/////////////////

//ACTION CREATORS//

const postNote = note => dispatch => 
  dispatch({
    type: CREATE_NOTE,
    note
  })

const listAllNotes = notes => dispatch => 
  dispatch({
    type: LIST_ALL_NOTES,
    notes
  })


/////////////////////

//THUNKS//

export const createNote = (e, content, file, history) => dispatch => {
    const filename = `${Date.now()}-${file.name}`
    Storage.vault.put(filename, file, {
      contentType: file.type
    })
    .then(stored => {
      return API.post('notes', '/notes', {
        body: {content, attachment: stored.key}
      })
    })
    .then(result =>  {
      dispatch(postNote(result))
      history.push('/')
    })
    .catch(err => console.log('err: ' + err))
}

export const getAllNotes = () => dispatch => {
  return API.get("notes", "/notes")
  .then(allNotes => dispatch(listAllNotes(allNotes)))
  .catch(err => console.log(err))
}


/////////////////////////////

export default reducer