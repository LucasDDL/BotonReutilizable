import { ArrowDown } from "@/icons/components";
import { PropsWithChildren, ReactNode } from "react";

type AccordionItemProps = PropsWithChildren<{
  className?: string
  title: ReactNode
  isOpen?: boolean
  onClick: () => void
}>

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, isOpen, className, onClick, children } = props

  return (
    <div className={`accordion-item border border-primary-100 rounded-lg flex flex-col items-stretch ${className}`} >
      <div className="flex gap-4 py-3 px-4  justify-center text-md font-semibold cursor-pointer" onClick={onClick}>
        <span className="inline-flex flex-1">{title}</span>
        <ArrowDown className={`${isOpen ? 'rotate-180' : ''} text-red`} />
      </div>
      {isOpen && <div className="px-4 mb-4 content text-sm">{children}</div>}
    </div>
  );
};


