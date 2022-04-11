var contactList = JSON.parse(localStorage.getItem('contactList')) || [];
var FavoritesList = JSON.parse(localStorage.getItem('fav')) || [];
function displayData(){
    document.querySelector('tbody').innerHTML = '';
    contactList.forEach(element => {
        var row = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerText = element.name;
        var td2 = document.createElement('td');
        td1.innerText = element.contact;
        var td3 = document.createElement('td');
        td3.innerText = 'Favoirate';
        td3.style.color = 'red';
        td3.style.cursor = 'pointer'
        td3.addEventListener('click', function(){
            FavoritesList.push(job);
            localStorage.setItem('favoriteslist', JSON.stringify(FavoritesList));
            alert('added to favorites ${job.name}');
        })
        row.append(td1, td2, td3);
        document.querySelector('#tbody').append(row);
    });

    window.addEventListener('load', function(){
        displayData(contactList);
    })
}