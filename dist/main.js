"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports2.default = equal;
  }
});

// node_modules/@companion-module/base/generated/validate_manifest.js
var require_validate_manifest = __commonJS({
  "node_modules/@companion-module/base/generated/validate_manifest.js"(exports2, module2) {
    "use strict";
    module2.exports = validate10;
    module2.exports.default = validate10;
    var schema11 = { "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "title": "ModuleManifest", "properties": { "$schema": { "type": "string" }, "id": { "type": "string", "description": "Unique identifier for the module" }, "name": { "type": "string", "description": "Name of the module" }, "shortname": { "type": "string" }, "description": { "type": "string", "description": "Description of the module " }, "version": { "type": "string", "description": "Current version of the module" }, "isPrerelease": { "type": "boolean", "description": "Is this a pre-release version" }, "license": { "type": "string", "description": "SPDX identifier for license of the module" }, "repository": { "type": "string", "description": "URL to the source repository" }, "bugs": { "type": "string", "description": "URL to bug tracker" }, "maintainers": { "type": "array", "description": "List of active maintiners", "uniqueItems": true, "items": { "type": "object", "title": "ModuleManifestMaintainer", "properties": { "name": { "type": "string" }, "email": { "type": "string" }, "github": { "type": "string" }, "url": { "type": "string" } }, "required": ["name"], "additionalProperties": false } }, "legacyIds": { "type": "array", "description": "If the module had a different unique identifier previously, then specify it here", "uniqueItems": true, "items": { "type": "string" } }, "runtime": { "type": "object", "title": "ModuleManifestRuntime", "description": "Information on how to execute the module", "properties": { "type": { "type": "string", "description": "Type of the module. Must be: node18 or node22", "enum": ["node18", "node22"] }, "api": { "type": "string", "description": "Which host-api does it use. In the future alternate options will be allowed", "enum": ["nodejs-ipc"] }, "apiVersion": { "type": "string", "description": "The version of the host-api used" }, "entrypoint": { "type": "string", "description": "Entrypoint to pass to the runtime. eg index.js" }, "permissions": { "type": "object", "description": "Permissions required by the module. This is used to inform the user of the permissions required by the module.\nNote: this requires the node22 or newer runtime", "properties": { "worker-threads": { "type": "boolean", "description": "Enable if the module uses worker threads" }, "child-process": { "type": "boolean", "description": "Enable if the module uses child processes" }, "native-addons": { "type": "boolean", "description": "Enable if the module uses native addons" }, "filesystem": { "type": "boolean", "description": "Enable if the module requires read/write access to the filesystem" } }, "additionalProperties": false } }, "required": ["type", "api", "apiVersion", "entrypoint"] }, "manufacturer": { "type": "string" }, "products": { "type": "array", "uniqueItems": true, "items": { "type": "string" }, "minItems": 1 }, "keywords": { "type": "array", "uniqueItems": true, "items": { "type": "string" } }, "bonjourQueries": { "type": "object", "description": "If the device or software for your module supports bonjour announcements, Companion will offer an easy way to watch for these announcements.\nEach query you define must have a matching config field of type 'bonjour-device' with the same name", "patternProperties": { "": { "oneOf": [{ "$ref": "#/definitions/bonjourQuery" }, { "type": "array", "items": { "$ref": "#/definitions/bonjourQuery" } }] } } } }, "required": ["id", "name", "shortname", "description", "version", "license", "repository", "bugs", "maintainers", "legacyIds", "runtime", "manufacturer", "products", "keywords"], "definitions": { "bonjourQuery": { "type": "object", "title": "ModuleBonjourQuery", "description": "", "properties": { "type": { "type": "string" }, "protocol": { "type": "string", "enum": ["tcp", "udp"] }, "port": { "type": "number" }, "txt": { "type": "object", "description": "Match on any txt values returned in the query. This is useful to filter out devices of the same 'type' that are not supported", "patternProperties": { "": { "type": "string" } } } }, "required": ["type", "protocol"] } } };
    var schema12 = { "type": "object", "title": "ModuleBonjourQuery", "description": "", "properties": { "type": { "type": "string" }, "protocol": { "type": "string", "enum": ["tcp", "udp"] }, "port": { "type": "number" }, "txt": { "type": "object", "description": "Match on any txt values returned in the query. This is useful to filter out devices of the same 'type' that are not supported", "patternProperties": { "": { "type": "string" } } } }, "required": ["type", "protocol"] };
    var func0 = require_equal().default;
    var pattern0 = new RegExp("", "u");
    function validate10(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
          let missing0;
          if (data.id === void 0 && (missing0 = "id") || data.name === void 0 && (missing0 = "name") || data.shortname === void 0 && (missing0 = "shortname") || data.description === void 0 && (missing0 = "description") || data.version === void 0 && (missing0 = "version") || data.license === void 0 && (missing0 = "license") || data.repository === void 0 && (missing0 = "repository") || data.bugs === void 0 && (missing0 = "bugs") || data.maintainers === void 0 && (missing0 = "maintainers") || data.legacyIds === void 0 && (missing0 = "legacyIds") || data.runtime === void 0 && (missing0 = "runtime") || data.manufacturer === void 0 && (missing0 = "manufacturer") || data.products === void 0 && (missing0 = "products") || data.keywords === void 0 && (missing0 = "keywords")) {
            validate10.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
            return false;
          } else {
            if (data.$schema !== void 0) {
              const _errs1 = errors;
              if (typeof data.$schema !== "string") {
                validate10.errors = [{ instancePath: instancePath + "/$schema", schemaPath: "#/properties/%24schema/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs1 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.id !== void 0) {
                const _errs3 = errors;
                if (typeof data.id !== "string") {
                  validate10.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs3 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.name !== void 0) {
                  const _errs5 = errors;
                  if (typeof data.name !== "string") {
                    validate10.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs5 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.shortname !== void 0) {
                    const _errs7 = errors;
                    if (typeof data.shortname !== "string") {
                      validate10.errors = [{ instancePath: instancePath + "/shortname", schemaPath: "#/properties/shortname/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs7 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.description !== void 0) {
                      const _errs9 = errors;
                      if (typeof data.description !== "string") {
                        validate10.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid0 = _errs9 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.version !== void 0) {
                        const _errs11 = errors;
                        if (typeof data.version !== "string") {
                          validate10.errors = [{ instancePath: instancePath + "/version", schemaPath: "#/properties/version/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        var valid0 = _errs11 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.isPrerelease !== void 0) {
                          const _errs13 = errors;
                          if (typeof data.isPrerelease !== "boolean") {
                            validate10.errors = [{ instancePath: instancePath + "/isPrerelease", schemaPath: "#/properties/isPrerelease/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                            return false;
                          }
                          var valid0 = _errs13 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.license !== void 0) {
                            const _errs15 = errors;
                            if (typeof data.license !== "string") {
                              validate10.errors = [{ instancePath: instancePath + "/license", schemaPath: "#/properties/license/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid0 = _errs15 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                            if (data.repository !== void 0) {
                              const _errs17 = errors;
                              if (typeof data.repository !== "string") {
                                validate10.errors = [{ instancePath: instancePath + "/repository", schemaPath: "#/properties/repository/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid0 = _errs17 === errors;
                            } else {
                              var valid0 = true;
                            }
                            if (valid0) {
                              if (data.bugs !== void 0) {
                                const _errs19 = errors;
                                if (typeof data.bugs !== "string") {
                                  validate10.errors = [{ instancePath: instancePath + "/bugs", schemaPath: "#/properties/bugs/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid0 = _errs19 === errors;
                              } else {
                                var valid0 = true;
                              }
                              if (valid0) {
                                if (data.maintainers !== void 0) {
                                  let data10 = data.maintainers;
                                  const _errs21 = errors;
                                  if (errors === _errs21) {
                                    if (Array.isArray(data10)) {
                                      var valid1 = true;
                                      const len0 = data10.length;
                                      for (let i0 = 0; i0 < len0; i0++) {
                                        let data11 = data10[i0];
                                        const _errs23 = errors;
                                        if (errors === _errs23) {
                                          if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                                            let missing1;
                                            if (data11.name === void 0 && (missing1 = "name")) {
                                              validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                                              return false;
                                            } else {
                                              const _errs25 = errors;
                                              for (const key0 in data11) {
                                                if (!(key0 === "name" || key0 === "email" || key0 === "github" || key0 === "url")) {
                                                  validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                                                  return false;
                                                  break;
                                                }
                                              }
                                              if (_errs25 === errors) {
                                                if (data11.name !== void 0) {
                                                  const _errs26 = errors;
                                                  if (typeof data11.name !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/name", schemaPath: "#/properties/maintainers/items/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid2 = _errs26 === errors;
                                                } else {
                                                  var valid2 = true;
                                                }
                                                if (valid2) {
                                                  if (data11.email !== void 0) {
                                                    const _errs28 = errors;
                                                    if (typeof data11.email !== "string") {
                                                      validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/email", schemaPath: "#/properties/maintainers/items/properties/email/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                      return false;
                                                    }
                                                    var valid2 = _errs28 === errors;
                                                  } else {
                                                    var valid2 = true;
                                                  }
                                                  if (valid2) {
                                                    if (data11.github !== void 0) {
                                                      const _errs30 = errors;
                                                      if (typeof data11.github !== "string") {
                                                        validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/github", schemaPath: "#/properties/maintainers/items/properties/github/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                        return false;
                                                      }
                                                      var valid2 = _errs30 === errors;
                                                    } else {
                                                      var valid2 = true;
                                                    }
                                                    if (valid2) {
                                                      if (data11.url !== void 0) {
                                                        const _errs32 = errors;
                                                        if (typeof data11.url !== "string") {
                                                          validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/url", schemaPath: "#/properties/maintainers/items/properties/url/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                          return false;
                                                        }
                                                        var valid2 = _errs32 === errors;
                                                      } else {
                                                        var valid2 = true;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                            return false;
                                          }
                                        }
                                        var valid1 = _errs23 === errors;
                                        if (!valid1) {
                                          break;
                                        }
                                      }
                                      if (valid1) {
                                        let i1 = data10.length;
                                        let j0;
                                        if (i1 > 1) {
                                          outer0: for (; i1--; ) {
                                            for (j0 = i1; j0--; ) {
                                              if (func0(data10[i1], data10[j0])) {
                                                validate10.errors = [{ instancePath: instancePath + "/maintainers", schemaPath: "#/properties/maintainers/uniqueItems", keyword: "uniqueItems", params: { i: i1, j: j0 }, message: "must NOT have duplicate items (items ## " + j0 + " and " + i1 + " are identical)" }];
                                                return false;
                                                break outer0;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      validate10.errors = [{ instancePath: instancePath + "/maintainers", schemaPath: "#/properties/maintainers/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                      return false;
                                    }
                                  }
                                  var valid0 = _errs21 === errors;
                                } else {
                                  var valid0 = true;
                                }
                                if (valid0) {
                                  if (data.legacyIds !== void 0) {
                                    let data16 = data.legacyIds;
                                    const _errs34 = errors;
                                    if (errors === _errs34) {
                                      if (Array.isArray(data16)) {
                                        var valid4 = true;
                                        const len1 = data16.length;
                                        for (let i2 = 0; i2 < len1; i2++) {
                                          const _errs36 = errors;
                                          if (typeof data16[i2] !== "string") {
                                            validate10.errors = [{ instancePath: instancePath + "/legacyIds/" + i2, schemaPath: "#/properties/legacyIds/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                          }
                                          var valid4 = _errs36 === errors;
                                          if (!valid4) {
                                            break;
                                          }
                                        }
                                        if (valid4) {
                                          let i3 = data16.length;
                                          let j1;
                                          if (i3 > 1) {
                                            const indices0 = {};
                                            for (; i3--; ) {
                                              let item0 = data16[i3];
                                              if (typeof item0 !== "string") {
                                                continue;
                                              }
                                              if (typeof indices0[item0] == "number") {
                                                j1 = indices0[item0];
                                                validate10.errors = [{ instancePath: instancePath + "/legacyIds", schemaPath: "#/properties/legacyIds/uniqueItems", keyword: "uniqueItems", params: { i: i3, j: j1 }, message: "must NOT have duplicate items (items ## " + j1 + " and " + i3 + " are identical)" }];
                                                return false;
                                                break;
                                              }
                                              indices0[item0] = i3;
                                            }
                                          }
                                        }
                                      } else {
                                        validate10.errors = [{ instancePath: instancePath + "/legacyIds", schemaPath: "#/properties/legacyIds/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                        return false;
                                      }
                                    }
                                    var valid0 = _errs34 === errors;
                                  } else {
                                    var valid0 = true;
                                  }
                                  if (valid0) {
                                    if (data.runtime !== void 0) {
                                      let data18 = data.runtime;
                                      const _errs38 = errors;
                                      if (errors === _errs38) {
                                        if (data18 && typeof data18 == "object" && !Array.isArray(data18)) {
                                          let missing2;
                                          if (data18.type === void 0 && (missing2 = "type") || data18.api === void 0 && (missing2 = "api") || data18.apiVersion === void 0 && (missing2 = "apiVersion") || data18.entrypoint === void 0 && (missing2 = "entrypoint")) {
                                            validate10.errors = [{ instancePath: instancePath + "/runtime", schemaPath: "#/properties/runtime/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                                            return false;
                                          } else {
                                            if (data18.type !== void 0) {
                                              let data19 = data18.type;
                                              const _errs40 = errors;
                                              if (typeof data19 !== "string") {
                                                validate10.errors = [{ instancePath: instancePath + "/runtime/type", schemaPath: "#/properties/runtime/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                return false;
                                              }
                                              if (!(data19 === "node18" || data19 === "node22")) {
                                                validate10.errors = [{ instancePath: instancePath + "/runtime/type", schemaPath: "#/properties/runtime/properties/type/enum", keyword: "enum", params: { allowedValues: schema11.properties.runtime.properties.type.enum }, message: "must be equal to one of the allowed values" }];
                                                return false;
                                              }
                                              var valid6 = _errs40 === errors;
                                            } else {
                                              var valid6 = true;
                                            }
                                            if (valid6) {
                                              if (data18.api !== void 0) {
                                                let data20 = data18.api;
                                                const _errs42 = errors;
                                                if (typeof data20 !== "string") {
                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/api", schemaPath: "#/properties/runtime/properties/api/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                  return false;
                                                }
                                                if (!(data20 === "nodejs-ipc")) {
                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/api", schemaPath: "#/properties/runtime/properties/api/enum", keyword: "enum", params: { allowedValues: schema11.properties.runtime.properties.api.enum }, message: "must be equal to one of the allowed values" }];
                                                  return false;
                                                }
                                                var valid6 = _errs42 === errors;
                                              } else {
                                                var valid6 = true;
                                              }
                                              if (valid6) {
                                                if (data18.apiVersion !== void 0) {
                                                  const _errs44 = errors;
                                                  if (typeof data18.apiVersion !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/runtime/apiVersion", schemaPath: "#/properties/runtime/properties/apiVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid6 = _errs44 === errors;
                                                } else {
                                                  var valid6 = true;
                                                }
                                                if (valid6) {
                                                  if (data18.entrypoint !== void 0) {
                                                    const _errs46 = errors;
                                                    if (typeof data18.entrypoint !== "string") {
                                                      validate10.errors = [{ instancePath: instancePath + "/runtime/entrypoint", schemaPath: "#/properties/runtime/properties/entrypoint/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                      return false;
                                                    }
                                                    var valid6 = _errs46 === errors;
                                                  } else {
                                                    var valid6 = true;
                                                  }
                                                  if (valid6) {
                                                    if (data18.permissions !== void 0) {
                                                      let data23 = data18.permissions;
                                                      const _errs48 = errors;
                                                      if (errors === _errs48) {
                                                        if (data23 && typeof data23 == "object" && !Array.isArray(data23)) {
                                                          const _errs50 = errors;
                                                          for (const key1 in data23) {
                                                            if (!(key1 === "worker-threads" || key1 === "child-process" || key1 === "native-addons" || key1 === "filesystem")) {
                                                              validate10.errors = [{ instancePath: instancePath + "/runtime/permissions", schemaPath: "#/properties/runtime/properties/permissions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                                              return false;
                                                              break;
                                                            }
                                                          }
                                                          if (_errs50 === errors) {
                                                            if (data23["worker-threads"] !== void 0) {
                                                              const _errs51 = errors;
                                                              if (typeof data23["worker-threads"] !== "boolean") {
                                                                validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/worker-threads", schemaPath: "#/properties/runtime/properties/permissions/properties/worker-threads/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                return false;
                                                              }
                                                              var valid7 = _errs51 === errors;
                                                            } else {
                                                              var valid7 = true;
                                                            }
                                                            if (valid7) {
                                                              if (data23["child-process"] !== void 0) {
                                                                const _errs53 = errors;
                                                                if (typeof data23["child-process"] !== "boolean") {
                                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/child-process", schemaPath: "#/properties/runtime/properties/permissions/properties/child-process/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                  return false;
                                                                }
                                                                var valid7 = _errs53 === errors;
                                                              } else {
                                                                var valid7 = true;
                                                              }
                                                              if (valid7) {
                                                                if (data23["native-addons"] !== void 0) {
                                                                  const _errs55 = errors;
                                                                  if (typeof data23["native-addons"] !== "boolean") {
                                                                    validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/native-addons", schemaPath: "#/properties/runtime/properties/permissions/properties/native-addons/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                    return false;
                                                                  }
                                                                  var valid7 = _errs55 === errors;
                                                                } else {
                                                                  var valid7 = true;
                                                                }
                                                                if (valid7) {
                                                                  if (data23.filesystem !== void 0) {
                                                                    const _errs57 = errors;
                                                                    if (typeof data23.filesystem !== "boolean") {
                                                                      validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/filesystem", schemaPath: "#/properties/runtime/properties/permissions/properties/filesystem/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                      return false;
                                                                    }
                                                                    var valid7 = _errs57 === errors;
                                                                  } else {
                                                                    var valid7 = true;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        } else {
                                                          validate10.errors = [{ instancePath: instancePath + "/runtime/permissions", schemaPath: "#/properties/runtime/properties/permissions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                          return false;
                                                        }
                                                      }
                                                      var valid6 = _errs48 === errors;
                                                    } else {
                                                      var valid6 = true;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          validate10.errors = [{ instancePath: instancePath + "/runtime", schemaPath: "#/properties/runtime/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                          return false;
                                        }
                                      }
                                      var valid0 = _errs38 === errors;
                                    } else {
                                      var valid0 = true;
                                    }
                                    if (valid0) {
                                      if (data.manufacturer !== void 0) {
                                        const _errs59 = errors;
                                        if (typeof data.manufacturer !== "string") {
                                          validate10.errors = [{ instancePath: instancePath + "/manufacturer", schemaPath: "#/properties/manufacturer/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                          return false;
                                        }
                                        var valid0 = _errs59 === errors;
                                      } else {
                                        var valid0 = true;
                                      }
                                      if (valid0) {
                                        if (data.products !== void 0) {
                                          let data29 = data.products;
                                          const _errs61 = errors;
                                          if (errors === _errs61) {
                                            if (Array.isArray(data29)) {
                                              if (data29.length < 1) {
                                                validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                                                return false;
                                              } else {
                                                var valid8 = true;
                                                const len2 = data29.length;
                                                for (let i4 = 0; i4 < len2; i4++) {
                                                  const _errs63 = errors;
                                                  if (typeof data29[i4] !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/products/" + i4, schemaPath: "#/properties/products/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid8 = _errs63 === errors;
                                                  if (!valid8) {
                                                    break;
                                                  }
                                                }
                                                if (valid8) {
                                                  let i5 = data29.length;
                                                  let j2;
                                                  if (i5 > 1) {
                                                    const indices1 = {};
                                                    for (; i5--; ) {
                                                      let item1 = data29[i5];
                                                      if (typeof item1 !== "string") {
                                                        continue;
                                                      }
                                                      if (typeof indices1[item1] == "number") {
                                                        j2 = indices1[item1];
                                                        validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/uniqueItems", keyword: "uniqueItems", params: { i: i5, j: j2 }, message: "must NOT have duplicate items (items ## " + j2 + " and " + i5 + " are identical)" }];
                                                        return false;
                                                        break;
                                                      }
                                                      indices1[item1] = i5;
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                              return false;
                                            }
                                          }
                                          var valid0 = _errs61 === errors;
                                        } else {
                                          var valid0 = true;
                                        }
                                        if (valid0) {
                                          if (data.keywords !== void 0) {
                                            let data31 = data.keywords;
                                            const _errs65 = errors;
                                            if (errors === _errs65) {
                                              if (Array.isArray(data31)) {
                                                var valid10 = true;
                                                const len3 = data31.length;
                                                for (let i6 = 0; i6 < len3; i6++) {
                                                  const _errs67 = errors;
                                                  if (typeof data31[i6] !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/keywords/" + i6, schemaPath: "#/properties/keywords/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid10 = _errs67 === errors;
                                                  if (!valid10) {
                                                    break;
                                                  }
                                                }
                                                if (valid10) {
                                                  let i7 = data31.length;
                                                  let j3;
                                                  if (i7 > 1) {
                                                    const indices2 = {};
                                                    for (; i7--; ) {
                                                      let item2 = data31[i7];
                                                      if (typeof item2 !== "string") {
                                                        continue;
                                                      }
                                                      if (typeof indices2[item2] == "number") {
                                                        j3 = indices2[item2];
                                                        validate10.errors = [{ instancePath: instancePath + "/keywords", schemaPath: "#/properties/keywords/uniqueItems", keyword: "uniqueItems", params: { i: i7, j: j3 }, message: "must NOT have duplicate items (items ## " + j3 + " and " + i7 + " are identical)" }];
                                                        return false;
                                                        break;
                                                      }
                                                      indices2[item2] = i7;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate10.errors = [{ instancePath: instancePath + "/keywords", schemaPath: "#/properties/keywords/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                return false;
                                              }
                                            }
                                            var valid0 = _errs65 === errors;
                                          } else {
                                            var valid0 = true;
                                          }
                                          if (valid0) {
                                            if (data.bonjourQueries !== void 0) {
                                              let data33 = data.bonjourQueries;
                                              const _errs69 = errors;
                                              if (errors === _errs69) {
                                                if (data33 && typeof data33 == "object" && !Array.isArray(data33)) {
                                                  var valid12 = true;
                                                  for (const key2 in data33) {
                                                    if (pattern0.test(key2)) {
                                                      let data34 = data33[key2];
                                                      const _errs71 = errors;
                                                      const _errs72 = errors;
                                                      let valid13 = false;
                                                      let passing0 = null;
                                                      const _errs73 = errors;
                                                      const _errs74 = errors;
                                                      if (errors === _errs74) {
                                                        if (data34 && typeof data34 == "object" && !Array.isArray(data34)) {
                                                          let missing3;
                                                          if (data34.type === void 0 && (missing3 = "type") || data34.protocol === void 0 && (missing3 = "protocol")) {
                                                            const err0 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" };
                                                            if (vErrors === null) {
                                                              vErrors = [err0];
                                                            } else {
                                                              vErrors.push(err0);
                                                            }
                                                            errors++;
                                                          } else {
                                                            if (data34.type !== void 0) {
                                                              const _errs76 = errors;
                                                              if (typeof data34.type !== "string") {
                                                                const err1 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/type", schemaPath: "#/definitions/bonjourQuery/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                if (vErrors === null) {
                                                                  vErrors = [err1];
                                                                } else {
                                                                  vErrors.push(err1);
                                                                }
                                                                errors++;
                                                              }
                                                              var valid15 = _errs76 === errors;
                                                            } else {
                                                              var valid15 = true;
                                                            }
                                                            if (valid15) {
                                                              if (data34.protocol !== void 0) {
                                                                let data36 = data34.protocol;
                                                                const _errs78 = errors;
                                                                if (typeof data36 !== "string") {
                                                                  const err2 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err2];
                                                                  } else {
                                                                    vErrors.push(err2);
                                                                  }
                                                                  errors++;
                                                                }
                                                                if (!(data36 === "tcp" || data36 === "udp")) {
                                                                  const err3 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/enum", keyword: "enum", params: { allowedValues: schema12.properties.protocol.enum }, message: "must be equal to one of the allowed values" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err3];
                                                                  } else {
                                                                    vErrors.push(err3);
                                                                  }
                                                                  errors++;
                                                                }
                                                                var valid15 = _errs78 === errors;
                                                              } else {
                                                                var valid15 = true;
                                                              }
                                                              if (valid15) {
                                                                if (data34.port !== void 0) {
                                                                  let data37 = data34.port;
                                                                  const _errs80 = errors;
                                                                  if (!(typeof data37 == "number" && isFinite(data37))) {
                                                                    const err4 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/port", schemaPath: "#/definitions/bonjourQuery/properties/port/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                                    if (vErrors === null) {
                                                                      vErrors = [err4];
                                                                    } else {
                                                                      vErrors.push(err4);
                                                                    }
                                                                    errors++;
                                                                  }
                                                                  var valid15 = _errs80 === errors;
                                                                } else {
                                                                  var valid15 = true;
                                                                }
                                                                if (valid15) {
                                                                  if (data34.txt !== void 0) {
                                                                    let data38 = data34.txt;
                                                                    const _errs82 = errors;
                                                                    if (errors === _errs82) {
                                                                      if (data38 && typeof data38 == "object" && !Array.isArray(data38)) {
                                                                        var valid16 = true;
                                                                        for (const key3 in data38) {
                                                                          if (pattern0.test(key3)) {
                                                                            const _errs84 = errors;
                                                                            if (typeof data38[key3] !== "string") {
                                                                              const err5 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/txt/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/properties/txt/patternProperties//type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                              if (vErrors === null) {
                                                                                vErrors = [err5];
                                                                              } else {
                                                                                vErrors.push(err5);
                                                                              }
                                                                              errors++;
                                                                            }
                                                                            var valid16 = _errs84 === errors;
                                                                            if (!valid16) {
                                                                              break;
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        const err6 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/txt", schemaPath: "#/definitions/bonjourQuery/properties/txt/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err6];
                                                                        } else {
                                                                          vErrors.push(err6);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                    }
                                                                    var valid15 = _errs82 === errors;
                                                                  } else {
                                                                    var valid15 = true;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        } else {
                                                          const err7 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                          if (vErrors === null) {
                                                            vErrors = [err7];
                                                          } else {
                                                            vErrors.push(err7);
                                                          }
                                                          errors++;
                                                        }
                                                      }
                                                      var _valid0 = _errs73 === errors;
                                                      if (_valid0) {
                                                        valid13 = true;
                                                        passing0 = 0;
                                                      }
                                                      const _errs86 = errors;
                                                      if (errors === _errs86) {
                                                        if (Array.isArray(data34)) {
                                                          var valid17 = true;
                                                          const len4 = data34.length;
                                                          for (let i8 = 0; i8 < len4; i8++) {
                                                            let data40 = data34[i8];
                                                            const _errs88 = errors;
                                                            const _errs89 = errors;
                                                            if (errors === _errs89) {
                                                              if (data40 && typeof data40 == "object" && !Array.isArray(data40)) {
                                                                let missing4;
                                                                if (data40.type === void 0 && (missing4 = "type") || data40.protocol === void 0 && (missing4 = "protocol")) {
                                                                  const err8 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8, schemaPath: "#/definitions/bonjourQuery/required", keyword: "required", params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err8];
                                                                  } else {
                                                                    vErrors.push(err8);
                                                                  }
                                                                  errors++;
                                                                } else {
                                                                  if (data40.type !== void 0) {
                                                                    const _errs91 = errors;
                                                                    if (typeof data40.type !== "string") {
                                                                      const err9 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/type", schemaPath: "#/definitions/bonjourQuery/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                      if (vErrors === null) {
                                                                        vErrors = [err9];
                                                                      } else {
                                                                        vErrors.push(err9);
                                                                      }
                                                                      errors++;
                                                                    }
                                                                    var valid19 = _errs91 === errors;
                                                                  } else {
                                                                    var valid19 = true;
                                                                  }
                                                                  if (valid19) {
                                                                    if (data40.protocol !== void 0) {
                                                                      let data42 = data40.protocol;
                                                                      const _errs93 = errors;
                                                                      if (typeof data42 !== "string") {
                                                                        const err10 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err10];
                                                                        } else {
                                                                          vErrors.push(err10);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                      if (!(data42 === "tcp" || data42 === "udp")) {
                                                                        const err11 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/enum", keyword: "enum", params: { allowedValues: schema12.properties.protocol.enum }, message: "must be equal to one of the allowed values" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err11];
                                                                        } else {
                                                                          vErrors.push(err11);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                      var valid19 = _errs93 === errors;
                                                                    } else {
                                                                      var valid19 = true;
                                                                    }
                                                                    if (valid19) {
                                                                      if (data40.port !== void 0) {
                                                                        let data43 = data40.port;
                                                                        const _errs95 = errors;
                                                                        if (!(typeof data43 == "number" && isFinite(data43))) {
                                                                          const err12 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/port", schemaPath: "#/definitions/bonjourQuery/properties/port/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                                          if (vErrors === null) {
                                                                            vErrors = [err12];
                                                                          } else {
                                                                            vErrors.push(err12);
                                                                          }
                                                                          errors++;
                                                                        }
                                                                        var valid19 = _errs95 === errors;
                                                                      } else {
                                                                        var valid19 = true;
                                                                      }
                                                                      if (valid19) {
                                                                        if (data40.txt !== void 0) {
                                                                          let data44 = data40.txt;
                                                                          const _errs97 = errors;
                                                                          if (errors === _errs97) {
                                                                            if (data44 && typeof data44 == "object" && !Array.isArray(data44)) {
                                                                              var valid20 = true;
                                                                              for (const key4 in data44) {
                                                                                if (pattern0.test(key4)) {
                                                                                  const _errs99 = errors;
                                                                                  if (typeof data44[key4] !== "string") {
                                                                                    const err13 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/txt/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/properties/txt/patternProperties//type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                    if (vErrors === null) {
                                                                                      vErrors = [err13];
                                                                                    } else {
                                                                                      vErrors.push(err13);
                                                                                    }
                                                                                    errors++;
                                                                                  }
                                                                                  var valid20 = _errs99 === errors;
                                                                                  if (!valid20) {
                                                                                    break;
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              const err14 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/txt", schemaPath: "#/definitions/bonjourQuery/properties/txt/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                              if (vErrors === null) {
                                                                                vErrors = [err14];
                                                                              } else {
                                                                                vErrors.push(err14);
                                                                              }
                                                                              errors++;
                                                                            }
                                                                          }
                                                                          var valid19 = _errs97 === errors;
                                                                        } else {
                                                                          var valid19 = true;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                const err15 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8, schemaPath: "#/definitions/bonjourQuery/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                if (vErrors === null) {
                                                                  vErrors = [err15];
                                                                } else {
                                                                  vErrors.push(err15);
                                                                }
                                                                errors++;
                                                              }
                                                            }
                                                            var valid17 = _errs88 === errors;
                                                            if (!valid17) {
                                                              break;
                                                            }
                                                          }
                                                        } else {
                                                          const err16 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/bonjourQueries/patternProperties//oneOf/1/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                          if (vErrors === null) {
                                                            vErrors = [err16];
                                                          } else {
                                                            vErrors.push(err16);
                                                          }
                                                          errors++;
                                                        }
                                                      }
                                                      var _valid0 = _errs86 === errors;
                                                      if (_valid0 && valid13) {
                                                        valid13 = false;
                                                        passing0 = [passing0, 1];
                                                      } else {
                                                        if (_valid0) {
                                                          valid13 = true;
                                                          passing0 = 1;
                                                        }
                                                      }
                                                      if (!valid13) {
                                                        const err17 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/bonjourQueries/patternProperties//oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                                        if (vErrors === null) {
                                                          vErrors = [err17];
                                                        } else {
                                                          vErrors.push(err17);
                                                        }
                                                        errors++;
                                                        validate10.errors = vErrors;
                                                        return false;
                                                      } else {
                                                        errors = _errs72;
                                                        if (vErrors !== null) {
                                                          if (_errs72) {
                                                            vErrors.length = _errs72;
                                                          } else {
                                                            vErrors = null;
                                                          }
                                                        }
                                                      }
                                                      var valid12 = _errs71 === errors;
                                                      if (!valid12) {
                                                        break;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  validate10.errors = [{ instancePath: instancePath + "/bonjourQueries", schemaPath: "#/properties/bonjourQueries/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                  return false;
                                                }
                                              }
                                              var valid0 = _errs69 === errors;
                                            } else {
                                              var valid0 = true;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          validate10.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
          return false;
        }
      }
      validate10.errors = vErrors;
      return errors === 0;
    }
  }
});

// node_modules/@companion-module/base/dist/manifest.js
var require_manifest = __commonJS({
  "node_modules/@companion-module/base/dist/manifest.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateManifest = validateManifest;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var validate_manifest_js_1 = tslib_1.__importDefault(require_validate_manifest());
    function validateManifest(manifest, looseChecks) {
      if (!looseChecks) {
        const manifestStr = JSON.stringify(manifest);
        if (manifestStr.includes("companion-module-your-module-name"))
          throw new Error(`Manifest incorrectly references template module 'companion-module-your-module-name'`);
        if (manifestStr.includes("module-shortname"))
          throw new Error(`Manifest incorrectly references template module 'module-shortname'`);
        if (manifestStr.includes("A short one line description of your module"))
          throw new Error(`Manifest incorrectly references template module 'A short one line description of your module'`);
        if (manifestStr.includes("Your name"))
          throw new Error(`Manifest incorrectly references template module 'Your name'`);
        if (manifestStr.includes("Your email"))
          throw new Error(`Manifest incorrectly references template module 'Your email'`);
        if (manifestStr.includes("Your company"))
          throw new Error(`Manifest incorrectly references template module 'Your company'`);
        if (manifestStr.includes("Your product"))
          throw new Error(`Manifest incorrectly references template module 'Your product'`);
      }
      if (manifest.legacyIds.includes(manifest.id)) {
        throw new Error(`Manifest contains itself '${manifest.id}' in legacyIds`);
      }
      if (!(0, validate_manifest_js_1.default)(manifest)) {
        const errors = validate_manifest_js_1.default.errors;
        if (!errors)
          throw new Error(`Manifest failed validation with unknown reason`);
        throw new Error(`Manifest validation failed: ${JSON.stringify(errors)}`);
      }
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/action.js
var require_action = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/action.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/colord/index.js
var require_colord = __commonJS({
  "node_modules/colord/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
    var t = function(r2) {
      return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
    };
    var n = function(r2, t2, n2) {
      return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
    };
    var e = function(r2, t2, n2) {
      return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
    };
    var u = function(r2) {
      return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
    };
    var o = function(r2) {
      return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
    };
    var a = function(r2) {
      return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
    };
    var s = /^#([0-9a-f]{3,8})$/i;
    var i = function(r2) {
      var t2 = r2.toString(16);
      return t2.length < 2 ? "0" + t2 : t2;
    };
    var h = function(r2) {
      var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, o2 = Math.max(t2, n2, e2), a2 = o2 - Math.min(t2, n2, e2), s2 = a2 ? o2 === t2 ? (n2 - e2) / a2 : o2 === n2 ? 2 + (e2 - t2) / a2 : 4 + (t2 - n2) / a2 : 0;
      return { h: 60 * (s2 < 0 ? s2 + 6 : s2), s: o2 ? a2 / o2 * 100 : 0, v: o2 / 255 * 100, a: u2 };
    };
    var b = function(r2) {
      var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
      t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
      var o2 = Math.floor(t2), a2 = e2 * (1 - n2), s2 = e2 * (1 - (t2 - o2) * n2), i2 = e2 * (1 - (1 - t2 + o2) * n2), h2 = o2 % 6;
      return { r: 255 * [e2, s2, a2, a2, i2, e2][h2], g: 255 * [i2, e2, e2, s2, a2, a2][h2], b: 255 * [a2, a2, i2, e2, e2, s2][h2], a: u2 };
    };
    var d = function(r2) {
      return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
    };
    var g = function(r2) {
      return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
    };
    var f = function(r2) {
      return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
      var t2, n2, e2;
    };
    var p = function(r2) {
      return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
      var t2, n2, e2, u2;
    };
    var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var c = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var y = { string: [[function(r2) {
      var t2 = s.exec(r2);
      return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
    }, "hex"], [function(r2) {
      var t2 = v.exec(r2) || m.exec(r2);
      return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : o({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
    }, "rgb"], [function(t2) {
      var n2 = l.exec(t2) || c.exec(t2);
      if (!n2) return null;
      var e2, u2, o2 = d({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
      return f(o2);
    }, "hsl"]], object: [[function(r2) {
      var n2 = r2.r, e2 = r2.g, u2 = r2.b, a2 = r2.a, s2 = void 0 === a2 ? 1 : a2;
      return t(n2) && t(e2) && t(u2) ? o({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(s2) }) : null;
    }, "rgb"], [function(r2) {
      var n2 = r2.h, e2 = r2.s, u2 = r2.l, o2 = r2.a, a2 = void 0 === o2 ? 1 : o2;
      if (!t(n2) || !t(e2) || !t(u2)) return null;
      var s2 = d({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(a2) });
      return f(s2);
    }, "hsl"], [function(r2) {
      var n2 = r2.h, o2 = r2.s, a2 = r2.v, s2 = r2.a, i2 = void 0 === s2 ? 1 : s2;
      if (!t(n2) || !t(o2) || !t(a2)) return null;
      var h2 = (function(r3) {
        return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
      })({ h: Number(n2), s: Number(o2), v: Number(a2), a: Number(i2) });
      return b(h2);
    }, "hsv"]] };
    var N = function(r2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var e2 = t2[n2][0](r2);
        if (e2) return [e2, t2[n2][1]];
      }
      return [null, void 0];
    };
    var x = function(r2) {
      return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
    };
    var M = function(r2, t2) {
      var n2 = p(r2);
      return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
    };
    var I = function(r2) {
      return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
    };
    var H = function(r2, t2) {
      var n2 = p(r2);
      return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
    };
    var $ = (function() {
      function r2(r3) {
        this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
      }
      return r2.prototype.isValid = function() {
        return null !== this.parsed;
      }, r2.prototype.brightness = function() {
        return n(I(this.rgba), 2);
      }, r2.prototype.isDark = function() {
        return I(this.rgba) < 0.5;
      }, r2.prototype.isLight = function() {
        return I(this.rgba) >= 0.5;
      }, r2.prototype.toHex = function() {
        return r3 = a(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, s2 = (o2 = r3.a) < 1 ? i(n(255 * o2)) : "", "#" + i(t2) + i(e2) + i(u2) + s2;
        var r3, t2, e2, u2, o2, s2;
      }, r2.prototype.toRgb = function() {
        return a(this.rgba);
      }, r2.prototype.toRgbString = function() {
        return r3 = a(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
        var r3, t2, n2, e2, u2;
      }, r2.prototype.toHsl = function() {
        return g(p(this.rgba));
      }, r2.prototype.toHslString = function() {
        return r3 = g(p(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
        var r3, t2, n2, e2, u2;
      }, r2.prototype.toHsv = function() {
        return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
        var r3;
      }, r2.prototype.invert = function() {
        return j({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
        var r3;
      }, r2.prototype.saturate = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(M(this.rgba, r3));
      }, r2.prototype.desaturate = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(M(this.rgba, -r3));
      }, r2.prototype.grayscale = function() {
        return j(M(this.rgba, -1));
      }, r2.prototype.lighten = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(H(this.rgba, r3));
      }, r2.prototype.darken = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(H(this.rgba, -r3));
      }, r2.prototype.rotate = function(r3) {
        return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
      }, r2.prototype.alpha = function(r3) {
        return "number" == typeof r3 ? j({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
        var t2;
      }, r2.prototype.hue = function(r3) {
        var t2 = p(this.rgba);
        return "number" == typeof r3 ? j({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
      }, r2.prototype.isEqual = function(r3) {
        return this.toHex() === j(r3).toHex();
      }, r2;
    })();
    var j = function(r2) {
      return r2 instanceof $ ? r2 : new $(r2);
    };
    var w = [];
    exports2.Colord = $, exports2.colord = j, exports2.extend = function(r2) {
      r2.forEach(function(r3) {
        w.indexOf(r3) < 0 && (r3($, y), w.push(r3));
      });
    }, exports2.getFormat = function(r2) {
      return x(r2)[1];
    }, exports2.random = function() {
      return new $({ r: 255 * Math.random(), g: 255 * Math.random(), b: 255 * Math.random() });
    };
  }
});

// node_modules/@companion-module/base/dist/util.js
var require_util = __commonJS({
  "node_modules/@companion-module/base/dist/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.literal = literal;
    exports2.assertNever = assertNever;
    exports2.combineRgb = combineRgb3;
    exports2.splitRgb = splitRgb;
    exports2.splitHsl = splitHsl;
    exports2.splitHsv = splitHsv;
    exports2.splitHex = splitHex;
    exports2.parseEscapeCharacters = parseEscapeCharacters;
    exports2.substituteEscapeCharacters = substituteEscapeCharacters;
    var colord_1 = require_colord();
    function literal(v) {
      return v;
    }
    function assertNever(_val) {
    }
    function combineRgb3(r, g, b, a) {
      let colorNumber = (r & 255) << 16 | (g & 255) << 8 | b & 255;
      if (a && a >= 0 && a < 1) {
        colorNumber += 16777216 * Math.round(255 * (1 - a));
      }
      return colorNumber;
    }
    function splitRgb(color) {
      if (typeof color === "number") {
        if (color > 16777215) {
          return {
            r: color >> 16 & 255,
            g: color >> 8 & 255,
            b: color & 255,
            a: (255 - (color >> 24 & 255)) / 255
          };
        } else {
          return {
            r: color >> 16 & 255,
            g: color >> 8 & 255,
            b: color & 255,
            a: 1
          };
        }
      } else if (typeof color === "string" && (0, colord_1.colord)(color).isValid()) {
        const rgb = (0, colord_1.colord)(color).toRgb();
        return {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          a: rgb.a
        };
      } else {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        };
      }
    }
    function splitHsl(color) {
      const rgb = splitRgb(color);
      const hsl = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHsl();
      return hsl;
    }
    function splitHsv(color) {
      const rgb = splitRgb(color);
      const hsv = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHsv();
      return hsv;
    }
    function splitHex(color) {
      const rgb = splitRgb(color);
      const hex = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHex();
      return hex;
    }
    function parseEscapeCharacters(msg) {
      const message = msg.replaceAll("\\n", "\n").replaceAll("\\r", "\r").replaceAll("\\t", "	").replaceAll("\\f", "\f").replaceAll("\\v", "\v").replaceAll("\\b", "\b").replaceAll("\\\\", "\\").replaceAll("\\x00", "\0").replaceAll("\\x01", "").replaceAll("\\x02", "").replaceAll("\\x03", "");
      return message;
    }
    function substituteEscapeCharacters(msg) {
      const message = msg.replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("	", "\\t").replaceAll("\f", "\\f").replaceAll("\v", "\\v").replaceAll("\b", "\\b").replaceAll("\\", "\\\\").replaceAll("\0", "\\x00").replaceAll("", "\\x01").replaceAll("", "\\x02").replaceAll("", "\\x03");
      return message;
    }
  }
});

// node_modules/p-queue/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/p-queue/node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter2;
    }
  }
});

// node_modules/p-finally/index.js
var require_p_finally = __commonJS({
  "node_modules/p-finally/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (promise, onFinally) => {
      onFinally = onFinally || (() => {
      });
      return promise.then(
        (val) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => val),
        (err) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => {
          throw err;
        })
      );
    };
  }
});

// node_modules/p-queue/node_modules/p-timeout/index.js
var require_p_timeout = __commonJS({
  "node_modules/p-queue/node_modules/p-timeout/index.js"(exports2, module2) {
    "use strict";
    var pFinally = require_p_finally();
    var TimeoutError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "TimeoutError";
      }
    };
    var pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
      if (typeof milliseconds !== "number" || milliseconds < 0) {
        throw new TypeError("Expected `milliseconds` to be a positive number");
      }
      if (milliseconds === Infinity) {
        resolve(promise);
        return;
      }
      const timer = setTimeout(() => {
        if (typeof fallback === "function") {
          try {
            resolve(fallback());
          } catch (error) {
            reject(error);
          }
          return;
        }
        const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
        const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
        if (typeof promise.cancel === "function") {
          promise.cancel();
        }
        reject(timeoutError);
      }, milliseconds);
      pFinally(
        // eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject),
        () => {
          clearTimeout(timer);
        }
      );
    });
    module2.exports = pTimeout;
    module2.exports.default = pTimeout;
    module2.exports.TimeoutError = TimeoutError;
  }
});

// node_modules/p-queue/dist/lower-bound.js
var require_lower_bound = __commonJS({
  "node_modules/p-queue/dist/lower-bound.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function lowerBound(array, value, comparator) {
      let first = 0;
      let count = array.length;
      while (count > 0) {
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
          first = ++it;
          count -= step + 1;
        } else {
          count = step;
        }
      }
      return first;
    }
    exports2.default = lowerBound;
  }
});

// node_modules/p-queue/dist/priority-queue.js
var require_priority_queue = __commonJS({
  "node_modules/p-queue/dist/priority-queue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lower_bound_1 = require_lower_bound();
    var PriorityQueue = class {
      constructor() {
        this._queue = [];
      }
      enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
          priority: options.priority,
          run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
          this._queue.push(element);
          return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
      }
      dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
      }
      filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
      }
      get size() {
        return this._queue.length;
      }
    };
    exports2.default = PriorityQueue;
  }
});

// node_modules/p-queue/dist/index.js
var require_dist = __commonJS({
  "node_modules/p-queue/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var EventEmitter2 = require_eventemitter3();
    var p_timeout_1 = require_p_timeout();
    var priority_queue_1 = require_priority_queue();
    var empty = () => {
    };
    var timeoutError = new p_timeout_1.TimeoutError();
    var PQueue = class extends EventEmitter2 {
      constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
          throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
          throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
      }
      get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
      }
      get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
      }
      _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit("next");
      }
      _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
          this._resolveIdle();
          this._resolveIdle = empty;
          this.emit("idle");
        }
      }
      _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = void 0;
      }
      _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === void 0) {
          const delay = this._intervalEnd - now;
          if (delay < 0) {
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          } else {
            if (this._timeoutId === void 0) {
              this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, delay);
            }
            return true;
          }
        }
        return false;
      }
      _tryToStartAnother() {
        if (this._queue.size === 0) {
          if (this._intervalId) {
            clearInterval(this._intervalId);
          }
          this._intervalId = void 0;
          this._resolvePromises();
          return false;
        }
        if (!this._isPaused) {
          const canInitializeInterval = !this._isIntervalPaused();
          if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
            const job = this._queue.dequeue();
            if (!job) {
              return false;
            }
            this.emit("active");
            job();
            if (canInitializeInterval) {
              this._initializeIntervalIfNeeded();
            }
            return true;
          }
        }
        return false;
      }
      _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== void 0) {
          return;
        }
        this._intervalId = setInterval(() => {
          this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
      }
      _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
          clearInterval(this._intervalId);
          this._intervalId = void 0;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
      }
      /**
      Executes all queued functions until it reaches the limit.
      */
      _processQueue() {
        while (this._tryToStartAnother()) {
        }
      }
      get concurrency() {
        return this._concurrency;
      }
      set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
      }
      /**
      Adds a sync or async task to the queue. Always returns a promise.
      */
      async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
          const run = async () => {
            this._pendingCount++;
            this._intervalCount++;
            try {
              const operation = this._timeout === void 0 && options.timeout === void 0 ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === void 0 ? this._timeout : options.timeout, () => {
                if (options.throwOnTimeout === void 0 ? this._throwOnTimeout : options.throwOnTimeout) {
                  reject(timeoutError);
                }
                return void 0;
              });
              resolve(await operation);
            } catch (error) {
              reject(error);
            }
            this._next();
          };
          this._queue.enqueue(run, options);
          this._tryToStartAnother();
          this.emit("add");
        });
      }
      /**
          Same as `.add()`, but accepts an array of sync or async functions.
      
          @returns A promise that resolves when all functions are resolved.
          */
      async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
      }
      /**
      Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
      */
      start() {
        if (!this._isPaused) {
          return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
      }
      /**
      Put queue execution on hold.
      */
      pause() {
        this._isPaused = true;
      }
      /**
      Clear the queue.
      */
      clear() {
        this._queue = new this._queueClass();
      }
      /**
          Can be called multiple times. Useful if you for example add additional items at a later time.
      
          @returns A promise that settles when the queue becomes empty.
          */
      async onEmpty() {
        if (this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveEmpty;
          this._resolveEmpty = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
          The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
      
          @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
          */
      async onIdle() {
        if (this._pendingCount === 0 && this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveIdle;
          this._resolveIdle = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
      Size of the queue.
      */
      get size() {
        return this._queue.size;
      }
      /**
          Size of the queue, filtered by the given options.
      
          For example, this can be used to find the number of items remaining in the queue with a specific priority level.
          */
      sizeBy(options) {
        return this._queue.filter(options).length;
      }
      /**
      Number of pending promises.
      */
      get pending() {
        return this._pendingCount;
      }
      /**
      Whether the queue is currently paused.
      */
      get isPaused() {
        return this._isPaused;
      }
      get timeout() {
        return this._timeout;
      }
      /**
      Set the timeout for future operations.
      */
      set timeout(milliseconds) {
        this._timeout = milliseconds;
      }
    };
    exports2.default = PQueue;
  }
});

// node_modules/@companion-module/base/dist/internal/base.js
var require_base = __commonJS({
  "node_modules/@companion-module/base/dist/internal/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serializeIsVisibleFn = serializeIsVisibleFn;
    exports2.isInstanceBaseProps = isInstanceBaseProps;
    function serializeIsVisibleFn(options) {
      return (options ?? []).map((option) => {
        if ("isVisibleExpression" in option && typeof option.isVisibleExpression === "string") {
          return {
            ...option,
            isVisibleFnType: "expression",
            isVisibleFn: option.isVisibleExpression,
            isVisible: void 0,
            isVisibleExpression: void 0
          };
        } else if ("isVisible" in option && typeof option.isVisible === "function") {
          return {
            ...option,
            isVisibleFn: option.isVisible.toString(),
            isVisibleFnType: "function",
            isVisible: void 0,
            isVisibleExpression: void 0
          };
        }
        return {
          ...option,
          isVisible: void 0,
          isVisibleFn: void 0,
          isVisibleFnType: void 0,
          isVisibleExpression: void 0
        };
      });
    }
    function isInstanceBaseProps(obj) {
      const obj2 = obj;
      return typeof obj2 === "object" && typeof obj2.id === "string" && obj2._isInstanceBaseProps === true;
    }
  }
});

// node_modules/@companion-module/base/dist/internal/upgrade.js
var require_upgrade = __commonJS({
  "node_modules/@companion-module/base/dist/internal/upgrade.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runThroughUpgradeScripts = runThroughUpgradeScripts;
    var util_js_1 = require_util();
    function clone(val) {
      return JSON.parse(JSON.stringify(val));
    }
    function runThroughUpgradeScripts(allActionsArray, allFeedbacksArray, defaultUpgradeIndex, upgradeScripts, config, secrets, skipConfigAndSecretsUpgrade) {
      const pendingUpgradesGrouped = /* @__PURE__ */ new Map();
      const getPendingUpgradeGroup = (i) => {
        let v = pendingUpgradesGrouped.get(i);
        if (!v) {
          v = { actions: [], feedbacks: [], config: false };
          pendingUpgradesGrouped.set(i, v);
        }
        return v;
      };
      for (const action of allActionsArray) {
        const upgradeIndex = action?.upgradeIndex ?? defaultUpgradeIndex;
        if (action && typeof upgradeIndex === "number") {
          const pending = getPendingUpgradeGroup(upgradeIndex);
          pending.actions.push(action.id);
        }
      }
      for (const feedback of allFeedbacksArray) {
        const upgradeIndex = feedback?.upgradeIndex ?? defaultUpgradeIndex;
        if (feedback && typeof upgradeIndex === "number") {
          const pending = getPendingUpgradeGroup(upgradeIndex);
          pending.feedbacks.push(feedback.id);
        }
      }
      if (!skipConfigAndSecretsUpgrade) {
        for (let i = defaultUpgradeIndex ?? -1; i < upgradeScripts.length; i++) {
          getPendingUpgradeGroup(i).config = true;
        }
      }
      const allActions = Object.fromEntries(allActionsArray.map((a) => [a.id, a]));
      const allFeedbacks = Object.fromEntries(allFeedbacksArray.map((a) => [a.id, a]));
      const updatedFeedbacks = {};
      const updatedActions = {};
      let updatedConfig;
      let updatedSecrets;
      if (pendingUpgradesGrouped.size > 0) {
        const pendingUpgradeGroups = Array.from(pendingUpgradesGrouped.keys()).sort();
        const firstUpgradeGroup = Math.min(...pendingUpgradeGroups, defaultUpgradeIndex ?? -1) + 1;
        const actionsIdsToUpgrade = [];
        const feedbackIdsToUpgrade = [];
        const targetCount = upgradeScripts.length;
        for (let i = firstUpgradeGroup; i < targetCount; i++) {
          const group = pendingUpgradesGrouped.get(i - 1);
          if (group) {
            actionsIdsToUpgrade.push(...group.actions);
            feedbackIdsToUpgrade.push(...group.feedbacks);
          }
          const upgradeConfigAndSecrets = !!group?.config;
          if (!upgradeConfigAndSecrets && actionsIdsToUpgrade.length === 0 && feedbackIdsToUpgrade.length === 0)
            continue;
          const inputConfig = updatedConfig ?? config;
          const inputSecrets = updatedSecrets ?? secrets;
          const fcn = upgradeScripts[i];
          const res = fcn({
            // Pass a clone to avoid mutations
            currentConfig: clone(inputConfig)
          }, {
            config: upgradeConfigAndSecrets ? inputConfig : null,
            secrets: upgradeConfigAndSecrets ? inputSecrets : null,
            // Only pass the actions & feedbacks which need upgrading from this version
            actions: actionsIdsToUpgrade.map((id) => {
              const inst = allActions[id];
              if (inst) {
                return (0, util_js_1.literal)({
                  id: inst.id,
                  controlId: inst.controlId,
                  actionId: inst.actionId,
                  options: inst.options !== void 0 ? clone(inst.options) : {}
                });
              }
            }).filter((v) => !!v),
            feedbacks: feedbackIdsToUpgrade.map((id) => {
              const inst = allFeedbacks[id];
              if (inst) {
                return (0, util_js_1.literal)({
                  id: inst.id,
                  controlId: inst.controlId,
                  feedbackId: inst.feedbackId,
                  options: inst.options !== void 0 ? clone(inst.options) : {},
                  // TODO - style?
                  isInverted: inst.isInverted
                });
              }
            }).filter((v) => !!v)
          });
          if (upgradeConfigAndSecrets && res.updatedConfig)
            updatedConfig = res.updatedConfig;
          if (upgradeConfigAndSecrets && res.updatedSecrets)
            updatedSecrets = res.updatedSecrets;
          for (const action of res.updatedActions) {
            if (action) {
              const instance = allActions[action.id];
              if (instance) {
                instance.actionId = action.actionId;
                instance.options = action.options;
                instance.upgradeIndex = i;
                updatedActions[action.id] = instance;
              }
            }
          }
          for (const feedback of res.updatedFeedbacks) {
            if (feedback) {
              const instance = allFeedbacks[feedback.id];
              if (instance) {
                instance.feedbackId = feedback.feedbackId;
                instance.options = feedback.options;
                instance.upgradeIndex = i;
                updatedFeedbacks[feedback.id] = {
                  ...instance,
                  style: updatedFeedbacks[feedback.id]?.style ?? feedback.style,
                  isInverted: feedback.isInverted ?? false
                };
              }
            }
          }
        }
        for (const [id, action] of Object.entries(allActions)) {
          if (!updatedActions[id] && typeof action?.upgradeIndex === "number") {
            updatedActions[id] = action;
          }
        }
        for (const [id, feedback] of Object.entries(allFeedbacks)) {
          if (!updatedFeedbacks[id] && typeof feedback?.upgradeIndex === "number") {
            updatedFeedbacks[id] = feedback;
          }
        }
      }
      return {
        updatedActions: Object.values(updatedActions),
        updatedFeedbacks: Object.values(updatedFeedbacks),
        updatedConfig,
        updatedSecrets,
        latestUpgradeIndex: upgradeScripts.length - 1
      };
    }
  }
});

// node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/mimic-fn/index.js"(exports2, module2) {
    "use strict";
    var copyProperty = (to, from, property, ignoreNonConfigurable) => {
      if (property === "length" || property === "prototype") {
        return;
      }
      if (property === "arguments" || property === "caller") {
        return;
      }
      const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
      const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
      if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
      }
      Object.defineProperty(to, property, fromDescriptor);
    };
    var canCopyProperty = function(toDescriptor, fromDescriptor) {
      return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
    };
    var changePrototype = (to, from) => {
      const fromPrototype = Object.getPrototypeOf(from);
      if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
      }
      Object.setPrototypeOf(to, fromPrototype);
    };
    var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
    var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
    var changeToString = (to, from, name) => {
      const withName = name === "" ? "" : `with ${name.trim()}() `;
      const newToString = wrappedToString.bind(null, withName, from.toString());
      Object.defineProperty(newToString, "name", toStringName);
      Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
    };
    var mimicFn = (to, from, { ignoreNonConfigurable = false } = {}) => {
      const { name } = to;
      for (const property of Reflect.ownKeys(from)) {
        copyProperty(to, from, property, ignoreNonConfigurable);
      }
      changePrototype(to, from);
      changeToString(to, from, name);
      return to;
    };
    module2.exports = mimicFn;
  }
});

// node_modules/@companion-module/base/lib/debounce-fn/index.js
var require_debounce_fn = __commonJS({
  "node_modules/@companion-module/base/lib/debounce-fn/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = require_mimic_fn();
    module2.exports = (inputFunction, options = {}) => {
      if (typeof inputFunction !== "function") {
        throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
      }
      const { wait = 0, maxWait = 0, before = false, after = true } = options;
      if (!before && !after) {
        throw new Error("Both `before` and `after` are false, function wouldn't be called.");
      }
      let timeout;
      let maxTimeout;
      let result;
      const debouncedFunction = function(...arguments_) {
        const context = this;
        const later = () => {
          timeout = void 0;
          if (maxTimeout) {
            clearTimeout(maxTimeout);
            maxTimeout = void 0;
          }
          if (after) {
            result = inputFunction.apply(context, arguments_);
          }
        };
        const maxLater = () => {
          maxTimeout = void 0;
          if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
          }
          result = inputFunction.apply(context, arguments_);
        };
        const shouldCallNow = before && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (maxWait > 0 && !maxTimeout && after) {
          maxTimeout = setTimeout(maxLater, maxWait);
        }
        if (shouldCallNow) {
          result = inputFunction.apply(context, arguments_);
        }
        return result;
      };
      mimicFn(debouncedFunction, inputFunction);
      debouncedFunction.cancel = () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = void 0;
        }
        if (maxTimeout) {
          clearTimeout(maxTimeout);
          maxTimeout = void 0;
        }
      };
      return debouncedFunction;
    };
  }
});

// node_modules/@companion-module/base/dist/internal/feedback.js
var require_feedback = __commonJS({
  "node_modules/@companion-module/base/dist/internal/feedback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FeedbackManager = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var base_js_1 = require_base();
    var index_js_1 = tslib_1.__importDefault(require_debounce_fn());
    var util_js_1 = require_util();
    function convertFeedbackInstanceToEvent(type, feedback) {
      return {
        type,
        id: feedback.id,
        feedbackId: feedback.feedbackId,
        controlId: feedback.controlId,
        options: feedback.options
      };
    }
    var FeedbackManager = class {
      #parseVariablesInString;
      #updateFeedbackValues;
      #setFeedbackDefinitions;
      #log;
      #feedbackDefinitions = /* @__PURE__ */ new Map();
      #feedbackInstances = /* @__PURE__ */ new Map();
      // Feedback values waiting to be sent
      #pendingFeedbackValues = /* @__PURE__ */ new Map();
      // Feedbacks currently being checked
      #feedbacksBeingChecked = /* @__PURE__ */ new Map();
      // while in a context which provides an alternate parseVariablesInString, we should log when the original is called
      #parseVariablesContext;
      get parseVariablesContext() {
        return this.#parseVariablesContext;
      }
      constructor(parseVariablesInString, updateFeedbackValues, setFeedbackDefinitions, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#updateFeedbackValues = updateFeedbackValues;
        this.#setFeedbackDefinitions = setFeedbackDefinitions;
        this.#log = log;
      }
      getDefinitionIds() {
        return Array.from(this.#feedbackDefinitions.keys());
      }
      getInstanceIds() {
        return Array.from(this.#feedbackInstances.keys());
      }
      handleUpdateFeedbacks(feedbacks) {
        for (const [id, feedback] of Object.entries(feedbacks)) {
          const existing = this.#feedbackInstances.get(id);
          if (existing && !feedback) {
            const definition = this.#feedbackDefinitions.get(existing.feedbackId);
            if (definition?.unsubscribe) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                }
              };
              Promise.resolve(definition.unsubscribe(convertFeedbackInstanceToEvent(definition.type, existing), context)).catch((e) => {
                this.#log("error", `Feedback unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
          if (!feedback || feedback.disabled) {
            this.#feedbackInstances.delete(id);
          } else {
            this.#feedbackInstances.set(id, { ...feedback });
            if (!existing) {
              const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
              if (definition?.subscribe) {
                const context = {
                  parseVariablesInString: async (text) => {
                    return text;
                  }
                };
                Promise.resolve(definition.subscribe(convertFeedbackInstanceToEvent(definition.type, feedback), context)).catch((e) => {
                  this.#log("error", `Feedback subscribe failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
                });
              }
            }
            this.#triggerCheckFeedback(id);
          }
        }
      }
      async handleLearnFeedback(msg) {
        const definition = this.#feedbackDefinitions.get(msg.feedback.feedbackId);
        if (definition && definition.learn) {
          const context = {
            parseVariablesInString: async (text) => {
              const res = await this.#parseVariablesInString({
                text,
                controlId: msg.feedback.controlId,
                actionInstanceId: void 0,
                feedbackInstanceId: msg.feedback.id
              });
              return res.text;
            }
          };
          const newOptions = await definition.learn({
            id: msg.feedback.id,
            feedbackId: msg.feedback.feedbackId,
            controlId: msg.feedback.controlId,
            options: msg.feedback.options,
            type: definition.type
          }, context);
          return {
            options: newOptions
          };
        } else {
          return {
            options: void 0
          };
        }
      }
      #triggerCheckFeedback(id) {
        const existingRecheck = this.#feedbacksBeingChecked.get(id);
        if (existingRecheck) {
          existingRecheck.needsRecheck = true;
          return;
        }
        const feedback0 = this.#feedbackInstances.get(id);
        if (!feedback0)
          return;
        const feedback = feedback0;
        const feedbackCheckStatus = {
          needsRecheck: false
        };
        this.#feedbacksBeingChecked.set(id, feedbackCheckStatus);
        Promise.resolve().then(async () => {
          const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
          let value;
          if (definition) {
            this.#parseVariablesContext = `Feedback ${feedback.feedbackId} (${id})`;
            const context = {
              parseVariablesInString: async (text) => {
                const res = await this.#parseVariablesInString({
                  text,
                  controlId: feedback.controlId,
                  actionInstanceId: void 0,
                  feedbackInstanceId: id
                });
                return res.text;
              }
            };
            switch (definition.type) {
              case "boolean":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("boolean", feedback),
                  type: "boolean"
                }, context);
                break;
              case "value":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("value", feedback),
                  type: "value"
                }, context);
                break;
              case "advanced":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("advanced", feedback),
                  type: "advanced",
                  image: feedback.image
                }, context);
                break;
              default:
                (0, util_js_1.assertNever)(definition);
                break;
            }
            this.#parseVariablesContext = void 0;
          }
          const resolvedValue = await value;
          this.#pendingFeedbackValues.set(id, {
            id,
            controlId: feedback.controlId,
            value: resolvedValue
          });
          this.#sendFeedbackValues();
        }).catch((e) => {
          console.error(`Feedback check failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
        }).finally(() => {
          this.#parseVariablesContext = void 0;
          this.#feedbacksBeingChecked.delete(id);
          if (feedbackCheckStatus.needsRecheck) {
            setImmediate(() => {
              this.#triggerCheckFeedback(id);
            });
          }
        });
      }
      /**
       * Send pending feedback values (from this.#pendingFeedbackValues) to companion, with a debounce
       */
      #sendFeedbackValues = (0, index_js_1.default)(() => {
        const newValues = this.#pendingFeedbackValues;
        this.#pendingFeedbackValues = /* @__PURE__ */ new Map();
        if (newValues.size > 0) {
          this.#updateFeedbackValues({
            values: Array.from(newValues.values())
          });
        }
      }, {
        wait: 5,
        maxWait: 25
      });
      setFeedbackDefinitions(feedbacks) {
        const hostFeedbacks = [];
        this.#feedbackDefinitions.clear();
        for (const [feedbackId, feedback] of Object.entries(feedbacks)) {
          if (feedback) {
            hostFeedbacks.push({
              id: feedbackId,
              name: feedback.name,
              description: feedback.description,
              options: (0, base_js_1.serializeIsVisibleFn)(feedback.options),
              type: feedback.type,
              defaultStyle: feedback.type === "boolean" ? feedback.defaultStyle : void 0,
              hasLearn: !!feedback.learn,
              learnTimeout: feedback.learnTimeout,
              showInvert: feedback.type === "boolean" ? feedback.showInvert : false
            });
            this.#feedbackDefinitions.set(feedbackId, feedback);
          }
        }
        this.#setFeedbackDefinitions({ feedbacks: hostFeedbacks });
      }
      checkFeedbacks(feedbackTypes) {
        const types = new Set(feedbackTypes);
        for (const [id, feedback] of this.#feedbackInstances.entries()) {
          const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
          if (definition) {
            if (types.size === 0 || types.has(feedback.feedbackId)) {
              this.#triggerCheckFeedback(id);
            }
          }
        }
      }
      checkFeedbacksById(feedbackIds) {
        for (const id of feedbackIds) {
          this.#triggerCheckFeedback(id);
        }
      }
      subscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
          feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
          const def = this.#feedbackDefinitions.get(fb.feedbackId);
          if (def?.subscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              }
            };
            Promise.resolve(def.subscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
              this.#log("error", `Feedback subscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
      unsubscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
          feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
          const def = this.#feedbackDefinitions.get(fb.feedbackId);
          if (def && def.unsubscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              }
            };
            Promise.resolve(def.unsubscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
              this.#log("error", `Feedback unsubscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
    };
    exports2.FeedbackManager = FeedbackManager;
  }
});

// node_modules/ejson/index.js
var require_ejson = __commonJS({
  "node_modules/ejson/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var __webpack_modules__ = [
        ,
        /* 1 */
        /***/
        (function(__unused_webpack_module, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3.lengthOf = exports3.keysOf = exports3.isObject = exports3.isInfOrNaN = exports3.isFunction = exports3.isArguments = exports3.hasOwn = exports3.handleError = exports3.convertMapToObject = exports3.checkError = void 0;
          function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
          }
          function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          function _iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
              for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"] != null) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          }
          function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
              return typeof obj2;
            } : function(obj2) {
              return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            }, _typeof(obj);
          }
          var isFunction = function isFunction2(fn) {
            return typeof fn === "function";
          };
          exports3.isFunction = isFunction;
          var isObject = function isObject2(fn) {
            return _typeof(fn) === "object";
          };
          exports3.isObject = isObject;
          var keysOf = function keysOf2(obj) {
            return Object.keys(obj);
          };
          exports3.keysOf = keysOf;
          var lengthOf = function lengthOf2(obj) {
            return Object.keys(obj).length;
          };
          exports3.lengthOf = lengthOf;
          var hasOwn = function hasOwn2(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
          exports3.hasOwn = hasOwn;
          var convertMapToObject = function convertMapToObject2(map) {
            return Array.from(map).reduce(function(acc, _ref) {
              var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
              acc[key] = value;
              return acc;
            }, {});
          };
          exports3.convertMapToObject = convertMapToObject;
          var isArguments = function isArguments2(obj) {
            return obj != null && hasOwn(obj, "callee");
          };
          exports3.isArguments = isArguments;
          var isInfOrNaN = function isInfOrNaN2(obj) {
            return Number.isNaN(obj) || obj === Infinity || obj === -Infinity;
          };
          exports3.isInfOrNaN = isInfOrNaN;
          var checkError = {
            maxStack: function maxStack(msgError) {
              return new RegExp("Maximum call stack size exceeded", "g").test(msgError);
            }
          };
          exports3.checkError = checkError;
          var handleError = function handleError2(fn) {
            return function() {
              try {
                return fn.apply(this, arguments);
              } catch (error) {
                var isMaxStack = checkError.maxStack(error.message);
                if (isMaxStack) {
                  throw new Error("Converting circular structure to JSON");
                }
                throw error;
              }
            };
          };
          exports3.handleError = handleError;
        }),
        /* 2 */
        /***/
        (function(__unused_webpack_module, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3.Base64 = void 0;
          var BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var BASE_64_VALS = /* @__PURE__ */ Object.create(null);
          var getChar = function getChar2(val) {
            return BASE_64_CHARS.charAt(val);
          };
          var getVal = function getVal2(ch) {
            return ch === "=" ? -1 : BASE_64_VALS[ch];
          };
          for (var i = 0; i < BASE_64_CHARS.length; i++) {
            BASE_64_VALS[getChar(i)] = i;
          }
          ;
          var encode = function encode2(array) {
            if (typeof array === "string") {
              var str = array;
              array = newBinary(str.length);
              for (var _i = 0; _i < str.length; _i++) {
                var ch = str.charCodeAt(_i);
                if (ch > 255) {
                  throw new Error("Not ascii. Base64.encode can only take ascii strings.");
                }
                array[_i] = ch;
              }
            }
            var answer = [];
            var a = null;
            var b = null;
            var c = null;
            var d = null;
            for (var _i2 = 0; _i2 < array.length; _i2++) {
              switch (_i2 % 3) {
                case 0:
                  a = array[_i2] >> 2 & 63;
                  b = (array[_i2] & 3) << 4;
                  break;
                case 1:
                  b = b | array[_i2] >> 4 & 15;
                  c = (array[_i2] & 15) << 2;
                  break;
                case 2:
                  c = c | array[_i2] >> 6 & 3;
                  d = array[_i2] & 63;
                  answer.push(getChar(a));
                  answer.push(getChar(b));
                  answer.push(getChar(c));
                  answer.push(getChar(d));
                  a = null;
                  b = null;
                  c = null;
                  d = null;
                  break;
              }
            }
            if (a != null) {
              answer.push(getChar(a));
              answer.push(getChar(b));
              if (c == null) {
                answer.push("=");
              } else {
                answer.push(getChar(c));
              }
              if (d == null) {
                answer.push("=");
              }
            }
            return answer.join("");
          };
          var newBinary = function newBinary2(len) {
            if (typeof Uint8Array === "undefined" || typeof ArrayBuffer === "undefined") {
              var ret = [];
              for (var _i3 = 0; _i3 < len; _i3++) {
                ret.push(0);
              }
              ret.$Uint8ArrayPolyfill = true;
              return ret;
            }
            return new Uint8Array(new ArrayBuffer(len));
          };
          var decode = function decode2(str) {
            var len = Math.floor(str.length * 3 / 4);
            if (str.charAt(str.length - 1) == "=") {
              len--;
              if (str.charAt(str.length - 2) == "=") {
                len--;
              }
            }
            var arr = newBinary(len);
            var one = null;
            var two = null;
            var three = null;
            var j = 0;
            for (var _i4 = 0; _i4 < str.length; _i4++) {
              var c = str.charAt(_i4);
              var v = getVal(c);
              switch (_i4 % 4) {
                case 0:
                  if (v < 0) {
                    throw new Error("invalid base64 string");
                  }
                  one = v << 2;
                  break;
                case 1:
                  if (v < 0) {
                    throw new Error("invalid base64 string");
                  }
                  one = one | v >> 4;
                  arr[j++] = one;
                  two = (v & 15) << 4;
                  break;
                case 2:
                  if (v >= 0) {
                    two = two | v >> 2;
                    arr[j++] = two;
                    three = (v & 3) << 6;
                  }
                  break;
                case 3:
                  if (v >= 0) {
                    arr[j++] = three | v;
                  }
                  break;
              }
            }
            return arr;
          };
          var Base64 = {
            encode,
            decode,
            newBinary
          };
          exports3.Base64 = Base64;
        }),
        /* 3 */
        /***/
        (function(module3) {
          module3.exports = {
            //
            // When fibers are not supported on you system Meteor automatically sets this
            // function to a nope function. We're going to do the same here as there are
            // small parts of the code that call this function.
            //
            _noYieldsAllowed: function _noYieldsAllowed(f) {
              return f();
            }
          };
        }),
        /* 4 */
        /***/
        (function(module3, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3["default"] = void 0;
          function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
              return typeof obj2;
            } : function(obj2) {
              return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            }, _typeof(obj);
          }
          function quote(string) {
            return JSON.stringify(string);
          }
          var str = function str2(key, holder, singleIndent, outerIndent, canonical) {
            var value = holder[key];
            switch (_typeof(value)) {
              case "string":
                return quote(value);
              case "number":
                return isFinite(value) ? String(value) : "null";
              case "boolean":
                return String(value);
              // If the type is 'object', we might be dealing with an object or an array or
              // null.
              case "object": {
                if (!value) {
                  return "null";
                }
                var innerIndent = outerIndent + singleIndent;
                var partial = [];
                var v;
                if (Array.isArray(value) || {}.hasOwnProperty.call(value, "callee")) {
                  var length = value.length;
                  for (var i = 0; i < length; i += 1) {
                    partial[i] = str2(i, value, singleIndent, innerIndent, canonical) || "null";
                  }
                  if (partial.length === 0) {
                    v = "[]";
                  } else if (innerIndent) {
                    v = "[\n" + innerIndent + partial.join(",\n" + innerIndent) + "\n" + outerIndent + "]";
                  } else {
                    v = "[" + partial.join(",") + "]";
                  }
                  return v;
                }
                var keys = Object.keys(value);
                if (canonical) {
                  keys = keys.sort();
                }
                keys.forEach(function(k) {
                  v = str2(k, value, singleIndent, innerIndent, canonical);
                  if (v) {
                    partial.push(quote(k) + (innerIndent ? ": " : ":") + v);
                  }
                });
                if (partial.length === 0) {
                  v = "{}";
                } else if (innerIndent) {
                  v = "{\n" + innerIndent + partial.join(",\n" + innerIndent) + "\n" + outerIndent + "}";
                } else {
                  v = "{" + partial.join(",") + "}";
                }
                return v;
              }
              default:
            }
          };
          var canonicalStringify = function canonicalStringify2(value, options) {
            var allOptions = Object.assign({
              indent: "",
              canonical: false
            }, options);
            if (allOptions.indent === true) {
              allOptions.indent = "  ";
            } else if (typeof allOptions.indent === "number") {
              var newIndent = "";
              for (var i = 0; i < allOptions.indent; i++) {
                newIndent += " ";
              }
              allOptions.indent = newIndent;
            }
            return str("", {
              "": value
            }, allOptions.indent, "", allOptions.canonical);
          };
          var _default = canonicalStringify;
          exports3["default"] = _default;
          module3.exports = exports3.default;
        })
        /******/
      ];
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = {};
      !(function() {
        var exports3 = __webpack_exports__;
        var Base64 = __webpack_require__(2)["Base64"];
        var Meteor = __webpack_require__(3);
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3.EJSON = void 0;
        var _utils = __webpack_require__(1);
        var EJSON = {};
        exports3.EJSON = EJSON;
        var customTypes = /* @__PURE__ */ new Map();
        EJSON.addType = function(name, factory) {
          if (customTypes.has(name)) {
            throw new Error("Type ".concat(name, " already present"));
          }
          customTypes.set(name, factory);
        };
        var builtinConverters = [{
          // Date
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$date") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            return obj instanceof Date;
          },
          toJSONValue: function toJSONValue(obj) {
            return {
              $date: obj.getTime()
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return new Date(obj.$date);
          }
        }, {
          // RegExp
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$regexp") && (0, _utils.hasOwn)(obj, "$flags") && (0, _utils.lengthOf)(obj) === 2;
          },
          matchObject: function matchObject(obj) {
            return obj instanceof RegExp;
          },
          toJSONValue: function toJSONValue(regexp) {
            return {
              $regexp: regexp.source,
              $flags: regexp.flags
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return new RegExp(obj.$regexp, obj.$flags.slice(0, 50).replace(/[^gimuy]/g, "").replace(/(.)(?=.*\1)/g, ""));
          }
        }, {
          // NaN, Inf, -Inf. (These are the only objects with typeof !== 'object'
          // which we match.)
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$InfNaN") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: _utils.isInfOrNaN,
          toJSONValue: function toJSONValue(obj) {
            var sign;
            if (Number.isNaN(obj)) {
              sign = 0;
            } else if (obj === Infinity) {
              sign = 1;
            } else {
              sign = -1;
            }
            return {
              $InfNaN: sign
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return obj.$InfNaN / 0;
          }
        }, {
          // Binary
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$binary") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            return typeof Uint8Array !== "undefined" && obj instanceof Uint8Array || obj && (0, _utils.hasOwn)(obj, "$Uint8ArrayPolyfill");
          },
          toJSONValue: function toJSONValue(obj) {
            return {
              $binary: Base64.encode(obj)
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return Base64.decode(obj.$binary);
          }
        }, {
          // Escaping one level
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$escape") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            var match = false;
            if (obj) {
              var keyCount = (0, _utils.lengthOf)(obj);
              if (keyCount === 1 || keyCount === 2) {
                match = builtinConverters.some(function(converter) {
                  return converter.matchJSONValue(obj);
                });
              }
            }
            return match;
          },
          toJSONValue: function toJSONValue(obj) {
            var newObj = {};
            (0, _utils.keysOf)(obj).forEach(function(key) {
              newObj[key] = EJSON.toJSONValue(obj[key]);
            });
            return {
              $escape: newObj
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            var newObj = {};
            (0, _utils.keysOf)(obj.$escape).forEach(function(key) {
              newObj[key] = EJSON.fromJSONValue(obj.$escape[key]);
            });
            return newObj;
          }
        }, {
          // Custom
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$type") && (0, _utils.hasOwn)(obj, "$value") && (0, _utils.lengthOf)(obj) === 2;
          },
          matchObject: function matchObject(obj) {
            return EJSON._isCustomType(obj);
          },
          toJSONValue: function toJSONValue(obj) {
            var jsonValue = Meteor._noYieldsAllowed(function() {
              return obj.toJSONValue();
            });
            return {
              $type: obj.typeName(),
              $value: jsonValue
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            var typeName = obj.$type;
            if (!customTypes.has(typeName)) {
              throw new Error("Custom EJSON type ".concat(typeName, " is not defined"));
            }
            var converter = customTypes.get(typeName);
            return Meteor._noYieldsAllowed(function() {
              return converter(obj.$value);
            });
          }
        }];
        EJSON._isCustomType = function(obj) {
          return obj && (0, _utils.isFunction)(obj.toJSONValue) && (0, _utils.isFunction)(obj.typeName) && customTypes.has(obj.typeName());
        };
        EJSON._getTypes = function() {
          var isOriginal = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          return isOriginal ? customTypes : (0, _utils.convertMapToObject)(customTypes);
        };
        EJSON._getConverters = function() {
          return builtinConverters;
        };
        var toJSONValueHelper = function toJSONValueHelper2(item) {
          for (var i = 0; i < builtinConverters.length; i++) {
            var converter = builtinConverters[i];
            if (converter.matchObject(item)) {
              return converter.toJSONValue(item);
            }
          }
          return void 0;
        };
        var adjustTypesToJSONValue = function adjustTypesToJSONValue2(obj) {
          if (obj === null) {
            return null;
          }
          var maybeChanged = toJSONValueHelper(obj);
          if (maybeChanged !== void 0) {
            return maybeChanged;
          }
          if (!(0, _utils.isObject)(obj)) {
            return obj;
          }
          (0, _utils.keysOf)(obj).forEach(function(key) {
            var value = obj[key];
            if (!(0, _utils.isObject)(value) && value !== void 0 && !(0, _utils.isInfOrNaN)(value)) {
              return;
            }
            var changed = toJSONValueHelper(value);
            if (changed) {
              obj[key] = changed;
              return;
            }
            adjustTypesToJSONValue2(value);
          });
          return obj;
        };
        EJSON._adjustTypesToJSONValue = adjustTypesToJSONValue;
        EJSON.toJSONValue = function(item) {
          var changed = toJSONValueHelper(item);
          if (changed !== void 0) {
            return changed;
          }
          var newItem = item;
          if ((0, _utils.isObject)(item)) {
            newItem = EJSON.clone(item);
            adjustTypesToJSONValue(newItem);
          }
          return newItem;
        };
        var fromJSONValueHelper = function fromJSONValueHelper2(value) {
          if ((0, _utils.isObject)(value) && value !== null) {
            var keys = (0, _utils.keysOf)(value);
            if (keys.length <= 2 && keys.every(function(k) {
              return typeof k === "string" && k.substr(0, 1) === "$";
            })) {
              for (var i = 0; i < builtinConverters.length; i++) {
                var converter = builtinConverters[i];
                if (converter.matchJSONValue(value)) {
                  return converter.fromJSONValue(value);
                }
              }
            }
          }
          return value;
        };
        var adjustTypesFromJSONValue = function adjustTypesFromJSONValue2(obj) {
          if (obj === null) {
            return null;
          }
          var maybeChanged = fromJSONValueHelper(obj);
          if (maybeChanged !== obj) {
            return maybeChanged;
          }
          if (!(0, _utils.isObject)(obj)) {
            return obj;
          }
          (0, _utils.keysOf)(obj).forEach(function(key) {
            var value = obj[key];
            if ((0, _utils.isObject)(value)) {
              var changed = fromJSONValueHelper(value);
              if (value !== changed) {
                obj[key] = changed;
                return;
              }
              adjustTypesFromJSONValue2(value);
            }
          });
          return obj;
        };
        EJSON._adjustTypesFromJSONValue = adjustTypesFromJSONValue;
        EJSON.fromJSONValue = function(item) {
          var changed = fromJSONValueHelper(item);
          if (changed === item && (0, _utils.isObject)(item)) {
            changed = EJSON.clone(item);
            adjustTypesFromJSONValue(changed);
          }
          return changed;
        };
        EJSON.stringify = (0, _utils.handleError)(function(item, options) {
          var serialized;
          var json = EJSON.toJSONValue(item);
          if (options && (options.canonical || options.indent)) {
            var canonicalStringify = __webpack_require__(4);
            serialized = canonicalStringify(json, options);
          } else {
            serialized = JSON.stringify(json);
          }
          return serialized;
        });
        EJSON.parse = function(item) {
          if (typeof item !== "string") {
            throw new Error("EJSON.parse argument should be a string");
          }
          return EJSON.fromJSONValue(JSON.parse(item));
        };
        EJSON.isBinary = function(obj) {
          return !!(typeof Uint8Array !== "undefined" && obj instanceof Uint8Array || obj && obj.$Uint8ArrayPolyfill);
        };
        EJSON.equals = function(a, b, options) {
          var i;
          var keyOrderSensitive = !!(options && options.keyOrderSensitive);
          if (a === b) {
            return true;
          }
          if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
          }
          if (!a || !b) {
            return false;
          }
          if (!((0, _utils.isObject)(a) && (0, _utils.isObject)(b))) {
            return false;
          }
          if (a instanceof Date && b instanceof Date) {
            return a.valueOf() === b.valueOf();
          }
          if (EJSON.isBinary(a) && EJSON.isBinary(b)) {
            if (a.length !== b.length) {
              return false;
            }
            for (i = 0; i < a.length; i++) {
              if (a[i] !== b[i]) {
                return false;
              }
            }
            return true;
          }
          if ((0, _utils.isFunction)(a.equals)) {
            return a.equals(b, options);
          }
          if ((0, _utils.isFunction)(b.equals)) {
            return b.equals(a, options);
          }
          var aIsArray = Array.isArray(a);
          var bIsArray = Array.isArray(b);
          if (aIsArray !== bIsArray) {
            return false;
          }
          if (aIsArray && bIsArray) {
            if (a.length !== b.length) {
              return false;
            }
            for (i = 0; i < a.length; i++) {
              if (!EJSON.equals(a[i], b[i], options)) {
                return false;
              }
            }
            return true;
          }
          switch (EJSON._isCustomType(a) + EJSON._isCustomType(b)) {
            case 1:
              return false;
            case 2:
              return EJSON.equals(EJSON.toJSONValue(a), EJSON.toJSONValue(b));
            default:
          }
          var ret;
          var aKeys = (0, _utils.keysOf)(a);
          var bKeys = (0, _utils.keysOf)(b);
          if (keyOrderSensitive) {
            i = 0;
            ret = aKeys.every(function(key) {
              if (i >= bKeys.length) {
                return false;
              }
              if (key !== bKeys[i]) {
                return false;
              }
              if (!EJSON.equals(a[key], b[bKeys[i]], options)) {
                return false;
              }
              i++;
              return true;
            });
          } else {
            i = 0;
            ret = aKeys.every(function(key) {
              if (!(0, _utils.hasOwn)(b, key)) {
                return false;
              }
              if (!EJSON.equals(a[key], b[key], options)) {
                return false;
              }
              i++;
              return true;
            });
          }
          return ret && i === bKeys.length;
        };
        EJSON.clone = function(v) {
          var ret;
          if (!(0, _utils.isObject)(v)) {
            return v;
          }
          if (v === null) {
            return null;
          }
          if (v instanceof Date) {
            return new Date(v.getTime());
          }
          if (v instanceof RegExp) {
            return v;
          }
          if (EJSON.isBinary(v)) {
            ret = EJSON.newBinary(v.length);
            for (var i = 0; i < v.length; i++) {
              ret[i] = v[i];
            }
            return ret;
          }
          if (Array.isArray(v)) {
            return v.map(EJSON.clone);
          }
          if ((0, _utils.isArguments)(v)) {
            return Array.from(v).map(EJSON.clone);
          }
          if ((0, _utils.isFunction)(v.clone)) {
            return v.clone();
          }
          if (EJSON._isCustomType(v)) {
            return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(v)), true);
          }
          ret = {};
          (0, _utils.keysOf)(v).forEach(function(key) {
            ret[key] = EJSON.clone(v[key]);
          });
          return ret;
        };
        EJSON.newBinary = Base64.newBinary;
      })();
      module2.exports = __webpack_exports__.EJSON;
    })();
  }
});

// node_modules/@companion-module/base/dist/host-api/ipc-wrapper.js
var require_ipc_wrapper = __commonJS({
  "node_modules/@companion-module/base/dist/host-api/ipc-wrapper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IpcWrapper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_js_1 = require_util();
    var ejson_1 = tslib_1.__importDefault(require_ejson());
    var MAX_CALLBACK_ID = 1 << 28;
    var IpcWrapper = class {
      #handlers;
      #sendMessage;
      #defaultTimeout;
      #nextCallbackId = 1;
      #pendingCallbacks = /* @__PURE__ */ new Map();
      constructor(handlers, sendMessage, defaultTimeout) {
        this.#handlers = handlers;
        this.#sendMessage = sendMessage;
        this.#defaultTimeout = defaultTimeout;
      }
      async sendWithCb(name, msg, defaultResponse, timeout = 0) {
        if (timeout <= 0)
          timeout = this.#defaultTimeout;
        const callbacks = { timeout: void 0, resolve: () => null, reject: () => null };
        const promise = new Promise((resolve, reject) => {
          callbacks.resolve = resolve;
          callbacks.reject = reject;
        });
        if (this.#nextCallbackId > MAX_CALLBACK_ID)
          this.#nextCallbackId = 1;
        const id = this.#nextCallbackId++;
        this.#pendingCallbacks.set(id, callbacks);
        this.#sendMessage({
          direction: "call",
          name: String(name),
          payload: ejson_1.default.stringify(msg),
          callbackId: id
        });
        const timeoutError = new Error("Call timed out");
        callbacks.timeout = setTimeout(() => {
          callbacks.reject(defaultResponse ? defaultResponse() : timeoutError);
          this.#pendingCallbacks.delete(id);
        }, timeout);
        return promise;
      }
      sendWithNoCb(name, msg) {
        this.#sendMessage({
          direction: "call",
          name: String(name),
          payload: ejson_1.default.stringify(msg),
          callbackId: void 0
        });
      }
      receivedMessage(msg) {
        const rawMsg = msg;
        switch (msg.direction) {
          case "call": {
            const handler = this.#handlers[msg.name];
            if (!handler) {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: false,
                  payload: ejson_1.default.stringify({ message: `Unknown command "${msg.name}"` })
                });
              }
              return;
            }
            const data = msg.payload ? ejson_1.default.parse(msg.payload) : void 0;
            handler(data).then((res) => {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: true,
                  payload: ejson_1.default.stringify(res)
                });
              }
            }, (err) => {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: false,
                  payload: err instanceof Error ? JSON.stringify(err, Object.getOwnPropertyNames(err)) : ejson_1.default.stringify(err)
                });
              }
            });
            break;
          }
          case "response": {
            if (!msg.callbackId) {
              console.error(`Ipc: Response message has no callbackId`);
              return;
            }
            const callbacks = this.#pendingCallbacks.get(msg.callbackId);
            this.#pendingCallbacks.delete(msg.callbackId);
            if (!callbacks) {
              return;
            }
            clearTimeout(callbacks.timeout);
            const data = msg.payload ? ejson_1.default.parse(msg.payload) : void 0;
            if (msg.success) {
              callbacks.resolve(data);
            } else {
              let err = data;
              if (data && typeof data === "object" && "message" in data) {
                err = new Error(data.message);
                if (data.stack)
                  err.stack = data.stack;
              }
              callbacks.reject(err);
            }
            break;
          }
          default:
            (0, util_js_1.assertNever)(msg);
            console.error(`Ipc: Message of unknown direction "${rawMsg.direction}"`);
            break;
        }
      }
    };
    exports2.IpcWrapper = IpcWrapper;
  }
});

// node_modules/@companion-module/base/dist/internal/actions.js
var require_actions = __commonJS({
  "node_modules/@companion-module/base/dist/internal/actions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ActionManager = void 0;
    var base_js_1 = require_base();
    function convertActionInstanceToEvent(action) {
      return {
        id: action.id,
        actionId: action.actionId,
        controlId: action.controlId,
        options: action.options
      };
    }
    var ActionManager = class {
      #parseVariablesInString;
      #setActionDefinitions;
      #setCustomVariableValue;
      #log;
      #actionDefinitions = /* @__PURE__ */ new Map();
      #actionInstances = /* @__PURE__ */ new Map();
      constructor(parseVariablesInString, setActionDefinitions, setCustomVariableValue, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#setActionDefinitions = setActionDefinitions;
        this.#setCustomVariableValue = setCustomVariableValue;
        this.#log = log;
      }
      async handleExecuteAction(msg) {
        const actionDefinition = this.#actionDefinitions.get(msg.action.actionId);
        if (!actionDefinition) {
          return {
            success: false,
            errorMessage: `Action definition not found for: ${msg.action.actionId}`
          };
        }
        const context = {
          parseVariablesInString: async (text) => {
            const res = await this.#parseVariablesInString({
              text,
              controlId: msg.action.controlId,
              actionInstanceId: msg.action.id,
              feedbackInstanceId: void 0
            });
            return res.text;
          },
          setCustomVariableValue: (variableName, value) => {
            this.#setCustomVariableValue({
              customVariableId: variableName,
              value,
              controlId: msg.action.controlId
            });
          }
        };
        try {
          await actionDefinition.callback({
            id: msg.action.id,
            actionId: msg.action.actionId,
            controlId: msg.action.controlId,
            options: msg.action.options,
            surfaceId: msg.surfaceId
          }, context);
          return {
            success: true,
            errorMessage: void 0
          };
        } catch (e) {
          return {
            success: false,
            errorMessage: e?.message ?? String(e)
          };
        }
      }
      handleUpdateActions(actions) {
        for (const [id, action] of Object.entries(actions)) {
          const existing = this.#actionInstances.get(id);
          if (existing) {
            const definition = this.#actionDefinitions.get(existing.actionId);
            if (definition?.unsubscribe && !definition.skipUnsubscribeOnOptionsChange) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                },
                setCustomVariableValue: () => {
                  throw new Error(`setCustomVariableValue is not available during unsubscribe`);
                }
              };
              Promise.resolve(definition.unsubscribe(convertActionInstanceToEvent(existing), context)).catch((e) => {
                this.#log("error", `Action unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
          if (!action || action.disabled) {
            this.#actionInstances.delete(id);
          } else {
            this.#actionInstances.set(id, action);
            const definition = this.#actionDefinitions.get(action.actionId);
            if (definition?.subscribe) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                },
                setCustomVariableValue: () => {
                  throw new Error(`setCustomVariableValue is not available during subscribe`);
                }
              };
              Promise.resolve(definition.subscribe(convertActionInstanceToEvent(action), context)).catch((e) => {
                this.#log("error", `Action subscribe failed: ${JSON.stringify(action)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
        }
      }
      async handleLearnAction(msg) {
        const definition = this.#actionDefinitions.get(msg.action.actionId);
        if (definition && definition.learn) {
          const context = {
            parseVariablesInString: async (text) => {
              const res = await this.#parseVariablesInString({
                text,
                controlId: msg.action.controlId,
                actionInstanceId: msg.action.id,
                feedbackInstanceId: void 0
              });
              return res.text;
            },
            setCustomVariableValue: () => {
              throw new Error(`setCustomVariableValue is not available during learn`);
            }
          };
          const newOptions = await definition.learn({
            id: msg.action.id,
            actionId: msg.action.actionId,
            controlId: msg.action.controlId,
            options: msg.action.options,
            surfaceId: void 0
          }, context);
          return {
            options: newOptions
          };
        } else {
          return {
            options: void 0
          };
        }
      }
      setActionDefinitions(actions) {
        const hostActions = [];
        this.#actionDefinitions.clear();
        for (const [actionId, action] of Object.entries(actions)) {
          if (action) {
            hostActions.push({
              id: actionId,
              name: action.name,
              description: action.description,
              options: (0, base_js_1.serializeIsVisibleFn)(action.options),
              optionsToIgnoreForSubscribe: action.optionsToIgnoreForSubscribe,
              hasLearn: !!action.learn,
              learnTimeout: action.learnTimeout,
              hasLifecycleFunctions: !!action.subscribe || !!action.unsubscribe
            });
            this.#actionDefinitions.set(actionId, action);
          }
        }
        this.#setActionDefinitions({ actions: hostActions });
      }
      subscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
          actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
          const def = this.#actionDefinitions.get(act.actionId);
          if (def?.subscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              },
              setCustomVariableValue: () => {
                throw new Error(`setCustomVariableValue is not available during subscribe`);
              }
            };
            Promise.resolve(def.subscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
              this.#log("error", `Action subscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
      unsubscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
          actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
          const def = this.#actionDefinitions.get(act.actionId);
          if (def && def.unsubscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              },
              setCustomVariableValue: () => {
                throw new Error(`setCustomVariableValue is not available during unsubscribe`);
              }
            };
            Promise.resolve(def.unsubscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
              this.#log("error", `Action unsubscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
    };
    exports2.ActionManager = ActionManager;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter32 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter2;
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/shared-udp-socket.js
var require_shared_udp_socket = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/shared-udp-socket.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedUdpSocketImpl = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var eventemitter3_1 = tslib_1.__importDefault(require_eventemitter32());
    var util_js_1 = require_util();
    var SharedUdpSocketImpl = class extends eventemitter3_1.default {
      #ipcWrapper;
      #moduleUdpSockets;
      #options;
      get handleId() {
        return this.boundState?.handleId;
      }
      get portNumber() {
        return this.boundState?.portNumber;
      }
      get boundState() {
        if (this.#state && typeof this.#state === "object") {
          return this.#state;
        } else {
          return void 0;
        }
      }
      #state = "pending";
      constructor(ipcWrapper, moduleUdpSockets, options) {
        super();
        this.#ipcWrapper = ipcWrapper;
        this.#moduleUdpSockets = moduleUdpSockets;
        this.#options = { ...options };
      }
      bind(port, _address, callback) {
        if (this.#state && typeof this.#state === "object")
          throw new Error("Socket is already bound");
        switch (this.#state) {
          case "fatalError":
            throw new Error("Socket has encountered fatal error");
          case "binding":
            throw new Error("Socket is already bound");
          case "closed":
            throw new Error("Socket is closing");
          case "pending":
            break;
          default:
            (0, util_js_1.assertNever)(this.#state);
            throw new Error("Invalid socket state");
        }
        this.#state = "binding";
        if (callback)
          this.on("listening", callback);
        this.#ipcWrapper.sendWithCb("sharedUdpSocketJoin", {
          family: this.#options.type,
          portNumber: port
          // Future: use address?
        }).then((handleId) => {
          this.#state = { portNumber: port, handleId };
          this.#moduleUdpSockets.set(handleId, this);
          this.emit("listening");
        }, (err) => {
          this.#state = "closed";
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      close(callback) {
        if (this.#state && typeof this.#state === "object") {
        } else {
          switch (this.#state) {
            case "fatalError":
              throw new Error("Socket has encountered fatal error");
            case "pending":
            case "closed":
            case "binding":
              throw new Error("Socket is not open");
            default:
              (0, util_js_1.assertNever)(this.#state);
              throw new Error("Invalid socket state");
          }
        }
        const handleId = this.#state.handleId;
        this.#state = "closed";
        if (callback)
          this.on("close", callback);
        this.#ipcWrapper.sendWithCb("sharedUdpSocketLeave", {
          handleId
        }).then(() => {
          this.#moduleUdpSockets.delete(handleId);
          this.emit("close");
        }, (err) => {
          this.#moduleUdpSockets.delete(handleId);
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      send(bufferOrList, offsetOrPort, lengthOrAddress, portOrCallback, address, callback) {
        if (typeof offsetOrPort !== "number")
          throw new Error("Invalid arguments");
        if (typeof lengthOrAddress === "number") {
          if (typeof portOrCallback !== "number" || typeof address !== "string")
            throw new Error("Invalid arguments");
          if (callback !== void 0 && typeof callback !== "function")
            throw new Error("Invalid arguments");
          const buffer = this.#processBuffer(bufferOrList, offsetOrPort, lengthOrAddress);
          this.#sendInner(buffer, portOrCallback, address, callback);
        } else if (typeof lengthOrAddress === "string") {
          if (portOrCallback !== void 0 && typeof portOrCallback !== "function")
            throw new Error("Invalid arguments");
          const buffer = this.#processBuffer(bufferOrList, 0, void 0);
          this.#sendInner(buffer, offsetOrPort, lengthOrAddress, portOrCallback);
        } else {
          throw new Error("Invalid arguments");
        }
      }
      #processBuffer(bufferOrList, offset, length) {
        let buffer;
        if (typeof bufferOrList === "string") {
          buffer = Buffer.from(bufferOrList, "utf-8");
        } else if (Buffer.isBuffer(bufferOrList)) {
          buffer = bufferOrList;
        } else if (Array.isArray(bufferOrList)) {
          return Buffer.from(bufferOrList);
        } else {
          buffer = Buffer.from(bufferOrList.buffer, bufferOrList.byteOffset, bufferOrList.byteLength);
        }
        return buffer.subarray(offset, length !== void 0 ? length + offset : void 0);
      }
      #sendInner(buffer, port, address, callback) {
        if (!this.#state || typeof this.#state !== "object")
          throw new Error("Socket is not open");
        this.#ipcWrapper.sendWithCb("sharedUdpSocketSend", {
          handleId: this.#state.handleId,
          message: buffer,
          address,
          port
        }).then(() => {
          callback?.();
        }, (err) => {
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      receiveSocketMessage(message) {
        try {
          this.emit("message", message.message, message.source);
        } catch (_e) {
        }
      }
      receiveSocketError(error) {
        this.#state = "fatalError";
        const boundState = this.boundState;
        if (boundState)
          this.#moduleUdpSockets.delete(boundState.handleId);
        try {
          this.emit("error", error);
        } catch (_e) {
        }
      }
    };
    exports2.SharedUdpSocketImpl = SharedUdpSocketImpl;
  }
});

// node_modules/@companion-module/base/dist/module-api/base.js
var require_base2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InstanceBase = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_js_1 = require_util();
    var p_queue_1 = tslib_1.__importDefault(require_dist());
    var base_js_1 = require_base();
    var upgrade_js_1 = require_upgrade();
    var feedback_js_1 = require_feedback();
    var ipc_wrapper_js_1 = require_ipc_wrapper();
    var actions_js_1 = require_actions();
    var shared_udp_socket_js_1 = require_shared_udp_socket();
    var InstanceBase2 = class {
      #ipcWrapper;
      #upgradeScripts;
      id;
      #lifecycleQueue = new p_queue_1.default({ concurrency: 1 });
      #initialized = false;
      #recordingActions = false;
      #lastConfig = {};
      #lastSecrets = {};
      #actionManager;
      #feedbackManager;
      #sharedUdpSocketHandlers = /* @__PURE__ */ new Map();
      #variableDefinitions = /* @__PURE__ */ new Map();
      #variableValues = /* @__PURE__ */ new Map();
      #options;
      #label;
      get instanceOptions() {
        return this.#options;
      }
      /**
       * The user chosen name for this instance.
       * This can be changed just before `configUpdated` is called
       */
      get label() {
        return this.#label;
      }
      /**
       * Create an instance of the module
       */
      constructor(internal) {
        if (!(0, base_js_1.isInstanceBaseProps)(internal) || !internal._isInstanceBaseProps)
          throw new Error(`Module instance is being constructed incorrectly. Make sure you aren't trying to do this manually`);
        this.createSharedUdpSocket = this.createSharedUdpSocket.bind(this);
        this.#options = {
          disableVariableValidation: false,
          disableNewConfigLayout: false
        };
        this.#ipcWrapper = new ipc_wrapper_js_1.IpcWrapper({
          init: this._handleInit.bind(this),
          destroy: this._handleDestroy.bind(this),
          updateConfigAndLabel: this._handleConfigUpdateAndLabel.bind(this),
          updateConfig: async () => void 0,
          // Replaced by updateConfigAndLabel
          executeAction: this._handleExecuteAction.bind(this),
          updateFeedbacks: this._handleUpdateFeedbacks.bind(this),
          updateActions: this._handleUpdateActions.bind(this),
          upgradeActionsAndFeedbacks: this._handleUpgradeActionsAndFeedbacks.bind(this),
          getConfigFields: this._handleGetConfigFields.bind(this),
          handleHttpRequest: this._handleHttpRequest.bind(this),
          learnAction: this._handleLearnAction.bind(this),
          learnFeedback: this._handleLearnFeedback.bind(this),
          startStopRecordActions: this._handleStartStopRecordActions.bind(this),
          variablesChanged: async () => void 0,
          // Not needed since 1.13.0
          sharedUdpSocketMessage: this._handleSharedUdpSocketMessage.bind(this),
          sharedUdpSocketError: this._handleSharedUdpSocketError.bind(this)
        }, (msg) => {
          process.send(msg);
        }, 5e3);
        process.on("message", (msg) => {
          this.#ipcWrapper.receivedMessage(msg);
        });
        const parseVariablesInStringIfNeeded = async (msg) => {
          if (!msg.text.includes("$("))
            return {
              text: msg.text,
              variableIds: void 0
            };
          return this.#ipcWrapper.sendWithCb("parseVariablesInString", msg);
        };
        this.#actionManager = new actions_js_1.ActionManager(parseVariablesInStringIfNeeded, (msg) => this.#ipcWrapper.sendWithNoCb("setActionDefinitions", msg), (msg) => this.#ipcWrapper.sendWithNoCb("setCustomVariable", msg), this.log.bind(this));
        this.#feedbackManager = new feedback_js_1.FeedbackManager(parseVariablesInStringIfNeeded, (msg) => this.#ipcWrapper.sendWithNoCb("updateFeedbackValues", msg), (msg) => this.#ipcWrapper.sendWithNoCb("setFeedbackDefinitions", msg), this.log.bind(this));
        this.#upgradeScripts = internal.upgradeScripts;
        this.id = internal.id;
        this.#label = internal.id;
        this.log("debug", "Initializing");
      }
      async _handleInit(msg) {
        return this.#lifecycleQueue.add(async () => {
          if (this.#initialized)
            throw new Error("Already initialized");
          this.#lastConfig = msg.config;
          this.#lastSecrets = msg.secrets;
          this.#label = msg.label;
          process.title = msg.label;
          if (msg.isFirstInit) {
            const newConfig = {};
            const newSecrets = {};
            const fields = this.getConfigFields();
            for (const field of fields) {
              if ("default" in field) {
                if (field.type.startsWith("secret")) {
                  newSecrets[field.id] = field.default;
                } else {
                  newConfig[field.id] = field.default;
                }
              }
            }
            this.#lastConfig = newConfig;
            this.#lastSecrets = newSecrets;
            this.saveConfig(this.#lastConfig, this.#lastSecrets);
            msg.lastUpgradeIndex = this.#upgradeScripts.length - 1;
          }
          const { updatedConfig, updatedSecrets } = (0, upgrade_js_1.runThroughUpgradeScripts)([], [], msg.lastUpgradeIndex, this.#upgradeScripts, this.#lastConfig, this.#lastSecrets, false);
          this.#lastConfig = updatedConfig ?? this.#lastConfig;
          this.#lastSecrets = updatedSecrets ?? this.#lastSecrets;
          try {
            await this.init(this.#lastConfig, !!msg.isFirstInit, this.#lastSecrets);
            this.#initialized = true;
          } catch (e) {
            console.trace(`Init failed: ${e}`);
            throw e;
          }
          return {
            hasHttpHandler: typeof this.handleHttpRequest === "function",
            hasRecordActionsHandler: typeof this.handleStartStopRecordActions == "function",
            newUpgradeIndex: this.#upgradeScripts.length - 1,
            disableNewConfigLayout: this.#options.disableNewConfigLayout,
            updatedConfig: this.#lastConfig,
            updatedSecrets: this.#lastSecrets
          };
        });
      }
      async _handleDestroy() {
        await this.#lifecycleQueue.add(async () => {
          if (!this.#initialized)
            throw new Error("Not initialized");
          await this.destroy();
          this.#initialized = false;
        });
      }
      async _handleConfigUpdateAndLabel(msg) {
        await this.#lifecycleQueue.add(async () => {
          if (!this.#initialized)
            throw new Error("Not initialized");
          this.#label = msg.label;
          process.title = msg.label;
          this.#lastConfig = msg.config;
          this.#lastSecrets = msg.secrets;
          await this.configUpdated(this.#lastConfig, this.#lastSecrets);
        });
      }
      async _handleExecuteAction(msg) {
        return this.#actionManager.handleExecuteAction(msg);
      }
      async _handleUpdateFeedbacks(msg) {
        this.#feedbackManager.handleUpdateFeedbacks(msg.feedbacks);
      }
      async _handleUpdateActions(msg) {
        this.#actionManager.handleUpdateActions(msg.actions);
      }
      async _handleUpgradeActionsAndFeedbacks(msg) {
        return (0, upgrade_js_1.runThroughUpgradeScripts)(msg.actions, msg.feedbacks, null, this.#upgradeScripts, this.#lastConfig, this.#lastSecrets, true);
      }
      async _handleGetConfigFields(_msg) {
        return {
          fields: (0, base_js_1.serializeIsVisibleFn)(this.getConfigFields())
        };
      }
      async _handleHttpRequest(msg) {
        if (!this.handleHttpRequest)
          throw new Error(`handleHttpRequest is not supported!`);
        const res = await this.handleHttpRequest(msg.request);
        return { response: res };
      }
      async _handleLearnAction(msg) {
        return this.#actionManager.handleLearnAction(msg);
      }
      async _handleLearnFeedback(msg) {
        return this.#feedbackManager.handleLearnFeedback(msg);
      }
      async _handleStartStopRecordActions(msg) {
        if (!msg.recording) {
          if (!this.#recordingActions) {
            return;
          }
        } else {
          if (this.#recordingActions) {
            return;
          }
        }
        if (!this.handleStartStopRecordActions) {
          this.#recordingActions = false;
          throw new Error("Recording actions is not supported by this module!");
        }
        this.#recordingActions = msg.recording;
        this.handleStartStopRecordActions(this.#recordingActions);
      }
      async _handleSharedUdpSocketMessage(msg) {
        for (const socket of this.#sharedUdpSocketHandlers.values()) {
          if (socket.handleId === msg.handleId) {
            socket.receiveSocketMessage(msg);
          }
        }
      }
      async _handleSharedUdpSocketError(msg) {
        for (const socket of this.#sharedUdpSocketHandlers.values()) {
          if (socket.handleId === msg.handleId) {
            socket.receiveSocketError(msg.error);
          }
        }
      }
      saveConfig(newConfig, newSecrets) {
        if (newConfig)
          this.#lastConfig = newConfig;
        if (newSecrets)
          this.#lastSecrets = newSecrets;
        this.#ipcWrapper.sendWithNoCb("saveConfig", { config: newConfig, secrets: newSecrets });
      }
      /**
       * Set the action definitions for this instance
       * @param actions The action definitions
       */
      setActionDefinitions(actions) {
        this.#actionManager.setActionDefinitions(actions);
      }
      /**
       * Set the feedback definitions for this instance
       * @param feedbacks The feedback definitions
       */
      setFeedbackDefinitions(feedbacks) {
        this.#feedbackManager.setFeedbackDefinitions(feedbacks);
      }
      /**
       * Set the peset definitions for this instance
       * @param presets The preset definitions
       */
      setPresetDefinitions(presets) {
        const hostPresets = [];
        for (const [id, preset] of Object.entries(presets)) {
          if (preset) {
            hostPresets.push({
              ...preset,
              id
            });
          }
        }
        this.#ipcWrapper.sendWithNoCb("setPresetDefinitions", { presets: hostPresets });
      }
      /**
       * Set the variable definitions for this instance
       * @param variables The variable definitions
       */
      setVariableDefinitions(variables) {
        const hostVariables = [];
        const hostValues = [];
        this.#variableDefinitions.clear();
        for (const variable of variables) {
          hostVariables.push({
            id: variable.variableId,
            name: variable.name
          });
          this.#variableDefinitions.set(variable.variableId, variable);
          if (!this.#variableValues.has(variable.variableId)) {
            this.#variableValues.set(variable.variableId, "");
            hostValues.push({
              id: variable.variableId,
              value: ""
            });
          }
        }
        if (!this.#options.disableVariableValidation) {
          const validIds = new Set(this.#variableDefinitions.keys());
          for (const id of this.#variableValues.keys()) {
            if (!validIds.has(id)) {
              this.#variableValues.delete(id);
              hostValues.push({
                id,
                value: void 0
              });
            }
          }
        }
        this.#ipcWrapper.sendWithNoCb("setVariableDefinitions", { variables: hostVariables, newValues: hostValues });
      }
      /**
       * Set the values of some variables
       * @param values The new values for the variables
       */
      setVariableValues(values) {
        const hostValues = [];
        for (const [variableId, value] of Object.entries(values)) {
          if (this.#options.disableVariableValidation) {
            if (value === void 0) {
              this.#variableValues.delete(variableId);
            } else {
              this.#variableValues.set(variableId, value);
            }
            hostValues.push({
              id: variableId,
              value
            });
          } else if (this.#variableDefinitions.has(variableId)) {
            this.#variableValues.set(variableId, value ?? "");
            hostValues.push({
              id: variableId,
              value: value ?? ""
            });
          } else {
            hostValues.push({
              id: variableId,
              value: void 0
            });
          }
        }
        this.#ipcWrapper.sendWithNoCb("setVariableValues", { newValues: hostValues });
      }
      /**
       * Get the last set value of a variable from this connection
       * @param variableId id of the variable
       * @returns The value
       */
      getVariableValue(variableId) {
        return this.#variableValues.get(variableId);
      }
      /**
       * @deprecated Companion now handles this for you, for actions and feedbacks. If you need this for another purpose, let us know as we intend to remove this
       *
       * Parse and replace all the variables in a string
       * Note: You must not use this for feedbacks, as your feedback will not update when the variable changes.
       * There is an alternate version of this supplied to each of the action/feedback callbacks that tracks
       * usages properly and will retrigger the feedback when the variables change.
       * @param text The text to parse
       * @returns The string with variables replaced with their values
       */
      async parseVariablesInString(text) {
        const currentContext = this.#feedbackManager.parseVariablesContext;
        if (currentContext) {
          this.log("debug", `parseVariablesInString called while in: ${currentContext}. You should use the parseVariablesInString provided to the callback instead`);
        }
        if (!text.includes("$("))
          return text;
        const res = await this.#ipcWrapper.sendWithCb("parseVariablesInString", {
          text,
          controlId: void 0,
          actionInstanceId: void 0,
          feedbackInstanceId: void 0
        });
        return res.text;
      }
      /**
       * Request all feedbacks of the specified types to be checked for changes
       * @param feedbackTypes The feedback types to check
       */
      checkFeedbacks(...feedbackTypes) {
        this.#feedbackManager.checkFeedbacks(feedbackTypes);
      }
      /**
       * Request the specified feedback instances to be checked for changes
       * @param feedbackIds The ids of the feedback instances to check
       */
      checkFeedbacksById(...feedbackIds) {
        this.#feedbackManager.checkFeedbacksById(feedbackIds);
      }
      /**
       * Call subscribe on all currently known placed actions.
       * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
       * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
       */
      subscribeActions(...actionIds) {
        this.#actionManager.subscribeActions(actionIds);
      }
      /**
       * Call unsubscribe on all currently known placed actions.
       * It can be useful to do some cleanup upon a connection closing.
       * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
       */
      unsubscribeActions(...actionIds) {
        this.#actionManager.unsubscribeActions(actionIds);
      }
      /**
       * Call subscribe on all currently known placed feedbacks.
       * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
       * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
       */
      subscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.subscribeFeedbacks(feedbackIds);
      }
      /**
       * Call unsubscribe on all currently known placed feedbacks.
       * It can be useful to do some cleanup upon a connection closing.
       * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
       */
      unsubscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.unsubscribeFeedbacks(feedbackIds);
      }
      /**
       * Add an action to the current recording session
       * @param action The action to be added to the recording session
       * @param uniquenessId A unique id for the action being recorded. This should be different for each action, but by passing the same as a previous call will replace the previous value.
       */
      recordAction(action, uniquenessId) {
        if (!this.#recordingActions)
          throw new Error("Not currently recording actions");
        this.#ipcWrapper.sendWithNoCb("recordAction", {
          uniquenessId: uniquenessId ?? null,
          actionId: action.actionId,
          options: action.options,
          delay: action.delay
        });
      }
      /**
       * Send an osc message from the system osc sender
       * @param host destination ip address
       * @param port destination port number
       * @param path message path
       * @param args mesage arguments
       */
      oscSend(host, port, path, args) {
        this.#ipcWrapper.sendWithNoCb("send-osc", (0, util_js_1.literal)({
          host,
          port,
          path,
          args
        }));
      }
      /**
       * Update the status of this connection
       * @param status The status level
       * @param message Additional information about the status
       *
       * ### Example
       * ```js
       * this.updateStatus(InstanceStatus.Ok)
       * ```
       */
      updateStatus(status, message) {
        this.#ipcWrapper.sendWithNoCb("set-status", (0, util_js_1.literal)({
          status,
          message: message ?? null
        }));
      }
      /**
       * Write a line to the log
       * @param level The level of the message
       * @param message The message text to write
       */
      log(level, message) {
        this.#ipcWrapper.sendWithNoCb("log-message", (0, util_js_1.literal)({
          level,
          message
        }));
      }
      createSharedUdpSocket(typeOrOptions, callback) {
        const options = typeof typeOrOptions === "string" ? { type: typeOrOptions } : typeOrOptions;
        const socket = new shared_udp_socket_js_1.SharedUdpSocketImpl(this.#ipcWrapper, this.#sharedUdpSocketHandlers, options);
        if (callback)
          socket.on("message", callback);
        return socket;
      }
    };
    exports2.InstanceBase = InstanceBase2;
  }
});

// node_modules/@companion-module/base/dist/module-api/common.js
var require_common = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/config.js
var require_config = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/enums.js
var require_enums = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/enums.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Regex = exports2.InstanceStatus = void 0;
    var InstanceStatus2;
    (function(InstanceStatus3) {
      InstanceStatus3["Ok"] = "ok";
      InstanceStatus3["Connecting"] = "connecting";
      InstanceStatus3["Disconnected"] = "disconnected";
      InstanceStatus3["ConnectionFailure"] = "connection_failure";
      InstanceStatus3["BadConfig"] = "bad_config";
      InstanceStatus3["UnknownError"] = "unknown_error";
      InstanceStatus3["UnknownWarning"] = "unknown_warning";
      InstanceStatus3["AuthenticationFailure"] = "authentication_failure";
    })(InstanceStatus2 || (exports2.InstanceStatus = InstanceStatus2 = {}));
    var Regex;
    (function(Regex2) {
      Regex2.IP = "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
      Regex2.HOSTNAME = "/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/";
      Regex2.BOOLEAN = "/^(true|false|0|1)$/i";
      Regex2.PORT = "/^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-4])$/";
      Regex2.MAC_ADDRESS = "/^(?:[a-fA-F0-9]{2}:){5}([a-fA-F0-9]{2})$/";
      Regex2.PERCENT = "/^(100|[0-9]|[0-9][0-9])$/";
      Regex2.FLOAT = "/^([0-9]*\\.)?[0-9]+$/";
      Regex2.SIGNED_FLOAT = "/^[+-]?([0-9]*\\.)?[0-9]+$/";
      Regex2.FLOAT_OR_INT = "/^([0-9]+)(\\.[0-9]+)?$/";
      Regex2.NUMBER = "/^\\d+$/";
      Regex2.SIGNED_NUMBER = "/^[+-]?\\d+$/";
      Regex2.SOMETHING = "/^.+$/";
      Regex2.TIMECODE = "/^(0*[0-9]|1[0-9]|2[0-4]):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[12][0-9]|30)$/";
    })(Regex || (exports2.Regex = Regex = {}));
  }
});

// node_modules/@companion-module/base/dist/module-api/feedback.js
var require_feedback2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/feedback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/http.js
var require_http = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/http.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/input.js
var require_input = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/input.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/preset.js
var require_preset = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/preset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/style.js
var require_style = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/style.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/upgrade.js
var require_upgrade2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/upgrade.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmptyUpgradeScript = void 0;
    exports2.CreateConvertToBooleanFeedbackUpgradeScript = CreateConvertToBooleanFeedbackUpgradeScript;
    exports2.CreateUseBuiltinInvertForFeedbacksUpgradeScript = CreateUseBuiltinInvertForFeedbacksUpgradeScript;
    var EmptyUpgradeScript = () => ({
      updatedConfig: null,
      updatedSecrets: null,
      updatedActions: [],
      updatedFeedbacks: []
    });
    exports2.EmptyUpgradeScript = EmptyUpgradeScript;
    function CreateConvertToBooleanFeedbackUpgradeScript(upgradeMap) {
      return (_context, props) => {
        const changedFeedbacks = [];
        for (const feedback of props.feedbacks) {
          let upgrade_rules = upgradeMap[feedback.feedbackId];
          if (upgrade_rules === true) {
            upgrade_rules = {
              bg: "bgcolor",
              bgcolor: "bgcolor",
              fg: "color",
              color: "color",
              png64: "png64",
              png: "png64"
            };
          }
          if (upgrade_rules) {
            if (!feedback.style)
              feedback.style = {};
            for (const [option_key, style_key] of Object.entries(upgrade_rules)) {
              if (feedback.options[option_key] !== void 0) {
                feedback.style[style_key] = feedback.options[option_key];
                delete feedback.options[option_key];
                changedFeedbacks.push(feedback);
              }
            }
          }
        }
        return {
          updatedConfig: null,
          updatedSecrets: null,
          updatedActions: [],
          updatedFeedbacks: changedFeedbacks
        };
      };
    }
    function CreateUseBuiltinInvertForFeedbacksUpgradeScript(upgradeMap) {
      return (_context, props) => {
        const changedFeedbacks = [];
        for (const feedback of props.feedbacks) {
          const propertyName = upgradeMap[feedback.feedbackId];
          if (typeof propertyName !== "string")
            continue;
          const rawValue = feedback.options[propertyName];
          if (rawValue === void 0)
            continue;
          delete feedback.options[propertyName];
          feedback.isInverted = rawValue === "true" || Boolean(rawValue) === true || Number(rawValue) > 0;
          changedFeedbacks.push(feedback);
        }
        return {
          updatedConfig: null,
          updatedSecrets: null,
          updatedActions: [],
          updatedFeedbacks: changedFeedbacks
        };
      };
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/variable.js
var require_variable = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/variable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/index.js
var require_module_api = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_action(), exports2);
    tslib_1.__exportStar(require_base2(), exports2);
    tslib_1.__exportStar(require_common(), exports2);
    tslib_1.__exportStar(require_config(), exports2);
    tslib_1.__exportStar(require_enums(), exports2);
    tslib_1.__exportStar(require_feedback2(), exports2);
    tslib_1.__exportStar(require_http(), exports2);
    tslib_1.__exportStar(require_input(), exports2);
    tslib_1.__exportStar(require_preset(), exports2);
    tslib_1.__exportStar(require_style(), exports2);
    tslib_1.__exportStar(require_upgrade2(), exports2);
    tslib_1.__exportStar(require_variable(), exports2);
  }
});

// node_modules/@companion-module/base/dist/common/osc.js
var require_osc = __commonJS({
  "node_modules/@companion-module/base/dist/common/osc.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/common/json-value.js
var require_json_value = __commonJS({
  "node_modules/@companion-module/base/dist/common/json-value.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/helpers/tcp.js
var require_tcp = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/tcp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TCPHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var net_1 = tslib_1.__importDefault(require("net"));
    var eventemitter3_1 = require_eventemitter32();
    var enums_js_1 = require_enums();
    var TCPHelper = class extends eventemitter3_1.EventEmitter {
      #host;
      #port;
      _socket;
      #options;
      #connected = false;
      #connecting = false;
      #destroyed = false;
      #lastStatus;
      #reconnectTimer;
      #missingErrorHandlerTimer;
      get isConnected() {
        return this.#connected;
      }
      get isConnecting() {
        return this.#connecting;
      }
      get isDestroyed() {
        return this.#destroyed;
      }
      constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = {
          reconnect_interval: 2e3,
          reconnect: true,
          ...options
        };
        this._socket = new net_1.default.Socket();
        this._socket.setKeepAlive(true);
        this._socket.setNoDelay(true);
        this._socket.on("error", (err) => {
          this.#connecting = false;
          this.#connected = false;
          if (this.#options.reconnect) {
            this.#queueReconnect();
          }
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, err.message);
          this.emit("error", err);
        });
        this._socket.on("ready", () => {
          this.#connected = true;
          this.#connecting = false;
          this.#new_status(enums_js_1.InstanceStatus.Ok);
          this.emit("connect");
        });
        this._socket.on("end", () => {
          this.#connected = false;
          this.#new_status(enums_js_1.InstanceStatus.Disconnected);
          if (!this.#connecting && this.#options.reconnect) {
            this.#queueReconnect();
          }
          this.emit("end");
        });
        this._socket.on("data", (data) => this.emit("data", data));
        this._socket.on("drain", () => this.emit("drain"));
        setImmediate(() => {
          if (!this.#destroyed)
            this.connect();
        });
        this.#missingErrorHandlerTimer = setTimeout(() => {
          this.#missingErrorHandlerTimer = void 0;
          if (!this.#destroyed && !this.listenerCount("error")) {
            console.error(`Danger: TCP client for ${this.#host}:${this.#port} is missing an error handler!`);
          }
        }, 5e3);
      }
      connect() {
        if (this.#destroyed)
          throw new Error("Cannot connect destroyed socket");
        if (this.#connecting)
          return false;
        this.#connecting = true;
        this._socket.connect(this.#port, this.#host);
        return true;
      }
      async send(message) {
        if (this.#destroyed || this._socket.destroyed)
          throw new Error("Cannot write to destroyed socket");
        if (!message || !message.length)
          throw new Error("No message to send");
        if (!this.#connected) {
          return false;
        }
        try {
          return new Promise((resolve, reject) => {
            this._socket.write(message, (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(true);
            });
          });
        } catch (error) {
          this.#connected = false;
          const error2 = error instanceof Error ? error : new Error(`${error}`);
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, error2.message);
          this.emit("error", error2);
          throw error2;
        }
      }
      destroy() {
        this.#destroyed = true;
        if (this.#reconnectTimer !== void 0) {
          clearTimeout(this.#reconnectTimer);
          this.#reconnectTimer = void 0;
        }
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this._socket.removeAllListeners();
        this.removeAllListeners();
        this._socket.destroy();
      }
      #queueReconnect() {
        if (this.#reconnectTimer !== void 0) {
          clearTimeout(this.#reconnectTimer);
        }
        this.#reconnectTimer = setTimeout(() => {
          this.#reconnectTimer = void 0;
          this.#new_status(enums_js_1.InstanceStatus.Connecting);
          this.connect();
        }, this.#options.reconnect_interval);
      }
      // Private function
      #new_status(status, message) {
        if (this.#lastStatus != status) {
          this.#lastStatus = status;
          this.emit("status_change", status, message);
        }
      }
    };
    exports2.TCPHelper = TCPHelper;
  }
});

// node_modules/@companion-module/base/dist/helpers/telnet.js
var require_telnet = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/telnet.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TelnetHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var eventemitter3_1 = tslib_1.__importDefault(require_eventemitter32());
    var stream_1 = require("stream");
    var tcp_js_1 = require_tcp();
    var DATA = 0;
    var SE = 240;
    var SB = 250;
    var WILL = 251;
    var WONT = 252;
    var DO = 253;
    var DONT = 254;
    var IAC = 255;
    var TelnetHelper = class extends eventemitter3_1.default {
      #tcp;
      #stream;
      #missingErrorHandlerTimer;
      get isConnected() {
        return this.#tcp.isConnected;
      }
      get isConnecting() {
        return this.#tcp.isConnecting;
      }
      get isDestroyed() {
        return this.#tcp.isDestroyed;
      }
      constructor(host, port, options) {
        super();
        this.#tcp = new tcp_js_1.TCPHelper(host, port, options);
        this.#stream = new TelnetStream();
        this.#tcp._socket.pipe(this.#stream);
        this.#tcp.on("connect", () => this.emit("connect"));
        this.#tcp.on("end", () => this.emit("end"));
        this.#tcp.on("error", (error) => this.emit("error", error));
        this.#tcp.on("status_change", (status, message) => this.emit("status_change", status, message));
        this.#stream.on("iac", (a, b) => this.emit("iac", a, b));
        this.#stream.on("sb", (buffer) => this.emit("sb", buffer));
        this.#stream.on("data", (data) => this.emit("data", data));
        this.#stream.on("drain", () => this.emit("drain"));
        this.#missingErrorHandlerTimer = setTimeout(() => {
          this.#missingErrorHandlerTimer = void 0;
          if (!this.isDestroyed && !this.listenerCount("error")) {
            console.error(`Danger: Telnet client for ${host}:${port} is missing an error handler!`);
          }
        }, 5e3);
      }
      connect() {
        return this.#tcp.connect();
      }
      async send(message) {
        return this.#tcp.send(message);
      }
      destroy() {
        this.#tcp.destroy();
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this.#stream.removeAllListeners();
        this.#stream.destroy();
      }
    };
    exports2.TelnetHelper = TelnetHelper;
    var TelnetStream = class extends stream_1.Transform {
      #buffer;
      #subbuffer;
      #state;
      constructor(options) {
        super(options);
        this.#buffer = Buffer.alloc(0);
        this.#subbuffer = Buffer.alloc(0);
        this.#state = DATA;
      }
      _transform(obj, _encoding, callback) {
        for (let i = 0; i < obj.length; ++i) {
          this.#handleByte(obj[i]);
        }
        const data = this.#getData();
        if (data.length) {
          this.push(data);
        }
        callback();
      }
      #handleByte(byte) {
        if (this.#state === DATA) {
          if (byte === IAC) {
            this.#state = IAC;
            return;
          }
          this.#buffer = Buffer.concat([this.#buffer, Buffer.from([byte])]);
        } else if (this.#state === IAC) {
          switch (byte) {
            case SB:
            case WILL:
            case WONT:
            case DO:
            case DONT:
              this.#state = byte;
              break;
            default:
              this.#state = DATA;
              break;
          }
        } else if (this.#state >= WILL && this.#state <= DONT) {
          let iac = void 0;
          switch (this.#state) {
            case WILL:
              iac = "WILL";
              break;
            case WONT:
              iac = "WONT";
              break;
            case DO:
              iac = "DO";
              break;
            case DONT:
              iac = "DONT";
              break;
            default:
              return;
          }
          this.emit("iac", iac, byte);
          this.#state = DATA;
          return;
        } else if (this.#state === SB) {
          if (byte === SE) {
            this.emit("sb", this.#subbuffer);
            this.#state = DATA;
            this.#subbuffer = Buffer.alloc(0);
            return;
          }
          this.#subbuffer = Buffer.concat([this.#subbuffer, Buffer.from([byte])]);
        }
      }
      #getData() {
        const buff = this.#buffer;
        this.#buffer = Buffer.alloc(0);
        return buff;
      }
    };
  }
});

// node_modules/@companion-module/base/dist/helpers/udp.js
var require_udp = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/udp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UDPHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dgram_1 = tslib_1.__importDefault(require("dgram"));
    var eventemitter3_1 = require_eventemitter32();
    var enums_js_1 = require_enums();
    var UDPHelper = class extends eventemitter3_1.EventEmitter {
      #host;
      #port;
      #socket;
      #options;
      #destroyed = false;
      #lastStatus;
      #missingErrorHandlerTimer;
      get isDestroyed() {
        return this.#destroyed;
      }
      constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = { ...options };
        this.#socket = dgram_1.default.createSocket("udp4");
        try {
          this.#socket.bind(this.#options.bind_port || 0, this.#options.bind_ip);
        } catch (_e) {
          throw new Error(`Unable to bind to ip/port: ${this.#options.bind_ip || "0.0.0.0"}:${this.#options.bind_port || 0}`);
        }
        if (this.#options.ttl !== void 0) {
          this.#socket.setTTL(this.#options.ttl);
        }
        if (this.#options.multicast_ttl !== void 0) {
          this.#socket.setMulticastTTL(this.#options.multicast_ttl);
        }
        this.#socket.on("error", (error) => {
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, error.message);
          this.emit("error", error);
        });
        this.#socket.on("listening", () => {
          if (this.#options.broadcast) {
            this.#socket.setBroadcast(true);
          }
          if (this.#options.multicast_interface) {
            this.#socket.setMulticastInterface(this.#options.multicast_interface);
          }
          this.#new_status(enums_js_1.InstanceStatus.Ok);
          this.emit("listening");
        });
        this.#socket.on("message", (data, rinfo) => this.emit("data", data, rinfo));
        this.#missingErrorHandlerTimer = setTimeout(() => {
          if (!this.#destroyed && !this.listenerCount("error")) {
            console.error(`Danger: UDP socket for ${this.#host}:${this.#port} is missing an error handler!`);
          }
        }, 5e3);
      }
      async send(message) {
        if (this.#destroyed)
          throw new Error("Cannot write to destroyed socket");
        if (!message || !message.length)
          throw new Error("No message to send");
        return new Promise((resolve, reject) => {
          this.#socket.send(message, this.#port, this.#host, (error) => {
            if (error) {
              reject(error);
              return;
            }
            resolve();
          });
        });
      }
      // addMembership(member) {
      // 	if (!this.bound) {
      // 		this.pending_memberships.push(member)
      // 	} else {
      // 		this.socket.addMembership(member)
      // 	}
      // }
      destroy() {
        this.#destroyed = true;
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this.#socket.removeAllListeners();
        this.#socket.close();
        this.removeAllListeners();
      }
      // Private function
      #new_status(status, message) {
        if (this.#lastStatus != status) {
          this.#lastStatus = status;
          this.emit("status_change", status, message);
        }
      }
    };
    exports2.UDPHelper = UDPHelper;
  }
});

