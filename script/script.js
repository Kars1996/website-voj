async function fetchPragueTime() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        document.getElementById('cet').innerText = dateTime.toLocaleTimeString('en-us', { timeZone: 'Europe/Prague' });
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('cet').innerText = 'Error fetching time';
    }
}

// Call the function to fetch and display the time
fetchPragueTime();

setInterval(fetchPragueTime, 1000);
