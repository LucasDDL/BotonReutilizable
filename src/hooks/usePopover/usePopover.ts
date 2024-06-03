import { Ref, RefObject, useEffect, useMemo } from "react";

export const usePopover = (ref: RefObject<HTMLElement>) => {

  const anchor = ref.current
  
  const data = useMemo(() => {
    if (!anchor) {
      return {}
    }

    return {
      anchor,
      popover: anchor.popover,
      toggle: anchor.togglePopover,
      show: anchor.showPopover,
      hide: anchor.hidePopover,
    }
  }, [anchor])

  return data

}