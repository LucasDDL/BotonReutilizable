export const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className={`accordion-item ${isOpen? 'open' : ''}`} onClick={onClick}>
      <button>{title}</button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};


