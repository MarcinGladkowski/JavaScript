# Lesson comes from [here](https://www.youtube.com/watch?v=lXJ6QK03JmA&ab_channel=overment)

* TO run: main container `make run`  and inside directory `nodemon -r esm ./src/index.js`
* If doesn't mapping localhost. Available by ip `doker container <id> inspect | grep IPAddress`
* Useful tips and tricks: 
  * With VSC use Extension to rest requests (requests.rest file)
  * We can send token with Bearer header or store it in cookie (actual code)
  * Don't store vulnerable data in JSON payload
  * Good idea is to store keys in .env files