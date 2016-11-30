import {Meteor} from 'meteor/meteor';
var user = Meteor.userId();

Template.createhouseform.events({
    'click #submithousebutton'(event){
        event.preventDefault();
        //figure out how to get the values from the radio buttons

        // if(event.target.radiobutton.value){var a = true;}
        // else{a=false;}

        //checking what values are input, if i got the thing right by using event.target...
        console.log("desc: " +event.target.description.value);
        console.log("location: " +event.target.location.value);
        console.log("rate: " +event.target.nightlyRate.value);


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