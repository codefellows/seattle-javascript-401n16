const bcrypt = require('bcrypt');
const Model = require('../models/model.js');
const userSchema = require('../models/user-schema.js');
const UsersModel = new Model(userSchema);

const base64Decoder = (encodedString) => {
    let data = {
        username: '',
        password: '',
    };

    let decodedString = Buffer.from(encodedString, 'base64').toString();
    let dataPieces = decodedString.split(':');

    data.username = dataPieces[0];
    data.password = dataPieces[1];

    return data;
};

const getUserFromCredentials = async (userData) => {
    let possibleUsers = await UsersModel.readByQuery({
        username: userData.username,
    });

    for (let i = 0; i < possibleUsers.length; i++) {
        let isSame = await bcrypt.compare(
            userData.password,
            possibleUsers[i].password,
        );

        if (isSame) {
            return possibleUsers[i];
        }
    }
    return userData;
};

const auth = async (req, res, next) => {
    let authPieces = req.headers.authorization.split(' ');
    console.log('authPieces', authPieces);
    // Check that authPieces has two parts: the type indicator ("Basic" or "Bearer"), the gibberish (encoded or encrypted)

    if (authPieces.length === 2) {
        if (authPieces[0] === 'Basic') {
            // authPieces[1] = base64(username:password)
            let authData = base64Decoder(authPieces[1]);
            // authData = { username, password }
            // check if that user exists, if so get user
            // otherwise leave req.user as { username, password }
            req.user = await getUserFromCredentials(authData);

            next();
            return;
        } else if (authPieces[0] === 'Bearer') {
            // authPieces[1] = token
        }
    }

    next({ err: 401, msg: 'Missing correct authorization header' });
};

module.exports = auth;
