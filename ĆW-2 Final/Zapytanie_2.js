printjson(db.people.aggregate([{$unwind: "$credit"},{$group: { _id : "$credit.currency","Sum":{$sum: {"$toDouble": "$credit.balance"}}}}]).toArray())
