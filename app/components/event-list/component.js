import Ember from 'ember';

export default Ember.Component.extend({
    model: {
        events: [{
            id: 1,
            title: "Event 1"
        },{
            id: 2,
            title: "Event 2"
        },{
            id: 3,
            title: "Event 3"
        },{
            id: 4,
            title: "Event 4"
        }]
    }
});
