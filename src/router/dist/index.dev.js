"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _LoginView = _interopRequireDefault(require("@/views/LoginView.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _MainWorkerView = _interopRequireDefault(require("@/views/MainWorkerView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import HomeView from '../views/HomeView.vue'
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'login',
  component: _LoginView["default"]
}, {
  path: '/main-worker',
  name: 'mainWorker',
  component: _MainWorkerView["default"] // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;