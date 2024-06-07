'use client'

import { cn } from "@/lib";
import { useCallback, useState } from "react";

export type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string
  className?: string;
}

// TODO: refactor to use input & forwardRef
export const Switch = (props: SwitchProps) => {
  const { checked: checkedProp, onChange, className, label } = props;

  const isControlled = checkedProp !== undefined && onChange !== undefined;

  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(() => {
    if (!isControlled) {
      setChecked(prev => !prev);
      return
    }

    onChange?.(!checkedProp);
  }, [checkedProp, onChange, isControlled]);

  const active = isControlled ? checkedProp : checked;
  
  return (
    <div
      className={cn('switch relative w-12 h-7 cursor-pointer rounded-full bg-primary-200 hover:bg-primary-300', className)}
      onClick={handleChange}
    >
      <div
        className={cn('switch-thumb absolute w-6 h-6 rounded-full top-0.5 transition', active ? 'checked right-0.5 bg-primary' : 'left-0.5 bg-primary-400')}
      />
    </div>
  )
}