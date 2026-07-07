import React from 'react';
import DevNoteCard from './DevNoteCard';

function groupDraftsByMonth(notes) {
  return notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(note);
    return groups;
  }, {});
}

function formatPeriod(key) {
  const [year, month] = key.split('-');
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
}

function DevNoteBoard({ notes, onDelete, onArchive, dataTestId = 'dev-board', searchKeyword = '' }) {
  const hasNotes = notes && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="dev-board" data-testid={dataTestId}>
        <p className="dev-board__empty-state" data-testid={`${dataTestId}-empty`}>
          Belum ada Notes di folder ini.
        </p>
      </div>
    );
  }

  const groupedNotes = groupDraftsByMonth(notes);

  return (
    <div className="dev-board dev-board--grouped" data-testid={dataTestId}>
      {Object.entries(groupedNotes).map(([periodKey, periodNotes]) => (
        <section key={periodKey} className="draft-period" data-testid={`${periodKey}-period`}>
          <div className="draft-period__header">
            <h3 className="draft-period__title">{formatPeriod(periodKey)}</h3>
            <span className="draft-period__badge" data-testid={`${periodKey}-badge`}>
              {periodNotes.length} dokumen
            </span>
          </div>
          <div className="draft-period__grid">
            {periodNotes.map((note) => (
              <DevNoteCard
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
                searchKeyword={searchKeyword}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default DevNoteBoard;