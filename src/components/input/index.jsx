import { useId } from "react";

const formClasses =
  "block text-blue w-full appearance-none rounded-md border border-primary bg-inherit px-3 py-2 text-primary placeholder-primary focus:border-primary focus:bg-primary/10 focus:outline-1 outline-primary outline-2 focus:ring-primary sm:text-sm";

function Label({ id, children, className }) {
  return (
    <label
      htmlFor={id}
      className={`mb-1 block text-sm font-medium text-primary ${className}`}>
      {children}
    </label>
  );
}

export function TextField({
  label,
  type = "text",
  className,
  error,
  value,
  onChange,
  tooltipText,
  ...props
}) {
  let id = useId();

  return (
    <div className={className}>
      {label && (
        <Label
          id={id}
          className={`focus:text-primary flex items-center gap-1  ${
            error && "text-red"
          }`}>
          {label}
        </Label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        value={value}
        onChange={onChange}
        className={`${formClasses} border bg-white border-gray-300 focus:outline-primary ${
          error && "text-red border-red outline-red"
        }`}
      />
      {error && (
        <p className="text-[12px] opacity-[0.7] text-red">
          something went wrong
        </p>
      )}
    </div>
  );
}

export function SelectField({ label, className, ...props }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={`${formClasses} pr-8`} />
    </div>
  );
}
