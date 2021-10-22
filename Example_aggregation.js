db.getCollection("customer").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    address: { $in : ["Pune","Bangalore","Chennai"]} 
			    
			}
		},

		// Stage 2
		{
			$group: { 
			    "_id" : { "address" : "$address" }, "count_address" : {"$sum" : NumberInt(1)}
			}
		},

		// Stage 3
		{
			$match: { 
			    "count_address" : { "$gt" : NumberLong(1) }
			}
		},

		// Stage 4
		{
			$sort: { 
			    "_id.address" : NumberInt(1)
			}
		},
	],

	// Options
	{
		allowDiskUse: true
	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
