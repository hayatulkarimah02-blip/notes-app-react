import React from 'react';

class DevNoteEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      bodyError: false,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    const value = event.target.value;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value, bodyError: false });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.body.length < 10) {
      this.setState({ bodyError: true });
      return;
    }
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
    this.setState({ title: '', body: '', bodyError: false });
  }

  render() {
    const charsLeft = 50 - this.state.title.length;

    return (
      <div className="dev-editor" data-testid="dev-editor">
        <h2>Tulis Notes Baru</h2>

        {this.state.bodyError && (
          <div className="dev-editor__alert">
            Notes terlalu singkat (minimal 10 karakter).
          </div>
        )}

        <form onSubmit={this.onSubmit} className="dev-editor__form">
          <div className="dev-editor__header-wrapper">
            <span className={`char-counter ${charsLeft < 10 ? 'char-counter--danger' : ''}`}>
              Sisa karakter judul: {charsLeft}
            </span>
            <input
              className="dev-editor__input-title"
              type="text"
              placeholder="Contoh: DOM Manipulation"
              value={this.state.title}
              onChange={this.onTitleChange}
              required
            />
          </div>
          <textarea
            className="dev-editor__input-body"
            placeholder="Ketikkan poin-poin materi atau script kamu di sini..."
            value={this.state.body}
            onChange={this.onBodyChange}
            required
          />
          <button type="submit" className="btn-primary">
            Simpan Notes
          </button>
        </form>
      </div>
    );
  }
}

export default DevNoteEditor;
