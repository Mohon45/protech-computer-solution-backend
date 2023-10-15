const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");

  const period = hours >= 12 ? "PM" : "AM";

  const hours12 = hours > 12 ? hours - 12 : hours;

  const formattedTime = `${hours12}:${minutes} ${period}`;

  return formattedTime;
};

module.exports = { formatTime };