// node_modules/@companion-module/base/dist/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_tcp(), exports2);
    tslib_1.__exportStar(require_telnet(), exports2);
    tslib_1.__exportStar(require_udp(), exports2);
  }
});

// node_modules/@companion-module/base/dist/host-api/versions.js
var require_versions = __commonJS({
  "node_modules/@companion-module/base/dist/host-api/versions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HostApiNodeJsIpc = void 0;
    exports2.HostApiNodeJsIpc = "nodejs-ipc";
  }
});

// node_modules/@companion-module/base/dist/entrypoint.js
var require_entrypoint = __commonJS({
  "node_modules/@companion-module/base/dist/entrypoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runEntrypoint = runEntrypoint2;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var versions_js_1 = require_versions();
    var promises_1 = tslib_1.__importDefault(require("fs/promises"));
    var util_js_1 = require_util();
    var ipc_wrapper_js_1 = require_ipc_wrapper();
    var path_1 = tslib_1.__importDefault(require("path"));
    var hasEntrypoint = false;
    var moduleInstance;
    function runEntrypoint2(factory, upgradeScripts) {
      Promise.resolve().then(async () => {
        if (hasEntrypoint)
          throw new Error(`runEntrypoint can only be called once`);
        hasEntrypoint = true;
        if (!upgradeScripts)
          upgradeScripts = [];
        if (!Array.isArray(upgradeScripts))
          throw new Error("upgradeScripts must be an array");
        for (const upgradeScript of upgradeScripts) {
          if (typeof upgradeScript !== "function")
            throw new Error("upgradeScripts must be an array of functions");
        }
        const manifestPath = process.env.MODULE_MANIFEST;
        if (!manifestPath)
          throw new Error("Module initialise is missing MODULE_MANIFEST");
        const manifestBlob = await promises_1.default.readFile(manifestPath);
        const manifestJson = JSON.parse(manifestBlob.toString());
        if (manifestJson.runtime?.api !== versions_js_1.HostApiNodeJsIpc)
          throw new Error(`Module manifest 'api' mismatch`);
        if (!manifestJson.runtime.apiVersion)
          throw new Error(`Module manifest 'apiVersion' missing`);
        let apiVersion = manifestJson.runtime.apiVersion;
        if (apiVersion === "0.0.0") {
          try {
            const baseJsonStr = await promises_1.default.readFile(path_1.default.join(__dirname, "../package.json"));
            const baseJson = JSON.parse(baseJsonStr.toString());
            if (baseJson.name === "@companion-module/base") {
              apiVersion = baseJson.version;
            }
          } catch (_e) {
            throw new Error("Failed to determine module api version");
          }
        }
        if (!process.send)
          throw new Error("Module is not being run with ipc");
        console.log(`Starting up module class: ${factory.name}`);
        const connectionId = process.env.CONNECTION_ID;
        if (typeof connectionId !== "string" || !connectionId)
          throw new Error("Module initialise is missing CONNECTION_ID");
        const verificationToken = process.env.VERIFICATION_TOKEN;
        if (typeof verificationToken !== "string" || !verificationToken)
          throw new Error("Module initialise is missing VERIFICATION_TOKEN");
        const ipcWrapper = new ipc_wrapper_js_1.IpcWrapper({}, (msg) => {
          process.send(msg);
        }, 5e3);
        process.once("message", (msg) => {
          ipcWrapper.receivedMessage(msg);
        });
        moduleInstance = new factory((0, util_js_1.literal)({
          id: connectionId,
          upgradeScripts,
          _isInstanceBaseProps: true
        }));
        ipcWrapper.sendWithCb("register", { apiVersion, connectionId, verificationToken }).then(() => {
          console.log(`Module-host accepted registration`);
        }, (err) => {
          console.error("Module registration failed", err);
          process.exit(11);
        });
      }).catch((e) => {
        console.error(`Failed to startup module:`);
        console.error(e.stack || e.message);
        process.exit(1);
      });
    }
  }
});

