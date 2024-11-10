let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let body = document.querySelector('body');

let list = document.createElement('ol');

for (i=0; i<cities.length; i++){
    let record = document.createElement('li');
    record.setAttribute("class", "city");
    record.innerText = cities[i];
    list.appendChild(record);
}


body.appendChild(list); 