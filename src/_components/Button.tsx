/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import type {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";
import Link from "next/link";

type ButtonAsButton = {
  as?: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchor = {
  as: "a";
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAsLink = {
  as: "link";
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  children: ReactNode;
  className?: string;
  theme?: "outline" | "solid";
  color?: "error" | "primary" | "primary2" | "secondary";
} & (ButtonAsButton | ButtonAsAnchor | ButtonAsLink);

/**
 * A versatile Button component that can render as a <button>, <a> or a Link.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} [props.className] - Additional CSS classes to apply.
 * @param {("button" | "a" | "link")} [props.as="button"] - The HTML element type to render.
 * @param {("outline")} [props.theme] - The theme variant of the button.
 * @param {("error" | "primary" | "secondary")} [props.color] - The color variant of the button.
 *
 * @returns {JSX.Element} The rendered button, anchor, or link element.
 */
const Button = ({
  children,
  className,
  as = "button",
  theme,
  color = "primary",
  ...rest
}: ButtonProps) => {
  const baseClassName =
    "w-full flex items-center gap-3 justify-center whitespace-nowrap rounded-lg px-6 py-3 font-semibold text-center hover:shadow-lg duration-200 ease-in";

  const colorClassName =
    color === "error"
      ? "bg-error text-white hover:bg-errorHover"
      : color === "secondary"
        ? "bg-bgPowderBlue text-white hover:bg-textSecondary"
        : color === "primary"
          ? "bg-primary text-white hover:bg-primaryHover"
          : color === "primary2"
            ? "bg-primary2 text-white hover:bg-primary2Hover"
            : `bg-primary text-white hover:bg-primaryHover`;

  const getColorClassName = (color: string) => {
    if (color === "error") return "text-error border border-error";
    if (color === "secondary") return "text-secondary border border-secondary";
    if (color === "primary") return "text-primary border border-primary";
    if (color === "primary2") return "text-primary2 border border-primary2";
    return `text-${color} border border-${color}`;
  };

  const themeClassName =
    theme === "outline"
      ? `${getColorClassName(color)} bg-transparent hover:bg-${color}Hover hover:text-white`
      : colorClassName;

  const computedClassName = `${baseClassName} ${themeClassName} ${className ?? ""}`;

  if (as === "a" && "href" in rest) {
    return (
      <a
        className={computedClassName}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  } else if (as === "link" && "href" in rest) {
    return (
      <Link
        className={computedClassName}
        href={(rest as ButtonAsLink).href}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={computedClassName}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
};

export default Button;
