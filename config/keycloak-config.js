const session = require('express-session')
const Keycloak = require ('keycloak-connect')

let _keycloak;

var keycloakConfig={
    clientId:'nodejs-microservice',
    bearerOnly:true,
    serverUrl:'http://localhost:8080/auth',
    realm:'Demo-Realm',
    credential:{
        secret:'711f21d6-9ccf-4d53-9f9c-21d2ff3f42dc'
    }
}

function initKeycloak(){
    if(_keycloak){
        console.warm("Trying to init Keycloak again!")
        return _keycloak
    }
    else{
        console.log("Initializing Keycloak...")
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({store:memoryStore},keycloakConfig);
        return _keycloak
    }
}

function getKeycloak(){
    if(! _keycloak){
        console.error("Keycloak has not been initialized. Please called init first")
    }
    return _keycloak
}

module.exports={
    initKeycloak,
    getKeycloak
}