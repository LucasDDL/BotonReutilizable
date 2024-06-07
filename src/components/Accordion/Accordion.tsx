import { cn } from '@/lib';
import { PropsWithChildren } from 'react';

export type AccordionProps = PropsWithChildren & {
  className?: string;
}

export const Accordion = (props: AccordionProps) => {
  const { className, children } = props
  return (
    <div className={cn("accordion", className)}>
      {children}
    </div>
  );
};


