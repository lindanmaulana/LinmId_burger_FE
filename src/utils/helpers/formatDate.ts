import { format } from "date-fns";
import {id} from "date-fns/locale"

export const helperFormatDate = (timestamps: string) => {
  const date = new Date(timestamps);
  return `${format(date, "yyyy-MM-dd,  HH:mm", {locale: id})}`;
};