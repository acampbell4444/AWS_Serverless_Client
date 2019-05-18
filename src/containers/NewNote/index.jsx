import NewNote 								                             from './NewNoteComponent'
import { connect }  					                             from 'react-redux'
import { reduxForm }                                       from 'redux-form'
import _                                                   from 'lodash'
import { createNote }                                      from '../../reducers/note'


const mapStateToProps = (state, ownProps) => {
  const { isLoading } = state.note
  const content                = _.get(state, 'form.NewNoteForm.values.content', '')
  const upload                 = _.get(state, 'form.NewNoteForm.values.upload', '')
  
  return {
    content,
    upload,
    isLoading

  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit(e, content, upload, history){
    e.preventDefault()
    return dispatch(createNote(e, content, upload[0], history))
  },
})


const NewNoteForm = reduxForm({
  form: 'NewNoteForm',
})(NewNote)

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm)