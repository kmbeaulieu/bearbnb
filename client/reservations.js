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

Template.myReservations.events({
    'click #resTrash'(event){
        event.preventDefault();
        Reservations.remove({_id:this._id});
    }
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
       return Houses.findOne({_id:FlowRouter.getParam("_id")});
   }
});

Template.makeReservation.events({
    'submit form'(event){
        let target = event.target;
        var cid = target.checkinDate.value;
        var cod = target.checkoutDate.value;
        var hid = FlowRouter.getParam("_id");
        var hobj = Houses.findOne({_id:hid});
        Reservations.insert({reserver:user,checkin:cid,checkout:cod,house:hid});
        console.log(hobj);
        Houses.update(hobj._id,{$set:{isAvailable:false}});
    }
});
/**
 * Reservation page code
 */

