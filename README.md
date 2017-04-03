# React-native_Firebase_auth

# REACT NATIVE AUTH USING FIREBASE

### Steps -  TO START A REACT NATIVE PROJECT FROM SCRATCH:

1. Type the CLI in command line as  react-native init auth
2. cd into Project ‘auth'
3. START SIMULATOR
4. react-native run-ios

Need to know - how to use FIREBASE to authenticate a user into the app.

To do so we need to
— Sign up to Firebase
— Install Libraries

1 Delete all the content from index.android.js and index.ios,js.
3. make new directory called src
4. inside make app.js
5. Fill in the boiler plate in app.js
6. put code in index.ios.js and copy same in android one - in this case we are using appRegistart.registerComponet

## when error comes 
React-native 'app is not registered' error

— kill the node processes by 
ps aux | grep react-native
kill -9 [pid]

or

npm start - this works for me

# FIREBASE :
its an online database that will connect directly to our app
used for -
— analytics
— file storage
— authentication

SETTING FIREBASE 

go to firebase.google.com

Sign in with google

Go to console

Create new project, i named it authentication

in the left side, click on authentication

now click on email/password for ‘AUTHENTICATE MECHANISM’

Click enabled and save.

ALL DONE
