var map = function(){
	if (this.nationality == "Poland" && this.sex == "Female")
		for(i = 0; i < this.credit.length; i++) {
		emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
	    	}
}


var reduce = function(key, values){
	sum_balance = Array.sum(values),
	avg_balance = Array.sum(values)/values.length
	
	return key, {sum_balance, avg_balance}
}



db.people.mapReduce(map,reduce,{out: "zadanie5MR"});

printjson(db.zadanie5MR.find().toArray());
