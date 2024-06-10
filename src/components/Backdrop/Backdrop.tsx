import { cn } from "@/lib";
import { PropsWithChildren } from "react";

export type BackdropProps = PropsWithChildren & {
  className?: string
  // TODO: implement this
  preventScroll?: boolean
}

export const Backdrop = (props: BackdropProps) => {
  const { children, className } = props;

  return (
    <div className={cn('backdrop fixed z-30 top-0 left-0 w-screen h-screen bg-neutral-900/85 pointer-events-none', className)}>
      {children}
    </div>
  );
};