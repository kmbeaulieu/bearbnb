Template.editProfile.onCreated(function () {
  this.loading = new ReactiveVar(false);
	Meteor.subscribe('userData');
});

Template.editProfile.events({
  'submit form'(e, t) {
        e.preventDefault();
        t.loading.set(true);

        const name = t.find('#profile-name').value.trim(),
            phone = t.find('#profile-phone').value.trim();

        if (name === '') {
            Materialize.toast('Please fill in your name!', 4000, 'toast-error');
            return;
        }

        const profileObj = {
            name: name,
            phone: phone,
        };

        //updateProfile(fileObj);

        function updateProfile(profileObj) {
            Meteor.call('updateProfile', profileObj, function (err) {
                if (err) {
                    t.loading.set(false);
                    console.log(err);
                } else {
                    const interval = Meteor.setInterval(function () {
                            Meteor.clearInterval(interval);
                          }, 50);
                }
            });
        }

    }
});
