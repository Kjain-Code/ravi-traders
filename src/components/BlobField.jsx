const DEFAULT_BLOBS = [
  { top: "-10%", left: "5%", size: 320, color: "#E4572E", delay: "0s" },
  { top: "20%", left: "70%", size: 260, color: "#1A8FA3", delay: "2s" },
  { top: "60%", left: "15%", size: 300, color: "#F2A93B", delay: "4s" },
  { top: "70%", left: "80%", size: 220, color: "#7B4B94", delay: "1s" },
];

export default function BlobField({ blobs = DEFAULT_BLOBS }) {
  return (
    <div className="blob-field" aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="blob"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
