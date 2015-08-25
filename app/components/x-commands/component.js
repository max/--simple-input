import Ember from 'ember';

export default Ember.Component.extend({
  commands: [],
  currentCommand: 'initial command',

  actions: {
    didInputCommand(command) {
      this.get('commands').pushObject(command);
      this.set('currentCommand', '');
    }
  }
});
