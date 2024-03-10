const mongoose = require('mongoose');
const app = require('./app');
const { DB_HOST } = process.env;



/* Set the option to use the query string */
mongoose.set('strictQuery', true);

/* Database connection */
mongoose.connect(DB_HOST)
  .then(() => {
      console.log('Database connection success ful')
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log('Database connection successful');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
