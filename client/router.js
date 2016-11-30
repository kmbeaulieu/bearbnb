FlowRouter.route('/',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'test'});
    }
});

FlowRouter.route('/myhouses',{
    action: function(){
        BlazeLayout.render('mainLayout',{content:'myhouses'});
    }

});


FlowRouter.notFound = {
    action() {
        BlazeLayout.render('mainLayout', {content: 'notFound'});
    }
};