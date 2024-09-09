export function useActivityFiltered(
  activityList: GetAccountActivityResponseType[],
  filter: string,
  date: string
) {
  const filterActivityList = filter
    ? activityList?.filter((activity) => {
        const filterFn =
          filter !== "other"
            ? filterOptions[filter].fn
            : () =>
                isSameDay(new Date(activity.dated), addDays(new Date(date), 1));
        const matchesFilter = filterFn(new Date(activity.dated));
        return matchesFilter;
      })
    : activityList;

  return { filterActivityList };
}

export const filterOptions: Record<
  string,
  { label: string; fn: (date: Date) => boolean }
> = {
  today: {
    label: "Hoy",
    fn: (date: Date) => isSameDay(date, new Date()),
  },
  yesterday: {
    label: "Ayer",
    fn: (date) => isSameDay(date, addDays(new Date(), -1)),
  },
  lastWeek: {
    label: "Última semana ",
    fn: (date) => isWithinLastDays(date, 7),
  },
  last15Days: {
    label: "Últimos 15 días ",
    fn: (date) => isWithinLastDays(date, 15),
  },
  lastMonth: {
    label: "Último mes",
    fn: (date) => isWithinLastDays(date, 30),
  },
  lastYear: {
    label: "Último año",
    fn: (date) => isWithinLastDays(date, 365),
  },
};

const isSameDay = (date1: Date, date2: Date) => {
  return date1.toDateString() === date2.toDateString();
};

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

const isWithinLastDays = (date: Date, days: number) => {
  const pastDate = addDays(new Date(), -days);
  return date >= pastDate;
};
