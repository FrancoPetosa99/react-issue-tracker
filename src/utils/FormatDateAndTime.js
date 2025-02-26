import dayjs from "dayjs";

function FormatDateAndTime(date) {
    return dayjs(date).format("DD/MM/YYYY HH:mm:ss");
}

export default FormatDateAndTime;