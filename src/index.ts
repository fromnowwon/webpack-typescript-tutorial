import { formData } from "./forms";

const form = document.querySelector('form')!;

form.addEventListener('submit', e => {
	e.preventDefault();
	const data = formData(form);
	console.log(data);
})

fetch('/api/idol/V89FC7J-ATJ44KV-PW8MZMA-7GED4E6/monsta-x')
.then(res => res.json()) 
.then(data => {
	console.log(data)
})
.catch(error => {
	console.log(error)
}) 



