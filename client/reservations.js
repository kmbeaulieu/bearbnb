/**
 *This has the reservation related code
 */
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Mongo} from 'meteor/mongo';
import {Reservations} from '../imports/js/collections.js';
import {Houses} from '../imports/js/collections.js';

let user = Meteor.userId();
/**
 * My reservations page code
 */
Template.myReservations.onCreated(function () {
    this.subscribe('reservations');
});


Template.myReservations.helpers({

    reservations(){
        return Reservations.find({reserver:user});
    },
});

/*
Make reservation page
 */
Template.makeReservation.onCreated(function(){
    this.subscribe('reservations');
    this.subscribe('houses');
});
Template.makeReservation.helpers({
   house(){
       //return Houses.findOne({_id:})
   }
});
Template.makeReservation.events({
    'submit form'(event){
        let target = event.target;
        var cid = target.checkinDate.value;
        var cod = target.checkoutDate.value;
        Reservations.insert({reserver:user,checkin:cid,checkout:cod,house:"dasd"});
    }
});
/**
 * Reservation page code
 */
