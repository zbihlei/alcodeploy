// import { useLatest } from 'react-use';
// import { debounce } from "lodash-es";
// import { useMemo } from 'react';

// export function useDebounce(cb ,ms){
//     const latest = useLatest(cb);
    
//     return useMemo(
//         ()=>
//         debounce((...args) =>{
//             latest.current(...args)
//         }, ms), [ms, latest]
//     );
// }

import { useLatest } from 'react-use';
import { debounce } from 'lodash-es';
import { useMemo } from 'react';

export function useDebounce(cb, ms, leading = false) {
  const latest = useLatest(cb);

  return useMemo(
    () =>
      debounce(
        (...args) => {
          latest.current(...args);
        },
        ms,
        { leading }
      ),
    [ms, latest, leading]
  );
}
