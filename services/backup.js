// then 활용
bcryptjs.genSalt().then(result => console.log('1: ', result));

// 소헌님께서 처음 시도하셨던 방법
const generateSalt = async () => {
  const salt = await bcryptjs.genSalt();
  return salt;
};
const salt = generateSalt();
console.log('2: ', salt);

// 소헌님께서 시도하신 방법을 활용해서 원하는 결과를 얻는 방법
const mySolution = async () => {
  const salt = await generateSalt();
  console.log('3: ', salt);
};
mySolution();
