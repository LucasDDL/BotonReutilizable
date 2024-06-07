import { ArrowDown } from "@/icons/components";
import { cn } from "@/lib";
import { PropsWithChildren, ReactNode } from "react";

type AccordionItemProps = PropsWithChildren & {
  className?: string
  title: ReactNode
  isOpen?: boolean
  onClick: () => void
}

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, isOpen, className, onClick, children } = props

  return (
    <div className={cn("accordion-item-col", className)} >
      <div className={cn("accordion-item-row")} onClick={onClick}>
        <span>{title}</span>
        <ArrowDown className={`${isOpen ? 'rotate-180' : ''} text-red`} />
      </div>
      {isOpen && <div className="px-4 mb-4 content text-sm">{children}</div>}
    </div>
  );
};


