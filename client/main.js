import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';

import './main.html';

Template.test.onCreated(function testOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.test.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.test.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});

Template.navigationbar.events({
    'click .logout'(event){
        event.preventDefault();
        Meteor.logout();
    },
    'click #myhouses': function (event) {
        event.preventDefault();
        FlowRouter.go("/myHouses");
    }
});
let user = Meteor.userId();

