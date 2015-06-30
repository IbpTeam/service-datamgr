var data = require('api').data();

/*data.getAllContacts(function(err, ret) {
  if (err) return console.log('get All Contacts error:', err);
  console.log('AllContacts:', ret);
});*/

/*data.loadResources(function(err, ret) {
  if (err) return console.log('loadResources error:', err);
  console.log('loadResources:', ret);
}, "/home/qiushi/project/resources");*/

/*data.loadContacts(function(err, ret)  {
  if (err) return console.log('loadContacts error:', err);
  console.log('loadContacts:', ret);
}, "/home/qiushi/project/resources/contacts/contacts.CSV");*/

/*data.loadFile(function(err, ret)  {
  if (err) return console.log('loadFile error:', err);
  console.log('loadFile:', ret);
}, "/home/qiushi/example/test/example.txt");*/

data.getAllDataByCate(function(err, ret) {
  if (err) return console.log('getAllDataByCate error:', err);
  console.log('getAllDataByCate:', ret);
  data.openDataByUri(function(err, ret) {
    if (err) return console.log('openDataByUri error:', err);
    console.log('openDataByUri:', ret);
  }, ret[0].URI);
}, "music");
  
/*data.getDataByPath(function(err, ret) {
  if (err) return console.log('getDataByPath error:', err);
  console.log('getDataByPath:', ret);
},  "/home/qiushi/.custard/resource/document/data/AboutMongoDB.txt");*/

// youwenti 
/*data.getRecentAccessData(function(err, ret) {
  if (err) return console.log('getRecentAccessData error:', err);
  console.log('getRecentAccessData:', ret);
}, "music", 5);*/

// youwenti 
// data.getFilesByTags(function(err, ret) {
//   if (err) return console.log('getFilesByTags error:', err);
//   console.log('getFilesByTags:', ret);
// },  ["Teaching"]);

// youwenti
/*data.getFilesByTagsInCategory(function(err, ret) {
  if (err) return console.log('getFilesByTagsInCategory error:', err);
  console.log('getFilesByTagsInCategory:', ret);
}, "music", ["Teaching"]);*/



