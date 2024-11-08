import "./_colors.scss";

export default function Colors() {
  return (
    <div className="colors">
      <div className="colors-grid">
        <div className="color-box primary">
          <code>$primary</code>
        </div>
        <div className="color-box secondary">
          <code>$secondary</code>
        </div>
        <div className="color-box accent">
          <code>$accent</code>
        </div>
        <div className="color-box success">
          <code>$success</code>
        </div>
        <div className="color-box error">
          <code>$error</code>
        </div>
        <div className="color-box warning">
          <code>$warning</code>
        </div>
      </div>
    </div>
  );
}
