# Indiestack

# Quickstart

Start by cloning the repo and cd into the directory

## 1. Set up a firebase project

Go to https://firebase.google.com, create a new project

Add Authentication to the project, enable email/password as well as Google sign in

Add Hosting, Firestore and Functions to the project

You'll need to create a Firestore database, configure however you want

When adding Functions, you'll need to upgrade to a Blaze plan. It's pay as you go (ie free for MVP)

## 2. Install the firebase CLI

Read more about the Firebase CLI here https://firebase.google.com/docs/cli

`curl -sL https://firebase.tools | bash`
auto detect OS and install the CLI

`firebase login`
log into your firebase account

## 3. Connect Indiestack to Firebase

`firebase projects:list`
list your firebase projects, you should see the one you just made

`firebase use [project ID]`
Use the project ID you just found

Now you've connected Indiestack with Firebase!

## 4. Connect the app to firebase

Add a web app in Firebase. Go to Project Settings, scroll to the bottom and click Add App. Select the `</>` Web App option, create the app. [Detailed Instructions](https://support.google.com/firebase/answer/9326094?hl=en)


Firebase gives you a config object for the app, it looks like this

```
 const firebaseConfig = {
   apiKey: "***************************************",
   authDomain: "****************.firebaseapp.com",
   projectId: "****************",
   storageBucket: "****************.appspot.com",
   messagingSenderId: "****************",
   appId: "************************************************"
 };
 ```

Copy the config object and paste it as directed in `/app/src/firebase.js`

After giving you the config code, Firebase is going to walk you through a bunch of things. We already did all that so just skip on through and get back to the console.

Now the app can communicate with firebase for auth, functions and data!

## 5. Connect emails to Firebase

Set up a service account with the firebase admin SDK and download the private key
[Get a service account key](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk)

Take the json file, rename it `key.json` and drop it in the `/emails` folder

Next set up an account with resend (a developer friendly service for sending emails)
[Get a Resend Account](https://resend.com/signup)

Once you're in, create an API key, copy it, and paste it into `/functions/index.js`

Now you can locally develop {{handlebar}} templates in react, deploy them to firebase, and send them via a function or backend trigger.

## 6. Deploy Indiestack

Everything is ready to go, now time to deploy the fullstack app!

### `./ship.sh`
This is a bash script that builds and deploys the app, emails, functions, and other backend pieces. It could take some time.

When the deploy completes, you'll be able to visit your live Indiestack app at https://[your project].web.app

And you're off! You have a fully deployed, fullstack app with Auth, Payments, Landing pages, Emails, and more. Happy hacking!

# Config

Ensure you have correctly configured all of the following firebase connections

### `/app/src/firebase.json`
Connects the app to firebase. Needs to have your app config in it. Get it by creating a new app in Firebase project settings. Paste the code you get in this file.

### `/emails/key.json`
Connects the emails to firebase. A private key for an admin API service account on Firebase. Used to upload email templates in build and deploy

### `firebase use [project ID]`
Config the root directory to point at firebase
Handles functions, firestore, and remote config

### `/functions/index.js`
Configure your resend API key to send emails

### Lemonsqueezy
There will be something for this too