import Button from "../UI/Button/Button";
import "./_buttons.scss";

const Buttons = () => {
  return (
    <div className="buttons">
      <div className="buttons__section">
        <code>Variants</code>
        <div className="buttons__grid">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="success">Success</Button>
          <Button variant="error">Error</Button>
          <Button variant="warning">Warning</Button>
        </div>
      </div>

      <div className="buttons__section">
        <code>Sizes</code>
        <div className="buttons__grid">
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </div>
      </div>

      <div className="buttons__section">
        <code>States</code>
        <div className="buttons__grid">
          <Button variant="primary">Normal</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
