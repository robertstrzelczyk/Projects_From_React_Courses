import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro
          nameAndSurname="Robert Strzelczyk"
          description=" Full-stack web developer. When not coding, I like to play football and
        computer games."
        />
        <div className="skill-list">
          <SkillList
            name="HTML + CSS"
            emoticon="💪"
            backgroundColor="#0000ff"
          />
          <SkillList
            name="JavaScript"
            emoticon="💪"
            backgroundColor="#ffff00"
          />
          <SkillList
            name="Web design"
            emoticon="💪"
            backgroundColor="#99ff66"
          />
          <SkillList name="C#" emoticon="💪" backgroundColor="#ff3300" />
          <SkillList
            name="Git and GitHub"
            emoticon="💪"
            backgroundColor="#cc00ff"
          />
          <SkillList
            name="React in the future"
            emoticon="😂"
            backgroundColor="#00ffff"
          />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img
        src="png-clipart-computer-icons-avatar-user-avatar-heroes-monochrome.png"
        alt="avatar"
        width={440}
      ></img>
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.nameAndSurname}</h1>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <p className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.name} {props.emoticon}
    </p>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
