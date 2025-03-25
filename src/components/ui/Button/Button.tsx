import s from "./Button.module.css";

type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: ButtonProps) => {
  return <button className={s.button} {...props}></button>;
};
