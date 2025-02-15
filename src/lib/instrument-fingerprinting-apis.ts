export function instrumentFingerprintingApis({
  instrumentObjectProperty,
  instrumentObject,
}) {
  // Access to navigator properties
  //Properties of window object
  var windowProperties = ["atob", "decodeURIComponent", "eval",
  "localStorage", "sessionStorage",
  "Uint32Array", "addEventListener", "Uint8Array",
  "onmessageerror", "encodeURIComponent", "setTimeout", "setInterval", "clearInterval",
  "onmessage", "postMessage", "WebAssembly"];
  windowProperties.forEach(function (property) {
  instrumentObjectProperty(window, "Window", property);
  });

  instrumentObjectProperty(window.URL, "Window.URL", "createObjectURL");
  
  const windowProp = ["localStorage", "sessionStorage"];
  windowProp.forEach(function(property) {
    instrumentObjectProperty(window, "Window", property);
  });
  instrumentObject(window.Storage.prototype, "Window.Storage");

  // Access to navigator properties
  var navigatorProperties = ["platform", "product",
  "productSub", "userAgent", "hardwareConcurrency"
  ];
  navigatorProperties.forEach(function (property) {
  instrumentObjectProperty(window.navigator, "Navigator", property);
  });

  var documentProperties = ["addEventListener", "scripts",
                            "createElement", "readyState"
  ];
  documentProperties.forEach(function (property) {
  instrumentObjectProperty(window.document, "Document", property);
  });
  
  instrumentObject(Math, "Math", {
  'propertiesToInstrument': ["abs", "max", "min", "pow",
  "random",  "atan", "ceil", "floor", "round", 
  "asin", ]
  });
 
  instrumentObject(Worker.prototype, "Worker");
  instrumentObject(WebSocket.prototype, "WebSocket");
  instrumentObject(BroadcastChannel.prototype, "BroadcastChannel");
  
  //instrumentObject(XMLHttpRequest.prototype, "XMLHttpRequest");
   /*
  instrumentObjectProperty(XMLHttpRequest, "window.XMLHttpRequest", "constructor");
  
  instrumentObject(BroadcastChannel, "BroadcastChannel", {
  'propertiesToInstrument': ["onmessage", "name", "onmessageerror",
                  "postMessage", "close"]
  });
  */
  
  /*
  instrumentObject(WebAssembly, "WebAssembly", {
  'propertiesToInstrument': ["Global", "Instance", "instantiate",
  "instantiateStreaming", "Memory", "Module", "Table",
  "compile", "CompileError", "constructor", "LinkError", "RuntimeError",
  "toLocaleString", "toString", "validate", "valueOf"]
  });
  */
  
  //instrumentObject(WebAssembly, "WebAssembly");
  /*
  instrumentObject(Worker, "Worker", {
  'propertiesToInstrument': ["postMessage", "terminate", "onerror", "onmessage", "Worker",
  "addEventListener", "constructor"]
  });

  instrumentObject(WebSocket, "WebSocket", {
  'propertiesToInstrument': ["onopen", "readyState", "onerror", "onmessage", "url",
  "URL", "protocol", "extensions", "constructor"]
  });
  */
}
