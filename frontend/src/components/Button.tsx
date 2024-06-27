import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...restProps }: ButtonProps) {
    return (
        <button className={clsx("button", className)} {...restProps}>{children}</button>
    );
}
