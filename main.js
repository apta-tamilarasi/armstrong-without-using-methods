let a=parseInt(prompt("Enter the number"))
//Find length

function checkLen(num){
	let count = 0
		while(num!=0){
			let rem = num%10;
			num=(num-rem)/10
			count++
		}
		return count  
	}
	
	// Find Armstrong
	function Armstrong(A,num){
		let length = A(num)
		let n = num
		let sum = 0
		while(n!=0){
			let rem = n%10;
			n=(n-rem)/10
	sum+=rem**length
		}
		console.log(sum)
		return sum
	}
	
	function check(num,C){
		let y =C(checkLen,num)
	
		if(y ===num){
			console.log("Armstrong")
		}else{
			console.log("not armstrong");
		}
	}
	
	check(a,Armstrong)