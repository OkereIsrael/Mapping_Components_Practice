import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//Create an entry components if we study the code we see the part that are repeating are the class name labeled prompt
//Create props to replace the hardcoded data
//Import the emojipedia constant
//Map through the emojipedia array and render entry component

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      desccription={emojiTerm.meaning}
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
