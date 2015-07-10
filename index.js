var http = require('http');

// Your external IP. Alexa can only access publically-accessible IPs. No LAN access unfortunately.
// Make sure to set up port fortwarding on port 8060 to your Roku's IP on your router.

var local_ip = '72.21.64.75';

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.495629083449"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');
   
var RokuControl = function () {
    AlexaSkill.call(this, APP_ID);
};


// Extend AlexaSkill
RokuControl.prototype = Object.create(AlexaSkill.prototype);
RokuControl.prototype.constructor = RokuControl;



RokuControl.prototype.intentHandlers = {
        RokuIntent: function (intent, session, response) {
        
        //No matter what she wants to tell you her opinion.
        
        function satisfyAlexa() {
                        response.tell("");
                        };
        
        // Obtain User Intent

        switch(intent.slots.Control.value) {
                
                // Same button is used
                case "play":
                case "pause":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Play',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;
                
                // Opens up voice search, although you can select characters with your remote.
                // Need to investigate ability to pass search term directly to voice search

                case "search":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Search',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();                 
                break;                

                // Another one of those fun but hidden buttons
                case "instant replay":
                case "show an instant replay":
                case "do an instant replay":
                case "show a instant replay":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Search',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();                 
                break; 

                case "go back":
                case "back":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Back',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;       
                
                case "go home":
                case "home":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Home',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;
                
                case "select":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Select',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;    
                
                case "go left":
                case "left":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Left',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                        
                        
                break;                                                              
               
                case "go right":
                case "right":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Right',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;                      
               
                case "go up":
                case "up":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Up',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;                      

                case "go down":
                case "down":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/keypress/Down',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;
                
                // Application Launcher. Far from perfect especially with similar sounding channels.

                case "launch hulu plus":
                case "start hulu plus":
                case "hulu plus":
                case "launch hulu":
                case "start hulu":
                case "hulu":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/launch/2285',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;                
                
                case "launch plex":
                case "start plex":
                case "plex":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/launch/13535',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;                 
                
                case "launch netflix":
                case "start netflix":
                case "netflix":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/launch/13535',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;
                
                case "launch vevo":
                case "start vevo":
                case "vevo":
                        var options = {
                                host: local_ip,
                                port: 8060,
                                path: '/launch/20445',
                                method: 'POST'
                        };
                        
                        var req = http.request(options, satisfyAlexa);
                        req.end();
                break;                                
                
                default:
                        response.tell("I didn't hear an option.");
                break;       
                
        }  
        }
}

exports.handler = function (event, context) {
       
        var rokuControl = new RokuControl();
        rokuControl.execute(event, context);
        
};
