Meteor.methods({
  updateProfile(profileObj) {
        check(profileObj, {
            name: String,
            phone: Match.Optional(String)
        });
        Meteor.users.update(this.userId, {$set: {profile: profileObj}});
    },
});
