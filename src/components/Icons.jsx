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

export function Skip(props) {
  return (
    <svg viewBox="0 0 48 28" fill="none" {...props}>
      <g>
        <path
          d="M22.997 12.268c1.334.77 1.334 2.695 0 3.464L3 27.27C1.666 28.039 0 27.076 0 25.537V2.463C0 .923 1.666-.04 3 .73l19.997 11.538z"
          fill="currentColor"
        />
        <path
          d="M46.997 12.268c1.334.77 1.334 2.695 0 3.464L27 27.27c-1.333.769-2.999-.194-2.999-1.733V2.463C24 .923 25.666-.04 27 .73l19.997 11.538z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function VolumeHigh(props) {
  return (
    <svg viewBox="0 0 58 58" fill="none" {...props}>
      <path
        d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643zM50.694 29c0-6.718-2.628-13.005-7.408-17.729a1.36 1.36 0 00-1.926.012 1.36 1.36 0 00.011 1.926c4.26 4.202 6.593 9.81 6.593 15.791s-2.345 11.589-6.593 15.791a1.36 1.36 0 00-.011 1.926c.26.272.612.408.963.408.34 0 .69-.136.951-.397 4.792-4.712 7.42-11.01 7.42-17.728z"
        fill="currentColor"
      />
      <path
        d="M43.602 29c0-4.928-1.88-9.55-5.302-13.016a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c2.912 2.957 4.52 6.9 4.52 11.113 0 4.214-1.608 8.157-4.52 11.113a1.36 1.36 0 00.012 1.926c.26.26.611.397.951.397.351 0 .703-.136.963-.408 3.421-3.49 5.313-8.111 5.313-13.039z"
        fill="currentColor"
      />
      <path
        d="M32.568 20.674a1.36 1.36 0 00-1.925-.011 1.36 1.36 0 00-.012 1.925c1.677 1.7 2.606 3.976 2.606 6.412a9.105 9.105 0 01-2.606 6.412 1.36 1.36 0 00.012 1.925c.26.261.611.397.951.397.351 0 .703-.136.963-.408 2.186-2.22 3.387-5.166 3.387-8.315.011-3.16-1.19-6.117-3.376-8.337z"
        fill="currentColor"
      />
    </svg>
  );
}

export function VolumeMute(props) {
  return (
    <svg viewBox="0 0 33 58" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.4 16.482a1.754 1.754 0 00-.78-.18c-.409 0-.805.135-1.134.396L15.1 22.656H9.12c-.998 0-1.813.816-1.813 1.813v9.062c0 .997.815 1.813 1.812 1.813H15.1l7.386 5.947c.329.26.737.397 1.133.397.26 0 .533-.057.782-.182a1.812 1.812 0 001.03-1.631v-21.75c0-.702-.396-1.337-1.03-1.643z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Dots(props) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={5} cy={24} r={5} />
      <circle cx={24} cy={24} r={5} />
      <circle cx={43} cy={24} r={5} />
    </svg>
  );
}

export function Lyrics(props) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 30.31V8.841A8.842 8.842 0 018.842 0h30.316A8.842 8.842 0 0148 8.842v21.466a8.842 8.842 0 01-8.842 8.842h-13.38l-8.122 7.123c-2.449 2.149-6.288.41-6.288-2.848v-4.273H8.842A8.842 8.842 0 010 30.309zM8.842 5.052h30.316a3.79 3.79 0 013.79 3.79v21.474a3.79 3.79 0 01-3.79 3.79H25.629c-1.2 0-2.374.429-3.296 1.225l-5.494 4.73a.253.253 0 01-.418-.192v-4.502c0-.694-.556-1.263-1.263-1.263H8.842a3.79 3.79 0 01-3.79-3.79V8.843a3.79 3.79 0 013.79-3.79zm6.316 19.803a.93.93 0 00.935.922c3.903 0 6.644-2.994 6.644-6.897 0-1.592-.505-2.69-.809-3.209-.795-1.351-2.147-2.526-3.802-2.526-2.387 0-4.13 1.933-4.13 4.308a4.315 4.315 0 004.307 4.32c.77 0 1.478-.215 2.11-.569-.897 1.617-2.35 2.729-4.32 2.729a.922.922 0 00-.935.922zm11.368 0a.93.93 0 00.935.922c3.903 0 6.644-2.994 6.644-6.897 0-1.592-.505-2.69-.808-3.209-.796-1.351-2.147-2.526-3.802-2.526-2.388 0-4.13 1.933-4.13 4.308a4.315 4.315 0 004.307 4.32c.77 0 1.477-.215 2.109-.569-.897 1.617-2.35 2.729-4.32 2.729a.922.922 0 00-.935.922z"
      />
    </svg>
  );
}

