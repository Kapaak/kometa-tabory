export const formatLocaleNumber = (value: number) => {
  const formater = new Intl.NumberFormat('cs', {
    style: 'currency',
    currency: 'czk',
    maximumFractionDigits: 0,
  });

  return formater.format(value);
};
