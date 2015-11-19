var read = require('read')

module.exports = function (prompts, cb) {
  ask(prompts, cb)

  var data = {}
  function ask (prompts, cb) {
    if (!prompts.length) return cb(null, data)
    var p = prompts.shift()

    read({prompt: p.name + ': ', default: p.default}, function (err, value) {
      if (err) return cb(err)
      if (value) data[p.name] = value
      ask(prompts, cb)
    })
  }
}
