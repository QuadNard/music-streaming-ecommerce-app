

import React, { useMemo } from "react";

export function Characters({
  children = "",
  style,
  ...props
}) {
  const characters = useMemo(() => [...children], [children]);

  return (
    React.createElement("span", { "aria-label": children, role: "text" },
      characters.map((character, index) =>
        React.createElement("span", {
          "aria-hidden": true,
          "data-character": true,
          key: `${character}-${index}`,
          style: Object.assign({ "--character": index }, style),
          ...props
        }, character)
      )
    )
  );
}
