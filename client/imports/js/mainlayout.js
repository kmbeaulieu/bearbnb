import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

Template.navigationbar.events({
    'click .logout': function (event) {
        event.preventDefault();
        if (Meteor.user()){Meteor.logout();}
    },
    'click #myhouses': function (event) {
        event.preventDefault();
        FlowRouter.go("/myHouses");
    }
});