async function getJoke() {
    const response = await fetch('http://api.icndb.com/jokes/random');
    const jsonResp = await response.json();
    return jsonResp;
}

async function getNews() {
    const response = await fetch('http://newsapi.org/v2/top-headlines?country=in&pageSize=1&apiKey=a876816f98574cdfa23ffdc7d531c7bc');
    const jsonResp = await response.json();
    return jsonResp;
}