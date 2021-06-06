printjson(db.people.aggregate({$group: {_id: "$job"}}, {$project:{_id:1}}).toArray())
