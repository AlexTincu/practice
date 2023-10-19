
// filtram datele mai mari decat o data anume
function filterDates(dates, limit = '01.01.2023') {
    const limitDate = new Date(limit);

    return dates.filter((value) => {
        const myDate = new Date(value);

        if (myDate >= limitDate) {
            return myDate;
        }
    });
}

const dates = ['02.03.2023', '01.01.2023', '02.04.2023', '02.05.2023'];

console.log(filterDates(dates, '02.04.2023'));
console.log(filterDates(dates));

