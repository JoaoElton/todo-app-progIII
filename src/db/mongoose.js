const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/task-manager-api", {
  useNewUrlParser: true
});
