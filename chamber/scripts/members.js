const url = "https://4ndr0s.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#Directory_cards');

async function getMembersData() {
    const response = await fetch(url);  //almacena la respuesta con el metodo tech
    const data = await response.json();   //convierte la respuesta a un objeto JSON
    displayMembers(data.members);
    // console.table(data.members);  //muestra en la consola el archivo json en una tabla 
}


const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phnumber = document.createElement('p');
        let url = document.createElement('a');

        logo.setAttribute('src', member.imgurl);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '150');

        name.textContent = member.name;
        address.textContent = member.address;
        phnumber.textContent = member.phone;

        url.textContent = member.url;
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phnumber);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

getMembersData();