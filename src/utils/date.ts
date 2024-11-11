import dayjs from "dayjs";
import "dayjs/locale/cs";

dayjs.locale("cs");

export const convertDateToLocaleString = (
  date?: Date | string,
  format = "DD. MMMM YYYY"
) => {
  return date && dayjs(date).format(format);
};
