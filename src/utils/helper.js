function compareTime(timeString1,timeString2){
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);
    console.log(dateTime1.getTime(),dateTime2.getTime());
    return dateTime1.getTime() > dateTime2.getTime();
}

function compareDate(dateString1,dateString2){
    let date1 = new Date(dateString1);
    let date2 = new Date(dateString2);
    console.log(date1.getDate(),date2.getDate());
    return date1.getDate() > date2.getDate();
}

module.exports = {
    compareTime,
    compareDate
}