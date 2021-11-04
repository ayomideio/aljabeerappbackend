const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/maintenance.controller");

module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });


// adegokeadeleke.ayo@gmail.com
// smtp.gmail.com
// 587
// ic4test@adroitsolutionsltd.com
// alvvcakmxqbfgvfa
// UTF-8

  app.post(
    "/api/maintenance",
    controller.createmaintenance
  );

  app.post(
    "/api/sendmail",
    controller.sendmaintenancemail
  );
  app.get(
    "/api/maintenance",
    controller.getmaintenance
  );

 
};
