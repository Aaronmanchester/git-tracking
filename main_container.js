 {
            "src": "icons/Icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },


{
            "src": "icons/Icon-maskable-512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"


  // Send message to Slack.
  const message = createSlackMessage(build);
  console.log("webhook message", message)
  console.log("build substitutions", JSON.stringify(build.substitutions))
  console.log("build source", JSON.stringify(build.source))
  console.log("build steps", JSON.stringify(build.steps))
  console.log("build results", JSON.stringify(build.results))
  console.log("build failure info", JSON.stringify(build.failureInfo))
  webhook.send(message);
        }
