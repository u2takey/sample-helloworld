const { events, Job } = require("brigadier")

events.on("exec", () => {
  console.log("==> handling an 'exec' event")
})

events.on("push", () => {
  console.log(" **** I'm a GitHub 'push' handler")
})

events.on("push", (e, p) => {
  var one = new Job("one", "alpine:3.4")
  var two = new Job("two", "alpine:3.4")

  one.tasks = ["echo world"]
  one.run().then( result => {
    two.tasks = ["echo hello " + result.toString()]
    two.run().then( result2 => {
      console.log(result2.toString())
    })
  })
})
