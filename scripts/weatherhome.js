const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#captionDesc');
const Flike = document.querySelector('#Flike');
const humidity = document.querySelector('#humidity');

// lima = -12.111889296905858, -76.99128417860081
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.19&lon=-76.99&appid=1207561af4bd33f3b574041404ab197e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }

    catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    humidity.innerHTML = `${data.main.humidity}%`;
    Flike.innerHTML = `${Math.trunc(data.main.feels_like)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/03n.png`;

    let desc = data.weather[0].description;

    // para que no presente como error en el html creamos el elemento img desde el JS
    let icon = document.createElement('img');
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', `${desc}`);
    weatherIcon.appendChild(icon);
    // ----- crear img elemento desde JS --------------------

    // weatherIcon.setAttribute('src', iconsrc);  //este seria el codigo inicial
    captionDesc.textContent = `${CapitalizeFistLetter(desc)} `;
}

// para capitalizar la primera letra de una palabra
function CapitalizeFistLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}