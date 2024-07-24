const ulList = document.createElement('ul');
const number = 10;

document.body.append(ulList);

for (let i = 1; i <= number; i++) {
	const liItem = document.createElement('li');
	liItem.textContent = i;
	ulList.append(liItem);
}

const lastLi = ulList.querySelector('li:last-child');

lastLi.textContent = "I'm the last element!";

ulList.style.color = '#fff';
ulList.style.fontSize = '24px';
lastLi.style.backgroundColor = 'royalblue';
lastLi.style.padding = '20px 40px';
lastLi.style.fontSize = '48px';

console.log(ulList);
