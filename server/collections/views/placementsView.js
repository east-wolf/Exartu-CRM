
PlacementsView = new Mongo.Collection("placementsView");

Meteor.paginatedPublish(PlacementsView, function () {
  if (!this.userId) return [];

  return Utils.filterCollectionByUserHier.call(this, PlacementsView.find({}, {sort: {dateCreated: -1}}));
}, {
  pageSize: 20,
  publicationName: 'placementsView'
});


// Indexes
PlacementsView._ensureIndex({placementId: 1});
PlacementsView._ensureIndex({hierId: 1});
PlacementsView._ensureIndex({userId: 1});
PlacementsView._ensureIndex({employeeId: 1});
PlacementsView._ensureIndex({jobId: 1});
PlacementsView._ensureIndex({dateCreated: 1});
