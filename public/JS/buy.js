const creditCard = document.querySelector('#creditCard'),
	  openFormButton = document.querySelector('#openFormButton'),
	  form = document.querySelector('#form'),
	  creditCardNumber = document.querySelector('#creditCard .number'),
	  creditCardName = document.querySelector('#creditCard .name'),
	  brandLogo = document.querySelector('#brandLogo'),
	  signature = document.querySelector('#creditCard .signature p'),
	  expiryMonth = document.querySelector('#creditCard .month'),
	  expiryYear = document.querySelector('#creditCard .year');
	  ccv = document.querySelector('#creditCard .ccv');

// * giramos la creditCard para mostrar el frente.
const showFront = () => {
	if(creditCard.classList.contains('active')){
		creditCard.classList.remove('active');
	}
}

// * giro de la creditCard
creditCard.addEventListener('click', () => {
	creditCard.classList.toggle('active');
});

// * Boton de abrir form
openFormButton.addEventListener('click', () => {
	openFormButton.classList.toggle('active');
	form.classList.toggle('active');
});

// * Selecciona del mes
for(let i = 1; i <= 12; i++){
	let option = document.createElement('option');
	option.value = i;
	option.innerText = i;
	form.selectMonth.appendChild(option);
}

// * Selecciona el año.
const selectYear = new Date().getFullYear();
for(let i = selectYear; i <= selectYear + 8; i++){
	let option = document.createElement('option');
	option.value = i;
	option.innerText = i;
	form.selectYear.appendChild(option);
}

// * Input numero de la creditCard
form.inputNumber.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputNumber.value = inputValue
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Elimina las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espacio
	.trim();

	creditCardNumber.textContent = inputValue;

	if(inputValue == ''){
		creditCardNumber.textContent = '#### #### #### ####';

		brandLogo.innerHTML = '';
	}

	if(inputValue[0] == 4){
		brandLogo.innerHTML = '';
		const image = document.createElement('img');
		image.src = 'img/visa.png';
		brandLogo.appendChild(image);
	} else if(inputValue[0] == 5){
		brandLogo.innerHTML = '';
		const image = document.createElement('img');
		image.src = 'img/mastercard.png';
		brandLogo.appendChild(image);
	}

	// giramos la creditCard para que el usuario vea el frente.
	showFront();
});

// * Input nombre de la creditCard
form.inputName.addEventListener('keyup', (e) => {
	let inputValue = e.target.value;

	form.inputName.value = inputValue.replace(/[0-9]/g, '');
	creditCardName.textContent = inputValue;
	signature.textContent = inputValue;

	if(inputValue == ''){
		creditCardName.textContent = 'Jhon Doe';
	}

	showFront();
});

// * Seleccionar mes
form.selectMonth.addEventListener('change', (e) => {
	expiryMonth.textContent = e.target.value;
	showFront();
});

// * Seleccionar Año
form.selectYear.addEventListener('change', (e) => {
	expiryYear.textContent = e.target.value.slice(2);
	showFront();
});

// * CCV
form.inputCCV.addEventListener('keyup', () => {
	if(!creditCard.classList.contains('active')){
		creditCard.classList.toggle('active');
	}

	form.inputCCV.value = form.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = form.inputCCV.value;
});
