export type ButtonProps = {
  onClick: () => void;
  text: string;
  color: string;
  textColor: string;
};

export const DefaultButton = (props: ButtonProps) => (
  <button
    style={{ background: props.color, color: props.textColor }}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
