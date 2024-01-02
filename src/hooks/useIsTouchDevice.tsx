import { useEffect, useState } from 'react';

import { isTouchDevice } from '~/utils';

//purpouse of this hook is to avoid hydration errors caused by isTouchDevice()
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return isTouch;
}