// node_modules/@companion-module/base/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@companion-module/base/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runEntrypoint = exports2.substituteEscapeCharacters = exports2.parseEscapeCharacters = exports2.assertNever = exports2.splitHex = exports2.splitHsv = exports2.splitHsl = exports2.splitRgb = exports2.combineRgb = exports2.literal = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_manifest(), exports2);
    tslib_1.__exportStar(require_module_api(), exports2);
    tslib_1.__exportStar(require_osc(), exports2);
    tslib_1.__exportStar(require_json_value(), exports2);
    var util_js_1 = require_util();
    Object.defineProperty(exports2, "literal", { enumerable: true, get: function() {
      return util_js_1.literal;
    } });
    Object.defineProperty(exports2, "combineRgb", { enumerable: true, get: function() {
      return util_js_1.combineRgb;
    } });
    Object.defineProperty(exports2, "splitRgb", { enumerable: true, get: function() {
      return util_js_1.splitRgb;
    } });
    Object.defineProperty(exports2, "splitHsl", { enumerable: true, get: function() {
      return util_js_1.splitHsl;
    } });
    Object.defineProperty(exports2, "splitHsv", { enumerable: true, get: function() {
      return util_js_1.splitHsv;
    } });
    Object.defineProperty(exports2, "splitHex", { enumerable: true, get: function() {
      return util_js_1.splitHex;
    } });
    Object.defineProperty(exports2, "assertNever", { enumerable: true, get: function() {
      return util_js_1.assertNever;
    } });
    Object.defineProperty(exports2, "parseEscapeCharacters", { enumerable: true, get: function() {
      return util_js_1.parseEscapeCharacters;
    } });
    Object.defineProperty(exports2, "substituteEscapeCharacters", { enumerable: true, get: function() {
      return util_js_1.substituteEscapeCharacters;
    } });
    tslib_1.__exportStar(require_helpers(), exports2);
    var entrypoint_js_1 = require_entrypoint();
    Object.defineProperty(exports2, "runEntrypoint", { enumerable: true, get: function() {
      return entrypoint_js_1.runEntrypoint;
    } });
  }
});

