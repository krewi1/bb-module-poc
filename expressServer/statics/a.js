var __bbb={};(function(undefined) {
    "use strict";
    var __extendStatics = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    var __extends = function(d, b) {
        __extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    var __rest = function(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        return t;
    };
    var __decorate = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = function(paramIndex, decorator) {
        return function(target, key) {
            decorator(target, key, paramIndex);
        };
    };
    var __metadata = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };
    var __awaiter = function(thisArg, _arguments, P, generator) {
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
                result.done ? resolve(result.value) : new P(function(resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = function(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([ n, v ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [ 0, t.value ];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [ 0 ];
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
                op = [ 6, e ];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    };
    var __exportStar = function(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };
    var __values = function(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
    };
    var __read = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    };
    var __spread = function() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    var __await = function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
        function verb(n) {
            if (g[n]) i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([ n, v, a, b ]) > 1 || resume(n, v);
                });
            };
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
    };
    var __asyncDelegator = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
            return this;
        }, i;
        function verb(n, f) {
            if (o[n]) i[n] = function(v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            };
        }
    };
    var __asyncValues = function(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator];
        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
    };
    var __import = function(url, prop) {
        var bbb = __bbb;
        var res = bbb[prop];
        if (res !== undefined) {
            if (res instanceof Promise) return res;
            return Promise.resolve(res);
        }
        res = new Promise(function(r, e) {
            var script = document.createElement("script");
            var timeout = setTimeout(handle, 12e4);
            function handle() {
                script.onload = script.onerror = undefined;
                clearTimeout(timeout);
                if (bbb[prop] === res) {
                    bbb[prop] = undefined;
                    e(new Error("Fail to load " + url));
                } else r(bbb[prop]);
            }
            script.charset = "utf-8";
            script.onload = script.onerror = handle;
            script.src = url;
            document.head.appendChild(script);
        });
        return bbb[prop] = res;
    };
    var DEBUG = false;
    var __export_EventResult;
    var BobrilCtx = function() {
        function BobrilCtx_index(data, me) {
            this.data = data;
            this.me = me;
            this.cfg = undefined;
            this.refs = undefined;
            this.disposables = undefined;
            this.$bobxCtx = undefined;
        }
        return BobrilCtx_index;
    }();
    var __export_BobrilCtx = BobrilCtx;
    function assert(shouldBeTrue, messageIfFalse) {
        if (DEBUG && !shouldBeTrue) throw Error(messageIfFalse || "assertion failed");
    }
    var __export_isArray = Array.isArray;
    var isArrayVdom = __export_isArray;
    function setIsArrayVdom(isArrayFnc) {
        isArrayVdom = isArrayFnc;
    }
    var emptyComponent = {};
    function createTextNode(content) {
        return document.createTextNode(content);
    }
    function createEl(name_index) {
        return document.createElement(name_index);
    }
    function null2undefined(value) {
        return value === null ? undefined : value;
    }
    function isNumber(val) {
        return typeof val == "number";
    }
    function isString(val) {
        return typeof val == "string";
    }
    function isBoolean(val) {
        return typeof val == "boolean";
    }
    function isFunction(val) {
        return typeof val == "function";
    }
    function isObject(val) {
        return typeof val === "object";
    }
    if (Object.assign == null) {
        Object.assign = function assign(target) {
            var _sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                _sources[_i - 1] = arguments[_i];
            }
            if (target == null) throw new TypeError("Target in assign cannot be undefined or null");
            var totalArgs = arguments.length;
            for (var i_1 = 1; i_1 < totalArgs; i_1++) {
                var source = arguments[i_1];
                if (source == null) continue;
                var keys = Object.keys(source);
                var totalKeys = keys.length;
                for (var j_1 = 0; j_1 < totalKeys; j_1++) {
                    var key = keys[j_1];
                    target[key] = source[key];
                }
            }
            return target;
        };
    }
    if (!Object.is) {
        Object.is = function(x, y) {
            if (x === y) {
                return x !== 0 || 1 / x === 1 / y;
            } else {
                return x !== x && y !== y;
            }
        };
    }
    var __export_assign = Object.assign;
    function polyfill(prototype, method, value) {
        if (!prototype[method]) {
            Object.defineProperty(prototype, method, {
                value: value,
                configurable: true,
                writable: true
            });
        }
    }
    polyfill(Array.prototype, "find", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var k = 0; k < len; k++) {
            var kValue = o[k];
            if (pred.call(thisArg, kValue, k, o)) {
                return kValue;
            }
        }
        return;
    });
    polyfill(Array.prototype, "findIndex", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var k = 0; k < len; k++) {
            var kValue = o[k];
            if (pred.call(thisArg, kValue, k, o)) {
                return k;
            }
        }
        return -1;
    });
    polyfill(Array.prototype, "some", function(pred) {
        var o = Object(this);
        var len = o.length >>> 0;
        var thisArg = arguments[1];
        for (var i_index = 0; i_index < len; i_index++) {
            if (i_index in o && pred.call(thisArg, o[i_index], i_index, o)) {
                return true;
            }
        }
        return false;
    });
    polyfill(String.prototype, "includes", function(search, start) {
        if (!isNumber(start)) start = 0;
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    });
    polyfill(String.prototype, "startsWith", function(search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    });
    polyfill(String.prototype, "endsWith", function(search, pos) {
        var s = this.toString();
        if (!isNumber(pos) || !isFinite(pos) || Math.floor(pos) !== pos || pos > s.length) {
            pos = s.length;
        }
        pos -= search.length;
        var lastIndex = s.indexOf(search, pos);
        return lastIndex !== -1 && lastIndex === pos;
    });
    function flatten(a) {
        if (!__export_isArray(a)) {
            if (a == null || a === false || a === true) return [];
            return [ a ];
        }
        a = a.slice(0);
        var aLen = a.length;
        for (var i_2 = 0; i_2 < aLen; ) {
            var item = a[i_2];
            if (__export_isArray(item)) {
                a.splice.apply(a, [ i_2, 1 ].concat(item));
                aLen = a.length;
                continue;
            }
            if (item == null || item === false || item === true) {
                a.splice(i_2, 1);
                aLen--;
                continue;
            }
            i_2++;
        }
        return a;
    }
    var inSvg = false;
    var inNotFocusable = false;
    var updateCall = [];
    var updateInstance = [];
    var setValueCallback = function(el, _node, newValue, oldValue) {
        if (newValue !== oldValue) el[tValue] = newValue;
    };
    function setSetValue(callback) {
        var prev = setValueCallback;
        setValueCallback = callback;
        return prev;
    }
    function newHashObj() {
        return Object.create(null);
    }
    var vendors = [ "Webkit", "Moz", "ms", "O" ];
    var testingDivStyle = document.createElement("div").style;
    function testPropExistence(name_index) {
        return isString(testingDivStyle[name_index]);
    }
    var mapping = newHashObj();
    var isUnitlessNumber = {
        boxFlex: true,
        boxFlexGroup: true,
        columnCount: true,
        flex: true,
        flexGrow: true,
        flexNegative: true,
        flexPositive: true,
        flexShrink: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        strokeDashoffset: true,
        widows: true,
        zIndex: true,
        zoom: true
    };
    function renamer(newName) {
        return function(style_index, value, oldName) {
            style_index[newName] = value;
            style_index[oldName] = undefined;
        };
    }
    function renamerPx(newName) {
        return function(style_index, value, oldName) {
            if (isNumber(value)) {
                style_index[newName] = value + "px";
            } else {
                style_index[newName] = value;
            }
            style_index[oldName] = undefined;
        };
    }
    function pxAdder(style_index, value, name_index) {
        if (isNumber(value)) style_index[name_index] = value + "px";
    }
    function ieVersion() {
        return document.documentMode;
    }
    function shimStyle(newValue) {
        var k = Object.keys(newValue);
        for (var i_index = 0, l = k.length; i_index < l; i_index++) {
            var ki = k[i_index];
            var mi = mapping[ki];
            var vi = newValue[ki];
            if (vi === undefined) continue;
            if (mi === undefined) {
                if (DEBUG) {
                    if (ki === "float" && window.console && console.error) console.error("In style instead of 'float' you have to use 'cssFloat'");
                    if (/-/.test(ki) && window.console && console.warn) console.warn("Style property " + ki + " contains dash (must use JS props instead of css names)");
                }
                if (testPropExistence(ki)) {
                    mi = isUnitlessNumber[ki] === true ? null : pxAdder;
                } else {
                    var titleCaseKi = ki.replace(/^\w/, function(match) {
                        return match.toUpperCase();
                    });
                    for (var j_index = 0; j_index < vendors.length; j_index++) {
                        if (testPropExistence(vendors[j_index] + titleCaseKi)) {
                            mi = (isUnitlessNumber[ki] === true ? renamer : renamerPx)(vendors[j_index] + titleCaseKi);
                            break;
                        }
                    }
                    if (mi === undefined) {
                        mi = isUnitlessNumber[ki] === true ? null : pxAdder;
                        if (DEBUG && window.console && console.warn && [ "overflowScrolling", "touchCallout" ].indexOf(ki) < 0) console.warn("Style property " + ki + " is not supported in this browser");
                    }
                }
                mapping[ki] = mi;
            }
            if (mi !== null) mi(newValue, vi, ki);
        }
    }
    function removeProperty(s, name_index) {
        s[name_index] = "";
    }
    function setStyleProperty(s, name_index, value) {
        if (isString(value)) {
            var len = value.length;
            if (len > 11 && value.substr(len - 11, 11) === " !important") {
                s.setProperty(hyphenateStyle(name_index), value.substr(0, len - 11), "important");
                return;
            }
        }
        s[name_index] = value;
    }
    function updateStyle(el, newStyle, oldStyle) {
        var s = el.style;
        if (isObject(newStyle)) {
            shimStyle(newStyle);
            var rule;
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    if (!(rule in newStyle)) removeProperty(s, rule);
                }
                for (rule in newStyle) {
                    var v = newStyle[rule];
                    if (v !== undefined) {
                        if (oldStyle[rule] !== v) setStyleProperty(s, rule, v);
                    } else {
                        removeProperty(s, rule);
                    }
                }
            } else {
                if (oldStyle) s.cssText = "";
                for (rule in newStyle) {
                    var v = newStyle[rule];
                    if (v !== undefined) setStyleProperty(s, rule, v);
                }
            }
        } else if (newStyle) {
            s.cssText = newStyle;
        } else {
            if (isObject(oldStyle)) {
                for (rule in oldStyle) {
                    removeProperty(s, rule);
                }
            } else if (oldStyle) {
                s.cssText = "";
            }
        }
    }
    function setClassName(el, className) {
        if (inSvg) el.setAttribute("class", className); else el.className = className;
    }
    var focusableTag = /^input$|^select$|^textarea$|^button$/;
    var tabindexStr = "tabindex";
    function isNaturallyFocusable(tag, attrs) {
        if (tag == null) return false;
        if (focusableTag.test(tag)) return true;
        if (tag === "a" && attrs != null && attrs.href != null) return true;
        return false;
    }
    function updateElement(n, el, newAttrs, oldAttrs, notFocusable) {
        var attrName, newAttr, oldAttr, valueOldAttr, valueNewAttr;
        var wasTabindex = false;
        if (newAttrs != null) for (attrName in newAttrs) {
            newAttr = newAttrs[attrName];
            oldAttr = oldAttrs[attrName];
            if (notFocusable && attrName === tabindexStr) {
                newAttr = -1;
                wasTabindex = true;
            } else if (attrName === tValue && !inSvg) {
                if (isFunction(newAttr)) {
                    oldAttrs[bValue] = newAttr;
                    newAttr = newAttr();
                }
                valueOldAttr = oldAttr;
                valueNewAttr = newAttr;
                oldAttrs[attrName] = newAttr;
                continue;
            }
            if (oldAttr !== newAttr) {
                oldAttrs[attrName] = newAttr;
                if (inSvg) {
                    if (attrName === "href") el.setAttributeNS("http://www.w3.org/1999/xlink", "href", newAttr); else el.setAttribute(attrName, newAttr);
                } else if (attrName in el && !(attrName === "list" || attrName === "form")) {
                    el[attrName] = newAttr;
                } else el.setAttribute(attrName, newAttr);
            }
        }
        if (notFocusable && !wasTabindex && isNaturallyFocusable(n.tag, newAttrs)) {
            el.setAttribute(tabindexStr, "-1");
            oldAttrs[tabindexStr] = -1;
        }
        if (newAttrs == null) {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        } else {
            for (attrName in oldAttrs) {
                if (oldAttrs[attrName] !== undefined && !(attrName in newAttrs)) {
                    if (notFocusable && attrName === tabindexStr) continue;
                    if (attrName === bValue) continue;
                    oldAttrs[attrName] = undefined;
                    el.removeAttribute(attrName);
                }
            }
        }
        if (valueNewAttr !== undefined) {
            setValueCallback(el, n, valueNewAttr, valueOldAttr);
        }
        return oldAttrs;
    }
    function pushInitCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postInitDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postUpdateDom;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
            fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function pushUpdateEverytimeCallback(c) {
        var cc = c.component;
        if (cc) {
            var fn = cc.postUpdateDomEverytime;
            if (fn) {
                updateCall.push(fn);
                updateInstance.push(c);
            }
        }
    }
    function findCfg(parent) {
        var cfg;
        while (parent) {
            cfg = parent.cfg;
            if (cfg !== undefined) break;
            if (parent.ctx) {
                cfg = parent.ctx.cfg;
                break;
            }
            parent = parent.parent;
        }
        return cfg;
    }
    function setRef(ref, value) {
        if (ref == null) return;
        if (isFunction(ref)) {
            ref(value);
            return;
        }
        var ctx = ref[0];
        var refs = ctx.refs;
        if (refs == null) {
            refs = newHashObj();
            ctx.refs = refs;
        }
        refs[ref[1]] = value;
    }
    var focusRootStack = [];
    var focusRootTop = null;
    function registerFocusRoot(ctx) {
        focusRootStack.push(ctx.me);
        addDisposable(ctx, unregisterFocusRoot);
        ignoreShouldChange();
    }
    function unregisterFocusRoot(ctx) {
        var idx = focusRootStack.indexOf(ctx.me);
        if (idx !== -1) {
            focusRootStack.splice(idx, 1);
            ignoreShouldChange();
        }
    }
    var currentCtx;
    function getCurrentCtx() {
        return currentCtx;
    }
    function setCurrentCtx(ctx) {
        currentCtx = ctx;
    }
    function createNode(n, parentNode, createInto, createBefore) {
        var c = {
            tag: n.tag,
            key: n.key,
            ref: n.ref,
            className: n.className,
            style: n.style,
            attrs: n.attrs,
            children: n.children,
            component: n.component,
            data: n.data,
            cfg: undefined,
            parent: parentNode,
            element: undefined,
            ctx: undefined,
            orig: n
        };
        var backupInSvg = inSvg;
        var backupInNotFocusable = inNotFocusable;
        var component_index = c.component;
        var el;
        setRef(c.ref, c);
        if (component_index) {
            var ctx;
            if (component_index.ctxClass) {
                ctx = new component_index.ctxClass(c.data || {}, c);
                if (ctx.data === undefined) ctx.data = c.data || {};
                if (ctx.me === undefined) ctx.me = c;
            } else {
                ctx = {
                    data: c.data || {},
                    me: c,
                    cfg: undefined
                };
            }
            ctx.cfg = n.cfg === undefined ? findCfg(parentNode) : n.cfg;
            c.ctx = ctx;
            currentCtx = ctx;
            if (component_index.init) {
                component_index.init(ctx, c);
            }
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, 0);
            if (component_index.render) {
                component_index.render(ctx, c);
            }
            currentCtx = undefined;
        } else {
            if (DEBUG) Object.freeze(n);
        }
        var tag = c.tag;
        if (tag === "-") {
            c.tag = undefined;
            c.children = undefined;
            return c;
        }
        var children = c.children;
        var inSvgForeignObject = false;
        if (isNumber(children)) {
            children = "" + children;
            c.children = children;
        }
        if (tag === undefined) {
            if (isString(children)) {
                el = createTextNode(children);
                c.element = el;
                createInto.insertBefore(el, createBefore);
            } else {
                createChildren(c, createInto, createBefore);
            }
            if (component_index) {
                if (component_index.postRender) {
                    component_index.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (tag === "/") {
            var htmlText = children;
            if (htmlText === "") {} else if (createBefore == null) {
                var before = createInto.lastChild;
                createInto.insertAdjacentHTML("beforeend", htmlText);
                c.element = [];
                if (before) {
                    before = before.nextSibling;
                } else {
                    before = createInto.firstChild;
                }
                while (before) {
                    c.element.push(before);
                    before = before.nextSibling;
                }
            } else {
                el = createBefore;
                var elPrev = createBefore.previousSibling;
                var removeEl = false;
                var parent = createInto;
                if (!el.insertAdjacentHTML) {
                    el = parent.insertBefore(createEl("i"), el);
                    removeEl = true;
                }
                el.insertAdjacentHTML("beforebegin", htmlText);
                if (elPrev) {
                    elPrev = elPrev.nextSibling;
                } else {
                    elPrev = parent.firstChild;
                }
                var newElements = [];
                while (elPrev !== el) {
                    newElements.push(elPrev);
                    elPrev = elPrev.nextSibling;
                }
                c.element = newElements;
                if (removeEl) {
                    parent.removeChild(el);
                }
            }
            if (component_index) {
                if (component_index.postRender) {
                    component_index.postRender(c.ctx, c);
                }
                pushInitCallback(c);
            }
            return c;
        }
        if (inSvg || tag === "svg") {
            el = document.createElementNS("http://www.w3.org/2000/svg", tag);
            inSvgForeignObject = tag === "foreignObject";
            inSvg = !inSvgForeignObject;
        } else {
            el = createEl(tag);
        }
        createInto.insertBefore(el, createBefore);
        c.element = el;
        createChildren(c, el, null);
        if (component_index) {
            if (component_index.postRender) {
                component_index.postRender(c.ctx, c);
            }
        }
        if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
        if (inSvgForeignObject) inSvg = true;
        if (c.attrs || inNotFocusable) c.attrs = updateElement(c, el, c.attrs, {}, inNotFocusable);
        if (c.style) updateStyle(el, c.style, undefined);
        var className = c.className;
        if (className) setClassName(el, className);
        inSvg = backupInSvg;
        inNotFocusable = backupInNotFocusable;
        pushInitCallback(c);
        return c;
    }
    function normalizeNode(n) {
        if (n === false || n === true || n === null) return undefined;
        if (isString(n)) {
            return {
                children: n
            };
        }
        if (isNumber(n)) {
            return {
                children: "" + n
            };
        }
        return n;
    }
    function createChildren(c, createInto, createBefore) {
        var ch = c.children;
        if (isString(ch)) {
            createInto.textContent = ch;
            return;
        }
        var res = [];
        flattenVdomChildren(res, ch);
        for (var i_3 = 0; i_3 < res.length; i_3++) {
            res[i_3] = createNode(res[i_3], c, createInto, createBefore);
        }
        c.children = res;
    }
    function destroyNode(c) {
        setRef(c.ref, undefined);
        var ch = c.children;
        if (__export_isArray(ch)) {
            for (var i_4 = 0, l = ch.length; i_4 < l; i_4++) {
                destroyNode(ch[i_4]);
            }
        }
        var component_index = c.component;
        if (component_index) {
            var ctx = c.ctx;
            currentCtx = ctx;
            if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(c, 3);
            if (component_index.destroy) component_index.destroy(ctx, c, c.element);
            var disposables = ctx.disposables;
            if (__export_isArray(disposables)) {
                for (var i_5 = disposables.length; i_5-- > 0; ) {
                    var d = disposables[i_5];
                    if (isFunction(d)) d(ctx); else d.dispose();
                }
            }
            currentCtx = undefined;
        }
    }
    function addDisposable(ctx, disposable) {
        var disposables = ctx.disposables;
        if (disposables == null) {
            disposables = [];
            ctx.disposables = disposables;
        }
        disposables.push(disposable);
    }
    function removeNodeRecursive(c) {
        var el = c.element;
        if (__export_isArray(el)) {
            var pa = el[0].parentNode;
            if (pa) {
                for (var i_6 = 0; i_6 < el.length; i_6++) {
                    pa.removeChild(el[i_6]);
                }
            }
        } else if (el != null) {
            var p = el.parentNode;
            if (p) p.removeChild(el);
        } else {
            var ch = c.children;
            if (__export_isArray(ch)) {
                for (var i_index = 0, l = ch.length; i_index < l; i_index++) {
                    removeNodeRecursive(ch[i_index]);
                }
            }
        }
    }
    function removeNode(c) {
        destroyNode(c);
        removeNodeRecursive(c);
    }
    var roots = newHashObj();
    function nodeContainsNode(c, n, resIndex, res) {
        var el = c.element;
        var ch = c.children;
        if (__export_isArray(el)) {
            for (var ii = 0; ii < el.length; ii++) {
                if (el[ii] === n) {
                    res.push(c);
                    if (__export_isArray(ch)) {
                        return ch;
                    }
                    return null;
                }
            }
        } else if (el == null) {
            if (__export_isArray(ch)) {
                for (var i_index = 0; i_index < ch.length; i_index++) {
                    var result = nodeContainsNode(ch[i_index], n, resIndex, res);
                    if (result !== undefined) {
                        res.splice(resIndex, 0, c);
                        return result;
                    }
                }
            }
        } else if (el === n) {
            res.push(c);
            if (__export_isArray(ch)) {
                return ch;
            }
            return null;
        }
        return undefined;
    }
    function vdomPath(n) {
        var res = [];
        if (n == undefined) return res;
        var rootIds_index = Object.keys(roots);
        var rootElements = rootIds_index.map(function(i_index) {
            return roots[i_index].e || document.body;
        });
        var nodeStack_index = [];
        rootReallyFound: while (true) {
            rootFound: while (n) {
                for (var j_index = 0; j_index < rootElements.length; j_index++) {
                    if (n === rootElements[j_index]) break rootFound;
                }
                nodeStack_index.push(n);
                n = n.parentNode;
            }
            if (!n || nodeStack_index.length === 0) return res;
            var currentCacheArray = null;
            var currentNode = nodeStack_index.pop();
            for (j_index = 0; j_index < rootElements.length; j_index++) {
                if (n === rootElements[j_index]) {
                    var rn = roots[rootIds_index[j_index]].n;
                    if (rn === undefined) continue;
                    var findResult = nodeContainsNode(rn, currentNode, res.length, res);
                    if (findResult !== undefined) {
                        currentCacheArray = findResult;
                        break rootReallyFound;
                    }
                }
            }
            nodeStack_index.push(currentNode);
            nodeStack_index.push(n);
            n = n.parentNode;
        }
        subtreeSearch: while (nodeStack_index.length) {
            currentNode = nodeStack_index.pop();
            if (currentCacheArray && currentCacheArray.length) for (var i_index = 0, l = currentCacheArray.length; i_index < l; i_index++) {
                var bn = currentCacheArray[i_index];
                var findResult = nodeContainsNode(bn, currentNode, res.length, res);
                if (findResult !== undefined) {
                    currentCacheArray = findResult;
                    continue subtreeSearch;
                }
            }
            res.push(null);
            break;
        }
        return res;
    }
    function deref(n) {
        var p = vdomPath(n);
        var currentNode = null;
        while (currentNode === null) {
            currentNode = p.pop();
        }
        return currentNode;
    }
    function finishUpdateNode(n, c, component_index) {
        if (component_index) {
            if (component_index.postRender) {
                currentCtx = c.ctx;
                component_index.postRender(currentCtx, n, c);
                currentCtx = undefined;
            }
        }
        c.data = n.data;
        pushUpdateCallback(c);
    }
    function finishUpdateNodeWithoutChange(c, createInto, createBefore) {
        currentCtx = undefined;
        if (__export_isArray(c.children)) {
            var backupInSvg = inSvg;
            var backupInNotFocusable = inNotFocusable;
            if (c.tag === "svg") {
                inSvg = true;
            } else if (inSvg && c.tag === "foreignObject") inSvg = false;
            if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
            selectedUpdate(c.children, c.element || createInto, c.element != null ? null : createBefore);
            inSvg = backupInSvg;
            inNotFocusable = backupInNotFocusable;
        }
        pushUpdateEverytimeCallback(c);
    }
    function updateNode(n, c, createInto, createBefore, deepness, inSelectedUpdate) {
        var component_index = n.component;
        var bigChange = false;
        var ctx = c.ctx;
        if (component_index != null && ctx != null) {
            var locallyInvalidated = false;
            if (ctx[ctxInvalidated] === frameCounter) {
                deepness = Math.max(deepness, ctx[ctxDeepness]);
                locallyInvalidated = true;
            }
            if (component_index.id !== c.component.id) {
                bigChange = true;
            } else {
                currentCtx = ctx;
                if (n.cfg !== undefined) ctx.cfg = n.cfg; else ctx.cfg = findCfg(c.parent);
                if (component_index.shouldChange) if (!component_index.shouldChange(ctx, n, c) && !ignoringShouldChange && !locallyInvalidated) {
                    finishUpdateNodeWithoutChange(c, createInto, createBefore);
                    return c;
                }
                ctx.data = n.data || {};
                c.component = component_index;
                if (beforeRenderCallback !== emptyBeforeRenderCallback) beforeRenderCallback(n, inSelectedUpdate ? 2 : 1);
                if (component_index.render) {
                    c.orig = n;
                    n = __export_assign({}, n);
                    c.cfg = undefined;
                    if (n.cfg !== undefined) n.cfg = undefined;
                    component_index.render(ctx, n, c);
                    if (n.cfg !== undefined) {
                        if (c.cfg === undefined) c.cfg = n.cfg; else __export_assign(c.cfg, n.cfg);
                    }
                }
                currentCtx = undefined;
            }
        } else {
            if (c.orig === n) {
                finishUpdateNodeWithoutChange(c, createInto, createBefore);
                return c;
            }
            c.orig = n;
            if (DEBUG) Object.freeze(n);
        }
        var newChildren = n.children;
        var cachedChildren = c.children;
        var tag = n.tag;
        if (tag === "-") {
            finishUpdateNodeWithoutChange(c, createInto, createBefore);
            return c;
        }
        var backupInSvg = inSvg;
        var backupInNotFocusable = inNotFocusable;
        if (isNumber(newChildren)) {
            newChildren = "" + newChildren;
        }
        if (bigChange || component_index != null && ctx == null || component_index == null && ctx != null && ctx.me.component !== emptyComponent) {} else if (tag === "/") {
            if (c.tag === "/" && cachedChildren === newChildren) {
                finishUpdateNode(n, c, component_index);
                return c;
            }
        } else if (tag === c.tag) {
            if (tag === undefined) {
                if (isString(newChildren) && isString(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        var el = c.element;
                        el.textContent = newChildren;
                        c.children = newChildren;
                    }
                } else {
                    if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, createInto, createBefore);
                    } else {
                        c.children = updateChildren(createInto, newChildren, cachedChildren, c, createBefore, deepness - 1);
                    }
                    inSvg = backupInSvg;
                    inNotFocusable = backupInNotFocusable;
                }
                finishUpdateNode(n, c, component_index);
                return c;
            } else {
                var inSvgForeignObject = false;
                if (tag === "svg") {
                    inSvg = true;
                } else if (inSvg && tag === "foreignObject") {
                    inSvgForeignObject = true;
                    inSvg = false;
                }
                if (inNotFocusable && focusRootTop === c) inNotFocusable = false;
                var el = c.element;
                if (isString(newChildren) && !__export_isArray(cachedChildren)) {
                    if (newChildren !== cachedChildren) {
                        el.textContent = newChildren;
                        cachedChildren = newChildren;
                    }
                } else {
                    if (deepness <= 0) {
                        if (__export_isArray(cachedChildren)) selectedUpdate(c.children, el, null);
                    } else {
                        cachedChildren = updateChildren(el, newChildren, cachedChildren, c, null, deepness - 1);
                    }
                }
                c.children = cachedChildren;
                if (inSvgForeignObject) inSvg = true;
                finishUpdateNode(n, c, component_index);
                if (c.attrs || n.attrs || inNotFocusable) c.attrs = updateElement(c, el, n.attrs, c.attrs || {}, inNotFocusable);
                updateStyle(el, n.style, c.style);
                c.style = n.style;
                var className = n.className;
                if (className !== c.className) {
                    setClassName(el, className || "");
                    c.className = className;
                }
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
                return c;
            }
        }
        var parEl = c.element;
        if (__export_isArray(parEl)) parEl = parEl[0];
        if (parEl == null) parEl = createInto; else parEl = parEl.parentNode;
        var r = createNode(n, c.parent, parEl, getDomNode(c));
        removeNode(c);
        return r;
    }
    function getDomNode(c) {
        if (c === undefined) return null;
        var el = c.element;
        if (el != null) {
            if (__export_isArray(el)) return el[0];
            return el;
        }
        var ch = c.children;
        if (!__export_isArray(ch)) return null;
        for (var i_index = 0; i_index < ch.length; i_index++) {
            el = getDomNode(ch[i_index]);
            if (el) return el;
        }
        return null;
    }
    function findNextNode(a, i_index, len, def) {
        while (++i_index < len) {
            var ai = a[i_index];
            if (ai == null) continue;
            var n = getDomNode(ai);
            if (n != null) return n;
        }
        return def;
    }
    function callPostCallbacks() {
        var count = updateInstance.length;
        for (var i_index = 0; i_index < count; i_index++) {
            var n = updateInstance[i_index];
            currentCtx = n.ctx;
            updateCall[i_index].call(n.component, currentCtx, n, n.element);
        }
        currentCtx = undefined;
        updateCall = [];
        updateInstance = [];
    }
    function updateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        cachedChildren[cachedIndex] = updateNode(newNode, cachedChildren[cachedIndex], element, findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore), deepness);
    }
    function reorderInUpdateChildrenRec(c, element, before) {
        var el = c.element;
        if (el != null) {
            if (__export_isArray(el)) {
                for (var i_index = 0; i_index < el.length; i_index++) {
                    element.insertBefore(el[i_index], before);
                }
            } else element.insertBefore(el, before);
            return;
        }
        var ch = c.children;
        if (!__export_isArray(ch)) return;
        for (var i_index = 0; i_index < ch.length; i_index++) {
            reorderInUpdateChildrenRec(ch[i_index], element, before);
        }
    }
    function reorderInUpdateChildren(cachedChildren, cachedIndex, cachedLength, createBefore, element) {
        var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        var cur = cachedChildren[cachedIndex];
        var what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
    }
    function reorderAndUpdateNodeInUpdateChildren(newNode, cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness) {
        var before = findNextNode(cachedChildren, cachedIndex, cachedLength, createBefore);
        var cur = cachedChildren[cachedIndex];
        var what = getDomNode(cur);
        if (what != null && what !== before) {
            reorderInUpdateChildrenRec(cur, element, before);
        }
        cachedChildren[cachedIndex] = updateNode(newNode, cur, element, before, deepness);
    }
    function recursiveFlattenVdomChildren(res, children) {
        if (children == undefined) return;
        if (isArrayVdom(children)) {
            for (var i_7 = 0; i_7 < children.length; i_7++) {
                recursiveFlattenVdomChildren(res, children[i_7]);
            }
        } else {
            var item = normalizeNode(children);
            if (item !== undefined) res.push(item);
        }
    }
    function flattenVdomChildren(res, children) {
        recursiveFlattenVdomChildren(res, children);
        if (DEBUG) {
            var set = new Set();
            for (var i_8 = 0; i_8 < res.length; i_8++) {
                var key = res[i_8].key;
                if (key == undefined) continue;
                if (set.has(key)) {
                    console.warn("Duplicate Bobril node key " + key);
                }
                set.add(key);
            }
        }
    }
    function updateChildren(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        if (cachedChildren == null) cachedChildren = [];
        if (!__export_isArray(cachedChildren)) {
            if (element.firstChild) element.removeChild(element.firstChild);
            cachedChildren = [];
        }
        var newCh = [];
        flattenVdomChildren(newCh, newChildren);
        return updateChildrenCore(element, newCh, cachedChildren, parentNode, createBefore, deepness);
    }
    function updateChildrenCore(element, newChildren, cachedChildren, parentNode, createBefore, deepness) {
        var newEnd = newChildren.length;
        var cachedLength = cachedChildren.length;
        var cachedEnd = cachedLength;
        var newIndex = 0;
        var cachedIndex = 0;
        while (newIndex < newEnd && cachedIndex < cachedEnd) {
            if (newChildren[newIndex].key === cachedChildren[cachedIndex].key) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
                continue;
            }
            while (true) {
                if (newChildren[newEnd - 1].key === cachedChildren[cachedEnd - 1].key) {
                    newEnd--;
                    cachedEnd--;
                    updateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    if (newIndex < newEnd && cachedIndex < cachedEnd) continue;
                }
                break;
            }
            if (newIndex < newEnd && cachedIndex < cachedEnd) {
                if (newChildren[newIndex].key === cachedChildren[cachedEnd - 1].key) {
                    cachedChildren.splice(cachedIndex, 0, cachedChildren[cachedEnd - 1]);
                    cachedChildren.splice(cachedEnd, 1);
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                    newIndex++;
                    cachedIndex++;
                    continue;
                }
                if (newChildren[newEnd - 1].key === cachedChildren[cachedIndex].key) {
                    cachedChildren.splice(cachedEnd, 0, cachedChildren[cachedIndex]);
                    cachedChildren.splice(cachedIndex, 1);
                    cachedEnd--;
                    newEnd--;
                    reorderAndUpdateNodeInUpdateChildren(newChildren[newEnd], cachedChildren, cachedEnd, cachedLength, createBefore, element, deepness);
                    continue;
                }
            }
            break;
        }
        if (cachedIndex === cachedEnd) {
            if (newIndex === newEnd) {
                return cachedChildren;
            }
            while (newIndex < newEnd) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
            return cachedChildren;
        }
        if (newIndex === newEnd) {
            while (cachedIndex < cachedEnd) {
                cachedEnd--;
                removeNode(cachedChildren[cachedEnd]);
                cachedChildren.splice(cachedEnd, 1);
            }
            return cachedChildren;
        }
        var cachedKeys = newHashObj();
        var newKeys = newHashObj();
        var key;
        var node;
        var backupNewIndex = newIndex;
        var backupCachedIndex = cachedIndex;
        var deltaKeyless = 0;
        for (;cachedIndex < cachedEnd; cachedIndex++) {
            node = cachedChildren[cachedIndex];
            key = node.key;
            if (key != null) {
                assert(!(key in cachedKeys));
                cachedKeys[key] = cachedIndex;
            } else deltaKeyless--;
        }
        var keyLess = -deltaKeyless - deltaKeyless;
        for (;newIndex < newEnd; newIndex++) {
            node = newChildren[newIndex];
            key = node.key;
            if (key != null) {
                assert(!(key in newKeys));
                newKeys[key] = newIndex;
            } else deltaKeyless++;
        }
        keyLess += deltaKeyless;
        var delta = 0;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        var cachedKey;
        while (cachedIndex < cachedEnd && newIndex < newEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                delta--;
                continue;
            }
            cachedKey = cachedChildren[cachedIndex].key;
            if (cachedKey == null) {
                cachedIndex++;
                continue;
            }
            key = newChildren[newIndex].key;
            if (key == null) {
                newIndex++;
                while (newIndex < newEnd) {
                    key = newChildren[newIndex].key;
                    if (key != null) break;
                    newIndex++;
                }
                if (key == null) break;
            }
            var akPos = cachedKeys[key];
            if (akPos === undefined) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                delta++;
                newIndex++;
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                continue;
            }
            if (!(cachedKey in newKeys)) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                delta--;
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedIndex === akPos + delta) {
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(cachedIndex, 0, cachedChildren[akPos + delta]);
                delta++;
                cachedChildren[akPos + delta] = null;
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, cachedIndex, cachedLength, createBefore, element, deepness);
                cachedIndex++;
                cachedEnd++;
                cachedLength++;
                newIndex++;
            }
        }
        while (cachedIndex < cachedEnd) {
            if (cachedChildren[cachedIndex] === null) {
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            if (cachedChildren[cachedIndex].key != null) {
                removeNode(cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex, 1);
                cachedEnd--;
                cachedLength--;
                continue;
            }
            cachedIndex++;
        }
        while (newIndex < newEnd) {
            key = newChildren[newIndex].key;
            if (key != null) {
                cachedChildren.splice(cachedIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, cachedIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                delta++;
                cachedIndex++;
            }
            newIndex++;
        }
        if (!keyLess) return cachedChildren;
        keyLess = keyLess - Math.abs(deltaKeyless) >> 1;
        newIndex = backupNewIndex;
        cachedIndex = backupCachedIndex;
        while (newIndex < newEnd) {
            if (cachedIndex < cachedEnd) {
                cachedKey = cachedChildren[cachedIndex].key;
                if (cachedKey != null) {
                    cachedIndex++;
                    continue;
                }
            }
            key = newChildren[newIndex].key;
            if (newIndex < cachedEnd && key === cachedChildren[newIndex].key) {
                if (key != null) {
                    newIndex++;
                    continue;
                }
                updateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (key != null) {
                assert(newIndex === cachedIndex);
                if (keyLess === 0 && deltaKeyless < 0) {
                    while (true) {
                        removeNode(cachedChildren[cachedIndex]);
                        cachedChildren.splice(cachedIndex, 1);
                        cachedEnd--;
                        cachedLength--;
                        deltaKeyless++;
                        assert(cachedIndex !== cachedEnd, "there still need to exist key node");
                        if (cachedChildren[cachedIndex].key != null) break;
                    }
                    continue;
                }
                while (cachedChildren[cachedIndex].key == null) cachedIndex++;
                assert(key === cachedChildren[cachedIndex].key);
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderInUpdateChildren(cachedChildren, newIndex, cachedLength, createBefore, element);
                newIndex++;
                cachedIndex = newIndex;
                continue;
            }
            if (cachedIndex < cachedEnd) {
                cachedChildren.splice(newIndex, 0, cachedChildren[cachedIndex]);
                cachedChildren.splice(cachedIndex + 1, 1);
                reorderAndUpdateNodeInUpdateChildren(newChildren[newIndex], cachedChildren, newIndex, cachedLength, createBefore, element, deepness);
                keyLess--;
                newIndex++;
                cachedIndex++;
            } else {
                cachedChildren.splice(newIndex, 0, createNode(newChildren[newIndex], parentNode, element, findNextNode(cachedChildren, newIndex - 1, cachedLength, createBefore)));
                cachedEnd++;
                cachedLength++;
                newIndex++;
                cachedIndex++;
            }
        }
        while (cachedEnd > newIndex) {
            cachedEnd--;
            removeNode(cachedChildren[cachedEnd]);
            cachedChildren.splice(cachedEnd, 1);
        }
        return cachedChildren;
    }
    var hasNativeRaf = false;
    var nativeRaf = window.requestAnimationFrame;
    if (nativeRaf) {
        nativeRaf(function(param) {
            if (param === +param) hasNativeRaf = true;
        });
    }
    var __export_now = Date.now || function() {
        return new Date().getTime();
    };
    var startTime = __export_now();
    var lastTickTime = 0;
    function requestAnimationFrame(callback) {
        if (hasNativeRaf) {
            nativeRaf(callback);
        } else {
            var delay = 50 / 3 + lastTickTime - __export_now();
            if (delay < 0) delay = 0;
            window.setTimeout(function() {
                lastTickTime = __export_now();
                callback(lastTickTime - startTime);
            }, delay);
        }
    }
    var ctxInvalidated = "$invalidated";
    var ctxDeepness = "$deepness";
    var fullRecreateRequested = true;
    var scheduled = false;
    var isInvalidated = true;
    var initializing = true;
    var uptimeMs = 0;
    var frameCounter = 0;
    var lastFrameDurationMs = 0;
    var renderFrameBegin = 0;
    var regEvents = {};
    var registryEvents;
    function addEvent(name_index, priority, callback) {
        if (registryEvents == null) registryEvents = {};
        var list = registryEvents[name_index] || [];
        list.push({
            priority: priority,
            callback: callback
        });
        registryEvents[name_index] = list;
    }
    function emitEvent(name_index, ev, target, node) {
        var events_index = regEvents[name_index];
        if (events_index) for (var i_index = 0; i_index < events_index.length; i_index++) {
            if (events_index[i_index](ev, target, node)) return true;
        }
        return false;
    }
    var isPassiveEventHandlerSupported = false;
    try {
        var options = Object.defineProperty({}, "passive", {
            get: function() {
                isPassiveEventHandlerSupported = true;
            }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
    } catch (err) {
        isPassiveEventHandlerSupported = false;
    }
    var listeningEventDeepness = 0;
    function addListener(el, name_index) {
        if (name_index[0] == "!") return;
        var capture = name_index[0] == "^";
        var eventName = name_index;
        if (name_index[0] == "@") {
            eventName = name_index.slice(1);
            el = document;
        }
        if (capture) {
            eventName = name_index.slice(1);
        }
        function enhanceEvent(ev) {
            ev = ev || window.event;
            var t = ev.target || ev.srcElement || el;
            var n = deref(t);
            listeningEventDeepness++;
            emitEvent(name_index, ev, t, n);
            listeningEventDeepness--;
            if (listeningEventDeepness == 0 && deferSyncUpdateRequested) syncUpdate();
        }
        if ("on" + eventName in window) el = window;
        el.addEventListener(eventName, enhanceEvent, isPassiveEventHandlerSupported ? {
            capture: capture,
            passive: false
        } : capture);
    }
    function initEvents() {
        if (registryEvents === undefined) return;
        var eventNames = Object.keys(registryEvents);
        for (var j_index = 0; j_index < eventNames.length; j_index++) {
            var eventName = eventNames[j_index];
            var arr = registryEvents[eventName];
            arr = arr.sort(function(a, b) {
                return a.priority - b.priority;
            });
            regEvents[eventName] = arr.map(function(v) {
                return v.callback;
            });
        }
        registryEvents = undefined;
        var body = document.body;
        for (var i_index = 0; i_index < eventNames.length; i_index++) {
            addListener(body, eventNames[i_index]);
        }
    }
    function selectedUpdate(cache, element, createBefore) {
        var len = cache.length;
        for (var i_index = 0; i_index < len; i_index++) {
            var node = cache[i_index];
            var ctx = node.ctx;
            if (ctx != null && ctx[ctxInvalidated] === frameCounter) {
                cache[i_index] = updateNode(node.orig, node, element, findNextNode(cache, i_index, len, createBefore), ctx[ctxDeepness], true);
            } else if (__export_isArray(node.children)) {
                var backupInSvg = inSvg;
                var backupInNotFocusable = inNotFocusable;
                if (inNotFocusable && focusRootTop === node) inNotFocusable = false;
                if (node.tag === "svg") inSvg = true; else if (inSvg && node.tag === "foreignObject") inSvg = false;
                var thisElement = node.element;
                if (thisElement != undefined) {
                    selectedUpdate(node.children, thisElement, null);
                } else {
                    selectedUpdate(node.children, element, findNextNode(cache, i_index, len, createBefore));
                }
                pushUpdateEverytimeCallback(node);
                inSvg = backupInSvg;
                inNotFocusable = backupInNotFocusable;
            }
        }
    }
    var emptyBeforeRenderCallback = function() {};
    var beforeRenderCallback = emptyBeforeRenderCallback;
    var beforeFrameCallback = function() {};
    var reallyBeforeFrameCallback = function() {};
    var afterFrameCallback = function() {};
    function setBeforeRender(callback) {
        var res = beforeRenderCallback;
        beforeRenderCallback = callback;
        return res;
    }
    function setBeforeFrame(callback) {
        var res = beforeFrameCallback;
        beforeFrameCallback = callback;
        return res;
    }
    function setReallyBeforeFrame(callback) {
        var res = reallyBeforeFrameCallback;
        reallyBeforeFrameCallback = callback;
        return res;
    }
    function setAfterFrame(callback) {
        var res = afterFrameCallback;
        afterFrameCallback = callback;
        return res;
    }
    function isLogicalParent(parent, child, rootIds_index) {
        while (child != null) {
            if (parent === child) return true;
            var p = child.parent;
            if (p == null) {
                for (var i_index = 0; i_index < rootIds_index.length; i_index++) {
                    var r = roots[rootIds_index[i_index]];
                    if (!r) continue;
                    if (r.n === child) {
                        p = r.p;
                        break;
                    }
                }
            }
            child = p;
        }
        return false;
    }
    var deferSyncUpdateRequested = false;
    function syncUpdate() {
        deferSyncUpdateRequested = false;
        internalUpdate(__export_now() - startTime);
    }
    function deferSyncUpdate() {
        if (listeningEventDeepness > 0) {
            deferSyncUpdateRequested = true;
            return;
        }
        syncUpdate();
    }
    function update(time) {
        scheduled = false;
        internalUpdate(time);
    }
    var rootIds;
    var RootComponent = createVirtualComponent({
        render: function(ctx, me) {
            var r = ctx.data;
            var c = r.f(r);
            if (c === undefined) {
                me.tag = "-";
            } else {
                me.children = c;
            }
        }
    });
    function internalUpdate(time) {
        isInvalidated = false;
        renderFrameBegin = __export_now();
        initEvents();
        reallyBeforeFrameCallback();
        frameCounter++;
        ignoringShouldChange = nextIgnoreShouldChange;
        nextIgnoreShouldChange = false;
        uptimeMs = time;
        beforeFrameCallback();
        focusRootTop = focusRootStack.length === 0 ? null : focusRootStack[focusRootStack.length - 1];
        inNotFocusable = false;
        var fullRefresh = false;
        if (fullRecreateRequested) {
            fullRecreateRequested = false;
            fullRefresh = true;
        }
        rootIds = Object.keys(roots);
        for (var i_index = 0; i_index < rootIds.length; i_index++) {
            var r = roots[rootIds[i_index]];
            if (!r) continue;
            var rc = r.n;
            var insertBefore = null;
            for (var j_index = i_index + 1; j_index < rootIds.length; j_index++) {
                var rafter = roots[rootIds[j_index]];
                if (rafter === undefined) continue;
                insertBefore = getDomNode(rafter.n);
                if (insertBefore != null) break;
            }
            if (focusRootTop) inNotFocusable = !isLogicalParent(focusRootTop, r.p, rootIds);
            if (r.e === undefined) r.e = document.body;
            if (rc) {
                if (fullRefresh || rc.ctx[ctxInvalidated] === frameCounter) {
                    var node = RootComponent(r);
                    updateNode(node, rc, r.e, insertBefore, fullRefresh ? 1e6 : rc.ctx[ctxDeepness]);
                } else {
                    if (__export_isArray(r.c)) selectedUpdate(r.c, r.e, insertBefore);
                }
            } else {
                var node = RootComponent(r);
                rc = createNode(node, undefined, r.e, insertBefore);
                r.n = rc;
            }
            r.c = rc.children;
        }
        rootIds = undefined;
        callPostCallbacks();
        var r0 = roots["0"];
        afterFrameCallback(r0 ? r0.c : null);
        lastFrameDurationMs = __export_now() - renderFrameBegin;
    }
    var nextIgnoreShouldChange = false;
    var ignoringShouldChange = false;
    function ignoreShouldChange() {
        nextIgnoreShouldChange = true;
        __export_invalidate();
    }
    function setInvalidate(inv) {
        var prev = __export_invalidate;
        __export_invalidate = inv;
        return prev;
    }
    var __export_invalidate = function(ctx, deepness) {
        if (ctx != null) {
            if (deepness == undefined) deepness = 1e6;
            if (ctx[ctxInvalidated] !== frameCounter + 1) {
                ctx[ctxInvalidated] = frameCounter + 1;
                ctx[ctxDeepness] = deepness;
            } else {
                if (deepness > ctx[ctxDeepness]) ctx[ctxDeepness] = deepness;
            }
        } else {
            fullRecreateRequested = true;
        }
        isInvalidated = true;
        if (scheduled || initializing) return;
        scheduled = true;
        requestAnimationFrame(update);
    };
    var lastRootId = 0;
    function addRoot(factory, element, parent) {
        lastRootId++;
        var rootId_index = "" + lastRootId;
        roots[rootId_index] = {
            f: factory,
            e: element,
            c: [],
            p: parent,
            n: undefined
        };
        if (rootIds != null) {
            rootIds.push(rootId_index);
        } else {
            firstInvalidate();
        }
        return rootId_index;
    }
    function removeRoot(id) {
        var root = roots[id];
        if (!root) return;
        if (root.n) removeNode(root.n);
        delete roots[id];
    }
    function updateRoot(id, factory) {
        assert(rootIds != null, "updateRoot could be called only from render");
        var root = roots[id];
        assert(root != null);
        if (factory != null) root.f = factory;
        var rootNode = root.n;
        if (rootNode == null) return;
        var ctx = rootNode.ctx;
        ctx[ctxInvalidated] = frameCounter;
        ctx[ctxDeepness] = 1e6;
    }
    function getRoots() {
        return roots;
    }
    function finishInitialize() {
        initializing = false;
        __export_invalidate();
    }
    var beforeInit = finishInitialize;
    function firstInvalidate() {
        initializing = true;
        beforeInit();
        beforeInit = finishInitialize;
    }
    function init(factory, element) {
        assert(rootIds == null, "init should not be called from render");
        removeRoot("0");
        roots["0"] = {
            f: factory,
            e: element,
            c: [],
            p: undefined,
            n: undefined
        };
        firstInvalidate();
    }
    function setBeforeInit(callback) {
        var prevBeforeInit = beforeInit;
        beforeInit = function() {
            callback(prevBeforeInit);
        };
    }
    var currentCtxWithEvents;
    function bubble(node, name_index, param) {
        var prevCtx = currentCtxWithEvents;
        var res;
        while (node) {
            var c = node.component;
            if (c) {
                var ctx = node.ctx;
                currentCtxWithEvents = ctx;
                var m = c[name_index];
                if (m) {
                    var eventResult = +m.call(c, ctx, param);
                    if (eventResult == EventResult.HandledPreventDefault) {
                        currentCtxWithEvents = prevCtx;
                        return ctx;
                    }
                    if (eventResult == EventResult.HandledButRunDefault) {
                        currentCtxWithEvents = prevCtx;
                        return undefined;
                    }
                    if (eventResult == EventResult.NotHandledPreventDefault) {
                        res = ctx;
                    }
                }
                m = c.shouldStopBubble;
                if (m) {
                    if (m.call(c, ctx, name_index, param)) break;
                }
            }
            node = node.parent;
        }
        currentCtxWithEvents = prevCtx;
        return res;
    }
    function broadcastEventToNode(node, name_index, param) {
        if (!node) return undefined;
        var res;
        var c = node.component;
        if (c) {
            var ctx = node.ctx;
            var prevCtx = currentCtxWithEvents;
            currentCtxWithEvents = ctx;
            var m = c[name_index];
            if (m) {
                var eventResult = +m.call(c, ctx, param);
                if (eventResult == EventResult.HandledPreventDefault) {
                    currentCtxWithEvents = prevCtx;
                    return ctx;
                }
                if (eventResult == EventResult.HandledButRunDefault) {
                    currentCtxWithEvents = prevCtx;
                    return undefined;
                }
                if (eventResult == EventResult.NotHandledPreventDefault) {
                    res = ctx;
                }
            }
            m = c.shouldStopBroadcast;
            if (m) {
                if (m.call(c, ctx, name_index, param)) {
                    currentCtxWithEvents = prevCtx;
                    return res;
                }
            }
            currentCtxWithEvents = prevCtx;
        }
        var ch = node.children;
        if (__export_isArray(ch)) {
            for (var i_index = 0; i_index < ch.length; i_index++) {
                var res2 = broadcastEventToNode(ch[i_index], name_index, param);
                if (res2 != undefined) return res2;
            }
        }
        return res;
    }
    function broadcast(name_index, param) {
        var k = Object.keys(roots);
        for (var i_index = 0; i_index < k.length; i_index++) {
            var ch = roots[k[i_index]].n;
            if (ch != null) {
                var res = broadcastEventToNode(ch, name_index, param);
                if (res != null) return res;
            }
        }
        return undefined;
    }
    function runMethodFrom(ctx, methodId, param) {
        var done = false;
        if (DEBUG && ctx == undefined) throw new Error("runMethodFrom ctx is undefined");
        var currentRoot = ctx.me;
        var previousRoot;
        while (currentRoot != undefined) {
            var children = currentRoot.children;
            if (__export_isArray(children)) loopChildNodes(children);
            if (done) return true;
            var comp = currentRoot.component;
            if (comp && comp.runMethod) {
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = currentRoot.ctx;
                if (comp.runMethod(currentCtxWithEvents, methodId, param)) done = true;
                currentCtxWithEvents = prevCtx;
            }
            if (done) return true;
            previousRoot = currentRoot;
            currentRoot = currentRoot.parent;
        }
        function loopChildNodes(children) {
            for (var i_index = children.length - 1; i_index >= 0; i_index--) {
                var child = children[i_index];
                if (child === previousRoot) continue;
                __export_isArray(child.children) && loopChildNodes(child.children);
                if (done) return;
                var comp = child.component;
                if (comp && comp.runMethod) {
                    var prevCtx = currentCtxWithEvents;
                    currentCtxWithEvents = child.ctx;
                    if (comp.runMethod(currentCtxWithEvents, methodId, param)) {
                        currentCtxWithEvents = prevCtx;
                        done = true;
                        return;
                    }
                    currentCtxWithEvents = prevCtx;
                }
            }
        }
        return done;
    }
    function getCurrentCtxWithEvents() {
        if (currentCtxWithEvents != undefined) return currentCtxWithEvents;
        return currentCtx;
    }
    function tryRunMethod(methodId, param) {
        return runMethodFrom(getCurrentCtxWithEvents(), methodId, param);
    }
    function runMethod(methodId, param) {
        if (!runMethodFrom(getCurrentCtxWithEvents(), methodId, param)) throw Error("runMethod didn't found " + methodId);
    }
    var lastMethodId = 0;
    function allocateMethodId() {
        return lastMethodId++;
    }
    function merge(f1, f2) {
        return function() {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var result = f1.apply(this, params);
            if (result) return result;
            return f2.apply(this, params);
        };
    }
    var emptyObject = {};
    function mergeComponents(c1, c2) {
        var res = Object.create(c1);
        res.super = c1;
        for (var i_index in c2) {
            if (!(i_index in emptyObject)) {
                var m = c2[i_index];
                var origM = c1[i_index];
                if (i_index === "id") {
                    res[i_index] = (origM != null ? origM : "") + "/" + m;
                } else if (isFunction(m) && origM != null && isFunction(origM)) {
                    res[i_index] = merge(origM, m);
                } else {
                    res[i_index] = m;
                }
            }
        }
        return res;
    }
    function overrideComponents(originalComponent, overridingComponent) {
        var res = Object.create(originalComponent);
        res.super = originalComponent;
        for (var i_9 in overridingComponent) {
            if (!(i_9 in emptyObject)) {
                var m = overridingComponent[i_9];
                var origM = originalComponent[i_9];
                if (i_9 === "id") {
                    res[i_9] = (origM != null ? origM : "") + "/" + m;
                } else {
                    res[i_9] = m;
                }
            }
        }
        return res;
    }
    function preEnhance(node, methods) {
        var comp = node.component;
        if (!comp) {
            node.component = methods;
            return node;
        }
        node.component = mergeComponents(methods, comp);
        return node;
    }
    function postEnhance(node, methods) {
        var comp = node.component;
        if (!comp) {
            node.component = methods;
            return node;
        }
        node.component = mergeComponents(comp, methods);
        return node;
    }
    function preventDefault(event) {
        var pd = event.preventDefault;
        if (pd) pd.call(event); else event.returnValue = false;
    }
    function cloneNodeArray(a) {
        a = a.slice(0);
        for (var i_index = 0; i_index < a.length; i_index++) {
            var n = a[i_index];
            if (__export_isArray(n)) {
                a[i_index] = cloneNodeArray(n);
            } else if (isObject(n)) {
                a[i_index] = cloneNode(n);
            }
        }
        return a;
    }
    function cloneNode(node) {
        var r = __export_assign({}, node);
        if (r.attrs) {
            r.attrs = __export_assign({}, r.attrs);
        }
        if (isObject(r.style)) {
            r.style = __export_assign({}, r.style);
        }
        var ch = r.children;
        if (ch) {
            if (__export_isArray(ch)) {
                r.children = cloneNodeArray(ch);
            } else if (isObject(ch)) {
                r.children = cloneNode(ch);
            }
        }
        return r;
    }
    function setStyleShim(name_index, action) {
        mapping[name_index] = action;
    }
    function uptime() {
        return uptimeMs;
    }
    function lastFrameDuration() {
        return lastFrameDurationMs;
    }
    function frame() {
        return frameCounter;
    }
    function invalidated() {
        return isInvalidated;
    }
    var media = null;
    var breaks = [ [ 414, 800, 900 ], [ 736, 1280, 1440 ] ];
    function emitOnMediaChange() {
        media = null;
        __export_invalidate();
        return false;
    }
    var events = [ "resize", "orientationchange" ];
    for (var i = 0; i < events.length; i++) addEvent(events[i], 10, emitOnMediaChange);
    function accDeviceBreaks(newBreaks) {
        if (newBreaks != null) {
            breaks = newBreaks;
            emitOnMediaChange();
        }
        return breaks;
    }
    var viewport = window.document.documentElement;
    var isAndroid = /Android/i.test(navigator.userAgent);
    var weirdPortrait;
    function getMedia() {
        if (media == null) {
            var w = viewport.clientWidth;
            var h = viewport.clientHeight;
            var o = window.orientation;
            var p = h >= w;
            if (o == null) o = p ? 0 : 90; else o = +o;
            if (isAndroid) {
                var op = Math.abs(o) % 180 === 90;
                if (weirdPortrait == null) {
                    weirdPortrait = op === p;
                } else {
                    p = op === weirdPortrait;
                }
            }
            var device = 0;
            while (w > breaks[+!p][device]) device++;
            media = {
                width: w,
                height: h,
                orientation: o,
                deviceCategory: device,
                portrait: p,
                dppx: window.devicePixelRatio
            };
        }
        return media;
    }
    var __export_asap = function() {
        var callbacks_index = [];
        function executeCallbacks() {
            var cbList = callbacks_index;
            callbacks_index = [];
            for (var i_index = 0, len = cbList.length; i_index < len; i_index++) {
                cbList[i_index]();
            }
        }
        var onreadystatechange = "onreadystatechange";
        if (window.MutationObserver) {
            var hiddenDiv = document.createElement("div");
            new MutationObserver(executeCallbacks).observe(hiddenDiv, {
                attributes: true
            });
            return function(callback) {
                if (!callbacks_index.length) {
                    hiddenDiv.setAttribute("yes", "no");
                }
                callbacks_index.push(callback);
            };
        } else if (!window.setImmediate && window.postMessage && window.addEventListener) {
            var MESSAGE_PREFIX = "basap" + Math.random(), hasPostMessage = false;
            var onGlobalMessage = function(event) {
                if (event.source === window && event.data === MESSAGE_PREFIX) {
                    hasPostMessage = false;
                    executeCallbacks();
                }
            };
            window.addEventListener("message", onGlobalMessage, false);
            return function(fn) {
                callbacks_index.push(fn);
                if (!hasPostMessage) {
                    hasPostMessage = true;
                    window.postMessage(MESSAGE_PREFIX, "*");
                }
            };
        } else if (!window.setImmediate && onreadystatechange in document.createElement("script")) {
            var scriptEl;
            return function(callback) {
                callbacks_index.push(callback);
                if (!scriptEl) {
                    scriptEl = document.createElement("script");
                    scriptEl[onreadystatechange] = function() {
                        scriptEl[onreadystatechange] = null;
                        scriptEl.parentNode.removeChild(scriptEl);
                        scriptEl = null;
                        executeCallbacks();
                    };
                    document.body.appendChild(scriptEl);
                }
            };
        } else {
            var timeout;
            var timeoutFn = window.setImmediate || setTimeout;
            return function(callback) {
                callbacks_index.push(callback);
                if (!timeout) {
                    timeout = timeoutFn(function() {
                        timeout = undefined;
                        executeCallbacks();
                    }, 0);
                }
            };
        }
    }();
    if (!window.Promise) {
        (function() {
            function bind(fn, thisArg) {
                return function() {
                    fn.apply(thisArg, arguments);
                };
            }
            function handle(deferred) {
                var _this = this;
                if (this.s === null) {
                    this.d.push(deferred);
                    return;
                }
                __export_asap(function() {
                    var cb = _this.s ? deferred[0] : deferred[1];
                    if (cb == null) {
                        (_this.s ? deferred[2] : deferred[3])(_this.v);
                        return;
                    }
                    var ret;
                    try {
                        ret = cb(_this.v);
                    } catch (e) {
                        deferred[3](e);
                        return;
                    }
                    deferred[2](ret);
                });
            }
            function finale() {
                for (var i_index = 0, len = this.d.length; i_index < len; i_index++) {
                    handle.call(this, this.d[i_index]);
                }
                this.d = null;
            }
            function reject(newValue) {
                this.s = false;
                this.v = newValue;
                finale.call(this);
            }
            function doResolve(fn, onFulfilled, onRejected) {
                var done = false;
                try {
                    fn(function(value) {
                        if (done) return;
                        done = true;
                        onFulfilled(value);
                    }, function(reason) {
                        if (done) return;
                        done = true;
                        onRejected(reason);
                    });
                } catch (ex) {
                    if (done) return;
                    done = true;
                    onRejected(ex);
                }
            }
            function resolve(newValue) {
                try {
                    if (newValue === this) throw new TypeError("Promise self resolve");
                    if (Object(newValue) === newValue) {
                        var then = newValue.then;
                        if (typeof then === "function") {
                            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
                            return;
                        }
                    }
                    this.s = true;
                    this.v = newValue;
                    finale.call(this);
                } catch (e) {
                    reject.call(this, e);
                }
            }
            function Promise(fn) {
                this.s = null;
                this.v = null;
                this.d = [];
                doResolve(fn, bind(resolve, this), bind(reject, this));
            }
            Promise.prototype.then = function(onFulfilled, onRejected) {
                var me = this;
                return new Promise(function(resolve, reject) {
                    handle.call(me, [ onFulfilled, onRejected, resolve, reject ]);
                });
            };
            Promise.prototype["catch"] = function(onRejected) {
                return this.then(undefined, onRejected);
            };
            Promise.all = function() {
                var args = [].slice.call(arguments.length === 1 && __export_isArray(arguments[0]) ? arguments[0] : arguments);
                return new Promise(function(resolve, reject) {
                    if (args.length === 0) {
                        resolve(args);
                        return;
                    }
                    var remaining = args.length;
                    function res(i_index, val) {
                        try {
                            if (val && (typeof val === "object" || typeof val === "function")) {
                                var then = val.then;
                                if (typeof then === "function") {
                                    then.call(val, function(val) {
                                        res(i_index, val);
                                    }, reject);
                                    return;
                                }
                            }
                            args[i_index] = val;
                            if (--remaining === 0) {
                                resolve(args);
                            }
                        } catch (ex) {
                            reject(ex);
                        }
                    }
                    for (var i_index = 0; i_index < args.length; i_index++) {
                        res(i_index, args[i_index]);
                    }
                });
            };
            Promise.resolve = function(value) {
                if (value && typeof value === "object" && value.constructor === Promise) {
                    return value;
                }
                return new Promise(function(resolve) {
                    resolve(value);
                });
            };
            Promise.reject = function(value) {
                return new Promise(function(_resolve, reject) {
                    reject(value);
                });
            };
            Promise.race = function(values) {
                return new Promise(function(resolve, reject) {
                    for (var i_index = 0, len = values.length; i_index < len; i_index++) {
                        values[i_index].then(resolve, reject);
                    }
                });
            };
            window["Promise"] = Promise;
        })();
    }
    if (ieVersion() === 9) {
        (function() {
            function addFilter(s, v) {
                if (s.zoom == null) s.zoom = "1";
                var f = s.filter;
                s.filter = f == null ? v : f + " " + v;
            }
            var simpleLinearGradient = /^linear\-gradient\(to (.+?),(.+?),(.+?)\)/gi;
            setStyleShim("background", function(s, v, oldName) {
                var match = simpleLinearGradient.exec(v);
                if (match == null) return;
                var dir = match[1];
                var color1 = match[2];
                var color2 = match[3];
                var tmp;
                switch (dir) {
                  case "top":
                    dir = "0";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;

                  case "bottom":
                    dir = "0";
                    break;

                  case "left":
                    dir = "1";
                    tmp = color1;
                    color1 = color2;
                    color2 = tmp;
                    break;

                  case "right":
                    dir = "1";
                    break;

                  default:
                    return;
                }
                s[oldName] = "none";
                addFilter(s, "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "',endColorstr='" + color2 + "', gradientType='" + dir + "')");
            });
        })();
    } else {
        (function() {
            var testStyle = document.createElement("div").style;
            testStyle.cssText = "background:-webkit-linear-gradient(top,red,red)";
            if (testStyle.background.length > 0) {
                (function() {
                    var startsWithGradient = /^(?:repeating\-)?(?:linear|radial)\-gradient/gi;
                    var revDirs = {
                        top: "bottom",
                        bottom: "top",
                        left: "right",
                        right: "left"
                    };
                    function gradientWebkitConvertor(style_index, value, name_index) {
                        if (startsWithGradient.test(value)) {
                            var pos = value.indexOf("(to ");
                            if (pos > 0) {
                                pos += 4;
                                var posEnd = value.indexOf(",", pos);
                                var dir = value.slice(pos, posEnd);
                                dir = dir.split(" ").map(function(v) {
                                    return revDirs[v] || v;
                                }).join(" ");
                                value = value.slice(0, pos - 3) + dir + value.slice(posEnd);
                            }
                            value = "-webkit-" + value;
                        }
                        style_index[name_index] = value;
                    }
                    setStyleShim("background", gradientWebkitConvertor);
                })();
            }
        })();
    }
    var bValue = "b$value";
    var bSelectionStart = "b$selStart";
    var bSelectionEnd = "b$selEnd";
    var tValue = "value";
    function isCheckboxLike(el) {
        var t = el.type;
        return t === "checkbox" || t === "radio";
    }
    function stringArrayEqual(a1, a2) {
        var l = a1.length;
        if (l !== a2.length) return false;
        for (var j_index = 0; j_index < l; j_index++) {
            if (a1[j_index] !== a2[j_index]) return false;
        }
        return true;
    }
    function stringArrayContains(a, v) {
        for (var j_index = 0; j_index < a.length; j_index++) {
            if (a[j_index] === v) return true;
        }
        return false;
    }
    function selectedArray(options_index) {
        var res = [];
        for (var j_index = 0; j_index < options_index.length; j_index++) {
            if (options_index[j_index].selected) res.push(options_index[j_index].value);
        }
        return res;
    }
    var prevSetValueCallback = setSetValue(function(el, node, newValue, oldValue) {
        var tagName = el.tagName;
        var isSelect = tagName === "SELECT";
        var isInput = tagName === "INPUT" || tagName === "TEXTAREA";
        if (!isInput && !isSelect) {
            prevSetValueCallback(el, node, newValue, oldValue);
            return;
        }
        if (node.ctx === undefined) {
            node.ctx = {
                me: node
            };
            node.component = emptyComponent;
        }
        if (oldValue === undefined) {
            node.ctx[bValue] = newValue;
        }
        var isMultiSelect = isSelect && el.multiple;
        var emitDiff = false;
        if (isMultiSelect) {
            var options_index = el.options;
            var currentMulti = selectedArray(options_index);
            if (!stringArrayEqual(newValue, currentMulti)) {
                if (oldValue === undefined || stringArrayEqual(currentMulti, oldValue) || !stringArrayEqual(newValue, node.ctx[bValue])) {
                    for (var j_index = 0; j_index < options_index.length; j_index++) {
                        options_index[j_index].selected = stringArrayContains(newValue, options_index[j_index].value);
                    }
                    currentMulti = selectedArray(options_index);
                    if (stringArrayEqual(currentMulti, newValue)) {
                        emitDiff = true;
                    }
                } else {
                    emitDiff = true;
                }
            }
        } else if (isInput || isSelect) {
            if (isInput && isCheckboxLike(el)) {
                var currentChecked = el.checked;
                if (newValue !== currentChecked) {
                    if (oldValue === undefined || currentChecked === oldValue || newValue !== node.ctx[bValue]) {
                        el.checked = newValue;
                    } else {
                        emitDiff = true;
                    }
                }
            } else {
                var isCombobox = isSelect && el.size < 2;
                var currentValue = el[tValue];
                if (newValue !== currentValue) {
                    if (oldValue === undefined || currentValue === oldValue || newValue !== node.ctx[bValue]) {
                        if (isSelect) {
                            if (newValue === "") {
                                el.selectedIndex = isCombobox ? 0 : -1;
                            } else {
                                el[tValue] = newValue;
                            }
                            if (newValue !== "" || isCombobox) {
                                currentValue = el[tValue];
                                if (newValue !== currentValue) {
                                    emitDiff = true;
                                }
                            }
                        } else {
                            el[tValue] = newValue;
                        }
                    } else {
                        emitDiff = true;
                    }
                }
            }
        }
        if (emitDiff) {
            emitOnChange(undefined, el, node);
        } else {
            node.ctx[bValue] = newValue;
        }
    });
    function emitOnChange(ev, target, node) {
        if (target && target.nodeName === "OPTION") {
            target = document.activeElement;
            node = deref(target);
        }
        if (!node) {
            return false;
        }
        var c = node.component;
        var hasProp = node.attrs && node.attrs[bValue];
        var hasOnChange = c && c.onChange != null;
        var hasPropOrOnChange = hasProp || hasOnChange;
        var hasOnSelectionChange = c && c.onSelectionChange != null;
        if (!hasPropOrOnChange && !hasOnSelectionChange) return false;
        var ctx = node.ctx;
        var tagName = target.tagName;
        var isSelect = tagName === "SELECT";
        var isMultiSelect = isSelect && target.multiple;
        if (hasPropOrOnChange && isMultiSelect) {
            var vs = selectedArray(target.options);
            if (!stringArrayEqual(ctx[bValue], vs)) {
                ctx[bValue] = vs;
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = ctx;
                if (hasProp) hasProp(vs);
                if (hasOnChange) c.onChange(ctx, vs);
                currentCtxWithEvents = prevCtx;
            }
        } else if (hasPropOrOnChange && isCheckboxLike(target)) {
            if (ev && ev.type === "change") {
                setTimeout(function() {
                    emitOnChange(undefined, target, node);
                }, 10);
                return false;
            }
            if (target.type === "radio") {
                var radios = document.getElementsByName(target.name);
                for (var j_index = 0; j_index < radios.length; j_index++) {
                    var radio = radios[j_index];
                    var radioNode = deref(radio);
                    if (!radioNode) continue;
                    var rbHasProp = node.attrs[bValue];
                    var radioComponent = radioNode.component;
                    var rbHasOnChange = radioComponent && radioComponent.onChange != null;
                    if (!rbHasProp && !rbHasOnChange) continue;
                    var radioCtx = radioNode.ctx;
                    var vrb = radio.checked;
                    if (radioCtx[bValue] !== vrb) {
                        radioCtx[bValue] = vrb;
                        var prevCtx = currentCtxWithEvents;
                        currentCtxWithEvents = radioCtx;
                        if (rbHasProp) rbHasProp(vrb);
                        if (rbHasOnChange) radioComponent.onChange(radioCtx, vrb);
                        currentCtxWithEvents = prevCtx;
                    }
                }
            } else {
                var vb = target.checked;
                if (ctx[bValue] !== vb) {
                    ctx[bValue] = vb;
                    var prevCtx = currentCtxWithEvents;
                    currentCtxWithEvents = ctx;
                    if (hasProp) hasProp(vb);
                    if (hasOnChange) c.onChange(ctx, vb);
                    currentCtxWithEvents = prevCtx;
                }
            }
        } else {
            if (hasPropOrOnChange) {
                var v = target.value;
                if (ctx[bValue] !== v) {
                    ctx[bValue] = v;
                    var prevCtx = currentCtxWithEvents;
                    currentCtxWithEvents = ctx;
                    if (hasProp) hasProp(v);
                    if (hasOnChange) c.onChange(ctx, v);
                    currentCtxWithEvents = prevCtx;
                }
            }
            if (hasOnSelectionChange) {
                var sStart = target.selectionStart;
                var sEnd = target.selectionEnd;
                var sDir = target.selectionDirection;
                var swap = false;
                var oStart = ctx[bSelectionStart];
                if (sDir == null) {
                    if (sEnd === oStart) swap = true;
                } else if (sDir === "backward") {
                    swap = true;
                }
                if (swap) {
                    var s = sStart;
                    sStart = sEnd;
                    sEnd = s;
                }
                emitOnSelectionChange(node, sStart, sEnd);
            }
        }
        return false;
    }
    function emitOnSelectionChange(node, start, end) {
        var c = node.component;
        var ctx = node.ctx;
        if (c && (ctx[bSelectionStart] !== start || ctx[bSelectionEnd] !== end)) {
            ctx[bSelectionStart] = start;
            ctx[bSelectionEnd] = end;
            if (c.onSelectionChange) {
                var prevCtx = currentCtxWithEvents;
                currentCtxWithEvents = ctx;
                c.onSelectionChange(ctx, {
                    startPosition: start,
                    endPosition: end
                });
                currentCtxWithEvents = prevCtx;
            }
        }
    }
    function select(node, start, end) {
        if (end === void 0) {
            end = start;
        }
        node.element.setSelectionRange(Math.min(start, end), Math.max(start, end), start > end ? "backward" : "forward");
        emitOnSelectionChange(node, start, end);
    }
    function emitOnMouseChange(ev, _target, _node) {
        var f = focused();
        if (f) emitOnChange(ev, f.element, f);
        return false;
    }
    var events = [ "input", "cut", "paste", "keydown", "keypress", "keyup", "click", "change" ];
    for (var i = 0; i < events.length; i++) addEvent(events[i], 10, emitOnChange);
    var mouseEvents = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel" ];
    for (var i = 0; i < mouseEvents.length; i++) addEvent(mouseEvents[i], 2, emitOnMouseChange);
    function buildParam(ev) {
        return {
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            which: ev.which || ev.keyCode
        };
    }
    function emitOnKeyDown(ev, _target, node) {
        if (!node) return false;
        var param = buildParam(ev);
        if (bubble(node, "onKeyDown", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function emitOnKeyUp(ev, _target, node) {
        if (!node) return false;
        var param = buildParam(ev);
        if (bubble(node, "onKeyUp", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function emitOnKeyPress(ev, _target, node) {
        if (!node) return false;
        if (ev.which === 0 || ev.altKey) return false;
        var param = {
            charCode: ev.which || ev.keyCode
        };
        if (bubble(node, "onKeyPress", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    addEvent("keydown", 50, emitOnKeyDown);
    addEvent("keyup", 50, emitOnKeyUp);
    addEvent("keypress", 50, emitOnKeyPress);
    var MoveOverIsNotTap = 13;
    var TapShouldBeShorterThanMs = 750;
    var MaxBustDelay = 500;
    var MaxBustDelayForIE = 800;
    var BustDistance = 50;
    var ownerCtx = null;
    var invokingOwner;
    var onClickText = "onClick";
    var onDoubleClickText = "onDoubleClick";
    function isMouseOwner(ctx) {
        return ownerCtx === ctx;
    }
    function isMouseOwnerEvent() {
        return invokingOwner;
    }
    function registerMouseOwner(ctx) {
        ownerCtx = ctx;
    }
    function releaseMouseOwner() {
        ownerCtx = null;
    }
    function invokeMouseOwner(handlerName, param) {
        if (ownerCtx == null) {
            return false;
        }
        var c = ownerCtx.me.component;
        var handler = c[handlerName];
        if (!handler) {
            return false;
        }
        invokingOwner = true;
        var prevCtx = currentCtxWithEvents;
        currentCtxWithEvents = ownerCtx;
        var stop = handler.call(c, ownerCtx, param);
        currentCtxWithEvents = prevCtx;
        invokingOwner = false;
        return stop;
    }
    function hasPointerEventsNoneB(node) {
        while (node) {
            var s = node.style;
            if (s) {
                var e = s.pointerEvents;
                if (e !== undefined) {
                    if (e === "none") return true;
                    return false;
                }
            }
            node = node.parent;
        }
        return false;
    }
    function hasPointerEventsNone(target) {
        var bNode = deref(target);
        return hasPointerEventsNoneB(bNode);
    }
    function revertVisibilityChanges(hiddenEls) {
        if (hiddenEls.length) {
            for (var i_index = hiddenEls.length - 1; i_index >= 0; --i_index) {
                hiddenEls[i_index].t.style.visibility = hiddenEls[i_index].p;
            }
            return true;
        }
        return false;
    }
    function pushAndHide(hiddenEls, t) {
        hiddenEls.push({
            t: t,
            p: t.style.visibility
        });
        t.style.visibility = "hidden";
    }
    function pointerThroughIE(ev, target, _node) {
        var hiddenEls = [];
        var t = target;
        while (hasPointerEventsNone(t)) {
            pushAndHide(hiddenEls, t);
            t = document.elementFromPoint(ev.x, ev.y);
        }
        if (revertVisibilityChanges(hiddenEls)) {
            try {
                t.dispatchEvent(ev);
            } catch (e) {
                return false;
            }
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function addEvent5(name_index, callback) {
        addEvent(name_index, 5, callback);
    }
    var pointersEventNames = [ "PointerDown", "PointerMove", "PointerUp", "PointerCancel" ];
    var i;
    if (ieVersion() && ieVersion() < 11) {
        var mouseEvents = [ "click", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "scroll", "wheel" ];
        for (i = 0; i < mouseEvents.length; ++i) {
            addEvent(mouseEvents[i], 1, pointerThroughIE);
        }
    }
    function type2Bobril(t) {
        if (t === "mouse" || t === 4) return 0;
        if (t === "pen" || t === 3) return 2;
        return 1;
    }
    function pointerEventsNoneFix(x, y, target, node) {
        var hiddenEls = [];
        var t = target;
        while (hasPointerEventsNoneB(node)) {
            pushAndHide(hiddenEls, t);
            t = document.elementFromPoint(x, y);
            node = deref(t);
        }
        revertVisibilityChanges(hiddenEls);
        return [ t, node ];
    }
    function buildHandlerPointer(name_index) {
        return function handlePointerDown_index(ev, target, node) {
            if (hasPointerEventsNoneB(node)) {
                var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            var button = ev.button + 1;
            var type = type2Bobril(ev.pointerType);
            var buttons = ev.buttons;
            if (button === 0 && type === 0 && buttons) {
                button = 1;
                while (!(buttons & 1)) {
                    buttons = buttons >> 1;
                    button++;
                }
            }
            var param = {
                id: ev.pointerId,
                cancelable: normalizeCancelable(ev),
                type: type,
                x: ev.clientX,
                y: ev.clientY,
                button: button,
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail
            };
            if (emitEvent("!" + name_index, param, target, node)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function buildHandlerTouch(name_index) {
        return function handlePointerDown_index(ev, target, node) {
            var preventDef = false;
            for (var i_index = 0; i_index < ev.changedTouches.length; i_index++) {
                var t = ev.changedTouches[i_index];
                target = document.elementFromPoint(t.clientX, t.clientY);
                node = deref(target);
                var param = {
                    id: t.identifier + 2,
                    cancelable: normalizeCancelable(ev),
                    type: 1,
                    x: t.clientX,
                    y: t.clientY,
                    button: 1,
                    shift: ev.shiftKey,
                    ctrl: ev.ctrlKey,
                    alt: ev.altKey,
                    meta: ev.metaKey || false,
                    count: ev.detail
                };
                if (emitEvent("!" + name_index, param, target, node)) preventDef = true;
            }
            if (preventDef) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function buildHandlerMouse(name_index) {
        return function handlePointer(ev, target, node) {
            target = document.elementFromPoint(ev.clientX, ev.clientY);
            node = deref(target);
            if (hasPointerEventsNoneB(node)) {
                var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                target = fixed[0];
                node = fixed[1];
            }
            var param = {
                id: 1,
                type: 0,
                cancelable: normalizeCancelable(ev),
                x: ev.clientX,
                y: ev.clientY,
                button: decodeButton(ev),
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail
            };
            if (emitEvent("!" + name_index, param, target, node)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function listenMouse() {
        addEvent5("mousedown", buildHandlerMouse(pointersEventNames[0]));
        addEvent5("mousemove", buildHandlerMouse(pointersEventNames[1]));
        addEvent5("mouseup", buildHandlerMouse(pointersEventNames[2]));
    }
    if (window.ontouchstart !== undefined) {
        addEvent5("touchstart", buildHandlerTouch(pointersEventNames[0]));
        addEvent5("touchmove", buildHandlerTouch(pointersEventNames[1]));
        addEvent5("touchend", buildHandlerTouch(pointersEventNames[2]));
        addEvent5("touchcancel", buildHandlerTouch(pointersEventNames[3]));
        listenMouse();
    } else if (window.onpointerdown !== undefined) {
        for (i = 0; i < 4; i++) {
            var name = pointersEventNames[i];
            addEvent5(name.toLowerCase(), buildHandlerPointer(name));
        }
    } else if (window.onmspointerdown !== undefined) {
        for (i = 0; i < 4; i++) {
            var name = pointersEventNames[i];
            addEvent5("@MS" + name, buildHandlerPointer(name));
        }
    } else {
        listenMouse();
    }
    for (var j = 0; j < 4; j++) {
        (function(name_index) {
            var onName = "on" + name_index;
            addEvent("!" + name_index, 50, function(ev, _target, node) {
                return invokeMouseOwner(onName, ev) || bubble(node, onName, ev) != undefined;
            });
        })(pointersEventNames[j]);
    }
    var pointersDown = newHashObj();
    var toBust = [];
    var firstPointerDown = -1;
    var firstPointerDownTime = 0;
    var firstPointerDownX = 0;
    var firstPointerDownY = 0;
    var tapCanceled = false;
    var lastMouseEv;
    function diffLess(n1, n2, diff) {
        return Math.abs(n1 - n2) < diff;
    }
    var prevMousePath = [];
    function revalidateMouseIn() {
        if (lastMouseEv) {
            mouseEnterAndLeave(lastMouseEv);
            handlePointerMove(lastMouseEv, undefined, deref(document.elementFromPoint(lastMouseEv.x, lastMouseEv.y)));
        }
    }
    function mouseEnterAndLeave(ev) {
        lastMouseEv = ev;
        var t = document.elementFromPoint(ev.x, ev.y);
        var toPath = vdomPath(t);
        var node = toPath.length == 0 ? undefined : toPath[toPath.length - 1];
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.x, ev.y, t, node == null ? undefined : node);
            t = fixed[0];
            toPath = vdomPath(t);
        }
        bubble(node, "onMouseOver", ev);
        var common = 0;
        while (common < prevMousePath.length && common < toPath.length && prevMousePath[common] === toPath[common]) common++;
        var n;
        var c;
        var i_index = prevMousePath.length;
        if (i_index > 0) {
            n = prevMousePath[i_index - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseOut) c.onMouseOut(n.ctx, ev);
            }
        }
        while (i_index > common) {
            i_index--;
            n = prevMousePath[i_index];
            if (n) {
                c = n.component;
                if (c && c.onMouseLeave) c.onMouseLeave(n.ctx, ev);
            }
        }
        while (i_index < toPath.length) {
            n = toPath[i_index];
            if (n) {
                c = n.component;
                if (c && c.onMouseEnter) c.onMouseEnter(n.ctx, ev);
            }
            i_index++;
        }
        prevMousePath = toPath;
        if (i_index > 0) {
            n = prevMousePath[i_index - 1];
            if (n) {
                c = n.component;
                if (c && c.onMouseIn) c.onMouseIn(n.ctx, ev);
            }
        }
        return false;
    }
    function noPointersDown() {
        return Object.keys(pointersDown).length === 0;
    }
    function bustingPointerDown(ev, _target, _node) {
        if (firstPointerDown === -1 && noPointersDown()) {
            firstPointerDown = ev.id;
            firstPointerDownTime = __export_now();
            firstPointerDownX = ev.x;
            firstPointerDownY = ev.y;
            tapCanceled = false;
            mouseEnterAndLeave(ev);
        }
        pointersDown[ev.id] = ev.type;
        if (firstPointerDown !== ev.id) {
            tapCanceled = true;
        }
        return false;
    }
    function bustingPointerMove(ev, target, node) {
        if (ev.type === 0 && ev.button === 0 && pointersDown[ev.id] != null) {
            ev.button = 1;
            emitEvent("!PointerUp", ev, target, node);
            ev.button = 0;
        }
        if (firstPointerDown === ev.id) {
            mouseEnterAndLeave(ev);
            if (!diffLess(firstPointerDownX, ev.x, MoveOverIsNotTap) || !diffLess(firstPointerDownY, ev.y, MoveOverIsNotTap)) tapCanceled = true;
        } else if (noPointersDown()) {
            mouseEnterAndLeave(ev);
        }
        return false;
    }
    var clickingSpreeStart = 0;
    var clickingSpreeCount = 0;
    function shouldPreventClickingSpree(clickCount) {
        if (clickingSpreeCount == 0) return false;
        var n = __export_now();
        if (n < clickingSpreeStart + 1e3 && clickCount >= clickingSpreeCount) {
            clickingSpreeStart = n;
            clickingSpreeCount = clickCount;
            return true;
        }
        clickingSpreeCount = 0;
        return false;
    }
    function preventClickingSpree() {
        clickingSpreeCount = 2;
        clickingSpreeStart = __export_now();
    }
    function bustingPointerUp(ev, target, node) {
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            mouseEnterAndLeave(ev);
            firstPointerDown = -1;
            if (ev.type == 1 && !tapCanceled) {
                if (__export_now() - firstPointerDownTime < TapShouldBeShorterThanMs) {
                    emitEvent("!PointerCancel", ev, target, node);
                    shouldPreventClickingSpree(1);
                    var handled = invokeMouseOwner(onClickText, ev) || bubble(node, onClickText, ev) != null;
                    var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
                    toBust.push([ ev.x, ev.y, __export_now() + delay, handled ? 1 : 0 ]);
                    return handled;
                }
            } else if (tapCanceled) {
                __export_ignoreClick(ev.x, ev.y);
            }
        }
        return false;
    }
    function bustingPointerCancel(ev, _target, _node) {
        delete pointersDown[ev.id];
        if (firstPointerDown == ev.id) {
            firstPointerDown = -1;
        }
        return false;
    }
    function bustingClick(ev, _target, _node) {
        var n = __export_now();
        for (var i_index = 0; i_index < toBust.length; i_index++) {
            var j_index = toBust[i_index];
            if (j_index[2] < n) {
                toBust.splice(i_index, 1);
                i_index--;
                continue;
            }
            if (diffLess(j_index[0], ev.clientX, BustDistance) && diffLess(j_index[1], ev.clientY, BustDistance)) {
                toBust.splice(i_index, 1);
                if (j_index[3]) preventDefault(ev);
                return true;
            }
        }
        return false;
    }
    var bustingEventNames = [ "!PointerDown", "!PointerMove", "!PointerUp", "!PointerCancel", "^click" ];
    var bustingEventHandlers = [ bustingPointerDown, bustingPointerMove, bustingPointerUp, bustingPointerCancel, bustingClick ];
    for (var i = 0; i < 5; i++) {
        addEvent(bustingEventNames[i], 3, bustingEventHandlers[i]);
    }
    function createHandlerMouse(handlerName) {
        return function(ev, _target, node) {
            if (firstPointerDown != ev.id && !noPointersDown()) return false;
            if (invokeMouseOwner(handlerName, ev) || bubble(node, handlerName, ev)) {
                return true;
            }
            return false;
        };
    }
    var mouseHandlerNames = [ "Down", "Move", "Up", "Up" ];
    for (var i = 0; i < 4; i++) {
        addEvent(bustingEventNames[i], 80, createHandlerMouse("onMouse" + mouseHandlerNames[i]));
    }
    function decodeButton(ev) {
        return ev.which || ev.button;
    }
    function normalizeCancelable(ev) {
        var c = ev.cancelable;
        return !isBoolean(c) || c;
    }
    function createHandler(handlerName, allButtons) {
        return function(ev, target, node) {
            if (listeningEventDeepness == 1 && (target == null || target.nodeName != "INPUT" || ev.clientX != 0 || ev.clientY != 0)) {
                target = document.elementFromPoint(ev.clientX, ev.clientY);
                node = deref(target);
                if (hasPointerEventsNoneB(node)) {
                    var fixed = pointerEventsNoneFix(ev.clientX, ev.clientY, target, node);
                    target = fixed[0];
                    node = fixed[1];
                }
            }
            var button = decodeButton(ev) || 1;
            if (!allButtons && button !== 1) return false;
            var param = {
                x: ev.clientX,
                y: ev.clientY,
                button: button,
                cancelable: normalizeCancelable(ev),
                shift: ev.shiftKey,
                ctrl: ev.ctrlKey,
                alt: ev.altKey,
                meta: ev.metaKey || false,
                count: ev.detail || 1
            };
            if (handlerName == onDoubleClickText) param.count = 2;
            if (shouldPreventClickingSpree(param.count) || invokeMouseOwner(handlerName, param) || bubble(node, handlerName, param)) {
                preventDefault(ev);
                return true;
            }
            return false;
        };
    }
    function nodeOnPoint(x, y) {
        var target = document.elementFromPoint(x, y);
        var node = deref(target);
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(x, y, target, node);
            node = fixed[1];
        }
        return node;
    }
    function handleSelectStart(ev, _target, node) {
        while (node) {
            var s = node.style;
            if (s) {
                var us = s.userSelect;
                if (us === "none") {
                    preventDefault(ev);
                    return true;
                }
                if (us) {
                    break;
                }
            }
            node = node.parent;
        }
        return false;
    }
    addEvent5("selectstart", handleSelectStart);
    addEvent5("^click", createHandler(onClickText));
    addEvent5("^dblclick", createHandler(onDoubleClickText));
    addEvent5("contextmenu", createHandler("onContextMenu", true));
    var wheelSupport = ("onwheel" in document.createElement("div") ? "" : "mouse") + "wheel";
    function handleMouseWheel(ev, target, node) {
        if (hasPointerEventsNoneB(node)) {
            var fixed = pointerEventsNoneFix(ev.x, ev.y, target, node);
            target = fixed[0];
            node = fixed[1];
        }
        var button = ev.button + 1;
        var buttons = ev.buttons;
        if (button === 0 && buttons) {
            button = 1;
            while (!(buttons & 1)) {
                buttons = buttons >> 1;
                button++;
            }
        }
        var dx = 0, dy;
        if (wheelSupport == "mousewheel") {
            dy = -1 / 40 * ev.wheelDelta;
            ev.wheelDeltaX && (dx = -1 / 40 * ev.wheelDeltaX);
        } else {
            dx = ev.deltaX;
            dy = ev.deltaY;
        }
        var param = {
            dx: dx,
            dy: dy,
            x: ev.clientX,
            y: ev.clientY,
            cancelable: normalizeCancelable(ev),
            button: button,
            shift: ev.shiftKey,
            ctrl: ev.ctrlKey,
            alt: ev.altKey,
            meta: ev.metaKey || false,
            count: ev.detail
        };
        if (invokeMouseOwner("onMouseWheel", param) || bubble(node, "onMouseWheel", param)) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    addEvent5(wheelSupport, handleMouseWheel);
    var __export_pointersDownCount = function() {
        return Object.keys(pointersDown).length;
    };
    var __export_firstPointerDownId = function() {
        return firstPointerDown;
    };
    var __export_ignoreClick = function(x, y) {
        var delay = ieVersion() ? MaxBustDelayForIE : MaxBustDelay;
        toBust.push([ x, y, __export_now() + delay, 1 ]);
    };
    var currentActiveElement = undefined;
    var currentFocusedNode = undefined;
    var nodeStack = [];
    function emitOnFocusChange(inFocus) {
        var newActiveElement = document.hasFocus() || inFocus ? document.activeElement : undefined;
        if (newActiveElement !== currentActiveElement) {
            currentActiveElement = newActiveElement;
            var newStack = vdomPath(currentActiveElement);
            var common = 0;
            while (common < nodeStack.length && common < newStack.length && nodeStack[common] === newStack[common]) common++;
            var i_index = nodeStack.length - 1;
            var n;
            var c;
            if (i_index >= common) {
                n = nodeStack[i_index];
                if (n) {
                    c = n.component;
                    if (c && c.onBlur) c.onBlur(n.ctx);
                }
                i_index--;
            }
            while (i_index >= common) {
                n = nodeStack[i_index];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusOut) c.onFocusOut(n.ctx);
                }
                i_index--;
            }
            i_index = common;
            while (i_index + 1 < newStack.length) {
                n = newStack[i_index];
                if (n) {
                    c = n.component;
                    if (c && c.onFocusIn) c.onFocusIn(n.ctx);
                }
                i_index++;
            }
            if (i_index < newStack.length) {
                n = newStack[i_index];
                if (n) {
                    c = n.component;
                    if (c && c.onFocus) c.onFocus(n.ctx);
                }
                i_index++;
            }
            nodeStack = newStack;
            currentFocusedNode = nodeStack.length == 0 ? undefined : null2undefined(nodeStack[nodeStack.length - 1]);
        }
        return false;
    }
    function emitOnFocusChangeDelayed() {
        setTimeout(function() {
            return emitOnFocusChange(false);
        }, 10);
        return false;
    }
    addEvent("^focus", 50, function() {
        return emitOnFocusChange(true);
    });
    addEvent("^blur", 50, emitOnFocusChangeDelayed);
    function focused() {
        return currentFocusedNode;
    }
    function focus(node) {
        if (node == null) return false;
        if (isString(node)) return false;
        var style_index = node.style;
        if (style_index != null) {
            if (style_index.visibility === "hidden") return false;
            if (style_index.display === "none") return false;
        }
        var attrs = node.attrs;
        if (attrs != null) {
            var ti = attrs.tabindex;
            if (ti !== undefined || isNaturallyFocusable(node.tag, attrs)) {
                var el = node.element;
                el.focus();
                emitOnFocusChange(false);
                return true;
            }
        }
        var children = node.children;
        if (__export_isArray(children)) {
            for (var i_index = 0; i_index < children.length; i_index++) {
                if (focus(children[i_index])) return true;
            }
            return false;
        }
        return false;
    }
    var callbacks = [];
    function emitOnScroll(_ev, _target, node) {
        var info = {
            node: node
        };
        for (var i_index = 0; i_index < callbacks.length; i_index++) {
            callbacks[i_index](info);
        }
        return false;
    }
    addEvent("^scroll", 10, emitOnScroll);
    function addOnScroll(callback) {
        callbacks.push(callback);
    }
    function removeOnScroll(callback) {
        for (var i_index = 0; i_index < callbacks.length; i_index++) {
            if (callbacks[i_index] === callback) {
                callbacks.splice(i_index, 1);
                return;
            }
        }
    }
    var isHtml = /^(?:html)$/i;
    var isScrollOrAuto = /^(?:auto)$|^(?:scroll)$/i;
    function isScrollable(el) {
        var styles = window.getComputedStyle(el);
        var res = [ true, true ];
        if (!isHtml.test(el.nodeName)) {
            res[0] = isScrollOrAuto.test(styles.overflowX);
            res[1] = isScrollOrAuto.test(styles.overflowY);
        }
        res[0] = res[0] && el.scrollWidth > el.clientWidth;
        res[1] = res[1] && el.scrollHeight > el.clientHeight;
        return res;
    }
    function getWindowScroll() {
        var left = window.pageXOffset;
        var top = window.pageYOffset;
        return [ left, top ];
    }
    function nodePagePos(node) {
        var rect = getDomNode(node).getBoundingClientRect();
        var res = getWindowScroll();
        res[0] += rect.left;
        res[1] += rect.top;
        return res;
    }
    var CSSMatrix = function() {
        function CSSMatrix_index(data) {
            this.data = data;
        }
        CSSMatrix_index.fromString = function(s) {
            var c = s.match(/matrix3?d?\(([^\)]+)\)/i)[1].split(",");
            if (c.length === 6) {
                c = [ c[0], c[1], "0", "0", c[2], c[3], "0", "0", "0", "0", "1", "0", c[4], c[5], "0", "1" ];
            }
            return new CSSMatrix_index([ parseFloat(c[0]), parseFloat(c[4]), parseFloat(c[8]), parseFloat(c[12]), parseFloat(c[1]), parseFloat(c[5]), parseFloat(c[9]), parseFloat(c[13]), parseFloat(c[2]), parseFloat(c[6]), parseFloat(c[10]), parseFloat(c[14]), parseFloat(c[3]), parseFloat(c[7]), parseFloat(c[11]), parseFloat(c[15]) ]);
        };
        CSSMatrix_index.identity = function() {
            return new CSSMatrix_index([ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]);
        };
        CSSMatrix_index.prototype.multiply = function(m) {
            var a = this.data;
            var b = m.data;
            return new CSSMatrix_index([ a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12], a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13], a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14], a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15], a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12], a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13], a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14], a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15], a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12], a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13], a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14], a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15], a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15] ]);
        };
        CSSMatrix_index.prototype.translate = function(tx, ty, tz) {
            var z = new CSSMatrix_index([ 1, 0, 0, tx, 0, 1, 0, ty, 0, 0, 1, tz, 0, 0, 0, 1 ]);
            return this.multiply(z);
        };
        CSSMatrix_index.prototype.inverse = function() {
            var m = this.data;
            var a = m[0];
            var b = m[1];
            var c = m[2];
            var d = m[4];
            var e = m[5];
            var f = m[6];
            var g = m[8];
            var h = m[9];
            var k = m[10];
            var A = e * k - f * h;
            var B = f * g - d * k;
            var C = d * h - e * g;
            var D = c * h - b * k;
            var E = a * k - c * g;
            var F = b * g - a * h;
            var G = b * f - c * e;
            var H = c * d - a * f;
            var K = a * e - b * d;
            var det = a * A + b * B + c * C;
            var X = new CSSMatrix_index([ A / det, D / det, G / det, 0, B / det, E / det, H / det, 0, C / det, F / det, K / det, 0, 0, 0, 0, 1 ]);
            var Y = new CSSMatrix_index([ 1, 0, 0, -m[3], 0, 1, 0, -m[7], 0, 0, 1, -m[11], 0, 0, 0, 1 ]);
            return X.multiply(Y);
        };
        CSSMatrix_index.prototype.transformPoint = function(x, y) {
            var m = this.data;
            return [ m[0] * x + m[1] * y + m[3], m[4] * x + m[5] * y + m[7] ];
        };
        return CSSMatrix_index;
    }();
    function getTransformationMatrix(element) {
        var identity = CSSMatrix.identity();
        var transformationMatrix = identity;
        var x = element;
        var doc = x.ownerDocument.documentElement;
        while (x != undefined && x !== doc && x.nodeType != 1) x = x.parentNode;
        while (x != undefined && x !== doc) {
            var computedStyle = window.getComputedStyle(x, undefined);
            var c = CSSMatrix.fromString((computedStyle.transform || computedStyle.OTransform || computedStyle.WebkitTransform || computedStyle.msTransform || computedStyle.MozTransform || "none").replace(/^none$/, "matrix(1,0,0,1,0,0)"));
            transformationMatrix = c.multiply(transformationMatrix);
            x = x.parentNode;
        }
        var w;
        var h;
        if ((element.nodeName + "").toLowerCase() === "svg") {
            var cs = getComputedStyle(element, undefined);
            w = parseFloat(cs.getPropertyValue("width")) || 0;
            h = parseFloat(cs.getPropertyValue("height")) || 0;
        } else {
            w = element.offsetWidth;
            h = element.offsetHeight;
        }
        var i_index = 4;
        var left = +Infinity;
        var top = +Infinity;
        while (--i_index >= 0) {
            var p = transformationMatrix.transformPoint(i_index === 0 || i_index === 1 ? 0 : w, i_index === 0 || i_index === 3 ? 0 : h);
            if (p[0] < left) {
                left = p[0];
            }
            if (p[1] < top) {
                top = p[1];
            }
        }
        var rect = element.getBoundingClientRect();
        transformationMatrix = identity.translate(rect.left - left, rect.top - top, 0).multiply(transformationMatrix);
        return transformationMatrix;
    }
    function convertPointFromClientToNode(node, pageX, pageY) {
        var element = getDomNode(node);
        if (element == null) element = document.body;
        return getTransformationMatrix(element).inverse().transformPoint(pageX, pageY);
    }
    var lastDndId = 0;
    var dnds = [];
    var systemDnd = null;
    var rootId = null;
    var bodyCursorBackup;
    var userSelectBackup;
    var shimmedStyle = {
        userSelect: ""
    };
    shimStyle(shimmedStyle);
    var shimedStyleKeys = Object.keys(shimmedStyle);
    var userSelectPropName = shimedStyleKeys[shimedStyleKeys.length - 1];
    var DndCtx = function(pointerId) {
        this.id = ++lastDndId;
        this.pointerid = pointerId;
        this.enabledOperations = 7;
        this.operation = 0;
        this.started = false;
        this.beforeDrag = true;
        this.local = true;
        this.system = false;
        this.ended = false;
        this.cursor = null;
        this.overNode = undefined;
        this.targetCtx = null;
        this.dragView = undefined;
        this.startX = 0;
        this.startY = 0;
        this.distanceToStart = 10;
        this.x = 0;
        this.y = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.totalX = 0;
        this.totalY = 0;
        this.lastX = 0;
        this.lastY = 0;
        this.shift = false;
        this.ctrl = false;
        this.alt = false;
        this.meta = false;
        this.data = newHashObj();
        if (pointerId >= 0) pointer2Dnd[pointerId] = this;
        dnds.push(this);
    };
    function lazyCreateRoot() {
        if (rootId == null) {
            var dbs = document.body.style;
            bodyCursorBackup = dbs.cursor;
            userSelectBackup = dbs[userSelectPropName];
            dbs[userSelectPropName] = "none";
            rootId = addRoot(dndRootFactory);
        }
    }
    var DndComp = {
        render: function(ctx, me) {
            var dnd = ctx.data;
            me.tag = "div";
            me.style = {
                position: "absolute",
                left: dnd.x,
                top: dnd.y
            };
            me.children = dnd.dragView(dnd);
        }
    };
    function currentCursor() {
        var cursor = "no-drop";
        if (dnds.length !== 0) {
            var dnd = dnds[0];
            if (dnd.beforeDrag) return "";
            if (dnd.cursor != null) return dnd.cursor;
            if (dnd.system) return "";
            switch (dnd.operation) {
              case 3:
                cursor = "move";
                break;

              case 1:
                cursor = "alias";
                break;

              case 2:
                cursor = "copy";
                break;
            }
        }
        return cursor;
    }
    var DndRootComp = {
        render: function(_ctx, me) {
            var res = [];
            for (var i_index = 0; i_index < dnds.length; i_index++) {
                var dnd = dnds[i_index];
                if (dnd.beforeDrag) continue;
                if (dnd.dragView != null && (dnd.x != 0 || dnd.y != 0)) {
                    res.push({
                        key: "" + dnd.id,
                        data: dnd,
                        component: DndComp
                    });
                }
            }
            me.tag = "div";
            me.style = {
                position: "fixed",
                pointerEvents: "none",
                userSelect: "none",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            var dbs = document.body.style;
            var cur = currentCursor();
            if (cur && dbs.cursor !== cur) dbs.cursor = cur;
            me.children = res;
        },
        onDrag: function(ctx) {
            __export_invalidate(ctx);
            return false;
        }
    };
    function dndRootFactory() {
        return {
            component: DndRootComp
        };
    }
    var dndProto = DndCtx.prototype;
    dndProto.setOperation = function(operation) {
        this.operation = operation;
    };
    dndProto.setDragNodeView = function(view) {
        this.dragView = view;
    };
    dndProto.addData = function(type, data) {
        this.data[type] = data;
        return true;
    };
    dndProto.listData = function() {
        return Object.keys(this.data);
    };
    dndProto.hasData = function(type) {
        return this.data[type] !== undefined;
    };
    dndProto.getData = function(type) {
        return this.data[type];
    };
    dndProto.setEnabledOps = function(ops) {
        this.enabledOperations = ops;
    };
    dndProto.cancelDnd = function() {
        dndMoved(undefined, this);
        this.destroy();
    };
    dndProto.destroy = function() {
        this.ended = true;
        if (this.started) broadcast("onDragEnd", this);
        delete pointer2Dnd[this.pointerid];
        for (var i_index = 0; i_index < dnds.length; i_index++) {
            if (dnds[i_index] === this) {
                dnds.splice(i_index, 1);
                break;
            }
        }
        if (systemDnd === this) {
            systemDnd = null;
        }
        if (dnds.length === 0 && rootId != null) {
            removeRoot(rootId);
            rootId = null;
            var dbs = document.body.style;
            dbs.cursor = bodyCursorBackup;
            dbs[userSelectPropName] = userSelectBackup;
        }
    };
    var pointer2Dnd = newHashObj();
    function handlePointerDown(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (dnd) {
            dnd.cancelDnd();
        }
        if (ev.button <= 1) {
            dnd = new DndCtx(ev.id);
            dnd.startX = ev.x;
            dnd.startY = ev.y;
            dnd.lastX = ev.x;
            dnd.lastY = ev.y;
            dnd.overNode = node;
            updateDndFromPointerEvent(dnd, ev);
            var sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                var htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == null) {
                    dnd.destroy();
                    return false;
                }
                dnd.started = true;
                var boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    var rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - ev.x;
                    dnd.deltaY = rect.top - ev.y;
                }
                if (dnd.distanceToStart <= 0) {
                    dnd.beforeDrag = false;
                    dndMoved(node, dnd);
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
            }
        }
        return false;
    }
    function dndMoved(node, dnd) {
        dnd.overNode = node;
        dnd.targetCtx = bubble(node, "onDragOver", dnd);
        if (dnd.targetCtx == null) {
            dnd.operation = 0;
        }
        broadcast("onDrag", dnd);
    }
    function updateDndFromPointerEvent(dnd, ev) {
        dnd.shift = ev.shift;
        dnd.ctrl = ev.ctrl;
        dnd.alt = ev.alt;
        dnd.meta = ev.meta;
        dnd.x = ev.x;
        dnd.y = ev.y;
    }
    function handlePointerMove(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        dnd.totalX += Math.abs(ev.x - dnd.lastX);
        dnd.totalY += Math.abs(ev.y - dnd.lastY);
        if (dnd.beforeDrag) {
            if (dnd.totalX + dnd.totalY <= dnd.distanceToStart) {
                dnd.lastX = ev.x;
                dnd.lastY = ev.y;
                return false;
            }
            dnd.beforeDrag = false;
        }
        updateDndFromPointerEvent(dnd, ev);
        dndMoved(node, dnd);
        dnd.lastX = ev.x;
        dnd.lastY = ev.y;
        return true;
    }
    function handlePointerUp(ev, _target, node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        if (!dnd.beforeDrag) {
            updateDndFromPointerEvent(dnd, ev);
            dndMoved(node, dnd);
            var t = dnd.targetCtx;
            if (t && bubble(t.me, "onDrop", dnd)) {
                dnd.destroy();
            } else {
                dnd.cancelDnd();
            }
            __export_ignoreClick(ev.x, ev.y);
            return true;
        }
        dnd.destroy();
        return false;
    }
    function handlePointerCancel(ev, _target, _node) {
        var dnd = pointer2Dnd[ev.id];
        if (!dnd) return false;
        if (dnd.system) return false;
        if (!dnd.beforeDrag) {
            dnd.cancelDnd();
        } else {
            dnd.destroy();
        }
        return false;
    }
    function updateFromNative(dnd, ev) {
        dnd.shift = ev.shiftKey;
        dnd.ctrl = ev.ctrlKey;
        dnd.alt = ev.altKey;
        dnd.meta = ev.metaKey;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        dnd.totalX += Math.abs(dnd.x - dnd.lastX);
        dnd.totalY += Math.abs(dnd.y - dnd.lastY);
        var node = nodeOnPoint(dnd.x, dnd.y);
        dndMoved(node, dnd);
        dnd.lastX = dnd.x;
        dnd.lastY = dnd.y;
    }
    var effectAllowedTable = [ "none", "link", "copy", "copyLink", "move", "linkMove", "copyMove", "all" ];
    function handleDragStart(ev, _target, node) {
        var dnd = systemDnd;
        if (dnd != null) {
            dnd.destroy();
        }
        var activePointerIds = Object.keys(pointer2Dnd);
        if (activePointerIds.length > 0) {
            dnd = pointer2Dnd[activePointerIds[0]];
            dnd.system = true;
            systemDnd = dnd;
        } else {
            var startX = ev.clientX, startY = ev.clientY;
            dnd = new DndCtx(-1);
            dnd.system = true;
            systemDnd = dnd;
            dnd.x = startX;
            dnd.y = startY;
            dnd.lastX = startX;
            dnd.lastY = startY;
            dnd.startX = startX;
            dnd.startY = startY;
            var sourceCtx = bubble(node, "onDragStart", dnd);
            if (sourceCtx) {
                var htmlNode = getDomNode(sourceCtx.me);
                if (htmlNode == null) {
                    dnd.destroy();
                    return false;
                }
                dnd.started = true;
                var boundFn = htmlNode.getBoundingClientRect;
                if (boundFn) {
                    var rect = boundFn.call(htmlNode);
                    dnd.deltaX = rect.left - startX;
                    dnd.deltaY = rect.top - startY;
                }
                lazyCreateRoot();
            } else {
                dnd.destroy();
                return false;
            }
        }
        dnd.beforeDrag = false;
        var eff = effectAllowedTable[dnd.enabledOperations];
        var dt = ev.dataTransfer;
        dt.effectAllowed = eff;
        if (dt.setDragImage) {
            var div = document.createElement("div");
            div.style.pointerEvents = "none";
            dt.setDragImage(div, 0, 0);
        } else {
            var style_index = ev.target.style;
            var opacityBackup = style_index.opacity;
            var widthBackup = style_index.width;
            var heightBackup = style_index.height;
            var paddingBackup = style_index.padding;
            style_index.opacity = "0";
            style_index.width = "0";
            style_index.height = "0";
            style_index.padding = "0";
            window.setTimeout(function() {
                style_index.opacity = opacityBackup;
                style_index.width = widthBackup;
                style_index.height = heightBackup;
                style_index.padding = paddingBackup;
            }, 0);
        }
        var data = dnd.data;
        var dataKeys = Object.keys(data);
        for (var i_index = 0; i_index < dataKeys.length; i_index++) {
            try {
                var k = dataKeys[i_index];
                var d = data[k];
                if (!isString(d)) d = JSON.stringify(d);
                ev.dataTransfer.setData(k, d);
            } catch (e) {
                if (DEBUG) if (window.console) console.log("Cannot set dnd data to " + dataKeys[i_index]);
            }
        }
        updateFromNative(dnd, ev);
        return false;
    }
    function setDropEffect(ev, op) {
        ev.dataTransfer.dropEffect = [ "none", "link", "copy", "move" ][op];
    }
    function handleDragOver(ev, _target, _node) {
        var dnd = systemDnd;
        if (dnd == null) {
            dnd = new DndCtx(-1);
            dnd.system = true;
            systemDnd = dnd;
            dnd.x = ev.clientX;
            dnd.y = ev.clientY;
            dnd.startX = dnd.x;
            dnd.startY = dnd.y;
            dnd.local = false;
            var dt = ev.dataTransfer;
            var eff = 0;
            var effectAllowed = undefined;
            try {
                effectAllowed = dt.effectAllowed;
            } catch (e) {}
            for (;eff < 7; eff++) {
                if (effectAllowedTable[eff] === effectAllowed) break;
            }
            dnd.enabledOperations = eff;
            var dtTypes = dt.types;
            if (dtTypes) {
                for (var i_index = 0; i_index < dtTypes.length; i_index++) {
                    var tt = dtTypes[i_index];
                    if (tt === "text/plain") tt = "Text"; else if (tt === "text/uri-list") tt = "Url";
                    dnd.data[tt] = null;
                }
            } else {
                if (dt.getData("Text") !== undefined) dnd.data["Text"] = null;
            }
        }
        updateFromNative(dnd, ev);
        setDropEffect(ev, dnd.operation);
        if (dnd.operation != 0) {
            preventDefault(ev);
            return true;
        }
        return false;
    }
    function handleDrag(ev, _target, _node) {
        var x = ev.clientX;
        var y = ev.clientY;
        var m = getMedia();
        if (systemDnd != null && (x === 0 && y === 0 || x < 0 || y < 0 || x >= m.width || y >= m.height)) {
            systemDnd.x = 0;
            systemDnd.y = 0;
            systemDnd.operation = 0;
            broadcast("onDrag", systemDnd);
        }
        return false;
    }
    function handleDragEnd(_ev, _target, _node) {
        if (systemDnd != null) {
            systemDnd.destroy();
        }
        return false;
    }
    function handleDrop(ev, _target, _node) {
        var dnd = systemDnd;
        if (dnd == null) return false;
        dnd.x = ev.clientX;
        dnd.y = ev.clientY;
        if (!dnd.local) {
            var dataKeys = Object.keys(dnd.data);
            var dt = ev.dataTransfer;
            for (var i_10 = 0; i_10 < dataKeys.length; i_10++) {
                var k = dataKeys[i_10];
                var d;
                if (k === "Files") {
                    d = [].slice.call(dt.files, 0);
                } else {
                    d = dt.getData(k);
                }
                dnd.data[k] = d;
            }
        }
        updateFromNative(dnd, ev);
        var t = dnd.targetCtx;
        if (t && bubble(t.me, "onDrop", dnd)) {
            setDropEffect(ev, dnd.operation);
            dnd.destroy();
            preventDefault(ev);
        } else {
            dnd.cancelDnd();
        }
        return true;
    }
    function justPreventDefault(ev, _target, _node) {
        preventDefault(ev);
        return true;
    }
    function handleDndSelectStart(ev, _target, _node) {
        if (dnds.length === 0) return false;
        preventDefault(ev);
        return true;
    }
    function anyActiveDnd() {
        for (var i_11 = 0; i_11 < dnds.length; i_11++) {
            var dnd = dnds[i_11];
            if (dnd.beforeDrag) continue;
            return dnd;
        }
        return undefined;
    }
    addEvent("!PointerDown", 4, handlePointerDown);
    addEvent("!PointerMove", 4, handlePointerMove);
    addEvent("!PointerUp", 4, handlePointerUp);
    addEvent("!PointerCancel", 4, handlePointerCancel);
    addEvent("selectstart", 4, handleDndSelectStart);
    addEvent("dragstart", 5, handleDragStart);
    addEvent("dragover", 5, handleDragOver);
    addEvent("dragend", 5, handleDragEnd);
    addEvent("drag", 5, handleDrag);
    addEvent("drop", 5, handleDrop);
    addEvent("dragenter", 5, justPreventDefault);
    addEvent("dragleave", 5, justPreventDefault);
    var __export_getDnds = function() {
        return dnds;
    };
    var waitingForPopHashChange = -1;
    function emitOnHashChange() {
        if (waitingForPopHashChange >= 0) clearTimeout(waitingForPopHashChange);
        waitingForPopHashChange = -1;
        __export_invalidate();
        return false;
    }
    addEvent("hashchange", 10, emitOnHashChange);
    var myAppHistoryDeepness = 0;
    var programPath = "";
    function push(path, inApp) {
        var l = window.location;
        if (inApp) {
            programPath = path;
            l.hash = path.substring(1);
            myAppHistoryDeepness++;
        } else {
            l.href = path;
        }
    }
    function replace(path, inApp) {
        var l = window.location;
        if (inApp) {
            programPath = path;
            l.replace(l.pathname + l.search + path);
        } else {
            l.replace(path);
        }
    }
    function pop(distance) {
        myAppHistoryDeepness -= distance;
        waitingForPopHashChange = setTimeout(emitOnHashChange, 50);
        window.history.go(-distance);
    }
    var rootRoutes;
    var nameRouteMap = {};
    function encodeUrl(url) {
        return encodeURIComponent(url).replace(/%20/g, "+");
    }
    function decodeUrl(url) {
        return decodeURIComponent(url.replace(/\+/g, " "));
    }
    function encodeUrlPath(path) {
        return String(path).split("/").map(encodeUrl).join("/");
    }
    var paramCompileMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|[*.()\[\]\\+|{}^$]/g;
    var paramInjectMatcher = /:([a-zA-Z_$][a-zA-Z0-9_$?]*[?]?)|[*]/g;
    var compiledPatterns = {};
    function compilePattern(pattern) {
        if (!(pattern in compiledPatterns)) {
            var paramNames = [];
            var source = pattern.replace(paramCompileMatcher, function(match, paramName) {
                if (paramName) {
                    paramNames.push(paramName);
                    return "([^/]+)";
                } else if (match === "*") {
                    paramNames.push("splat");
                    return "(.*?)";
                } else {
                    return "\\" + match;
                }
            });
            compiledPatterns[pattern] = {
                matcher: new RegExp("^" + source + "$", "i"),
                paramNames: paramNames
            };
        }
        return compiledPatterns[pattern];
    }
    function extractParams(pattern, path) {
        var object = compilePattern(pattern);
        var match = decodeUrl(path).match(object.matcher);
        if (!match) return null;
        var params = {};
        var pn = object.paramNames;
        var l = pn.length;
        for (var i_index = 0; i_index < l; i_index++) {
            params[pn[i_index]] = match[i_index + 1];
        }
        return params;
    }
    function injectParams(pattern, params) {
        params = params || {};
        var splatIndex = 0;
        return pattern.replace(paramInjectMatcher, function(_match, paramName) {
            paramName = paramName || "splat";
            if (paramName.slice(-1) !== "?") {
                if (params[paramName] == null) throw new Error('Missing "' + paramName + '" parameter for path "' + pattern + '"');
            } else {
                paramName = paramName.slice(0, -1);
                if (params[paramName] == null) {
                    return "";
                }
            }
            var segment;
            if (paramName === "splat" && Array.isArray(params[paramName])) {
                segment = params[paramName][splatIndex++];
                if (segment == null) throw new Error("Missing splat # " + splatIndex + ' for path "' + pattern + '"');
            } else {
                segment = params[paramName];
            }
            return encodeUrlPath(segment);
        });
    }
    function findMatch(path, rs, outParams) {
        var l = rs.length;
        var notFoundRoute;
        var defaultRoute;
        var params;
        for (var i_index = 0; i_index < l; i_index++) {
            var r = rs[i_index];
            if (r.isNotFound) {
                notFoundRoute = r;
                continue;
            }
            if (r.isDefault) {
                defaultRoute = r;
                continue;
            }
            if (r.children) {
                var res = findMatch(path, r.children, outParams);
                if (res) {
                    res.push(r);
                    return res;
                }
            }
            if (r.url) {
                params = extractParams(r.url, path);
                if (params) {
                    outParams.p = params;
                    return [ r ];
                }
            }
        }
        if (defaultRoute) {
            params = extractParams(defaultRoute.url || "", path);
            if (params) {
                outParams.p = params;
                return [ defaultRoute ];
            }
        }
        if (notFoundRoute) {
            params = extractParams(notFoundRoute.url || "", path);
            if (params) {
                outParams.p = params;
                return [ notFoundRoute ];
            }
        }
        return undefined;
    }
    var activeRoutes = [];
    var futureRoutes;
    var activeParams = newHashObj();
    var nodesArray = [];
    var setterOfNodesArray = [];
    var urlRegex = /.*(?:\:|\/).*/;
    function isInApp(name_index) {
        return !urlRegex.test(name_index);
    }
    function isAbsolute(url) {
        return url[0] === "/";
    }
    function noop() {
        return undefined;
    }
    function getSetterOfNodesArray(idx) {
        while (idx >= setterOfNodesArray.length) {
            setterOfNodesArray.push(function(a, i_index) {
                return function(n) {
                    if (n) a[i_index] = n;
                };
            }(nodesArray, setterOfNodesArray.length));
        }
        return setterOfNodesArray[idx];
    }
    var firstRouting = true;
    function rootNodeFactory() {
        if (waitingForPopHashChange >= 0) return undefined;
        var browserPath = window.location.hash;
        var path = browserPath.substr(1);
        if (!isAbsolute(path)) path = "/" + path;
        var out = {
            p: {}
        };
        var matches = findMatch(path, rootRoutes, out) || [];
        if (firstRouting) {
            firstRouting = false;
            currentTransition = {
                inApp: true,
                type: 2,
                name: undefined,
                params: undefined
            };
            transitionState = -1;
            programPath = browserPath;
        } else {
            if (!currentTransition && matches.length > 0 && browserPath != programPath) {
                runTransition(createRedirectPush(matches[0].name, out.p));
            }
        }
        if (currentTransition && currentTransition.type === 2 && transitionState < 0) {
            programPath = browserPath;
            currentTransition.inApp = true;
            if (currentTransition.name == null && matches.length > 0) {
                currentTransition.name = matches[0].name;
                currentTransition.params = out.p;
                nextIteration();
                if (currentTransition != null) return undefined;
            } else return undefined;
        }
        if (currentTransition == null) {
            activeRoutes = matches;
            while (nodesArray.length > activeRoutes.length) nodesArray.pop();
            while (nodesArray.length < activeRoutes.length) nodesArray.push(undefined);
            activeParams = out.p;
        }
        var fn = noop;
        for (var i_index = 0; i_index < activeRoutes.length; i_index++) {
            (function(fnInner, r, routeParams, i_index) {
                fn = function(otherData) {
                    var data = r.data || {};
                    __export_assign(data, otherData);
                    data.activeRouteHandler = fnInner;
                    data.routeParams = routeParams;
                    var handler = r.handler;
                    var res;
                    if (isFunction(handler)) {
                        res = {
                            key: undefined,
                            ref: undefined,
                            children: handler(data)
                        };
                    } else {
                        res = {
                            key: undefined,
                            ref: undefined,
                            data: data,
                            component: handler
                        };
                    }
                    if (r.keyBuilder) res.key = r.keyBuilder(routeParams); else res.key = r.name;
                    res.ref = getSetterOfNodesArray(i_index);
                    return res;
                };
            })(fn, activeRoutes[i_index], activeParams, i_index);
        }
        return fn();
    }
    function joinPath(p1, p2) {
        if (isAbsolute(p2)) return p2;
        if (p1[p1.length - 1] === "/") return p1 + p2;
        return p1 + "/" + p2;
    }
    function registerRoutes(url, rs) {
        var l = rs.length;
        for (var i_index = 0; i_index < l; i_index++) {
            var r = rs[i_index];
            var u = url;
            var name_index = r.name;
            if (!name_index && url === "/") {
                name_index = "root";
                r.name = name_index;
                nameRouteMap[name_index] = r;
            } else if (name_index) {
                nameRouteMap[name_index] = r;
                u = joinPath(u, name_index);
            }
            if (r.isDefault) {
                u = url;
            } else if (r.isNotFound) {
                u = joinPath(url, "*");
            } else if (r.url) {
                u = joinPath(url, r.url);
            }
            r.url = u;
            if (r.children) registerRoutes(u, r.children);
        }
    }
    function routes(root) {
        if (!__export_isArray(root)) {
            root = [ root ];
        }
        registerRoutes("/", root);
        rootRoutes = root;
        init(rootNodeFactory);
    }
    function route(config, nestedRoutes) {
        return {
            name: config.name,
            url: config.url,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            children: nestedRoutes
        };
    }
    function routeDefault(config) {
        return {
            name: config.name,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            isDefault: true
        };
    }
    function routeNotFound(config) {
        return {
            name: config.name,
            data: config.data,
            handler: config.handler,
            keyBuilder: config.keyBuilder,
            isNotFound: true
        };
    }
    function isActive(name_index, params) {
        if (params) {
            for (var prop_index in params) {
                if (params.hasOwnProperty(prop_index)) {
                    if (activeParams[prop_index] !== params[prop_index]) return false;
                }
            }
        }
        for (var i_index = 0, l = activeRoutes.length; i_index < l; i_index++) {
            if (activeRoutes[i_index].name === name_index) {
                return true;
            }
        }
        return false;
    }
    function urlOfRoute(name_index, params) {
        if (isInApp(name_index)) {
            var r = nameRouteMap[name_index];
            if (DEBUG) {
                if (rootRoutes == null) throw Error("Cannot use urlOfRoute before defining routes");
                if (r == null) throw Error("Route with name " + name_index + " if not defined in urlOfRoute");
            }
            return "#" + injectParams(r.url, params);
        }
        return name_index;
    }
    function link(node, name_index, params) {
        node.data = node.data || {};
        node.data.routeName = name_index;
        node.data.routeParams = params;
        postEnhance(node, {
            render: function(ctx, me) {
                var data = ctx.data;
                me.attrs = me.attrs || {};
                if (me.tag === "a") {
                    me.attrs.href = urlOfRoute(data.routeName, data.routeParams);
                }
                me.className = me.className || "";
                if (isActive(data.routeName, data.routeParams)) {
                    me.className += " active";
                }
            },
            onClick: function(ctx) {
                var data = ctx.data;
                runTransition(createRedirectPush(data.routeName, data.routeParams));
                return true;
            }
        });
        return node;
    }
    function createRedirectPush(name_index, params) {
        return {
            inApp: isInApp(name_index),
            type: 0,
            name: name_index,
            params: params || {}
        };
    }
    function createRedirectReplace(name_index, params) {
        return {
            inApp: isInApp(name_index),
            type: 1,
            name: name_index,
            params: params || {}
        };
    }
    function createBackTransition(distance) {
        distance = distance || 1;
        return {
            inApp: myAppHistoryDeepness >= distance,
            type: 2,
            name: undefined,
            params: {},
            distance: distance
        };
    }
    var currentTransition = null;
    var nextTransition = null;
    var transitionState = 0;
    function doAction(transition) {
        switch (transition.type) {
          case 0:
            push(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;

          case 1:
            replace(urlOfRoute(transition.name, transition.params), transition.inApp);
            break;

          case 2:
            pop(transition.distance);
            break;
        }
        __export_invalidate();
    }
    function nextIteration() {
        while (true) {
            if (transitionState >= 0 && transitionState < activeRoutes.length) {
                var node = nodesArray[transitionState];
                transitionState++;
                if (!node) continue;
                var comp = node.component;
                if (!comp && __export_isArray(node.children)) {
                    node = node.children[0];
                    if (!node) continue;
                    comp = node.component;
                }
                if (!comp) continue;
                var fn = comp.canDeactivate;
                if (!fn) continue;
                var res = fn.call(comp, node.ctx, currentTransition);
                if (res === true) continue;
                Promise.resolve(res).then(function(resp) {
                    if (resp === true) {} else if (resp === false) {
                        currentTransition = null;
                        nextTransition = null;
                        if (programPath) replace(programPath, true);
                        return;
                    } else {
                        nextTransition = resp;
                    }
                    nextIteration();
                }).catch(function(err) {
                    if (typeof console !== "undefined" && console.log) console.log(err);
                });
                return;
            } else if (transitionState == activeRoutes.length) {
                if (nextTransition) {
                    if (currentTransition && currentTransition.type == 0) {
                        push(urlOfRoute(currentTransition.name, currentTransition.params), currentTransition.inApp);
                    }
                    currentTransition = nextTransition;
                    nextTransition = null;
                }
                transitionState = -1;
                if (!currentTransition.inApp || currentTransition.type === 2) {
                    var tr = currentTransition;
                    if (!currentTransition.inApp) currentTransition = null;
                    doAction(tr);
                    return;
                }
            } else if (transitionState === -1) {
                var out = {
                    p: {}
                };
                if (currentTransition.inApp) {
                    futureRoutes = findMatch(urlOfRoute(currentTransition.name, currentTransition.params).substring(1), rootRoutes, out) || [];
                } else {
                    futureRoutes = [];
                }
                transitionState = -2;
            } else if (transitionState === -2 - futureRoutes.length) {
                if (nextTransition) {
                    transitionState = activeRoutes.length;
                    continue;
                }
                if (currentTransition.type !== 2) {
                    var tr = currentTransition;
                    currentTransition = null;
                    doAction(tr);
                } else {
                    __export_invalidate();
                }
                currentTransition = null;
                return;
            } else {
                if (nextTransition) {
                    transitionState = activeRoutes.length;
                    continue;
                }
                var rr = futureRoutes[futureRoutes.length + 1 + transitionState];
                transitionState--;
                var handler = rr.handler;
                var comp = undefined;
                if (isFunction(handler)) {
                    var node = handler({});
                    if (!node || !isObject(node) || __export_isArray(node)) continue;
                    comp = node.component;
                } else {
                    comp = handler;
                }
                if (!comp) continue;
                var fn = comp.canActivate;
                if (!fn) continue;
                var res = fn.call(comp, currentTransition);
                if (res === true) continue;
                Promise.resolve(res).then(function(resp) {
                    if (resp === true) {} else if (resp === false) {
                        currentTransition = null;
                        nextTransition = null;
                        return;
                    } else {
                        nextTransition = resp;
                    }
                    nextIteration();
                }).catch(function(err) {
                    if (typeof console !== "undefined" && console.log) console.log(err);
                });
                return;
            }
        }
    }
    var __export_transitionRunCount = 1;
    function runTransition(transition) {
        __export_transitionRunCount++;
        preventClickingSpree();
        if (currentTransition != null) {
            nextTransition = transition;
            return;
        }
        firstRouting = false;
        currentTransition = transition;
        transitionState = 0;
        nextIteration();
    }
    function anchor(children, name_index, params) {
        return {
            children: children,
            component: {
                id: "anchor",
                postUpdateDom: function(ctx, me) {
                    var routeName;
                    if (name_index) {
                        routeName = name_index;
                    } else {
                        var firstChild = me.children && me.children[0];
                        routeName = firstChild.attrs && firstChild.attrs.id;
                    }
                    if (!isActive(routeName, params)) {
                        ctx.l = 0;
                        return;
                    }
                    if (ctx.l === __export_transitionRunCount) return;
                    getDomNode(me).scrollIntoView();
                    ctx.l = __export_transitionRunCount;
                }
            }
        };
    }
    function getRoutes() {
        return rootRoutes;
    }
    function getActiveRoutes() {
        return activeRoutes;
    }
    function getActiveParams() {
        return activeParams;
    }
    var allStyles = newHashObj();
    var allSprites = newHashObj();
    var bundledSprites = newHashObj();
    var allNameHints = newHashObj();
    var dynamicSprites = [];
    var bundledDynamicSprites = [];
    var imageCache = newHashObj();
    var injectedCss = "";
    var rebuildStyles = false;
    var htmlStyle = null;
    var globalCounter = 0;
    var isIE9 = ieVersion() === 9;
    var chainedBeforeFrame = setBeforeFrame(beforeFrame);
    var cssSubRuleDelimiter = /\:|\ |\>/;
    function buildCssSubRule(parent) {
        var matchSplit = cssSubRuleDelimiter.exec(parent);
        if (!matchSplit) return allStyles[parent].name;
        var posSplit = matchSplit.index;
        return allStyles[parent.substring(0, posSplit)].name + parent.substring(posSplit);
    }
    function buildCssRule(parent, name_index) {
        var result = "";
        if (parent) {
            if (__export_isArray(parent)) {
                for (var i_12 = 0; i_12 < parent.length; i_12++) {
                    if (i_12 > 0) {
                        result += ",";
                    }
                    result += "." + buildCssSubRule(parent[i_12]) + "." + name_index;
                }
            } else {
                result = "." + buildCssSubRule(parent) + "." + name_index;
            }
        } else {
            result = "." + name_index;
        }
        return result;
    }
    function flattenStyle(cur, curPseudo, style_index, stylePseudo) {
        if (isString(style_index)) {
            var externalStyle = allStyles[style_index];
            if (externalStyle === undefined) {
                throw new Error("Unknown style " + style_index);
            }
            flattenStyle(cur, curPseudo, externalStyle.style, externalStyle.pseudo);
        } else if (isFunction(style_index)) {
            style_index(cur, curPseudo);
        } else if (__export_isArray(style_index)) {
            for (var i_13 = 0; i_13 < style_index.length; i_13++) {
                flattenStyle(cur, curPseudo, style_index[i_13], undefined);
            }
        } else if (typeof style_index === "object") {
            for (var key in style_index) {
                if (!Object.prototype.hasOwnProperty.call(style_index, key)) continue;
                var val = style_index[key];
                if (isFunction(val)) {
                    val = val(cur, key);
                }
                cur[key] = val;
            }
        }
        if (stylePseudo != null && curPseudo != null) {
            for (var pseudoKey in stylePseudo) {
                var curPseudoVal = curPseudo[pseudoKey];
                if (curPseudoVal === undefined) {
                    curPseudoVal = newHashObj();
                    curPseudo[pseudoKey] = curPseudoVal;
                }
                flattenStyle(curPseudoVal, undefined, stylePseudo[pseudoKey], undefined);
            }
        }
    }
    var lastDppx = 0;
    var lastSpriteUrl = "";
    var lastSpriteDppx = 1;
    var hasBundledSprites = false;
    var wasSpriteUrlChanged = true;
    var firstStyles = false;
    function beforeFrame() {
        var _a;
        var dbs = document.body.style;
        if (firstStyles && uptimeMs >= 150) {
            dbs.opacity = "1";
            firstStyles = false;
        }
        if (hasBundledSprites && lastDppx != getMedia().dppx) {
            lastDppx = getMedia().dppx;
            var newSpriteUrl = bundlePath;
            var newSpriteDppx = 1;
            if (lastDppx > 1) {
                for (var i_14 = 0; i_14 < bundlePath2.length; i_14++) {
                    if (i_14 == bundlePath2.length - 1 || bundlePath2[i_14][1] >= lastDppx) {
                        newSpriteUrl = bundlePath2[i_14][0];
                        newSpriteDppx = bundlePath2[i_14][1];
                    } else break;
                }
            }
            if (lastSpriteUrl != newSpriteUrl) {
                lastSpriteUrl = newSpriteUrl;
                lastSpriteDppx = newSpriteDppx;
                rebuildStyles = true;
                wasSpriteUrlChanged = true;
            }
        }
        if (rebuildStyles) {
            if (frameCounter === 1 && "webkitAnimation" in dbs) {
                firstStyles = true;
                dbs.opacity = "0";
                setTimeout(__export_invalidate, 200);
            }
            if (hasBundledSprites) {
                var imageSprite = imageCache[lastSpriteUrl];
                if (imageSprite === undefined) {
                    imageSprite = null;
                    imageCache[lastSpriteUrl] = imageSprite;
                    loadImage(lastSpriteUrl, function(image) {
                        imageCache[lastSpriteUrl] = image;
                        invalidateStyles();
                    });
                }
                if (imageSprite != null) {
                    for (var i_15 = 0; i_15 < bundledDynamicSprites.length; i_15++) {
                        var dynSprite = bundledDynamicSprites[i_15];
                        var colorStr = dynSprite.color;
                        if (!isString(colorStr)) colorStr = colorStr();
                        if (wasSpriteUrlChanged || colorStr !== dynSprite.lastColor) {
                            dynSprite.lastColor = colorStr;
                            var mulWidth = dynSprite.width * lastSpriteDppx | 0;
                            var mulHeight = dynSprite.height * lastSpriteDppx | 0;
                            var lastUrl = recolorAndClip(imageSprite, colorStr, mulWidth, mulHeight, dynSprite.left * lastSpriteDppx | 0, dynSprite.top * lastSpriteDppx | 0);
                            var stDef = allStyles[dynSprite.styleId];
                            stDef.style = {
                                backgroundImage: "url(" + lastUrl + ")",
                                width: dynSprite.width,
                                height: dynSprite.height,
                                backgroundPosition: 0,
                                backgroundSize: "100%"
                            };
                        }
                    }
                    if (wasSpriteUrlChanged) {
                        var iWidth = imageSprite.width / lastSpriteDppx;
                        var iHeight = imageSprite.height / lastSpriteDppx;
                        for (var key_1 in bundledSprites) {
                            var sprite_1 = bundledSprites[key_1];
                            if (sprite_1.color !== undefined) continue;
                            var stDef = allStyles[sprite_1.styleId];
                            var width = sprite_1.width;
                            var height = sprite_1.height;
                            var percentWidth = 100 * iWidth / width;
                            var percentHeight = 100 * iHeight / height;
                            stDef.style = {
                                backgroundImage: "url(" + lastSpriteUrl + ")",
                                width: width,
                                height: height,
                                backgroundPosition: 100 * sprite_1.left / (iWidth - width) + "% " + 100 * sprite_1.top / (iHeight - height) + "%",
                                backgroundSize: percentWidth + "% " + percentHeight + "%"
                            };
                        }
                    }
                    wasSpriteUrlChanged = false;
                }
            }
            for (var i_16 = 0; i_16 < dynamicSprites.length; i_16++) {
                var dynSprite = dynamicSprites[i_16];
                var image = imageCache[dynSprite.url];
                if (image == null) continue;
                var colorStr = dynSprite.color();
                if (colorStr !== dynSprite.lastColor) {
                    dynSprite.lastColor = colorStr;
                    if (dynSprite.width == null) dynSprite.width = image.width;
                    if (dynSprite.height == null) dynSprite.height = image.height;
                    var lastUrl = recolorAndClip(image, colorStr, dynSprite.width, dynSprite.height, dynSprite.left, dynSprite.top);
                    var stDef = allStyles[dynSprite.styleId];
                    stDef.style = {
                        backgroundImage: "url(" + lastUrl + ")",
                        width: dynSprite.width,
                        height: dynSprite.height,
                        backgroundPosition: 0
                    };
                }
            }
            var styleStr = injectedCss;
            for (var key in allStyles) {
                var ss = allStyles[key];
                var parent_1 = ss.parent;
                var name_1 = ss.name;
                var ssPseudo = ss.pseudo;
                var ssStyle = ss.style;
                if (isFunction(ssStyle) && ssStyle.length === 0) {
                    _a = ssStyle(), ssStyle = _a[0], ssPseudo = _a[1];
                }
                if (isString(ssStyle) && ssPseudo == null) {
                    ss.realName = ssStyle;
                    assert(name_1 != null, "Cannot link existing class to selector");
                    continue;
                }
                ss.realName = name_1;
                var style_1 = newHashObj();
                var flattenPseudo = newHashObj();
                flattenStyle(undefined, flattenPseudo, undefined, ssPseudo);
                flattenStyle(style_1, flattenPseudo, ssStyle, undefined);
                var extractedInlStyle = null;
                if (style_1["pointerEvents"]) {
                    extractedInlStyle = newHashObj();
                    extractedInlStyle["pointerEvents"] = style_1["pointerEvents"];
                }
                if (isIE9) {
                    if (style_1["userSelect"]) {
                        if (extractedInlStyle == null) extractedInlStyle = newHashObj();
                        extractedInlStyle["userSelect"] = style_1["userSelect"];
                        delete style_1["userSelect"];
                    }
                }
                ss.inlStyle = extractedInlStyle;
                shimStyle(style_1);
                var cssStyle = inlineStyleToCssDeclaration(style_1);
                if (cssStyle.length > 0) styleStr += (name_1 == null ? parent_1 : buildCssRule(parent_1, name_1)) + " {" + cssStyle + "}\n";
                for (var key2 in flattenPseudo) {
                    var item = flattenPseudo[key2];
                    shimStyle(item);
                    styleStr += (name_1 == null ? parent_1 + ":" + key2 : buildCssRule(parent_1, name_1 + ":" + key2)) + " {" + inlineStyleToCssDeclaration(item) + "}\n";
                }
            }
            var styleElement = document.createElement("style");
            styleElement.type = "text/css";
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = styleStr;
            } else {
                styleElement.appendChild(document.createTextNode(styleStr));
            }
            var head = document.head || document.getElementsByTagName("head")[0];
            if (htmlStyle != null) {
                head.replaceChild(styleElement, htmlStyle);
            } else {
                head.appendChild(styleElement);
            }
            htmlStyle = styleElement;
            rebuildStyles = false;
        }
        chainedBeforeFrame();
    }
    function style(node) {
        var styles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            styles[_i - 1] = arguments[_i];
        }
        var className = node.className;
        var inlineStyle = node.style;
        var stack = null;
        var i_index = 0;
        var ca = styles;
        while (true) {
            if (ca.length === i_index) {
                if (stack === null || stack.length === 0) break;
                ca = stack.pop();
                i_index = stack.pop() + 1;
                continue;
            }
            var s = ca[i_index];
            if (s == null || s === true || s === false || s === "") {} else if (isString(s)) {
                var sd = allStyles[s];
                if (className == null) className = sd.realName; else className = className + " " + sd.realName;
                var inlS = sd.inlStyle;
                if (inlS) {
                    if (inlineStyle == null) inlineStyle = {};
                    inlineStyle = __export_assign(inlineStyle, inlS);
                }
            } else if (__export_isArray(s)) {
                if (ca.length > i_index + 1) {
                    if (stack == null) stack = [];
                    stack.push(i_index);
                    stack.push(ca);
                }
                ca = s;
                i_index = 0;
                continue;
            } else {
                if (inlineStyle == null) inlineStyle = {};
                for (var key in s) {
                    if (s.hasOwnProperty(key)) {
                        var val = s[key];
                        if (isFunction(val)) val = val();
                        inlineStyle[key] = val;
                    }
                }
            }
            i_index++;
        }
        node.className = className;
        node.style = inlineStyle;
        return node;
    }
    var uppercasePattern = /([A-Z])/g;
    var msPattern = /^ms-/;
    function hyphenateStyle(s) {
        if (s === "cssFloat") return "float";
        return s.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
    }
    function inlineStyleToCssDeclaration(style_index) {
        var res = "";
        for (var key in style_index) {
            var v = style_index[key];
            if (v === undefined) continue;
            res += hyphenateStyle(key) + ":" + (v === "" ? '""' : v) + ";";
        }
        res = res.slice(0, -1);
        return res;
    }
    function styleDef(style_index, pseudo, nameHint) {
        return styleDefEx(undefined, style_index, pseudo, nameHint);
    }
    function styleDefEx(parent, style_index, pseudo, nameHint) {
        if (nameHint && nameHint !== "b-") {
            nameHint = nameHint.replace(/[^a-z0-9_-]/gi, "_").replace(/^[0-9]/, "_$&");
            if (allNameHints[nameHint]) {
                var counter = 1;
                while (allNameHints[nameHint + counter]) counter++;
                nameHint = nameHint + counter;
            }
            allNameHints[nameHint] = true;
        } else {
            nameHint = "b-" + globalCounter++;
        }
        allStyles[nameHint] = {
            name: nameHint,
            realName: nameHint,
            parent: parent,
            style: style_index,
            inlStyle: null,
            pseudo: pseudo
        };
        invalidateStyles();
        return nameHint;
    }
    function selectorStyleDef(selector, style_index, pseudo) {
        allStyles["b-" + globalCounter++] = {
            name: null,
            realName: null,
            parent: selector,
            style: style_index,
            inlStyle: null,
            pseudo: pseudo
        };
        invalidateStyles();
    }
    function invalidateStyles() {
        rebuildStyles = true;
        __export_invalidate();
    }
    function updateSprite(spDef) {
        var stDef = allStyles[spDef.styleId];
        var style_index = {
            backgroundImage: "url(" + spDef.url + ")",
            width: spDef.width,
            height: spDef.height,
            backgroundPosition: -spDef.left + "px " + -spDef.top + "px",
            backgroundSize: spDef.width + "px " + spDef.height + "px"
        };
        stDef.style = style_index;
        invalidateStyles();
    }
    function emptyStyleDef(url) {
        return styleDef({
            width: 0,
            height: 0
        }, undefined, url);
    }
    var rgbaRegex = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;
    function recolorAndClip(image, colorStr, width, height, left, top) {
        var canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, -left, -top);
        var imgData = ctx.getImageData(0, 0, width, height);
        var imgDataData = imgData.data;
        var rgba = rgbaRegex.exec(colorStr);
        var cRed, cGreen, cBlue, cAlpha;
        if (rgba) {
            cRed = parseInt(rgba[1], 10);
            cGreen = parseInt(rgba[2], 10);
            cBlue = parseInt(rgba[3], 10);
            cAlpha = Math.round(parseFloat(rgba[4]) * 255);
        } else {
            cRed = parseInt(colorStr.substr(1, 2), 16);
            cGreen = parseInt(colorStr.substr(3, 2), 16);
            cBlue = parseInt(colorStr.substr(5, 2), 16);
            cAlpha = parseInt(colorStr.substr(7, 2), 16) || 255;
        }
        if (cAlpha === 255) {
            for (var i_index = 0; i_index < imgDataData.length; i_index += 4) {
                var red = imgDataData[i_index];
                if (red === imgDataData[i_index + 1] && red === imgDataData[i_index + 2] && (red === 128 || imgDataData[i_index + 3] < 255 && red > 112)) {
                    imgDataData[i_index] = cRed;
                    imgDataData[i_index + 1] = cGreen;
                    imgDataData[i_index + 2] = cBlue;
                }
            }
        } else {
            for (var i_index = 0; i_index < imgDataData.length; i_index += 4) {
                var red = imgDataData[i_index];
                var alpha = imgDataData[i_index + 3];
                if (red === imgDataData[i_index + 1] && red === imgDataData[i_index + 2] && (red === 128 || alpha < 255 && red > 112)) {
                    if (alpha === 255) {
                        imgDataData[i_index] = cRed;
                        imgDataData[i_index + 1] = cGreen;
                        imgDataData[i_index + 2] = cBlue;
                        imgDataData[i_index + 3] = cAlpha;
                    } else {
                        alpha = alpha * (1 / 255);
                        imgDataData[i_index] = Math.round(cRed * alpha);
                        imgDataData[i_index + 1] = Math.round(cGreen * alpha);
                        imgDataData[i_index + 2] = Math.round(cBlue * alpha);
                        imgDataData[i_index + 3] = Math.round(cAlpha * alpha);
                    }
                }
            }
        }
        ctx.putImageData(imgData, 0, 0);
        return canvas.toDataURL();
    }
    var lastFuncId = 0;
    var funcIdName = "b@funcId";
    var imagesWithCredentials = false;
    function loadImage(url, onload) {
        var image = new Image();
        image.crossOrigin = imagesWithCredentials ? "use-credentials" : "anonymous";
        image.addEventListener("load", function() {
            return onload(image);
        });
        image.src = url;
    }
    function setImagesWithCredentials(value) {
        imagesWithCredentials = value;
    }
    function sprite(url, color, width, height, left, top) {
        assert(allStyles[url] === undefined, "Wrong sprite url");
        left = left || 0;
        top = top || 0;
        var colorId = color || "";
        var isVarColor = false;
        if (isFunction(color)) {
            isVarColor = true;
            colorId = color[funcIdName];
            if (colorId == null) {
                colorId = "" + lastFuncId++;
                color[funcIdName] = colorId;
            }
        }
        var key = url + ":" + colorId + ":" + (width || 0) + ":" + (height || 0) + ":" + left + ":" + top;
        var spDef = allSprites[key];
        if (spDef) return spDef.styleId;
        var styleId = emptyStyleDef(url);
        spDef = {
            styleId: styleId,
            url: url,
            width: width,
            height: height,
            left: left,
            top: top
        };
        if (isVarColor) {
            spDef.color = color;
            spDef.lastColor = "";
            spDef.lastUrl = "";
            dynamicSprites.push(spDef);
            if (imageCache[url] === undefined) {
                imageCache[url] = null;
                loadImage(url, function(image) {
                    imageCache[url] = image;
                    invalidateStyles();
                });
            }
            invalidateStyles();
        } else if (width == null || height == null || color != null) {
            loadImage(url, function(image) {
                if (spDef.width == null) spDef.width = image.width;
                if (spDef.height == null) spDef.height = image.height;
                if (color != null) {
                    spDef.url = recolorAndClip(image, color, spDef.width, spDef.height, spDef.left, spDef.top);
                    spDef.left = 0;
                    spDef.top = 0;
                }
                updateSprite(spDef);
            });
        } else {
            updateSprite(spDef);
        }
        allSprites[key] = spDef;
        return styleId;
    }
    var bundlePath = window["bobrilBPath"] || "bundle.png";
    var bundlePath2 = window["bobrilBPath2"] || [];
    function setBundlePngPath(path) {
        bundlePath = path;
    }
    function getSpritePaths() {
        return [ bundlePath, bundlePath2 ];
    }
    function setSpritePaths(main, others) {
        bundlePath = main;
        bundlePath2 = others;
    }
    function spriteb(width, height, left, top) {
        var key = ":" + width + ":" + height + ":" + left + ":" + top;
        var spDef = bundledSprites[key];
        if (spDef) return spDef.styleId;
        hasBundledSprites = true;
        var styleId = styleDef({
            width: width,
            height: height
        });
        spDef = {
            styleId: styleId,
            width: width,
            height: height,
            left: left,
            top: top
        };
        bundledSprites[key] = spDef;
        wasSpriteUrlChanged = true;
        return styleId;
    }
    function spritebc(color, width, height, left, top) {
        if (color == undefined) {
            return spriteb(width, height, left, top);
        }
        var colorId;
        if (isString(color)) {
            colorId = color;
        } else {
            colorId = color[funcIdName];
            if (colorId == null) {
                colorId = "" + lastFuncId++;
                color[funcIdName] = colorId;
            }
        }
        var key = colorId + ":" + width + ":" + height + ":" + left + ":" + top;
        var spDef = bundledSprites[key];
        if (spDef) return spDef.styleId;
        hasBundledSprites = true;
        var styleId = styleDef({
            width: width,
            height: height
        });
        spDef = {
            styleId: styleId,
            width: width,
            height: height,
            left: left,
            top: top
        };
        spDef.color = color;
        spDef.lastColor = "";
        spDef.lastUrl = "";
        bundledDynamicSprites.push(spDef);
        bundledSprites[key] = spDef;
        return styleId;
    }
    function injectCss(css) {
        injectedCss += css;
        invalidateStyles();
    }
    function asset(path) {
        return path;
    }
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = angleInDegrees * Math.PI / 180;
        return {
            x: centerX + radius * Math.sin(angleInRadians),
            y: centerY - radius * Math.cos(angleInRadians)
        };
    }
    function svgDescribeArc(x, y, radius, startAngle, endAngle, startWithLine) {
        var absDeltaAngle = Math.abs(endAngle - startAngle);
        var close = false;
        if (absDeltaAngle > 360 - .01) {
            if (endAngle > startAngle) endAngle = startAngle - 359.9; else endAngle = startAngle + 359.9;
            if (radius === 0) return "";
            close = true;
        } else {
            if (radius === 0) {
                return [ startWithLine ? "L" : "M", x, y ].join(" ");
            }
        }
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        var arcSweep = absDeltaAngle <= 180 ? "0" : "1";
        var largeArg = endAngle > startAngle ? "0" : "1";
        var d = [ startWithLine ? "L" : "M", start.x, start.y, "A", radius, radius, 0, arcSweep, largeArg, end.x, end.y ].join(" ");
        if (close) d += "Z";
        return d;
    }
    function svgPie(x, y, radiusBig, radiusSmall, startAngle, endAngle) {
        var p = svgDescribeArc(x, y, radiusBig, startAngle, endAngle, false);
        var nextWithLine = true;
        if (p[p.length - 1] === "Z") nextWithLine = false;
        if (radiusSmall === 0) {
            if (!nextWithLine) return p;
        }
        return p + svgDescribeArc(x, y, radiusSmall, endAngle, startAngle, nextWithLine) + "Z";
    }
    function svgCircle(x, y, radius) {
        return svgDescribeArc(x, y, radius, 0, 360, false);
    }
    function svgRect(x, y, width, height) {
        return "M" + x + " " + y + "h" + width + "v" + height + "h" + -width + "Z";
    }
    function withKey(content, key) {
        if (isObject(content) && !__export_isArray(content)) {
            content.key = key;
            return content;
        }
        return {
            key: key,
            children: content
        };
    }
    function withRef(node, ctx, name_index) {
        node.ref = [ ctx, name_index ];
        return node;
    }
    function extendCfg(ctx, propertyName, value) {
        var c = ctx.me.cfg;
        if (c !== undefined) {
            c[propertyName] = value;
        } else {
            c = Object.assign({}, ctx.cfg);
            c[propertyName] = value;
            ctx.me.cfg = c;
        }
    }
    function styledDiv(children) {
        var styles = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            styles[_i - 1] = arguments[_i];
        }
        return style({
            tag: "div",
            children: children
        }, styles);
    }
    function createVirtualComponent(component_index) {
        return function(data, children) {
            if (children !== undefined) {
                if (data == null) data = {};
                data.children = children;
            }
            return {
                data: data,
                component: component_index
            };
        };
    }
    function createOverridingComponent(original, after) {
        var originalComponent = original().component;
        var overriding = overrideComponents(originalComponent, after);
        return createVirtualComponent(overriding);
    }
    function createComponent(component_index) {
        var originalRender = component_index.render;
        if (originalRender) {
            component_index.render = function(ctx, me, oldMe) {
                me.tag = "div";
                return originalRender.call(component_index, ctx, me, oldMe);
            };
        } else {
            component_index.render = function(_ctx, me) {
                me.tag = "div";
            };
        }
        return createVirtualComponent(component_index);
    }
    function createDerivedComponent(original, after) {
        var originalComponent = original().component;
        var merged = mergeComponents(originalComponent, after);
        return createVirtualComponent(merged);
    }
    function prop(value, onChange) {
        return function(val) {
            if (val !== undefined) {
                if (onChange !== undefined) onChange(val, value);
                value = val;
            }
            return value;
        };
    }
    function propi(value) {
        return function(val) {
            if (val !== undefined) {
                value = val;
                __export_invalidate();
            }
            return value;
        };
    }
    function propa(prop_index) {
        return function(val) {
            if (val !== undefined) {
                if (typeof val === "object" && isFunction(val.then)) {
                    val.then(function(v) {
                        prop_index(v);
                    }, function(err) {
                        if (window["console"] && console.error) console.error(err);
                    });
                } else {
                    return prop_index(val);
                }
            }
            return prop_index();
        };
    }
    function propim(value, ctx, onChange) {
        return function(val) {
            if (val !== undefined && !Object.is(val, value)) {
                var oldVal = val;
                value = val;
                if (onChange !== undefined) onChange(val, oldVal);
                __export_invalidate(ctx);
            }
            return value;
        };
    }
    function debounceProp(from, delay) {
        if (delay === void 0) {
            delay = 500;
        }
        var current = from();
        var lastSet = current;
        var timer;
        function clearTimer() {
            if (timer !== undefined) {
                clearTimeout(timer);
                timer = undefined;
            }
        }
        return function(value) {
            if (value === undefined) {
                var origin_1 = from();
                if (origin_1 === lastSet) return current;
                current = origin_1;
                lastSet = origin_1;
                clearTimer();
                return origin_1;
            } else {
                clearTimer();
                if (current === value) {
                    lastSet = value;
                    from(value);
                } else {
                    current = value;
                    timer = setTimeout(function() {
                        lastSet = current;
                        from(current);
                        timer = undefined;
                    }, delay);
                }
                return value;
            }
        };
    }
    function getValue(value) {
        if (isFunction(value)) {
            return value();
        }
        return value;
    }
    function emitChange(data, value) {
        if (isFunction(data.value)) {
            data.value(value);
        }
        if (data.onChange !== undefined) {
            data.onChange(value);
        }
    }
    if (!window.b) window.b = {
        deref: deref,
        getRoots: getRoots,
        setInvalidate: setInvalidate,
        invalidateStyles: invalidateStyles,
        ignoreShouldChange: ignoreShouldChange,
        setAfterFrame: setAfterFrame,
        setBeforeFrame: setBeforeFrame,
        getDnds: __export_getDnds,
        setBeforeInit: setBeforeInit
    };
    function createElement(name_index, props) {
        var children = [];
        for (var i_index = 2; i_index < arguments.length; i_index++) {
            var ii = arguments[i_index];
            children.push(ii);
        }
        if (isString(name_index)) {
            var res = {
                tag: name_index,
                children: children
            };
            if (props == null) {
                return res;
            }
            var attrs;
            var component_index;
            for (var n in props) {
                if (!props.hasOwnProperty(n)) continue;
                var propValue = props[n];
                if (n === "style") {
                    style(res, propValue);
                    continue;
                }
                if (n === "ref") {
                    if (isString(propValue)) {
                        assert(getCurrentCtx() != undefined);
                        res.ref = [ getCurrentCtx(), propValue ];
                    } else res = propValue;
                    continue;
                }
                if (n === "key" || n === "className" || n === "component" || n === "data") {
                    res[n] = propValue;
                    continue;
                }
                if (n.startsWith("on") && isFunction(propValue)) {
                    if (component_index == undefined) {
                        component_index = {};
                        res.component = component_index;
                    }
                    component_index[n] = propValue.call.bind(propValue);
                    continue;
                }
                if (attrs == undefined) {
                    attrs = {};
                    res.attrs = attrs;
                }
                attrs[n] = propValue;
            }
            return res;
        } else {
            var res_1;
            assert(isFunction(name_index));
            if (name_index.length == 1) {
                if (props == undefined) props = {
                    children: children
                }; else props.children = children;
                res_1 = name_index(props);
            } else {
                res_1 = name_index(props, children);
            }
            if (props != undefined) {
                if (props.key != undefined) res_1.key = props.key;
                if (props.ref != undefined) res_1.ref = props.ref;
            }
            return res_1;
        }
    }
    function Fragment(data) {
        return data;
    }
    var __export___spread = __export_assign;
    var EventResult;
    (function(EventResult_index) {
        EventResult_index[EventResult_index["NotHandled"] = 0] = "NotHandled";
        EventResult_index[EventResult_index["HandledPreventDefault"] = 1] = "HandledPreventDefault";
        EventResult_index[EventResult_index["HandledButRunDefault"] = 2] = "HandledButRunDefault";
        EventResult_index[EventResult_index["NotHandledPreventDefault"] = 3] = "NotHandledPreventDefault";
    })(EventResult = __export_EventResult || (__export_EventResult = {}));
    var Component = function() {
        function Component_index(data, me) {
            this.data = data;
            this.me = me;
            this.cfg = undefined;
            this.refs = undefined;
        }
        return Component_index;
    }();
    var __export_Component = Component;
    var componentEventNames = [ "onKeyDown", "onKeyUp", "onKeyPress", "onClick", "onDoubleClick", "onContextMenu", "onMouseDown", "onMouseUp", "onMouseOver", "onMouseIn", "onMouseOut", "onMouseMove", "onMouseWheel", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onFocusIn", "onFocusOut", "onDragStart", "onDrag", "onDragEnd", "onDragOver", "onDrop", "canDeactivate" ];
    var currentRenderCtx;
    var hookId = 0;
    function forwardRender(m) {
        if (m == undefined) return undefined;
        return function(ctx, me, _oldMe) {
            currentRenderCtx = ctx;
            hookId = 0;
            me.children = m.call(ctx, ctx.data);
            currentRenderCtx = undefined;
        };
    }
    function forwardInit(m) {
        if (m == undefined) return undefined;
        return function(ctx) {
            m.call(ctx, ctx.data);
        };
    }
    function forwardMe(m) {
        if (m == undefined) return undefined;
        return m.call.bind(m);
    }
    var methodsWithMeParam = [ "destroy", "postInitDom", "postUpdateDom", "postUpdateDomEverytime" ];
    function component(component_index, name_index) {
        var bobrilComponent = {};
        if (component_index.prototype instanceof Component) {
            var proto = component_index.prototype;
            bobrilComponent.id = name_index || proto.constructor.name || "C" + allocateMethodId();
            bobrilComponent.render = forwardRender(proto.render);
            bobrilComponent.ctxClass = component_index;
            bobrilComponent.init = forwardInit(proto.init);
            for (var i_17 = 0; i_17 < methodsWithMeParam.length; i_17++) {
                bobrilComponent[methodsWithMeParam[i_17]] = forwardMe(proto[methodsWithMeParam[i_17]]);
            }
            var _loop_1 = function(i_18) {
                var name_2 = componentEventNames[i_18];
                var eventFunc = proto[name_2];
                if (isFunction(eventFunc)) bobrilComponent[name_2] = function(ctx, event) {
                    return eventFunc.call(ctx, event);
                };
            };
            for (var i_18 = 0; i_18 < componentEventNames.length; i_18++) {
                _loop_1(i_18);
            }
            bobrilComponent.canActivate = proto.constructor.canActivate;
        } else {
            bobrilComponent.id = name_index || component_index.name || "C" + allocateMethodId();
            bobrilComponent.render = forwardRender(component_index);
        }
        return function(data, children) {
            if (children !== undefined) {
                if (data == null) data = {};
                data.children = children;
            }
            return {
                data: data,
                component: bobrilComponent
            };
        };
    }
    function checkCurrentRenderCtx() {
        assert(currentRenderCtx != undefined, "Hooks could be used only in Render method in b.component");
    }
    function accessHook() {
        checkCurrentRenderCtx();
        assert(currentRenderCtx != undefined, "Hooks could be used only in Render method in b.component");
        var hooks = currentRenderCtx.$hooks;
        if (hooks === undefined) {
            hooks = [];
            currentRenderCtx.$hooks = hooks;
        }
        var hook = hooks[hookId];
        if (hook === undefined) {
            hook = [];
            hooks.push(hook);
        }
        hookId++;
        return hook;
    }
    function useState(initValue) {
        var hook = accessHook();
        function setter(value) {
            if (isFunction(value)) {
                value = value(hook[0]);
            }
            if (!Object.is(value, hook[0])) {
                hook[0] = value;
                __export_invalidate(currentRenderCtx);
            }
        }
        if (hook.length == 0) {
            if (isFunction(initValue)) {
                initValue = initValue();
            }
            hook.push(initValue, setter);
        }
        return hook;
    }
    function useContext(key) {
        checkCurrentRenderCtx();
        return currentRenderCtx.cfg[key];
    }
    function provideContext(key, value) {
        checkCurrentRenderCtx();
        extendCfg(currentRenderCtx, key, value);
    }
    function Dynamic() {
        return createComponent({
            init: function(ctx) {
                ctx.data.module.then(function(module) {
                    setTimeout(function() {
                        ctx.module = module;
                        __export_invalidate(ctx);
                    });
                }).catch(function() {
                    return null;
                });
            },
            render: function(ctx, me) {
                me.children = ctx.module ? ctx.module["default"]() : "loading";
            }
        });
    }
    init(function() {
        return [ {
            tag: "h1",
            children: "Hello World!"
        }, {
            tag: "div",
            children: Dynamic()({
                module: __import("c.js", "a")
            })
        }, {
            tag: "div",
            children: Dynamic()({
                module: __import("d.js", "b")
            })
        } ];
    });
    __bbb.c = getMedia;
    __bbb.Jf = styleDef;
    __bbb.f = selectorStyleDef;
    __bbb.g = invalidateStyles;
    __bbb.zf = createComponent;
    __bbb.yf = style;
    __bbb.td = __export_now;
    __bbb.Mf = styledDiv;
    __bbb.Ff = __export_invalidate;
    __bbb.Nb = convertPointFromClientToNode;
    __bbb.sd = __export_pointersDownCount;
    __bbb.od = registerMouseOwner;
    __bbb.ve = focus;
    __bbb.$e = addOnScroll;
    __bbb.rd = releaseMouseOwner;
    __bbb.ff = removeOnScroll;
    __bbb.ra = asset;
    __bbb.vf = withKey;
    __bbb.pf = createVirtualComponent;
    __bbb.Ec = emitChange;
    __bbb.Lc = getValue;
    __bbb.ob = focused;
    __bbb.Jb = svgCircle;
    __bbb.fd = styleDefEx;
    __bbb.te = prop;
    __bbb.xe = __export_isArray;
    __bbb.ef = getDomNode;
    __bbb.Ae = extendCfg;
    __bbb.Ce = withRef;
    __bbb._e = addRoot;
    __bbb.gf = removeRoot;
    __bbb.Ue = nodePagePos;
    __bbb.We = getWindowScroll;
    __bbb.Ze = deferSyncUpdate;
    __bbb.af = registerFocusRoot;
    __bbb.hf = unregisterFocusRoot;
    __bbb.df = getRoots;
    __bbb.Kf = component;
    __bbb.Lf = useState;
})();