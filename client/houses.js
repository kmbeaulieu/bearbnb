import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Mongo} from 'meteor/mongo';
import {Houses} from '../imports/js/collections.js';
import {Reservations} from '../imports/js/collections.js';

import'../imports/js/collections.js';

let user = Meteor.userId();
/*
 * This is for a single house
 */
Template.house.onCreated(function(){
   this.subscribe('houses');
});
Template.house.helpers({
   house(){
       let id = FlowRouter.getParam('_id');
       return Houses.findOne({_id:id});
   }
});
Template.house.events({
    'click #trashHouse'(){
        Houses.remove({_id:FlowRouter.getParam('_id')});
        FlowRouter.go("/");
    }
});

/*
 * This is for listHouses
 */
Template.listHouses.onCreated(function () {
    this.subscribe('houses');
});

Template.listHouses.helpers({
    houses() {
        return Houses.find({});
    }
});

/*
 * This is for myHouses
 */


Template.myHouses.onCreated(function(){
    this.subscribe('houses');
});
Template.myHouses.events({
    'click #createhousebutton'(){
        FlowRouter.go('mainLayout',{content:"createhouseform"});
    },
    'click #houseTrash'(){
        Houses.remove({_id:this._id});
    },

});

Template.myHouses.helpers({
    houses(){
        return Houses.find({owner:user});
    }
});

/*
 * This is for createHouse
 */

Template.createhouseform.onCreated(function(){
    this.subscribe('houses');
});

Template.createhouseform.helpers({

});

Template.createhouseform.events({
    'submit form'(event){
        event.preventDefault();
        const target = event.target;

        //needs validation but this works for now
        var hname = target.housename.value;
        var hlocation = target.houselocation.value;
        var hdesc = target.housedescription.value;
        var hrate = target.houserate.value;
        Reservations.insert({reserver:"dWkCzZSSP6SmsMFSL", house:"vNbh7aHRL7zN3GAiX", checkin: new Date(), checkout: new Date()});

        Houses.insert({owner:user,name:hname,location:hlocation,description:hdesc,nightlyRate:hrate,isAvailable:true});
        target.reset();
        FlowRouter.go("/myHouses");
        // Meteor.call("insertHouse",{
        //     owner:user,
        //     name:,
        //     description:event.target.description.value,
        //     location: event.target.location,
        //     nightlyRate: event.target.nightlyRate,
        //     isAvailable: event.target.isAvailable
        // },function(err,id){
        //     if(id){
        //         Console.log("it did it");
        //        // FlowRouter.go("/");
        //     }else{
        //         console.log(err);
        //     }
        // });
    }
});
/**
 * Any meteor methods for any house functions
 */
// Meteor.methods({
//     insertHouse: function(house){
//         if(Houses.schema.validate(house)) {
//             return Houses.insert(house);
//         }
//     }
// });