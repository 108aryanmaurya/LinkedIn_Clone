import moment from "moment/moment";
export const getTimeStamp = (format) => {
  return moment().format(format);
};
