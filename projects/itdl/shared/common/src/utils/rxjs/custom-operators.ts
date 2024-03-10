import { map, Observable, pipe, switchMap, take } from 'rxjs';

import { ODataResponse } from '../../modules/odata-response/odata-response.model';

export const switchMapOnce = <TI, TO>(switchMapFn: (input: TI) => Observable<TO>) => {
    const operator = pipe<Observable<TI>, Observable<TO>, Observable<TO>>(
        switchMap((uiAction) => switchMapFn(uiAction)),
        take(1),
    );

    return operator;
};

export const odataResponseValue = <TI>() => {
    const operator = pipe<Observable<ODataResponse<TI>>, Observable<TI>>(map((response) => response.value));

    return operator;
};
