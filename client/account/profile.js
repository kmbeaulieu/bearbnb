
Template.profile.onCreated(function () {
  const userId = FlowRouter.getParam('userId');
	this.subscribe('userData', userId);
});

Template.profile.helpers({
  userProfile() {
    const userId = FlowRouter.getParam('userId');
		return Meteor.users.findOne(userId).profile;
  }
	// profile() {
	// 	const userId = FlowRouter.getParam('userId');
	// 	return Meteor.users.findOne(userId).profile;
	// }
  // description: function() {
  //   if (this.user().profile) {
  //     return this.user().profile.description || ""
  //   }
  // },
  // isCurrentUser: function() {
  //   if (this.user()._id == Meteor.userId()) {
  //     return true;
  //   }
  // }
});
