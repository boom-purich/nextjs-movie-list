import moment from 'moment';

export const convertDateToYear = (date:string) => {
    let year:string = '';
    date && (year = moment(date,'YYYY-MM-DD').format('YYYY'))
    return year;
}

export const convertRuntime = (runtime:number) => {
    let dateTime:string = '';
    runtime && (dateTime = moment.utc(moment.duration(runtime, "minute").asMilliseconds()).format("h mm"));
    if(dateTime !== '') {
        let splitTime:Array<string> = [];
        splitTime = dateTime.split(' ');
        dateTime = `${splitTime[0]} hr ${splitTime[1]} min`
    } 
    return dateTime;
}