// node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/ws/lib/constants.js"(exports2, module2) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module2.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports2, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module2.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = require("bufferutil");
        module2.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports2, module2) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports2, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports2, module2) {
    "use strict";
    var { isUtf8 } = require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module2.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module2.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = require("utf-8-validate");
        module2.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports2, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module2.exports = Receiver2;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports2, module2) {
    "use strict";
    var { Duplex } = require("stream");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports2, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Duplex, Readable } = require("stream");
    var { URL } = require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter2 {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports2, module2) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream2;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports2, module2) {
    "use strict";
    var EventEmitter2 = require("events");
    var http = require("http");
    var { Duplex } = require("stream");
    var { createHash } = require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter2 {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// src/main.ts
var main_exports = {};
module.exports = __toCommonJS(main_exports);
var import_base3 = __toESM(require_dist2());

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);
var wrapper_default = import_websocket.default;

// src/ws-client.ts
var import_events = require("events");
var MIN_RECONNECT_MS = 1e3;
var MAX_RECONNECT_MS = 3e4;
var WsClient = class extends import_events.EventEmitter {
  constructor(url, authToken) {
    super();
    this.ws = null;
    this.reconnectTimer = null;
    this.currentBackoffMs = MIN_RECONNECT_MS;
    this.destroyed = false;
    this.url = url;
    this.authToken = authToken;
  }
  connect() {
    this.destroyed = false;
    this._connect();
  }
  _connect() {
    if (this.destroyed) return;
    if (this.ws) {
      try {
        this.ws.terminate();
      } catch (_) {
      }
      this.ws = null;
    }
    const headers = this.authToken ? { Authorization: `Bearer ${this.authToken}` } : void 0;
    const ws = new wrapper_default(this.url, { headers });
    this.ws = ws;
    ws.on("open", () => {
      if (this.ws !== ws) return;
      this.currentBackoffMs = MIN_RECONNECT_MS;
      this.emit("connected");
    });
    ws.on("message", (data) => {
      if (this.ws !== ws) return;
      this.currentBackoffMs = MIN_RECONNECT_MS;
      try {
        const msg = JSON.parse(data.toString());
        this.emit("message", msg);
      } catch (e) {
      }
    });
    ws.on("close", () => {
      if (this.ws !== ws) return;
      this.ws = null;
      this.emit("disconnected");
      this._scheduleReconnect();
    });
    ws.on("error", (_err) => {
      if (this.ws !== ws) return;
    });
  }
  _scheduleReconnect() {
    if (this.destroyed) return;
    const delay = this.currentBackoffMs;
    this.currentBackoffMs = Math.min(this.currentBackoffMs * 2, MAX_RECONNECT_MS);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this._connect();
    }, delay);
  }
  send(msg) {
    if (this.ws && this.ws.readyState === wrapper_default.OPEN) {
      this.ws.send(JSON.stringify(msg));
    }
  }
  destroy() {
    this.destroyed = true;
    if (this.reconnectTimer !== null) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      try {
        this.ws.terminate();
      } catch (_) {
      }
      this.ws = null;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(event, ...args) {
    return super.emit(event, ...args);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    return super.on(event, listener);
  }
};

