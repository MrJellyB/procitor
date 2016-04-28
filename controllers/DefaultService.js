'use strict';

exports.hostAllGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * iP (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "Procs" : {
    "stats" : {
      "name" : "aeiou",
      "value" : ""
    },
    "name" : "aeiou",
    "id" : 123456789
  },
  "IP" : "aeiou",
  "name" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.hostDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iP (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "Procs" : {
    "stats" : {
      "name" : "aeiou",
      "value" : ""
    },
    "name" : "aeiou",
    "id" : 123456789
  },
  "IP" : "aeiou",
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.hostGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iP Address (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "Procs" : {
    "stats" : {
      "name" : "aeiou",
      "value" : ""
    },
    "name" : "aeiou",
    "id" : 123456789
  },
  "IP" : "aeiou",
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.hostPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * host (Host)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "Procs" : {
    "stats" : {
      "name" : "aeiou",
      "value" : ""
    },
    "name" : "aeiou",
    "id" : 123456789
  },
  "IP" : "aeiou",
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.hostPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * proc (Host)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "Procs" : {
    "stats" : {
      "name" : "aeiou",
      "value" : ""
    },
    "name" : "aeiou",
    "id" : 123456789
  },
  "IP" : "aeiou",
  "name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procAllGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * pID (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "id" : ""
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procDELETE = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pID (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stats" : {
    "name" : "aeiou",
    "value" : ""
  },
  "name" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procGET = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pID (Integer)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stats" : {
    "name" : "aeiou",
    "value" : ""
  },
  "name" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procPOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pID (Integer)
  * proc (Proc)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stats" : {
    "name" : "aeiou",
    "value" : ""
  },
  "name" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procPUT = function(args, res, next) {
  /**
   * parameters expected in the args:
  * proc (Proc)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stats" : {
    "name" : "aeiou",
    "value" : ""
  },
  "name" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.procUpdatePrecentagePOST = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pID (Integer)
  * name (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stats" : {
    "name" : "aeiou",
    "value" : ""
  },
  "name" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

