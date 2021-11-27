const Express = require("express");
const app = Express();

const controllers = require('./controllers');

app.use('/chore', controllers.choreController);

dbConnection.authenticate()
.then(() => dbConnection.sync())
.then

app.listen(3000, () => {
  console.log(`[Server]: App is listening on 3000.`);
});
