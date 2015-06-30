var dataAPI = require('demo-rio').requireDataHandle();
// This file is auto generated based on user-defined interface.
// Please make sure that you have checked all TODOs in this file.
// TODO: please replace types with peramters' name you wanted of any functions
// TODO: please replace $ipcType with one of dbus, binder, websocket and socket

var initObj = {
  "address": "nodejs.webde.data",
  "path": "/nodejs/webde/data",
  "name": "nodejs.webde.data",
  "type": "dbus",
  "service": true,
  "interface": [{
    "name": "getLocalData",
    "in": [],
    "show": "l"
  }, {
    "name": "startIMChatServer",
    "in": [],
    "show": "l"
  }, {
    "name": "sendIMMsg",
    "in": [],
    "show": "l"
  }, {
    "name": "loadFile",
    "in": [
    "String"
    ],
    "show": "l"
  }, {
    "name": "loadResources",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "loadContacts",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getAllCate",
    "in": [],
    "show": "l"
  }, {
    "name": "getAllDataByCate",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getAllContacts",
    "in": [],
    "show": "l"
  }, {
    "name": "rmDataByUri",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getDataByUri",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getDataByPath",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "openDataByUri",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "openDataByPath",
    "in": [],
    "show": "l"
  }, {
    "name": "updateDataValue",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "getRecentAccessData",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "getServerAddress",
    "in": [],
    "show": "l"
  }, {
    "name": "getDeviceDiscoveryService",
    "in": [],
    "show": "l"
  }, {
    "name": "pasteFile",
     "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "createFile",
    "in": [],
    "show": "l"
  }, {
    "name": "getResourceDataDir",
    "in": [],
    "show": "l"
  }, {
    "name": "getAllTagsByCategory",
    "in": [
      "Array"
    ],
    "show": "l"
  }, {
    "name": "getTagsByUri",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getTagsByUris",
    "in": [],
    "show": "l"
  }, {
    "name": "setTagByUri",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "setTagByUriMulti",
    "in": [],
    "show": "l"
  }, {
    "name": "getFilesByTags",
    "in": [
      "Array"
    ],
    "show": "l"
  }, {
    "name": "getFilesByTagsInCategory",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "rmTagAll",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "rmTagsByUri",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "initDesktop",
    "in": [],
    "show": "l"
  }, {
    "name": "getAllDesktopFile",
    "in": [],
    "show": "l"
  }, {
    "name": "readDesktopConfig",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "writeDesktopConfig",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "shellExec",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "moveFile",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "renameDesktopFile",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "linkAppToDesktop",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "unlinkApp",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "moveToDesktopSingle",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "moveToDesktop",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "removeFileFromDB",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "removeFileFromDesk",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getFilesFromDesk",
    "in": [],
    "show": "l"
  }, {
    "name": "getAllVideo",
    "in": [],
    "show": "l"
  }, {
    "name": "getAllMusic",
    "in": [],
    "show": "l"
  }, {
    "name": "createFileOnDesk",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "renameFileOnDesk",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "getIconPath",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "setRelativeTagByPath",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "pullFromOtherRepoTest",
    "in": [],
    "show": "l"
  }, {
    "name": "getGitLog",
    "in": [],
    "show": "l"
  }, {
    "name": "repoReset",
    "in": [],
    "show": "l"
  }, {
    "name": "repoResetFile",
    "in": [],
    "show": "l"
  }, {
    "name": "renameDataByUri",
    "in": [
      "Object"
    ],
    "show": "l"
  }, {
    "name": "deviceInfo",
    "in": [],
    "show": "l"
  }, {
    "name": "getMusicPicData",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getVideoThumbnail",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "repoSearch",
    "in": [],
    "show": "l"
  }],
  "serviceObj": {
    getLocalData: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    startIMChatServer: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    sendIMMsg: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    loadFile: function(val, callback) {
      dataAPI.loadFile(function(err,result){
        var retObj = new Object();
        retObj.ret = result;
        if (err) {
          retObj.retErr = err;
        };
        callback(retObj);
      }, val);
    },
    loadResources: function(val, callback) {
      dataAPI.loadResources(function(err, result) {
        var retObj = new Object();
        retObj.ret = result;
        if (err) {
          retObj.retErr = err;
        };
        callback(retObj);
      }, val);
    },
    loadContacts: function(val, callback) {
      dataAPI.loadContacts(function(res) {
        var retObj = new Object();
        if (res === null) {
          retObj.ret = "success";
        };
        callback(retObj);
      }, val);
    },
    getAllCate: function(callback) {
      dataAPI.getAllCate(function(res){
        var retObj = new Object();
        retObj.ret = JSON.stringify(res);
        callback(retObj);
      });
    },
    getAllDataByCate: function(val, callback) {
      dataAPI.getAllDataByCate(function(res){
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      },val);
    },
    getAllContacts: function(callback) {
      dataAPI.getAllContacts(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    rmDataByUri: function(val, callback) {
      dataAPI.rmDataByUri(function(err){
        var retObj = new Object();
        if (err === null) {
          retObj.ret = "success";
        }else{
          res.ret = res;
        }
        callback(retObj);
      },val);
    },
    getDataByUri: function(val, callback) {
      dataAPI.getDataByUri(function(res){
        var retObj = new Object();
        if (res === null) {
          retObj.ret = "failed";
        }else{
          retObj.ret = res;
          console.log(res);
        }
        callback(retObj);
      },val);
    },
    getDataByPath: function(val, callback) {
      dataAPI.getDataByPath(function(err,result){
        var retObj = new Object();
        if (err !== null) {
          retObj.ret = result;
        }else{
          console.log("call getDataByPath error in dataStub. ");
        }
        callback(retObj);
      },val);
    },
    openDataByUri: function(val, callback) {
      dataAPI.openDataByUri(function(res){
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      },val);
    },
     /*deleted*/openDataByPath: function(callback) {},
    updateDataValue: function(obj, callback) {
      dataAPI.updateDataValue(function(err,result){
        var retObj = new Object();
        if (err) {
          console.log("call updateDataValue error in dataStub. ");
        }else{
          retObj.ret = res;
        }
        callback(retObj);
      }, obj.item, obj.uri);
    },
    getRecentAccessData: function(obj, callback) {
      dataAPI.getRecentAccessData(function(err,result){
        var retObj = new Object();
        if (err) {
          console.log("call getRecentAccessData error in dataStub. ");
        }else{
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.category, obj.num);
    },
    getServerAddress: function(callback) {
      dataAPI.getServerAddress(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getDeviceDiscoveryService: function(callback) {
      dataAPI.getDeviceDiscoveryService(function(typ, data) {
        var retObj = new Object();
        var obj = new Object();
        obj.typ = typ;
        obj.dat = data;
        retObj.ret = obj;
        callback(retObj);
      });
    },
    pasteFile: function(obj, callback) {
      dataAPI.pasteFile(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call pasteFile error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.filename, obj.category);
    },
    createFile: function(obj, callback) {
      dataAPI.createFile(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call createFile error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.filename, obj.category);
    },
    getResourceDataDir: function(callback) { 
       dataAPI.getResourceDataDir(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getAllTagsByCategory: function(val, callback) {
      dataAPI.getAllTagsByCategory(function(res){
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    getTagsByUri: function(val, callback) {
      dataAPI.getTagsByUri(function(res){
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
     /*deleted*/getTagsByUris: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    setTagByUri: function(obj, callback) {
      dataAPI.setTagByUri(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call setTagByUri error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.oTags, obj.sUri);
    },
    setTagByUriMulti: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    getFilesByTags: function(val, callback) {
      dataAPI.getFilesByTags(function(res){
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    getFilesByTagsInCategory: function(val, callback) {
      dataAPI.getFilesByTagsInCategory(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val.category, val.oTags);
    },
    rmTagAll: function(obj, callback) {
      dataAPI.rmTagAll(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call rmTagAll error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.oTags, obj.category);
    },
    rmTagsByUri: function(obj, callback) {
      dataAPI.rmTagsByUri(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call rmTagsByUri error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.sTag, obj.oUri);
    },
    initDesktop: function(callback) {
      dataAPI.initDesktop(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getAllDesktopFile: function(callback) {
      dataAPI.getAllDesktopFile(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    readDesktopConfig: function(val, callback) {
      dataAPI.readDesktopConfig(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    writeDesktopConfig: function(obj, callback) {
      dataAPI.writeDesktopConfig(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call writeDesktopConfig error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.sFileName, obj.oContent);
    },
    shellExec: function(val, callback) {
      dataAPI.shellExec(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    moveFile: function(obj, callback) {
      dataAPI.moveFile(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call moveFile error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.oldPath, obj.newPath);
    },
    renameDesktopFile: function(obj, callback) {
      dataAPI.renameDesktopFile(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call renameDesktopFile error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.oldName, obj.newName);
    },
    linkAppToDesktop: function(obj, callback) {
      dataAPI.linkAppToDesktop(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call linkAppToDesktop error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.sApp, obj.sType);
    },
    unlinkApp: function(val, callback) {
      dataAPI.unlinkApp(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    moveToDesktopSingle: function(val, callback) {
      dataAPI.moveToDesktopSingle(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    moveToDesktop: function(val, callback) {
      dataAPI.moveToDesktop(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    removeFileFromDB: function(val, callback) {
      dataAPI.removeFileFromDB(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    removeFileFromDesk: function(val, callback) {
      dataAPI.removeFileFromDesk(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    getFilesFromDesk: function(callback) {
      dataAPI.getFilesFromDesk(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getAllVideo: function(callback) {
      dataAPI.getAllVideo(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getAllMusic: function(callback) {
      dataAPI.getAllMusic(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    createFileOnDesk: function(val, callback) {
      dataAPI.createFileOnDesk(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    renameFileOnDesk: function(obj, callback) {
      dataAPI.renameFileOnDesk(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call renameFileOnDesk error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.oldName, obj.newName);
    },
    getIconPath: function(obj, callback) {
      dataAPI.getIconPath(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call getIconPath error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.iconName, obj.size);
    },
    setRelativeTagByPath: function(callback) {
      dataAPI.setRelativeTagByPath(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call setRelativeTagByPath error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.sFilePath, obj.sTags);
    },
    pullFromOtherRepoTest: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    getGitLog: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    repoReset: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    repoResetFile: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ },
    renameDataByUri: function(obj, callback) {
      dataAPI.renameDataByUri(function(err, result) {
        var retObj = new Object();
        if (err) {
          console.log("call renameDataByUri error in dataStub. ");
        } else {
          retObj.ret = result;
        }
        callback(retObj);
      }, obj.sUri, obj.sNewName);
    },
    deviceInfo: function(callback) {
      dataAPI.deviceInfo(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      });
    },
    getMusicPicData: function(val, callback) {
      dataAPI.getMusicPicData(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    getVideoThumbnail: function(val, callback) {
      dataAPI.getVideoThumbnail(function(res) {
        var retObj = new Object();
        retObj.ret = res;
        callback(retObj);
      }, val);
    },
    repoSearch: function(callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ }
  }
}

function Stub() {
  // TODO: please replace $IPC with the real path of webde-rpc module in your project
  this._ipc = require('webde-rpc').getIPC(initObj);
}

Stub.prototype.notify = function(event) {
  this._ipc.notify.apply(this._ipc, arguments);
};

var stub = null;
exports.getStub = function() {
  if (stub == null) {
    stub = new Stub();
  }
  return stub;
}