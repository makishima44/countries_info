import s from "./Button.module.css";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className={s.button} onClick={onClick}>
      {name}
    </button>
  );
};
