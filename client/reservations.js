/**
 *This has the reservation related code
 */
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Mongo} from 'meteor/mongo';
import {Reservations} from '../imports/js/collections.js';

/**
 * My reservations page code
 */
Template.myReservations.onCreated(function () {
    this.subscribe('reservations');
});


Template.myReservations.helpers({
    houses(){
        return Reservations.find({reserver:user});
    }
});
/**
 * Reservation page code
 */

