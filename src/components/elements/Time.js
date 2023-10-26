import moment from 'moment';

function Time(createdAt) {
    const currentDate = moment();
    const createdAtDate = moment(createdAt);
  
    const daysAgo = currentDate.diff(createdAtDate, 'days');
    if (daysAgo > 0) {
      return daysAgo + ' days ago';
    }
  
    const hoursAgo = currentDate.diff(createdAtDate, 'hours');
    if (hoursAgo > 0) {
      return hoursAgo + ' hours ago';
    }
  
    const minutesAgo = currentDate.diff(createdAtDate, 'minutes');
    if (minutesAgo > 0) {
      return minutesAgo + ' minutes ago';
    }
  
    return 'Just now';
  }

export default Time;