'use client'

import { Accordion, AccordionItem } from "@/components";
import { Money } from "@/icons/components/Money";
import { useState } from "react";

export default function OtraPagina() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const handleClick = (index: string) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <main className="px-6 py-4">
      <h1>Otra pag</h1>
      <Accordion>
        <AccordionItem
          title={
            'its a gas'
          }
          isOpen={activeIndex === 'pepe'}
          onClick={() => handleClick('pepe')}
        >
          <Money /> to get away
        </AccordionItem>
        <AccordionItem
          title={
            'its a gas'
          }
          isOpen={activeIndex === 'alejandro'}
          onClick={() => handleClick('alejandro')}
        >
          <Money /> to get away
        </AccordionItem>
        <AccordionItem
          title={
            'its a gas'
          }
          isOpen={activeIndex === 'claudio'}
          onClick={() => handleClick('claudio')}
        >
          <Money /> to get away
        </AccordionItem>
        <AccordionItem
          title={
            'its a gas'
          }
          isOpen={activeIndex === 'wagner'}
          onClick={() => handleClick('wagner')}
        >
          <Money /> to get away
        </AccordionItem>
      </Accordion>
    </main>
  )
}