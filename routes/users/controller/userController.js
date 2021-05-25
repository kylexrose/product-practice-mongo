const User = require('../model/User');

module.exports = {
    getAllUsers: (callback) => {
        User.find({}, (err, payload) => {
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },
    createUser: (body, callback) => {
        let createdUser = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            email : body.email,
            password: body.password,
            username :body.username,
        })

        createdUser.save((err, payload)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },
    updateUserByID: function (id, body, callback) {
        User.findByIdAndUpdate(
          { _id: id },
          body,
          { new: true },
          function (err, updatedPayload) {
            if (err) {
              callback(err, null);
            } else {
              callback(null, updatedPayload);
            }
          }
        );
      },
    deleteUserByID: function (id, callback) {
        User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
            if (err) {
            callback(err, null);
            } else {
            callback(null, deletedPayload);
            }
        });
    },
};