import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "check"
  | "document"
  | "email"
  | "knowledge"
  | "meeting"
  | "spark"
  | "systems";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  check: <path d="m5 12 4 4L19 6" />,
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5M10 13h5M10 17h5" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  knowledge: (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.9.6 1.5 1.3 1.5 2.1h4c0-.8.6-1.5 1.5-2.1A6 6 0 0 0 12 3Z" />
      <path d="M10 20h4M9.5 17h5" />
    </>
  ),
  meeting: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18M8 14h3M8 17h6" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2z" />
      <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7zM5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8z" />
    </>
  ),
  systems: (
    <>
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="13" width="7" height="7" rx="1.5" />
      <path d="M10 7.5h4a3 3 0 0 1 3 3V13M14 16.5h-4a3 3 0 0 1-3-3V11" />
    </>
  ),
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function LogoMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" className="logo-mark">
      <path
        fill="currentColor"
        d="M18 3.5 29.8 10v13L18 29.5 6.2 23V10L18 3.5Zm0 4.2-8.1 4.5v8.6l8.1 4.5 8.1-4.5v-8.6L18 7.7Z"
      />
      <circle cx="18" cy="16.5" r="3.2" fill="currentColor" />
      <path d="M18 20v5.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
