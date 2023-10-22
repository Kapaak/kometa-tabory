import { scroller } from 'react-scroll';

export const scrollTo = (destination: string) => {
  scroller.scrollTo(destination, { smooth: true, offset: -100 });
};

export const isEven = (num: number) => {
  return num % 2 === 0;
};

export const delay = (callback: () => void, delayInMs?: number) =>
  new Promise<void>((resolve) =>
    setTimeout(() => {
      callback();
      resolve();
    }, delayInMs ?? 500)
  );

export const removeSpace = (value: string) => {
  return value.replace(/\s+/g, '');
};

export const createOption = (label: string, value: string) => {
  return { label, value };
};

type Options<T> = {
  separator?: string;
  defaultValue?: string;
  filterFn?: (value: T) => boolean;
};

export function joinValues<T>(values: T[], opts?: Options<T>): string {
  const options = {
    separator: ' ',
    defaultValue: '',
    filterFn: (value: T) => !!value,
    ...opts,
  };

  return (
    values.filter(options.filterFn).join(options.separator) ||
    options.defaultValue
  );
}

export function getDiscount(price?: number, discountPrice?: number) {
  if (!price || !discountPrice) return NaN;
  return Math.floor(100 - (discountPrice / price) * 100);
}
