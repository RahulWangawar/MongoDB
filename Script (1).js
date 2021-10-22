use dmart // switching to dmart database 

db.Dmart.insertOne( 
{
	"Register_entity_number": 123456789,
	"head_office_contact": 8967676767,
	"Owner": "RadhaKrishna Damani",
	"no_of_shares": 2134762,
	"Store": [
		{
			"location": "Shivajinagar",
			"timings": {
				"start_time": "9:00:00",
				"end_time": "22:00:00"
			},
			"delivery_area": {
				"radius": 20,
				"unit": "KM"
			},
			"helpline": 987654321,
			"branch_email": "Shivajinagar@gmail.com"
		},
		{
			"location": "Pashan",
			"timings": {
				"start_time": "10:00:00",
				"end_time": "23:00:00"
			},
			"delivery_area": {
				"radius": 30,
				"unit": "KM"
			},
			"helpline": 8767676767,
			"branch_email": "Pashan@gmail.com"
		}
	]
}
 );

db.Dmart.find(); 
// insert many example -- product collection 

db.product.insertMany([
	{
		"_id": "X001",
		"product_name": "ToothBrush",
		"price": 20,
		"category": "Personal Care",
		"in_out_stock": "IN",
		"Supplier_list": [
			"S001",
			"S100"
		],
		"review": [
			{
				"text": "Fantastic product",
				"star_rating": 5
			},
			{
				"text": "Pathetic product",
				"star_rating": 1
			}
		]
	},
	{
		"_id": "X002",
		"product_name": "Oil",
		"price": 200,
		"category": "Groceries",
		"in_out_stock": "IN",
		"Supplier_list": [
			"S002",
			"S100"
		],
		"review": [
			{
				"text": "Oil has excellent Smell",
				"star_rating": 5
			},
			{
				"text": "Oil is worth the price",
				"star_rating": 3
			}
		]
	},
	{
		"_id": "X003",
		"product_name": "Chocalate",
		"price": 20,
		"category": "Groceries",
		"in_out_stock": "IN",
		"Supplier_list": [
			"S001",
			"S100"
		],
		"review": [
			{
				"text": "Taste is Awesome",
				"star_rating": 5
			},
			{
				"text": "Nice Taste",
				"star_rating": 3
			}
		]
	}
]);

db.product.find();


// insert Customers 
db.customer.insertMany([
	{
		"_id": "C001",
		"name": "Gaurav",
		"address": "Pune",
		"billing_address": {
			"street_no": 123,
			"landline_no": 74654
		},
		"contact": 1234566543,
		"email_id": "gaurav@gmail.com",
		"dob": "2008-04-23T00:00:00.000Z",
		"gender": "Male",
		"Cart": {
			"added_products": [
				{
					"product_id": "X001",
					"quantity_of_product": 5,
					"date_added": "2021-10-20T00:00:00.000Z"
				},
				{
					"product_id": "X002",
					"quantity_of_product": 2,
					"date_added": "2021-10-01T00:00:00.000Z"
				}
			],
			"total_cost": 899
		}
	},
	{
		"_id": "C002",
		"name": "Tabish",
		"address": "Pune",
		"billing_address": {
			"street_no": 345,
			"landline_no": 234
		},
		"contact": 456789922,
		"email_id": "Tabish@gmail.com",
		"dob": "2010-04-12T00:00:00.000Z",
		"gender": "Male",
		"Cart": {
			"added_products": [
				{
					"product_id": "X003",
					"quantity_of_product": 5,
					"date_added": "2021-11-20T00:00:00.000Z"
				},
				{
					"product_id": "X001",
					"quantity_of_product": 2,
					"date_added": "2021-03-01T00:00:00.000Z"
				}
			],
			"total_cost": 340
		}
	},
	{
		"_id": "C003",
		"name": "Shreyas",
		"address": "Pune",
		"billing_address": {
			"street_no": 789,
			"landline_no": 9808080
		},
		"contact": 543149893,
		"email_id": "shreyas@gmail.com",
		"dob": "2008-04-02T00:00:00.000Z",
		"gender": "Male",
		"Cart": {
			"added_products": [
				{
					"product_id": "X001",
					"quantity_of_product": 13,
					"date_added": "2021-11-20T00:00:00.000Z"
				},
				{
					"product_id": "X002",
					"quantity_of_product": 1,
					"date_added": "2021-03-01T00:00:00.000Z"
				}
			],
			"total_cost": 3478
		}
	},
	{
		"_id": "C004",
		"name": "Amruta",
		"address": "Chennai",
		"billing_address": {
			"street_no": 3333,
			"landline_no": 202745454
		},
		"contact": 5638767813,
		"email_id": "amruta@rediff.com",
		"dob": "2005-02-02T00:00:00.000Z",
		"gender": "Female",
		"Cart": {
			"added_products": [
				{
					"product_id": "X001",
					"quantity_of_product": 5,
					"date_added": "2021-10-12T00:00:00.000Z"
				}
			],
			"total_cost": 654
		}
	},
	{
		"_id": "C005",
		"name": "Seema",
		"address": "Bangalore",
		"billing_address": {
			"street_no": 567,
			"landline_no": 287312232
		},
		"contact": 2983091983,
		"email_id": "seema@rediff.com",
		"dob": "2000-12-02T00:00:00.000Z",
		"gender": "Female",
		"Cart": {
			"added_products": [
				{
					"product_id": "X002",
					"quantity_of_product": 4,
					"date_added": "2021-02-12T00:00:00.000Z"
				}
			],
			"total_cost": 500
		}
	},
	{
		"_id": "C006",
		"name": "Priyanka",
		"address": "Bangalore",
		"billing_address": {
			"street_no": 447,
			"landline_no": 2138092132
		},
		"contact": 2983222983,
		"email_id": "priyanka@rediff.com",
		"dob": "2018-12-02T00:00:00.000Z",
		"gender": "Female",
		"Cart": {
			"added_products": [
				{
					"product_id": "X001",
					"quantity_of_product": 1,
					"date_added": "2021-01-11T00:00:00.000Z"
				}
			],
			"total_cost": 50
		}
	}	
] , {ordered : false});
 
 
 db.customer.find();




