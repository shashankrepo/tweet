const text = document.getElementById('searchBox');
const getTweets = document.getElementById('searchBtn');

getAllTweets = event => {
  event.preventDefault();
  const endpoint = '/tweets/' + text.value;
  fetch(endpoint)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(JSON.stringify(error)));
};

getTweets.addEventListener('click', getAllTweets);
