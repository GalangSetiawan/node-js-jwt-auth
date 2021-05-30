# node-js-jwt-auth

wah the best ni aku, lega juga kelarin project backend ini, karna biasanya diriku cuma pegang frontend doang haha.
project backend rest API ini menggunakan `MYSQL, EXPRESS, NODEJS`

how to run programs
1. masuk ke direktori projek dan ketik `npm install`
2. untuk running programs ketik 'node `server.js`


for your information
1. server running on port `8080`
2. create database with name `nodejs`

## LIST API 

### 1. User & JWT authentication
1. POST	  `/api/auth/signup`	    signup new account
2. POST	  `/api/auth/signin`	    login an account
3. GET	  `/api/test/all`	        retrieve public content
4. GET	  `/api/test/user`	      access User’s content
5. GET	  `/api/test/mod`	        access Moderator’s content
6. GET	  `/api/test/admin`	      access Admin’s content
