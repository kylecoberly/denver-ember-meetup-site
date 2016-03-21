import Ember from 'ember';

export default Ember.Component.extend({
    model: {
        title: "Application Layout",
        date: "3/11/16",
        time: "6:00pm",
        locationName: "Cirro",
        description: "Lots of good stuff",
        resources: [{
            id: 1,
            url: "www.google.com",
            label: "Slide Deck"
        },{
            id: 2,
            url: "www.google.com",
            label: "Example Repo"
        }],
        video: {
            url: "www.google.com"
        },
        photos: [{
            id: 1,
            url: "www.google.com",
            description: "Slide Deck"
        },{
            id: 2,
            url: "www.google.com",
            description: "Example Repo"
        }]
    }
});
