export function Play(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M32.997 18.268c1.334.77 1.334 2.695 0 3.464L13 33.27c-1.333.769-2.999-.194-2.999-1.733V8.463c0-1.54 1.666-2.502 3-1.733l19.997 11.538z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Pause(props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={21.8426} y={6} width={8.2963} height={28} rx={2.07407} fill="currentColor" />
      <rect x={9.65741} y={6} width={8.2963} height={28} rx={2.07407} fill="currentColor" />
    </svg>
  );
}
