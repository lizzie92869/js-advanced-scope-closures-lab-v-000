





let produceDrivingRange = function(blockRange){
	// let tripDistance = {"10th", "20th"}
	return function(startStreet, endStreet){
		
		let distance = Math.abs((startStreet.substring(0, startStreet.length - 2))-(endStreet.substring(0, endStreet.length - 2)));
		if (distance < blockRange){
			return `within range by ${blockRange-distance}`
		} else {
			return `${distance - blockRange} blocks out of range`
		}


	}
}

let produceTipCalculator = function(rate){
	return function(fare){
		return fare*rate
	}
}



let createDriver = function (){
	let driverId = 0
		return class Driver{
			constructor(name){
				this.id = ++driverId;
				this.name = name;
				// debugger
			}

		}
}


