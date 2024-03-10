import { ssrWindow } from 'ssr-window';

export const getWindowOutsideAngular = () => {
    if (typeof window === 'undefined') return ssrWindow as unknown as Window & typeof globalThis;

    return window;
};
