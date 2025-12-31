import { atom, selector } from 'recoil';

// Primitive atoms
export const countState = atom<number>({
  key: 'countState',
  default: 0,
});

export const textState = atom<string>({
  key: 'textState',
  default: '',
});

// Derived state (selector)
export const doubleCountState = selector<number>({
  key: 'doubleCountState',
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});

// Writable selector
export const adjustedCountState = selector<number>({
  key: 'adjustedCountState',
  get: ({ get }) => get(countState) * 2,
  set: ({ set }, newValue) => {
    set(countState, (newValue as number) / 2);
  },
});

// Character count selector
export const charCountState = selector<number>({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});
