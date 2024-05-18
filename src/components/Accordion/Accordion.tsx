import  { PropsWithChildren } from 'react';

export const Accordion = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
};


