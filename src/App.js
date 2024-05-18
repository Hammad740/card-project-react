import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://scontent.fdbd3-1.fna.fbcdn.net/v/t39.30808-6/355630603_281082611101470_5728853038180798551_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AmHI3vu6iJIQ7kNvgGrTE57&_nc_ht=scontent.fdbd3-1.fna&oh=00_AYAR_3jolaPtXaWsKDAXLO7vaBxy9SuITKRJ1IaV0IIx7A&oe=664E1160"
      alt="user"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Mohammad Hammad Ansari</h1>
      <p>I am an aspiring web-developer</p>
    </div>
  );
}
function SkillList() {
  return (
    <div>
      <div className="skill-list">
        <Skill skill="React" emoji="🤝" color="Blue" />
        <Skill skill="Javascript" emoji="✨" color="Red" />
        <Skill skill="Nodejs" emoji="❤️" color="Yellow" />
        <Skill skill="HTML" emoji="😁" color="Purple" />
        <Skill skill="CSS" emoji="😎" color="Pink" />
      </div>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>{" "}
    </div>
  );
}
