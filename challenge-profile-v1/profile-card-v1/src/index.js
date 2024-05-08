import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const skills = [
  {
    skill: "OG Character",
    level: "advanced",
    color: "#FF6600",
  },
  {
    skill: "Rich",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Gold hand",
    level: "advanced",
    color: "#009900",
  },
  {
    skill: "Cool",
    level: "intermediate",
    color: "#0066CC",
  },
  {
    skill: "Former vilan",
    level: "begginer",
    color: "#FF9966",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar profilePicture="midas.png" name="Midas" />
      <div className="data">
        <Intro
          descriptionText="Very popular Fortnite character, turns everything he touches into gold. "
          name="Midas"
        />
        <SkillList />
      </div>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.profilePicture} alt={props.name} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.descriptionText}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill
          nameOfSkill={skills.skill}
          emoji={
            skills.level === "advanced"
              ? "✨"
              : skills.level === "intermediate"
              ? "🔥"
              : "😈"
          }
          colorOfBox={skills.color}
        ></Skill>
      ))}
    </div>
  );
}

function Skill({ colorOfBox, nameOfSkill, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: colorOfBox }}>
      <p>{nameOfSkill}</p>
      <p>{emoji}</p>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
