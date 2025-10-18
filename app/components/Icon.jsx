// app/components/Icon.jsx
export default function Icon({ name, className = "" }) {
  const cls = "w-7 h-7 " + className;

  switch (name) {
    case "markets":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="24" cy="24" r="16" />
            <path d="M24 8c-5 5-5 27 0 32m0-32c5 5 5 27 0 32" />
            <path d="M10 18h28M10 30h28" />
          </g>
        </svg>
      );
    case "targeting":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="24" cy="24" r="12" />
            <circle cx="24" cy="24" r="5" />
            <path d="M24 10V6M24 42v-4M38 24h4M6 24h4" />
            <path d="M31 17l9-9" />
            <path d="M40 8l-6 2 2-6" />
          </g>
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 12h4l3 18h18l3-12H15" />
            <circle cx="20" cy="36" r="2.5" />
            <circle cx="33" cy="36" r="2.5" />
            <path d="M7 8h10M12 8v6" />
            <path d="M30 8h11M36 8v6" />
          </g>
        </svg>
      );
    case "sch":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="8" y="11" width="28" height="24" rx="3" />
            <path d="M16 8v6M28 8v6M8 18h28" />
            <path d="M28.5 25.5l-6 6-3-3" />
            <path d="M36 21c3 1 4 1 6 0v6c0 3-2.2 5.3-6 6-3.8-.7-6-3-6-6v-6c2 1 3 1 6 0z" />
          </g>
        </svg>
      );
    case "auto":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 16a4 4 0 0 1 4-4h14l6 6v14a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V16z" />
            <path d="M28 12v4a2 2 0 0 0 2 2h4" />
            <path d="M18 30l12-12" />
            <circle cx="17" cy="21" r="2.2" />
            <circle cx="29" cy="31" r="2.2" />
          </g>
        </svg>
      );
    case "zero":
      return (
        <svg viewBox="0 0 48 48" className={cls} fill="none">
          <g
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M24 14l2 2 3-1 1 3 3 1-1 3 2 2-2 2 1 3-3 1-1 3-3-1-2 2-2-2-3 1-1-3-3-1 1-3-2-2 2-2-1-3 3-1 1-3 3 1 2-2z" />
            <circle cx="24" cy="24" r="4.5" />
            <path d="M14 34c2.5-3 5.5-3 8 0s5.5 3 8 0" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
