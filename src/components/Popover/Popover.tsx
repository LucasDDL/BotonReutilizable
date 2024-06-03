'use client'

import { PropsWithChildren, useMemo } from "react";
import { createPortal } from "react-dom";
import { Paper } from "../Paper";

export type PopoverProps = PropsWithChildren & {
  anchor: HTMLElement | null;
  anchorOrigin?: 'center' | 'start' | 'end'

  open?: boolean
}

export const Popover = (props: PopoverProps) => {
  const { anchor, anchorOrigin = 'start', open, children } = props

  const [top, left] = useMemo(() => {
    if (!anchor) {
      return [0, 0]
    }

    const rect = anchor.getBoundingClientRect()
    let top = 0
    let left = 0

    switch (anchorOrigin) {
      case 'start':
        top = rect.top + rect.height
        left = rect.left
        break
      case 'center':
        top = rect.bottom
        left = rect.left + rect.width / 2
        break
      case 'end':
        top = rect.bottom 
        left = rect.right
        break
    }
    return [top, left]
  }, [anchor, anchorOrigin])


  if (!open) {
    return null
  }

  return createPortal(<Paper style={{ top, left, position: 'absolute',  }}>{children}</Paper>, document.body);
};