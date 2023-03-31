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
exports.id = "pages/api/destinationChain";
exports.ids = ["pages/api/destinationChain"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/destinationChain.js":
/*!***************************************!*\
  !*** ./pages/api/destinationChain.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// import {getSession} from 'next-auth/react'\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { data , token  } = req.body;\n            console.log(data, \"data properties\");\n            var config = {\n                method: \"get\",\n                url: \"https://scanapi.multichain.org/data/chain?type=all\"\n            };\n            await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        // res.status(200).json({ data: reference });\n        } catch (err) {\n            // console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVzdGluYXRpb25DaGFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUMxQiw2Q0FBNkM7QUFFOUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsMENBQTBDO0lBRTFDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFLLEVBQUNDLEtBQUksRUFBQ0MsTUFBSyxFQUFDLEdBQUdKLElBQUlLLElBQUk7WUFFNUJDLFFBQVFDLEdBQUcsQ0FBQ0osTUFBTTtZQUNsQixJQUFJSyxTQUFTO2dCQUNYTixRQUFRO2dCQUNSTyxLQUFNO1lBRVI7WUFDQSxNQUFNWCxpREFBS0EsQ0FBQ1UsUUFBUUUsSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtnQkFDM0NMLFFBQVFDLEdBQUcsQ0FBQ0ssS0FBS0MsU0FBUyxDQUFDRixTQUFTUixJQUFJO2dCQUN4Q0YsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRVosTUFBTVEsU0FBU1IsSUFBSTtnQkFBQztZQUM3QztRQUdBLDZDQUE2QztRQUMvQyxFQUFFLE9BQU9hLEtBQUs7WUFDWixvQkFBb0I7WUFDcEJmLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFLE9BQU9EO1lBQUk7UUFDcEM7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL211bHRpY2hhaW5kZW1vLy4vcGFnZXMvYXBpL2Rlc3RpbmF0aW9uQ2hhaW4uanM/ZTQyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxfSlcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3R7ZGF0YSx0b2tlbn0gPSByZXEuYm9keTtcbiAgICAgXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCAnZGF0YSBwcm9wZXJ0aWVzJylcbiAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiAgXCJodHRwczovL3NjYW5hcGkubXVsdGljaGFpbi5vcmcvZGF0YS9jaGFpbj90eXBlPWFsbFwiLFxuXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVmZXJlbmNlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwidG9rZW4iLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/destinationChain.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/destinationChain.js"));
module.exports = __webpack_exports__;

})();