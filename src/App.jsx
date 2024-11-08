import "./styles/app.scss";
import Showcase from "./components/Showcase/Showcase";
import Typography from "./components/Typography/Typography";
import Colors from "./components/Colors/Colors";

function App() {
  return (
    <div className="home">
      <div className="container">
        <h1>React .SCSS Starter</h1>
        <div className="home__showcases">
          <Showcase title="Colors">
            <Colors />
          </Showcase>
          <Showcase title="Typography">
            <Typography />
          </Showcase>
          <Showcase title="Buttons">
            <p>This is a showcase component</p>
          </Showcase>
        </div>
      </div>
    </div>
  );
}

export default App;
