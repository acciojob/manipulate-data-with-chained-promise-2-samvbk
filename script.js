//your JS code here. If required.
const output = document.getElementById("output");

let arr = [1,2,3,4];

const promise1 = new Promise((resolve) => {
	setTimeout(()=>{
		resolve(arr);
	},3000);
});

promise1
	.then((arr)=>{
		let add = arr.filter((num)=> {
			return num%2===0;
		});
		return new Promise((resolve) => {
			setTimeout(() => {
				output.textContent = add;
				resolve(add);
			},1000);
		});
	})
	.then((arr)=>{
		let mult = arr.map((num)=>{return num*2});
		return new Promise((resolve) => {
			setTimeout(()=>{
				output.textContent = mult;
				resolve(mult);
			},2000);
		});
	});
	