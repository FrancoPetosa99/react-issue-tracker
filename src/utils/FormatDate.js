import dayjs from "dayjs";

function FormatDate(date) {
    return dayjs(date).format("DD/MM/YYYY");
}

export default FormatDate;