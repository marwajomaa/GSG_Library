const {
  getbooksnumbers, getlentbooks, getmembers, getlendingmembers,
} = require('./../database/quieres/getData');

exports.get = (req, res) => {
  getbooksnumbers((err, booksnumbers) => {
    if (err) {
      res.send('error in database');
    }
    getlentbooks((err, lendbooks) => {
      if (err) {
        res.send('error in database');
      }
      getmembers((err, members) => {
        if (err) {
          res.send('error in database');
        }
        getlendingmembers((err, lendingmembers) => {
          if (err) {
            res.send('error in database');
          }
          res.render('dashboard', {
            style: 'dashboard', booksnumbers, lendbooks, members, lendingmembers,
          });
        });
      });
    });
  });
};
