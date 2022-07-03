import {format, parse, parseISO} from 'date-fns';

export const parseDate = (date: string, time: string) => {
  const parsedDate = parse(
    `${date} ${time}`,
    "dd MMM yyyy','EEEE hh:mm aa",
    new Date(),
  );
  return parsedDate.toISOString();
};

export const formatDate = (date: string) => {
  return format(parseISO(date), "dd MMM yyyy' - 'hh:mm");
};
