export const formatDate = (date: Date) => {
  let options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date
    .toLocaleTimeString(navigator.language, options)
    .replaceAll(",", "");
};
