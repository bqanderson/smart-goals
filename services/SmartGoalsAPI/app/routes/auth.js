const models = require('@SmartGoals/app/setup');

module.exports = (app) => {
  const api = app.SmartGoalsAPI.app.api.auth

  app.route('/')
    .get((req, res) => res.send('Smart Goals API'));

  app.route('/api/v1/auth')
    .post(api.login(models.User));
}
