import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';

import './main.html';

Template.landing.onCreated(function testOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.landing.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.landing.events({
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


Template.loginBox.events({

    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value,
          password = t.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err){
        if (err){
          toastr.warning("Login Failed");
        }
        else{
          toastr.success("Logged in");

        }
      });
         return false;
      }
  });
