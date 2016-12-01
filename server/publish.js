/** Account collerction access for additional fields 
//  http://docs.meteor.com/api/accounts.html#Meteor-users

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'other': 1, 'things': 1}});
  } else {
    this.ready();
  }
});
*/
