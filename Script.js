const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const ul = document.querySelector('ul');

let done = document.querySelectorAll('.done');
let deleted = document.querySelectorAll('.deleted');
let name = document.querySelectorAll('.name');

const todos = document.querySelector('.work').cloneNode(true);
const todo2s = document.querySelector('.work').parentElement.children[1].cloneNode(true);

const addTodo = ()=>{
		const todo = todos.cloneNode(true);
		const todo2 = todo2s.cloneNode(true);
		const li = document.createElement("li");
		if(todo2.children.length>0){todo2.removeChild(todo2.children[0])};
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
	done.forEach((b,i)=>{
		if(b.classList[1] === undefined){
			b.classList.add(i);		
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
		}
	});
}


const deletef = ()=>{
	deleted.forEach((b,i)=>{
		// console.log(b.className);
		if(b.classList[1] === undefined){
			b.classList.add(i);	
			b.addEventListener("click", ()=>{
				ul.removeChild(b.parentElement.parentElement.parentElement);
			})
		}
	});
}

const ip = ()=>{
	name.forEach((b,i)=>{
		if(b.classList[1] === undefined){
			b.classList.add(i);		
			b.addEventListener("click", ()=>{
				if(b.parentElement.parentElement.children[1].children.length===0){
					const h5 = document.createElement("h5");
					h5.appendChild(document.createTextNode("In-Progress"))
					h5.className = 'a';
					b.parentElement.parentElement.children[1].appendChild(h5);
				}
			})
		}	
	});
}

donef();
deletef();
ip();

//Future Versions features

// Animation

//Note to self: animation translate Y random 

// let num = 100;
// const circle = document.querySelectorAll('#animation div');
// console.log(circle);
// circle.forEach((e)=>{
// 	console.log(e);
// 	console.log(num);
// 	e.style.setProperty(`right`,`${num}px`);
// 	e.classList.add('move');
// 	num = num*1.5;
// })



//Due Date




// const li = document.querySelectorAll('ul li');
// console.log(li);
// const main = document.querySelector('#main');
// let a = 10;
// li.forEach((s)=>{
// 	s.addEventListener('mouseover', ()=>{	
// 		const div = document.createElement('div');
// 		const h3 = document.createElement('h3');
// 		h3.appendChild(document.createTextNode('heyyy'));
// 		div.appendChild(h3);
// 		div.classList.add('float');
// 		div.style.setProperty('transform', `translateY(${a}px)`);
// 		main.appendChild(div);
// 	}
// 	);
// 	a+=20;
// 	s.addEventListener('mouseout',()=>{
// 		const div = document.querySelector('.float');
// 		main.removeChild(div);
// 	})
// })







