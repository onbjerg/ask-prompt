var ask = require('../')

ask([
  {name: 'name'},
  {name: 'description'},
  {name: 'website', default: 'http://example.com'}
], function (err, data) {
  if (err) return console.error(err)
  console.log(data)
})
