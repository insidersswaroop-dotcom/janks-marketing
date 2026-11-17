import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };




type PhoneInputProps = {
  value?: string;
  countryCode?: string;
  onChange?: (value: { countryCode: string; mobile: string }) => void;
  className?: string;
};

const countryCodes = [
  { code: "+91", label: "IN +91" },
  { code: "+1", label: "US +1" },
  { code: "+44", label: "UK +44" },
  { code: "+61", label: "AU +61" },
  { code: "+971", label: "UAE +61" },
];

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value = "", countryCode = "+91", onChange }, ref) => {
    const [code, setCode] = React.useState(countryCode);
    const [mobile, setMobile] = React.useState(value);

    const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newCode = e.target.value;
      setCode(newCode);
      onChange?.({ countryCode: newCode, mobile });
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value.replace(/\D/g, ""); // only numbers
      setMobile(val);
      onChange?.({ countryCode: code, mobile: val });
    };

    return (
      <div className={cn("flex gap-2", className)}>
        {/* Country Code */}
        <select
          value={code}
          onChange={handleCodeChange}
          className="h-10 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none"
        >
          {countryCodes.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>

        {/* Mobile Input */}
        <input
          ref={ref}
          type="tel"
          value={mobile}
          onChange={handleMobileChange}
          placeholder="Enter mobile number"
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none md:text-sm",
          )}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };


