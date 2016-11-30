import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

 import '../html/navigationbar.html';

Template.navigationbar.events({
    'click .logout': function (event) {
        event.preventDefault();
        if (Meteor.user()){Meteor.logout();}
    }
});

