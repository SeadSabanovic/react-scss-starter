import "./_showcase.scss";

export default function Showcase({ title, children }) {
  return (
    <div className="showcase">
      <h2 className="showcase__title">{title}</h2>
      <div className="showcase__content">
        {children}
      </div>
    </div>
  );
}
