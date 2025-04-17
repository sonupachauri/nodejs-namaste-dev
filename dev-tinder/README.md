## Dev Tinder

### Requirements: 
1. Create an account
2. Login
3. Update your profile
4. Feed page- explore
5. send connection request
6. see our matches
7. See the request we have sent/recieve
8. Update your profile

### Tech Planning: HLD
1. Microservice1 - FE- React
2. Microservice2 - BE- NodeJS, MongoDB

### Tech Planning: LLD
1. Database Design
      - User Collection
      - 
2. APIs Design
3. Status
      - pending
      - accepted
      - rejected
      - ignored

### Project Setup & Development
 - npm init
 - create src folder, inside create app.js
 - npm install express --save
 - npm install nodemon

###### Add Below in package.json file
   - "start":"node src/app.js",
   - "test": "echo \"Error: no test specified\" && exit 1",
   - "dev":"nodemon src/app.js"
Order of route matter when we use app.use()