import type React from "react";
import { forwardRef } from "react";
import { Lock } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional icon to display at the start of the input */
  prefixIcon?: React.ReactNode;
  /** Optional icon to display at the end of the input */
  suffixIcon?: React.ReactNode;
  /** Label text for the input */
  label?: string;
  /** Error message to display below the input */
  error?: string;
  /** Helper text to display below the input */
  helperText?: string;
  /** Container className for the outer wrapper */
  containerClassName?: string;
  /** Wrapper className for the input wrapper */
  wrapperClassName?: string;
  /** Whether the input is in an error state */
  isError?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Whether to show a lock icon as the prefix */
  hasLock?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      prefixIcon,
      suffixIcon,
      label,
      error,
      helperText,
      className,
      containerClassName,
      wrapperClassName,
      isError,
      disabled,
      required,
      hasLock,
      id,
      ...inputProps
    },
    ref
  ) => {
    const inputId =
      id ||
      inputProps.name ||
      `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = isError || !!error;

    const finalPrefixIcon = hasLock ? (
      <Lock size={20} strokeWidth={2.5} className="text-text" />
    ) : (
      prefixIcon
    );

    return (
      <div
        className={`flex input-fade flex-col gap-1.5 w-full ${containerClassName || ""}`}
      >
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={`text-sm font-medium text-dark-text ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""}`}
          >
            {label}
          </label>
        )}

        {/* Input Wrapper */}
        <div
          className={`
            relative flex items-center gap-2
            px-3 py-2.5
            bg-primary
            border rounded-xl
            transition-all duration-200
            min-w-0
            ${
              hasError
                ? "border-red-500 focus-within:border-red-600 focus-within:ring-2 focus-within:ring-red-500/20"
                : "border-border focus-within:border-dark-text focus-within:ring-2 focus-within:ring-dark-text/10"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${wrapperClassName || ""}
          `}
        >
          {/* Prefix Icon */}
          {finalPrefixIcon && (
            <div className="flex-shrink-0 text-dark-text/60 w-5 h-5 flex items-center justify-center">
              {finalPrefixIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={`
              flex-1 w-full min-w-0
              bg-primary
              text-dark-text text-sm
              placeholder:text-dark-text/40
              outline-none
              disabled:cursor-not-allowed
              ${className || ""}
            `}
            {...inputProps}
          />

          {/* Suffix Icon */}
          {suffixIcon && (
            <div className="flex-shrink-0 text-dark-text/60 w-5 h-5 flex items-center justify-center">
              {suffixIcon}
            </div>
          )}
        </div>

        {/* Helper Text or Error */}
        {(error || helperText) && (
          <p
            className={`text-xs ${
              hasError ? "text-red-500" : "text-dark-text/60"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
