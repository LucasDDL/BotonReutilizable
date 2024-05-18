import  { useState } from 'react';
import { AccordionItem } from './AccordionItem';

export const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex? null : index);
  };

  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          isOpen={activeIndex === index}
          onClick={() => handleClick(index)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};


