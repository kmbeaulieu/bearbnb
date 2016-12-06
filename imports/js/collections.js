import{Mongo} from 'meteor/mongo';
export const Houses = new Mongo.Collection('houses');

export const Reservations = new Mongo.Collection('reservations', {
	transform: function(doc){
		doc.houseObj = Houses.findOne({_id:doc.house});
        console.log("Transforming:", doc.house);
        return doc;
	}
});

export const Reviews = new Mongo.Collection('reviews');


export const ReviewsSchema = new SimpleSchema({
	reviewer:{type:String},
	tobereviewed:{type:String},
	rating:{type:Number, min:0,max:5, defaultValue:3, decimal:true},
	description:{type:String,optional:true}
});

export const ReservationsSchema = new SimpleSchema({
	checkin:{type: Date},
	checkout: {type: Date},
	reservedHouse: {type:Houses},
	reserver:{type: String}

});

export const HousesSchema = new SimpleSchema({
    owner: {type: String},
	name: {type: String},
	description: {type: String, defaultValue:""},
	location: {type:String,defaultValue:""},
	nightlyRate: {type:Number,defaultValue:0,min:0},
	isAvailable: {type:Boolean, defaultValue:true}
});

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