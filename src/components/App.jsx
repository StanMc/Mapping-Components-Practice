import React from "react";
import emojipedia from "./../emojipedia";
import Entry from "./Entry";

function createEntry(entry) {
  return (
    <Entry
      term={entry.name}
      detail={entry.meaning}
      emoji={entry.emoji}
      id={entry.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
