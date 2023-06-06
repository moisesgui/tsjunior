import React from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
  color: string;
  textColor: string;
};

export const DefaultButton: React.FC<ButtonProps> = ({
  onClick,
  text,
  color,
  textColor,
}) => (
  <button style={{ background: color, color: textColor }} onClick={onClick}>
    {text}
  </button>
);
