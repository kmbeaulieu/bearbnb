import {Meteor} from 'meteor/meteor';

FlowRouter.route('/',{
    action: function(){
        if(Meteor.userId()!=null){
            BlazeLayout.render('mainLayout',{content:'listHouses'});

        }else{
            BlazeLayout.render('mainLayout',{content:'landing'});
        }
    }
});

FlowRouter.route('/myHouses/newHouse',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'createhouseform'});
    }
});
FlowRouter.route('/myReservations',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'myReservations'});
    }
});

FlowRouter.route('/myHouses',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'myHouses'});
    }
});

FlowRouter.route('/myHouses/:_id',
    {
        action:function (params) {
            BlazeLayout.render('mainLayout',{content:'house'});
        }
    });

FlowRouter.route("/house/:_id",{
    action:function(params){
        BlazeLayout.render('mainLayout',{content:'house'});

    }
});

FlowRouter.route('/listHouses',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'listHouses'});
    }
});

FlowRouter.route('/cardHouse',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'listHouses'});
    }
});

FlowRouter.route('/makeReservation',{
    action: function () {
        BlazeLayout.render('mainLayout',{content:'makeReservation'});
    }
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('mainLayout', {content: 'notFound'});
    }
};
