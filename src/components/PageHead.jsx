import { Link } from "react-router-dom";
import BrushDivider from "./BrushDivider.jsx";
import BlobField from "./BlobField.jsx";

export default function PageHead({ eyebrow, title, crumb }) {
  return (
    <section className="page-head">
      <BlobField
        blobs={[
          { top: "-30%", left: "0%", size: 260, color: "#E4572E" },
          { top: "-10%", left: "80%", size: 220, color: "#1A8FA3", delay: "2s" },
        ]}
      />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <BrushDivider />
        <p className="breadcrumb">
          <Link to="/">Home</Link> / {crumb}
        </p>
      </div>
    </section>
  );
}
