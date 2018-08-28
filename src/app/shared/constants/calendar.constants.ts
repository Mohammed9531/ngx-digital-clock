/**
 * @author: Shoukath Mohammed
 * @constant
 */
const DAYS_SHORT = [
      'MON'
    , 'TUE'
    , 'WED'
    , 'THUR'
    , 'FRI'
    , 'SAT'
    , 'SUN'
];

/**
 * @constant
 */
const DAYS_LONG = [
      'MONDAY'
    , 'TUESDAY'
    , 'WEDNESDAY'
    , 'THURSDAY'
    , 'FRIDAY'
    , 'SATURDAY'
    , 'SUNDAY'
];

/**
 * @constant
 */
const CLASS_LIST = {
      0 : 'zero'
    , 1 : 'one'
    , 2 : 'two'
    , 3 : 'three'
    , 4 : 'four'
    , 5 : 'five'
    , 6 : 'six'
    , 7 : 'seven'
    , 8 : 'eight'
    , 9 : 'nine'
    , ':' : 'dots'
    , 'dots': ':'
};

/**
 * @constant
 */
const WATCH_CONFIG = {
    format: 'MMM MMMM Do YY YYYY ddd dddd hh mm ss d A hh:mm:ss',
    keys: [
          'month_short'
        , 'month_long'
        , 'date_roman'
        , 'year_short'
        , 'year_long'
        , 'day_short'
        , 'day_long'
        , 'hours'
        , 'minutes'
        , 'seconds'
        , 'day_numerical'
        , 'period'
        , 'time'
    ],
    parsers: {
          ':' : 'dots'
        , 'dots': ':'
    }
};

/**
 * @exports
 */
export { WATCH_CONFIG, CLASS_LIST, DAYS_LONG, DAYS_SHORT };