// insert many suppliers 
 db.supplier.insertMany([
	{
		"_id": "S001",
		"Name": "Gaurav Store",
		"email_id": "gaurav@gmail.com",
		"contact": 9837498734,
		"address": "Pune",
		"rating": 4
	},
	{
		"_id": "S002",
		"Name": "Deepak Store",
		"email_id": "deep@gmail.com",
		"contact": 97877498734,
		"address": "Bangalore",
		"rating": 2
	},
	{
		"_id": "S003",
		"Name": "Mayur Store",
		"email_id": "maya@gmail.com",
		"contact": 9832138734,
		"address": "Chennai",
		"rating": 5
	},
	{
		"_id": "S004",
		"Name": "Twinkle Store",
		"email_id": "twinkle@gmail.com",
		"contact": 978998734,
		"address": "Pune",
		"rating": 3
	},
	{
		"_id": "S005",
		"Name": "Omkar Store",
		"email_id": "omkar@gmail.com",
		"contact": 9838758734,
		"address": "Pune",
		"rating": 3
	},
	{
		"_id": "S006",
		"Name": "Shubham Store",
		"email_id": "shubham@gmail.com",
		"contact": 9837854634,
		"address": "Chennai",
		"rating": 4
	}
]
);

db.supplier.find();


db.wallet.insertMany([
	{
		"_id": "W001",
		"points_available": 123,
		"last_top_up_method": "Cash",
		"last_transaction_number": "T098987"
	},
	{
		"_id": "W002",
		"points_available": 21121,
		"last_top_up_method": "Debit card",
		"last_transaction_number": "T098767"
	},
	{
		"_id": "W003",
		"points_available": 87281,
		"last_top_up_method": "Credit card",
		"last_transaction_number": "T056387"
	},
	{
		"_id": "W004",
		"points_available": 21912,
		"last_top_up_method": "Cash",
		"last_transaction_number": "T066987"
	},
	{
		"_id": "W005",
		"points_available": 1672,
		"last_top_up_method": "Credit Card",
		"last_transaction_number": "T0987567"
	},
	{
		"_id": "W006",
		"points_available": 1453,
		"last_top_up_method": "Cash",
		"last_transaction_number": "T0892987"
	}
]);

db.wallet.find();


db.order.insertMany(
[
	{
		"_id": "OR001",
		"total_cost": 899,
		"Wallet_no": "W001",
		"customer_id": "C002",
		"products_list": [
			{
				"product_id": "X003",
				"quantity_of_product": 5
			},
			{
				"product_id": "X001",
				"quantity_of_product": 2
			}
		],
		"order_date": "2021-10-25T00:00:00.000Z",
		"invoice_number": 675437826486782,
		"no_of_points_consumed": 563,
		"points_earned": 9,
		"review": {
			"text": "",
			"star_rating": 0
		},
		"delivery_info": {
			"expected_arrival": "2021-10-28T00:00:00.000Z",
			"delivery_date": "",
			"delivery_address": "Pune",
			"shipping_charges": 50,
			"status": "Undelivered",
			"delivery_person_name": "Tom"
		}
	},
	{
		"_id": "OR002",
		"total_cost": 542,
		"Wallet_no": "W004",
		"customer_id": "C001",
		"products_list": [
			{
				"product_id": "X001",
				"quantity_of_product": 5
			},
			{
				"product_id": "X002",
				"quantity_of_product": 2
			}
		],
		"order_date": "2021-10-02T00:00:00.000Z",
		"invoice_number": 276838712131,
		"no_of_points_consumed": 43,
		"points_earned": 19,
		"review": {
			"text": "Wow I like it ",
			"star_rating": 5
		},
		"delivery_info": {
			"expected_arrival": "2021-10-03T00:00:00.000Z",
			"delivery_date": "2021-10-03T00:00:00.000Z",
			"delivery_address": "Pune",
			"shipping_charges": 140,
			"status": "delivered",
			"delivery_person_name": "Harry"
		}
	}
]);


db.order.find();




