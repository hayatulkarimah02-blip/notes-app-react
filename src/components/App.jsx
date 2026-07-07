import React from 'react';
import { getInitialData } from '../utils/data';
import DevNoteEditor from './DevNoteEditor';
import DevNoteBoard from './DevNoteBoard';
import DevNoteSearch from './DevNoteSearch';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddNote({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  }

  handleDelete(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  handleArchive(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  handleSearch(keyword) {
    this.setState({ searchKeyword: keyword });
  }

  render() {
    const { notes, searchKeyword } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      note.body.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const activeDrafts = filteredNotes.filter((note) => !note.archived);
    const archivedDrafts = filteredNotes.filter((note) => note.archived);

    return (
      <main className="dev-app-container" data-testid="dev-app-container">
        <header className="dev-app-header">
          <h1>DevNotes Dashboard</h1>
          <DevNoteSearch onSearch={this.handleSearch} />
        </header>
        
        <div className="dev-app-workspace">
          <aside className="dev-app-sidebar">
            <DevNoteEditor addNote={this.handleAddNote} />
          </aside>
          
          <section className="dev-app-main-content">
            <div className="workspace-section">
              <h2>Notes Aktif ({activeDrafts.length})</h2>
              <DevNoteBoard
                notes={activeDrafts}
                onDelete={this.handleDelete}
                onArchive={this.handleArchive}
                dataTestId="active-drafts-board"
                searchKeyword={searchKeyword}
              />
            </div>
            
            <div className="workspace-section">
              <h2>Arsip Notes ({archivedDrafts.length})</h2>
              <DevNoteBoard
                notes={archivedDrafts}
                onDelete={this.handleDelete}
                onArchive={this.handleArchive}
                dataTestId="archived-drafts-board"
                searchKeyword={searchKeyword}
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;