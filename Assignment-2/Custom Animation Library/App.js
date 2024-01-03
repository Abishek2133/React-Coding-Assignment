import Animate from "./Animate";
import { Animations } from "./Animation";

const App = () => {
    return (
      <div>
        <Animate animation={Animations.fadeIn} duration={1} delay={0.5}>
          <h1>Animated Heading</h1>
        </Animate>
  
        <Animate animation={Animations.slideIn} duration={1.5} delay={1}>
          <p>Animated Paragraph</p>
        </Animate>
      </div>
    );
  };

  export default App;