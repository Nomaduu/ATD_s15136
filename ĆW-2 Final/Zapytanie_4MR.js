var map = function(){
	height = parseFloat(this.height);
	bmi = (parseFloat(this.weight)/(height*height))*10000;
	emit(this.nationality, bmi);
}


var reduce = function(key, values){
	min_bmi = +Math.min(...values)
	max_bmi = +Math.max(...values)
	avg_bmi = Array.sum(values)/values.length
	
	return key, {min_bmi, max_bmi, avg_bmi}
}



db.people.mapReduce(map, reduce,{out: "zadanie4MR"});

printjson(db.zadanie4MR.find().toArray());
