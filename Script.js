const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');
let done = document.querySelectorAll('.done');
let deleted = document.querySelectorAll('.deleted');
let name = document.querySelectorAll('.name');

const addTodo = ()=>{
		const li = document.createElement("li");
		const todo = document.querySelector('.work').cloneNode(true);
		const todo2 = document.querySelector('.work').parentElement.children[1].cloneNode(true);
		if(todo2.children.length>0){todo2.removeChild(todo2.children[0])};
		console.log(todo2.children[0]);	
		todo.children[0].childNodes[0].nodeValue = input.value;
		li.appendChild(todo);
		li.appendChild(todo2);
		ul.appendChild(li);
		input.value = '';
		done = document.querySelectorAll('.done');
		deleted = document.querySelectorAll('.deleted');
		name = document.querySelectorAll('.name');
		donef();
		deletef();
		ip();
}

const addTodoClick = ()=>{
	if(input.value.length > 0){
		addTodo();
	}
}

const addTodoKey = (event)=>{
	if(input.value.length > 0 && event.keyCode === 13){
		addTodo();
	}
}

submit.addEventListener("click",addTodoClick);
input.addEventListener("keypress",addTodoKey);

const donef = ()=>{
	done.forEach((b)=>{
		b.addEventListener("click", ()=>{
			const foo = b.parentElement.parentElement.parentElement.children[1]
			if(foo.children.length>0){
				foo.removeChild(foo.children[0]);
			}
			if(b.parentElement.parentElement.parentElement.children[1].children.length===0){
				const h5 = document.createElement("h5");
				h5.appendChild(document.createTextNode("Done"))
				h5.className = 'a';
				b.parentElement.parentElement.parentElement.children[1].appendChild(h5);
			}
		})
	});
}


const deletef = ()=>{
	deleted.forEach((b)=>{
		b.addEventListener("click", ()=>{
			ul.removeChild(b.parentElement.parentElement.parentElement);
		})
	});
}

const ip = ()=>{
	name.forEach((b)=>{
		b.addEventListener("click", ()=>{
			if(b.parentElement.parentElement.children[1].children.length===0){
				const h5 = document.createElement("h5");
				h5.appendChild(document.createTextNode("In-Progress"))
				h5.className = 'a';
				b.parentElement.parentElement.children[1].appendChild(h5);
			}
		})
	});
}

donef();
deletef();
ip();