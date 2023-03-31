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
exports.id = "pages/api/initialChain";
exports.ids = ["pages/api/initialChain"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/initialChain.js":
/*!***********************************!*\
  !*** ./pages/api/initialChain.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// import {getSession} from 'next-auth/react'\nasync function handler(req, res) {\n    // const session = await getSession({req})\n    if (req.method === \"POST\") {\n        try {\n            const { data , token  } = req.body;\n            console.log(data, \"data properties\");\n            var config = {\n                method: \"get\",\n                url: \"https://bridgeapi.anyswap.exchange/data/bridgeChainInfo\"\n            };\n            await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(config).then(function(response) {\n                console.log(JSON.stringify(response.data));\n                res.status(200).json({\n                    data: response.data\n                });\n            });\n        // res.status(200).json({ data: reference });\n        } catch (err) {\n            // console.log(err);\n            res.status(500).json({\n                Error: err\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW5pdGlhbENoYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQzFCLDZDQUE2QztBQUU5QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QywwQ0FBMEM7SUFFMUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGLE1BQUssRUFBQ0MsS0FBSSxFQUFDQyxNQUFLLEVBQUMsR0FBR0osSUFBSUssSUFBSTtZQUU1QkMsUUFBUUMsR0FBRyxDQUFDSixNQUFNO1lBQ2xCLElBQUlLLFNBQVM7Z0JBQ1hOLFFBQVE7Z0JBQ1JPLEtBQU07WUFFUjtZQUNBLE1BQU1YLGlEQUFLQSxDQUFDVSxRQUFRRSxJQUFJLENBQUMsU0FBVUMsUUFBUSxFQUFFO2dCQUMzQ0wsUUFBUUMsR0FBRyxDQUFDSyxLQUFLQyxTQUFTLENBQUNGLFNBQVNSLElBQUk7Z0JBQ3hDRixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFWixNQUFNUSxTQUFTUixJQUFJO2dCQUFDO1lBQzdDO1FBR0EsNkNBQTZDO1FBQy9DLEVBQUUsT0FBT2EsS0FBSztZQUNaLG9CQUFvQjtZQUNwQmYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsT0FBT0Q7WUFBSTtRQUNwQztJQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXVsdGljaGFpbmRlbW8vLi9wYWdlcy9hcGkvaW5pdGlhbENoYWluLmpzPzE5N2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pXG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0e2RhdGEsdG9rZW59ID0gcmVxLmJvZHk7XG4gICAgIFxuICAgICAgY29uc29sZS5sb2coZGF0YSwgJ2RhdGEgcHJvcGVydGllcycpXG4gICAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogIFwiaHR0cHM6Ly9icmlkZ2VhcGkuYW55c3dhcC5leGNoYW5nZS9kYXRhL2JyaWRnZUNoYWluSW5mb1wiLFxuXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3MoY29uZmlnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAgIH0pO1xuXG5cbiAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogcmVmZXJlbmNlIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgRXJyb3I6IGVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwidG9rZW4iLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/initialChain.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/initialChain.js"));
module.exports = __webpack_exports__;

})();