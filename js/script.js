let btn = document.getElementById('btn');
let fieldsList = document.querySelectorAll('.form-person_field');
let resultCompleted = document.querySelector('.form-person_completedlist');
let resultEmpty = document.querySelector('.form-person_emptylist');

btn.addEventListener('click', (event) => {
	event.preventDefault();
	clearList(resultCompleted);
	clearList(resultEmpty);
	resultCompleted.innerHTML = '<p>Completed fields:</p>';
	resultEmpty.innerHTML = '<p>Empty fields:</p>';

	fieldsList.forEach((item) => {
		if (item.value === ''){
			item.classList.remove('success');
			item.classList.add('error');
			successItem(item, resultEmpty);
		} else {
			item.classList.remove('error');
			item.classList.add('success');
			successItem(item, resultCompleted);
		}
	});
});

function successItem(item, result){ 
	let res = item.getAttribute('name'); 
	result.innerHTML += `<div>${res}</div>`;
} 

function clearList(list){
	if (list.children.length > 0){
		list.innerHTML = '';
	}
}
