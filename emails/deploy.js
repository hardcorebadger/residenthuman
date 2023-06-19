const admin = require('firebase-admin');

var serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://"+serviceAccount['project_id']+".firebaseio.com"
});
const db = admin.firestore();

var fs = require('fs')

fs.readdir('./out', function(err, files) {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } else {
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log("Uploading " + file + " ..."); 
      fs.readFile('./out/welcome.html', 'utf8', function(err, data) {
        if (err) return err;
        const name = file.replace(/\.[^/.]+$/, "")
        db.collection('email-templates').doc(name).set({html:data});
      });
    });
  }

})
