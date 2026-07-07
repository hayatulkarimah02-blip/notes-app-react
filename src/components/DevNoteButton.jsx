import React from 'react';

function DevNoteButton({ variant, onClick, children }) {
  return (
    <button
      className={`btn-action btn-action--${variant}`}
      type="button"
      onClick={onClick}
      data-testid={`btn-action-${variant}`}
    >
      {children}
    </button>
  );
}

export default DevNoteButton;