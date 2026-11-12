//your JS code here. If required.
const output = document.getElementById("output");

let arr = [1,2,3,4];
let add = arr.filter((num)=>{return num%2===0});
let mult = arr.map((num)=>{return num*2});

const promise1 = new Promise((resolve) => {
	resolve(arr);
});

promise1
	.then((arr)=>{
		let add = arr.filter((num)=> {
			return num%2===0;
		});
		setTimeout(()=>{
			output.textContent = add;
		},1000)
	})
	.then((arr)=>{
		let mult = arr.map((num)=>{return num*2});
		setTimeout(()=>{
			output.textContent = mult;
		},2000)
	});
	