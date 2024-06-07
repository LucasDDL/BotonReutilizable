'use client'

import { cn } from "@/lib";
import { useCallback, useState } from "react";

export type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string
  className?: string;
  color?: 'primary' | 'neutral';
  size?: 'sm' | 'md' | 'lg'
}

// TODO: refactor to use input & forwardRef
export const Switch = (props: SwitchProps) => {
  const { checked: checkedProp, onChange, className, label, color = 'primary', size = 'lg' } = props;

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
      className={cn('switch', `switch-${color}`, `switch-${size}`, className)}
      onClick={handleChange}
    >
      <div
        className={cn('switch-thumb ', active ? `checked-right switch-thumb-${color} switch-thumb-${size}` : `checked-left switch-thumb-${color} switch-thumb-${size}`)}
      />
    </div>
  )
}