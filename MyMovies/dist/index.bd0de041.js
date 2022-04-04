// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6oitC":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c6b6838fbd0de041";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aJVUV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mymoviescontrollerJs = require("./mymoviescontroller.js");
var _searchmoviescontrollerJs = require("./searchmoviescontroller.js");
var _mymoviesJs = require("./mymovies.js");
var _mymoviesJsDefault = parcelHelpers.interopDefault(_mymoviesJs);
// import * as store from 'store2';
//const store = require("store2");
const myMovies = new _mymoviesJsDefault.default();
const searchMoviesController = new _searchmoviescontrollerJs.SearchMoviesController('#searchMoviesList', myMovies);
const myMoviesController = new _mymoviescontrollerJs.MyMoviesController('#myMoviesList', myMovies);
searchMoviesController.init();
myMoviesController.init();
const addButton = document.querySelector('#addMovies');
addButton.addEventListener('click', (event)=>{
    console.log(event);
    const slideShelf = document.querySelector('#slideShelf');
    const container = document.querySelector('#container');
    if (container.classList.contains('addActive')) event.currentTarget.innerHTML = 'Add Movies';
    else event.currentTarget.innerHTML = 'See My Movies';
    container.classList.toggle('addActive');
    slideShelf.classList.toggle('addActive');
});

},{"./mymoviescontroller.js":"jQzzO","./searchmoviescontroller.js":"5Ma5h","./mymovies.js":"4fcW8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jQzzO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// myMovies controller
parcelHelpers.export(exports, "MyMoviesController", ()=>MyMoviesController
);
var _utilitiesJs = require("./utilities.js");
var _mymoviesJs = require("./mymovies.js");
var _mymoviesJsDefault = parcelHelpers.interopDefault(_mymoviesJs);
var _mymoviesviewJs = require("./mymoviesview.js");
var _mymoviesviewJsDefault = parcelHelpers.interopDefault(_mymoviesviewJs);
class MyMoviesController {
    constructor(parent, myMovies){
        this.parent = parent;
        this.parentElement = null;
        this.currentMovies = [];
        this.myMovies = myMovies;
        this.myMoviesView = new _mymoviesviewJsDefault.default();
    }
    async init() {
        this.parentElement = document.querySelector(this.parent);
        this.currentMovies = this.myMovies.getMyMovies();
        this.myMoviesView.renderMoviesList(this.currentMovies, this.parentElement);
        this.assignEventListeners();
    }
    assignEventListeners() {
        this.myMovies.addMovieChangeListener(this.renderMoviesList.bind(this));
        document.querySelectorAll('.watch_movie').forEach((button)=>{
            button.addEventListener('click', this.watchMovie.bind(this), false);
        });
        document.querySelectorAll('.like_movie').forEach((button)=>{
            button.addEventListener('click', this.likeMovie.bind(this), false);
        });
        document.querySelectorAll('.remove_movie').forEach((button)=>{
            button.addEventListener('click', this.removeMovie.bind(this), false);
        });
    }
    renderMoviesList(newMovie) {
        console.log("rendering movieList");
        this.parentElement = document.querySelector(this.parent);
        this.myMoviesView.renderMoviesList(this.myMovies.getMyMovies(), this.parentElement);
        const newMovieElement = document.getElementById("movie-Id-" + newMovie.imdbID);
        this.assignEventListeners();
    }
    removeMovie(event) {
        const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        this.myMovies.removeMovie(movieID);
        this.currentMovies = this.myMovies.getMyMovies();
        this.myMoviesView.renderMoviesList(this.currentMovies, this.parentElement);
        this.assignEventListeners();
    }
    watchMovie(event) {
        const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        this.myMovies.watchMovie(movieID);
    }
    likeMovie(event) {
        const movieID = event.target.parentElement.parentElement.parentElement.getAttribute('data-id');
        this.myMovies.likeMovie(movieID);
    }
}

},{"./utilities.js":"6I4pQ","./mymovies.js":"4fcW8","./mymoviesview.js":"jN8Iw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6I4pQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// export function getJSON(url) {
//     return fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(function(error) {
//         console.log(error);
//     })
// };
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
parcelHelpers.export(exports, "getLocation", ()=>getLocation
);
function getJSON(url) {
    return fetch(url).then(function(response) {
        if (!response.ok) throw Error(response.statusText);
        else return response.json();
    }).catch(function(error) {
        console.log(error);
    });
}
const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4fcW8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//import * as store from "store2";
var _imdbMoviesJs = require("./imdbMovies.js");
var _imdbMoviesJsDefault = parcelHelpers.interopDefault(_imdbMoviesJs);
class MyMovies {
    constructor(){
        this.imdbMovies = new _imdbMoviesJsDefault.default();
        this.movieChangedEvents = [];
        this.getMyMovies();
    }
    getMyMovies() {
        this._myMovies = load("myMovies");
        if (!this._myMovies) this._myMovies = [];
        return this._myMovies;
    }
    addMovieChangeListener(callback) {
        this.movieChangedEvents.push(callback);
    }
    getMyMovieById(imdbID) {
        return this._myMovies.filter((item)=>item.imdbID === imdbID
        )[0];
    }
    async addMovie(movie) {
        this._myMovies.push(movie);
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach((callback)=>callback(movie)
        );
        return movie;
    }
    watchMovie(imdbID) {
        console.log("watching movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        movie.watched = movie.watched ? false : true;
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach((callback)=>callback(movie)
        );
    }
    likeMovie(imdbID) {
        console.log("liking movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        movie.liked = movie.liked ? false : true;
        save("myMovies", this._myMovies);
        this.movieChangedEvents.forEach((callback)=>callback(movie)
        );
    }
    removeMovie(imdbID) {
        console.log("removing movie " + imdbID);
        const movie = this.getMyMovieById(imdbID);
        this._myMovies = this._myMovies.filter((item)=>item.imdbID !== imdbID
        );
        save("myMovies", this._myMovies);
    }
}
exports.default = MyMovies;
function load(name) {
    console.log("retrive records");
    let recordsJSON = window.localStorage.getItem(name); //searches for the key in localStorage
    let records = JSON.parse(recordsJSON);
    //console.log(records)
    return records;
}
function save(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
    console.log("save records");
//converting object to string
}
function clearStorage() {
    localStorage.clear();
    console.log("clear records");
}

},{"./imdbMovies.js":"ggpvu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggpvu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilitiesJs = require("./utilities.js");
class imdbMovies {
    apikey = "cee23b41";
    constructor(){
        this.baseUrl = `http://www.omdbapi.com/?apikey=${this.apikey}&`;
        this._myMovies = [];
    }
    async searchByMovieTitle(title) {
        const url = `${this.baseUrl}s=${title}`;
        const response = await _utilitiesJs.getJSON(url);
        return response;
    }
    async getMovieById(imdbID) {
        const url = `${this.baseUrl}i=${imdbID}`;
        const response = await _utilitiesJs.getJSON(url);
        return response;
    }
}
exports.default = imdbMovies;

},{"./utilities.js":"6I4pQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jN8Iw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class MyMoviesView {
    renderSelectMovieList(searchResults, listElement, myMovieList) {
        listElement.innerHTML = "";
        searchResults.forEach((movie)=>{
            const item = document.createElement('div');
            item.setAttribute('data-id', movie.imdbID);
            item.innerHTML = this.getMoviePoster(movie, '<button class="add_movie">Add Movie</button>');
            if (myMovieList.find((myMovie)=>myMovie.imdbID === movie.imdbID
            )) item.firstElementChild.classList.add("added");
            listElement.appendChild(item);
        });
    }
    renderMoviesList(myMovieList, listElement) {
        listElement.innerHTML = "";
        myMovieList.forEach((movie)=>{
            const item = document.createElement('div');
            item.setAttribute('data-id', movie.imdbID);
            item.setAttribute('class', 'movie_poster_container show');
            if (movie.liked) item.classList.add("liked_movie");
            if (movie.watched) item.classList.add("watched_movie");
            item.setAttribute('id', "movie-Id-" + movie.imdbID);
            const footerText = '<div class="movie_poster__footer"><button class="watch_movie">Watched</button><button class="like_movie">Liked</button><button class="remove_movie">Remove</button></div>';
            item.innerHTML = this.getMoviePoster(movie, footerText);
            listElement.appendChild(item);
        });
    }
    getMoviePoster(movie, extraElements = "") {
        return `
      <div class="movie_poster">
        <img src=${movie.Poster} class="image"></img>
        <div class="title">${movie.Title}</div>
        <p class="year"> Year: ${movie.Year}</p>
        ${extraElements}
      </div>
      `;
    }
    renderMyMovieDetails(movie, element) {
        const movieProperties = Object.entries(movie.properties);
        // for the provided movie make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier!
        element.innerHTML = movieProperties.map((item)=>{
            if (item[0] === 'time' || item[0] === 'updated') return `<li>${item[0]}: ${new Date(item[1])}</li>`;
            else return `<li>${item[0]}: ${item[1]}</li>`;
        }).join('');
    }
}
exports.default = MyMoviesView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ma5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchMoviesController", ()=>SearchMoviesController
);
var _imdbMoviesJs = require("./imdbMovies.js");
var _imdbMoviesJsDefault = parcelHelpers.interopDefault(_imdbMoviesJs);
var _mymoviesviewJs = require("./mymoviesview.js");
var _mymoviesviewJsDefault = parcelHelpers.interopDefault(_mymoviesviewJs);
var _mymoviesJs = require("./mymovies.js");
var _mymoviesJsDefault = parcelHelpers.interopDefault(_mymoviesJs);
class SearchMoviesController {
    constructor(parentElementId, myMovies){
        this.imdbMovies = new _imdbMoviesJsDefault.default();
        this.myMovies = myMovies;
        this.myMoviesView = new _mymoviesviewJsDefault.default();
        this.parentElement = document.querySelector(parentElementId);
        this.currentSearchedMovies = [];
    }
    init() {
        this.form = document.forms[0];
        this.form.addEventListener('submit', this.searchForMovies.bind(this), false);
    }
    async searchForMovies(event) {
        // prevent the form from being submitted
        event.preventDefault();
        this.parentElement.innerHTML = '<p>This could take a while ...</p>';
        const movieName = this.form.movieName.value;
        const movieList = await this.imdbMovies.searchByMovieTitle(movieName);
        this.currentSearchedMovies = movieList.Search;
        console.log(this.currentSearchedMovies);
        const myMovies = this.myMovies.getMyMovies();
        this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies, this.parentElement, myMovies);
        document.querySelectorAll('.add_movie').forEach((button)=>{
            button.addEventListener('click', this.addMovie.bind(this), false);
        });
    }
    async addMovie(event) {
        const movieID = event.target.parentElement.parentElement.getAttribute('data-id');
        const movieDetails = await this.imdbMovies.getMovieById(movieID);
        await this.myMovies.addMovie(movieDetails);
        const myMovies = this.myMovies.getMyMovies();
        this.myMoviesView.renderSelectMovieList(this.currentSearchedMovies, this.parentElement, myMovies);
        document.querySelectorAll('.add_movie').forEach((button)=>{
            button.addEventListener('click', this.addMovie.bind(this), false);
        });
    // force a draw then show message
    // setTimeout(() => {  alert("Movie added to My Movies!"); }, 50);
    }
}

},{"./imdbMovies.js":"ggpvu","./mymoviesview.js":"jN8Iw","./mymovies.js":"4fcW8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6oitC","aJVUV"], "aJVUV", "parcelRequire4150")

//# sourceMappingURL=index.bd0de041.js.map
