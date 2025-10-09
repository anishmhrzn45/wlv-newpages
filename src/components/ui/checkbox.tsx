import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer shrink-0 rounded-[2px] border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
      "h-[24px] w-[24px] min-h-[24px] min-w-[24px] max-h-[24px] max-w-[24px]",
      "md:h-[22px] md:w-[22px] md:min-h-[22px] md:min-w-[22px] md:max-h-[22px] md:max-w-[22px]",
      "lg:h-[18px] lg:w-[18px] lg:min-h-[18px] lg:min-w-[18px] lg:max-h-[18px] lg:max-w-[18px]",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-[15px] w-[15px] md:h-[14px] md:w-[14px] lg:h-[11px] lg:w-[11px]" strokeWidth={2.5} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
