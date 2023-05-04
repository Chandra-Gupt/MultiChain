"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/examplepage";
exports.ids = ["pages/api/examplepage"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/examplepage.js":
/*!**********************************!*\
  !*** ./pages/api/examplepage.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// import {getSession} from 'next-auth/react'\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { chainid  } = req.body;\n            console.log(chainid, \"data properties\");\n            var config = {\n                method: \"get\",\n                url: `https://bridgeapi.anyswap.exchange/v4/tokenlistv4/${chainid}`\n            };\n            await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        // res.status(200).json({ data: reference });\n        } catch (err) {\n            // console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDMUIsNkNBQTZDO0FBRTlCLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLDBDQUEwQztJQUUxQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFDQyxRQUFPLEVBQUMsR0FBR0gsSUFBSUksSUFBSTtZQUUxQkMsUUFBUUMsR0FBRyxDQUFDSCxTQUFTO1lBQ3JCLElBQUlJLFNBQVM7Z0JBQ1hMLFFBQVE7Z0JBQ1JNLEtBQU0sQ0FBQyxrREFBa0QsRUFBRUwsUUFBUSxDQUFDO1lBRXRFO1lBQ0EsTUFBTUwsaURBQUtBLENBQUNTLFFBQVFFLElBQUksQ0FBQyxTQUFVQyxRQUFRLEVBQUU7Z0JBQzNDTCxRQUFRQyxHQUFHLENBQUNLLEtBQUtDLFNBQVMsQ0FBQ0YsU0FBU0csSUFBSTtnQkFDeENaLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVGLE1BQU1ILFNBQVNHLElBQUk7Z0JBQUM7WUFDN0M7UUFHQSw2Q0FBNkM7UUFDL0MsRUFBRSxPQUFPRyxLQUFLO1lBQ1osb0JBQW9CO1lBQ3BCZixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPRDtZQUFJO1FBQ3BDO0lBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tdWx0aWNoYWluZGVtby8uL3BhZ2VzL2FwaS9leGFtcGxlcGFnZS5qcz9jNjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7Z2V0U2Vzc2lvbn0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHtyZXF9KVxuXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7Y2hhaW5pZH0gPSByZXEuYm9keTtcbiAgICAgXG4gICAgICBjb25zb2xlLmxvZyhjaGFpbmlkLCAnZGF0YSBwcm9wZXJ0aWVzJylcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiAgYGh0dHBzOi8vYnJpZGdlYXBpLmFueXN3YXAuZXhjaGFuZ2UvdjQvdG9rZW5saXN0djQvJHtjaGFpbmlkfWAsXG5cbiAgICAgIH07XG4gICAgICBhd2FpdCBheGlvcyhjb25maWcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZXNwb25zZS5kYXRhIH0pO1xuICAgICAgfSk7XG5cblxuICAgICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhOiByZWZlcmVuY2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBFcnJvcjogZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNoYWluaWQiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/examplepage.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examplepage.js"));
module.exports = __webpack_exports__;

})();