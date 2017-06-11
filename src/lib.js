module.exports.stringEightNumbersToDate = (string) => {
    const year = parseInt(string.substring(0, 4));
    const month = parseInt(string.substr(4, 2));
    const day = parseInt(string.substr(6, 2));
    //console.log(string, year, month, day);
    return new Date(Date.UTC( year, month -1, day ))
}