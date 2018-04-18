require('module-alias/register');
const http = require('http'),
      SmartGoalsAPI = require('@SmartGoalsAPI'),
      SmartGoalsServer = http.Server(SmartGoalsAPI),
      SmartGoalsPort = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

SmartGoalsServer.listen(SmartGoalsPort, LOCAL, () =>
console.log(`SmartGoalAPI running on ${SmartGoalsPort}`));
