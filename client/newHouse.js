import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Mongo} from 'meteor/mongo';
import {Houses} from '../imports/js/collections.js';

import '../imports/js/collections';

let user = Meteor.userId();

Template.myHouses.onCreated(function(){
    this.subscribe('houses');
});
Template.myHouses.events({
    'click #createhousebutton'(){
        FlowRouter.go('mainLayout',{content:"createhouseform"});
    }
});

Template.myHouses.helpers({
    houses(){
        return Houses.find({owner:user});
    }
});

Template.createhouseform.onCreated(function(){
    this.subscribe('houses');
});

Template.createhouseform.helpers({

});

Template.createhouseform.events({
    'submit form'(event){
        event.preventDefault();
        console.log(event);
        console.log("You clicked submit new house");
        const target = event.target;

        var hname = target.housename.value;
        var hlocation = target.houselocation.value;
        var hdesc = target.housedescription.value;
        var hrate = target.houserate.value;

        Houses.insert({owner:user,name:hname,location:hlocation,description:hdesc,nightlyRate:hrate,isAvailable:true});
        console.log(Houses.find({}));
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

Meteor.methods({
    insertHouse: function(house){
        if(Houses.schema.validate(house)) {
            return Houses.insert(house);
        }
    }
});