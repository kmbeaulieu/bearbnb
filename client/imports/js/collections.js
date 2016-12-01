// user = new Mongo.Collection('user');
Reservations = new Mongo.Collection('reservations');
Houses = new Mongo.Collection('houses');
Reviews = new Mongo.Collection('reviews');
//
// Reviews.schema = new SimpleSchema({
// 	reviewer:{type:String},
// 	tobereviewed:{type:String},
// 	rating:{type:Number, min:0,max:5, defaultValue:3, decimal:true},
// 	description:{type:String,optional:true}
// });
//
// Reservations.schema = new SimpleSchema({
// 	checkin:{type: Date, minimum: new Date().getDate()},
// 	checkout: {type: Date},
// 	reservedHouse: {type:Houses},
// 	reserver:{type: String}
//
// });
//
// Houses.schema = new SimpleSchema({
//     owner: {type: String},
// 	name: {type: String},
// 	description: {type: String, defaultValue:""},
// 	location: {type:String,defaultValue:""},
// 	nightlyRate: {type:Number,defaultValue:0,min:0},
// 	isAvailable: {type:Boolean, defaultValue:true}
// });

// if(Meteor.isServer){
// 	Meteor.startup(function (){
// 		// user._ensureIndex({
// 		// 	'username': 'text',
// 		// 	'password': 'text'
// 		// });
//
// 	// 	reservations._ensureIndex({
// 	// 		'check-in': 1,
// 	// 		'check-out': 1,
// 	// 		'price': double, THIS CAN BE PART OF HOUSE INFO
// 	// 		'houseID': int
// 	// 	});
//     //
// 	// 	houses._ensureIndex({
// 	// 		'location': 'text',
// 	// 		'description': 'text',
// 	// 		'name': 'text',
// 	// 		'owner': integer,
// 	// 		'isAvailable': boolean
// 	// 	});
//     //
// 	// 	reviews._ensureIndex({
// 	// 		'sender': int,
// 	// 		'receiver': int,
// 	// 		'rating': int,
// 	// 		'comments': 'text',
// 	// 		'dateReviewed': 1
// 	// 	});
// 	});
// }

/*
housePics = new FS.Collection('house-pics', {
	stores: [new FS.Store.GridFS('pics')],
	filter: {
		allow: {
			contentTypes: ['image/*']
		}
	}
});

if(Meteor.isServer){
	housePics.allow({
		insert(){
			return true;
		},
		update(user, fileObj){
			return user = fileObj.owner;
		},
		remove(user, fileObj){
			return user = fileObj.owner;
		},
		download(){
			return true;
		}
	});
}
*/