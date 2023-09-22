import React, { useState } from "react";

function Greetings({ lang, children }) {
  const [selectedLang, setSelectedLang] = useState(lang);

  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  const greetingText = greetings[selectedLang] || greetings["en"];

  const handleChangeLang = (event) => {
    setSelectedLang(event.target.value);
  };

  return (
    <div className="Greetings">
      <select value={selectedLang} onChange={handleChangeLang}>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
      <p>
        {greetingText}, {children}!
      </p>
    </div>
  );
}

export default Greetings;