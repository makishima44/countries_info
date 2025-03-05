import { ComponentPropsWithoutRef } from "react";
import s from "./Input.module.css";

type InputProps = {} & ComponentPropsWithoutRef<"input">;

export const Input = ({ ...props }: InputProps) => {
  return <input className={s.input} type="text" {...props} />;
};
