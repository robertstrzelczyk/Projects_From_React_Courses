import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skillsList = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#0000ff",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#ffff00",
  },
  {
    skill: "Web design",
    level: "advanced",
    color: "#99ff66",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#cc00ff",
  },
  {
    skill: "C#",
    level: "advanced",
    color: "#ffff00",
  },
  {
    skill: "React in the future",
    level: "beginner",
    color: "#00ffff",
  },
];

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
          <SkillList />
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

function SkillList() {
  const skills = skillsList;
  console.log(skills);
  return (
    <ul className="skill-list">
      {skills.map((p) => (
        <Skill skillObj={p}></Skill>
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill">
      <div>
        <p style={{ backgroundColor: skillObj.color }}>
          {skillObj.skill}
          {skillObj.level === "advanced" ? (
            <>💪</>
          ) : skillObj.level === "intermediate" ? (
            <>👍</>
          ) : (
            <>😂</>
          )}
          {/* 
           drugi sposób na wyświetlanie emotikonów jest użycie operatora końcowego
           <span>{skillObj.level === "advanced" && "💪"}
           <span>{skillObj.level === "intermediate" && "👍"}
           <span>{skillObj.level === "beginner" && "😂"}
          */}
        </p>
      </div>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
