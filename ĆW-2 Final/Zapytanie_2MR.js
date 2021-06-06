var map = function() {
    for(i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
}

var reduce = function(key, values) {
    return key, Array.sum(values)
}

db.people.mapReduce(map,reduce,{out: "zadanie2MR"});

printjson(db.zadanie2MR.find().toArray());
