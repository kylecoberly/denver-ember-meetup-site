import Ember from 'ember';

export default Ember.Service.extend({
    smallBreakpoint: 400,
    isSmall: Ember.computed("deviceWidth", function(){
        return this.get("deviceWidth") < this.get("smallBreakpoint");
    }),
    updateDeviceWidth(){
        this.set("deviceWidth", window.innerWidth);
    },
    init(){
        this.updateDeviceWidth();
        window.onresize = this.updateDeviceWidth.bind(this);
    }
});
