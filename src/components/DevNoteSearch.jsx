import React from 'react';

class DevNoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }

  onClearHandler() {
    this.setState({ keyword: '' });
    this.props.onSearch('');
  }

  render() {
    return (
      <div className="dev-search-bar" data-testid="dev-search-bar">
        <input
          type="text"
          placeholder="Cari judul notes atau keyword..."
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
          data-testid="dev-search-input"
        />
        {this.state.keyword && (
          <button className="dev-search-bar__clear" onClick={this.onClearHandler}>
            ×
          </button>
        )}
      </div>
    );
  }
}

export default DevNoteSearch;