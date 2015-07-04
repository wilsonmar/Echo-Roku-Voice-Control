# Echo-Roku-Voice-Control
Control your Roku the Amazon Echo. This is an unofficial method utilizing Roku's External Control Guide API http://sdkdocs.roku.com/display/sdkdoc/External+Control+Guide .

##Setup
Refer to https://developer.amazon.com/appsandservices/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function for more detailed information.

####Before anything, note that the Amazon Echo cannot access devices on your local area network. In order to get around this, set up port forwarding on your router for port 8060 to your Roku's IP.

1. Edit index.js to include your public IP address.
2. Compress index.js and AlexaSkill.js into a .ZIP and upload to AWS Lambda.
3. Invoke and test using 

```
{
  "version": "1.0",
  "session": {
    "new": false,
    "application": {
      "applicationId": "amzn1.echo-sdk-ams.app.[unique-value-here]"
    },
    "sessionId": "session1234",
    "attributes": {},
    "user": {
      "userId": null
    }
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "request5678",
    "intent": {
      "name": "RokuIntent",
      "slots": {
        "Control": {
          "name": "Control",
          "value": "home"
        }
      }
    }
  }
}
```

4. Set up new Alexa Skill on https://developer.amazon.com/edw/home.html#/ and utilize intentSchema.json and SampleUtterances.txt to help let Alexa know what she should be listening for.
5. Save everything and tell Alexa to do something on your Roku.

##Sample Statements
Note, when ever I say "Roku" that is simply the invokation word I chose. You could make it be anything you want.

######Specific Buttons
* Alexa, tell Roku to go home.
* Alexa, tell Roku to go back.
* Alexa, tell Roku to select.
* Alexa, tell Roku to search.

######Playback
* Alexa, tell Roku to play.
* Alexa, tell Roku to pause.
* Alexa, tell Roku to show an instant replay.

######Directional Buttons
* Alexa, tell Roku to go left.
* Alexa, tell Roku to go right.
* Alexa, tell Roku to go up.
* Alexa, tell Roku to go down.

######Open Apps
These are the only channels I have enabled, although you can find out APP IDs for other channels by on *nix performing

`$ curl http://xxx.xxx.xxx.xxx:8060/query/apps`

* Alexa, tell Roku to start Hulu.
* Alexa, tell Roku to launch Netflix.
* Alexa, tell Roku to Vevo.
* Alexa, tell Roku to start Plex.
