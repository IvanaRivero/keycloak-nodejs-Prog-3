const express = require('express');
const router = express.Router();

const keycloak =require('../config/keycloak-config.js').getKeycloak();

router.get('/anonymous',function(req,res){
    res.send('Hello anonymous');
});

// ruta básica
router.get('/user', function(req, res){     
//router.get('/user', keycloak.protect('user'), function(req,res){
    res.send('Hello user');
});

// ruta básica
router.get('/admin',function(req, res){     
//router.get('/admin', keycloak.protect('admin'),function(req,res){
    res.send('Hello admin');
});

// ruta básica
router.get('/all-user',function(req, res){   
//router.get('/all-user', keycloak.protect(['user', 'admin']),function(req,res){
    res.send('Hello all user');
});

module.exports = router