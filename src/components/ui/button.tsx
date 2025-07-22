import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer hover:scale-102 active:scale-98",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-[oklch(0.6519_0.1345_77.03)] to-[oklch(0.9557_0.1104_102.71)] text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset,0px_4px_8px_0px_hsla(32,100,43,.25),0px_12px_16px_0px_hsla(32,97,17,.25)] text-primary-foreground ",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background/10 border-foreground rounded-full hover:text-accent-foreground backdrop-blur-sm",
        secondary:
          "bg-gradient-to-t from-black to-secondary text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset,0px_4px_8px_0px_rgba(0,0,0,0.25),0px_12px_16px_0px_rgba(0,0,0,0.10)] text-secondary-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:pr-3.5",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-112 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
