# quiz-app
this is the server client js app with nodejs(keystonejs) and angularjs for multidevices support

## Server side TODO:
####install:

1-mongodb

2-nodejs

for first start after clone need command:
```sh
$ npm install
```
-------------------
create folder in c:\mongodb
run >> 
```sh
$ mongod --dbpath=c:\mongodb
```
run >>
```sh
$ nodemon web.js
```
------------------
go to browser >> 127.0.0.1:3000\keystone

username:admin@keystonejs.com

password:admin

------------------------
# added restful json to the server

list of category >>/api/getcat

list of questions in category >> /api/LPIC1

### note:

for add new category (like LPIC2) you must add new model in code
then add the name of model in web.js (nav)
then add new category to restful.js (getcat)

--------------------------
