import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let users = [{ email: 'test1', password: 'pwtest1' }];

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password) {
      return res.send('please type password');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      email,
      password: hashedPassword,
    });
    res.status(200).send('Register Success');
  } catch (error) {
    console.log(error);
    res.status(403).send('Register Error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.filter(user => user.email === email);
    const validPass = await bcrypt.compare(password, user[0].password);
    if (user.length === 0) {
      res.send('해당하는 아이디가 없습니다');
      return;
    }
    if (!validPass) {
      res.send('패스워드가 틀렸습니다');
    }
    const secret = '5J#wHA&jAbTmdRcaYPGu8s83Mc0vtf#w';
    const access_token = jwt.sign(
      {
        email,
        isAdmin: false,
      },
      secret,
      { expiresIn: '1h' },
    );
    console.log(access_token);
    res.cookie('access_token', access_token);
    res.send('로그인 성공');
  } catch (error) {
    console.log(error);
    res.status(500).send('Login Failed');
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Err');
});

app.listen(7000, () => {
  console.log('7000port is running');
});
