export default function Button() {
  return (
    <button
      aria-label="Book a session"
      className="flex items-center gap-2"
      style={{ background: 'none', border: 'none', padding: 0, cursor: 'none' }}
    >
      <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
      <p className="b3">BOOK A SESSION</p>
      <span style={{ width: "12px", height: "12px", background: "var(--accent5)", display: "block" }}></span>
    </button>
  )
}