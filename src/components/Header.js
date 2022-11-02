import photo from "../img/react-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img className="img" src={photo} alt="Logo" />
          <h1 className="facts">ReactFacts</h1>
        </div>
        <div className="h3">
          <h3>React Info Site</h3>
        </div>
      </nav>
    </header>
  );
}
