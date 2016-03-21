import Ember from 'ember';

export default Ember.Component.extend({
    model: {
        members: [{
            id: 1,
            fullName: "Kyle Coberly",
            portraitUrl: "http://www.google.com",
            title: "Organizer"
        },{
            id: 2,
            fullName: "Frankie Bushell",
            portraitUrl: "http://www.google.com",
        }]
    }
});
