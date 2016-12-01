Template.listHouses.onCreated(function () {
	this.subscribe('houses');
});

Template.listHouses.helpers({
	houses() {
		return Houses.find({});
	}
});
