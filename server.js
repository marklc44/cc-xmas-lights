var express = require('express')
var body = require('body-parser');
var color = require('onecolor')

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.post('/sms', function(req, res) {
  var sms = req.body.toLowerCase()
  var rgba = color(sms); // array of values

  if (rgba.length === 4) {
    var red = parseInt(Math.round(255 * rgba[0]));
    var green = parseInt(Math.round(255 * rgba[1]));
    var blue = parseInt(Math.round(255 * rgba[2]));
    var rgbString = '[{0:03red},{1:03green},{2:03blue}]' // this is not the right way
    var data = {'access_token': process.env['SPARK_ACCESS_TOKEN'], 'command': rgb_string};
    var r = requests.post("https://api.spark.io/v1/devices/{0}/color".format(os.environ['SPARK_CORE_ID']), data=payload) // make post to spark endpoint

  }

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})