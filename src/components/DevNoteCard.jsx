import React from 'react';
import { showFormattedDate } from '../utils/data';
import DevNoteButton from './DevNoteButton';

function highlightContent(text, keyword) {
  if (!keyword) return text;
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === keyword.toLowerCase()
      ? <mark key={index} className="text-highlight">{part}</mark>
      : part
  );
}

function DevNoteCard({ note, onDelete, onArchive, searchKeyword = '' }) {
  return (
    <div className="dev-card" data-testid="dev-card" data-note-id={note?.id}>
      <div className="dev-card__body" data-testid="dev-card-body">
        <h3 className="dev-card__title" data-testid="dev-card-title">
          {highlightContent(note.title, searchKeyword)}
        </h3>
        <p className="dev-card__timestamp" data-testid="dev-card-timestamp">
          Terakhir diubah: {showFormattedDate(note.createdAt)}
        </p>
        <p className="dev-card__snippet" data-testid="dev-card-snippet">
          {highlightContent(note.body, searchKeyword)}
        </p>
      </div>
      <div className="dev-card__footer" data-testid="dev-card-footer">
        <DevNoteButton variant="danger" onClick={() => onDelete(note.id)}>
          Hapus Notes
        </DevNoteButton>
        <DevNoteButton variant="secondary" onClick={() => onArchive(note.id)}>
          {note.archived ? 'Pulihkan Draf' : 'Arsipkan'}
        </DevNoteButton>
      </div>
    </div>
  );
}

export default DevNoteCard;