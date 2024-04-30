const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'});

const envFile = `export const environment = {
    HTTPS_SMS_KEY: '${process.env.HTTPS_SMS_KEY}',
    MY_PHONE_NUMBER: '${process.env.MY_PHONE_NUMBER}',
};
`;
// Check custom 'ng build' from vercel, must align with the path
const targetPath = path.join(__dirname, './src/environments/environment.development.ts');
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
    // Show the content of the file
    fs.readFile (targetPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(data);
      }
    });
  }
});
