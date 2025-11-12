import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export default function Button(props: ButtonProps) {
  const { children, className, href, ...otherProps } = props;

  const baseClassName =
    "px-2.5 cursor-pointer !text-dark-text flex gap-1.5 leading-5 text-sm py-2 bg-transparent border border-border rounded-4xl font-normal" +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        target={props.target}
        rel={props.rel}
        {...(otherProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClassName}
      {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
