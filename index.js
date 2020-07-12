const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const UserController = require('./controllers/UserController');
const TokenController = require('./controllers/TokenController');
const UserCompanyController = require('./controllers/UserCompanyController');

const getToken = require('./middleawares/getToken');
const authentication = require('./middleawares/authentication');
const checkRole = require('./middleawares/checkRole');

const getConfig = require('./utils/getConfig');

app.use(bodyParser.json());

app.use(cors({}));

app.post('/login', UserController.login);
app.put('/signup', UserController.create);

app.use(getToken);
app.use(authentication);

app.get('/', UserController.getAll);
app.get('/user', UserController.getOne);
app.delete('/logout', TokenController.logout);
app.delete('/logoutAll', TokenController.logoutAll);
app.get('/user/company', UserCompanyController.getAll);

app.use(checkRole);

app.post('/user/add', UserController.create);
app.delete('/user/delete', UserController.delete);
app.patch('/user/update', UserController.update);

app.post('/company/add', UserCompanyController.create);
app.patch('/company/update', UserCompanyController.update);
app.delete('/company/delete', UserCompanyController.delete);

const { api_port } = getConfig();

app.listen(api_port, () => {
  console.log(`tss running on port ${api_port}`);
});
