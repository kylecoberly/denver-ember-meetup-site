import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function(){
  this.route('events');
  this.route('contact');
  this.route('members');
});

export default Router;
