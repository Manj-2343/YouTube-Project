export const truncateTitle = (title, maxLength) => {
  if (title.length <= maxLength) {
    return title;
  }
  return title.substring(0, maxLength) + "...";
};