// src/sat.ts
var TOKEN_EXCHANGE_URL = "https://token.svc.prod.osaas.io/servicetoken";
var OPEN_LIVE_SERVICE_ID = "eyevinn-open-live";
var REFRESH_BUFFER_MS = 5 * 60 * 1e3;
var cache = null;
function isExpiringSoon(c) {
  return Date.now() >= c.expiresAt - REFRESH_BUFFER_MS;
}
async function getSat(pat) {
  if (!pat) return void 0;
  if (cache && !isExpiringSoon(cache)) return cache.token;
  const res = await fetch(TOKEN_EXCHANGE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "x-pat-jwt": `Bearer ${pat}`
    },
    body: JSON.stringify({ serviceId: OPEN_LIVE_SERVICE_ID })
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`SAT exchange failed (${res.status}): ${body.slice(0, 200)}`);
  }
  const data = await res.json();
  cache = { token: data.token, expiresAt: data.expiry * 1e3 };
  return cache.token;
}
function invalidateSat() {
  cache = null;
}

// src/variables.ts
function getVariableDefinitions() {
  const defs = [
    { variableId: "selected_production_name", name: "Name of selected production" },
    { variableId: "production_name", name: "Name of connected production" },
    { variableId: "pgm_source", name: "Current PGM source ID" },
    { variableId: "pvw_source", name: "Current PVW source ID" },
    { variableId: "on_air", name: "On Air status (true/false)" },
    { variableId: "ftb_active", name: "Fade to Black Active (true/false)" },
    { variableId: "ovl_alpha", name: "Overlay Alpha (0.0\u20131.0)" },
    { variableId: "source_count", name: "Number of sources in the current production" },
    { variableId: "navigate_page", name: "Page to navigate to after selecting a production (1 = stay, 2 = control)" }
  ];
  for (let i = 1; i <= 8; i++) {
    defs.push({ variableId: `source_${i}_name`, name: `Source ${i} name` });
  }
  for (let i = 1; i <= 31; i++) {
    defs.push({ variableId: `prod_${i}_name`, name: `Production slot ${i} name` });
  }
  return defs;
}
function emptySourceVars() {
  const v = { source_count: "0" };
  for (let i = 1; i <= 8; i++) v[`source_${i}_name`] = "";
  return v;
}
function sourceVarsFromList(sources) {
  const v = { source_count: String(sources.length) };
  for (let i = 1; i <= 8; i++) {
    v[`source_${i}_name`] = sources[i - 1]?.name ?? "";
  }
  return v;
}
function emptyProductionSlotVars() {
  const v = {};
  for (let i = 1; i <= 31; i++) v[`prod_${i}_name`] = "";
  return v;
}
function productionSlotVarsFromList(productions) {
  const v = {};
  for (let i = 1; i <= 31; i++) {
    v[`prod_${i}_name`] = productions[i - 1]?.name ?? "";
  }
  return v;
}

