const timeOfMeeting = {
    year: 2023,
    month: 7,
    day: 16
}

const calculateTime = (year, month, day) => {
    const currentTime = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
    }

    let formattedMonths = month - currentTime.month;
    let formattedDays = day - currentTime.day;

    if (formattedMonths < 0) {
        formattedMonths = -formattedMonths;
    }

    if (formattedDays < 0) {
        formattedDays = -formattedDays;
    }

    return `До встречи осталось: ${year - currentTime.year} лет, ${formattedMonths} месяцев, ${formattedDays} дней`;
}

console.log(calculateTime(timeOfMeeting.year, timeOfMeeting.month, timeOfMeeting.day));