export function AirPlay(props) {
  return (
    <svg viewBox="0 0 59 59" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.498 51.099l1.3-1.5c.3-.3.3-.8 0-1.1-10.5-9.7-11.2-26.2-1.4-36.7 9.8-10.5 26.2-11.2 36.7-1.4 10.5 9.8 11.2 26.2 1.4 36.7-.5.5-.9 1-1.4 1.4-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.3 1.1.1 12-11.1 12.7-29.7 1.7-41.7-11.1-12-29.7-12.7-41.7-1.7-12 11-12.7 29.7-1.7 41.7.5.6 1.1 1.1 1.7 1.7.3.2.7.2 1-.1z" />
      <path d="M11.798 29.498c0-9.7 7.9-17.6 17.6-17.6 9.7 0 17.6 8 17.6 17.7 0 4.8-2 9.5-5.5 12.8-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.4 1.1.1 8.5-8 8.9-21.3 1-29.8s-21.3-8.9-29.8-1-9 21.2-1.1 29.7c.3.3.6.7 1 1 .3.3.8.3 1.1 0l1.3-1.5c.3-.3.3-.8 0-1.1-3.5-3.3-5.6-8-5.6-12.9z" />
      <path d="M20.198 29.498c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2c0 2.5-1 4.8-2.8 6.6-.3.3-.3.8 0 1.1l1.3 1.5c.3.3.8.3 1.1 0 5-4.9 5.2-12.9.3-18s-12.9-5.2-18-.3-5.2 12.9-.3 18l.3.3c.3.3.8.3 1.1 0l1.3-1.5c.3-.3.3-.8 0-1.1-1.7-1.7-2.7-4.1-2.7-6.6z" />
      <path d="M47.898 56.098l-17.4-19.8c-.5-.6-1.3-.6-1.9-.1l-.1.1-17.6 19.8c-.4.5-.4 1.2.1 1.7.2.2.5.3.7.3h35.3c.6 0 1.2-.5 1.2-1.2 0-.3-.1-.6-.3-.8z" />
    </svg>
  );
}

export function List(props) {
  return (
    <svg viewBox="0 0 66 66" fill="currentColor" {...props}>
      <circle cx={6.5} cy={15.5} r={4.5} />
      <rect x={17} y={12} width={47} height={7} rx={3.5} />
      <circle cx={6.5} cy={33.5} r={4.5} />
      <rect x={17} y={30} width={47} height={7} rx={3.5} />
      <circle cx={6.5} cy={51.5} r={4.5} />
      <rect x={17} y={48} width={47} height={7} rx={3.5} />
    </svg>
  );
}

export function Location(props) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.126 1.46c2.914-1.397 7.003.564 5.73 3.535L24.323 37.57c-1.499 3.499-6.717 2.428-6.717-1.379V22.563H3.505c-3.725 0-4.872-5.045-1.513-6.656L33.126 1.46zm-.439 5.234L9.103 17.564h10.003C22 17.563 22 17.5 22 17.5V31L32.687 6.694z"
      />
    </svg>
  );
}

export function Signal(props) {
  return (
    <svg viewBox="0 0 58 58" fill="currentColor" {...props}>
      <rect y={34} width={10} height={14} rx={2} />
      <rect x={16} y={27} width={10} height={21} rx={2} />
      <rect x={32} y={19} width={10} height={29} rx={2} />
      <rect x={48} y={11} width={10} height={37} rx={2} opacity="0.2" />
    </svg>
  );
}

export function Wifi(props) {
  return (
    <svg viewBox="0 0 28 28" fill="currentColor" {...props}>
      <path d="M5.106 12.556c.184.202.474.193.667-.018 2.171-2.294 5.028-3.507 8.218-3.507 3.217 0 6.082 1.213 8.244 3.525a.444.444 0 00.65-.018l1.231-1.24c.176-.175.176-.403.035-.57-2.118-2.61-6.064-4.483-10.16-4.483-4.087 0-8.042 1.863-10.151 4.482-.14.168-.14.396.026.572l1.24 1.257zm3.673 3.656c.211.202.493.184.695-.035 1.072-1.17 2.786-1.995 4.526-1.987 1.75-.008 3.463.835 4.562 2.013.184.211.448.202.65 0l1.38-1.353c.167-.159.184-.378.035-.554-1.371-1.661-3.876-2.856-6.627-2.856-2.76 0-5.265 1.195-6.636 2.856-.15.176-.132.387.035.554l1.38 1.362zM14 21.082c.211 0 .396-.098.756-.44l2.153-2.075a.422.422 0 00.053-.57c-.615-.783-1.732-1.416-2.962-1.416-1.266 0-2.4.66-3.006 1.485-.105.159-.053.352.097.501l2.153 2.075c.352.334.545.44.756.44z" />
    </svg>
  );
}

export function Battery(props) {
  return (
    <svg viewBox="0 0 28 28" fill="currentColor" {...props}>
      <path
        d="M5.76 20.174h14.193c1.647 0 2.942-.18 3.874-1.113.923-.932 1.095-2.209 1.095-3.856V12.48c0-1.656-.172-2.933-1.095-3.856-.941-.932-2.227-1.113-3.874-1.113H5.733c-1.62 0-2.915.18-3.839 1.113C.962 9.556.79 10.833.79 12.454v2.75c0 1.648.172 2.934 1.095 3.857.942.932 2.227 1.113 3.875 1.113zM5.506 18.4c-.932 0-1.81-.136-2.317-.633-.507-.507-.625-1.367-.625-2.309v-3.213c0-.95.118-1.82.616-2.326.507-.507 1.394-.634 2.344-.634h14.682c.942 0 1.82.127 2.318.634.506.506.624 1.366.624 2.308v3.231c0 .942-.117 1.802-.624 2.309-.498.506-1.376.633-2.318.633h-14.7zm20.738-2.109c.751-.045 1.756-1.005 1.756-2.453 0-1.44-1.005-2.408-1.756-2.453v4.906z"
        opacity="0.35"
      />
      <path d="M18.28 18H5.34c-.67 0-1.07-.097-1.351-.378-.27-.281-.68-.67-.68-1.34v-4.703c0-.681.41-1.092.68-1.373.281-.27.681-.368 1.373-.368H18.28c.67 0 1.07.098 1.351.379.27.27.378.67.378 1.34v4.724c0 .66-.108 1.06-.378 1.34-.281.282-.681.379-1.351.379z" />
    </svg>
  );
}
