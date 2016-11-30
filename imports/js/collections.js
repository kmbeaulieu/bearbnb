// user = new Mongo.Collection('user');
reservations = new Mongo.Collection('reservations');
houses = new Mongo.Collection('houses');
reviews = new Mongo.Collection('reviews');

if(Meteor.isServer){
	Meteor.startup(function (){
		// user._ensureIndex({
		// 	'username': 'text',
		// 	'password': 'text'
		// });

	// 	reservations._ensureIndex({
	// 		'check-in': 1,
	// 		'check-out': 1,
	// 		'price': double,
	// 		'houseID': int
	// 	});
    //
	// 	houses._ensureIndex({
	// 		'location': 'text',
	// 		'description': 'text',
	// 		'name': 'text',
	// 		'owner': integer,
	// 		'isAvailable': boolean
	// 	});
    //
	// 	reviews._ensureIndex({
	// 		'sender': int,
	// 		'receiver': int,
	// 		'rating': int,
	// 		'comments': 'text',
	// 		'dateReviewed': 1
	// 	});
	});
}

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