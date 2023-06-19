const {onCall, HttpsError} = require("firebase-functions/v2/https")
const logger = require("firebase-functions/logger")
const Handlebars = require("handlebars")
const {Resend} = require("resend")
const {initializeApp} = require("firebase-admin/app")
const {getFirestore} = require("firebase-admin/firestore")

initializeApp()

const resend = new Resend('re_DxW8bZsG_LwufhXyEuctf17zBkDMFWSeU')
const db = getFirestore()

exports.helloWorld = onCall(async (request) => {
  logger.info("Hello logs!", {structuredData: true});
  const cityRef = db.collection('email-templates').doc('example-1')
  const doc = await cityRef.get();
  if (!doc.exists) {
    logger.info("Not found!", {structuredData: true});
    return {
      message: "not found"
    }
  } else {
    console.log('Document data:', doc.data());
    return doc.data()
  }
  
})

exports.sendEmail = onCall(async (request) => {
  
  if (!request.auth) {
    throw new HttpsError("failed-precondition", "The function must be called while authenticated.");
  }

  // get their info
  const name = request.auth.token.name || null;
  const email = request.auth.token.email || null;
  
  const doc = await db.collection('email-templates').doc(request.data.template).get();
  if (!doc.exists)
    throw new HttpsError('not-found', "The template does not exist");

  const template = Handlebars.compile(doc.data().html)
  const baked = template({
    name:name
  })

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: "Hello email",
    html: baked
  });

  return {
    message: 'Success'
  }

})