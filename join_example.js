db.getCollection("product").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$lookup: // Equality Match
			{
			    from: "product_batch",
			    localField: "_id",
			    foreignField: "product_id",
			    as: "product_inventory"
			}
			
			// Uncorrelated Subqueries
			// (supported as of MongoDB 3.6)
			// {
			//    from: "<collection to join>",
			//    let: { <var_1>: <expression>, …, <var_n>: <expression> },
			//    pipeline: [ <pipeline to execute on the collection to join> ],
			//    as: "<output array field>"
			// }
		},

		// Stage 2
		{
			$unwind: "$product_inventory"
		},

		// Stage 3
		{
			$project: {
			    product_name :1 , "batch_id" :"$product_inventory._id" , "Quantity":"$product_inventory.Quantity"  , _id :0
			    
			}
		},
	],

	// Options
	{

	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
