const app = require('./app');

const { db, syncAndSeed } = require('./db');

const init = async () => {
  try {
    await db.authenticate();
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
