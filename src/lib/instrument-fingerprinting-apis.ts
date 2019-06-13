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
    instrumentObjectProperty(window, "window", property);
  });
  instrumentObject(window.Storage.prototype, "window.Storage");

  // Access to navigator properties
  var navigatorProperties = ["platform", "product",
  "productSub", "userAgent", "javaEnabled", "hardwareConcurrency"
  ];
  navigatorProperties.forEach(function (property) {
  instrumentObjectProperty(window.navigator, "Navigator", property);
  });

  var documentProperties = ["addEventListener", "appendChild", "baseURI",
      "removeChild", "URL", "scripts", "createElement", "readyState"
  ];
  documentProperties.forEach(function (property) {
  instrumentObjectProperty(window.document, "Document", property);
  });
  
  instrumentObject(Math, "Math", {
  'propertiesToInstrument': ["abs", "exp", "log", "log10", "log2", "max", "min", "pow",
  "random", "sign", "sqrt", "acos", "acosh", "asin", "asinh",
  "atan", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh",
  "expm1", "floor", "fround", "hypot", "imul", "round", "sin",
  "sinh", "tan", "tanh", "toSource", "trunc"]
  });
 
  instrumentObject(Worker.prototype, "Worker");
  instrumentObject(WebSocket.prototype, "WebSocket");
  instrumentObject(XMLHttpRequest.prototype, "XMLHttpRequest");
  instrumentObject(BroadcastChannel.prototype, "BroadcastChannel");
  
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
