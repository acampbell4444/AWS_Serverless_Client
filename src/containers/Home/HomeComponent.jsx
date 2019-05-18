import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./Home.css";

export default class Home extends Component {
  
  componentDidMount() {
    const { isAuthenticated, getAllNotes } = this.props
    getAllNotes()
  }

  renderNotesList(notes) {
    return [{}].concat(notes).map(
      (note, i) =>
        i !== 0
          ? <LinkContainer
              key={note.noteId}
              to={`/notes/${note.noteId}`}
            >
              <ListGroupItem>
                <h4>{note.content.trim().split("\n")[0]}</h4>
                <h5>{"Created: " + new Date(note.createdAt).toLocaleString()}</h5>
              </ListGroupItem>
            </LinkContainer>
          : <LinkContainer
              key="new"
              to="/notes/new"
            >
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
    );
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p>A simple note taking app</p>
      </div>
    );
  }

  renderNotes(allNotes) {
    return (
      <div className="notes">
        <h1>Your Notes</h1>
        <ListGroup>
          {this.renderNotesList(allNotes)}
        </ListGroup>
      </div>
    );
  }

  render() {
    const { allNotes } = this.props
    return (
      <div className="Home container">
        {this.props.isAuthenticated ? this.renderNotes(allNotes) : this.renderLander()}
      </div>
    );
  }
}
