const button = document.getElementById("searchButton")
const input = document.getElementById("inputBox")

const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const cityName = document.getElementById("city-name")

button.addEventListener('click', function(){
    console.log(input.value);
});

async function getData(cityName)
{
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=c9e5a0d25a354149a1f132408251203&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async() =>{
const value=input.value;
const result = await getData(value);
console.log(result);

cityName.textContent = `${result.location.country}, ${result.location.region}`;
cityTemp.textContent = result.current.temp_c;
})