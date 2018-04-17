module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;

  mongoose.connect(config.database, {
    useMonogClient: true,
    promiseLibrary: global.Promise
  });

  database.on('error', error => console.log(`Connection to SmartGoal database failed: ${error}`));

  database.on('connected', () => console.log('Connected to SmartGoal database'));

  database.on('disconnected', () => console.log('Disconnected from SmartGoal database'));

  process.on('SIGINT', () => {
    database.close(() => {
      console.log('SmartGoal terminated, connection closed');
    })
  });
};