// src/actions.ts
var sourceIndexOption = {
  id: "sourceIndex",
  type: "number",
  label: "Source Slot (1\u20138)",
  default: 1,
  min: 1,
  max: 8
};
function getActionDefinitions(getWsClient, production, getState, callbacks) {
  const graphics = production?.graphics ?? [];
  const macros = production?.macros ?? [];
  const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }));
  const macroChoices = macros.map((m) => ({ id: m.id, label: m.label }));
  function send(msg) {
    const client = getWsClient();
    if (client) client.send(msg);
  }
  function resolveMixerInput(sourceIndex) {
    return production?.sources[sourceIndex - 1]?.mixerInput ?? null;
  }
  const transitionTypeChoices = [
    { id: "mix", label: "Mix" },
    { id: "dip", label: "Dip" },
    { id: "push", label: "Push" }
  ];
  const ftbModeChoices = [
    { id: "toggle", label: "Toggle" },
    { id: "on", label: "Force On" },
    { id: "off", label: "Force Off" }
  ];
  return {
    // -----------------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------------
    select_production: {
      name: "Select Production",
      description: 'Connect to a specific Open Live production by its internal ID. Use "Select Production by Slot" for button-driven workflows.',
      options: [
        {
          id: "productionId",
          type: "textinput",
          label: "Production ID",
          default: ""
        }
      ],
      callback: (action) => {
        const id = String(action.options["productionId"] ?? "");
        if (id) callbacks.selectProduction(id);
      }
    },
    select_production_slot: {
      name: "Select Production by Slot",
      description: "Connect to the production in slot 1\u201331 of the landing list. Empty slots do nothing. Used by the default Page 1 buttons.",
      options: [
        {
          id: "slot",
          type: "number",
          label: "Production Slot (1\u201331)",
          default: 1,
          min: 1,
          max: 31
        }
      ],
      callback: (action) => {
        const slot = Number(action.options["slot"] ?? 1);
        const prod = getState().productions[slot - 1];
        if (prod?._id) {
          callbacks.setVariable("navigate_page", "2");
          callbacks.selectProduction(prod._id);
        } else {
          callbacks.setVariable("navigate_page", "1");
        }
      }
    },
    back_to_productions: {
      name: "Back to Production List",
      description: "Disconnect from the current production and return to landing mode so a different production can be selected.",
      options: [],
      callback: () => {
        callbacks.backToProductions();
      }
    },
    refresh_productions: {
      name: "Refresh Production List",
      description: "Re-fetch active productions from Open Live and update the landing page slot variables. Assign to the REFRESH button on Page 1.",
      options: [],
      callback: () => {
        callbacks.refreshProductions();
      }
    },
    // -----------------------------------------------------------------------
    // Switching
    // -----------------------------------------------------------------------
    cut: {
      name: "Cut to Source Slot",
      description: "Hard-cut source slot N directly to program output, bypassing preview. Use on the CUT bus (Row 2) of the M/E page.",
      options: [sourceIndexOption],
      callback: (action) => {
        const idx = Number(action.options["sourceIndex"] ?? 1);
        const mixerInput = resolveMixerInput(idx);
        if (!mixerInput) return;
        send({ type: "CUT", mixerInput });
      }
    },
    set_pvw: {
      name: "Load Source Slot to Preview",
      description: "Stage source slot N on the preview output. No-op if that source is already live on PGM. Use on the PVW bus (Row 1) of the M/E page.",
      options: [sourceIndexOption],
      callback: (action) => {
        const idx = Number(action.options["sourceIndex"] ?? 1);
        const mixerInput = resolveMixerInput(idx);
        if (!mixerInput) return;
        if (getState().pgm === mixerInput) return;
        send({ type: "SET_PVW", mixerInput });
      }
    },
    transition: {
      name: "Transition to Source Slot",
      description: "Transition source slot N to program using the chosen effect and duration. Sets PVW first, then fires the transition.",
      options: [
        sourceIndexOption,
        {
          id: "transitionType",
          type: "dropdown",
          label: "Transition Type",
          choices: transitionTypeChoices,
          default: "mix"
        },
        {
          id: "durationMs",
          type: "number",
          label: "Duration (ms)",
          default: 1e3,
          min: 0,
          max: 1e4
        }
      ],
      callback: (action) => {
        const idx = Number(action.options["sourceIndex"] ?? 1);
        const mixerInput = resolveMixerInput(idx);
        if (!mixerInput) return;
        send({
          type: "TRANSITION",
          mixerInput,
          transitionType: String(action.options["transitionType"] ?? "mix"),
          durationMs: Number(action.options["durationMs"] ?? 1e3)
        });
      }
    },
    auto: {
      name: "Auto (Transition Current PVW to PGM)",
      description: "Fire a transition from whatever is currently on preview to program. Does nothing if preview is empty. Clears FTB if active.",
      options: [
        {
          id: "transitionType",
          type: "dropdown",
          label: "Transition Type",
          choices: transitionTypeChoices,
          default: "mix"
        },
        {
          id: "durationMs",
          type: "number",
          label: "Duration (ms)",
          default: 1e3,
          min: 0,
          max: 1e4
        }
      ],
      callback: (action) => {
        const pvw = getState().pvw;
        if (!pvw) return;
        send({
          type: "TRANSITION",
          mixerInput: pvw,
          transitionType: String(action.options["transitionType"] ?? "mix"),
          durationMs: Number(action.options["durationMs"] ?? 1e3)
        });
        if (getState().ftbActive) {
          send({ type: "FTB", active: false, durationMs: 0 });
        }
      }
    },
    take: {
      name: "Take (Cut PVW to PGM)",
      description: "Hard-cut whatever is on preview to program instantly. Equivalent to pressing the T-bar all the way on a hardware mixer. Clears FTB if active.",
      options: [],
      callback: () => {
        send({ type: "TAKE" });
        if (getState().ftbActive) {
          send({ type: "FTB", active: false, durationMs: 0 });
        }
      }
    },
    // -----------------------------------------------------------------------
    // Fade to Black
    // -----------------------------------------------------------------------
    ftb: {
      name: "Fade to Black",
      description: "Fade the program output to black. Toggle mode flips between on and off. FTB is automatically cleared on the next CUT or AUTO.",
      options: [
        {
          id: "mode",
          type: "dropdown",
          label: "Mode",
          choices: ftbModeChoices,
          default: "toggle"
        },
        {
          id: "durationMs",
          type: "number",
          label: "Duration (ms)",
          default: 1e3,
          min: 0,
          max: 1e4
        }
      ],
      callback: (action) => {
        const mode = String(action.options["mode"] ?? "toggle");
        const durationMs = Number(action.options["durationMs"] ?? 1e3);
        if (mode === "on") {
          send({ type: "FTB", active: true, durationMs });
        } else if (mode === "off") {
          send({ type: "FTB", active: false, durationMs });
        } else {
          send({ type: "FTB", durationMs });
        }
      }
    },
    // -----------------------------------------------------------------------
    // OVL Alpha
    // -----------------------------------------------------------------------
    set_ovl_alpha: {
      name: "Set Overlay Alpha",
      description: "Set the opacity of the overlay layer as a percentage (0 = transparent, 100 = fully opaque).",
      options: [
        {
          id: "alpha",
          type: "number",
          label: "Overlay Alpha %",
          default: 100,
          min: 0,
          max: 100
        }
      ],
      callback: (action) => {
        send({ type: "SET_OVL", alpha: Number(action.options["alpha"] ?? 100) / 100 });
      }
    },
    // -----------------------------------------------------------------------
    // Stream Control
    // -----------------------------------------------------------------------
    go_live: {
      name: "Go Live",
      description: "Start the outgoing stream. The On Air feedback turns red once the stream is active.",
      options: [],
      callback: () => {
        send({ type: "GO_LIVE" });
      }
    },
    cut_stream: {
      name: "Cut Stream",
      description: "Stop the outgoing stream immediately.",
      options: [],
      callback: () => {
        send({ type: "CUT_STREAM" });
      }
    },
    // -----------------------------------------------------------------------
    // Graphics
    // -----------------------------------------------------------------------
    graphic_on: {
      name: "Graphic On",
      description: "Make a named graphic overlay visible on the output. The Graphic Active feedback lights when it is showing.",
      options: [
        {
          id: "overlayId",
          type: "dropdown",
          label: "Graphic",
          choices: graphicChoices.length > 0 ? graphicChoices : [{ id: "", label: "(no graphics)" }],
          default: graphicChoices[0]?.id ?? "",
          allowCustom: true
        }
      ],
      callback: (action) => {
        send({ type: "GRAPHIC_ON", overlayId: String(action.options["overlayId"] ?? "") });
      }
    },
    graphic_off: {
      name: "Graphic Off",
      description: "Hide a named graphic overlay from the output.",
      options: [
        {
          id: "overlayId",
          type: "dropdown",
          label: "Graphic",
          choices: graphicChoices.length > 0 ? graphicChoices : [{ id: "", label: "(no graphics)" }],
          default: graphicChoices[0]?.id ?? "",
          allowCustom: true
        }
      ],
      callback: (action) => {
        send({ type: "GRAPHIC_OFF", overlayId: String(action.options["overlayId"] ?? "") });
      }
    },
    // -----------------------------------------------------------------------
    // DSK
    // -----------------------------------------------------------------------
    dsk_toggle: {
      name: "DSK Toggle",
      description: 'Toggle a downstream keyer layer on or off. Enable "Use Force Visible" to set a specific state instead of toggling.',
      options: [
        {
          id: "layer",
          type: "number",
          label: "DSK Layer",
          default: 1,
          min: 1,
          max: 8
        },
        {
          id: "visible",
          type: "checkbox",
          label: "Force Visible (unchecked = toggle)",
          default: false
        },
        {
          id: "useForceVisible",
          type: "checkbox",
          label: "Use Force Visible value",
          default: false
        }
      ],
      callback: (action) => {
        const layer = Number(action.options["layer"] ?? 1);
        const useForce = Boolean(action.options["useForceVisible"]);
        if (useForce) {
          send({ type: "DSK_TOGGLE", layer, visible: Boolean(action.options["visible"]) });
        } else {
          send({ type: "DSK_TOGGLE", layer });
        }
      }
    },
    // -----------------------------------------------------------------------
    // Macros
    // -----------------------------------------------------------------------
    macro_exec: {
      name: "Execute Macro",
      description: "Run a production macro defined in Open Live. Macros can batch multiple switcher operations into a single button press.",
      options: [
        {
          id: "macroId",
          type: "dropdown",
          label: "Macro",
          choices: macroChoices.length > 0 ? macroChoices : [{ id: "", label: "(no macros)" }],
          default: macroChoices[0]?.id ?? "",
          allowCustom: true
        }
      ],
      callback: (action) => {
        send({ type: "MACRO_EXEC", macroId: String(action.options["macroId"] ?? "") });
      }
    }
  };
}

