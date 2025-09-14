import React from "react";

export default function Badge({
  variant = "grey",
  shape = "square",
  children,
}) {
  return <div className={`badge ${shape} ${variant}`}>{children}</div>;
}
