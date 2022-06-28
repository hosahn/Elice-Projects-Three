const getDateDiff = (value) => {
  const date = new Date(value);
  const now = new Date();
  const diffDate = now.getTime() - date.getTime();
  const dateDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  return dateDays;
};

export default getDateDiff;
