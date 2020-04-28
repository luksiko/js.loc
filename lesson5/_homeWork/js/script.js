let menu = document.querySelector('.menu'),
	item = document.getElementsByClassName('menu-item'),
	title = document.getElementsByClassName('title'),
	prom = document.getElementsByClassName('prompt'),
	adv = document.getElementsByClassName('adv'),
	col = document.getElementsByClassName('column'),
	li = document.createElement('li');

menu.insertBefore(item[2], item[1]);
menu.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.insertAdjacentHTML = '<li class="menu-item">Пятый пункт</li>';

document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
title[0].innerText = 'Мы продаем только подлинную технику Apple';
adv[0].remove();

let quest = prompt('Ваше отношение к технике Apple?', "");
prom[0].textContent = 'Ползователь относится к технике Apple ' + quest;

console.log(adv[0]);