// src/feedbacks.ts
var import_base = __toESM(require_dist2());
var sourceIndexOption2 = {
  id: "sourceIndex",
  type: "number",
  label: "Source Slot (1\u20138)",
  default: 1,
  min: 1,
  max: 8
};
function getFeedbackDefinitions(getState, production, log) {
  const graphics = production?.graphics ?? [];
  const graphicChoices = graphics.map((g) => ({ id: g.id, label: g.name }));
  return {
    pgm_tally: {
      type: "boolean",
      name: "PGM Tally",
      description: "Active when Source Slot N is on PGM",
      options: [sourceIndexOption2],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(255, 0, 0),
        color: (0, import_base.combineRgb)(255, 255, 255)
      },
      callback: (feedback) => {
        const state = getState();
        const idx = Number(feedback.options["sourceIndex"] ?? 1);
        const source = production?.sources[idx - 1];
        if (!source) return false;
        const result = state.pgm !== null && state.pgm === source.mixerInput;
        log?.("debug", `pgm_tally[${idx}]: pgm=${state.pgm ?? "null"}, mixerInput=${source.mixerInput}, result=${result}`);
        return result;
      }
    },
    pvw_tally: {
      type: "boolean",
      name: "PVW Tally",
      description: "Active when Source Slot N is on PVW",
      options: [sourceIndexOption2],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(0, 200, 0),
        color: (0, import_base.combineRgb)(255, 255, 255)
      },
      callback: (feedback) => {
        const state = getState();
        const idx = Number(feedback.options["sourceIndex"] ?? 1);
        const source = production?.sources[idx - 1];
        if (!source) return false;
        const result = state.pvw !== null && state.pvw === source.mixerInput;
        log?.("debug", `pvw_tally[${idx}]: pvw=${state.pvw ?? "null"}, mixerInput=${source.mixerInput}, result=${result}`);
        return result;
      }
    },
    on_air: {
      type: "boolean",
      name: "On Air",
      description: "Active when the production is on air",
      options: [],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(255, 0, 0),
        color: (0, import_base.combineRgb)(255, 255, 255)
      },
      callback: () => getState().onAir
    },
    ftb_active: {
      type: "boolean",
      name: "Fade to Black Active",
      description: "Active when the production is faded to black",
      options: [],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(255, 0, 0),
        color: (0, import_base.combineRgb)(255, 255, 255)
      },
      callback: () => getState().ftbActive
    },
    graphic_active: {
      type: "boolean",
      name: "Graphic Active",
      description: "Active when the specified graphic overlay is visible",
      options: [
        {
          id: "overlayId",
          type: "dropdown",
          label: "Graphic",
          choices: graphicChoices.length > 0 ? graphicChoices : [{ id: "", label: "(no graphics)" }],
          default: graphicChoices[0]?.id ?? "",
          allowCustom: true
        }
      ],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(255, 200, 0),
        color: (0, import_base.combineRgb)(0, 0, 0)
      },
      callback: (feedback) => {
        const overlayId = String(feedback.options["overlayId"] ?? "");
        return getState().graphics[overlayId] === true;
      }
    },
    production_slot_occupied: {
      type: "boolean",
      name: "Production Slot Occupied",
      description: "Active when the given production slot has an active production",
      options: [
        {
          id: "slot",
          type: "number",
          label: "Slot (1\u201331)",
          default: 1,
          min: 1,
          max: 31
        }
      ],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(0, 150, 0),
        color: (0, import_base.combineRgb)(255, 255, 255)
      },
      callback: (feedback) => {
        const slot = Number(feedback.options["slot"] ?? 1);
        return getState().productions[slot - 1] != null;
      }
    },
    dsk_visible: {
      type: "boolean",
      name: "DSK Visible",
      description: "Active when the specified DSK layer is visible",
      options: [
        {
          id: "layer",
          type: "number",
          label: "DSK Layer",
          default: 1,
          min: 1,
          max: 8
        }
      ],
      defaultStyle: {
        bgcolor: (0, import_base.combineRgb)(255, 200, 0),
        color: (0, import_base.combineRgb)(0, 0, 0)
      },
      callback: (feedback) => {
        const layer = Number(feedback.options["layer"] ?? 1);
        return getState().dskLayers[layer] === true;
      }
    }
  };
}

