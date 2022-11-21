const timer = (id) => {

    const data = new Date();

    const deadline = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 3);

    const getTime = () => {
        const t = deadline - (new Date());
        
        const days = Math.floor(t / (60 * 60 * 24 * 1000)),
              hours = Math.floor(t / (60 * 60 * 1000) % 24),
              minutes = Math.floor(t / (60 * 1000) % 60),
              seconds = Math.floor(t / 1000 % 60);

        return {
            t, days, hours, minutes, seconds
        }
    }

    

    const normalize = (num) => {
        return num < 10 ? `0${num}` : num;
    }

    function createTimer(selector) {
        const time = document.querySelector(selector),
              day = time.querySelector('#days'),
              hour = time.querySelector('#hours'),
              minute = time.querySelector('#minutes'),
              second = time.querySelector('#seconds');
        
        
        setInterval(() => {
            updateTimer()
        }, 1000);
        
        updateTimer();
        
        function updateTimer() {
            const t = getTime();
            day.innerHTML = normalize(t.days);
            hour.innerHTML = normalize(t.hours);
            minute.innerHTML = normalize(t.minutes);
            second.innerHTML = normalize(t.seconds);
        }
    }    
    
    createTimer(id);
    
}

export default timer;