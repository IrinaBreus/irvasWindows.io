const timer = (id, deadline) => {

    function getTime(endTime) {
        
        let time = Date.parse(endTime) - Date.now();
        const day = Math.floor(time / (60 * 60 * 24 * 1000)),
              hour = Math.floor((time / (60 * 60  * 1000)) % 24),
              minute = Math.floor((time / (60 * 1000)) % 60),
              second = Math.floor((time / 1000) % 60);

        return {time, day, hour, minute, second};
    }

    function setTime(selector, endtime) {
        const time = document.querySelector(selector),
              days = time.querySelector('#days'),
              hours = time.querySelector('#hours'),
              minutes = time.querySelector('#minutes'),
              seconds = time.querySelector('#seconds'),
              timerId = setInterval(getClock, 1000);
        
        getClock();

        function getClock() {
            let t = getTime(endtime);
            days.innerHTML = normalize(t.day);
            hours.innerHTML = normalize(t.hour);
            minutes.innerHTML = normalize(t.minute);
            seconds.innerHTML = normalize(t.second);
            
            if (t.time <= 0) {
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
                clearInterval(timerId);
            }
        }
    }

    function normalize(num) {
        return num < 10 ? '0' + num : num; 
    }

    setTime(id, deadline);
}

export default timer;