// src/presets.ts
var import_base2 = __toESM(require_dist2());
var C = {
  black: (0, import_base2.combineRgb)(0, 0, 0),
  white: (0, import_base2.combineRgb)(255, 255, 255),
  grey: (0, import_base2.combineRgb)(80, 80, 80),
  dark: (0, import_base2.combineRgb)(30, 30, 30),
  darkBlue: (0, import_base2.combineRgb)(0, 40, 100),
  darkRed: (0, import_base2.combineRgb)(160, 0, 0),
  navy: (0, import_base2.combineRgb)(0, 0, 100),
  slate: (0, import_base2.combineRgb)(50, 50, 80),
  yellow: (0, import_base2.combineRgb)(200, 180, 0),
  blue: (0, import_base2.combineRgb)(0, 80, 180),
  green: (0, import_base2.combineRgb)(0, 150, 0),
  brightGreen: (0, import_base2.combineRgb)(0, 200, 0),
  red: (0, import_base2.combineRgb)(255, 0, 0)
};
function getLandingPresets(_productions) {
  const presets = {};
  presets["refresh_productions"] = {
    type: "button",
    category: "Productions",
    name: "Refresh Productions",
    style: { text: "REFRESH", size: "14", color: C.white, bgcolor: C.darkBlue },
    feedbacks: [],
    steps: [{ down: [{ actionId: "refresh_productions", options: {} }], up: [] }]
  };
  for (let slot = 1; slot <= 31; slot++) {
    presets[`production_slot_${slot}`] = {
      type: "button",
      category: "Productions",
      name: `Production Slot ${slot}`,
      style: {
        text: `$(OpenLive:prod_${slot}_name)`,
        size: "auto",
        color: C.white,
        bgcolor: C.black,
        alignment: "center:center"
      },
      feedbacks: [
        {
          feedbackId: "production_slot_occupied",
          options: { slot },
          style: { bgcolor: C.green, color: C.white }
        }
      ],
      steps: [
        { down: [{ actionId: "select_production_slot", options: { slot } }], up: [] }
      ]
    };
  }
  return presets;
}
function getControlPresets(production) {
  const presets = {};
  const graphics = production?.graphics ?? [];
  const macros = production?.macros ?? [];
  presets["back_to_productions"] = {
    type: "button",
    category: "Navigation",
    name: "Back to Productions",
    style: { text: "\u2190 BACK", size: "18", color: C.white, bgcolor: C.darkBlue },
    feedbacks: [],
    steps: [{ down: [{ actionId: "back_to_productions", options: {} }], up: [] }]
  };
  for (let i = 1; i <= 8; i++) {
    presets[`pgm_indicator_${i}`] = {
      type: "button",
      category: "Program (PGM)",
      name: `PGM Indicator \u2014 Source ${i}`,
      style: {
        text: `$(OpenLive:source_${i}_name)`,
        size: "auto",
        color: C.grey,
        bgcolor: C.dark
      },
      feedbacks: [
        {
          feedbackId: "pgm_tally",
          options: { sourceIndex: i },
          style: { bgcolor: C.red, color: C.white }
        }
      ],
      steps: [{ down: [], up: [] }]
    };
  }
  for (let i = 1; i <= 8; i++) {
    presets[`pvw_selector_${i}`] = {
      type: "button",
      category: "Preview (PVW)",
      name: `PVW Selector \u2014 Source ${i}`,
      style: {
        text: `$(OpenLive:source_${i}_name)`,
        size: "auto",
        color: C.white,
        bgcolor: C.dark
      },
      feedbacks: [
        {
          // Dims when this slot is on PGM (listed first = lower priority)
          feedbackId: "pgm_tally",
          options: { sourceIndex: i },
          style: { bgcolor: C.dark, color: C.grey }
        },
        {
          // Bright green when this slot is on PVW (listed last = wins)
          feedbackId: "pvw_tally",
          options: { sourceIndex: i },
          style: { bgcolor: C.brightGreen, color: C.white }
        }
      ],
      steps: [
        { down: [{ actionId: "set_pvw", options: { sourceIndex: i } }], up: [] }
      ]
    };
  }
  const autoVariants = [
    { key: "auto_mix_500ms", label: "AUTO\nMIX 0.5s", type: "mix", ms: 500 },
    { key: "auto_mix_1s", label: "AUTO\nMIX 1s", type: "mix", ms: 1e3 },
    { key: "auto_mix_2s", label: "AUTO\nMIX 2s", type: "mix", ms: 2e3 },
    { key: "auto_mix_3s", label: "AUTO\nMIX 3s", type: "mix", ms: 3e3 },
    { key: "auto_dip_1s", label: "AUTO\nDIP 1s", type: "dip", ms: 1e3 },
    { key: "auto_push_1s", label: "AUTO\nPUSH 1s", type: "push", ms: 1e3 }
  ];
  for (const v of autoVariants) {
    presets[v.key] = {
      type: "button",
      category: "Transitions",
      name: v.label.replace("\n", " "),
      style: { text: v.label, size: "14", color: C.black, bgcolor: C.white },
      feedbacks: [],
      steps: [
        { down: [{ actionId: "auto", options: { transitionType: v.type, durationMs: v.ms } }], up: [] }
      ]
    };
  }
  presets["take"] = {
    type: "button",
    category: "Transitions",
    name: "CUT (PVW \u2192 PGM)",
    style: { text: "CUT", size: "18", color: C.black, bgcolor: C.white },
    feedbacks: [],
    steps: [{ down: [{ actionId: "take", options: {} }], up: [] }]
  };
  presets["ftb_toggle"] = {
    type: "button",
    category: "Fade to Black",
    name: "FTB Toggle",
    style: { text: "FTB", size: "18", color: C.white, bgcolor: C.dark },
    feedbacks: [
      { feedbackId: "ftb_active", options: {}, style: { bgcolor: C.red, color: C.white } }
    ],
    steps: [
      { down: [{ actionId: "ftb", options: { mode: "toggle", durationMs: 1e3 } }], up: [] }
    ]
  };
  presets["ftb_on"] = {
    type: "button",
    category: "Fade to Black",
    name: "FTB On",
    style: { text: "FTB\nON", size: "18", color: C.white, bgcolor: C.darkRed },
    feedbacks: [
      { feedbackId: "ftb_active", options: {}, style: { bgcolor: C.red, color: C.white } }
    ],
    steps: [{ down: [{ actionId: "ftb", options: { mode: "on", durationMs: 1e3 } }], up: [] }]
  };
  presets["ftb_off"] = {
    type: "button",
    category: "Fade to Black",
    name: "FTB Off",
    style: { text: "FTB\nOFF", size: "18", color: C.white, bgcolor: C.dark },
    feedbacks: [],
    steps: [{ down: [{ actionId: "ftb", options: { mode: "off", durationMs: 1e3 } }], up: [] }]
  };
  for (const pct of [0, 25, 50, 75, 100]) {
    presets[`ovl_${pct}`] = {
      type: "button",
      category: "OVL Alpha",
      name: `OVL ${pct}%`,
      style: { text: `OVL
${pct}%`, size: "14", color: C.white, bgcolor: C.slate },
      feedbacks: [],
      steps: [
        { down: [{ actionId: "set_ovl_alpha", options: { alpha: pct } }], up: [] }
      ]
    };
  }
  for (const gfx of graphics) {
    presets[`gfx_${gfx.id}_on`] = {
      type: "button",
      category: "Graphics",
      name: `${gfx.name} On`,
      style: { text: `${gfx.name}
ON`, size: "14", color: C.white, bgcolor: C.dark },
      feedbacks: [
        { feedbackId: "graphic_active", options: { overlayId: gfx.id }, style: { bgcolor: C.yellow, color: C.black } }
      ],
      steps: [{ down: [{ actionId: "graphic_on", options: { overlayId: gfx.id } }], up: [] }]
    };
    presets[`gfx_${gfx.id}_off`] = {
      type: "button",
      category: "Graphics",
      name: `${gfx.name} Off`,
      style: { text: `${gfx.name}
OFF`, size: "14", color: C.white, bgcolor: C.dark },
      feedbacks: [],
      steps: [{ down: [{ actionId: "graphic_off", options: { overlayId: gfx.id } }], up: [] }]
    };
  }
  for (let layer = 1; layer <= 4; layer++) {
    presets[`dsk_${layer}_toggle`] = {
      type: "button",
      category: "DSK",
      name: `DSK ${layer} Toggle`,
      style: { text: `DSK ${layer}`, size: "18", color: C.white, bgcolor: C.dark },
      feedbacks: [
        { feedbackId: "dsk_visible", options: { layer }, style: { bgcolor: C.yellow, color: C.black } }
      ],
      steps: [
        { down: [{ actionId: "dsk_toggle", options: { layer, visible: false, useForceVisible: false } }], up: [] }
      ]
    };
  }
  presets["go_live"] = {
    type: "button",
    category: "Stream Control",
    name: "Go Live (hold 2s)",
    style: { text: "GO\nLIVE", size: "18", color: C.white, bgcolor: C.green },
    feedbacks: [
      { feedbackId: "on_air", options: {}, style: { bgcolor: C.red, color: C.white } }
    ],
    // Note: hold-to-confirm (2s) is set up by setup-pages.py when placing the button.
    // The preset fires immediately on press — configure runWhileHeld in Companion if needed.
    steps: [{ down: [{ actionId: "go_live", options: {} }], up: [] }]
  };
  presets["cut_stream"] = {
    type: "button",
    category: "Stream Control",
    name: "End Stream (hold 2s)",
    style: { text: "END", size: "18", color: C.white, bgcolor: C.darkRed },
    feedbacks: [],
    steps: [{ down: [{ actionId: "cut_stream", options: {} }], up: [] }]
  };
  for (let i = 0; i < macros.length; i++) {
    const macro = macros[i];
    if (!macro) continue;
    presets[`macro_${i + 1}`] = {
      type: "button",
      category: "Macros",
      name: `Macro: ${macro.label}`,
      style: { text: macro.label, size: "14", color: C.white, bgcolor: C.navy },
      feedbacks: [],
      steps: [
        { down: [{ actionId: "macro_exec", options: { macroId: macro.id } }], up: [] }
      ]
    };
  }
  return presets;
}

// src/main.ts
var POLL_INTERVAL_MS = 1e4;
var RETRY_SETUP_MS = 15e3;
var OpenLiveInstance = class extends import_base3.InstanceBase {
  constructor() {
    super(...arguments);
    this.wsClient = null;
    this.selectedProduction = null;
    this.config = { apiUrl: "http://localhost:8080" };
    this.pollTimer = null;
    this.retryTimer = null;
    this.state = {
      productions: [],
      selectedProductionId: null,
      pgm: null,
      pvw: null,
      onAir: false,
      ftbActive: false,
      ovlAlpha: 1,
      graphics: {},
      dskLayers: {}
    };
  }
  // -----------------------------------------------------------------------
  // Lifecycle
  // -----------------------------------------------------------------------
  async init(config, _isFirstInit) {
    this.config = config;
    this.setVariableDefinitions(getVariableDefinitions());
    this.setVariableValues({
      selected_production_name: "",
      production_name: "",
      pgm_source: "",
      pvw_source: "",
      on_air: "false",
      ftb_active: "false",
      ovl_alpha: "1",
      navigate_page: "1",
      ...emptySourceVars(),
      ...emptyProductionSlotVars()
    });
    this.updateStatus(import_base3.InstanceStatus.Connecting, "Loading productions");
    await this._setup();
  }
  async destroy() {
    this._teardownWs();
    this._stopPolling();
    this._cancelRetry();
  }
  async configUpdated(config) {
    this.config = config;
    this._teardownWs();
    this._stopPolling();
    this._cancelRetry();
    await this._setup();
  }
  getConfigFields() {
    return [
      {
        type: "textinput",
        id: "apiUrl",
        label: "Open Live URL",
        default: "http://localhost:8080",
        width: 12,
        tooltip: "URL of the Open Live API \u2014 e.g. https://36e888958c.apps.osaas.io or http://localhost:3000"
      },
      {
        type: "textinput",
        id: "oscPat",
        label: "OSC PAT (optional)",
        default: "",
        width: 12,
        tooltip: "OSC Personal Access Token \u2014 required when connecting to an OSC-hosted Open Live instance"
      }
    ];
  }
  // -----------------------------------------------------------------------
  // Setup — landing mode
  // -----------------------------------------------------------------------
  async _setup() {
    const { apiUrl } = this.config;
    if (!apiUrl) {
      this.updateStatus(import_base3.InstanceStatus.BadConfig, "Open Live URL is required");
      return;
    }
    try {
      const all = await this._fetchProductions(apiUrl);
      this.log("debug", `Fetched ${all.length} production(s): ${JSON.stringify(all.map((p) => ({ id: p._id, name: p.name, status: p.status })))}`);
      this.state.productions = all.filter((p) => p.status === "active");
      this.log("info", `Found ${this.state.productions.length} active production(s) out of ${all.length} total`);
      this.updateStatus(import_base3.InstanceStatus.Ok);
      this._cancelRetry();
    } catch (err) {
      const msg = this._extractErrorMessage(err);
      this.log("warn", `Failed to fetch productions: ${msg}`);
      this.updateStatus(import_base3.InstanceStatus.ConnectionFailure, `Could not reach Open Live API: ${msg}`);
      this._scheduleRetry();
    }
    this._registerLandingMode();
  }
  // -----------------------------------------------------------------------
  // Production selection
  // -----------------------------------------------------------------------
  async selectProduction(productionId) {
    this._teardownWs();
    this._stopPolling();
    this._cancelRetry();
    const { apiUrl } = this.config;
    let production;
    try {
      production = await this._fetchProduction(apiUrl, productionId);
    } catch (err) {
      const msg = this._extractErrorMessage(err);
      this.log("error", `Failed to load production ${productionId}: ${msg}`);
      this.updateStatus(import_base3.InstanceStatus.ConnectionFailure, `Failed to load production: ${msg}`);
      return;
    }
    try {
      const allSources = await this._fetchSources(apiUrl);
      const VIRTUAL_SOURCE_NAMES = {
        "__test1__": "Pinwheel",
        "__test2__": "Colors"
      };
      const sourceMap = new Map(allSources.map((s) => [s.id, s.name]));
      production.sources = production.sources.map((slot) => ({
        id: slot.sourceId,
        name: sourceMap.get(slot.sourceId) ?? VIRTUAL_SOURCE_NAMES[slot.sourceId] ?? slot.sourceId,
        type: "srt",
        mixerInput: slot.mixerInput
      }));
    } catch {
      const VIRTUAL_SOURCE_NAMES = { "__test1__": "Pinwheel", "__test2__": "Colors" };
      production.sources = production.sources.map((slot) => ({
        id: slot.sourceId,
        name: VIRTUAL_SOURCE_NAMES[slot.sourceId] ?? slot.sourceId,
        type: "srt",
        mixerInput: slot.mixerInput
      }));
    }
    this.selectedProduction = production;
    this.state.selectedProductionId = productionId;
    this._resetControlState();
    this._registerControlMode();
    const wsUrl = this._normaliseUrl(apiUrl).replace(/^http/, "ws") + `/ws/productions/${encodeURIComponent(productionId)}/controller`;
    const sat = await getSat(this.config.oscPat).catch(() => void 0);
    this._openWebSocket(wsUrl, sat);
    this._startPolling();
  }
  async refreshProductions() {
    try {
      const all = await this._fetchProductions(this.config.apiUrl);
      this.log("debug", `Refresh: fetched ${all.length} production(s): ${JSON.stringify(all.map((p) => ({ id: p._id, name: p.name, status: p.status })))}`);
      this.state.productions = all.filter((p) => p.status === "active");
      this.log("info", `Refreshed \u2014 ${this.state.productions.length} active production(s) out of ${all.length} total`);
    } catch (err) {
      this.log("warn", `Failed to refresh productions: ${this._extractErrorMessage(err)}`);
    }
    this._registerLandingMode();
  }
  async backToProductions() {
    this._teardownWs();
    this._stopPolling();
    this.selectedProduction = null;
    this.state.selectedProductionId = null;
    this._resetControlState();
    try {
      const all = await this._fetchProductions(this.config.apiUrl);
      this.state.productions = all.filter((p) => p.status === "active");
    } catch (err) {
      this.log("warn", `Failed to refresh production list: ${err}`);
    }
    this._registerLandingMode();
    this.updateStatus(import_base3.InstanceStatus.Ok);
  }
  // -----------------------------------------------------------------------
  // Mode registration
  // -----------------------------------------------------------------------
  _callbacks() {
    return {
      selectProduction: (id) => void this.selectProduction(id),
      backToProductions: () => void this.backToProductions(),
      refreshProductions: () => void this.refreshProductions(),
      setVariable: (id, value) => this.setVariableValues({ [id]: value })
    };
  }
  _registerLandingMode() {
    this.setVariableDefinitions(getVariableDefinitions());
    this.setActionDefinitions(
      getActionDefinitions(() => this.wsClient, null, () => this.state, this._callbacks())
    );
    this.setFeedbackDefinitions(getFeedbackDefinitions(() => this.state, null, this.log.bind(this)));
    this.setPresetDefinitions(getLandingPresets(this.state.productions));
    this.setVariableValues({
      selected_production_name: "",
      production_name: "",
      pgm_source: "",
      pvw_source: "",
      on_air: "false",
      ftb_active: "false",
      ovl_alpha: "1",
      ...emptySourceVars(),
      ...productionSlotVarsFromList(this.state.productions)
    });
    this.checkFeedbacks("production_slot_occupied");
  }
  _registerControlMode() {
    this.setVariableDefinitions(getVariableDefinitions());
    this.setActionDefinitions(
      getActionDefinitions(() => this.wsClient, this.selectedProduction, () => this.state, this._callbacks())
    );
    this.setFeedbackDefinitions(getFeedbackDefinitions(() => this.state, this.selectedProduction, this.log.bind(this)));
    this.setPresetDefinitions(getControlPresets(this.selectedProduction));
    this.log("debug", `Sources: ${JSON.stringify(this.selectedProduction?.sources?.map((s) => `${s.name}(${s.id})`))}`);
    this.setVariableValues({
      selected_production_name: this.selectedProduction?.name ?? "",
      production_name: this.selectedProduction?.name ?? "",
      pgm_source: "",
      pvw_source: "",
      on_air: "false",
      ftb_active: "false",
      ovl_alpha: "1",
      ...sourceVarsFromList(this.selectedProduction?.sources ?? [])
    });
    this.log("debug", `Control mode registered \u2014 forcing checkFeedbacks`);
    this.checkFeedbacks("pgm_tally", "pvw_tally", "on_air", "ftb_active", "graphic_active", "dsk_visible");
  }
  // -----------------------------------------------------------------------
  // WebSocket
  // -----------------------------------------------------------------------
  _openWebSocket(url, authToken) {
    this.log("debug", `Connecting to WebSocket: ${url}`);
    const client = new WsClient(url, authToken);
    this.wsClient = client;
    client.on("connected", () => {
      this.log("info", "WebSocket connected");
      this.updateStatus(import_base3.InstanceStatus.Ok);
      this.checkFeedbacks("pgm_tally", "pvw_tally", "on_air", "ftb_active", "graphic_active", "dsk_visible");
    });
    client.on("disconnected", () => {
      this.log("warn", "WebSocket disconnected, reconnecting\u2026");
      this.updateStatus(import_base3.InstanceStatus.Connecting, "Reconnecting");
    });
    client.on("message", (msg) => {
      this._handleWsMessage(msg);
    });
    client.connect();
  }
  _teardownWs() {
    if (this.wsClient) {
      this.wsClient.destroy();
      this.wsClient = null;
    }
  }
  _handleWsMessage(msg) {
    switch (msg.type) {
      case "TALLY": {
        this.log("info", `TALLY received \u2014 pgm: ${msg.pgm ?? "null"}, pvw: ${msg.pvw ?? "null"}`);
        this.state.pgm = msg.pgm;
        this.state.pvw = msg.pvw;
        this.setVariableValues({ pgm_source: msg.pgm ?? "", pvw_source: msg.pvw ?? "" });
        this.checkFeedbacks("pgm_tally", "pvw_tally");
        break;
      }
      case "ON_AIR": {
        this.state.onAir = msg.value;
        this.setVariableValues({ on_air: String(msg.value) });
        this.checkFeedbacks("on_air");
        break;
      }
      case "GRAPHIC": {
        this.state.graphics[msg.overlayId] = msg.active;
        this.checkFeedbacks("graphic_active");
        break;
      }
      case "DSK_STATE": {
        this.state.dskLayers[msg.layer] = msg.visible;
        this.checkFeedbacks("dsk_visible");
        break;
      }
      case "FTB_STATE": {
        this.state.ftbActive = msg.active;
        this.setVariableValues({ ftb_active: String(msg.active) });
        this.checkFeedbacks("ftb_active");
        break;
      }
      case "OVL_STATE": {
        this.state.ovlAlpha = msg.alpha;
        this.setVariableValues({ ovl_alpha: String(msg.alpha) });
        break;
      }
      case "MACRO_EXECUTED": {
        this.log("debug", `Macro executed: ${msg.macroId}`);
        break;
      }
      case "MACRO_ERROR": {
        this.log("warn", `Macro error at action ${msg.failedActionIndex}: ${msg.error}`);
        break;
      }
      case "ERROR": {
        if (msg.error === "Production not found") {
          this.log("error", "Production not found \u2014 returning to production list");
          void this.backToProductions();
        } else {
          this.log("error", `Server error: ${msg.error}`);
        }
        break;
      }
      default: {
      }
    }
  }
  // -----------------------------------------------------------------------
  // Polling — detect inactive production
  // -----------------------------------------------------------------------
  _startPolling() {
    this._stopPolling();
    this.pollTimer = setInterval(() => {
      void this._checkProductionActive();
    }, POLL_INTERVAL_MS);
  }
  _stopPolling() {
    if (this.pollTimer !== null) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  async _checkProductionActive() {
    const id = this.state.selectedProductionId;
    if (!id) return;
    try {
      const prod = await this._fetchProduction(this.config.apiUrl, id);
      if (prod.status !== "active") {
        this.log("info", `Production "${prod.name}" is no longer active \u2014 returning to production list`);
        await this.backToProductions();
      }
    } catch {
    }
  }
  // -----------------------------------------------------------------------
  // REST helpers
  // -----------------------------------------------------------------------
  /** Normalise the URL so Node.js doesn't try ::1 before 127.0.0.1 on macOS */
  _normaliseUrl(url) {
    return url.replace(/^(https?:\/\/)localhost\b/, "$1127.0.0.1");
  }
  async _authHeaders() {
    try {
      const sat = await getSat(this.config.oscPat);
      return sat ? { Authorization: `Bearer ${sat}` } : {};
    } catch (err) {
      this.log("warn", `SAT exchange failed: ${this._extractErrorMessage(err)}`);
      return {};
    }
  }
  async _fetchProductions(apiUrl) {
    const url = `${this._normaliseUrl(apiUrl)}/api/v1/productions`;
    this.log("debug", `Fetching productions from: ${url}`);
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 5e3);
    try {
      const res = await fetch(url, {
        headers: { Accept: "application/json", ...await this._authHeaders() },
        signal: ctrl.signal
      });
      if (res.status === 401) {
        invalidateSat();
        throw new Error("HTTP 401 \u2014 invalid or expired token");
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(timeout);
    }
  }
  async _fetchSources(apiUrl) {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 5e3);
    try {
      const res = await fetch(`${this._normaliseUrl(apiUrl)}/api/v1/sources`, {
        headers: { Accept: "application/json", ...await this._authHeaders() },
        signal: ctrl.signal
      });
      if (res.status === 401) {
        invalidateSat();
        throw new Error("HTTP 401 \u2014 invalid or expired token");
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(timeout);
    }
  }
  async _fetchProduction(apiUrl, productionId) {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 5e3);
    try {
      const res = await fetch(`${this._normaliseUrl(apiUrl)}/api/v1/productions/${encodeURIComponent(productionId)}`, {
        headers: { Accept: "application/json", ...await this._authHeaders() },
        signal: ctrl.signal
      });
      if (res.status === 401) {
        invalidateSat();
        throw new Error("HTTP 401 \u2014 invalid or expired token");
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } finally {
      clearTimeout(timeout);
    }
  }
  // -----------------------------------------------------------------------
  // Retry (landing mode only — reconnect when API becomes reachable)
  // -----------------------------------------------------------------------
  _scheduleRetry() {
    this._cancelRetry();
    this.retryTimer = setTimeout(() => {
      this.retryTimer = null;
      if (!this.state.selectedProductionId) {
        this.log("debug", `Retrying Open Live API connection\u2026`);
        void this._setup();
      }
    }, RETRY_SETUP_MS);
  }
  _cancelRetry() {
    if (this.retryTimer !== null) {
      clearTimeout(this.retryTimer);
      this.retryTimer = null;
    }
  }
  // -----------------------------------------------------------------------
  // Misc
  // -----------------------------------------------------------------------
  _extractErrorMessage(err) {
    if (!(err instanceof Error)) return String(err);
    const cause = err.cause;
    if (cause instanceof Error) {
      const code = cause.code;
      this.log("debug", `Fetch error cause: ${cause.message} (code: ${code ?? "none"})`);
      if (code === "ECONNREFUSED") return "Connection refused \u2014 is Open Live running?";
      if (code === "ENOTFOUND") return "Host not found \u2014 check the URL";
      if (code === "ECONNRESET") return "Connection reset";
      return cause.message;
    }
    this.log("debug", `Fetch error: ${err.name} \u2014 ${err.message}`);
    if (err.name === "AbortError") return "Request timed out";
    return err.message;
  }
  _resetControlState() {
    this.state.pgm = null;
    this.state.pvw = null;
    this.state.onAir = false;
    this.state.ftbActive = false;
    this.state.graphics = {};
    this.state.dskLayers = {};
  }
};
(0, import_base3.runEntrypoint)(OpenLiveInstance, []);
