import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'tracker-app/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.API_HOST,
  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
