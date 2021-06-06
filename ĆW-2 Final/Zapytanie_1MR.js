var map = function() {
	weight = parseFloat(this.weight);	
	height = parseFloat(this.height);
	emit(this.sex, {weight, height});
};


var reduce = function(key, values) {
	weight = 0;
	height = 0;
	count = 0;

	for (var i = 0; i < values.length; i++) {
		weight += values[i].weight;
		height += values[i].height;
		count = i;
	}
	avg_weight = weight/count;
	avg_height = height/count;
	return key, {avg_weight, avg_height};
};


db.people.mapReduce( map, reduce, {out: "zadanie1MR" })

printjson(db.zadanie1MR.find().toArray())
