import s from "./Input.module.css";

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
  return <input className={s.input} type="text" value={value} onChange={onChange} />;
};
