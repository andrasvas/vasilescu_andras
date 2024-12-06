fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res => document.getElementById('ide').innerHTML = res[0].title)