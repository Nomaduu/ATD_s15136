var map = function(){
	emit(this.job, 1)
}

var reduce = function(){}


db.people.mapReduce(map, reduce, {out: "zadanie3MR"});


printjson(db.zadanie3MR.find().toArray());
