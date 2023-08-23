/*! For license information please see main.5d181981.js.LICENSE.txt */ ! function() {
	var e = {
        47: function(e, t, n) {
            var r;
            r = function() {
                return function(e) {
                    var t = {};

                    function n(r) {
                        if (t[r]) return t[r].exports;
                        var a = t[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
                        var r = Object.create(null);
                        if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var a in e) n.d(r, a, function(t) {
                                return e[t]
                            }.bind(null, a));
                        return r
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "", n(n.s = 21)
                }([function(e, t) {
                    var r = {};
                    e.exports = r,
                        function() {
                            r._nextId = 0, r._seed = 0, r._nowStartTime = +new Date, r._warnedOnce = {}, r._decomp = null, r.extend = function(e, t) {
                                var n, a;
                                "boolean" === typeof t ? (n = 2, a = t) : (n = 1, a = !0);
                                for (var i = n; i < arguments.length; i++) {
                                    var o = arguments[i];
                                    if (o)
                                        for (var l in o) a && o[l] && o[l].constructor === Object ? e[l] && e[l].constructor !== Object ? e[l] = o[l] : (e[l] = e[l] || {}, r.extend(e[l], a, o[l])) : e[l] = o[l]
                                }
                                return e
                            }, r.clone = function(e, t) {
                                return r.extend({}, t, e)
                            }, r.keys = function(e) {
                                if (Object.keys) return Object.keys(e);
                                var t = [];
                                for (var n in e) t.push(n);
                                return t
                            }, r.values = function(e) {
                                var t = [];
                                if (Object.keys) {
                                    for (var n = Object.keys(e), r = 0; r < n.length; r++) t.push(e[n[r]]);
                                    return t
                                }
                                for (var a in e) t.push(e[a]);
                                return t
                            }, r.get = function(e, t, n, r) {
                                t = t.split(".").slice(n, r);
                                for (var a = 0; a < t.length; a += 1) e = e[t[a]];
                                return e
                            }, r.set = function(e, t, n, a, i) {
                                var o = t.split(".").slice(a, i);
                                return r.get(e, t, 0, -1)[o[o.length - 1]] = n, n
                            }, r.shuffle = function(e) {
                                for (var t = e.length - 1; t > 0; t--) {
                                    var n = Math.floor(r.random() * (t + 1)),
                                        a = e[t];
                                    e[t] = e[n], e[n] = a
                                }
                                return e
                            }, r.choose = function(e) {
                                return e[Math.floor(r.random() * e.length)]
                            }, r.isElement = function(e) {
                                return "undefined" !== typeof HTMLElement ? e instanceof HTMLElement : !!(e && e.nodeType && e.nodeName)
                            }, r.isArray = function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }, r.isFunction = function(e) {
                                return "function" === typeof e
                            }, r.isPlainObject = function(e) {
                                return "object" === typeof e && e.constructor === Object
                            }, r.isString = function(e) {
                                return "[object String]" === toString.call(e)
                            }, r.clamp = function(e, t, n) {
                                return e < t ? t : e > n ? n : e
                            }, r.sign = function(e) {
                                return e < 0 ? -1 : 1
                            }, r.now = function() {
                                if ("undefined" !== typeof window && window.performance) {
                                    if (window.performance.now) return window.performance.now();
                                    if (window.performance.webkitNow) return window.performance.webkitNow()
                                }
                                return Date.now ? Date.now() : new Date - r._nowStartTime
                            }, r.random = function(t, n) {
                                return n = "undefined" !== typeof n ? n : 1, (t = "undefined" !== typeof t ? t : 0) + e() * (n - t)
                            };
                            var e = function() {
                                return r._seed = (9301 * r._seed + 49297) % 233280, r._seed / 233280
                            };
                            r.colorToNumber = function(e) {
                                return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
                            }, r.logLevel = 1, r.log = function() {
                                console && r.logLevel > 0 && r.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                            }, r.info = function() {
                                console && r.logLevel > 0 && r.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                            }, r.warn = function() {
                                console && r.logLevel > 0 && r.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                            }, r.warnOnce = function() {
                                var e = Array.prototype.slice.call(arguments).join(" ");
                                r._warnedOnce[e] || (r.warn(e), r._warnedOnce[e] = !0)
                            }, r.deprecated = function(e, t, n) {
                                e[t] = r.chain((function() {
                                    r.warnOnce("\ud83d\udd05 deprecated \ud83d\udd05", n)
                                }), e[t])
                            }, r.nextId = function() {
                                return r._nextId++
                            }, r.indexOf = function(e, t) {
                                if (e.indexOf) return e.indexOf(t);
                                for (var n = 0; n < e.length; n++)
                                    if (e[n] === t) return n;
                                return -1
                            }, r.map = function(e, t) {
                                if (e.map) return e.map(t);
                                for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n
                            }, r.topologicalSort = function(e) {
                                var t = [],
                                    n = [],
                                    a = [];
                                for (var i in e) n[i] || a[i] || r._topologicalSort(i, n, a, e, t);
                                return t
                            }, r._topologicalSort = function(e, t, n, a, i) {
                                var o = a[e] || [];
                                n[e] = !0;
                                for (var l = 0; l < o.length; l += 1) {
                                    var s = o[l];
                                    n[s] || t[s] || r._topologicalSort(s, t, n, a, i)
                                }
                                n[e] = !1, t[e] = !0, i.push(e)
                            }, r.chain = function() {
                                for (var e = [], t = 0; t < arguments.length; t += 1) {
                                    var n = arguments[t];
                                    n._chained ? e.push.apply(e, n._chained) : e.push(n)
                                }
                                var r = function() {
                                    for (var t, n = new Array(arguments.length), r = 0, a = arguments.length; r < a; r++) n[r] = arguments[r];
                                    for (r = 0; r < e.length; r += 1) {
                                        var i = e[r].apply(t, n);
                                        "undefined" !== typeof i && (t = i)
                                    }
                                    return t
                                };
                                return r._chained = e, r
                            }, r.chainPathBefore = function(e, t, n) {
                                return r.set(e, t, r.chain(n, r.get(e, t)))
                            }, r.chainPathAfter = function(e, t, n) {
                                return r.set(e, t, r.chain(r.get(e, t), n))
                            }, r.setDecomp = function(e) {
                                r._decomp = e
                            }, r.getDecomp = function() {
                                var e = r._decomp;
                                try {
                                    e || "undefined" === typeof window || (e = window.decomp), e || "undefined" === typeof n.g || (e = n.g.decomp)
                                } catch (t) {
                                    e = null
                                }
                                return e
                            }
                        }()
                }, function(e, t) {
                    var n = {};
                    e.exports = n, n.create = function(e) {
                        var t = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            }
                        };
                        return e && n.update(t, e), t
                    }, n.update = function(e, t, n) {
                        e.min.x = 1 / 0, e.max.x = -1 / 0, e.min.y = 1 / 0, e.max.y = -1 / 0;
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            a.x > e.max.x && (e.max.x = a.x), a.x < e.min.x && (e.min.x = a.x), a.y > e.max.y && (e.max.y = a.y), a.y < e.min.y && (e.min.y = a.y)
                        }
                        n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x, n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
                    }, n.contains = function(e, t) {
                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                    }, n.overlaps = function(e, t) {
                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                    }, n.translate = function(e, t) {
                        e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
                    }, n.shift = function(e, t) {
                        var n = e.max.x - e.min.x,
                            r = e.max.y - e.min.y;
                        e.min.x = t.x, e.max.x = t.x + n, e.min.y = t.y, e.max.y = t.y + r
                    }
                }, function(e, t) {
                    var n = {};
                    e.exports = n, n.create = function(e, t) {
                        return {
                            x: e || 0,
                            y: t || 0
                        }
                    }, n.clone = function(e) {
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }, n.magnitude = function(e) {
                        return Math.sqrt(e.x * e.x + e.y * e.y)
                    }, n.magnitudeSquared = function(e) {
                        return e.x * e.x + e.y * e.y
                    }, n.rotate = function(e, t, n) {
                        var r = Math.cos(t),
                            a = Math.sin(t);
                        n || (n = {});
                        var i = e.x * r - e.y * a;
                        return n.y = e.x * a + e.y * r, n.x = i, n
                    }, n.rotateAbout = function(e, t, n, r) {
                        var a = Math.cos(t),
                            i = Math.sin(t);
                        r || (r = {});
                        var o = n.x + ((e.x - n.x) * a - (e.y - n.y) * i);
                        return r.y = n.y + ((e.x - n.x) * i + (e.y - n.y) * a), r.x = o, r
                    }, n.normalise = function(e) {
                        var t = n.magnitude(e);
                        return 0 === t ? {
                            x: 0,
                            y: 0
                        } : {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, n.dot = function(e, t) {
                        return e.x * t.x + e.y * t.y
                    }, n.cross = function(e, t) {
                        return e.x * t.y - e.y * t.x
                    }, n.cross3 = function(e, t, n) {
                        return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                    }, n.add = function(e, t, n) {
                        return n || (n = {}), n.x = e.x + t.x, n.y = e.y + t.y, n
                    }, n.sub = function(e, t, n) {
                        return n || (n = {}), n.x = e.x - t.x, n.y = e.y - t.y, n
                    }, n.mult = function(e, t) {
                        return {
                            x: e.x * t,
                            y: e.y * t
                        }
                    }, n.div = function(e, t) {
                        return {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, n.perp = function(e, t) {
                        return {
                            x: (t = !0 === t ? -1 : 1) * -e.y,
                            y: t * e.x
                        }
                    }, n.neg = function(e) {
                        return {
                            x: -e.x,
                            y: -e.y
                        }
                    }, n.angle = function(e, t) {
                        return Math.atan2(t.y - e.y, t.x - e.x)
                    }, n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(2),
                        i = n(0);
                    r.create = function(e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var a = e[r],
                                i = {
                                    x: a.x,
                                    y: a.y,
                                    index: r,
                                    body: t,
                                    isInternal: !1
                                };
                            n.push(i)
                        }
                        return n
                    }, r.fromPath = function(e, t) {
                        var n = [];
                        return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi, (function(e, t, r) {
                            n.push({
                                x: parseFloat(t),
                                y: parseFloat(r)
                            })
                        })), r.create(n, t)
                    }, r.centre = function(e) {
                        for (var t, n, i, o = r.area(e, !0), l = {
                                x: 0,
                                y: 0
                            }, s = 0; s < e.length; s++) i = (s + 1) % e.length, t = a.cross(e[s], e[i]), n = a.mult(a.add(e[s], e[i]), t), l = a.add(l, n);
                        return a.div(l, 6 * o)
                    }, r.mean = function(e) {
                        for (var t = {
                                x: 0,
                                y: 0
                            }, n = 0; n < e.length; n++) t.x += e[n].x, t.y += e[n].y;
                        return a.div(t, e.length)
                    }, r.area = function(e, t) {
                        for (var n = 0, r = e.length - 1, a = 0; a < e.length; a++) n += (e[r].x - e[a].x) * (e[r].y + e[a].y), r = a;
                        return t ? n / 2 : Math.abs(n) / 2
                    }, r.inertia = function(e, t) {
                        for (var n, r, i = 0, o = 0, l = e, s = 0; s < l.length; s++) r = (s + 1) % l.length, i += (n = Math.abs(a.cross(l[r], l[s]))) * (a.dot(l[r], l[r]) + a.dot(l[r], l[s]) + a.dot(l[s], l[s])), o += n;
                        return t / 6 * (i / o)
                    }, r.translate = function(e, t, n) {
                        n = "undefined" !== typeof n ? n : 1;
                        var r, a = e.length,
                            i = t.x * n,
                            o = t.y * n;
                        for (r = 0; r < a; r++) e[r].x += i, e[r].y += o;
                        return e
                    }, r.rotate = function(e, t, n) {
                        if (0 !== t) {
                            var r, a, i, o, l = Math.cos(t),
                                s = Math.sin(t),
                                u = n.x,
                                c = n.y,
                                d = e.length;
                            for (o = 0; o < d; o++) a = (r = e[o]).x - u, i = r.y - c, r.x = u + (a * l - i * s), r.y = c + (a * s + i * l);
                            return e
                        }
                    }, r.contains = function(e, t) {
                        for (var n, r = t.x, a = t.y, i = e.length, o = e[i - 1], l = 0; l < i; l++) {
                            if (n = e[l], (r - o.x) * (n.y - o.y) + (a - o.y) * (o.x - n.x) > 0) return !1;
                            o = n
                        }
                        return !0
                    }, r.scale = function(e, t, n, i) {
                        if (1 === t && 1 === n) return e;
                        var o, l;
                        i = i || r.centre(e);
                        for (var s = 0; s < e.length; s++) o = e[s], l = a.sub(o, i), e[s].x = i.x + l.x * t, e[s].y = i.y + l.y * n;
                        return e
                    }, r.chamfer = function(e, t, n, r, o) {
                        t = "number" === typeof t ? [t] : t || [8], n = "undefined" !== typeof n ? n : -1, r = r || 2, o = o || 14;
                        for (var l = [], s = 0; s < e.length; s++) {
                            var u = e[s - 1 >= 0 ? s - 1 : e.length - 1],
                                c = e[s],
                                d = e[(s + 1) % e.length],
                                f = t[s < t.length ? s : t.length - 1];
                            if (0 !== f) {
                                var C = a.normalise({
                                        x: c.y - u.y,
                                        y: u.x - c.x
                                    }),
                                    p = a.normalise({
                                        x: d.y - c.y,
                                        y: c.x - d.x
                                    }),
                                    m = Math.sqrt(2 * Math.pow(f, 2)),
                                    h = a.mult(i.clone(C), f),
                                    v = a.normalise(a.mult(a.add(C, p), .5)),
                                    y = a.sub(c, a.mult(v, m)),
                                    g = n; - 1 === n && (g = 1.75 * Math.pow(f, .32)), (g = i.clamp(g, r, o)) % 2 === 1 && (g += 1);
                                for (var b = Math.acos(a.dot(C, p)) / g, x = 0; x < g; x++) l.push(a.add(a.rotate(h, b * x), y))
                            } else l.push(c)
                        }
                        return l
                    }, r.clockwiseSort = function(e) {
                        var t = r.mean(e);
                        return e.sort((function(e, n) {
                            return a.angle(t, e) - a.angle(t, n)
                        })), e
                    }, r.isConvex = function(e) {
                        var t, n, r, a, i = 0,
                            o = e.length;
                        if (o < 3) return null;
                        for (t = 0; t < o; t++)
                            if (r = (t + 2) % o, a = (e[n = (t + 1) % o].x - e[t].x) * (e[r].y - e[n].y), (a -= (e[n].y - e[t].y) * (e[r].x - e[n].x)) < 0 ? i |= 1 : a > 0 && (i |= 2), 3 === i) return !1;
                        return 0 !== i || null
                    }, r.hull = function(e) {
                        var t, n, r = [],
                            i = [];
                        for ((e = e.slice(0)).sort((function(e, t) {
                                var n = e.x - t.x;
                                return 0 !== n ? n : e.y - t.y
                            })), n = 0; n < e.length; n += 1) {
                            for (t = e[n]; i.length >= 2 && a.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;) i.pop();
                            i.push(t)
                        }
                        for (n = e.length - 1; n >= 0; n -= 1) {
                            for (t = e[n]; r.length >= 2 && a.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;) r.pop();
                            r.push(t)
                        }
                        return r.pop(), i.pop(), r.concat(i)
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(0);
                    r.on = function(e, t, n) {
                        for (var r, a = t.split(" "), i = 0; i < a.length; i++) r = a[i], e.events = e.events || {}, e.events[r] = e.events[r] || [], e.events[r].push(n);
                        return n
                    }, r.off = function(e, t, n) {
                        if (t) {
                            "function" === typeof t && (n = t, t = a.keys(e.events).join(" "));
                            for (var r = t.split(" "), i = 0; i < r.length; i++) {
                                var o = e.events[r[i]],
                                    l = [];
                                if (n && o)
                                    for (var s = 0; s < o.length; s++) o[s] !== n && l.push(o[s]);
                                e.events[r[i]] = l
                            }
                        } else e.events = {}
                    }, r.trigger = function(e, t, n) {
                        var r, i, o, l, s = e.events;
                        if (s && a.keys(s).length > 0) {
                            n || (n = {}), r = t.split(" ");
                            for (var u = 0; u < r.length; u++)
                                if (o = s[i = r[u]]) {
                                    (l = a.clone(n, !1)).name = i, l.source = e;
                                    for (var c = 0; c < o.length; c++) o[c].apply(e, [l])
                                }
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(4),
                        i = n(0),
                        o = n(1),
                        l = n(6);
                    r.create = function(e) {
                        return i.extend({
                            id: i.nextId(),
                            type: "composite",
                            parent: null,
                            isModified: !1,
                            bodies: [],
                            constraints: [],
                            composites: [],
                            label: "Composite",
                            plugin: {},
                            cache: {
                                allBodies: null,
                                allConstraints: null,
                                allComposites: null
                            }
                        }, e)
                    }, r.setModified = function(e, t, n, a) {
                        if (e.isModified = t, t && e.cache && (e.cache.allBodies = null, e.cache.allConstraints = null, e.cache.allComposites = null), n && e.parent && r.setModified(e.parent, t, n, a), a)
                            for (var i = 0; i < e.composites.length; i++) {
                                var o = e.composites[i];
                                r.setModified(o, t, n, a)
                            }
                    }, r.add = function(e, t) {
                        var n = [].concat(t);
                        a.trigger(e, "beforeAdd", {
                            object: t
                        });
                        for (var o = 0; o < n.length; o++) {
                            var l = n[o];
                            switch (l.type) {
                                case "body":
                                    if (l.parent !== l) {
                                        i.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                        break
                                    }
                                    r.addBody(e, l);
                                    break;
                                case "constraint":
                                    r.addConstraint(e, l);
                                    break;
                                case "composite":
                                    r.addComposite(e, l);
                                    break;
                                case "mouseConstraint":
                                    r.addConstraint(e, l.constraint)
                            }
                        }
                        return a.trigger(e, "afterAdd", {
                            object: t
                        }), e
                    }, r.remove = function(e, t, n) {
                        var i = [].concat(t);
                        a.trigger(e, "beforeRemove", {
                            object: t
                        });
                        for (var o = 0; o < i.length; o++) {
                            var l = i[o];
                            switch (l.type) {
                                case "body":
                                    r.removeBody(e, l, n);
                                    break;
                                case "constraint":
                                    r.removeConstraint(e, l, n);
                                    break;
                                case "composite":
                                    r.removeComposite(e, l, n);
                                    break;
                                case "mouseConstraint":
                                    r.removeConstraint(e, l.constraint)
                            }
                        }
                        return a.trigger(e, "afterRemove", {
                            object: t
                        }), e
                    }, r.addComposite = function(e, t) {
                        return e.composites.push(t), t.parent = e, r.setModified(e, !0, !0, !1), e
                    }, r.removeComposite = function(e, t, n) {
                        var a = i.indexOf(e.composites, t);
                        if (-1 !== a && r.removeCompositeAt(e, a), n)
                            for (var o = 0; o < e.composites.length; o++) r.removeComposite(e.composites[o], t, !0);
                        return e
                    }, r.removeCompositeAt = function(e, t) {
                        return e.composites.splice(t, 1), r.setModified(e, !0, !0, !1), e
                    }, r.addBody = function(e, t) {
                        return e.bodies.push(t), r.setModified(e, !0, !0, !1), e
                    }, r.removeBody = function(e, t, n) {
                        var a = i.indexOf(e.bodies, t);
                        if (-1 !== a && r.removeBodyAt(e, a), n)
                            for (var o = 0; o < e.composites.length; o++) r.removeBody(e.composites[o], t, !0);
                        return e
                    }, r.removeBodyAt = function(e, t) {
                        return e.bodies.splice(t, 1), r.setModified(e, !0, !0, !1), e
                    }, r.addConstraint = function(e, t) {
                        return e.constraints.push(t), r.setModified(e, !0, !0, !1), e
                    }, r.removeConstraint = function(e, t, n) {
                        var a = i.indexOf(e.constraints, t);
                        if (-1 !== a && r.removeConstraintAt(e, a), n)
                            for (var o = 0; o < e.composites.length; o++) r.removeConstraint(e.composites[o], t, !0);
                        return e
                    }, r.removeConstraintAt = function(e, t) {
                        return e.constraints.splice(t, 1), r.setModified(e, !0, !0, !1), e
                    }, r.clear = function(e, t, n) {
                        if (n)
                            for (var a = 0; a < e.composites.length; a++) r.clear(e.composites[a], t, !0);
                        return t ? e.bodies = e.bodies.filter((function(e) {
                            return e.isStatic
                        })) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, r.setModified(e, !0, !0, !1), e
                    }, r.allBodies = function(e) {
                        if (e.cache && e.cache.allBodies) return e.cache.allBodies;
                        for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++) t = t.concat(r.allBodies(e.composites[n]));
                        return e.cache && (e.cache.allBodies = t), t
                    }, r.allConstraints = function(e) {
                        if (e.cache && e.cache.allConstraints) return e.cache.allConstraints;
                        for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++) t = t.concat(r.allConstraints(e.composites[n]));
                        return e.cache && (e.cache.allConstraints = t), t
                    }, r.allComposites = function(e) {
                        if (e.cache && e.cache.allComposites) return e.cache.allComposites;
                        for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++) t = t.concat(r.allComposites(e.composites[n]));
                        return e.cache && (e.cache.allComposites = t), t
                    }, r.get = function(e, t, n) {
                        var a, i;
                        switch (n) {
                            case "body":
                                a = r.allBodies(e);
                                break;
                            case "constraint":
                                a = r.allConstraints(e);
                                break;
                            case "composite":
                                a = r.allComposites(e).concat(e)
                        }
                        return a ? 0 === (i = a.filter((function(e) {
                            return e.id.toString() === t.toString()
                        }))).length ? null : i[0] : null
                    }, r.move = function(e, t, n) {
                        return r.remove(e, t), r.add(n, t), e
                    }, r.rebase = function(e) {
                        for (var t = r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)), n = 0; n < t.length; n++) t[n].id = i.nextId();
                        return e
                    }, r.translate = function(e, t, n) {
                        for (var a = n ? r.allBodies(e) : e.bodies, i = 0; i < a.length; i++) l.translate(a[i], t);
                        return e
                    }, r.rotate = function(e, t, n, a) {
                        for (var i = Math.cos(t), o = Math.sin(t), s = a ? r.allBodies(e) : e.bodies, u = 0; u < s.length; u++) {
                            var c = s[u],
                                d = c.position.x - n.x,
                                f = c.position.y - n.y;
                            l.setPosition(c, {
                                x: n.x + (d * i - f * o),
                                y: n.y + (d * o + f * i)
                            }), l.rotate(c, t)
                        }
                        return e
                    }, r.scale = function(e, t, n, a, i) {
                        for (var o = i ? r.allBodies(e) : e.bodies, s = 0; s < o.length; s++) {
                            var u = o[s],
                                c = u.position.x - a.x,
                                d = u.position.y - a.y;
                            l.setPosition(u, {
                                x: a.x + c * t,
                                y: a.y + d * n
                            }), l.scale(u, t, n)
                        }
                        return e
                    }, r.bounds = function(e) {
                        for (var t = r.allBodies(e), n = [], a = 0; a < t.length; a += 1) {
                            var i = t[a];
                            n.push(i.bounds.min, i.bounds.max)
                        }
                        return o.create(n)
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(2),
                        o = n(7),
                        l = (n(16), n(0)),
                        s = n(1),
                        u = n(11);
                    ! function() {
                        r._inertiaScale = 4, r._nextCollidingGroupId = 1, r._nextNonCollidingGroupId = -1, r._nextCategory = 1, r.create = function(t) {
                            var n = {
                                    id: l.nextId(),
                                    type: "body",
                                    label: "Body",
                                    parts: [],
                                    plugin: {},
                                    angle: 0,
                                    vertices: a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                    position: {
                                        x: 0,
                                        y: 0
                                    },
                                    force: {
                                        x: 0,
                                        y: 0
                                    },
                                    torque: 0,
                                    positionImpulse: {
                                        x: 0,
                                        y: 0
                                    },
                                    constraintImpulse: {
                                        x: 0,
                                        y: 0,
                                        angle: 0
                                    },
                                    totalContacts: 0,
                                    speed: 0,
                                    angularSpeed: 0,
                                    velocity: {
                                        x: 0,
                                        y: 0
                                    },
                                    angularVelocity: 0,
                                    isSensor: !1,
                                    isStatic: !1,
                                    isSleeping: !1,
                                    motion: 0,
                                    sleepThreshold: 60,
                                    density: .001,
                                    restitution: 0,
                                    friction: .1,
                                    frictionStatic: .5,
                                    frictionAir: .01,
                                    collisionFilter: {
                                        category: 1,
                                        mask: 4294967295,
                                        group: 0
                                    },
                                    slop: .05,
                                    timeScale: 1,
                                    render: {
                                        visible: !0,
                                        opacity: 1,
                                        strokeStyle: null,
                                        fillStyle: null,
                                        lineWidth: null,
                                        sprite: {
                                            xScale: 1,
                                            yScale: 1,
                                            xOffset: 0,
                                            yOffset: 0
                                        }
                                    },
                                    events: null,
                                    bounds: null,
                                    chamfer: null,
                                    circleRadius: 0,
                                    positionPrev: null,
                                    anglePrev: 0,
                                    parent: null,
                                    axes: null,
                                    area: 0,
                                    mass: 0,
                                    inertia: 0,
                                    _original: null
                                },
                                r = l.extend(n, t);
                            return e(r, t), r
                        }, r.nextGroup = function(e) {
                            return e ? r._nextNonCollidingGroupId-- : r._nextCollidingGroupId++
                        }, r.nextCategory = function() {
                            return r._nextCategory = r._nextCategory << 1, r._nextCategory
                        };
                        var e = function(e, t) {
                            t = t || {}, r.set(e, {
                                bounds: e.bounds || s.create(e.vertices),
                                positionPrev: e.positionPrev || i.clone(e.position),
                                anglePrev: e.anglePrev || e.angle,
                                vertices: e.vertices,
                                parts: e.parts || [e],
                                isStatic: e.isStatic,
                                isSleeping: e.isSleeping,
                                parent: e.parent || e
                            }), a.rotate(e.vertices, e.angle, e.position), u.rotate(e.axes, e.angle), s.update(e.bounds, e.vertices, e.velocity), r.set(e, {
                                axes: t.axes || e.axes,
                                area: t.area || e.area,
                                mass: t.mass || e.mass,
                                inertia: t.inertia || e.inertia
                            });
                            var n = e.isStatic ? "#14151f" : l.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"]),
                                o = e.isStatic ? "#555" : "#ccc",
                                c = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                            e.render.fillStyle = e.render.fillStyle || n, e.render.strokeStyle = e.render.strokeStyle || o, e.render.lineWidth = e.render.lineWidth || c, e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x), e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                        };
                        r.set = function(e, t, n) {
                            var a;
                            for (a in "string" === typeof t && (a = t, (t = {})[a] = n), t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) switch (n = t[a], a) {
                                    case "isStatic":
                                        r.setStatic(e, n);
                                        break;
                                    case "isSleeping":
                                        o.set(e, n);
                                        break;
                                    case "mass":
                                        r.setMass(e, n);
                                        break;
                                    case "density":
                                        r.setDensity(e, n);
                                        break;
                                    case "inertia":
                                        r.setInertia(e, n);
                                        break;
                                    case "vertices":
                                        r.setVertices(e, n);
                                        break;
                                    case "position":
                                        r.setPosition(e, n);
                                        break;
                                    case "angle":
                                        r.setAngle(e, n);
                                        break;
                                    case "velocity":
                                        r.setVelocity(e, n);
                                        break;
                                    case "angularVelocity":
                                        r.setAngularVelocity(e, n);
                                        break;
                                    case "parts":
                                        r.setParts(e, n);
                                        break;
                                    case "centre":
                                        r.setCentre(e, n);
                                        break;
                                    default:
                                        e[a] = n
                                }
                        }, r.setStatic = function(e, t) {
                            for (var n = 0; n < e.parts.length; n++) {
                                var r = e.parts[n];
                                r.isStatic = t, t ? (r._original = {
                                    restitution: r.restitution,
                                    friction: r.friction,
                                    mass: r.mass,
                                    inertia: r.inertia,
                                    density: r.density,
                                    inverseMass: r.inverseMass,
                                    inverseInertia: r.inverseInertia
                                }, r.restitution = 0, r.friction = 1, r.mass = r.inertia = r.density = 1 / 0, r.inverseMass = r.inverseInertia = 0, r.positionPrev.x = r.position.x, r.positionPrev.y = r.position.y, r.anglePrev = r.angle, r.angularVelocity = 0, r.speed = 0, r.angularSpeed = 0, r.motion = 0) : r._original && (r.restitution = r._original.restitution, r.friction = r._original.friction, r.mass = r._original.mass, r.inertia = r._original.inertia, r.density = r._original.density, r.inverseMass = r._original.inverseMass, r.inverseInertia = r._original.inverseInertia, r._original = null)
                            }
                        }, r.setMass = function(e, t) {
                            var n = e.inertia / (e.mass / 6);
                            e.inertia = n * (t / 6), e.inverseInertia = 1 / e.inertia, e.mass = t, e.inverseMass = 1 / e.mass, e.density = e.mass / e.area
                        }, r.setDensity = function(e, t) {
                            r.setMass(e, t * e.area), e.density = t
                        }, r.setInertia = function(e, t) {
                            e.inertia = t, e.inverseInertia = 1 / e.inertia
                        }, r.setVertices = function(e, t) {
                            t[0].body === e ? e.vertices = t : e.vertices = a.create(t, e), e.axes = u.fromVertices(e.vertices), e.area = a.area(e.vertices), r.setMass(e, e.density * e.area);
                            var n = a.centre(e.vertices);
                            a.translate(e.vertices, n, -1), r.setInertia(e, r._inertiaScale * a.inertia(e.vertices, e.mass)), a.translate(e.vertices, e.position), s.update(e.bounds, e.vertices, e.velocity)
                        }, r.setParts = function(e, t, n) {
                            var i;
                            for (t = t.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, i = 0; i < t.length; i++) {
                                var o = t[i];
                                o !== e && (o.parent = e, e.parts.push(o))
                            }
                            if (1 !== e.parts.length) {
                                if (n = "undefined" === typeof n || n) {
                                    var l = [];
                                    for (i = 0; i < t.length; i++) l = l.concat(t[i].vertices);
                                    a.clockwiseSort(l);
                                    var s = a.hull(l),
                                        u = a.centre(s);
                                    r.setVertices(e, s), a.translate(e.vertices, u)
                                }
                                var c = r._totalProperties(e);
                                e.area = c.area, e.parent = e, e.position.x = c.centre.x, e.position.y = c.centre.y, e.positionPrev.x = c.centre.x, e.positionPrev.y = c.centre.y, r.setMass(e, c.mass), r.setInertia(e, c.inertia), r.setPosition(e, c.centre)
                            }
                        }, r.setCentre = function(e, t, n) {
                            n ? (e.positionPrev.x += t.x, e.positionPrev.y += t.y, e.position.x += t.x, e.position.y += t.y) : (e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x), e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y), e.position.x = t.x, e.position.y = t.y)
                        }, r.setPosition = function(e, t) {
                            var n = i.sub(t, e.position);
                            e.positionPrev.x += n.x, e.positionPrev.y += n.y;
                            for (var r = 0; r < e.parts.length; r++) {
                                var o = e.parts[r];
                                o.position.x += n.x, o.position.y += n.y, a.translate(o.vertices, n), s.update(o.bounds, o.vertices, e.velocity)
                            }
                        }, r.setAngle = function(e, t) {
                            var n = t - e.angle;
                            e.anglePrev += n;
                            for (var r = 0; r < e.parts.length; r++) {
                                var o = e.parts[r];
                                o.angle += n, a.rotate(o.vertices, n, e.position), u.rotate(o.axes, n), s.update(o.bounds, o.vertices, e.velocity), r > 0 && i.rotateAbout(o.position, n, e.position, o.position)
                            }
                        }, r.setVelocity = function(e, t) {
                            e.positionPrev.x = e.position.x - t.x, e.positionPrev.y = e.position.y - t.y, e.velocity.x = t.x, e.velocity.y = t.y, e.speed = i.magnitude(e.velocity)
                        }, r.setAngularVelocity = function(e, t) {
                            e.anglePrev = e.angle - t, e.angularVelocity = t, e.angularSpeed = Math.abs(e.angularVelocity)
                        }, r.translate = function(e, t) {
                            r.setPosition(e, i.add(e.position, t))
                        }, r.rotate = function(e, t, n) {
                            if (n) {
                                var a = Math.cos(t),
                                    i = Math.sin(t),
                                    o = e.position.x - n.x,
                                    l = e.position.y - n.y;
                                r.setPosition(e, {
                                    x: n.x + (o * a - l * i),
                                    y: n.y + (o * i + l * a)
                                }), r.setAngle(e, e.angle + t)
                            } else r.setAngle(e, e.angle + t)
                        }, r.scale = function(e, t, n, i) {
                            var o = 0,
                                l = 0;
                            i = i || e.position;
                            for (var c = 0; c < e.parts.length; c++) {
                                var d = e.parts[c];
                                a.scale(d.vertices, t, n, i), d.axes = u.fromVertices(d.vertices), d.area = a.area(d.vertices), r.setMass(d, e.density * d.area), a.translate(d.vertices, {
                                    x: -d.position.x,
                                    y: -d.position.y
                                }), r.setInertia(d, r._inertiaScale * a.inertia(d.vertices, d.mass)), a.translate(d.vertices, {
                                    x: d.position.x,
                                    y: d.position.y
                                }), c > 0 && (o += d.area, l += d.inertia), d.position.x = i.x + (d.position.x - i.x) * t, d.position.y = i.y + (d.position.y - i.y) * n, s.update(d.bounds, d.vertices, e.velocity)
                            }
                            e.parts.length > 1 && (e.area = o, e.isStatic || (r.setMass(e, e.density * o), r.setInertia(e, l))), e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
                        }, r.update = function(e, t, n, r) {
                            var o = Math.pow(t * n * e.timeScale, 2),
                                l = 1 - e.frictionAir * n * e.timeScale,
                                c = e.position.x - e.positionPrev.x,
                                d = e.position.y - e.positionPrev.y;
                            e.velocity.x = c * l * r + e.force.x / e.mass * o, e.velocity.y = d * l * r + e.force.y / e.mass * o, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * l * r + e.torque / e.inertia * o, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = i.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity);
                            for (var f = 0; f < e.parts.length; f++) {
                                var C = e.parts[f];
                                a.translate(C.vertices, e.velocity), f > 0 && (C.position.x += e.velocity.x, C.position.y += e.velocity.y), 0 !== e.angularVelocity && (a.rotate(C.vertices, e.angularVelocity, e.position), u.rotate(C.axes, e.angularVelocity), f > 0 && i.rotateAbout(C.position, e.angularVelocity, e.position, C.position)), s.update(C.bounds, C.vertices, e.velocity)
                            }
                        }, r.applyForce = function(e, t, n) {
                            e.force.x += n.x, e.force.y += n.y;
                            var r = t.x - e.position.x,
                                a = t.y - e.position.y;
                            e.torque += r * n.y - a * n.x
                        }, r._totalProperties = function(e) {
                            for (var t = {
                                    mass: 0,
                                    area: 0,
                                    inertia: 0,
                                    centre: {
                                        x: 0,
                                        y: 0
                                    }
                                }, n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                                var r = e.parts[n],
                                    a = r.mass !== 1 / 0 ? r.mass : 1;
                                t.mass += a, t.area += r.area, t.inertia += r.inertia, t.centre = i.add(t.centre, i.mult(r.position, a))
                            }
                            return t.centre = i.div(t.centre, t.mass), t
                        }
                    }()
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(4);
                    r._motionWakeThreshold = .18, r._motionSleepThreshold = .08, r._minBias = .9, r.update = function(e, t) {
                        for (var n = t * t * t, a = 0; a < e.length; a++) {
                            var i = e[a],
                                o = i.speed * i.speed + i.angularSpeed * i.angularSpeed;
                            if (0 === i.force.x && 0 === i.force.y) {
                                var l = Math.min(i.motion, o),
                                    s = Math.max(i.motion, o);
                                i.motion = r._minBias * l + (1 - r._minBias) * s, i.sleepThreshold > 0 && i.motion < r._motionSleepThreshold * n ? (i.sleepCounter += 1, i.sleepCounter >= i.sleepThreshold && r.set(i, !0)) : i.sleepCounter > 0 && (i.sleepCounter -= 1)
                            } else r.set(i, !1)
                        }
                    }, r.afterCollisions = function(e, t) {
                        for (var n = t * t * t, a = 0; a < e.length; a++) {
                            var i = e[a];
                            if (i.isActive) {
                                var o = i.collision,
                                    l = o.bodyA.parent,
                                    s = o.bodyB.parent;
                                if (!(l.isSleeping && s.isSleeping || l.isStatic || s.isStatic) && (l.isSleeping || s.isSleeping)) {
                                    var u = l.isSleeping && !l.isStatic ? l : s,
                                        c = u === l ? s : l;
                                    !u.isStatic && c.motion > r._motionWakeThreshold * n && r.set(u, !1)
                                }
                            }
                        }
                    }, r.set = function(e, t) {
                        var n = e.isSleeping;
                        t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0, n || a.trigger(e, "sleepStart")) : (e.isSleeping = !1, e.sleepCounter = 0, n && a.trigger(e, "sleepEnd"))
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(9);
                    ! function() {
                        var e = [],
                            t = {
                                overlap: 0,
                                axis: null
                            },
                            n = {
                                overlap: 0,
                                axis: null
                            };
                        r.create = function(e, t) {
                            return {
                                pair: null,
                                collided: !1,
                                bodyA: e,
                                bodyB: t,
                                parentA: e.parent,
                                parentB: t.parent,
                                depth: 0,
                                normal: {
                                    x: 0,
                                    y: 0
                                },
                                tangent: {
                                    x: 0,
                                    y: 0
                                },
                                penetration: {
                                    x: 0,
                                    y: 0
                                },
                                supports: []
                            }
                        }, r.collides = function(e, o, l) {
                            if (r._overlapAxes(t, e.vertices, o.vertices, e.axes), t.overlap <= 0) return null;
                            if (r._overlapAxes(n, o.vertices, e.vertices, o.axes), n.overlap <= 0) return null;
                            var s, u, c = l && l.table[i.id(e, o)];
                            c ? s = c.collision : ((s = r.create(e, o)).collided = !0, s.bodyA = e.id < o.id ? e : o, s.bodyB = e.id < o.id ? o : e, s.parentA = s.bodyA.parent, s.parentB = s.bodyB.parent), e = s.bodyA, o = s.bodyB, u = t.overlap < n.overlap ? t : n;
                            var d = s.normal,
                                f = s.supports,
                                C = u.axis,
                                p = C.x,
                                m = C.y;
                            p * (o.position.x - e.position.x) + m * (o.position.y - e.position.y) < 0 ? (d.x = p, d.y = m) : (d.x = -p, d.y = -m), s.tangent.x = -d.y, s.tangent.y = d.x, s.depth = u.overlap, s.penetration.x = d.x * s.depth, s.penetration.y = d.y * s.depth;
                            var h = r._findSupports(e, o, d, 1),
                                v = 0;
                            if (a.contains(e.vertices, h[0]) && (f[v++] = h[0]), a.contains(e.vertices, h[1]) && (f[v++] = h[1]), v < 2) {
                                var y = r._findSupports(o, e, d, -1);
                                a.contains(o.vertices, y[0]) && (f[v++] = y[0]), v < 2 && a.contains(o.vertices, y[1]) && (f[v++] = y[1])
                            }
                            return 0 === v && (f[v++] = h[0]), f.length = v, s
                        }, r._overlapAxes = function(e, t, n, r) {
                            var a, i, o, l, s, u, c = t.length,
                                d = n.length,
                                f = t[0].x,
                                C = t[0].y,
                                p = n[0].x,
                                m = n[0].y,
                                h = r.length,
                                v = Number.MAX_VALUE,
                                y = 0;
                            for (s = 0; s < h; s++) {
                                var g = r[s],
                                    b = g.x,
                                    x = g.y,
                                    w = f * b + C * x,
                                    S = p * b + m * x,
                                    M = w,
                                    k = S;
                                for (u = 1; u < c; u += 1)(l = t[u].x * b + t[u].y * x) > M ? M = l : l < w && (w = l);
                                for (u = 1; u < d; u += 1)(l = n[u].x * b + n[u].y * x) > k ? k = l : l < S && (S = l);
                                if ((a = (i = M - S) < (o = k - w) ? i : o) < v && (v = a, y = s, a <= 0)) break
                            }
                            e.axis = r[y], e.overlap = v
                        }, r._projectToAxis = function(e, t, n) {
                            for (var r = t[0].x * n.x + t[0].y * n.y, a = r, i = 1; i < t.length; i += 1) {
                                var o = t[i].x * n.x + t[i].y * n.y;
                                o > a ? a = o : o < r && (r = o)
                            }
                            e.min = r, e.max = a
                        }, r._findSupports = function(t, n, r, a) {
                            var i, o, l, s, u, c = n.vertices,
                                d = c.length,
                                f = t.position.x,
                                C = t.position.y,
                                p = r.x * a,
                                m = r.y * a,
                                h = Number.MAX_VALUE;
                            for (u = 0; u < d; u += 1)(s = p * (f - (o = c[u]).x) + m * (C - o.y)) < h && (h = s, i = o);
                            return h = p * (f - (l = c[(d + i.index - 1) % d]).x) + m * (C - l.y), p * (f - (o = c[(i.index + 1) % d]).x) + m * (C - o.y) < h ? (e[0] = i, e[1] = o, e) : (e[0] = i, e[1] = l, e)
                        }
                    }()
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(17);
                    r.create = function(e, t) {
                        var n = e.bodyA,
                            a = e.bodyB,
                            i = {
                                id: r.id(n, a),
                                bodyA: n,
                                bodyB: a,
                                collision: e,
                                contacts: [],
                                activeContacts: [],
                                separation: 0,
                                isActive: !0,
                                confirmedActive: !0,
                                isSensor: n.isSensor || a.isSensor,
                                timeCreated: t,
                                timeUpdated: t,
                                inverseMass: 0,
                                friction: 0,
                                frictionStatic: 0,
                                restitution: 0,
                                slop: 0
                            };
                        return r.update(i, e, t), i
                    }, r.update = function(e, t, n) {
                        var r = e.contacts,
                            i = t.supports,
                            o = e.activeContacts,
                            l = t.parentA,
                            s = t.parentB,
                            u = l.vertices.length;
                        e.isActive = !0, e.timeUpdated = n, e.collision = t, e.separation = t.depth, e.inverseMass = l.inverseMass + s.inverseMass, e.friction = l.friction < s.friction ? l.friction : s.friction, e.frictionStatic = l.frictionStatic > s.frictionStatic ? l.frictionStatic : s.frictionStatic, e.restitution = l.restitution > s.restitution ? l.restitution : s.restitution, e.slop = l.slop > s.slop ? l.slop : s.slop, t.pair = e, o.length = 0;
                        for (var c = 0; c < i.length; c++) {
                            var d = i[c],
                                f = d.body === l ? d.index : u + d.index,
                                C = r[f];
                            C ? o.push(C) : o.push(r[f] = a.create(d))
                        }
                    }, r.setActive = function(e, t, n) {
                        t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
                    }, r.id = function(e, t) {
                        return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(2),
                        o = n(7),
                        l = n(1),
                        s = n(11),
                        u = n(0);
                    r._warming = .4, r._torqueDampen = 1, r._minLength = 1e-6, r.create = function(e) {
                        var t = e;
                        t.bodyA && !t.pointA && (t.pointA = {
                            x: 0,
                            y: 0
                        }), t.bodyB && !t.pointB && (t.pointB = {
                            x: 0,
                            y: 0
                        });
                        var n = t.bodyA ? i.add(t.bodyA.position, t.pointA) : t.pointA,
                            r = t.bodyB ? i.add(t.bodyB.position, t.pointB) : t.pointB,
                            a = i.magnitude(i.sub(n, r));
                        t.length = "undefined" !== typeof t.length ? t.length : a, t.id = t.id || u.nextId(), t.label = t.label || "Constraint", t.type = "constraint", t.stiffness = t.stiffness || (t.length > 0 ? 1 : .7), t.damping = t.damping || 0, t.angularStiffness = t.angularStiffness || 0, t.angleA = t.bodyA ? t.bodyA.angle : t.angleA, t.angleB = t.bodyB ? t.bodyB.angle : t.angleB, t.plugin = {};
                        var o = {
                            visible: !0,
                            lineWidth: 2,
                            strokeStyle: "#ffffff",
                            type: "line",
                            anchors: !0
                        };
                        return 0 === t.length && t.stiffness > .1 ? (o.type = "pin", o.anchors = !1) : t.stiffness < .9 && (o.type = "spring"), t.render = u.extend(o, t.render), t
                    }, r.preSolveAll = function(e) {
                        for (var t = 0; t < e.length; t += 1) {
                            var n = e[t],
                                r = n.constraintImpulse;
                            n.isStatic || 0 === r.x && 0 === r.y && 0 === r.angle || (n.position.x += r.x, n.position.y += r.y, n.angle += r.angle)
                        }
                    }, r.solveAll = function(e, t) {
                        for (var n = 0; n < e.length; n += 1) {
                            var a = e[n],
                                i = !a.bodyA || a.bodyA && a.bodyA.isStatic,
                                o = !a.bodyB || a.bodyB && a.bodyB.isStatic;
                            (i || o) && r.solve(e[n], t)
                        }
                        for (n = 0; n < e.length; n += 1) i = !(a = e[n]).bodyA || a.bodyA && a.bodyA.isStatic, o = !a.bodyB || a.bodyB && a.bodyB.isStatic, i || o || r.solve(e[n], t)
                    }, r.solve = function(e, t) {
                        var n = e.bodyA,
                            a = e.bodyB,
                            o = e.pointA,
                            l = e.pointB;
                        if (n || a) {
                            n && !n.isStatic && (i.rotate(o, n.angle - e.angleA, o), e.angleA = n.angle), a && !a.isStatic && (i.rotate(l, a.angle - e.angleB, l), e.angleB = a.angle);
                            var s = o,
                                u = l;
                            if (n && (s = i.add(n.position, o)), a && (u = i.add(a.position, l)), s && u) {
                                var c = i.sub(s, u),
                                    d = i.magnitude(c);
                                d < r._minLength && (d = r._minLength);
                                var f, C, p, m, h, v = (d - e.length) / d,
                                    y = e.stiffness < 1 ? e.stiffness * t : e.stiffness,
                                    g = i.mult(c, v * y),
                                    b = (n ? n.inverseMass : 0) + (a ? a.inverseMass : 0),
                                    x = b + ((n ? n.inverseInertia : 0) + (a ? a.inverseInertia : 0));
                                if (e.damping) {
                                    var w = i.create();
                                    p = i.div(c, d), h = i.sub(a && i.sub(a.position, a.positionPrev) || w, n && i.sub(n.position, n.positionPrev) || w), m = i.dot(p, h)
                                }
                                n && !n.isStatic && (C = n.inverseMass / b, n.constraintImpulse.x -= g.x * C, n.constraintImpulse.y -= g.y * C, n.position.x -= g.x * C, n.position.y -= g.y * C, e.damping && (n.positionPrev.x -= e.damping * p.x * m * C, n.positionPrev.y -= e.damping * p.y * m * C), f = i.cross(o, g) / x * r._torqueDampen * n.inverseInertia * (1 - e.angularStiffness), n.constraintImpulse.angle -= f, n.angle -= f), a && !a.isStatic && (C = a.inverseMass / b, a.constraintImpulse.x += g.x * C, a.constraintImpulse.y += g.y * C, a.position.x += g.x * C, a.position.y += g.y * C, e.damping && (a.positionPrev.x += e.damping * p.x * m * C, a.positionPrev.y += e.damping * p.y * m * C), f = i.cross(l, g) / x * r._torqueDampen * a.inverseInertia * (1 - e.angularStiffness), a.constraintImpulse.angle += f, a.angle += f)
                            }
                        }
                    }, r.postSolveAll = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t],
                                u = n.constraintImpulse;
                            if (!(n.isStatic || 0 === u.x && 0 === u.y && 0 === u.angle)) {
                                o.set(n, !1);
                                for (var c = 0; c < n.parts.length; c++) {
                                    var d = n.parts[c];
                                    a.translate(d.vertices, u), c > 0 && (d.position.x += u.x, d.position.y += u.y), 0 !== u.angle && (a.rotate(d.vertices, u.angle, n.position), s.rotate(d.axes, u.angle), c > 0 && i.rotateAbout(d.position, u.angle, n.position, d.position)), l.update(d.bounds, d.vertices, n.velocity)
                                }
                                u.angle *= r._warming, u.x *= r._warming, u.y *= r._warming
                            }
                        }
                    }, r.pointAWorld = function(e) {
                        return {
                            x: (e.bodyA ? e.bodyA.position.x : 0) + e.pointA.x,
                            y: (e.bodyA ? e.bodyA.position.y : 0) + e.pointA.y
                        }
                    }, r.pointBWorld = function(e) {
                        return {
                            x: (e.bodyB ? e.bodyB.position.x : 0) + e.pointB.x,
                            y: (e.bodyB ? e.bodyB.position.y : 0) + e.pointB.y
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(2),
                        i = n(0);
                    r.fromVertices = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) {
                            var r = (n + 1) % e.length,
                                o = a.normalise({
                                    x: e[r].y - e[n].y,
                                    y: e[n].x - e[r].x
                                }),
                                l = 0 === o.y ? 1 / 0 : o.x / o.y;
                            t[l = l.toFixed(3).toString()] = o
                        }
                        return i.values(t)
                    }, r.rotate = function(e, t) {
                        if (0 !== t)
                            for (var n = Math.cos(t), r = Math.sin(t), a = 0; a < e.length; a++) {
                                var i, o = e[a];
                                i = o.x * n - o.y * r, o.y = o.x * r + o.y * n, o.x = i
                            }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(0),
                        o = n(6),
                        l = n(1),
                        s = n(2);
                    r.rectangle = function(e, t, n, r, l) {
                        l = l || {};
                        var s = {
                            label: "Rectangle Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath("L 0 0 L " + n + " 0 L " + n + " " + r + " L 0 " + r)
                        };
                        if (l.chamfer) {
                            var u = l.chamfer;
                            s.vertices = a.chamfer(s.vertices, u.radius, u.quality, u.qualityMin, u.qualityMax), delete l.chamfer
                        }
                        return o.create(i.extend({}, s, l))
                    }, r.trapezoid = function(e, t, n, r, l, s) {
                        s = s || {};
                        var u, c = n * (l *= .5),
                            d = c + (1 - 2 * l) * n,
                            f = d + c;
                        u = l < .5 ? "L 0 0 L " + c + " " + -r + " L " + d + " " + -r + " L " + f + " 0" : "L 0 0 L " + d + " " + -r + " L " + f + " 0";
                        var C = {
                            label: "Trapezoid Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath(u)
                        };
                        if (s.chamfer) {
                            var p = s.chamfer;
                            C.vertices = a.chamfer(C.vertices, p.radius, p.quality, p.qualityMin, p.qualityMax), delete s.chamfer
                        }
                        return o.create(i.extend({}, C, s))
                    }, r.circle = function(e, t, n, a, o) {
                        a = a || {};
                        var l = {
                            label: "Circle Body",
                            circleRadius: n
                        };
                        o = o || 25;
                        var s = Math.ceil(Math.max(10, Math.min(o, n)));
                        return s % 2 === 1 && (s += 1), r.polygon(e, t, s, n, i.extend({}, l, a))
                    }, r.polygon = function(e, t, n, l, s) {
                        if (s = s || {}, n < 3) return r.circle(e, t, l, s);
                        for (var u = 2 * Math.PI / n, c = "", d = .5 * u, f = 0; f < n; f += 1) {
                            var C = d + f * u,
                                p = Math.cos(C) * l,
                                m = Math.sin(C) * l;
                            c += "L " + p.toFixed(3) + " " + m.toFixed(3) + " "
                        }
                        var h = {
                            label: "Polygon Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: a.fromPath(c)
                        };
                        if (s.chamfer) {
                            var v = s.chamfer;
                            h.vertices = a.chamfer(h.vertices, v.radius, v.quality, v.qualityMin, v.qualityMax), delete s.chamfer
                        }
                        return o.create(i.extend({}, h, s))
                    }, r.fromVertices = function(e, t, n, r, u, c, d, f) {
                        var C, p, m, h, v, y, g, b, x, w, S = i.getDecomp();
                        for (C = Boolean(S && S.quickDecomp), r = r || {}, m = [], u = "undefined" !== typeof u && u, c = "undefined" !== typeof c ? c : .01, d = "undefined" !== typeof d ? d : 10, f = "undefined" !== typeof f ? f : .01, i.isArray(n[0]) || (n = [n]), x = 0; x < n.length; x += 1)
                            if (v = n[x], !(h = a.isConvex(v)) && !C && i.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."), h || !C) v = h ? a.clockwiseSort(v) : a.hull(v), m.push({
                                position: {
                                    x: e,
                                    y: t
                                },
                                vertices: v
                            });
                            else {
                                var M = v.map((function(e) {
                                    return [e.x, e.y]
                                }));
                                S.makeCCW(M), !1 !== c && S.removeCollinearPoints(M, c), !1 !== f && S.removeDuplicatePoints && S.removeDuplicatePoints(M, f);
                                var k = S.quickDecomp(M);
                                for (y = 0; y < k.length; y++) {
                                    var E = k[y].map((function(e) {
                                        return {
                                            x: e[0],
                                            y: e[1]
                                        }
                                    }));
                                    d > 0 && a.area(E) < d || m.push({
                                        position: a.centre(E),
                                        vertices: E
                                    })
                                }
                            } for (y = 0; y < m.length; y++) m[y] = o.create(i.extend(m[y], r));
                        if (u)
                            for (y = 0; y < m.length; y++) {
                                var L = m[y];
                                for (g = y + 1; g < m.length; g++) {
                                    var _ = m[g];
                                    if (l.overlaps(L.bounds, _.bounds)) {
                                        var P = L.vertices,
                                            B = _.vertices;
                                        for (b = 0; b < L.vertices.length; b++)
                                            for (w = 0; w < _.vertices.length; w++) {
                                                var Z = s.magnitudeSquared(s.sub(P[(b + 1) % P.length], B[w])),
                                                    V = s.magnitudeSquared(s.sub(P[b], B[(w + 1) % B.length]));
                                                Z < 5 && V < 5 && (P[b].isInternal = !0, B[w].isInternal = !0)
                                            }
                                    }
                                }
                            }
                        return m.length > 1 ? (p = o.create(i.extend({
                            parts: m.slice(0)
                        }, r)), o.setPosition(p, {
                            x: e,
                            y: t
                        }), p) : m[0]
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(0);
                    r.create = function(e) {
                        var t = {};
                        return e || a.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), t.element = e || document.body, t.absolute = {
                            x: 0,
                            y: 0
                        }, t.position = {
                            x: 0,
                            y: 0
                        }, t.mousedownPosition = {
                            x: 0,
                            y: 0
                        }, t.mouseupPosition = {
                            x: 0,
                            y: 0
                        }, t.offset = {
                            x: 0,
                            y: 0
                        }, t.scale = {
                            x: 1,
                            y: 1
                        }, t.wheelDelta = 0, t.button = -1, t.pixelRatio = parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1, t.sourceEvents = {
                            mousemove: null,
                            mousedown: null,
                            mouseup: null,
                            mousewheel: null
                        }, t.mousemove = function(e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && (t.button = 0, e.preventDefault()), t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.sourceEvents.mousemove = e
                        }, t.mousedown = function(e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches ? (t.button = 0, e.preventDefault()) : t.button = e.button, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mousedownPosition.x = t.position.x, t.mousedownPosition.y = t.position.y, t.sourceEvents.mousedown = e
                        }, t.mouseup = function(e) {
                            var n = r._getRelativeMousePosition(e, t.element, t.pixelRatio);
                            e.changedTouches && e.preventDefault(), t.button = -1, t.absolute.x = n.x, t.absolute.y = n.y, t.position.x = t.absolute.x * t.scale.x + t.offset.x, t.position.y = t.absolute.y * t.scale.y + t.offset.y, t.mouseupPosition.x = t.position.x, t.mouseupPosition.y = t.position.y, t.sourceEvents.mouseup = e
                        }, t.mousewheel = function(e) {
                            t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
                        }, r.setElement(t, t.element), t
                    }, r.setElement = function(e, t) {
                        e.element = t, t.addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
                    }, r.clearSourceEvents = function(e) {
                        e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
                    }, r.setOffset = function(e, t) {
                        e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }, r.setScale = function(e, t) {
                        e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                    }, r._getRelativeMousePosition = function(e, t, n) {
                        var r, a, i = t.getBoundingClientRect(),
                            o = document.documentElement || document.body.parentNode || document.body,
                            l = void 0 !== window.pageXOffset ? window.pageXOffset : o.scrollLeft,
                            s = void 0 !== window.pageYOffset ? window.pageYOffset : o.scrollTop,
                            u = e.changedTouches;
                        return u ? (r = u[0].pageX - i.left - l, a = u[0].pageY - i.top - s) : (r = e.pageX - i.left - l, a = e.pageY - i.top - s), {
                            x: r / (t.clientWidth / (t.width || t.clientWidth) * n),
                            y: a / (t.clientHeight / (t.height || t.clientHeight) * n)
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(0),
                        i = n(8);
                    r.create = function(e) {
                        return a.extend({
                            bodies: [],
                            pairs: null
                        }, e)
                    }, r.setBodies = function(e, t) {
                        e.bodies = t.slice(0)
                    }, r.clear = function(e) {
                        e.bodies = []
                    }, r.collisions = function(e) {
                        var t, n, a = [],
                            o = e.pairs,
                            l = e.bodies,
                            s = l.length,
                            u = r.canCollide,
                            c = i.collides;
                        for (l.sort(r._compareBoundsX), t = 0; t < s; t++) {
                            var d = l[t],
                                f = d.bounds,
                                C = d.bounds.max.x,
                                p = d.bounds.max.y,
                                m = d.bounds.min.y,
                                h = d.isStatic || d.isSleeping,
                                v = d.parts.length,
                                y = 1 === v;
                            for (n = t + 1; n < s; n++) {
                                var g = l[n];
                                if ((L = g.bounds).min.x > C) break;
                                if (!(p < L.min.y || m > L.max.y) && (!h || !g.isStatic && !g.isSleeping) && u(d.collisionFilter, g.collisionFilter)) {
                                    var b = g.parts.length;
                                    if (y && 1 === b)(k = c(d, g, o)) && a.push(k);
                                    else
                                        for (var x = b > 1 ? 1 : 0, w = v > 1 ? 1 : 0; w < v; w++)
                                            for (var S = d.parts[w], M = (f = S.bounds, x); M < b; M++) {
                                                var k, E = g.parts[M],
                                                    L = E.bounds;
                                                f.min.x > L.max.x || f.max.x < L.min.x || f.max.y < L.min.y || f.min.y > L.max.y || (k = c(S, E, o)) && a.push(k)
                                            }
                                }
                            }
                        }
                        return a
                    }, r.canCollide = function(e, t) {
                        return e.group === t.group && 0 !== e.group ? e.group > 0 : 0 !== (e.mask & t.category) && 0 !== (t.mask & e.category)
                    }, r._compareBoundsX = function(e, t) {
                        return e.bounds.min.x - t.bounds.min.x
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(0);
                    r._registry = {}, r.register = function(e) {
                        if (r.isPlugin(e) || a.warn("Plugin.register:", r.toString(e), "does not implement all required fields."), e.name in r._registry) {
                            var t = r._registry[e.name],
                                n = r.versionParse(e.version).number,
                                i = r.versionParse(t.version).number;
                            n > i ? (a.warn("Plugin.register:", r.toString(t), "was upgraded to", r.toString(e)), r._registry[e.name] = e) : n < i ? a.warn("Plugin.register:", r.toString(t), "can not be downgraded to", r.toString(e)) : e !== t && a.warn("Plugin.register:", r.toString(e), "is already registered to different plugin object")
                        } else r._registry[e.name] = e;
                        return e
                    }, r.resolve = function(e) {
                        return r._registry[r.dependencyParse(e).name]
                    }, r.toString = function(e) {
                        return "string" === typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                    }, r.isPlugin = function(e) {
                        return e && e.name && e.version && e.install
                    }, r.isUsed = function(e, t) {
                        return e.used.indexOf(t) > -1
                    }, r.isFor = function(e, t) {
                        var n = e.for && r.dependencyParse(e.for);
                        return !e.for || t.name === n.name && r.versionSatisfies(t.version, n.range)
                    }, r.use = function(e, t) {
                        if (e.uses = (e.uses || []).concat(t || []), 0 !== e.uses.length) {
                            for (var n = r.dependencies(e), i = a.topologicalSort(n), o = [], l = 0; l < i.length; l += 1)
                                if (i[l] !== e.name) {
                                    var s = r.resolve(i[l]);
                                    s ? r.isUsed(e, s.name) || (r.isFor(s, e) || (a.warn("Plugin.use:", r.toString(s), "is for", s.for, "but installed on", r.toString(e) + "."), s._warned = !0), s.install ? s.install(e) : (a.warn("Plugin.use:", r.toString(s), "does not specify an install function."), s._warned = !0), s._warned ? (o.push("\ud83d\udd36 " + r.toString(s)), delete s._warned) : o.push("\u2705 " + r.toString(s)), e.used.push(s.name)) : o.push("\u274c " + i[l])
                                } o.length > 0 && a.info(o.join("  "))
                        } else a.warn("Plugin.use:", r.toString(e), "does not specify any dependencies to install.")
                    }, r.dependencies = function(e, t) {
                        var n = r.dependencyParse(e),
                            i = n.name;
                        if (!(i in (t = t || {}))) {
                            e = r.resolve(e) || e, t[i] = a.map(e.uses || [], (function(t) {
                                r.isPlugin(t) && r.register(t);
                                var i = r.dependencyParse(t),
                                    o = r.resolve(t);
                                return o && !r.versionSatisfies(o.version, i.range) ? (a.warn("Plugin.dependencies:", r.toString(o), "does not satisfy", r.toString(i), "used by", r.toString(n) + "."), o._warned = !0, e._warned = !0) : o || (a.warn("Plugin.dependencies:", r.toString(t), "used by", r.toString(n), "could not be resolved."), e._warned = !0), i.name
                            }));
                            for (var o = 0; o < t[i].length; o += 1) r.dependencies(t[i][o], t);
                            return t
                        }
                    }, r.dependencyParse = function(e) {
                        return a.isString(e) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e) || a.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."), {
                            name: e.split("@")[0],
                            range: e.split("@")[1] || "*"
                        }) : {
                            name: e.name,
                            range: e.range || e.version
                        }
                    }, r.versionParse = function(e) {
                        var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                        t.test(e) || a.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                        var n = t.exec(e),
                            r = Number(n[4]),
                            i = Number(n[5]),
                            o = Number(n[6]);
                        return {
                            isRange: Boolean(n[1] || n[2]),
                            version: n[3],
                            range: e,
                            operator: n[1] || n[2] || "",
                            major: r,
                            minor: i,
                            patch: o,
                            parts: [r, i, o],
                            prerelease: n[7],
                            number: 1e8 * r + 1e4 * i + o
                        }
                    }, r.versionSatisfies = function(e, t) {
                        t = t || "*";
                        var n = r.versionParse(t),
                            a = r.versionParse(e);
                        if (n.isRange) {
                            if ("*" === n.operator || "*" === e) return !0;
                            if (">" === n.operator) return a.number > n.number;
                            if (">=" === n.operator) return a.number >= n.number;
                            if ("~" === n.operator) return a.major === n.major && a.minor === n.minor && a.patch >= n.patch;
                            if ("^" === n.operator) return n.major > 0 ? a.major === n.major && a.number >= n.number : n.minor > 0 ? a.minor === n.minor && a.patch >= n.patch : a.patch === n.patch
                        }
                        return e === t || "*" === e
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(0),
                        i = n(5),
                        o = n(1),
                        l = n(4),
                        s = n(2),
                        u = n(13);
                    ! function() {
                        var e, t;
                        "undefined" !== typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                            window.setTimeout((function() {
                                e(a.now())
                            }), 1e3 / 60)
                        }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), r._goodFps = 30, r._goodDelta = 1e3 / 60, r.create = function(e) {
                            var t = {
                                    controller: r,
                                    engine: null,
                                    element: null,
                                    canvas: null,
                                    mouse: null,
                                    frameRequestId: null,
                                    timing: {
                                        historySize: 60,
                                        delta: 0,
                                        deltaHistory: [],
                                        lastTime: 0,
                                        lastTimestamp: 0,
                                        lastElapsed: 0,
                                        timestampElapsed: 0,
                                        timestampElapsedHistory: [],
                                        engineDeltaHistory: [],
                                        engineElapsedHistory: [],
                                        elapsedHistory: []
                                    },
                                    options: {
                                        width: 800,
                                        height: 600,
                                        pixelRatio: 1,
                                        background: "#14151f",
                                        wireframeBackground: "#14151f",
                                        hasBounds: !!e.bounds,
                                        enabled: !0,
                                        wireframes: !0,
                                        showSleeping: !0,
                                        showDebug: !1,
                                        showStats: !1,
                                        showPerformance: !1,
                                        showBounds: !1,
                                        showVelocity: !1,
                                        showCollisions: !1,
                                        showSeparations: !1,
                                        showAxes: !1,
                                        showPositions: !1,
                                        showAngleIndicator: !1,
                                        showIds: !1,
                                        showVertexNumbers: !1,
                                        showConvexHulls: !1,
                                        showInternalEdges: !1,
                                        showMousePosition: !1
                                    }
                                },
                                n = a.extend(t, e);
                            return n.canvas && (n.canvas.width = n.options.width || n.canvas.width, n.canvas.height = n.options.height || n.canvas.height), n.mouse = e.mouse, n.engine = e.engine, n.canvas = n.canvas || d(n.options.width, n.options.height), n.context = n.canvas.getContext("2d"), n.textures = {}, n.bounds = n.bounds || {
                                min: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: n.canvas.width,
                                    y: n.canvas.height
                                }
                            }, n.options.showBroadphase = !1, 1 !== n.options.pixelRatio && r.setPixelRatio(n, n.options.pixelRatio), a.isElement(n.element) ? n.element.appendChild(n.canvas) : n.canvas.parentNode || a.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), n
                        }, r.run = function(t) {
                            ! function a(i) {
                                t.frameRequestId = e(a), n(t, i), r.world(t, i), (t.options.showStats || t.options.showDebug) && r.stats(t, t.context, i), (t.options.showPerformance || t.options.showDebug) && r.performance(t, t.context, i)
                            }()
                        }, r.stop = function(e) {
                            t(e.frameRequestId)
                        }, r.setPixelRatio = function(e, t) {
                            var n = e.options,
                                r = e.canvas;
                            "auto" === t && (t = f(r)), n.pixelRatio = t, r.setAttribute("data-pixel-ratio", t), r.width = n.width * t, r.height = n.height * t, r.style.width = n.width + "px", r.style.height = n.height + "px"
                        }, r.lookAt = function(e, t, n, r) {
                            r = "undefined" === typeof r || r, t = a.isArray(t) ? t : [t], n = n || {
                                x: 0,
                                y: 0
                            };
                            for (var i = {
                                    min: {
                                        x: 1 / 0,
                                        y: 1 / 0
                                    },
                                    max: {
                                        x: -1 / 0,
                                        y: -1 / 0
                                    }
                                }, o = 0; o < t.length; o += 1) {
                                var l = t[o],
                                    s = l.bounds ? l.bounds.min : l.min || l.position || l,
                                    c = l.bounds ? l.bounds.max : l.max || l.position || l;
                                s && c && (s.x < i.min.x && (i.min.x = s.x), c.x > i.max.x && (i.max.x = c.x), s.y < i.min.y && (i.min.y = s.y), c.y > i.max.y && (i.max.y = c.y))
                            }
                            var d = i.max.x - i.min.x + 2 * n.x,
                                f = i.max.y - i.min.y + 2 * n.y,
                                C = e.canvas.height,
                                p = e.canvas.width / C,
                                m = d / f,
                                h = 1,
                                v = 1;
                            m > p ? v = m / p : h = p / m, e.options.hasBounds = !0, e.bounds.min.x = i.min.x, e.bounds.max.x = i.min.x + d * h, e.bounds.min.y = i.min.y, e.bounds.max.y = i.min.y + f * v, r && (e.bounds.min.x += .5 * d - d * h * .5, e.bounds.max.x += .5 * d - d * h * .5, e.bounds.min.y += .5 * f - f * v * .5, e.bounds.max.y += .5 * f - f * v * .5), e.bounds.min.x -= n.x, e.bounds.max.x -= n.x, e.bounds.min.y -= n.y, e.bounds.max.y -= n.y, e.mouse && (u.setScale(e.mouse, {
                                x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                            }), u.setOffset(e.mouse, e.bounds.min))
                        }, r.startViewTransform = function(e) {
                            var t = e.bounds.max.x - e.bounds.min.x,
                                n = e.bounds.max.y - e.bounds.min.y,
                                r = t / e.options.width,
                                a = n / e.options.height;
                            e.context.setTransform(e.options.pixelRatio / r, 0, 0, e.options.pixelRatio / a, 0, 0), e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                        }, r.endViewTransform = function(e) {
                            e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                        }, r.world = function(e, t) {
                            var n, c = a.now(),
                                d = e.engine,
                                f = d.world,
                                C = e.canvas,
                                m = e.context,
                                h = e.options,
                                v = e.timing,
                                y = i.allBodies(f),
                                g = i.allConstraints(f),
                                b = h.wireframes ? h.wireframeBackground : h.background,
                                x = [],
                                w = [],
                                S = {
                                    timestamp: d.timing.timestamp
                                };
                            if (l.trigger(e, "beforeRender", S), e.currentBackground !== b && p(e, b), m.globalCompositeOperation = "source-in", m.fillStyle = "transparent", m.fillRect(0, 0, C.width, C.height), m.globalCompositeOperation = "source-over", h.hasBounds) {
                                for (n = 0; n < y.length; n++) {
                                    var M = y[n];
                                    o.overlaps(M.bounds, e.bounds) && x.push(M)
                                }
                                for (n = 0; n < g.length; n++) {
                                    var k = g[n],
                                        E = k.bodyA,
                                        L = k.bodyB,
                                        _ = k.pointA,
                                        P = k.pointB;
                                    E && (_ = s.add(E.position, k.pointA)), L && (P = s.add(L.position, k.pointB)), _ && P && (o.contains(e.bounds, _) || o.contains(e.bounds, P)) && w.push(k)
                                }
                                r.startViewTransform(e), e.mouse && (u.setScale(e.mouse, {
                                    x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                                    y: (e.bounds.max.y - e.bounds.min.y) / e.options.height
                                }), u.setOffset(e.mouse, e.bounds.min))
                            } else w = g, x = y, 1 !== e.options.pixelRatio && e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0);
                            !h.wireframes || d.enableSleeping && h.showSleeping ? r.bodies(e, x, m) : (h.showConvexHulls && r.bodyConvexHulls(e, x, m), r.bodyWireframes(e, x, m)), h.showBounds && r.bodyBounds(e, x, m), (h.showAxes || h.showAngleIndicator) && r.bodyAxes(e, x, m), h.showPositions && r.bodyPositions(e, x, m), h.showVelocity && r.bodyVelocity(e, x, m), h.showIds && r.bodyIds(e, x, m), h.showSeparations && r.separations(e, d.pairs.list, m), h.showCollisions && r.collisions(e, d.pairs.list, m), h.showVertexNumbers && r.vertexNumbers(e, x, m), h.showMousePosition && r.mousePosition(e, e.mouse, m), r.constraints(w, m), h.hasBounds && r.endViewTransform(e), l.trigger(e, "afterRender", S), v.lastElapsed = a.now() - c
                        }, r.stats = function(e, t, n) {
                            for (var r = e.engine, a = r.world, o = i.allBodies(a), l = 0, s = 0, u = 0; u < o.length; u += 1) l += o[u].parts.length;
                            var c = {
                                Part: l,
                                Body: o.length,
                                Cons: i.allConstraints(a).length,
                                Comp: i.allComposites(a).length,
                                Pair: r.pairs.list.length
                            };
                            for (var d in t.fillStyle = "#0e0f19", t.fillRect(s, 0, 302.5, 44), t.font = "12px Arial", t.textBaseline = "top", t.textAlign = "right", c) {
                                var f = c[d];
                                t.fillStyle = "#aaa", t.fillText(d, s + 55, 8), t.fillStyle = "#eee", t.fillText(f, s + 55, 26), s += 55
                            }
                        }, r.performance = function(e, t) {
                            var n = e.engine,
                                a = e.timing,
                                i = a.deltaHistory,
                                o = a.elapsedHistory,
                                l = a.timestampElapsedHistory,
                                s = a.engineDeltaHistory,
                                u = a.engineElapsedHistory,
                                d = n.timing.lastDelta,
                                f = c(i),
                                C = c(o),
                                p = c(s),
                                m = c(u),
                                h = c(l) / f || 0,
                                v = 1e3 / f || 0,
                                y = 60;
                            t.fillStyle = "#0e0f19", t.fillRect(0, 50, 370, 34), r.status(t, 10, 69, y, 4, i.length, Math.round(v) + " fps", v / r._goodFps, (function(e) {
                                return i[e] / f - 1
                            })), r.status(t, 82, 69, y, 4, s.length, d.toFixed(2) + " dt", r._goodDelta / d, (function(e) {
                                return s[e] / p - 1
                            })), r.status(t, 154, 69, y, 4, u.length, m.toFixed(2) + " ut", 1 - m / r._goodFps, (function(e) {
                                return u[e] / m - 1
                            })), r.status(t, 226, 69, y, 4, o.length, C.toFixed(2) + " rt", 1 - C / r._goodFps, (function(e) {
                                return o[e] / C - 1
                            })), r.status(t, 298, 69, y, 4, l.length, h.toFixed(2) + " x", h * h * h, (function(e) {
                                return (l[e] / i[e] / h || 0) - 1
                            }))
                        }, r.status = function(e, t, n, r, i, o, l, s, u) {
                            e.strokeStyle = "#888", e.fillStyle = "#444", e.lineWidth = 1, e.fillRect(t, n + 7, r, 1), e.beginPath(), e.moveTo(t, n + 7 - i * a.clamp(.4 * u(0), -2, 2));
                            for (var c = 0; c < r; c += 1) e.lineTo(t + c, n + 7 - (c < o ? i * a.clamp(.4 * u(c), -2, 2) : 0));
                            e.stroke(), e.fillStyle = "hsl(" + a.clamp(25 + 95 * s, 0, 120) + ",100%,60%)", e.fillRect(t, n - 7, 4, 4), e.font = "12px Arial", e.textBaseline = "middle", e.textAlign = "right", e.fillStyle = "#eee", e.fillText(l, t + r, n - 5)
                        }, r.constraints = function(e, t) {
                            for (var n = t, r = 0; r < e.length; r++) {
                                var i = e[r];
                                if (i.render.visible && i.pointA && i.pointB) {
                                    var o, l, u = i.bodyA,
                                        c = i.bodyB;
                                    if (o = u ? s.add(u.position, i.pointA) : i.pointA, "pin" === i.render.type) n.beginPath(), n.arc(o.x, o.y, 3, 0, 2 * Math.PI), n.closePath();
                                    else {
                                        if (l = c ? s.add(c.position, i.pointB) : i.pointB, n.beginPath(), n.moveTo(o.x, o.y), "spring" === i.render.type)
                                            for (var d, f = s.sub(l, o), C = s.perp(s.normalise(f)), p = Math.ceil(a.clamp(i.length / 5, 12, 20)), m = 1; m < p; m += 1) d = m % 2 === 0 ? 1 : -1, n.lineTo(o.x + f.x * (m / p) + C.x * d * 4, o.y + f.y * (m / p) + C.y * d * 4);
                                        n.lineTo(l.x, l.y)
                                    }
                                    i.render.lineWidth && (n.lineWidth = i.render.lineWidth, n.strokeStyle = i.render.strokeStyle, n.stroke()), i.render.anchors && (n.fillStyle = i.render.strokeStyle, n.beginPath(), n.arc(o.x, o.y, 3, 0, 2 * Math.PI), n.arc(l.x, l.y, 3, 0, 2 * Math.PI), n.closePath(), n.fill())
                                }
                            }
                        }, r.bodies = function(e, t, n) {
                            var r, a, i, o, l = n,
                                s = (e.engine, e.options),
                                u = s.showInternalEdges || !s.wireframes;
                            for (i = 0; i < t.length; i++)
                                if ((r = t[i]).render.visible)
                                    for (o = r.parts.length > 1 ? 1 : 0; o < r.parts.length; o++)
                                        if ((a = r.parts[o]).render.visible) {
                                            if (s.showSleeping && r.isSleeping ? l.globalAlpha = .5 * a.render.opacity : 1 !== a.render.opacity && (l.globalAlpha = a.render.opacity), a.render.sprite && a.render.sprite.texture && !s.wireframes) {
                                                var c = a.render.sprite,
                                                    d = C(e, c.texture);
                                                l.translate(a.position.x, a.position.y), l.rotate(a.angle), l.drawImage(d, d.width * -c.xOffset * c.xScale, d.height * -c.yOffset * c.yScale, d.width * c.xScale, d.height * c.yScale), l.rotate(-a.angle), l.translate(-a.position.x, -a.position.y)
                                            } else {
                                                if (a.circleRadius) l.beginPath(), l.arc(a.position.x, a.position.y, a.circleRadius, 0, 2 * Math.PI);
                                                else {
                                                    l.beginPath(), l.moveTo(a.vertices[0].x, a.vertices[0].y);
                                                    for (var f = 1; f < a.vertices.length; f++) !a.vertices[f - 1].isInternal || u ? l.lineTo(a.vertices[f].x, a.vertices[f].y) : l.moveTo(a.vertices[f].x, a.vertices[f].y), a.vertices[f].isInternal && !u && l.moveTo(a.vertices[(f + 1) % a.vertices.length].x, a.vertices[(f + 1) % a.vertices.length].y);
                                                    l.lineTo(a.vertices[0].x, a.vertices[0].y), l.closePath()
                                                }
                                                s.wireframes ? (l.lineWidth = 1, l.strokeStyle = "#bbb", l.stroke()) : (l.fillStyle = a.render.fillStyle, a.render.lineWidth && (l.lineWidth = a.render.lineWidth, l.strokeStyle = a.render.strokeStyle, l.stroke()), l.fill())
                                            }
                                            l.globalAlpha = 1
                                        }
                        }, r.bodyWireframes = function(e, t, n) {
                            var r, a, i, o, l, s = n,
                                u = e.options.showInternalEdges;
                            for (s.beginPath(), i = 0; i < t.length; i++)
                                if ((r = t[i]).render.visible)
                                    for (l = r.parts.length > 1 ? 1 : 0; l < r.parts.length; l++) {
                                        for (a = r.parts[l], s.moveTo(a.vertices[0].x, a.vertices[0].y), o = 1; o < a.vertices.length; o++) !a.vertices[o - 1].isInternal || u ? s.lineTo(a.vertices[o].x, a.vertices[o].y) : s.moveTo(a.vertices[o].x, a.vertices[o].y), a.vertices[o].isInternal && !u && s.moveTo(a.vertices[(o + 1) % a.vertices.length].x, a.vertices[(o + 1) % a.vertices.length].y);
                                        s.lineTo(a.vertices[0].x, a.vertices[0].y)
                                    }
                            s.lineWidth = 1, s.strokeStyle = "#bbb", s.stroke()
                        }, r.bodyConvexHulls = function(e, t, n) {
                            var r, a, i, o = n;
                            for (o.beginPath(), a = 0; a < t.length; a++)
                                if ((r = t[a]).render.visible && 1 !== r.parts.length) {
                                    for (o.moveTo(r.vertices[0].x, r.vertices[0].y), i = 1; i < r.vertices.length; i++) o.lineTo(r.vertices[i].x, r.vertices[i].y);
                                    o.lineTo(r.vertices[0].x, r.vertices[0].y)
                                } o.lineWidth = 1, o.strokeStyle = "rgba(255,255,255,0.2)", o.stroke()
                        }, r.vertexNumbers = function(e, t, n) {
                            var r, a, i, o = n;
                            for (r = 0; r < t.length; r++) {
                                var l = t[r].parts;
                                for (i = l.length > 1 ? 1 : 0; i < l.length; i++) {
                                    var s = l[i];
                                    for (a = 0; a < s.vertices.length; a++) o.fillStyle = "rgba(255,255,255,0.2)", o.fillText(r + "_" + a, s.position.x + .8 * (s.vertices[a].x - s.position.x), s.position.y + .8 * (s.vertices[a].y - s.position.y))
                                }
                            }
                        }, r.mousePosition = function(e, t, n) {
                            var r = n;
                            r.fillStyle = "rgba(255,255,255,0.8)", r.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                        }, r.bodyBounds = function(e, t, n) {
                            var r = n,
                                a = (e.engine, e.options);
                            r.beginPath();
                            for (var i = 0; i < t.length; i++)
                                if (t[i].render.visible)
                                    for (var o = t[i].parts, l = o.length > 1 ? 1 : 0; l < o.length; l++) {
                                        var s = o[l];
                                        r.rect(s.bounds.min.x, s.bounds.min.y, s.bounds.max.x - s.bounds.min.x, s.bounds.max.y - s.bounds.min.y)
                                    }
                            a.wireframes ? r.strokeStyle = "rgba(255,255,255,0.08)" : r.strokeStyle = "rgba(0,0,0,0.1)", r.lineWidth = 1, r.stroke()
                        }, r.bodyAxes = function(e, t, n) {
                            var r, a, i, o, l = n,
                                s = (e.engine, e.options);
                            for (l.beginPath(), a = 0; a < t.length; a++) {
                                var u = t[a],
                                    c = u.parts;
                                if (u.render.visible)
                                    if (s.showAxes)
                                        for (i = c.length > 1 ? 1 : 0; i < c.length; i++)
                                            for (r = c[i], o = 0; o < r.axes.length; o++) {
                                                var d = r.axes[o];
                                                l.moveTo(r.position.x, r.position.y), l.lineTo(r.position.x + 20 * d.x, r.position.y + 20 * d.y)
                                            } else
                                                for (i = c.length > 1 ? 1 : 0; i < c.length; i++)
                                                    for (r = c[i], o = 0; o < r.axes.length; o++) l.moveTo(r.position.x, r.position.y), l.lineTo((r.vertices[0].x + r.vertices[r.vertices.length - 1].x) / 2, (r.vertices[0].y + r.vertices[r.vertices.length - 1].y) / 2)
                            }
                            s.wireframes ? (l.strokeStyle = "indianred", l.lineWidth = 1) : (l.strokeStyle = "rgba(255, 255, 255, 0.4)", l.globalCompositeOperation = "overlay", l.lineWidth = 2), l.stroke(), l.globalCompositeOperation = "source-over"
                        }, r.bodyPositions = function(e, t, n) {
                            var r, a, i, o, l = n,
                                s = (e.engine, e.options);
                            for (l.beginPath(), i = 0; i < t.length; i++)
                                if ((r = t[i]).render.visible)
                                    for (o = 0; o < r.parts.length; o++) a = r.parts[o], l.arc(a.position.x, a.position.y, 3, 0, 2 * Math.PI, !1), l.closePath();
                            for (s.wireframes ? l.fillStyle = "indianred" : l.fillStyle = "rgba(0,0,0,0.5)", l.fill(), l.beginPath(), i = 0; i < t.length; i++)(r = t[i]).render.visible && (l.arc(r.positionPrev.x, r.positionPrev.y, 2, 0, 2 * Math.PI, !1), l.closePath());
                            l.fillStyle = "rgba(255,165,0,0.8)", l.fill()
                        }, r.bodyVelocity = function(e, t, n) {
                            var r = n;
                            r.beginPath();
                            for (var a = 0; a < t.length; a++) {
                                var i = t[a];
                                i.render.visible && (r.moveTo(i.position.x, i.position.y), r.lineTo(i.position.x + 2 * (i.position.x - i.positionPrev.x), i.position.y + 2 * (i.position.y - i.positionPrev.y)))
                            }
                            r.lineWidth = 3, r.strokeStyle = "cornflowerblue", r.stroke()
                        }, r.bodyIds = function(e, t, n) {
                            var r, a, i = n;
                            for (r = 0; r < t.length; r++)
                                if (t[r].render.visible) {
                                    var o = t[r].parts;
                                    for (a = o.length > 1 ? 1 : 0; a < o.length; a++) {
                                        var l = o[a];
                                        i.font = "12px Arial", i.fillStyle = "rgba(255,255,255,0.5)", i.fillText(l.id, l.position.x + 10, l.position.y - 10)
                                    }
                                }
                        }, r.collisions = function(e, t, n) {
                            var r, a, i, o, l = n,
                                s = e.options;
                            for (l.beginPath(), i = 0; i < t.length; i++)
                                if ((r = t[i]).isActive)
                                    for (a = r.collision, o = 0; o < r.activeContacts.length; o++) {
                                        var u = r.activeContacts[o].vertex;
                                        l.rect(u.x - 1.5, u.y - 1.5, 3.5, 3.5)
                                    }
                            for (s.wireframes ? l.fillStyle = "rgba(255,255,255,0.7)" : l.fillStyle = "orange", l.fill(), l.beginPath(), i = 0; i < t.length; i++)
                                if ((r = t[i]).isActive && (a = r.collision, r.activeContacts.length > 0)) {
                                    var c = r.activeContacts[0].vertex.x,
                                        d = r.activeContacts[0].vertex.y;
                                    2 === r.activeContacts.length && (c = (r.activeContacts[0].vertex.x + r.activeContacts[1].vertex.x) / 2, d = (r.activeContacts[0].vertex.y + r.activeContacts[1].vertex.y) / 2), a.bodyB === a.supports[0].body || !0 === a.bodyA.isStatic ? l.moveTo(c - 8 * a.normal.x, d - 8 * a.normal.y) : l.moveTo(c + 8 * a.normal.x, d + 8 * a.normal.y), l.lineTo(c, d)
                                } s.wireframes ? l.strokeStyle = "rgba(255,165,0,0.7)" : l.strokeStyle = "orange", l.lineWidth = 1, l.stroke()
                        }, r.separations = function(e, t, n) {
                            var r, a, i, o, l, s = n,
                                u = e.options;
                            for (s.beginPath(), l = 0; l < t.length; l++)
                                if ((r = t[l]).isActive) {
                                    i = (a = r.collision).bodyA;
                                    var c = 1;
                                    (o = a.bodyB).isStatic || i.isStatic || (c = .5), o.isStatic && (c = 0), s.moveTo(o.position.x, o.position.y), s.lineTo(o.position.x - a.penetration.x * c, o.position.y - a.penetration.y * c), c = 1, o.isStatic || i.isStatic || (c = .5), i.isStatic && (c = 0), s.moveTo(i.position.x, i.position.y), s.lineTo(i.position.x + a.penetration.x * c, i.position.y + a.penetration.y * c)
                                } u.wireframes ? s.strokeStyle = "rgba(255,165,0,0.5)" : s.strokeStyle = "orange", s.stroke()
                        }, r.inspector = function(e, t) {
                            e.engine;
                            var n, r = e.selected,
                                a = e.render,
                                i = a.options;
                            if (i.hasBounds) {
                                var o = a.bounds.max.x - a.bounds.min.x,
                                    l = a.bounds.max.y - a.bounds.min.y,
                                    s = o / a.options.width,
                                    u = l / a.options.height;
                                t.scale(1 / s, 1 / u), t.translate(-a.bounds.min.x, -a.bounds.min.y)
                            }
                            for (var c = 0; c < r.length; c++) {
                                var d = r[c].data;
                                switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), d.type) {
                                    case "body":
                                        n = d.bounds, t.beginPath(), t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)), t.closePath(), t.stroke();
                                        break;
                                    case "constraint":
                                        var f = d.pointA;
                                        d.bodyA && (f = d.pointB), t.beginPath(), t.arc(f.x, f.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
                                }
                                t.setLineDash([]), t.translate(-.5, -.5)
                            }
                            null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), i.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                        };
                        var n = function(e, t) {
                                var n = e.engine,
                                    a = e.timing,
                                    i = a.historySize,
                                    o = n.timing.timestamp;
                                a.delta = t - a.lastTime || r._goodDelta, a.lastTime = t, a.timestampElapsed = o - a.lastTimestamp || 0, a.lastTimestamp = o, a.deltaHistory.unshift(a.delta), a.deltaHistory.length = Math.min(a.deltaHistory.length, i), a.engineDeltaHistory.unshift(n.timing.lastDelta), a.engineDeltaHistory.length = Math.min(a.engineDeltaHistory.length, i), a.timestampElapsedHistory.unshift(a.timestampElapsed), a.timestampElapsedHistory.length = Math.min(a.timestampElapsedHistory.length, i), a.engineElapsedHistory.unshift(n.timing.lastElapsed), a.engineElapsedHistory.length = Math.min(a.engineElapsedHistory.length, i), a.elapsedHistory.unshift(a.lastElapsed), a.elapsedHistory.length = Math.min(a.elapsedHistory.length, i)
                            },
                            c = function(e) {
                                for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
                                return t / e.length || 0
                            },
                            d = function(e, t) {
                                var n = document.createElement("canvas");
                                return n.width = e, n.height = t, n.oncontextmenu = function() {
                                    return !1
                                }, n.onselectstart = function() {
                                    return !1
                                }, n
                            },
                            f = function(e) {
                                var t = e.getContext("2d");
                                return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                            },
                            C = function(e, t) {
                                var n = e.textures[t];
                                return n || ((n = e.textures[t] = new Image).src = t, n)
                            },
                            p = function(e, t) {
                                var n = t;
                                /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"), e.canvas.style.background = n, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
                            }
                    }()
                }, function(e, t) {
                    var n = {};
                    e.exports = n, n.create = function(e) {
                        return {
                            vertex: e,
                            normalImpulse: 0,
                            tangentImpulse: 0
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(7),
                        i = n(19),
                        o = n(14),
                        l = n(20),
                        s = n(4),
                        u = n(5),
                        c = n(10),
                        d = n(0),
                        f = n(6);
                    r.create = function(e) {
                        e = e || {};
                        var t = d.extend({
                            positionIterations: 6,
                            velocityIterations: 4,
                            constraintIterations: 2,
                            enableSleeping: !1,
                            events: [],
                            plugin: {},
                            gravity: {
                                x: 0,
                                y: 1,
                                scale: .001
                            },
                            timing: {
                                timestamp: 0,
                                timeScale: 1,
                                lastDelta: 0,
                                lastElapsed: 0
                            }
                        }, e);
                        return t.world = e.world || u.create({
                            label: "World"
                        }), t.pairs = e.pairs || l.create(), t.detector = e.detector || o.create(), t.grid = {
                            buckets: []
                        }, t.world.gravity = t.gravity, t.broadphase = t.grid, t.metrics = {}, t
                    }, r.update = function(e, t, n) {
                        var f = d.now();
                        t = t || 1e3 / 60, n = n || 1;
                        var C, p = e.world,
                            m = e.detector,
                            h = e.pairs,
                            v = e.timing,
                            y = v.timestamp;
                        v.timestamp += t * v.timeScale, v.lastDelta = t * v.timeScale;
                        var g = {
                            timestamp: v.timestamp
                        };
                        s.trigger(e, "beforeUpdate", g);
                        var b = u.allBodies(p),
                            x = u.allConstraints(p);
                        for (p.isModified && o.setBodies(m, b), p.isModified && u.setModified(p, !1, !1, !0), e.enableSleeping && a.update(b, v.timeScale), r._bodiesApplyGravity(b, e.gravity), r._bodiesUpdate(b, t, v.timeScale, n, p.bounds), c.preSolveAll(b), C = 0; C < e.constraintIterations; C++) c.solveAll(x, v.timeScale);
                        c.postSolveAll(b), m.pairs = e.pairs;
                        var w = o.collisions(m);
                        for (l.update(h, w, y), e.enableSleeping && a.afterCollisions(h.list, v.timeScale), h.collisionStart.length > 0 && s.trigger(e, "collisionStart", {
                                pairs: h.collisionStart
                            }), i.preSolvePosition(h.list), C = 0; C < e.positionIterations; C++) i.solvePosition(h.list, v.timeScale);
                        for (i.postSolvePosition(b), c.preSolveAll(b), C = 0; C < e.constraintIterations; C++) c.solveAll(x, v.timeScale);
                        for (c.postSolveAll(b), i.preSolveVelocity(h.list), C = 0; C < e.velocityIterations; C++) i.solveVelocity(h.list, v.timeScale);
                        return h.collisionActive.length > 0 && s.trigger(e, "collisionActive", {
                            pairs: h.collisionActive
                        }), h.collisionEnd.length > 0 && s.trigger(e, "collisionEnd", {
                            pairs: h.collisionEnd
                        }), r._bodiesClearForces(b), s.trigger(e, "afterUpdate", g), e.timing.lastElapsed = d.now() - f, e
                    }, r.merge = function(e, t) {
                        if (d.extend(e, t), t.world) {
                            e.world = t.world, r.clear(e);
                            for (var n = u.allBodies(e.world), i = 0; i < n.length; i++) {
                                var o = n[i];
                                a.set(o, !1), o.id = d.nextId()
                            }
                        }
                    }, r.clear = function(e) {
                        l.clear(e.pairs), o.clear(e.detector)
                    }, r._bodiesClearForces = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.force.x = 0, n.force.y = 0, n.torque = 0
                        }
                    }, r._bodiesApplyGravity = function(e, t) {
                        var n = "undefined" !== typeof t.scale ? t.scale : .001;
                        if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                            for (var r = 0; r < e.length; r++) {
                                var a = e[r];
                                a.isStatic || a.isSleeping || (a.force.y += a.mass * t.y * n, a.force.x += a.mass * t.x * n)
                            }
                    }, r._bodiesUpdate = function(e, t, n, r, a) {
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            o.isStatic || o.isSleeping || f.update(o, t, n, r)
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(1);
                    r._restingThresh = 4, r._restingThreshTangent = 6, r._positionDampen = .9, r._positionWarming = .8, r._frictionNormalMultiplier = 5, r.preSolvePosition = function(e) {
                        var t, n, r, a = e.length;
                        for (t = 0; t < a; t++)(n = e[t]).isActive && (r = n.activeContacts.length, n.collision.parentA.totalContacts += r, n.collision.parentB.totalContacts += r)
                    }, r.solvePosition = function(e, t) {
                        var n, a, i, o, l, s, u, c, d = r._positionDampen,
                            f = e.length;
                        for (n = 0; n < f; n++)(a = e[n]).isActive && !a.isSensor && (o = (i = a.collision).parentA, l = i.parentB, s = i.normal, a.separation = s.x * (l.positionImpulse.x + i.penetration.x - o.positionImpulse.x) + s.y * (l.positionImpulse.y + i.penetration.y - o.positionImpulse.y));
                        for (n = 0; n < f; n++)(a = e[n]).isActive && !a.isSensor && (o = (i = a.collision).parentA, l = i.parentB, s = i.normal, c = (a.separation - a.slop) * t, (o.isStatic || l.isStatic) && (c *= 2), o.isStatic || o.isSleeping || (u = d / o.totalContacts, o.positionImpulse.x += s.x * c * u, o.positionImpulse.y += s.y * c * u), l.isStatic || l.isSleeping || (u = d / l.totalContacts, l.positionImpulse.x -= s.x * c * u, l.positionImpulse.y -= s.y * c * u))
                    }, r.postSolvePosition = function(e) {
                        for (var t = r._positionWarming, n = e.length, o = a.translate, l = i.update, s = 0; s < n; s++) {
                            var u = e[s],
                                c = u.positionImpulse,
                                d = c.x,
                                f = c.y,
                                C = u.velocity;
                            if (u.totalContacts = 0, 0 !== d || 0 !== f) {
                                for (var p = 0; p < u.parts.length; p++) {
                                    var m = u.parts[p];
                                    o(m.vertices, c), l(m.bounds, m.vertices, C), m.position.x += d, m.position.y += f
                                }
                                u.positionPrev.x += d, u.positionPrev.y += f, d * C.x + f * C.y < 0 ? (c.x = 0, c.y = 0) : (c.x *= t, c.y *= t)
                            }
                        }
                    }, r.preSolveVelocity = function(e) {
                        var t, n, r = e.length;
                        for (t = 0; t < r; t++) {
                            var a = e[t];
                            if (a.isActive && !a.isSensor) {
                                var i = a.activeContacts,
                                    o = i.length,
                                    l = a.collision,
                                    s = l.parentA,
                                    u = l.parentB,
                                    c = l.normal,
                                    d = l.tangent;
                                for (n = 0; n < o; n++) {
                                    var f = i[n],
                                        C = f.vertex,
                                        p = f.normalImpulse,
                                        m = f.tangentImpulse;
                                    if (0 !== p || 0 !== m) {
                                        var h = c.x * p + d.x * m,
                                            v = c.y * p + d.y * m;
                                        s.isStatic || s.isSleeping || (s.positionPrev.x += h * s.inverseMass, s.positionPrev.y += v * s.inverseMass, s.anglePrev += s.inverseInertia * ((C.x - s.position.x) * v - (C.y - s.position.y) * h)), u.isStatic || u.isSleeping || (u.positionPrev.x -= h * u.inverseMass, u.positionPrev.y -= v * u.inverseMass, u.anglePrev -= u.inverseInertia * ((C.x - u.position.x) * v - (C.y - u.position.y) * h))
                                    }
                                }
                            }
                        }
                    }, r.solveVelocity = function(e, t) {
                        var n, a, i, o, l = t * t,
                            s = r._restingThresh * l,
                            u = r._frictionNormalMultiplier,
                            c = r._restingThreshTangent * l,
                            d = Number.MAX_VALUE,
                            f = e.length;
                        for (i = 0; i < f; i++) {
                            var C = e[i];
                            if (C.isActive && !C.isSensor) {
                                var p = C.collision,
                                    m = p.parentA,
                                    h = p.parentB,
                                    v = m.velocity,
                                    y = h.velocity,
                                    g = p.normal.x,
                                    b = p.normal.y,
                                    x = p.tangent.x,
                                    w = p.tangent.y,
                                    S = C.activeContacts,
                                    M = S.length,
                                    k = 1 / M,
                                    E = m.inverseMass + h.inverseMass,
                                    L = C.friction * C.frictionStatic * u * l;
                                for (v.x = m.position.x - m.positionPrev.x, v.y = m.position.y - m.positionPrev.y, y.x = h.position.x - h.positionPrev.x, y.y = h.position.y - h.positionPrev.y, m.angularVelocity = m.angle - m.anglePrev, h.angularVelocity = h.angle - h.anglePrev, o = 0; o < M; o++) {
                                    var _ = S[o],
                                        P = _.vertex,
                                        B = P.x - m.position.x,
                                        Z = P.y - m.position.y,
                                        V = P.x - h.position.x,
                                        O = P.y - h.position.y,
                                        T = v.x - Z * m.angularVelocity,
                                        A = v.y + B * m.angularVelocity,
                                        I = T - (y.x - O * h.angularVelocity),
                                        R = A - (y.y + V * h.angularVelocity),
                                        j = g * I + b * R,
                                        N = x * I + w * R,
                                        z = C.separation + j,
                                        H = Math.min(z, 1),
                                        F = (H = z < 0 ? 0 : H) * L;
                                    N > F || -N > F ? (a = N > 0 ? N : -N, (n = C.friction * (N > 0 ? 1 : -1) * l) < -a ? n = -a : n > a && (n = a)) : (n = N, a = d);
                                    var D = B * b - Z * g,
                                        U = V * b - O * g,
                                        W = k / (E + m.inverseInertia * D * D + h.inverseInertia * U * U),
                                        $ = (1 + C.restitution) * j * W;
                                    if (n *= W, j * j > s && j < 0) _.normalImpulse = 0;
                                    else {
                                        var q = _.normalImpulse;
                                        _.normalImpulse += $, _.normalImpulse = Math.min(_.normalImpulse, 0), $ = _.normalImpulse - q
                                    }
                                    if (N * N > c) _.tangentImpulse = 0;
                                    else {
                                        var Q = _.tangentImpulse;
                                        _.tangentImpulse += n, _.tangentImpulse < -a && (_.tangentImpulse = -a), _.tangentImpulse > a && (_.tangentImpulse = a), n = _.tangentImpulse - Q
                                    }
                                    var G = g * $ + x * n,
                                        K = b * $ + w * n;
                                    m.isStatic || m.isSleeping || (m.positionPrev.x += G * m.inverseMass, m.positionPrev.y += K * m.inverseMass, m.anglePrev += (B * K - Z * G) * m.inverseInertia), h.isStatic || h.isSleeping || (h.positionPrev.x -= G * h.inverseMass, h.positionPrev.y -= K * h.inverseMass, h.anglePrev -= (V * K - O * G) * h.inverseInertia)
                                }
                            }
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(9),
                        i = n(0);
                    r.create = function(e) {
                        return i.extend({
                            table: {},
                            list: [],
                            collisionStart: [],
                            collisionActive: [],
                            collisionEnd: []
                        }, e)
                    }, r.update = function(e, t, n) {
                        var r, i, o, l, s = e.list,
                            u = s.length,
                            c = e.table,
                            d = t.length,
                            f = e.collisionStart,
                            C = e.collisionEnd,
                            p = e.collisionActive;
                        for (f.length = 0, C.length = 0, p.length = 0, l = 0; l < u; l++) s[l].confirmedActive = !1;
                        for (l = 0; l < d; l++)(o = (r = t[l]).pair) ? (o.isActive ? p.push(o) : f.push(o), a.update(o, r, n), o.confirmedActive = !0) : (c[(o = a.create(r, n)).id] = o, f.push(o), s.push(o));
                        var m = [];
                        for (u = s.length, l = 0; l < u; l++)(o = s[l]).confirmedActive || (a.setActive(o, !1, n), C.push(o), o.collision.bodyA.isSleeping || o.collision.bodyB.isSleeping || m.push(l));
                        for (l = 0; l < m.length; l++) o = s[i = m[l] - l], s.splice(i, 1), delete c[o.id]
                    }, r.clear = function(e) {
                        return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
                    }
                }, function(e, t, n) {
                    var r = e.exports = n(22);
                    r.Axes = n(11), r.Bodies = n(12), r.Body = n(6), r.Bounds = n(1), r.Collision = n(8), r.Common = n(0), r.Composite = n(5), r.Composites = n(23), r.Constraint = n(10), r.Contact = n(17), r.Detector = n(14), r.Engine = n(18), r.Events = n(4), r.Grid = n(24), r.Mouse = n(13), r.MouseConstraint = n(25), r.Pair = n(9), r.Pairs = n(20), r.Plugin = n(15), r.Query = n(26), r.Render = n(16), r.Resolver = n(19), r.Runner = n(27), r.SAT = n(28), r.Sleeping = n(7), r.Svg = n(29), r.Vector = n(2), r.Vertices = n(3), r.World = n(30), r.Engine.run = r.Runner.run, r.Common.deprecated(r.Engine, "run", "Engine.run \u27a4 use Matter.Runner.run(engine) instead")
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(15),
                        i = n(0);
                    r.name = "matter-js", r.version = "0.18.0", r.uses = [], r.used = [], r.use = function() {
                        a.use(r, Array.prototype.slice.call(arguments))
                    }, r.before = function(e, t) {
                        return e = e.replace(/^Matter./, ""), i.chainPathBefore(r, e, t)
                    }, r.after = function(e, t) {
                        return e = e.replace(/^Matter./, ""), i.chainPathAfter(r, e, t)
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(5),
                        i = n(10),
                        o = n(0),
                        l = n(6),
                        s = n(12),
                        u = o.deprecated;
                    r.stack = function(e, t, n, r, i, o, s) {
                        for (var u, c = a.create({
                                label: "Stack"
                            }), d = e, f = t, C = 0, p = 0; p < r; p++) {
                            for (var m = 0, h = 0; h < n; h++) {
                                var v = s(d, f, h, p, u, C);
                                if (v) {
                                    var y = v.bounds.max.y - v.bounds.min.y,
                                        g = v.bounds.max.x - v.bounds.min.x;
                                    y > m && (m = y), l.translate(v, {
                                        x: .5 * g,
                                        y: .5 * y
                                    }), d = v.bounds.max.x + i, a.addBody(c, v), u = v, C += 1
                                } else d += i
                            }
                            f += m + o, d = e
                        }
                        return c
                    }, r.chain = function(e, t, n, r, l, s) {
                        for (var u = e.bodies, c = 1; c < u.length; c++) {
                            var d = u[c - 1],
                                f = u[c],
                                C = d.bounds.max.y - d.bounds.min.y,
                                p = d.bounds.max.x - d.bounds.min.x,
                                m = f.bounds.max.y - f.bounds.min.y,
                                h = {
                                    bodyA: d,
                                    pointA: {
                                        x: p * t,
                                        y: C * n
                                    },
                                    bodyB: f,
                                    pointB: {
                                        x: (f.bounds.max.x - f.bounds.min.x) * r,
                                        y: m * l
                                    }
                                },
                                v = o.extend(h, s);
                            a.addConstraint(e, i.create(v))
                        }
                        return e.label += " Chain", e
                    }, r.mesh = function(e, t, n, r, l) {
                        var s, u, c, d, f, C = e.bodies;
                        for (s = 0; s < n; s++) {
                            for (u = 1; u < t; u++) c = C[u - 1 + s * t], d = C[u + s * t], a.addConstraint(e, i.create(o.extend({
                                bodyA: c,
                                bodyB: d
                            }, l)));
                            if (s > 0)
                                for (u = 0; u < t; u++) c = C[u + (s - 1) * t], d = C[u + s * t], a.addConstraint(e, i.create(o.extend({
                                    bodyA: c,
                                    bodyB: d
                                }, l))), r && u > 0 && (f = C[u - 1 + (s - 1) * t], a.addConstraint(e, i.create(o.extend({
                                    bodyA: f,
                                    bodyB: d
                                }, l)))), r && u < t - 1 && (f = C[u + 1 + (s - 1) * t], a.addConstraint(e, i.create(o.extend({
                                    bodyA: f,
                                    bodyB: d
                                }, l))))
                        }
                        return e.label += " Mesh", e
                    }, r.pyramid = function(e, t, n, a, i, o, s) {
                        return r.stack(e, t, n, a, i, o, (function(t, r, o, u, c, d) {
                            var f = Math.min(a, Math.ceil(n / 2)),
                                C = c ? c.bounds.max.x - c.bounds.min.x : 0;
                            if (!(u > f) && !(o < (u = f - u) || o > n - 1 - u)) return 1 === d && l.translate(c, {
                                x: (o + (n % 2 === 1 ? 1 : -1)) * C,
                                y: 0
                            }), s(e + (c ? o * C : 0) + o * i, r, o, u, c, d)
                        }))
                    }, r.newtonsCradle = function(e, t, n, r, o) {
                        for (var l = a.create({
                                label: "Newtons Cradle"
                            }), u = 0; u < n; u++) {
                            var c = s.circle(e + u * (1.9 * r), t + o, r, {
                                    inertia: 1 / 0,
                                    restitution: 1,
                                    friction: 0,
                                    frictionAir: 1e-4,
                                    slop: 1
                                }),
                                d = i.create({
                                    pointA: {
                                        x: e + u * (1.9 * r),
                                        y: t
                                    },
                                    bodyB: c
                                });
                            a.addBody(l, c), a.addConstraint(l, d)
                        }
                        return l
                    }, u(r, "newtonsCradle", "Composites.newtonsCradle \u27a4 moved to newtonsCradle example"), r.car = function(e, t, n, r, o) {
                        var u = l.nextGroup(!0),
                            c = .5 * -n + 20,
                            d = .5 * n - 20,
                            f = a.create({
                                label: "Car"
                            }),
                            C = s.rectangle(e, t, n, r, {
                                collisionFilter: {
                                    group: u
                                },
                                chamfer: {
                                    radius: .5 * r
                                },
                                density: 2e-4
                            }),
                            p = s.circle(e + c, t + 0, o, {
                                collisionFilter: {
                                    group: u
                                },
                                friction: .8
                            }),
                            m = s.circle(e + d, t + 0, o, {
                                collisionFilter: {
                                    group: u
                                },
                                friction: .8
                            }),
                            h = i.create({
                                bodyB: C,
                                pointB: {
                                    x: c,
                                    y: 0
                                },
                                bodyA: p,
                                stiffness: 1,
                                length: 0
                            }),
                            v = i.create({
                                bodyB: C,
                                pointB: {
                                    x: d,
                                    y: 0
                                },
                                bodyA: m,
                                stiffness: 1,
                                length: 0
                            });
                        return a.addBody(f, C), a.addBody(f, p), a.addBody(f, m), a.addConstraint(f, h), a.addConstraint(f, v), f
                    }, u(r, "car", "Composites.car \u27a4 moved to car example"), r.softBody = function(e, t, n, a, i, l, u, c, d, f) {
                        d = o.extend({
                            inertia: 1 / 0
                        }, d), f = o.extend({
                            stiffness: .2,
                            render: {
                                type: "line",
                                anchors: !1
                            }
                        }, f);
                        var C = r.stack(e, t, n, a, i, l, (function(e, t) {
                            return s.circle(e, t, c, d)
                        }));
                        return r.mesh(C, n, a, u, f), C.label = "Soft Body", C
                    }, u(r, "softBody", "Composites.softBody \u27a4 moved to softBody and cloth examples")
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(9),
                        i = n(0),
                        o = i.deprecated;
                    r.create = function(e) {
                        return i.extend({
                            buckets: {},
                            pairs: {},
                            pairsList: [],
                            bucketWidth: 48,
                            bucketHeight: 48
                        }, e)
                    }, r.update = function(e, t, n, a) {
                        var i, o, l, s, u, c = n.world,
                            d = e.buckets,
                            f = !1;
                        for (i = 0; i < t.length; i++) {
                            var C = t[i];
                            if ((!C.isSleeping || a) && (!c.bounds || !(C.bounds.max.x < c.bounds.min.x || C.bounds.min.x > c.bounds.max.x || C.bounds.max.y < c.bounds.min.y || C.bounds.min.y > c.bounds.max.y))) {
                                var p = r._getRegion(e, C);
                                if (!C.region || p.id !== C.region.id || a) {
                                    C.region && !a || (C.region = p);
                                    var m = r._regionUnion(p, C.region);
                                    for (o = m.startCol; o <= m.endCol; o++)
                                        for (l = m.startRow; l <= m.endRow; l++) {
                                            s = d[u = r._getBucketId(o, l)];
                                            var h = o >= p.startCol && o <= p.endCol && l >= p.startRow && l <= p.endRow,
                                                v = o >= C.region.startCol && o <= C.region.endCol && l >= C.region.startRow && l <= C.region.endRow;
                                            !h && v && v && s && r._bucketRemoveBody(e, s, C), (C.region === p || h && !v || a) && (s || (s = r._createBucket(d, u)), r._bucketAddBody(e, s, C))
                                        }
                                    C.region = p, f = !0
                                }
                            }
                        }
                        f && (e.pairsList = r._createActivePairsList(e))
                    }, o(r, "update", "Grid.update \u27a4 replaced by Matter.Detector"), r.clear = function(e) {
                        e.buckets = {}, e.pairs = {}, e.pairsList = []
                    }, o(r, "clear", "Grid.clear \u27a4 replaced by Matter.Detector"), r._regionUnion = function(e, t) {
                        var n = Math.min(e.startCol, t.startCol),
                            a = Math.max(e.endCol, t.endCol),
                            i = Math.min(e.startRow, t.startRow),
                            o = Math.max(e.endRow, t.endRow);
                        return r._createRegion(n, a, i, o)
                    }, r._getRegion = function(e, t) {
                        var n = t.bounds,
                            a = Math.floor(n.min.x / e.bucketWidth),
                            i = Math.floor(n.max.x / e.bucketWidth),
                            o = Math.floor(n.min.y / e.bucketHeight),
                            l = Math.floor(n.max.y / e.bucketHeight);
                        return r._createRegion(a, i, o, l)
                    }, r._createRegion = function(e, t, n, r) {
                        return {
                            id: e + "," + t + "," + n + "," + r,
                            startCol: e,
                            endCol: t,
                            startRow: n,
                            endRow: r
                        }
                    }, r._getBucketId = function(e, t) {
                        return "C" + e + "R" + t
                    }, r._createBucket = function(e, t) {
                        return e[t] = []
                    }, r._bucketAddBody = function(e, t, n) {
                        var r, i = e.pairs,
                            o = a.id,
                            l = t.length;
                        for (r = 0; r < l; r++) {
                            var s = t[r];
                            if (!(n.id === s.id || n.isStatic && s.isStatic)) {
                                var u = o(n, s),
                                    c = i[u];
                                c ? c[2] += 1 : i[u] = [n, s, 1]
                            }
                        }
                        t.push(n)
                    }, r._bucketRemoveBody = function(e, t, n) {
                        var r, o = e.pairs,
                            l = a.id;
                        t.splice(i.indexOf(t, n), 1);
                        var s = t.length;
                        for (r = 0; r < s; r++) {
                            var u = o[l(n, t[r])];
                            u && (u[2] -= 1)
                        }
                    }, r._createActivePairsList = function(e) {
                        var t, n, r = e.pairs,
                            a = i.keys(r),
                            o = a.length,
                            l = [];
                        for (n = 0; n < o; n++)(t = r[a[n]])[2] > 0 ? l.push(t) : delete r[a[n]];
                        return l
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(3),
                        i = n(7),
                        o = n(13),
                        l = n(4),
                        s = n(14),
                        u = n(10),
                        c = n(5),
                        d = n(0),
                        f = n(1);
                    r.create = function(e, t) {
                        var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                        n || (e && e.render && e.render.canvas ? n = o.create(e.render.canvas) : t && t.element ? n = o.create(t.element) : (n = o.create(), d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                        var a = {
                                type: "mouseConstraint",
                                mouse: n,
                                element: null,
                                body: null,
                                constraint: u.create({
                                    label: "Mouse Constraint",
                                    pointA: n.position,
                                    pointB: {
                                        x: 0,
                                        y: 0
                                    },
                                    length: .01,
                                    stiffness: .1,
                                    angularStiffness: 1,
                                    render: {
                                        strokeStyle: "#90EE90",
                                        lineWidth: 3
                                    }
                                }),
                                collisionFilter: {
                                    category: 1,
                                    mask: 4294967295,
                                    group: 0
                                }
                            },
                            i = d.extend(a, t);
                        return l.on(e, "beforeUpdate", (function() {
                            var t = c.allBodies(e.world);
                            r.update(i, t), r._triggerEvents(i)
                        })), i
                    }, r.update = function(e, t) {
                        var n = e.mouse,
                            r = e.constraint,
                            o = e.body;
                        if (0 === n.button) {
                            if (r.bodyB) i.set(r.bodyB, !1), r.pointA = n.position;
                            else
                                for (var u = 0; u < t.length; u++)
                                    if (o = t[u], f.contains(o.bounds, n.position) && s.canCollide(o.collisionFilter, e.collisionFilter))
                                        for (var c = o.parts.length > 1 ? 1 : 0; c < o.parts.length; c++) {
                                            var d = o.parts[c];
                                            if (a.contains(d.vertices, n.position)) {
                                                r.pointA = n.position, r.bodyB = e.body = o, r.pointB = {
                                                    x: n.position.x - o.position.x,
                                                    y: n.position.y - o.position.y
                                                }, r.angleB = o.angle, i.set(o, !1), l.trigger(e, "startdrag", {
                                                    mouse: n,
                                                    body: o
                                                });
                                                break
                                            }
                                        }
                        } else r.bodyB = e.body = null, r.pointB = null, o && l.trigger(e, "enddrag", {
                            mouse: n,
                            body: o
                        })
                    }, r._triggerEvents = function(e) {
                        var t = e.mouse,
                            n = t.sourceEvents;
                        n.mousemove && l.trigger(e, "mousemove", {
                            mouse: t
                        }), n.mousedown && l.trigger(e, "mousedown", {
                            mouse: t
                        }), n.mouseup && l.trigger(e, "mouseup", {
                            mouse: t
                        }), o.clearSourceEvents(t)
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(2),
                        i = n(8),
                        o = n(1),
                        l = n(12),
                        s = n(3);
                    r.collides = function(e, t) {
                        for (var n = [], r = t.length, a = e.bounds, l = i.collides, s = o.overlaps, u = 0; u < r; u++) {
                            var c = t[u],
                                d = c.parts.length,
                                f = 1 === d ? 0 : 1;
                            if (s(c.bounds, a))
                                for (var C = f; C < d; C++) {
                                    var p = c.parts[C];
                                    if (s(p.bounds, a)) {
                                        var m = l(p, e);
                                        if (m) {
                                            n.push(m);
                                            break
                                        }
                                    }
                                }
                        }
                        return n
                    }, r.ray = function(e, t, n, i) {
                        i = i || 1e-100;
                        for (var o = a.angle(t, n), s = a.magnitude(a.sub(t, n)), u = .5 * (n.x + t.x), c = .5 * (n.y + t.y), d = l.rectangle(u, c, s, i, {
                                angle: o
                            }), f = r.collides(d, e), C = 0; C < f.length; C += 1) {
                            var p = f[C];
                            p.body = p.bodyB = p.bodyA
                        }
                        return f
                    }, r.region = function(e, t, n) {
                        for (var r = [], a = 0; a < e.length; a++) {
                            var i = e[a],
                                l = o.overlaps(i.bounds, t);
                            (l && !n || !l && n) && r.push(i)
                        }
                        return r
                    }, r.point = function(e, t) {
                        for (var n = [], r = 0; r < e.length; r++) {
                            var a = e[r];
                            if (o.contains(a.bounds, t))
                                for (var i = 1 === a.parts.length ? 0 : 1; i < a.parts.length; i++) {
                                    var l = a.parts[i];
                                    if (o.contains(l.bounds, t) && s.contains(l.vertices, t)) {
                                        n.push(a);
                                        break
                                    }
                                }
                        }
                        return n
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(4),
                        i = n(18),
                        o = n(0);
                    ! function() {
                        var e, t, n;
                        "undefined" !== typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), e || (e = function(e) {
                            n = setTimeout((function() {
                                e(o.now())
                            }), 1e3 / 60)
                        }, t = function() {
                            clearTimeout(n)
                        }), r.create = function(e) {
                            var t = o.extend({
                                fps: 60,
                                correction: 1,
                                deltaSampleSize: 60,
                                counterTimestamp: 0,
                                frameCounter: 0,
                                deltaHistory: [],
                                timePrev: null,
                                timeScalePrev: 1,
                                frameRequestId: null,
                                isFixed: !1,
                                enabled: !0
                            }, e);
                            return t.delta = t.delta || 1e3 / t.fps, t.deltaMin = t.deltaMin || 1e3 / t.fps, t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps), t.fps = 1e3 / t.delta, t
                        }, r.run = function(t, n) {
                            return "undefined" !== typeof t.positionIterations && (n = t, t = r.create()),
                                function a(i) {
                                    t.frameRequestId = e(a), i && t.enabled && r.tick(t, n, i)
                                }(), t
                        }, r.tick = function(e, t, n) {
                            var r, o = t.timing,
                                l = 1,
                                s = {
                                    timestamp: o.timestamp
                                };
                            a.trigger(e, "beforeTick", s), e.isFixed ? r = e.delta : (r = n - e.timePrev || e.delta, e.timePrev = n, e.deltaHistory.push(r), e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize), l = (r = (r = (r = Math.min.apply(null, e.deltaHistory)) < e.deltaMin ? e.deltaMin : r) > e.deltaMax ? e.deltaMax : r) / e.delta, e.delta = r), 0 !== e.timeScalePrev && (l *= o.timeScale / e.timeScalePrev), 0 === o.timeScale && (l = 0), e.timeScalePrev = o.timeScale, e.correction = l, e.frameCounter += 1, n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3), e.counterTimestamp = n, e.frameCounter = 0), a.trigger(e, "tick", s), a.trigger(e, "beforeUpdate", s), i.update(t, r, l), a.trigger(e, "afterUpdate", s), a.trigger(e, "afterTick", s)
                        }, r.stop = function(e) {
                            t(e.frameRequestId)
                        }, r.start = function(e, t) {
                            r.run(e, t)
                        }
                    }()
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(8),
                        i = n(0).deprecated;
                    r.collides = function(e, t) {
                        return a.collides(e, t)
                    }, i(r, "collides", "SAT.collides \u27a4 replaced by Collision.collides")
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r, n(1);
                    var a = n(0);
                    r.pathToVertices = function(e, t) {
                        "undefined" === typeof window || "SVGPathSeg" in window || a.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                        var n, i, o, l, s, u, c, d, f, C, p, m = [],
                            h = 0,
                            v = 0,
                            y = 0;
                        t = t || 15;
                        var g = function(e, t, n) {
                                var r = n % 2 === 1 && n > 1;
                                if (!f || e != f.x || t != f.y) {
                                    f && r ? (C = f.x, p = f.y) : (C = 0, p = 0);
                                    var a = {
                                        x: C + e,
                                        y: p + t
                                    };
                                    !r && f || (f = a), m.push(a), v = C + e, y = p + t
                                }
                            },
                            b = function(e) {
                                var t = e.pathSegTypeAsLetter.toUpperCase();
                                if ("Z" !== t) {
                                    switch (t) {
                                        case "M":
                                        case "L":
                                        case "T":
                                        case "C":
                                        case "S":
                                        case "Q":
                                            v = e.x, y = e.y;
                                            break;
                                        case "H":
                                            v = e.x;
                                            break;
                                        case "V":
                                            y = e.y
                                    }
                                    g(v, y, e.pathSegType)
                                }
                            };
                        for (r._svgPathToAbsolute(e), o = e.getTotalLength(), u = [], n = 0; n < e.pathSegList.numberOfItems; n += 1) u.push(e.pathSegList.getItem(n));
                        for (c = u.concat(); h < o;) {
                            if ((s = u[e.getPathSegAtLength(h)]) != d) {
                                for (; c.length && c[0] != s;) b(c.shift());
                                d = s
                            }
                            switch (s.pathSegTypeAsLetter.toUpperCase()) {
                                case "C":
                                case "T":
                                case "S":
                                case "Q":
                                case "A":
                                    l = e.getPointAtLength(h), g(l.x, l.y, 0)
                            }
                            h += t
                        }
                        for (n = 0, i = c.length; n < i; ++n) b(c[n]);
                        return m
                    }, r._svgPathToAbsolute = function(e) {
                        for (var t, n, r, a, i, o, l = e.pathSegList, s = 0, u = 0, c = l.numberOfItems, d = 0; d < c; ++d) {
                            var f = l.getItem(d),
                                C = f.pathSegTypeAsLetter;
                            if (/[MLHVCSQTA]/.test(C)) "x" in f && (s = f.x), "y" in f && (u = f.y);
                            else switch ("x1" in f && (r = s + f.x1), "x2" in f && (i = s + f.x2), "y1" in f && (a = u + f.y1), "y2" in f && (o = u + f.y2), "x" in f && (s += f.x), "y" in f && (u += f.y), C) {
                                case "m":
                                    l.replaceItem(e.createSVGPathSegMovetoAbs(s, u), d);
                                    break;
                                case "l":
                                    l.replaceItem(e.createSVGPathSegLinetoAbs(s, u), d);
                                    break;
                                case "h":
                                    l.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(s), d);
                                    break;
                                case "v":
                                    l.replaceItem(e.createSVGPathSegLinetoVerticalAbs(u), d);
                                    break;
                                case "c":
                                    l.replaceItem(e.createSVGPathSegCurvetoCubicAbs(s, u, r, a, i, o), d);
                                    break;
                                case "s":
                                    l.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(s, u, i, o), d);
                                    break;
                                case "q":
                                    l.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(s, u, r, a), d);
                                    break;
                                case "t":
                                    l.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(s, u), d);
                                    break;
                                case "a":
                                    l.replaceItem(e.createSVGPathSegArcAbs(s, u, f.r1, f.r2, f.angle, f.largeArcFlag, f.sweepFlag), d);
                                    break;
                                case "z":
                                case "Z":
                                    s = t, u = n
                            }
                            "M" != C && "m" != C || (t = s, n = u)
                        }
                    }
                }, function(e, t, n) {
                    var r = {};
                    e.exports = r;
                    var a = n(5);
                    n(0), r.create = a.create, r.add = a.add, r.remove = a.remove, r.clear = a.clear, r.addComposite = a.addComposite, r.addBody = a.addBody, r.addConstraint = a.addConstraint
                }])
            }, e.exports = r()
        },
        463: function(e, t, n) {
            "use strict";
            var r = n(791),
                a = n(296);

            function i(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var o = new Set,
                l = {};

            function s(e, t) {
                u(e, t), u(e + "Capture", t)
            }

            function u(e, t) {
                for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e])
            }
            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                d = Object.prototype.hasOwnProperty,
                f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                C = {},
                p = {};

            function m(e, t, n, r, a, i, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
            }
            var h = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                h[e] = new m(e, 0, !1, e, null, !1, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function(e) {
                var t = e[0];
                h[t] = new m(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                h[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                h[e] = new m(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                h[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                h[e] = new m(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function(e) {
                h[e] = new m(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function(e) {
                h[e] = new m(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function(e) {
                h[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var v = /[\-:]([a-z])/g;

            function y(e) {
                return e[1].toUpperCase()
            }

            function g(e, t, n, r) {
                var a = h.hasOwnProperty(t) ? h[t] : null;
                (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof t) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                default:
                                    return !1
                            }
                        }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, a, r) && (n = null), r || null === a ? function(e) {
                    return !!d.call(p, e) || !d.call(C, e) && (f.test(e) ? p[e] = !0 : (C[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                h[t] = new m(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(v, y);
                h[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(v, y);
                h[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                h[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), h.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                h[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                x = Symbol.for("react.element"),
                w = Symbol.for("react.portal"),
                S = Symbol.for("react.fragment"),
                M = Symbol.for("react.strict_mode"),
                k = Symbol.for("react.profiler"),
                E = Symbol.for("react.provider"),
                L = Symbol.for("react.context"),
                _ = Symbol.for("react.forward_ref"),
                P = Symbol.for("react.suspense"),
                B = Symbol.for("react.suspense_list"),
                Z = Symbol.for("react.memo"),
                V = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var O = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var T = Symbol.iterator;

            function A(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof(e = T && e[T] || e["@@iterator"]) ? e : null
            }
            var I, R = Object.assign;

            function j(e) {
                if (void 0 === I) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    I = t && t[1] || ""
                }
                return "\n" + I + e
            }
            var N = !1;

            function z(e, t) {
                if (!e || N) return "";
                N = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                                throw Error()
                            }, Object.defineProperty(t.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (u) {
                                var r = u
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (u) {
                                r = u
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (u) {
                            r = u
                        }
                        e()
                    }
                } catch (u) {
                    if (u && r && "string" === typeof u.stack) {
                        for (var a = u.stack.split("\n"), i = r.stack.split("\n"), o = a.length - 1, l = i.length - 1; 1 <= o && 0 <= l && a[o] !== i[l];) l--;
                        for (; 1 <= o && 0 <= l; o--, l--)
                            if (a[o] !== i[l]) {
                                if (1 !== o || 1 !== l)
                                    do {
                                        if (o--, 0 > --l || a[o] !== i[l]) {
                                            var s = "\n" + a[o].replace(" at new ", " at ");
                                            return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                        }
                                    } while (1 <= o && 0 <= l);
                                break
                            }
                    }
                } finally {
                    N = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? j(e) : ""
            }

            function H(e) {
                switch (e.tag) {
                    case 5:
                        return j(e.type);
                    case 16:
                        return j("Lazy");
                    case 13:
                        return j("Suspense");
                    case 19:
                        return j("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = z(e.type, !1);
                    case 11:
                        return e = z(e.type.render, !1);
                    case 1:
                        return e = z(e.type, !0);
                    default:
                        return ""
                }
            }

            function F(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case S:
                        return "Fragment";
                    case w:
                        return "Portal";
                    case k:
                        return "Profiler";
                    case M:
                        return "StrictMode";
                    case P:
                        return "Suspense";
                    case B:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case L:
                        return (e.displayName || "Context") + ".Consumer";
                    case E:
                        return (e._context.displayName || "Context") + ".Provider";
                    case _:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case Z:
                        return null !== (t = e.displayName || null) ? t : F(e.type) || "Memo";
                    case V:
                        t = e._payload, e = e._init;
                        try {
                            return F(e(t))
                        } catch (n) {}
                }
                return null
            }

            function D(e) {
                var t = e.type;
                switch (e.tag) {
                    case 24:
                        return "Cache";
                    case 9:
                        return (t.displayName || "Context") + ".Consumer";
                    case 10:
                        return (t._context.displayName || "Context") + ".Provider";
                    case 18:
                        return "DehydratedFragment";
                    case 11:
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case 7:
                        return "Fragment";
                    case 5:
                        return t;
                    case 4:
                        return "Portal";
                    case 3:
                        return "Root";
                    case 6:
                        return "Text";
                    case 16:
                        return F(t);
                    case 8:
                        return t === M ? "StrictMode" : "Mode";
                    case 22:
                        return "Offscreen";
                    case 12:
                        return "Profiler";
                    case 21:
                        return "Scope";
                    case 13:
                        return "Suspense";
                    case 19:
                        return "SuspenseList";
                    case 25:
                        return "TracingMarker";
                    case 1:
                    case 0:
                    case 17:
                    case 2:
                    case 14:
                    case 15:
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function U(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                    case "object":
                        return e;
                    default:
                        return ""
                }
            }

            function W(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function $(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = W(e) ? "checked" : "value",
                        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var a = n.get,
                            i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return a.call(this)
                            },
                            set: function(e) {
                                r = "" + e, i.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }), {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function q(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function Q(e) {
                if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function G(e, t) {
                var n = t.checked;
                return R({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function K(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = U(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function X(e, t) {
                null != (t = t.checked) && g(e, "checked", t, !1)
            }

            function Y(e, t) {
                X(e, t);
                var n = U(t.value),
                    r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, U(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function J(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
                    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + U(n), t = null, a = 0; a < e.length; a++) {
                        if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                        null !== t || e[a].disabled || (t = e[a])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                return R({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }

            function ae(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(i(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(i(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {
                    initialValue: U(n)
                }
            }

            function ie(e, t) {
                var n = U(t.value),
                    r = U(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function oe(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function le(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function se(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var ue, ce, de = (ce = function(e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                else {
                    for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ce(e, t)
                }))
            } : ce);

            function fe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }
            var Ce = {
                    animationIterationCount: !0,
                    aspectRatio: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                pe = ["Webkit", "ms", "Moz", "O"];

            function me(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || Ce.hasOwnProperty(e) && Ce[e] ? ("" + t).trim() : t + "px"
            }

            function he(e, t) {
                for (var n in e = e.style, t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            a = me(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
                    }
            }
            Object.keys(Ce).forEach((function(e) {
                pe.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ce[t] = Ce[e]
                }))
            }));
            var ve = R({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function ye(e, t) {
                if (t) {
                    if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(i(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                }
            }

            function ge(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }
            var be = null;

            function xe(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var we = null,
                Se = null,
                Me = null;

            function ke(e) {
                if (e = ga(e)) {
                    if ("function" !== typeof we) throw Error(i(280));
                    var t = e.stateNode;
                    t && (t = xa(t), we(e.stateNode, e.type, t))
                }
            }

            function Ee(e) {
                Se ? Me ? Me.push(e) : Me = [e] : Se = e
            }

            function Le() {
                if (Se) {
                    var e = Se,
                        t = Me;
                    if (Me = Se = null, ke(e), t)
                        for (e = 0; e < t.length; e++) ke(t[e])
                }
            }

            function _e(e, t) {
                return e(t)
            }

            function Pe() {}
            var Be = !1;

            function Ze(e, t, n) {
                if (Be) return e(t, n);
                Be = !0;
                try {
                    return _e(e, t, n)
                } finally {
                    Be = !1, (null !== Se || null !== Me) && (Pe(), Le())
                }
            }

            function Ve(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = xa(n);
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                return n
            }
            var Oe = !1;
            if (c) try {
                var Te = {};
                Object.defineProperty(Te, "passive", {
                    get: function() {
                        Oe = !0
                    }
                }), window.addEventListener("test", Te, Te), window.removeEventListener("test", Te, Te)
            } catch (ce) {
                Oe = !1
            }

            function Ae(e, t, n, r, a, i, o, l, s) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Ie = !1,
                Re = null,
                je = !1,
                Ne = null,
                ze = {
                    onError: function(e) {
                        Ie = !0, Re = e
                    }
                };

            function He(e, t, n, r, a, i, o, l, s) {
                Ie = !1, Re = null, Ae.apply(ze, arguments)
            }

            function Fe(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function De(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function Ue(e) {
                if (Fe(e) !== e) throw Error(i(188))
            }

            function We(e) {
                return null !== (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Fe(e))) throw Error(i(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var a = n.return;
                        if (null === a) break;
                        var o = a.alternate;
                        if (null === o) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === o.child) {
                            for (o = a.child; o;) {
                                if (o === n) return Ue(a), e;
                                if (o === r) return Ue(a), t;
                                o = o.sibling
                            }
                            throw Error(i(188))
                        }
                        if (n.return !== r.return) n = a, r = o;
                        else {
                            for (var l = !1, s = a.child; s;) {
                                if (s === n) {
                                    l = !0, n = a, r = o;
                                    break
                                }
                                if (s === r) {
                                    l = !0, r = a, n = o;
                                    break
                                }
                                s = s.sibling
                            }
                            if (!l) {
                                for (s = o.child; s;) {
                                    if (s === n) {
                                        l = !0, n = o, r = a;
                                        break
                                    }
                                    if (s === r) {
                                        l = !0, r = o, n = a;
                                        break
                                    }
                                    s = s.sibling
                                }
                                if (!l) throw Error(i(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(i(190))
                    }
                    if (3 !== n.tag) throw Error(i(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? $e(e) : null
            }

            function $e(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = $e(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }
            var qe = a.unstable_scheduleCallback,
                Qe = a.unstable_cancelCallback,
                Ge = a.unstable_shouldYield,
                Ke = a.unstable_requestPaint,
                Xe = a.unstable_now,
                Ye = a.unstable_getCurrentPriorityLevel,
                Je = a.unstable_ImmediatePriority,
                et = a.unstable_UserBlockingPriority,
                tt = a.unstable_NormalPriority,
                nt = a.unstable_LowPriority,
                rt = a.unstable_IdlePriority,
                at = null,
                it = null;
            var ot = Math.clz32 ? Math.clz32 : function(e) {
                    return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / st | 0) | 0
                },
                lt = Math.log,
                st = Math.LN2;
            var ut = 64,
                ct = 4194304;

            function dt(e) {
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 1073741824;
                    default:
                        return e
                }
            }

            function ft(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0,
                    a = e.suspendedLanes,
                    i = e.pingedLanes,
                    o = 268435455 & n;
                if (0 !== o) {
                    var l = o & ~a;
                    0 !== l ? r = dt(l) : 0 !== (i &= o) && (r = dt(i))
                } else 0 !== (o = n & ~a) ? r = dt(o) : 0 !== i && (r = dt(i));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (i = t & -t) || 16 === a && 0 !== (4194240 & i))) return t;
                if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                    for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a;
                return r
            }

            function Ct(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                        return t + 250;
                    case 8:
                    case 16:
                    case 32:
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function pt(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function mt() {
                var e = ut;
                return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
            }

            function ht(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function vt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n
            }

            function yt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - ot(n),
                        a = 1 << r;
                    a & t | e[r] & t && (e[r] |= t), n &= ~a
                }
            }
            var gt = 0;

            function bt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }
            var xt, wt, St, Mt, kt, Et = !1,
                Lt = [],
                _t = null,
                Pt = null,
                Bt = null,
                Zt = new Map,
                Vt = new Map,
                Ot = [],
                Tt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function At(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        _t = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        Pt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        Bt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        Zt.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Vt.delete(t.pointerId)
                }
            }

            function It(e, t, n, r, a, i) {
                return null === e || e.nativeEvent !== i ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: i,
                    targetContainers: [a]
                }, null !== t && (null !== (t = ga(t)) && wt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
            }

            function Rt(e) {
                var t = ya(e.target);
                if (null !== t) {
                    var n = Fe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = De(n))) return e.blockedOn = t, void kt(e.priority, (function() {
                                St(n)
                            }))
                        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function jt(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = ga(n)) && wt(t), e.blockedOn = n, !1;
                    var r = new(n = e.nativeEvent).constructor(n.type, n);
                    be = r, n.target.dispatchEvent(r), be = null, t.shift()
                }
                return !0
            }

            function Nt(e, t, n) {
                jt(e) && n.delete(t)
            }

            function zt() {
                Et = !1, null !== _t && jt(_t) && (_t = null), null !== Pt && jt(Pt) && (Pt = null), null !== Bt && jt(Bt) && (Bt = null), Zt.forEach(Nt), Vt.forEach(Nt)
            }

            function Ht(e, t) {
                e.blockedOn === t && (e.blockedOn = null, Et || (Et = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)))
            }

            function Ft(e) {
                function t(t) {
                    return Ht(t, e)
                }
                if (0 < Lt.length) {
                    Ht(Lt[0], e);
                    for (var n = 1; n < Lt.length; n++) {
                        var r = Lt[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== _t && Ht(_t, e), null !== Pt && Ht(Pt, e), null !== Bt && Ht(Bt, e), Zt.forEach(t), Vt.forEach(t), n = 0; n < Ot.length; n++)(r = Ot[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn;) Rt(n), null === n.blockedOn && Ot.shift()
            }
            var Dt = b.ReactCurrentBatchConfig,
                Ut = !0;

            function Wt(e, t, n, r) {
                var a = gt,
                    i = Dt.transition;
                Dt.transition = null;
                try {
                    gt = 1, qt(e, t, n, r)
                } finally {
                    gt = a, Dt.transition = i
                }
            }

            function $t(e, t, n, r) {
                var a = gt,
                    i = Dt.transition;
                Dt.transition = null;
                try {
                    gt = 4, qt(e, t, n, r)
                } finally {
                    gt = a, Dt.transition = i
                }
            }

            function qt(e, t, n, r) {
                if (Ut) {
                    var a = Gt(e, t, n, r);
                    if (null === a) Ur(e, t, r, Qt, n), At(e, r);
                    else if (function(e, t, n, r, a) {
                            switch (t) {
                                case "focusin":
                                    return _t = It(_t, e, t, n, r, a), !0;
                                case "dragenter":
                                    return Pt = It(Pt, e, t, n, r, a), !0;
                                case "mouseover":
                                    return Bt = It(Bt, e, t, n, r, a), !0;
                                case "pointerover":
                                    var i = a.pointerId;
                                    return Zt.set(i, It(Zt.get(i) || null, e, t, n, r, a)), !0;
                                case "gotpointercapture":
                                    return i = a.pointerId, Vt.set(i, It(Vt.get(i) || null, e, t, n, r, a)), !0
                            }
                            return !1
                        }(a, e, t, n, r)) r.stopPropagation();
                    else if (At(e, r), 4 & t && -1 < Tt.indexOf(e)) {
                        for (; null !== a;) {
                            var i = ga(a);
                            if (null !== i && xt(i), null === (i = Gt(e, t, n, r)) && Ur(e, t, r, Qt, n), i === a) break;
                            a = i
                        }
                        null !== a && r.stopPropagation()
                    } else Ur(e, t, r, null, n)
                }
            }
            var Qt = null;

            function Gt(e, t, n, r) {
                if (Qt = null, null !== (e = ya(e = xe(r))))
                    if (null === (t = Fe(e))) e = null;
                    else if (13 === (n = t.tag)) {
                    if (null !== (e = De(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Qt = e, null
            }

            function Kt(e) {
                switch (e) {
                    case "cancel":
                    case "click":
                    case "close":
                    case "contextmenu":
                    case "copy":
                    case "cut":
                    case "auxclick":
                    case "dblclick":
                    case "dragend":
                    case "dragstart":
                    case "drop":
                    case "focusin":
                    case "focusout":
                    case "input":
                    case "invalid":
                    case "keydown":
                    case "keypress":
                    case "keyup":
                    case "mousedown":
                    case "mouseup":
                    case "paste":
                    case "pause":
                    case "play":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                    case "ratechange":
                    case "reset":
                    case "resize":
                    case "seeked":
                    case "submit":
                    case "touchcancel":
                    case "touchend":
                    case "touchstart":
                    case "volumechange":
                    case "change":
                    case "selectionchange":
                    case "textInput":
                    case "compositionstart":
                    case "compositionend":
                    case "compositionupdate":
                    case "beforeblur":
                    case "afterblur":
                    case "beforeinput":
                    case "blur":
                    case "fullscreenchange":
                    case "focus":
                    case "hashchange":
                    case "popstate":
                    case "select":
                    case "selectstart":
                        return 1;
                    case "drag":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "mousemove":
                    case "mouseout":
                    case "mouseover":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "scroll":
                    case "toggle":
                    case "touchmove":
                    case "wheel":
                    case "mouseenter":
                    case "mouseleave":
                    case "pointerenter":
                    case "pointerleave":
                        return 4;
                    case "message":
                        switch (Ye()) {
                            case Je:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                        default:
                            return 16
                }
            }
            var Xt = null,
                Yt = null,
                Jt = null;

            function en() {
                if (Jt) return Jt;
                var e, t, n = Yt,
                    r = n.length,
                    a = "value" in Xt ? Xt.value : Xt.textContent,
                    i = a.length;
                for (e = 0; e < r && n[e] === a[e]; e++);
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
                return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function an(e) {
                function t(t, n, r, a, i) {
                    for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
                    return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }
                return R(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    },
                    persist: function() {},
                    isPersistent: nn
                }), t
            }
            var on, ln, sn, un = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: 0,
                    isTrusted: 0
                },
                cn = an(un),
                dn = R({}, un, {
                    view: 0,
                    detail: 0
                }),
                fn = an(dn),
                Cn = R({}, dn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: kn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function(e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function(e) {
                        return "movementX" in e ? e.movementX : (e !== sn && (sn && "mousemove" === e.type ? (on = e.screenX - sn.screenX, ln = e.screenY - sn.screenY) : ln = on = 0, sn = e), on)
                    },
                    movementY: function(e) {
                        return "movementY" in e ? e.movementY : ln
                    }
                }),
                pn = an(Cn),
                mn = an(R({}, Cn, {
                    dataTransfer: 0
                })),
                hn = an(R({}, dn, {
                    relatedTarget: 0
                })),
                vn = an(R({}, un, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                yn = R({}, un, {
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }),
                gn = an(yn),
                bn = an(R({}, un, {
                    data: 0
                })),
                xn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                wn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                Sn = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function Mn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
            }

            function kn() {
                return Mn
            }
            var En = R({}, dn, {
                    key: function(e) {
                        if (e.key) {
                            var t = xn[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? wn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: kn,
                    charCode: function(e) {
                        return "keypress" === e.type ? tn(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                }),
                Ln = an(En),
                _n = an(R({}, Cn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                Pn = an(R({}, dn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: kn
                })),
                Bn = an(R({}, un, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                Zn = R({}, Cn, {
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                }),
                Vn = an(Zn),
                On = [9, 13, 27, 32],
                Tn = c && "CompositionEvent" in window,
                An = null;
            c && "documentMode" in document && (An = document.documentMode);
            var In = c && "TextEvent" in window && !An,
                Rn = c && (!Tn || An && 8 < An && 11 >= An),
                jn = String.fromCharCode(32),
                Nn = !1;

            function zn(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== On.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Hn(e) {
                return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Fn = !1;
            var Dn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Un(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Dn[e.type] : "textarea" === t
            }

            function Wn(e, t, n, r) {
                Ee(r), 0 < (t = $r(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var $n = null,
                qn = null;

            function Qn(e) {
                jr(e, 0)
            }

            function Gn(e) {
                if (q(ba(e))) return e
            }

            function Kn(e, t) {
                if ("change" === e) return t
            }
            var Xn = !1;
            if (c) {
                var Yn;
                if (c) {
                    var Jn = "oninput" in document;
                    if (!Jn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
                    }
                    Yn = Jn
                } else Yn = !1;
                Xn = Yn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                $n && ($n.detachEvent("onpropertychange", nr), qn = $n = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Gn(qn)) {
                    var t = [];
                    Wn(t, qn, e, xe(e)), Ze(Qn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), qn = n, ($n = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function ar(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(qn)
            }

            function ir(e, t) {
                if ("click" === e) return Gn(t)
            }

            function or(e, t) {
                if ("input" === e || "change" === e) return Gn(t)
            }
            var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function sr(e, t) {
                if (lr(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var a = n[r];
                    if (!d.call(t, a) || !lr(e[a], t[a])) return !1
                }
                return !0
            }

            function ur(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function cr(e, t) {
                var n, r = ur(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = ur(r)
                }
            }

            function dr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function fr() {
                for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = Q((e = t.contentWindow).document)
                }
                return t
            }

            function Cr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function pr(e) {
                var t = fr(),
                    n = e.focusedElem,
                    r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && Cr(n))
                        if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                        else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var a = n.textContent.length,
                            i = Math.min(r.start, a);
                        r = void 0 === r.end ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = cr(n, i);
                        var o = cr(n, r);
                        a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }
            var mr = c && "documentMode" in document && 11 >= document.documentMode,
                hr = null,
                vr = null,
                yr = null,
                gr = !1;

            function br(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                gr || null == hr || hr !== Q(r) || ("selectionStart" in (r = hr) && Cr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, yr && sr(yr, r) || (yr = r, 0 < (r = $r(vr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = hr)))
            }

            function xr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var wr = {
                    animationend: xr("Animation", "AnimationEnd"),
                    animationiteration: xr("Animation", "AnimationIteration"),
                    animationstart: xr("Animation", "AnimationStart"),
                    transitionend: xr("Transition", "TransitionEnd")
                },
                Sr = {},
                Mr = {};

            function kr(e) {
                if (Sr[e]) return Sr[e];
                if (!wr[e]) return e;
                var t, n = wr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Mr) return Sr[e] = n[t];
                return e
            }
            c && (Mr = document.createElement("div").style, "AnimationEvent" in window || (delete wr.animationend.animation, delete wr.animationiteration.animation, delete wr.animationstart.animation), "TransitionEvent" in window || delete wr.transitionend.transition);
            var Er = kr("animationend"),
                Lr = kr("animationiteration"),
                _r = kr("animationstart"),
                Pr = kr("transitionend"),
                Br = new Map,
                Zr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Vr(e, t) {
                Br.set(e, t), s(t, [e])
            }
            for (var Or = 0; Or < Zr.length; Or++) {
                var Tr = Zr[Or];
                Vr(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)))
            }
            Vr(Er, "onAnimationEnd"), Vr(Lr, "onAnimationIteration"), Vr(_r, "onAnimationStart"), Vr("dblclick", "onDoubleClick"), Vr("focusin", "onFocus"), Vr("focusout", "onBlur"), Vr(Pr, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Ir = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

            function Rr(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                    function(e, t, n, r, a, o, l, s, u) {
                        if (He.apply(this, arguments), Ie) {
                            if (!Ie) throw Error(i(198));
                            var c = Re;
                            Ie = !1, Re = null, je || (je = !0, Ne = c)
                        }
                    }(r, t, void 0, e), e.currentTarget = null
            }

            function jr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        a = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var l = r[o],
                                    s = l.instance,
                                    u = l.currentTarget;
                                if (l = l.listener, s !== i && a.isPropagationStopped()) break e;
                                Rr(a, l, u), i = s
                            } else
                                for (o = 0; o < r.length; o++) {
                                    if (s = (l = r[o]).instance, u = l.currentTarget, l = l.listener, s !== i && a.isPropagationStopped()) break e;
                                    Rr(a, l, u), i = s
                                }
                    }
                }
                if (je) throw e = Ne, je = !1, Ne = null, e
            }

            function Nr(e, t) {
                var n = t[ma];
                void 0 === n && (n = t[ma] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Dr(t, e, 2, !1), n.add(r))
            }

            function zr(e, t, n) {
                var r = 0;
                t && (r |= 4), Dr(n, e, r, t)
            }
            var Hr = "_reactListening" + Math.random().toString(36).slice(2);

            function Fr(e) {
                if (!e[Hr]) {
                    e[Hr] = !0, o.forEach((function(t) {
                        "selectionchange" !== t && (Ir.has(t) || zr(t, !1, e), zr(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Hr] || (t[Hr] = !0, zr("selectionchange", !1, t))
                }
            }

            function Dr(e, t, n, r) {
                switch (Kt(t)) {
                    case 1:
                        var a = Wt;
                        break;
                    case 4:
                        a = $t;
                        break;
                    default:
                        a = qt
                }
                n = a.bind(null, t, n, e), a = void 0, !Oe || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: a
                }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
                    passive: a
                }) : e.addEventListener(t, n, !1)
            }

            function Ur(e, t, n, r, a) {
                var i = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                    if (null === r) return;
                    var o = r.tag;
                    if (3 === o || 4 === o) {
                        var l = r.stateNode.containerInfo;
                        if (l === a || 8 === l.nodeType && l.parentNode === a) break;
                        if (4 === o)
                            for (o = r.return; null !== o;) {
                                var s = o.tag;
                                if ((3 === s || 4 === s) && ((s = o.stateNode.containerInfo) === a || 8 === s.nodeType && s.parentNode === a)) return;
                                o = o.return
                            }
                        for (; null !== l;) {
                            if (null === (o = ya(l))) return;
                            if (5 === (s = o.tag) || 6 === s) {
                                r = i = o;
                                continue e
                            }
                            l = l.parentNode
                        }
                    }
                    r = r.return
                }
                Ze((function() {
                    var r = i,
                        a = xe(n),
                        o = [];
                    e: {
                        var l = Br.get(e);
                        if (void 0 !== l) {
                            var s = cn,
                                u = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === tn(n)) break e;
                                case "keydown":
                                case "keyup":
                                    s = Ln;
                                    break;
                                case "focusin":
                                    u = "focus", s = hn;
                                    break;
                                case "focusout":
                                    u = "blur", s = hn;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    s = hn;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    s = pn;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    s = mn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    s = Pn;
                                    break;
                                case Er:
                                case Lr:
                                case _r:
                                    s = vn;
                                    break;
                                case Pr:
                                    s = Bn;
                                    break;
                                case "scroll":
                                    s = fn;
                                    break;
                                case "wheel":
                                    s = Vn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    s = gn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    s = _n
                            }
                            var c = 0 !== (4 & t),
                                d = !c && "scroll" === e,
                                f = c ? null !== l ? l + "Capture" : null : l;
                            c = [];
                            for (var C, p = r; null !== p;) {
                                var m = (C = p).stateNode;
                                if (5 === C.tag && null !== m && (C = m, null !== f && (null != (m = Ve(p, f)) && c.push(Wr(p, m, C)))), d) break;
                                p = p.return
                            }
                            0 < c.length && (l = new s(l, u, null, n, a), o.push({
                                event: l,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === be || !(u = n.relatedTarget || n.fromElement) || !ya(u) && !u[pa]) && (s || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, s ? (s = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ya(u) : null) && (u !== (d = Fe(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (s = null, u = r), s !== u)) {
                            if (c = pn, m = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = _n, m = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == s ? l : ba(s), C = null == u ? l : ba(u), (l = new c(m, p + "leave", s, n, a)).target = d, l.relatedTarget = C, m = null, ya(a) === r && ((c = new c(f, p + "enter", u, n, a)).target = C, c.relatedTarget = d, m = c), d = m, s && u) e: {
                                for (f = u, p = 0, C = c = s; C; C = qr(C)) p++;
                                for (C = 0, m = f; m; m = qr(m)) C++;
                                for (; 0 < p - C;) c = qr(c),
                                p--;
                                for (; 0 < C - p;) f = qr(f),
                                C--;
                                for (; p--;) {
                                    if (c === f || null !== f && c === f.alternate) break e;
                                    c = qr(c), f = qr(f)
                                }
                                c = null
                            }
                            else c = null;
                            null !== s && Qr(o, l, s, c, !1), null !== u && null !== d && Qr(o, d, u, c, !0)
                        }
                        if ("select" === (s = (l = r ? ba(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === s && "file" === l.type) var h = Kn;
                        else if (Un(l))
                            if (Xn) h = or;
                            else {
                                h = ar;
                                var v = rr
                            }
                        else(s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (h = ir);
                        switch (h && (h = h(e, r)) ? Wn(o, h, n, a) : (v && v(e, l, r), "focusout" === e && (v = l._wrapperState) && v.controlled && "number" === l.type && ee(l, "number", l.value)), v = r ? ba(r) : window, e) {
                            case "focusin":
                                (Un(v) || "true" === v.contentEditable) && (hr = v, vr = r, yr = null);
                                break;
                            case "focusout":
                                yr = vr = hr = null;
                                break;
                            case "mousedown":
                                gr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                gr = !1, br(o, n, a);
                                break;
                            case "selectionchange":
                                if (mr) break;
                            case "keydown":
                            case "keyup":
                                br(o, n, a)
                        }
                        var y;
                        if (Tn) e: {
                            switch (e) {
                                case "compositionstart":
                                    var g = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    g = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    g = "onCompositionUpdate";
                                    break e
                            }
                            g = void 0
                        }
                        else Fn ? zn(e, n) && (g = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (g = "onCompositionStart");
                        g && (Rn && "ko" !== n.locale && (Fn || "onCompositionStart" !== g ? "onCompositionEnd" === g && Fn && (y = en()) : (Yt = "value" in (Xt = a) ? Xt.value : Xt.textContent, Fn = !0)), 0 < (v = $r(r, g)).length && (g = new bn(g, e, null, n, a), o.push({
                            event: g,
                            listeners: v
                        }), y ? g.data = y : null !== (y = Hn(n)) && (g.data = y))), (y = In ? function(e, t) {
                            switch (e) {
                                case "compositionend":
                                    return Hn(t);
                                case "keypress":
                                    return 32 !== t.which ? null : (Nn = !0, jn);
                                case "textInput":
                                    return (e = t.data) === jn && Nn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function(e, t) {
                            if (Fn) return "compositionend" === e || !Tn && zn(e, t) ? (e = en(), Jt = Yt = Xt = null, Fn = !1, e) : null;
                            switch (e) {
                                case "paste":
                                default:
                                    return null;
                                case "keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case "compositionend":
                                    return Rn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = $r(r, "onBeforeInput")).length && (a = new bn("onBeforeInput", "beforeinput", null, n, a), o.push({
                            event: a,
                            listeners: r
                        }), a.data = y))
                    }
                    jr(o, t)
                }))
            }

            function Wr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function $r(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var a = e,
                        i = a.stateNode;
                    5 === a.tag && null !== i && (a = i, null != (i = Ve(e, n)) && r.unshift(Wr(e, i, a)), null != (i = Ve(e, t)) && r.push(Wr(e, i, a))), e = e.return
                }
                return r
            }

            function qr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Qr(e, t, n, r, a) {
                for (var i = t._reactName, o = []; null !== n && n !== r;) {
                    var l = n,
                        s = l.alternate,
                        u = l.stateNode;
                    if (null !== s && s === r) break;
                    5 === l.tag && null !== u && (l = u, a ? null != (s = Ve(n, i)) && o.unshift(Wr(n, s, l)) : a || null != (s = Ve(n, i)) && o.push(Wr(n, s, l))), n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            var Gr = /\r\n?/g,
                Kr = /\u0000|\uFFFD/g;

            function Xr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Gr, "\n").replace(Kr, "")
            }

            function Yr(e, t, n) {
                if (t = Xr(t), Xr(e) !== t && n) throw Error(i(425))
            }

            function Jr() {}
            var ea = null,
                ta = null;

            function na(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                ia = "function" === typeof Promise ? Promise : void 0,
                oa = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ia ? function(e) {
                    return ia.resolve(null).then(e).catch(la)
                } : ra;

            function la(e) {
                setTimeout((function() {
                    throw e
                }))
            }

            function sa(e, t) {
                var n = t,
                    r = 0;
                do {
                    var a = n.nextSibling;
                    if (e.removeChild(n), a && 8 === a.nodeType)
                        if ("/$" === (n = a.data)) {
                            if (0 === r) return e.removeChild(a), void Ft(t);
                            r--
                        } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = a
                } while (n);
                Ft(t)
            }

            function ua(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function ca(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var da = Math.random().toString(36).slice(2),
                fa = "__reactFiber$" + da,
                Ca = "__reactProps$" + da,
                pa = "__reactContainer$" + da,
                ma = "__reactEvents$" + da,
                ha = "__reactListeners$" + da,
                va = "__reactHandles$" + da;

            function ya(e) {
                var t = e[fa];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[pa] || n[fa]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = ca(e); null !== e;) {
                                if (n = e[fa]) return n;
                                e = ca(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function ga(e) {
                return !(e = e[fa] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function ba(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(i(33))
            }

            function xa(e) {
                return e[Ca] || null
            }
            var wa = [],
                Sa = -1;

            function Ma(e) {
                return {
                    current: e
                }
            }

            function ka(e) {
                0 > Sa || (e.current = wa[Sa], wa[Sa] = null, Sa--)
            }

            function Ea(e, t) {
                Sa++, wa[Sa] = e.current, e.current = t
            }
            var La = {},
                _a = Ma(La),
                Pa = Ma(!1),
                Ba = La;

            function Za(e, t) {
                var n = e.type.contextTypes;
                if (!n) return La;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var a, i = {};
                for (a in n) i[a] = t[a];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
            }

            function Va(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function Oa() {
                ka(Pa), ka(_a)
            }

            function Ta(e, t, n) {
                if (_a.current !== La) throw Error(i(168));
                Ea(_a, t), Ea(Pa, n)
            }

            function Aa(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var a in r = r.getChildContext())
                    if (!(a in t)) throw Error(i(108, D(e) || "Unknown", a));
                return R({}, n, r)
            }

            function Ia(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || La, Ba = _a.current, Ea(_a, e), Ea(Pa, Pa.current), !0
            }

            function Ra(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(i(169));
                n ? (e = Aa(e, t, Ba), r.__reactInternalMemoizedMergedChildContext = e, ka(Pa), ka(_a), Ea(_a, e)) : ka(Pa), Ea(Pa, n)
            }
            var ja = null,
                Na = !1,
                za = !1;

            function Ha(e) {
                null === ja ? ja = [e] : ja.push(e)
            }

            function Fa() {
                if (!za && null !== ja) {
                    za = !0;
                    var e = 0,
                        t = gt;
                    try {
                        var n = ja;
                        for (gt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        ja = null, Na = !1
                    } catch (a) {
                        throw null !== ja && (ja = ja.slice(e + 1)), qe(Je, Fa), a
                    } finally {
                        gt = t, za = !1
                    }
                }
                return null
            }
            var Da = [],
                Ua = 0,
                Wa = null,
                $a = 0,
                qa = [],
                Qa = 0,
                Ga = null,
                Ka = 1,
                Xa = "";

            function Ya(e, t) {
                Da[Ua++] = $a, Da[Ua++] = Wa, Wa = e, $a = t
            }

            function Ja(e, t, n) {
                qa[Qa++] = Ka, qa[Qa++] = Xa, qa[Qa++] = Ga, Ga = e;
                var r = Ka;
                e = Xa;
                var a = 32 - ot(r) - 1;
                r &= ~(1 << a), n += 1;
                var i = 32 - ot(t) + a;
                if (30 < i) {
                    var o = a - a % 5;
                    i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Ka = 1 << 32 - ot(t) + a | n << a | r, Xa = i + e
                } else Ka = 1 << i | n << a | r, Xa = e
            }

            function ei(e) {
                null !== e.return && (Ya(e, 1), Ja(e, 1, 0))
            }

            function ti(e) {
                for (; e === Wa;) Wa = Da[--Ua], Da[Ua] = null, $a = Da[--Ua], Da[Ua] = null;
                for (; e === Ga;) Ga = qa[--Qa], qa[Qa] = null, Xa = qa[--Qa], qa[Qa] = null, Ka = qa[--Qa], qa[Qa] = null
            }
            var ni = null,
                ri = null,
                ai = !1,
                ii = null;

            function oi(e, t) {
                var n = Zu(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function li(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ni = e, ri = ua(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ni = e, ri = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ga ? {
                            id: Ka,
                            overflow: Xa
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = Zu(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ni = e, ri = null, !0);
                    default:
                        return !1
                }
            }

            function si(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function ui(e) {
                if (ai) {
                    var t = ri;
                    if (t) {
                        var n = t;
                        if (!li(e, t)) {
                            if (si(e)) throw Error(i(418));
                            t = ua(n.nextSibling);
                            var r = ni;
                            t && li(e, t) ? oi(r, n) : (e.flags = -4097 & e.flags | 2, ai = !1, ni = e)
                        }
                    } else {
                        if (si(e)) throw Error(i(418));
                        e.flags = -4097 & e.flags | 2, ai = !1, ni = e
                    }
                }
            }

            function ci(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ni = e
            }

            function di(e) {
                if (e !== ni) return !1;
                if (!ai) return ci(e), ai = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ri)) {
                    if (si(e)) throw fi(), Error(i(418));
                    for (; t;) oi(e, t), t = ua(t.nextSibling)
                }
                if (ci(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        ri = ua(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        ri = null
                    }
                } else ri = ni ? ua(e.stateNode.nextSibling) : null;
                return !0
            }

            function fi() {
                for (var e = ri; e;) e = ua(e.nextSibling)
            }

            function Ci() {
                ri = ni = null, ai = !1
            }

            function pi(e) {
                null === ii ? ii = [e] : ii.push(e)
            }
            var mi = b.ReactCurrentBatchConfig;

            function hi(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = R({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var vi = Ma(null),
                yi = null,
                gi = null,
                bi = null;

            function xi() {
                bi = gi = yi = null
            }

            function wi(e) {
                var t = vi.current;
                ka(vi), e._currentValue = t
            }

            function Si(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Mi(e, t) {
                yi = e, bi = gi = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bl = !0), e.firstContext = null)
            }

            function ki(e) {
                var t = e._currentValue;
                if (bi !== e)
                    if (e = {
                            context: e,
                            memoizedValue: t,
                            next: null
                        }, null === gi) {
                        if (null === yi) throw Error(i(308));
                        gi = e, yi.dependencies = {
                            lanes: 0,
                            firstContext: e
                        }
                    } else gi = gi.next = e;
                return t
            }
            var Ei = null;

            function Li(e) {
                null === Ei ? Ei = [e] : Ei.push(e)
            }

            function _i(e, t, n, r) {
                var a = t.interleaved;
                return null === a ? (n.next = n, Li(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Pi(e, r)
            }

            function Pi(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            var Bi = !1;

            function Zi(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                }
            }

            function Vi(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Oi(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function Ti(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & _s)) {
                    var a = r.pending;
                    return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Pi(e, n)
                }
                return null === (a = r.interleaved) ? (t.next = t, Li(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Pi(e, n)
            }

            function Ai(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }

            function Ii(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var a = null,
                        i = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === i ? a = i = o : i = i.next = o, n = n.next
                        } while (null !== n);
                        null === i ? a = i = t : i = i.next = t
                    } else a = i = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: a,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    }, void(e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Ri(e, t, n, r) {
                var a = e.updateQueue;
                Bi = !1;
                var i = a.firstBaseUpdate,
                    o = a.lastBaseUpdate,
                    l = a.shared.pending;
                if (null !== l) {
                    a.shared.pending = null;
                    var s = l,
                        u = s.next;
                    s.next = null, null === o ? i = u : o.next = u, o = s;
                    var c = e.alternate;
                    null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== o && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = s))
                }
                if (null !== i) {
                    var d = a.baseState;
                    for (o = 0, c = u = s = null, l = i;;) {
                        var f = l.lane,
                            C = l.eventTime;
                        if ((r & f) === f) {
                            null !== c && (c = c.next = {
                                eventTime: C,
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: l.callback,
                                next: null
                            });
                            e: {
                                var p = e,
                                    m = l;
                                switch (f = t, C = n, m.tag) {
                                    case 1:
                                        if ("function" === typeof(p = m.payload)) {
                                            d = p.call(C, d, f);
                                            break e
                                        }
                                        d = p;
                                        break e;
                                    case 3:
                                        p.flags = -65537 & p.flags | 128;
                                    case 0:
                                        if (null === (f = "function" === typeof(p = m.payload) ? p.call(C, d, f) : p) || void 0 === f) break e;
                                        d = R({}, d, f);
                                        break e;
                                    case 2:
                                        Bi = !0
                                }
                            }
                            null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [l] : f.push(l))
                        } else C = {
                            eventTime: C,
                            lane: f,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null
                        }, null === c ? (u = c = C, s = d) : c = c.next = C, o |= f;
                        if (null === (l = l.next)) {
                            if (null === (l = a.shared.pending)) break;
                            l = (f = l).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null
                        }
                    }
                    if (null === c && (s = d), a.baseState = s, a.firstBaseUpdate = u, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                        a = t;
                        do {
                            o |= a.lane, a = a.next
                        } while (a !== t)
                    } else null === i && (a.shared.lanes = 0);
                    Is |= o, e.lanes = o, e.memoizedState = d
                }
            }

            function ji(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = r.callback;
                        if (null !== a) {
                            if (r.callback = null, r = n, "function" !== typeof a) throw Error(i(191, a));
                            a.call(r)
                        }
                    }
            }
            var Ni = (new r.Component).refs;

            function zi(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : R({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var Hi = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Fe(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu(),
                        a = tu(e),
                        i = Oi(r, a);
                    i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Ti(e, i, a)) && (nu(t, e, a, r), Ai(t, e, a))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = eu(),
                        a = tu(e),
                        i = Oi(r, a);
                    i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = Ti(e, i, a)) && (nu(t, e, a, r), Ai(t, e, a))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = eu(),
                        r = tu(e),
                        a = Oi(n, r);
                    a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Ti(e, a, r)) && (nu(t, e, r, n), Ai(t, e, r))
                }
            };

            function Fi(e, t, n, r, a, i, o) {
                return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!sr(n, r) || !sr(a, i))
            }

            function Di(e, t, n) {
                var r = !1,
                    a = La,
                    i = t.contextType;
                return "object" === typeof i && null !== i ? i = ki(i) : (a = Va(t) ? Ba : _a.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Za(e, a) : La), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Hi, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t
            }

            function Ui(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hi.enqueueReplaceState(t, t.state, null)
            }

            function Wi(e, t, n, r) {
                var a = e.stateNode;
                a.props = n, a.state = e.memoizedState, a.refs = Ni, Zi(e);
                var i = t.contextType;
                "object" === typeof i && null !== i ? a.context = ki(i) : (i = Va(t) ? Ba : _a.current, a.context = Za(e, i)), a.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (zi(e, t, i, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Hi.enqueueReplaceState(a, a.state, null), Ri(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
            }

            function $i(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(i(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(i(147, e));
                        var a = r,
                            o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                            var t = a.refs;
                            t === Ni && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e
                        }, t._stringRef = o, t)
                    }
                    if ("string" !== typeof e) throw Error(i(284));
                    if (!n._owner) throw Error(i(290, e))
                }
                return e
            }

            function qi(e, t) {
                throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Qi(e) {
                return (0, e._init)(e._payload)
            }

            function Gi(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function a(e, t) {
                    return (e = Ou(e, t)).index = 0, e.sibling = null, e
                }

                function o(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function l(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function s(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Ru(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function u(e, t, n, r) {
                    var i = n.type;
                    return i === S ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === V && Qi(i) === t.type) ? ((r = a(t, n.props)).ref = $i(e, t, n), r.return = e, r) : ((r = Tu(n.type, n.key, n.props, null, e.mode, r)).ref = $i(e, t, n), r.return = e, r)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = ju(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function d(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = Au(n, e.mode, r, i)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function f(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Ru("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case x:
                                return (n = Tu(t.type, t.key, t.props, null, e.mode, n)).ref = $i(e, null, t), n.return = e, n;
                            case w:
                                return (t = ju(t, e.mode, n)).return = e, t;
                            case V:
                                return f(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || A(t)) return (t = Au(t, e.mode, n, null)).return = e, t;
                        qi(e, t)
                    }
                    return null
                }

                function C(e, t, n, r) {
                    var a = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : s(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case x:
                                return n.key === a ? u(e, t, n, r) : null;
                            case w:
                                return n.key === a ? c(e, t, n, r) : null;
                            case V:
                                return C(e, t, (a = n._init)(n._payload), r)
                        }
                        if (te(n) || A(n)) return null !== a ? null : d(e, t, n, r, null);
                        qi(e, n)
                    }
                    return null
                }

                function p(e, t, n, r, a) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return s(t, e = e.get(n) || null, "" + r, a);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case x:
                                return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case w:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                            case V:
                                return p(e, t, n, (0, r._init)(r._payload), a)
                        }
                        if (te(r) || A(r)) return d(t, e = e.get(n) || null, r, a, null);
                        qi(t, r)
                    }
                    return null
                }

                function m(a, i, l, s) {
                    for (var u = null, c = null, d = i, m = i = 0, h = null; null !== d && m < l.length; m++) {
                        d.index > m ? (h = d, d = null) : h = d.sibling;
                        var v = C(a, d, l[m], s);
                        if (null === v) {
                            null === d && (d = h);
                            break
                        }
                        e && d && null === v.alternate && t(a, d), i = o(v, i, m), null === c ? u = v : c.sibling = v, c = v, d = h
                    }
                    if (m === l.length) return n(a, d), ai && Ya(a, m), u;
                    if (null === d) {
                        for (; m < l.length; m++) null !== (d = f(a, l[m], s)) && (i = o(d, i, m), null === c ? u = d : c.sibling = d, c = d);
                        return ai && Ya(a, m), u
                    }
                    for (d = r(a, d); m < l.length; m++) null !== (h = p(d, a, m, l[m], s)) && (e && null !== h.alternate && d.delete(null === h.key ? m : h.key), i = o(h, i, m), null === c ? u = h : c.sibling = h, c = h);
                    return e && d.forEach((function(e) {
                        return t(a, e)
                    })), ai && Ya(a, m), u
                }

                function h(a, l, s, u) {
                    var c = A(s);
                    if ("function" !== typeof c) throw Error(i(150));
                    if (null == (s = c.call(s))) throw Error(i(151));
                    for (var d = c = null, m = l, h = l = 0, v = null, y = s.next(); null !== m && !y.done; h++, y = s.next()) {
                        m.index > h ? (v = m, m = null) : v = m.sibling;
                        var g = C(a, m, y.value, u);
                        if (null === g) {
                            null === m && (m = v);
                            break
                        }
                        e && m && null === g.alternate && t(a, m), l = o(g, l, h), null === d ? c = g : d.sibling = g, d = g, m = v
                    }
                    if (y.done) return n(a, m), ai && Ya(a, h), c;
                    if (null === m) {
                        for (; !y.done; h++, y = s.next()) null !== (y = f(a, y.value, u)) && (l = o(y, l, h), null === d ? c = y : d.sibling = y, d = y);
                        return ai && Ya(a, h), c
                    }
                    for (m = r(a, m); !y.done; h++, y = s.next()) null !== (y = p(m, a, h, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? h : y.key), l = o(y, l, h), null === d ? c = y : d.sibling = y, d = y);
                    return e && m.forEach((function(e) {
                        return t(a, e)
                    })), ai && Ya(a, h), c
                }
                return function e(r, i, o, s) {
                    if ("object" === typeof o && null !== o && o.type === S && null === o.key && (o = o.props.children), "object" === typeof o && null !== o) {
                        switch (o.$$typeof) {
                            case x:
                                e: {
                                    for (var u = o.key, c = i; null !== c;) {
                                        if (c.key === u) {
                                            if ((u = o.type) === S) {
                                                if (7 === c.tag) {
                                                    n(r, c.sibling), (i = a(c, o.props.children)).return = r, r = i;
                                                    break e
                                                }
                                            } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === V && Qi(u) === c.type) {
                                                n(r, c.sibling), (i = a(c, o.props)).ref = $i(r, c, o), i.return = r, r = i;
                                                break e
                                            }
                                            n(r, c);
                                            break
                                        }
                                        t(r, c), c = c.sibling
                                    }
                                    o.type === S ? ((i = Au(o.props.children, r.mode, s, o.key)).return = r, r = i) : ((s = Tu(o.type, o.key, o.props, null, r.mode, s)).ref = $i(r, i, o), s.return = r, r = s)
                                }
                                return l(r);
                            case w:
                                e: {
                                    for (c = o.key; null !== i;) {
                                        if (i.key === c) {
                                            if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                n(r, i.sibling), (i = a(i, o.children || [])).return = r, r = i;
                                                break e
                                            }
                                            n(r, i);
                                            break
                                        }
                                        t(r, i), i = i.sibling
                                    }(i = ju(o, r.mode, s)).return = r,
                                    r = i
                                }
                                return l(r);
                            case V:
                                return e(r, i, (c = o._init)(o._payload), s)
                        }
                        if (te(o)) return m(r, i, o, s);
                        if (A(o)) return h(r, i, o, s);
                        qi(r, o)
                    }
                    return "string" === typeof o && "" !== o || "number" === typeof o ? (o = "" + o, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = a(i, o)).return = r, r = i) : (n(r, i), (i = Ru(o, r.mode, s)).return = r, r = i), l(r)) : n(r, i)
                }
            }
            var Ki = Gi(!0),
                Xi = Gi(!1),
                Yi = {},
                Ji = Ma(Yi),
                eo = Ma(Yi),
                to = Ma(Yi);

            function no(e) {
                if (e === Yi) throw Error(i(174));
                return e
            }

            function ro(e, t) {
                switch (Ea(to, t), Ea(eo, e), Ea(Ji, Yi), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
                        break;
                    default:
                        t = se(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                ka(Ji), Ea(Ji, t)
            }

            function ao() {
                ka(Ji), ka(eo), ka(to)
            }

            function io(e) {
                no(to.current);
                var t = no(Ji.current),
                    n = se(t, e.type);
                t !== n && (Ea(eo, e), Ea(Ji, n))
            }

            function oo(e) {
                eo.current === e && (ka(Ji), ka(eo))
            }
            var lo = Ma(0);

            function so(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var uo = [];

            function co() {
                for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
                uo.length = 0
            }
            var fo = b.ReactCurrentDispatcher,
                Co = b.ReactCurrentBatchConfig,
                po = 0,
                mo = null,
                ho = null,
                vo = null,
                yo = !1,
                go = !1,
                bo = 0,
                xo = 0;

            function wo() {
                throw Error(i(321))
            }

            function So(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!lr(e[n], t[n])) return !1;
                return !0
            }

            function Mo(e, t, n, r, a, o) {
                if (po = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ll : sl, e = n(r, a), go) {
                    o = 0;
                    do {
                        if (go = !1, bo = 0, 25 <= o) throw Error(i(301));
                        o += 1, vo = ho = null, t.updateQueue = null, fo.current = ul, e = n(r, a)
                    } while (go)
                }
                if (fo.current = ol, t = null !== ho && null !== ho.next, po = 0, vo = ho = mo = null, yo = !1, t) throw Error(i(300));
                return e
            }

            function ko() {
                var e = 0 !== bo;
                return bo = 0, e
            }

            function Eo() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === vo ? mo.memoizedState = vo = e : vo = vo.next = e, vo
            }

            function Lo() {
                if (null === ho) {
                    var e = mo.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = ho.next;
                var t = null === vo ? mo.memoizedState : vo.next;
                if (null !== t) vo = t, ho = e;
                else {
                    if (null === e) throw Error(i(310));
                    e = {
                        memoizedState: (ho = e).memoizedState,
                        baseState: ho.baseState,
                        baseQueue: ho.baseQueue,
                        queue: ho.queue,
                        next: null
                    }, null === vo ? mo.memoizedState = vo = e : vo = vo.next = e
                }
                return vo
            }

            function _o(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function Po(e) {
                var t = Lo(),
                    n = t.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = ho,
                    a = r.baseQueue,
                    o = n.pending;
                if (null !== o) {
                    if (null !== a) {
                        var l = a.next;
                        a.next = o.next, o.next = l
                    }
                    r.baseQueue = a = o, n.pending = null
                }
                if (null !== a) {
                    o = a.next, r = r.baseState;
                    var s = l = null,
                        u = null,
                        c = o;
                    do {
                        var d = c.lane;
                        if ((po & d) === d) null !== u && (u = u.next = {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                        else {
                            var f = {
                                lane: d,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === u ? (s = u = f, l = r) : u = u.next = f, mo.lanes |= d, Is |= d
                        }
                        c = c.next
                    } while (null !== c && c !== o);
                    null === u ? l = r : u.next = s, lr(r, t.memoizedState) || (bl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    a = e;
                    do {
                        o = a.lane, mo.lanes |= o, Is |= o, a = a.next
                    } while (a !== e)
                } else null === a && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function Bo(e) {
                var t = Lo(),
                    n = t.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    a = n.pending,
                    o = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var l = a = a.next;
                    do {
                        o = e(o, l.action), l = l.next
                    } while (l !== a);
                    lr(o, t.memoizedState) || (bl = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                }
                return [o, r]
            }

            function Zo() {}

            function Vo(e, t) {
                var n = mo,
                    r = Lo(),
                    a = t(),
                    o = !lr(r.memoizedState, a);
                if (o && (r.memoizedState = a, bl = !0), r = r.queue, Uo(Ao.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== vo && 1 & vo.memoizedState.tag) {
                    if (n.flags |= 2048, No(9, To.bind(null, n, r, a, t), void 0, null), null === Ps) throw Error(i(349));
                    0 !== (30 & po) || Oo(n, t, a)
                }
                return a
            }

            function Oo(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = mo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function To(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Io(t) && Ro(e)
            }

            function Ao(e, t, n) {
                return n((function() {
                    Io(t) && Ro(e)
                }))
            }

            function Io(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !lr(e, n)
                } catch (r) {
                    return !0
                }
            }

            function Ro(e) {
                var t = Pi(e, 1);
                null !== t && nu(t, e, 1, -1)
            }

            function jo(e) {
                var t = Eo();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: _o,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = nl.bind(null, mo, e), [t.memoizedState, e]
            }

            function No(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = mo.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function zo() {
                return Lo().memoizedState
            }

            function Ho(e, t, n, r) {
                var a = Eo();
                mo.flags |= e, a.memoizedState = No(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Fo(e, t, n, r) {
                var a = Lo();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== ho) {
                    var o = ho.memoizedState;
                    if (i = o.destroy, null !== r && So(r, o.deps)) return void(a.memoizedState = No(t, n, i, r))
                }
                mo.flags |= e, a.memoizedState = No(1 | t, n, i, r)
            }

            function Do(e, t) {
                return Ho(8390656, 8, e, t)
            }

            function Uo(e, t) {
                return Fo(2048, 8, e, t)
            }

            function Wo(e, t) {
                return Fo(4, 2, e, t)
            }

            function $o(e, t) {
                return Fo(4, 4, e, t)
            }

            function qo(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function() {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                    t.current = null
                }) : void 0
            }

            function Qo(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, Fo(4, 4, qo.bind(null, t, e), n)
            }

            function Go() {}

            function Ko(e, t) {
                var n = Lo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Xo(e, t) {
                var n = Lo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && So(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Yo(e, t, n) {
                return 0 === (21 & po) ? (e.baseState && (e.baseState = !1, bl = !0), e.memoizedState = n) : (lr(n, t) || (n = mt(), mo.lanes |= n, Is |= n, e.baseState = !0), t)
            }

            function Jo(e, t) {
                var n = gt;
                gt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = Co.transition;
                Co.transition = {};
                try {
                    e(!1), t()
                } finally {
                    gt = n, Co.transition = r
                }
            }

            function el() {
                return Lo().memoizedState
            }

            function tl(e, t, n) {
                var r = tu(e);
                if (n = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, rl(e)) al(t, n);
                else if (null !== (n = _i(e, t, n, r))) {
                    nu(n, e, r, eu()), il(n, t, r)
                }
            }

            function nl(e, t, n) {
                var r = tu(e),
                    a = {
                        lane: r,
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    };
                if (rl(e)) al(t, a);
                else {
                    var i = e.alternate;
                    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                        var o = t.lastRenderedState,
                            l = i(o, n);
                        if (a.hasEagerState = !0, a.eagerState = l, lr(l, o)) {
                            var s = t.interleaved;
                            return null === s ? (a.next = a, Li(t)) : (a.next = s.next, s.next = a), void(t.interleaved = a)
                        }
                    } catch (u) {}
                    null !== (n = _i(e, t, a, r)) && (nu(n, e, r, a = eu()), il(n, t, r))
                }
            }

            function rl(e) {
                var t = e.alternate;
                return e === mo || null !== t && t === mo
            }

            function al(e, t) {
                go = yo = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function il(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                }
            }
            var ol = {
                    readContext: ki,
                    useCallback: wo,
                    useContext: wo,
                    useEffect: wo,
                    useImperativeHandle: wo,
                    useInsertionEffect: wo,
                    useLayoutEffect: wo,
                    useMemo: wo,
                    useReducer: wo,
                    useRef: wo,
                    useState: wo,
                    useDebugValue: wo,
                    useDeferredValue: wo,
                    useTransition: wo,
                    useMutableSource: wo,
                    useSyncExternalStore: wo,
                    useId: wo,
                    unstable_isNewReconciler: !1
                },
                ll = {
                    readContext: ki,
                    useCallback: function(e, t) {
                        return Eo().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: ki,
                    useEffect: Do,
                    useImperativeHandle: function(e, t, n) {
                        return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ho(4194308, 4, qo.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return Ho(4194308, 4, e, t)
                    },
                    useInsertionEffect: function(e, t) {
                        return Ho(4, 2, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = Eo();
                        return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                    },
                    useReducer: function(e, t, n) {
                        var r = Eo();
                        return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                            pending: null,
                            interleaved: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: t
                        }, r.queue = e, e = e.dispatch = tl.bind(null, mo, e), [r.memoizedState, e]
                    },
                    useRef: function(e) {
                        return e = {
                            current: e
                        }, Eo().memoizedState = e
                    },
                    useState: jo,
                    useDebugValue: Go,
                    useDeferredValue: function(e) {
                        return Eo().memoizedState = e
                    },
                    useTransition: function() {
                        var e = jo(!1),
                            t = e[0];
                        return e = Jo.bind(null, e[1]), Eo().memoizedState = e, [t, e]
                    },
                    useMutableSource: function() {},
                    useSyncExternalStore: function(e, t, n) {
                        var r = mo,
                            a = Eo();
                        if (ai) {
                            if (void 0 === n) throw Error(i(407));
                            n = n()
                        } else {
                            if (n = t(), null === Ps) throw Error(i(349));
                            0 !== (30 & po) || Oo(r, t, n)
                        }
                        a.memoizedState = n;
                        var o = {
                            value: n,
                            getSnapshot: t
                        };
                        return a.queue = o, Do(Ao.bind(null, r, o, e), [e]), r.flags |= 2048, No(9, To.bind(null, r, o, n, t), void 0, null), n
                    },
                    useId: function() {
                        var e = Eo(),
                            t = Ps.identifierPrefix;
                        if (ai) {
                            var n = Xa;
                            t = ":" + t + "R" + (n = (Ka & ~(1 << 32 - ot(Ka) - 1)).toString(32) + n), 0 < (n = bo++) && (t += "H" + n.toString(32)), t += ":"
                        } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
                        return e.memoizedState = t
                    },
                    unstable_isNewReconciler: !1
                },
                sl = {
                    readContext: ki,
                    useCallback: Ko,
                    useContext: ki,
                    useEffect: Uo,
                    useImperativeHandle: Qo,
                    useInsertionEffect: Wo,
                    useLayoutEffect: $o,
                    useMemo: Xo,
                    useReducer: Po,
                    useRef: zo,
                    useState: function() {
                        return Po(_o)
                    },
                    useDebugValue: Go,
                    useDeferredValue: function(e) {
                        return Yo(Lo(), ho.memoizedState, e)
                    },
                    useTransition: function() {
                        return [Po(_o)[0], Lo().memoizedState]
                    },
                    useMutableSource: Zo,
                    useSyncExternalStore: Vo,
                    useId: el,
                    unstable_isNewReconciler: !1
                },
                ul = {
                    readContext: ki,
                    useCallback: Ko,
                    useContext: ki,
                    useEffect: Uo,
                    useImperativeHandle: Qo,
                    useInsertionEffect: Wo,
                    useLayoutEffect: $o,
                    useMemo: Xo,
                    useReducer: Bo,
                    useRef: zo,
                    useState: function() {
                        return Bo(_o)
                    },
                    useDebugValue: Go,
                    useDeferredValue: function(e) {
                        var t = Lo();
                        return null === ho ? t.memoizedState = e : Yo(t, ho.memoizedState, e)
                    },
                    useTransition: function() {
                        return [Bo(_o)[0], Lo().memoizedState]
                    },
                    useMutableSource: Zo,
                    useSyncExternalStore: Vo,
                    useId: el,
                    unstable_isNewReconciler: !1
                };

            function cl(e, t) {
                try {
                    var n = "",
                        r = t;
                    do {
                        n += H(r), r = r.return
                    } while (r);
                    var a = n
                } catch (i) {
                    a = "\nError generating stack: " + i.message + "\n" + i.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: a,
                    digest: null
                }
            }

            function dl(e, t, n) {
                return {
                    value: e,
                    source: null,
                    stack: null != n ? n : null,
                    digest: null != t ? t : null
                }
            }

            function fl(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }))
                }
            }
            var Cl = "function" === typeof WeakMap ? WeakMap : Map;

            function pl(e, t, n) {
                (n = Oi(-1, n)).tag = 3, n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Us || (Us = !0, Ws = r), fl(0, t)
                }, n
            }

            function ml(e, t, n) {
                (n = Oi(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var a = t.value;
                    n.payload = function() {
                        return r(a)
                    }, n.callback = function() {
                        fl(0, t)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                    fl(0, t), "function" !== typeof r && (null === $s ? $s = new Set([this]) : $s.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }), n
            }

            function hl(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new Cl;
                    var a = new Set;
                    r.set(t, a)
                } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
                a.has(n) || (a.add(n), e = ku.bind(null, e, t, n), t.then(e, e))
            }

            function vl(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function yl(e, t, n, r, a) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Oi(-1, 1)).tag = 2, Ti(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
            }
            var gl = b.ReactCurrentOwner,
                bl = !1;

            function xl(e, t, n, r) {
                t.child = null === e ? Xi(t, null, n, r) : Ki(t, e.child, n, r)
            }

            function wl(e, t, n, r, a) {
                n = n.render;
                var i = t.ref;
                return Mi(t, a), r = Mo(e, t, n, r, i, a), n = ko(), null === e || bl ? (ai && n && ei(t), t.flags |= 1, xl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ul(e, t, a))
            }

            function Sl(e, t, n, r, a) {
                if (null === e) {
                    var i = n.type;
                    return "function" !== typeof i || Vu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Tu(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Ml(e, t, i, r, a))
                }
                if (i = e.child, 0 === (e.lanes & a)) {
                    var o = i.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : sr)(o, r) && e.ref === t.ref) return Ul(e, t, a)
                }
                return t.flags |= 1, (e = Ou(i, r)).ref = t.ref, e.return = t, t.child = e
            }

            function Ml(e, t, n, r, a) {
                if (null !== e) {
                    var i = e.memoizedProps;
                    if (sr(i, r) && e.ref === t.ref) {
                        if (bl = !1, t.pendingProps = r = i, 0 === (e.lanes & a)) return t.lanes = e.lanes, Ul(e, t, a);
                        0 !== (131072 & e.flags) && (bl = !0)
                    }
                }
                return Ll(e, t, n, r, a)
            }

            function kl(e, t, n) {
                var r = t.pendingProps,
                    a = r.children,
                    i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode)
                    if (0 === (1 & t.mode)) t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, Ea(Os, Vs), Vs |= n;
                    else {
                        if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null
                        }, t.updateQueue = null, Ea(Os, Vs), Vs |= e, null;
                        t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, r = null !== i ? i.baseLanes : n, Ea(Os, Vs), Vs |= r
                    }
                else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ea(Os, Vs), Vs |= r;
                return xl(e, t, a, n), t.child
            }

            function El(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Ll(e, t, n, r, a) {
                var i = Va(n) ? Ba : _a.current;
                return i = Za(t, i), Mi(t, a), n = Mo(e, t, n, r, i, a), r = ko(), null === e || bl ? (ai && r && ei(t), t.flags |= 1, xl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ul(e, t, a))
            }

            function _l(e, t, n, r, a) {
                if (Va(n)) {
                    var i = !0;
                    Ia(t)
                } else i = !1;
                if (Mi(t, a), null === t.stateNode) Dl(e, t), Di(t, n, r), Wi(t, n, r, a), r = !0;
                else if (null === e) {
                    var o = t.stateNode,
                        l = t.memoizedProps;
                    o.props = l;
                    var s = o.context,
                        u = n.contextType;
                    "object" === typeof u && null !== u ? u = ki(u) : u = Za(t, u = Va(n) ? Ba : _a.current);
                    var c = n.getDerivedStateFromProps,
                        d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                    d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== r || s !== u) && Ui(t, o, r, u), Bi = !1;
                    var f = t.memoizedState;
                    o.state = f, Ri(t, r, o, a), s = t.memoizedState, l !== r || f !== s || Pa.current || Bi ? ("function" === typeof c && (zi(t, n, c, r), s = t.memoizedState), (l = Bi || Fi(t, n, l, r, f, s, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" === typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = l) : ("function" === typeof o.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    o = t.stateNode, Vi(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : hi(t.type, l), o.props = u, d = t.pendingProps, f = o.context, "object" === typeof(s = n.contextType) && null !== s ? s = ki(s) : s = Za(t, s = Va(n) ? Ba : _a.current);
                    var C = n.getDerivedStateFromProps;
                    (c = "function" === typeof C || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (l !== d || f !== s) && Ui(t, o, r, s), Bi = !1, f = t.memoizedState, o.state = f, Ri(t, r, o, a);
                    var p = t.memoizedState;
                    l !== d || f !== p || Pa.current || Bi ? ("function" === typeof C && (zi(t, n, C, r), p = t.memoizedState), (u = Bi || Fi(t, n, u, r, f, p, s) || !1) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(r, p, s), "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, s)), "function" === typeof o.componentDidUpdate && (t.flags |= 4), "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = s, r = u) : ("function" !== typeof o.componentDidUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof o.getSnapshotBeforeUpdate || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return Pl(e, t, n, r, i, a)
            }

            function Pl(e, t, n, r, a, i) {
                El(e, t);
                var o = 0 !== (128 & t.flags);
                if (!r && !o) return a && Ra(t, n, !1), Ul(e, t, i);
                r = t.stateNode, gl.current = t;
                var l = o && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && o ? (t.child = Ki(t, e.child, null, i), t.child = Ki(t, null, l, i)) : xl(e, t, l, i), t.memoizedState = r.state, a && Ra(t, n, !0), t.child
            }

            function Bl(e) {
                var t = e.stateNode;
                t.pendingContext ? Ta(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ta(0, t.context, !1), ro(e, t.containerInfo)
            }

            function Zl(e, t, n, r, a) {
                return Ci(), pi(a), t.flags |= 256, xl(e, t, n, r), t.child
            }
            var Vl, Ol, Tl, Al = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };

            function Il(e) {
                return {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }
            }

            function Rl(e, t, n) {
                var r, a = t.pendingProps,
                    o = lo.current,
                    l = !1,
                    s = 0 !== (128 & t.flags);
                if ((r = s) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), Ea(lo, 1 & o), null === e) return ui(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, s = {
                    mode: "hidden",
                    children: s
                }, 0 === (1 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = s) : l = Iu(s, a, 0, null), e = Au(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Il(n), t.memoizedState = Al, e) : jl(t, s));
                if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated)) return function(e, t, n, r, a, o, l) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Nl(e, t, l, r = dl(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Iu({
                        mode: "visible",
                        children: r.children
                    }, a, 0, null), (o = Au(o, a, l, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 !== (1 & t.mode) && Ki(t, e.child, null, l), t.child.memoizedState = Il(l), t.memoizedState = Al, o);
                    if (0 === (1 & t.mode)) return Nl(e, t, l, null);
                    if ("$!" === a.data) {
                        if (r = a.nextSibling && a.nextSibling.dataset) var s = r.dgst;
                        return r = s, Nl(e, t, l, r = dl(o = Error(i(419)), r, void 0))
                    }
                    if (s = 0 !== (l & e.childLanes), bl || s) {
                        if (null !== (r = Ps)) {
                            switch (l & -l) {
                                case 4:
                                    a = 2;
                                    break;
                                case 16:
                                    a = 8;
                                    break;
                                case 64:
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 16777216:
                                case 33554432:
                                case 67108864:
                                    a = 32;
                                    break;
                                case 536870912:
                                    a = 268435456;
                                    break;
                                default:
                                    a = 0
                            }
                            0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Pi(e, a), nu(r, e, a, -1))
                        }
                        return mu(), Nl(e, t, l, r = dl(Error(i(421))))
                    }
                    return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Lu.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, ri = ua(a.nextSibling), ni = t, ai = !0, ii = null, null !== e && (qa[Qa++] = Ka, qa[Qa++] = Xa, qa[Qa++] = Ga, Ka = e.id, Xa = e.overflow, Ga = t), t = jl(t, r.children), t.flags |= 4096, t)
                }(e, t, s, a, r, o, n);
                if (l) {
                    l = a.fallback, s = t.mode, r = (o = e.child).sibling;
                    var u = {
                        mode: "hidden",
                        children: a.children
                    };
                    return 0 === (1 & s) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = u, t.deletions = null) : (a = Ou(o, u)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? l = Ou(r, l) : (l = Au(l, s, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, s = null === (s = e.child.memoizedState) ? Il(n) : {
                        baseLanes: s.baseLanes | n,
                        cachePool: null,
                        transitions: s.transitions
                    }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = Al, a
                }
                return e = (l = e.child).sibling, a = Ou(l, {
                    mode: "visible",
                    children: a.children
                }), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
            }

            function jl(e, t) {
                return (t = Iu({
                    mode: "visible",
                    children: t
                }, e.mode, 0, null)).return = e, e.child = t
            }

            function Nl(e, t, n, r) {
                return null !== r && pi(r), Ki(t, e.child, null, n), (e = jl(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function zl(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), Si(e.return, t, n)
            }

            function Hl(e, t, n, r, a) {
                var i = e.memoizedState;
                null === i ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: a
                } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a)
            }

            function Fl(e, t, n) {
                var r = t.pendingProps,
                    a = r.revealOrder,
                    i = r.tail;
                if (xl(e, t, r.children, n), 0 !== (2 & (r = lo.current))) r = 1 & r | 2, t.flags |= 128;
                else {
                    if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
                        else if (19 === e.tag) zl(e, n, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (Ea(lo, r), 0 === (1 & t.mode)) t.memoizedState = null;
                else switch (a) {
                    case "forwards":
                        for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === so(e) && (a = n), n = n.sibling;
                        null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Hl(t, !1, a, n, i);
                        break;
                    case "backwards":
                        for (n = null, a = t.child, t.child = null; null !== a;) {
                            if (null !== (e = a.alternate) && null === so(e)) {
                                t.child = a;
                                break
                            }
                            e = a.sibling, a.sibling = n, n = a, a = e
                        }
                        Hl(t, !0, n, null, i);
                        break;
                    case "together":
                        Hl(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Dl(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function Ul(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Is |= t.lanes, 0 === (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(i(153));
                if (null !== t.child) {
                    for (n = Ou(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ou(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function Wl(e, t) {
                if (!ai) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function $l(e) {
                var t = null !== e.alternate && e.alternate.child === e.child,
                    n = 0,
                    r = 0;
                if (t)
                    for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                else
                    for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function ql(e, t, n) {
                var r = t.pendingProps;
                switch (ti(t), t.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return $l(t), null;
                    case 1:
                    case 17:
                        return Va(t.type) && Oa(), $l(t), null;
                    case 3:
                        return r = t.stateNode, ao(), ka(Pa), ka(_a), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (di(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ii && (ou(ii), ii = null))), $l(t), null;
                    case 5:
                        oo(t);
                        var a = no(to.current);
                        if (n = t.type, null !== e && null != t.stateNode) Ol(e, t, n, r), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(i(166));
                                return $l(t), null
                            }
                            if (e = no(Ji.current), di(t)) {
                                r = t.stateNode, n = t.type;
                                var o = t.memoizedProps;
                                switch (r[fa] = t, r[Ca] = o, e = 0 !== (1 & t.mode), n) {
                                    case "dialog":
                                        Nr("cancel", r), Nr("close", r);
                                        break;
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Nr("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (a = 0; a < Ar.length; a++) Nr(Ar[a], r);
                                        break;
                                    case "source":
                                        Nr("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Nr("error", r), Nr("load", r);
                                        break;
                                    case "details":
                                        Nr("toggle", r);
                                        break;
                                    case "input":
                                        K(r, o), Nr("invalid", r);
                                        break;
                                    case "select":
                                        r._wrapperState = {
                                            wasMultiple: !!o.multiple
                                        }, Nr("invalid", r);
                                        break;
                                    case "textarea":
                                        ae(r, o), Nr("invalid", r)
                                }
                                for (var s in ye(n, o), a = null, o)
                                    if (o.hasOwnProperty(s)) {
                                        var u = o[s];
                                        "children" === s ? "string" === typeof u ? r.textContent !== u && (!0 !== o.suppressHydrationWarning && Yr(r.textContent, u, e), a = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== o.suppressHydrationWarning && Yr(r.textContent, u, e), a = ["children", "" + u]) : l.hasOwnProperty(s) && null != u && "onScroll" === s && Nr("scroll", r)
                                    } switch (n) {
                                    case "input":
                                        $(r), J(r, o, !0);
                                        break;
                                    case "textarea":
                                        $(r), oe(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof o.onClick && (r.onclick = Jr)
                                }
                                r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                s = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                    is: r.is
                                }) : (e = s.createElement(n), "select" === n && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[fa] = t, e[Ca] = r, Vl(e, t), t.stateNode = e;
                                e: {
                                    switch (s = ge(n, r), n) {
                                        case "dialog":
                                            Nr("cancel", e), Nr("close", e), a = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Nr("load", e), a = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Ar.length; a++) Nr(Ar[a], e);
                                            a = r;
                                            break;
                                        case "source":
                                            Nr("error", e), a = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Nr("error", e), Nr("load", e), a = r;
                                            break;
                                        case "details":
                                            Nr("toggle", e), a = r;
                                            break;
                                        case "input":
                                            K(e, r), a = G(e, r), Nr("invalid", e);
                                            break;
                                        case "option":
                                        default:
                                            a = r;
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, a = R({}, r, {
                                                value: void 0
                                            }), Nr("invalid", e);
                                            break;
                                        case "textarea":
                                            ae(e, r), a = re(e, r), Nr("invalid", e)
                                    }
                                    for (o in ye(n, a), u = a)
                                        if (u.hasOwnProperty(o)) {
                                            var c = u[o];
                                            "style" === o ? he(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != c && "onScroll" === o && Nr("scroll", e) : null != c && g(e, o, c, s))
                                        } switch (n) {
                                        case "input":
                                            $(e), J(e, r, !1);
                                            break;
                                        case "textarea":
                                            $(e), oe(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + U(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (e.onclick = Jr)
                                    }
                                    switch (n) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case "img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return $l(t), null;
                    case 6:
                        if (e && null != t.stateNode) Tl(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                            if (n = no(to.current), no(Ji.current), di(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = ni)) switch (e.tag) {
                                    case 3:
                                        Yr(r.nodeValue, n, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Yr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                                o && (t.flags |= 4)
                            } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r
                        }
                        return $l(t), null;
                    case 13:
                        if (ka(lo), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (ai && null !== ri && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) fi(), Ci(), t.flags |= 98560, o = !1;
                            else if (o = di(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!o) throw Error(i(318));
                                    if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null)) throw Error(i(317));
                                    o[fa] = t
                                } else Ci(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                $l(t), o = !1
                            } else null !== ii && (ou(ii), ii = null), o = !0;
                            if (!o) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & lo.current) ? 0 === Ts && (Ts = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), $l(t), null);
                    case 4:
                        return ao(), null === e && Fr(t.stateNode.containerInfo), $l(t), null;
                    case 10:
                        return wi(t.type._context), $l(t), null;
                    case 19:
                        if (ka(lo), null === (o = t.memoizedState)) return $l(t), null;
                        if (r = 0 !== (128 & t.flags), null === (s = o.rendering))
                            if (r) Wl(o, !1);
                            else {
                                if (0 !== Ts || null !== e && 0 !== (128 & e.flags))
                                    for (e = t.child; null !== e;) {
                                        if (null !== (s = so(e))) {
                                            for (t.flags |= 128, Wl(o, !1), null !== (r = s.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (o = n).flags &= 14680066, null === (s = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }), n = n.sibling;
                                            return Ea(lo, 1 & lo.current | 2), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== o.tail && Xe() > Fs && (t.flags |= 128, r = !0, Wl(o, !1), t.lanes = 4194304)
                            }
                        else {
                            if (!r)
                                if (null !== (e = so(s))) {
                                    if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Wl(o, !0), null === o.tail && "hidden" === o.tailMode && !s.alternate && !ai) return $l(t), null
                                } else 2 * Xe() - o.renderingStartTime > Fs && 1073741824 !== n && (t.flags |= 128, r = !0, Wl(o, !1), t.lanes = 4194304);
                            o.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = o.last) ? n.sibling = s : t.child = s, o.last = s)
                        }
                        return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Xe(), t.sibling = null, n = lo.current, Ea(lo, r ? 1 & n | 2 : 1 & n), t) : ($l(t), null);
                    case 22:
                    case 23:
                        return du(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Vs) && ($l(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : $l(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(i(156, t.tag))
            }

            function Ql(e, t) {
                switch (ti(t), t.tag) {
                    case 1:
                        return Va(t.type) && Oa(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ao(), ka(Pa), ka(_a), co(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return oo(t), null;
                    case 13:
                        if (ka(lo), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(i(340));
                            Ci()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return ka(lo), null;
                    case 4:
                        return ao(), null;
                    case 10:
                        return wi(t.type._context), null;
                    case 22:
                    case 23:
                        return du(), null;
                    default:
                        return null
                }
            }
            Vl = function(e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Ol = function(e, t, n, r) {
                var a = e.memoizedProps;
                if (a !== r) {
                    e = t.stateNode, no(Ji.current);
                    var i, o = null;
                    switch (n) {
                        case "input":
                            a = G(e, a), r = G(e, r), o = [];
                            break;
                        case "select":
                            a = R({}, a, {
                                value: void 0
                            }), r = R({}, r, {
                                value: void 0
                            }), o = [];
                            break;
                        case "textarea":
                            a = re(e, a), r = re(e, r), o = [];
                            break;
                        default:
                            "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                    }
                    for (c in ye(n, r), n = null, a)
                        if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                            if ("style" === c) {
                                var s = a[c];
                                for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                            } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
                    for (c in r) {
                        var u = r[c];
                        if (s = null != a ? a[c] : void 0, r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                            if ("style" === c)
                                if (s) {
                                    for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                    for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                                } else n || (o || (o = []), o.push(c, n)), n = u;
                        else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (o = o || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (o = o || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != u && "onScroll" === c && Nr("scroll", e), o || s === u || (o = [])) : (o = o || []).push(c, u))
                    }
                    n && (o = o || []).push("style", n);
                    var c = o;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }, Tl = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Gl = !1,
                Kl = !1,
                Xl = "function" === typeof WeakSet ? WeakSet : Set,
                Yl = null;

            function Jl(e, t) {
                var n = e.ref;
                if (null !== n)
                    if ("function" === typeof n) try {
                        n(null)
                    } catch (r) {
                        Mu(e, t, r)
                    } else n.current = null
            }

            function es(e, t, n) {
                try {
                    n()
                } catch (r) {
                    Mu(e, t, r)
                }
            }
            var ts = !1;

            function ns(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var a = r = r.next;
                    do {
                        if ((a.tag & e) === e) {
                            var i = a.destroy;
                            a.destroy = void 0, void 0 !== i && es(t, n, i)
                        }
                        a = a.next
                    } while (a !== r)
                }
            }

            function rs(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = t = t.next;
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.create;
                            n.destroy = r()
                        }
                        n = n.next
                    } while (n !== t)
                }
            }

            function as(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function is(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, is(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[fa], delete t[Ca], delete t[ma], delete t[ha], delete t[va])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function os(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ls(e) {
                e: for (;;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || os(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function ss(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                else if (4 !== r && null !== (e = e.child))
                    for (ss(e, t, n), e = e.sibling; null !== e;) ss(e, t, n), e = e.sibling
            }

            function us(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (us(e, t, n), e = e.sibling; null !== e;) us(e, t, n), e = e.sibling
            }
            var cs = null,
                ds = !1;

            function fs(e, t, n) {
                for (n = n.child; null !== n;) Cs(e, t, n), n = n.sibling
            }

            function Cs(e, t, n) {
                if (it && "function" === typeof it.onCommitFiberUnmount) try {
                    it.onCommitFiberUnmount(at, n)
                } catch (l) {}
                switch (n.tag) {
                    case 5:
                        Kl || Jl(n, t);
                    case 6:
                        var r = cs,
                            a = ds;
                        cs = null, fs(e, t, n), ds = a, null !== (cs = r) && (ds ? (e = cs, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cs.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== cs && (ds ? (e = cs, n = n.stateNode, 8 === e.nodeType ? sa(e.parentNode, n) : 1 === e.nodeType && sa(e, n), Ft(e)) : sa(cs, n.stateNode));
                        break;
                    case 4:
                        r = cs, a = ds, cs = n.stateNode.containerInfo, ds = !0, fs(e, t, n), cs = r, ds = a;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Kl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                            a = r = r.next;
                            do {
                                var i = a,
                                    o = i.destroy;
                                i = i.tag, void 0 !== o && (0 !== (2 & i) || 0 !== (4 & i)) && es(n, t, o), a = a.next
                            } while (a !== r)
                        }
                        fs(e, t, n);
                        break;
                    case 1:
                        if (!Kl && (Jl(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (l) {
                            Mu(n, t, l)
                        }
                        fs(e, t, n);
                        break;
                    case 21:
                        fs(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Kl = (r = Kl) || null !== n.memoizedState, fs(e, t, n), Kl = r) : fs(e, t, n);
                        break;
                    default:
                        fs(e, t, n)
                }
            }

            function ps(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Xl), t.forEach((function(t) {
                        var r = _u.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function ms(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r];
                        try {
                            var o = e,
                                l = t,
                                s = l;
                            e: for (; null !== s;) {
                                switch (s.tag) {
                                    case 5:
                                        cs = s.stateNode, ds = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        cs = s.stateNode.containerInfo, ds = !0;
                                        break e
                                }
                                s = s.return
                            }
                            if (null === cs) throw Error(i(160));
                            Cs(o, l, a), cs = null, ds = !1;
                            var u = a.alternate;
                            null !== u && (u.return = null), a.return = null
                        } catch (c) {
                            Mu(a, t, c)
                        }
                    }
                if (12854 & t.subtreeFlags)
                    for (t = t.child; null !== t;) hs(t, e), t = t.sibling
            }

            function hs(e, t) {
                var n = e.alternate,
                    r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (ms(t, e), vs(e), 4 & r) {
                            try {
                                ns(3, e, e.return), rs(3, e)
                            } catch (h) {
                                Mu(e, e.return, h)
                            }
                            try {
                                ns(5, e, e.return)
                            } catch (h) {
                                Mu(e, e.return, h)
                            }
                        }
                        break;
                    case 1:
                        ms(t, e), vs(e), 512 & r && null !== n && Jl(n, n.return);
                        break;
                    case 5:
                        if (ms(t, e), vs(e), 512 & r && null !== n && Jl(n, n.return), 32 & e.flags) {
                            var a = e.stateNode;
                            try {
                                fe(a, "")
                            } catch (h) {
                                Mu(e, e.return, h)
                            }
                        }
                        if (4 & r && null != (a = e.stateNode)) {
                            var o = e.memoizedProps,
                                l = null !== n ? n.memoizedProps : o,
                                s = e.type,
                                u = e.updateQueue;
                            if (e.updateQueue = null, null !== u) try {
                                "input" === s && "radio" === o.type && null != o.name && X(a, o), ge(s, l);
                                var c = ge(s, o);
                                for (l = 0; l < u.length; l += 2) {
                                    var d = u[l],
                                        f = u[l + 1];
                                    "style" === d ? he(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : g(a, d, f, c)
                                }
                                switch (s) {
                                    case "input":
                                        Y(a, o);
                                        break;
                                    case "textarea":
                                        ie(a, o);
                                        break;
                                    case "select":
                                        var C = a._wrapperState.wasMultiple;
                                        a._wrapperState.wasMultiple = !!o.multiple;
                                        var p = o.value;
                                        null != p ? ne(a, !!o.multiple, p, !1) : C !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                                }
                                a[Ca] = o
                            } catch (h) {
                                Mu(e, e.return, h)
                            }
                        }
                        break;
                    case 6:
                        if (ms(t, e), vs(e), 4 & r) {
                            if (null === e.stateNode) throw Error(i(162));
                            a = e.stateNode, o = e.memoizedProps;
                            try {
                                a.nodeValue = o
                            } catch (h) {
                                Mu(e, e.return, h)
                            }
                        }
                        break;
                    case 3:
                        if (ms(t, e), vs(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Ft(t.containerInfo)
                        } catch (h) {
                            Mu(e, e.return, h)
                        }
                        break;
                    case 4:
                    default:
                        ms(t, e), vs(e);
                        break;
                    case 13:
                        ms(t, e), vs(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Hs = Xe())), 4 & r && ps(e);
                        break;
                    case 22:
                        if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Kl = (c = Kl) || d, ms(t, e), Kl = c) : ms(t, e), vs(e), 8192 & r) {
                            if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                                for (Yl = e, d = e.child; null !== d;) {
                                    for (f = Yl = d; null !== Yl;) {
                                        switch (p = (C = Yl).child, C.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                                ns(4, C, C.return);
                                                break;
                                            case 1:
                                                Jl(C, C.return);
                                                var m = C.stateNode;
                                                if ("function" === typeof m.componentWillUnmount) {
                                                    r = C, n = C.return;
                                                    try {
                                                        t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                    } catch (h) {
                                                        Mu(r, n, h)
                                                    }
                                                }
                                                break;
                                            case 5:
                                                Jl(C, C.return);
                                                break;
                                            case 22:
                                                if (null !== C.memoizedState) {
                                                    xs(f);
                                                    continue
                                                }
                                        }
                                        null !== p ? (p.return = C, Yl = p) : xs(f)
                                    }
                                    d = d.sibling
                                }
                            e: for (d = null, f = e;;) {
                                if (5 === f.tag) {
                                    if (null === d) {
                                        d = f;
                                        try {
                                            a = f.stateNode, c ? "function" === typeof(o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (s = f.stateNode, l = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, s.style.display = me("display", l))
                                        } catch (h) {
                                            Mu(e, e.return, h)
                                        }
                                    }
                                } else if (6 === f.tag) {
                                    if (null === d) try {
                                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                    } catch (h) {
                                        Mu(e, e.return, h)
                                    }
                                } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                    f.child.return = f, f = f.child;
                                    continue
                                }
                                if (f === e) break e;
                                for (; null === f.sibling;) {
                                    if (null === f.return || f.return === e) break e;
                                    d === f && (d = null), f = f.return
                                }
                                d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                            }
                        }
                        break;
                    case 19:
                        ms(t, e), vs(e), 4 & r && ps(e);
                    case 21:
                }
            }

            function vs(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e: {
                            for (var n = e.return; null !== n;) {
                                if (os(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(i(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var a = r.stateNode;
                                32 & r.flags && (fe(a, ""), r.flags &= -33), us(e, ls(e), a);
                                break;
                            case 3:
                            case 4:
                                var o = r.stateNode.containerInfo;
                                ss(e, ls(e), o);
                                break;
                            default:
                                throw Error(i(161))
                        }
                    }
                    catch (l) {
                        Mu(e, e.return, l)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function ys(e, t, n) {
                Yl = e, gs(e, t, n)
            }

            function gs(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Yl;) {
                    var a = Yl,
                        i = a.child;
                    if (22 === a.tag && r) {
                        var o = null !== a.memoizedState || Gl;
                        if (!o) {
                            var l = a.alternate,
                                s = null !== l && null !== l.memoizedState || Kl;
                            l = Gl;
                            var u = Kl;
                            if (Gl = o, (Kl = s) && !u)
                                for (Yl = a; null !== Yl;) s = (o = Yl).child, 22 === o.tag && null !== o.memoizedState ? ws(a) : null !== s ? (s.return = o, Yl = s) : ws(a);
                            for (; null !== i;) Yl = i, gs(i, t, n), i = i.sibling;
                            Yl = a, Gl = l, Kl = u
                        }
                        bs(e)
                    } else 0 !== (8772 & a.subtreeFlags) && null !== i ? (i.return = a, Yl = i) : bs(e)
                }
            }

            function bs(e) {
                for (; null !== Yl;) {
                    var t = Yl;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Kl || rs(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Kl)
                                        if (null === n) r.componentDidMount();
                                        else {
                                            var a = t.elementType === t.type ? n.memoizedProps : hi(t.type, n.memoizedProps);
                                            r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                        } var o = t.updateQueue;
                                    null !== o && ji(t, o, r);
                                    break;
                                case 3:
                                    var l = t.updateQueue;
                                    if (null !== l) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        ji(t, l, n)
                                    }
                                    break;
                                case 5:
                                    var s = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = s;
                                        var u = t.memoizedProps;
                                        switch (t.type) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                u.autoFocus && n.focus();
                                                break;
                                            case "img":
                                                u.src && (n.src = u.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var d = c.memoizedState;
                                            if (null !== d) {
                                                var f = d.dehydrated;
                                                null !== f && Ft(f)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(i(163))
                            }
                            Kl || 512 & t.flags && as(t)
                        } catch (C) {
                            Mu(t, t.return, C)
                        }
                    }
                    if (t === e) {
                        Yl = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, Yl = n;
                        break
                    }
                    Yl = t.return
                }
            }

            function xs(e) {
                for (; null !== Yl;) {
                    var t = Yl;
                    if (t === e) {
                        Yl = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, Yl = n;
                        break
                    }
                    Yl = t.return
                }
            }

            function ws(e) {
                for (; null !== Yl;) {
                    var t = Yl;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    rs(4, t)
                                } catch (s) {
                                    Mu(t, n, s)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" === typeof r.componentDidMount) {
                                    var a = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (s) {
                                        Mu(t, a, s)
                                    }
                                }
                                var i = t.return;
                                try {
                                    as(t)
                                } catch (s) {
                                    Mu(t, i, s)
                                }
                                break;
                            case 5:
                                var o = t.return;
                                try {
                                    as(t)
                                } catch (s) {
                                    Mu(t, o, s)
                                }
                        }
                    } catch (s) {
                        Mu(t, t.return, s)
                    }
                    if (t === e) {
                        Yl = null;
                        break
                    }
                    var l = t.sibling;
                    if (null !== l) {
                        l.return = t.return, Yl = l;
                        break
                    }
                    Yl = t.return
                }
            }
            var Ss, Ms = Math.ceil,
                ks = b.ReactCurrentDispatcher,
                Es = b.ReactCurrentOwner,
                Ls = b.ReactCurrentBatchConfig,
                _s = 0,
                Ps = null,
                Bs = null,
                Zs = 0,
                Vs = 0,
                Os = Ma(0),
                Ts = 0,
                As = null,
                Is = 0,
                Rs = 0,
                js = 0,
                Ns = null,
                zs = null,
                Hs = 0,
                Fs = 1 / 0,
                Ds = null,
                Us = !1,
                Ws = null,
                $s = null,
                qs = !1,
                Qs = null,
                Gs = 0,
                Ks = 0,
                Xs = null,
                Ys = -1,
                Js = 0;

            function eu() {
                return 0 !== (6 & _s) ? Xe() : -1 !== Ys ? Ys : Ys = Xe()
            }

            function tu(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & _s) && 0 !== Zs ? Zs & -Zs : null !== mi.transition ? (0 === Js && (Js = mt()), Js) : 0 !== (e = gt) ? e : e = void 0 === (e = window.event) ? 16 : Kt(e.type)
            }

            function nu(e, t, n, r) {
                if (50 < Ks) throw Ks = 0, Xs = null, Error(i(185));
                vt(e, n, r), 0 !== (2 & _s) && e === Ps || (e === Ps && (0 === (2 & _s) && (Rs |= n), 4 === Ts && lu(e, Zs)), ru(e, r), 1 === n && 0 === _s && 0 === (1 & t.mode) && (Fs = Xe() + 500, Na && Fa()))
            }

            function ru(e, t) {
                var n = e.callbackNode;
                ! function(e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                        var o = 31 - ot(i),
                            l = 1 << o,
                            s = a[o]; - 1 === s ? 0 !== (l & n) && 0 === (l & r) || (a[o] = Ct(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l
                    }
                }(e, t);
                var r = ft(e, e === Ps ? Zs : 0);
                if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0;
                else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Qe(n), 1 === t) 0 === e.tag ? function(e) {
                        Na = !0, Ha(e)
                    }(su.bind(null, e)) : Ha(su.bind(null, e)), oa((function() {
                        0 === (6 & _s) && Fa()
                    })), n = null;
                    else {
                        switch (bt(r)) {
                            case 1:
                                n = Je;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Pu(n, au.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function au(e, t) {
                if (Ys = -1, Js = 0, 0 !== (6 & _s)) throw Error(i(327));
                var n = e.callbackNode;
                if (wu() && e.callbackNode !== n) return null;
                var r = ft(e, e === Ps ? Zs : 0);
                if (0 === r) return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = hu(e, r);
                else {
                    t = r;
                    var a = _s;
                    _s |= 2;
                    var o = pu();
                    for (Ps === e && Zs === t || (Ds = null, Fs = Xe() + 500, fu(e, t));;) try {
                        yu();
                        break
                    } catch (s) {
                        Cu(e, s)
                    }
                    xi(), ks.current = o, _s = a, null !== Bs ? t = 0 : (Ps = null, Zs = 0, t = Ts)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (a = pt(e)) && (r = a, t = iu(e, a))), 1 === t) throw n = As, fu(e, 0), lu(e, r), ru(e, Xe()), n;
                    if (6 === t) lu(e, r);
                    else {
                        if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                for (var t = e;;) {
                                    if (16384 & t.flags) {
                                        var n = t.updateQueue;
                                        if (null !== n && null !== (n = n.stores))
                                            for (var r = 0; r < n.length; r++) {
                                                var a = n[r],
                                                    i = a.getSnapshot;
                                                a = a.value;
                                                try {
                                                    if (!lr(i(), a)) return !1
                                                } catch (l) {
                                                    return !1
                                                }
                                            }
                                    }
                                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                    else {
                                        if (t === e) break;
                                        for (; null === t.sibling;) {
                                            if (null === t.return || t.return === e) return !0;
                                            t = t.return
                                        }
                                        t.sibling.return = t.return, t = t.sibling
                                    }
                                }
                                return !0
                            }(a) && (2 === (t = hu(e, r)) && (0 !== (o = pt(e)) && (r = o, t = iu(e, o))), 1 === t)) throw n = As, fu(e, 0), lu(e, r), ru(e, Xe()), n;
                        switch (e.finishedWork = a, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                xu(e, zs, Ds);
                                break;
                            case 3:
                                if (lu(e, r), (130023424 & r) === r && 10 < (t = Hs + 500 - Xe())) {
                                    if (0 !== ft(e, 0)) break;
                                    if (((a = e.suspendedLanes) & r) !== r) {
                                        eu(), e.pingedLanes |= e.suspendedLanes & a;
                                        break
                                    }
                                    e.timeoutHandle = ra(xu.bind(null, e, zs, Ds), t);
                                    break
                                }
                                xu(e, zs, Ds);
                                break;
                            case 4:
                                if (lu(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, a = -1; 0 < r;) {
                                    var l = 31 - ot(r);
                                    o = 1 << l, (l = t[l]) > a && (a = l), r &= ~o
                                }
                                if (r = a, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ms(r / 1960)) - r)) {
                                    e.timeoutHandle = ra(xu.bind(null, e, zs, Ds), r);
                                    break
                                }
                                xu(e, zs, Ds);
                                break;
                            default:
                                throw Error(i(329))
                        }
                    }
                }
                return ru(e, Xe()), e.callbackNode === n ? au.bind(null, e) : null
            }

            function iu(e, t) {
                var n = Ns;
                return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = hu(e, t)) && (t = zs, zs = n, null !== t && ou(t)), e
            }

            function ou(e) {
                null === zs ? zs = e : zs.push.apply(zs, e)
            }

            function lu(e, t) {
                for (t &= ~js, t &= ~Rs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - ot(t),
                        r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function su(e) {
                if (0 !== (6 & _s)) throw Error(i(327));
                wu();
                var t = ft(e, 0);
                if (0 === (1 & t)) return ru(e, Xe()), null;
                var n = hu(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = pt(e);
                    0 !== r && (t = r, n = iu(e, r))
                }
                if (1 === n) throw n = As, fu(e, 0), lu(e, t), ru(e, Xe()), n;
                if (6 === n) throw Error(i(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, xu(e, zs, Ds), ru(e, Xe()), null
            }

            function uu(e, t) {
                var n = _s;
                _s |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (_s = n) && (Fs = Xe() + 500, Na && Fa())
                }
            }

            function cu(e) {
                null !== Qs && 0 === Qs.tag && 0 === (6 & _s) && wu();
                var t = _s;
                _s |= 1;
                var n = Ls.transition,
                    r = gt;
                try {
                    if (Ls.transition = null, gt = 1, e) return e()
                } finally {
                    gt = r, Ls.transition = n, 0 === (6 & (_s = t)) && Fa()
                }
            }

            function du() {
                Vs = Os.current, ka(Os)
            }

            function fu(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Bs)
                    for (n = Bs.return; null !== n;) {
                        var r = n;
                        switch (ti(r), r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && Oa();
                                break;
                            case 3:
                                ao(), ka(Pa), ka(_a), co();
                                break;
                            case 5:
                                oo(r);
                                break;
                            case 4:
                                ao();
                                break;
                            case 13:
                            case 19:
                                ka(lo);
                                break;
                            case 10:
                                wi(r.type._context);
                                break;
                            case 22:
                            case 23:
                                du()
                        }
                        n = n.return
                    }
                if (Ps = e, Bs = e = Ou(e.current, null), Zs = Vs = t, Ts = 0, As = null, js = Rs = Is = 0, zs = Ns = null, null !== Ei) {
                    for (t = 0; t < Ei.length; t++)
                        if (null !== (r = (n = Ei[t]).interleaved)) {
                            n.interleaved = null;
                            var a = r.next,
                                i = n.pending;
                            if (null !== i) {
                                var o = i.next;
                                i.next = a, r.next = o
                            }
                            n.pending = r
                        } Ei = null
                }
                return e
            }

            function Cu(e, t) {
                for (;;) {
                    var n = Bs;
                    try {
                        if (xi(), fo.current = ol, yo) {
                            for (var r = mo.memoizedState; null !== r;) {
                                var a = r.queue;
                                null !== a && (a.pending = null), r = r.next
                            }
                            yo = !1
                        }
                        if (po = 0, vo = ho = mo = null, go = !1, bo = 0, Es.current = null, null === n || null === n.return) {
                            Ts = 1, As = t, Bs = null;
                            break
                        }
                        e: {
                            var o = e,
                                l = n.return,
                                s = n,
                                u = t;
                            if (t = Zs, s.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                var c = u,
                                    d = s,
                                    f = d.tag;
                                if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                    var C = d.alternate;
                                    C ? (d.updateQueue = C.updateQueue, d.memoizedState = C.memoizedState, d.lanes = C.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                }
                                var p = vl(l);
                                if (null !== p) {
                                    p.flags &= -257, yl(p, l, s, 0, t), 1 & p.mode && hl(o, c, t), u = c;
                                    var m = (t = p).updateQueue;
                                    if (null === m) {
                                        var h = new Set;
                                        h.add(u), t.updateQueue = h
                                    } else m.add(u);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    hl(o, c, t), mu();
                                    break e
                                }
                                u = Error(i(426))
                            } else if (ai && 1 & s.mode) {
                                var v = vl(l);
                                if (null !== v) {
                                    0 === (65536 & v.flags) && (v.flags |= 256), yl(v, l, s, 0, t), pi(cl(u, s));
                                    break e
                                }
                            }
                            o = u = cl(u, s),
                            4 !== Ts && (Ts = 2),
                            null === Ns ? Ns = [o] : Ns.push(o),
                            o = l;do {
                                switch (o.tag) {
                                    case 3:
                                        o.flags |= 65536, t &= -t, o.lanes |= t, Ii(o, pl(0, u, t));
                                        break e;
                                    case 1:
                                        s = u;
                                        var y = o.type,
                                            g = o.stateNode;
                                        if (0 === (128 & o.flags) && ("function" === typeof y.getDerivedStateFromError || null !== g && "function" === typeof g.componentDidCatch && (null === $s || !$s.has(g)))) {
                                            o.flags |= 65536, t &= -t, o.lanes |= t, Ii(o, ml(o, s, t));
                                            break e
                                        }
                                }
                                o = o.return
                            } while (null !== o)
                        }
                        bu(n)
                    } catch (b) {
                        t = b, Bs === n && null !== n && (Bs = n = n.return);
                        continue
                    }
                    break
                }
            }

            function pu() {
                var e = ks.current;
                return ks.current = ol, null === e ? ol : e
            }

            function mu() {
                0 !== Ts && 3 !== Ts && 2 !== Ts || (Ts = 4), null === Ps || 0 === (268435455 & Is) && 0 === (268435455 & Rs) || lu(Ps, Zs)
            }

            function hu(e, t) {
                var n = _s;
                _s |= 2;
                var r = pu();
                for (Ps === e && Zs === t || (Ds = null, fu(e, t));;) try {
                    vu();
                    break
                } catch (a) {
                    Cu(e, a)
                }
                if (xi(), _s = n, ks.current = r, null !== Bs) throw Error(i(261));
                return Ps = null, Zs = 0, Ts
            }

            function vu() {
                for (; null !== Bs;) gu(Bs)
            }

            function yu() {
                for (; null !== Bs && !Ge();) gu(Bs)
            }

            function gu(e) {
                var t = Ss(e.alternate, e, Vs);
                e.memoizedProps = e.pendingProps, null === t ? bu(e) : Bs = t, Es.current = null
            }

            function bu(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (n = ql(n, t, Vs))) return void(Bs = n)
                    } else {
                        if (null !== (n = Ql(n, t))) return n.flags &= 32767, void(Bs = n);
                        if (null === e) return Ts = 6, void(Bs = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void(Bs = t);
                    Bs = t = e
                } while (null !== t);
                0 === Ts && (Ts = 5)
            }

            function xu(e, t, n) {
                var r = gt,
                    a = Ls.transition;
                try {
                    Ls.transition = null, gt = 1,
                        function(e, t, n, r) {
                            do {
                                wu()
                            } while (null !== Qs);
                            if (0 !== (6 & _s)) throw Error(i(327));
                            n = e.finishedWork;
                            var a = e.finishedLanes;
                            if (null === n) return null;
                            if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                            e.callbackNode = null, e.callbackPriority = 0;
                            var o = n.lanes | n.childLanes;
                            if (function(e, t) {
                                    var n = e.pendingLanes & ~t;
                                    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                    var r = e.eventTimes;
                                    for (e = e.expirationTimes; 0 < n;) {
                                        var a = 31 - ot(n),
                                            i = 1 << a;
                                        t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i
                                    }
                                }(e, o), e === Ps && (Bs = Ps = null, Zs = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || qs || (qs = !0, Pu(tt, (function() {
                                    return wu(), null
                                }))), o = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || o) {
                                o = Ls.transition, Ls.transition = null;
                                var l = gt;
                                gt = 1;
                                var s = _s;
                                _s |= 4, Es.current = null,
                                    function(e, t) {
                                        if (ea = Ut, Cr(e = fr())) {
                                            if ("selectionStart" in e) var n = {
                                                start: e.selectionStart,
                                                end: e.selectionEnd
                                            };
                                            else e: {
                                                var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                if (r && 0 !== r.rangeCount) {
                                                    n = r.anchorNode;
                                                    var a = r.anchorOffset,
                                                        o = r.focusNode;
                                                    r = r.focusOffset;
                                                    try {
                                                        n.nodeType, o.nodeType
                                                    } catch (x) {
                                                        n = null;
                                                        break e
                                                    }
                                                    var l = 0,
                                                        s = -1,
                                                        u = -1,
                                                        c = 0,
                                                        d = 0,
                                                        f = e,
                                                        C = null;
                                                    t: for (;;) {
                                                        for (var p; f !== n || 0 !== a && 3 !== f.nodeType || (s = l + a), f !== o || 0 !== r && 3 !== f.nodeType || (u = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (p = f.firstChild);) C = f, f = p;
                                                        for (;;) {
                                                            if (f === e) break t;
                                                            if (C === n && ++c === a && (s = l), C === o && ++d === r && (u = l), null !== (p = f.nextSibling)) break;
                                                            C = (f = C).parentNode
                                                        }
                                                        f = p
                                                    }
                                                    n = -1 === s || -1 === u ? null : {
                                                        start: s,
                                                        end: u
                                                    }
                                                } else n = null
                                            }
                                            n = n || {
                                                start: 0,
                                                end: 0
                                            }
                                        } else n = null;
                                        for (ta = {
                                                focusedElem: e,
                                                selectionRange: n
                                            }, Ut = !1, Yl = t; null !== Yl;)
                                            if (e = (t = Yl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Yl = e;
                                            else
                                                for (; null !== Yl;) {
                                                    t = Yl;
                                                    try {
                                                        var m = t.alternate;
                                                        if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                            case 0:
                                                            case 11:
                                                            case 15:
                                                            case 5:
                                                            case 6:
                                                            case 4:
                                                            case 17:
                                                                break;
                                                            case 1:
                                                                if (null !== m) {
                                                                    var h = m.memoizedProps,
                                                                        v = m.memoizedState,
                                                                        y = t.stateNode,
                                                                        g = y.getSnapshotBeforeUpdate(t.elementType === t.type ? h : hi(t.type, h), v);
                                                                    y.__reactInternalSnapshotBeforeUpdate = g
                                                                }
                                                                break;
                                                            case 3:
                                                                var b = t.stateNode.containerInfo;
                                                                1 === b.nodeType ? b.textContent = "" : 9 === b.nodeType && b.documentElement && b.removeChild(b.documentElement);
                                                                break;
                                                            default:
                                                                throw Error(i(163))
                                                        }
                                                    } catch (x) {
                                                        Mu(t, t.return, x)
                                                    }
                                                    if (null !== (e = t.sibling)) {
                                                        e.return = t.return, Yl = e;
                                                        break
                                                    }
                                                    Yl = t.return
                                                }
                                        m = ts, ts = !1
                                    }(e, n), hs(n, e), pr(ta), Ut = !!ea, ta = ea = null, e.current = n, ys(n, e, a), Ke(), _s = s, gt = l, Ls.transition = o
                            } else e.current = n;
                            if (qs && (qs = !1, Qs = e, Gs = a), o = e.pendingLanes, 0 === o && ($s = null), function(e) {
                                    if (it && "function" === typeof it.onCommitFiberRoot) try {
                                        it.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
                                    } catch (t) {}
                                }(n.stateNode), ru(e, Xe()), null !== t)
                                for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
                                    componentStack: a.stack,
                                    digest: a.digest
                                });
                            if (Us) throw Us = !1, e = Ws, Ws = null, e;
                            0 !== (1 & Gs) && 0 !== e.tag && wu(), o = e.pendingLanes, 0 !== (1 & o) ? e === Xs ? Ks++ : (Ks = 0, Xs = e) : Ks = 0, Fa()
                        }(e, t, n, r)
                } finally {
                    Ls.transition = a, gt = r
                }
                return null
            }

            function wu() {
                if (null !== Qs) {
                    var e = bt(Gs),
                        t = Ls.transition,
                        n = gt;
                    try {
                        if (Ls.transition = null, gt = 16 > e ? 16 : e, null === Qs) var r = !1;
                        else {
                            if (e = Qs, Qs = null, Gs = 0, 0 !== (6 & _s)) throw Error(i(331));
                            var a = _s;
                            for (_s |= 4, Yl = e.current; null !== Yl;) {
                                var o = Yl,
                                    l = o.child;
                                if (0 !== (16 & Yl.flags)) {
                                    var s = o.deletions;
                                    if (null !== s) {
                                        for (var u = 0; u < s.length; u++) {
                                            var c = s[u];
                                            for (Yl = c; null !== Yl;) {
                                                var d = Yl;
                                                switch (d.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        ns(8, d, o)
                                                }
                                                var f = d.child;
                                                if (null !== f) f.return = d, Yl = f;
                                                else
                                                    for (; null !== Yl;) {
                                                        var C = (d = Yl).sibling,
                                                            p = d.return;
                                                        if (is(d), d === c) {
                                                            Yl = null;
                                                            break
                                                        }
                                                        if (null !== C) {
                                                            C.return = p, Yl = C;
                                                            break
                                                        }
                                                        Yl = p
                                                    }
                                            }
                                        }
                                        var m = o.alternate;
                                        if (null !== m) {
                                            var h = m.child;
                                            if (null !== h) {
                                                m.child = null;
                                                do {
                                                    var v = h.sibling;
                                                    h.sibling = null, h = v
                                                } while (null !== h)
                                            }
                                        }
                                        Yl = o
                                    }
                                }
                                if (0 !== (2064 & o.subtreeFlags) && null !== l) l.return = o, Yl = l;
                                else e: for (; null !== Yl;) {
                                    if (0 !== (2048 & (o = Yl).flags)) switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ns(9, o, o.return)
                                    }
                                    var y = o.sibling;
                                    if (null !== y) {
                                        y.return = o.return, Yl = y;
                                        break e
                                    }
                                    Yl = o.return
                                }
                            }
                            var g = e.current;
                            for (Yl = g; null !== Yl;) {
                                var b = (l = Yl).child;
                                if (0 !== (2064 & l.subtreeFlags) && null !== b) b.return = l, Yl = b;
                                else e: for (l = g; null !== Yl;) {
                                    if (0 !== (2048 & (s = Yl).flags)) try {
                                        switch (s.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                rs(9, s)
                                        }
                                    } catch (w) {
                                        Mu(s, s.return, w)
                                    }
                                    if (s === l) {
                                        Yl = null;
                                        break e
                                    }
                                    var x = s.sibling;
                                    if (null !== x) {
                                        x.return = s.return, Yl = x;
                                        break e
                                    }
                                    Yl = s.return
                                }
                            }
                            if (_s = a, Fa(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                it.onPostCommitFiberRoot(at, e)
                            } catch (w) {}
                            r = !0
                        }
                        return r
                    } finally {
                        gt = n, Ls.transition = t
                    }
                }
                return !1
            }

            function Su(e, t, n) {
                e = Ti(e, t = pl(0, t = cl(n, t), 1), 1), t = eu(), null !== e && (vt(e, 1, t), ru(e, t))
            }

            function Mu(e, t, n) {
                if (3 === e.tag) Su(e, e, n);
                else
                    for (; null !== t;) {
                        if (3 === t.tag) {
                            Su(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === $s || !$s.has(r))) {
                                t = Ti(t, e = ml(t, e = cl(n, e), 1), 1), e = eu(), null !== t && (vt(t, 1, e), ru(t, e));
                                break
                            }
                        }
                        t = t.return
                    }
            }

            function ku(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, Ps === e && (Zs & n) === n && (4 === Ts || 3 === Ts && (130023424 & Zs) === Zs && 500 > Xe() - Hs ? fu(e, 0) : js |= n), ru(e, t)
            }

            function Eu(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = eu();
                null !== (e = Pi(e, t)) && (vt(e, t, n), ru(e, n))
            }

            function Lu(e) {
                var t = e.memoizedState,
                    n = 0;
                null !== t && (n = t.retryLane), Eu(e, n)
            }

            function _u(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode,
                            a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(i(314))
                }
                null !== r && r.delete(t), Eu(e, n)
            }

            function Pu(e, t) {
                return qe(e, t)
            }

            function Bu(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Zu(e, t, n, r) {
                return new Bu(e, t, n, r)
            }

            function Vu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ou(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Zu(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function Tu(e, t, n, r, a, o) {
                var l = 2;
                if (r = e, "function" === typeof e) Vu(e) && (l = 1);
                else if ("string" === typeof e) l = 5;
                else e: switch (e) {
                    case S:
                        return Au(n.children, a, o, t);
                    case M:
                        l = 8, a |= 8;
                        break;
                    case k:
                        return (e = Zu(12, n, t, 2 | a)).elementType = k, e.lanes = o, e;
                    case P:
                        return (e = Zu(13, n, t, a)).elementType = P, e.lanes = o, e;
                    case B:
                        return (e = Zu(19, n, t, a)).elementType = B, e.lanes = o, e;
                    case O:
                        return Iu(n, a, o, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case E:
                                l = 10;
                                break e;
                            case L:
                                l = 9;
                                break e;
                            case _:
                                l = 11;
                                break e;
                            case Z:
                                l = 14;
                                break e;
                            case V:
                                l = 16, r = null;
                                break e
                        }
                        throw Error(i(130, null == e ? e : typeof e, ""))
                }
                return (t = Zu(l, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
            }

            function Au(e, t, n, r) {
                return (e = Zu(7, e, r, t)).lanes = n, e
            }

            function Iu(e, t, n, r) {
                return (e = Zu(22, e, r, t)).elementType = O, e.lanes = n, e.stateNode = {
                    isHidden: !1
                }, e
            }

            function Ru(e, t, n) {
                return (e = Zu(6, e, null, t)).lanes = n, e
            }

            function ju(e, t, n) {
                return (t = Zu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Nu(e, t, n, r, a) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ht(0), this.expirationTimes = ht(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ht(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
            }

            function zu(e, t, n, r, a, i, o, l, s) {
                return e = new Nu(e, t, n, l, s), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Zu(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, Zi(i), e
            }

            function Hu(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: w,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }

            function Fu(e) {
                if (!e) return La;
                e: {
                    if (Fe(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                    var t = e;do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Va(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(i(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Va(n)) return Aa(e, n, t)
                }
                return t
            }

            function Du(e, t, n, r, a, i, o, l, s) {
                return (e = zu(n, r, !0, e, 0, i, 0, l, s)).context = Fu(null), n = e.current, (i = Oi(r = eu(), a = tu(n))).callback = void 0 !== t && null !== t ? t : null, Ti(n, i, a), e.current.lanes = a, vt(e, a, r), ru(e, r), e
            }

            function Uu(e, t, n, r) {
                var a = t.current,
                    i = eu(),
                    o = tu(a);
                return n = Fu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Oi(i, o)).payload = {
                    element: e
                }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ti(a, t, o)) && (nu(e, a, o, i), Ai(e, a, o)), o
            }

            function Wu(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function $u(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function qu(e, t) {
                $u(e, t), (e = e.alternate) && $u(e, t)
            }
            Ss = function(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || Pa.current) bl = !0;
                    else {
                        if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bl = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                    case 3:
                                        Bl(t), Ci();
                                        break;
                                    case 5:
                                        io(t);
                                        break;
                                    case 1:
                                        Va(t.type) && Ia(t);
                                        break;
                                    case 4:
                                        ro(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        var r = t.type._context,
                                            a = t.memoizedProps.value;
                                        Ea(vi, r._currentValue), r._currentValue = a;
                                        break;
                                    case 13:
                                        if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ea(lo, 1 & lo.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Rl(e, t, n) : (Ea(lo, 1 & lo.current), null !== (e = Ul(e, t, n)) ? e.sibling : null);
                                        Ea(lo, 1 & lo.current);
                                        break;
                                    case 19:
                                        if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                            if (r) return Fl(e, t, n);
                                            t.flags |= 128
                                        }
                                        if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ea(lo, lo.current), r) break;
                                        return null;
                                    case 22:
                                    case 23:
                                        return t.lanes = 0, kl(e, t, n)
                                }
                                return Ul(e, t, n)
                            }(e, t, n);
                        bl = 0 !== (131072 & e.flags)
                    }
                else bl = !1, ai && 0 !== (1048576 & t.flags) && Ja(t, $a, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        Dl(e, t), e = t.pendingProps;
                        var a = Za(t, _a.current);
                        Mi(t, n), a = Mo(null, t, r, e, a, n);
                        var o = ko();
                        return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Va(r) ? (o = !0, Ia(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Zi(t), a.updater = Hi, t.stateNode = a, a._reactInternals = t, Wi(t, r, e, n), t = Pl(null, t, r, !0, o, n)) : (t.tag = 0, ai && o && ei(t), xl(null, t, a, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e: {
                            switch (Dl(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
                                if ("function" === typeof e) return Vu(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === _) return 11;
                                    if (e === Z) return 14
                                }
                                return 2
                            }(r), e = hi(r, e), a) {
                                case 0:
                                    t = Ll(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = _l(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = wl(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = Sl(null, t, r, hi(r.type, e), n);
                                    break e
                            }
                            throw Error(i(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, a = t.pendingProps, Ll(e, t, r, a = t.elementType === r ? a : hi(r, a), n);
                    case 1:
                        return r = t.type, a = t.pendingProps, _l(e, t, r, a = t.elementType === r ? a : hi(r, a), n);
                    case 3:
                        e: {
                            if (Bl(t), null === e) throw Error(i(387));r = t.pendingProps,
                            a = (o = t.memoizedState).element,
                            Vi(e, t),
                            Ri(t, r, null, n);
                            var l = t.memoizedState;
                            if (r = l.element, o.isDehydrated) {
                                if (o = {
                                        element: r,
                                        isDehydrated: !1,
                                        cache: l.cache,
                                        pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                                        transitions: l.transitions
                                    }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                    t = Zl(e, t, r, n, a = cl(Error(i(423)), t));
                                    break e
                                }
                                if (r !== a) {
                                    t = Zl(e, t, r, n, a = cl(Error(i(424)), t));
                                    break e
                                }
                                for (ri = ua(t.stateNode.containerInfo.firstChild), ni = t, ai = !0, ii = null, n = Xi(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (Ci(), r === a) {
                                    t = Ul(e, t, n);
                                    break e
                                }
                                xl(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return io(t), null === e && ui(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, na(r, a) ? l = null : null !== o && na(r, o) && (t.flags |= 32), El(e, t), xl(e, t, l, n), t.child;
                    case 6:
                        return null === e && ui(t), null;
                    case 13:
                        return Rl(e, t, n);
                    case 4:
                        return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ki(t, null, r, n) : xl(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, a = t.pendingProps, wl(e, t, r, a = t.elementType === r ? a : hi(r, a), n);
                    case 7:
                        return xl(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return xl(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, l = a.value, Ea(vi, r._currentValue), r._currentValue = l, null !== o)
                                if (lr(o.value, l)) {
                                    if (o.children === a.children && !Pa.current) {
                                        t = Ul(e, t, n);
                                        break e
                                    }
                                } else
                                    for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                        var s = o.dependencies;
                                        if (null !== s) {
                                            l = o.child;
                                            for (var u = s.firstContext; null !== u;) {
                                                if (u.context === r) {
                                                    if (1 === o.tag) {
                                                        (u = Oi(-1, n & -n)).tag = 2;
                                                        var c = o.updateQueue;
                                                        if (null !== c) {
                                                            var d = (c = c.shared).pending;
                                                            null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                        }
                                                    }
                                                    o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), Si(o.return, n, t), s.lanes |= n;
                                                    break
                                                }
                                                u = u.next
                                            }
                                        } else if (10 === o.tag) l = o.type === t.type ? null : o.child;
                                        else if (18 === o.tag) {
                                            if (null === (l = o.return)) throw Error(i(341));
                                            l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), Si(l, n, t), l = o.sibling
                                        } else l = o.child;
                                        if (null !== l) l.return = o;
                                        else
                                            for (l = o; null !== l;) {
                                                if (l === t) {
                                                    l = null;
                                                    break
                                                }
                                                if (null !== (o = l.sibling)) {
                                                    o.return = l.return, l = o;
                                                    break
                                                }
                                                l = l.return
                                            }
                                        o = l
                                    }
                            xl(e, t, a.children, n),
                            t = t.child
                        }
                        return t;
                    case 9:
                        return a = t.type, r = t.pendingProps.children, Mi(t, n), r = r(a = ki(a)), t.flags |= 1, xl(e, t, r, n), t.child;
                    case 14:
                        return a = hi(r = t.type, t.pendingProps), Sl(e, t, r, a = hi(r.type, a), n);
                    case 15:
                        return Ml(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : hi(r, a), Dl(e, t), t.tag = 1, Va(r) ? (e = !0, Ia(t)) : e = !1, Mi(t, n), Di(t, r, a), Wi(t, r, a, n), Pl(null, t, r, !0, e, n);
                    case 19:
                        return Fl(e, t, n);
                    case 22:
                        return kl(e, t, n)
                }
                throw Error(i(156, t.tag))
            };
            var Qu = "function" === typeof reportError ? reportError : function(e) {
                console.error(e)
            };

            function Gu(e) {
                this._internalRoot = e
            }

            function Ku(e) {
                this._internalRoot = e
            }

            function Xu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Yu(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Ju() {}

            function ec(e, t, n, r, a) {
                var i = n._reactRootContainer;
                if (i) {
                    var o = i;
                    if ("function" === typeof a) {
                        var l = a;
                        a = function() {
                            var e = Wu(o);
                            l.call(e)
                        }
                    }
                    Uu(t, o, e, a)
                } else o = function(e, t, n, r, a) {
                    if (a) {
                        if ("function" === typeof r) {
                            var i = r;
                            r = function() {
                                var e = Wu(o);
                                i.call(e)
                            }
                        }
                        var o = Du(t, r, e, 0, null, !1, 0, "", Ju);
                        return e._reactRootContainer = o, e[pa] = o.current, Fr(8 === e.nodeType ? e.parentNode : e), cu(), o
                    }
                    for (; a = e.lastChild;) e.removeChild(a);
                    if ("function" === typeof r) {
                        var l = r;
                        r = function() {
                            var e = Wu(s);
                            l.call(e)
                        }
                    }
                    var s = zu(e, 0, !1, null, 0, !1, 0, "", Ju);
                    return e._reactRootContainer = s, e[pa] = s.current, Fr(8 === e.nodeType ? e.parentNode : e), cu((function() {
                        Uu(t, s, n, r)
                    })), s
                }(n, t, e, a, r);
                return Wu(o)
            }
            Ku.prototype.render = Gu.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t) throw Error(i(409));
                Uu(e, t, null, null)
            }, Ku.prototype.unmount = Gu.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    cu((function() {
                        Uu(null, e, null, null)
                    })), t[pa] = null
                }
            }, Ku.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Mt();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Ot.length && 0 !== t && t < Ot[n].priority; n++);
                    Ot.splice(n, 0, e), 0 === n && Rt(e)
                }
            }, xt = function(e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = dt(t.pendingLanes);
                            0 !== n && (yt(t, 1 | n), ru(t, Xe()), 0 === (6 & _s) && (Fs = Xe() + 500, Fa()))
                        }
                        break;
                    case 13:
                        cu((function() {
                            var t = Pi(e, 1);
                            if (null !== t) {
                                var n = eu();
                                nu(t, e, 1, n)
                            }
                        })), qu(e, 1)
                }
            }, wt = function(e) {
                if (13 === e.tag) {
                    var t = Pi(e, 134217728);
                    if (null !== t) nu(t, e, 134217728, eu());
                    qu(e, 134217728)
                }
            }, St = function(e) {
                if (13 === e.tag) {
                    var t = tu(e),
                        n = Pi(e, t);
                    if (null !== n) nu(n, e, t, eu());
                    qu(e, t)
                }
            }, Mt = function() {
                return gt
            }, kt = function(e, t) {
                var n = gt;
                try {
                    return gt = e, t()
                } finally {
                    gt = n
                }
            }, we = function(e, t, n) {
                switch (t) {
                    case "input":
                        if (Y(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = xa(r);
                                    if (!a) throw Error(i(90));
                                    q(r), Y(r, a)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        ie(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, _e = uu, Pe = cu;
            var tc = {
                    usingClientEntryPoint: !1,
                    Events: [ga, ba, xa, Ee, Le, uu]
                },
                nc = {
                    findFiberByHostInstance: ya,
                    bundleType: 0,
                    version: "18.2.0",
                    rendererPackageName: "react-dom"
                },
                rc = {
                    bundleType: nc.bundleType,
                    version: nc.version,
                    rendererPackageName: nc.rendererPackageName,
                    rendererConfig: nc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: b.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function(e) {
                        return null === (e = We(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nc.findFiberByHostInstance || function() {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!ac.isDisabled && ac.supportsFiber) try {
                    at = ac.inject(rc), it = ac
                } catch (ce) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Xu(t)) throw Error(i(200));
                return Hu(e, t, null, n)
            }, t.createRoot = function(e, t) {
                if (!Xu(e)) throw Error(i(299));
                var n = !1,
                    r = "",
                    a = Qu;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = zu(e, 1, !1, null, 0, n, 0, r, a), e[pa] = t.current, Fr(8 === e.nodeType ? e.parentNode : e), new Gu(t)
            }, t.findDOMNode = function(e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(i(188));
                    throw e = Object.keys(e).join(","), Error(i(268, e))
                }
                return e = null === (e = We(t)) ? null : e.stateNode
            }, t.flushSync = function(e) {
                return cu(e)
            }, t.hydrate = function(e, t, n) {
                if (!Yu(t)) throw Error(i(200));
                return ec(null, e, t, !0, n)
            }, t.hydrateRoot = function(e, t, n) {
                if (!Xu(e)) throw Error(i(405));
                var r = null != n && n.hydratedSources || null,
                    a = !1,
                    o = "",
                    l = Qu;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Du(t, null, e, 1, null != n ? n : null, a, 0, o, l), e[pa] = t.current, Fr(e), r)
                    for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
                return new Ku(t)
            }, t.render = function(e, t, n) {
                if (!Yu(t)) throw Error(i(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function(e) {
                if (!Yu(e)) throw Error(i(40));
                return !!e._reactRootContainer && (cu((function() {
                    ec(null, null, e, !1, (function() {
                        e._reactRootContainer = null, e[pa] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = uu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!Yu(n)) throw Error(i(200));
                if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                return ec(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        },
        250: function(e, t, n) {
            "use strict";
            var r = n(164);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        164: function(e, t, n) {
            "use strict";
            ! function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(463)
        },
        374: function(e, t, n) {
            "use strict";
            var r = n(791),
                a = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                o = Object.prototype.hasOwnProperty,
                l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                s = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(e, t, n) {
                var r, i = {},
                    u = null,
                    c = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                return {
                    $$typeof: a,
                    type: e,
                    key: u,
                    ref: c,
                    props: i,
                    _owner: l.current
                }
            }
            t.Fragment = i, t.jsx = u, t.jsxs = u
        },
        117: function(e, t) {
            "use strict";
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                o = Symbol.for("react.profiler"),
                l = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                u = Symbol.for("react.forward_ref"),
                c = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                f = Symbol.for("react.lazy"),
                C = Symbol.iterator;
            var p = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                m = Object.assign,
                h = {};

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = h, this.updater = n || p
            }

            function y() {}

            function g(e, t, n) {
                this.props = e, this.context = t, this.refs = h, this.updater = n || p
            }
            v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, y.prototype = v.prototype;
            var b = g.prototype = new y;
            b.constructor = g, m(b, v.prototype), b.isPureReactComponent = !0;
            var x = Array.isArray,
                w = Object.prototype.hasOwnProperty,
                S = {
                    current: null
                },
                M = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function k(e, t, r) {
                var a, i = {},
                    o = null,
                    l = null;
                if (null != t)
                    for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (o = "" + t.key), t) w.call(t, a) && !M.hasOwnProperty(a) && (i[a] = t[a]);
                var s = arguments.length - 2;
                if (1 === s) i.children = r;
                else if (1 < s) {
                    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
                    i.children = u
                }
                if (e && e.defaultProps)
                    for (a in s = e.defaultProps) void 0 === i[a] && (i[a] = s[a]);
                return {
                    $$typeof: n,
                    type: e,
                    key: o,
                    ref: l,
                    props: i,
                    _owner: S.current
                }
            }

            function E(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }
            var L = /\/+/g;

            function _(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function P(e, t, a, i, o) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e) s = !0;
                else switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                s = !0
                        }
                }
                if (s) return o = o(s = e), e = "" === i ? "." + _(s, 0) : i, x(o) ? (a = "", null != e && (a = e.replace(L, "$&/") + "/"), P(o, t, a, "", (function(e) {
                    return e
                }))) : null != o && (E(o) && (o = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(o, a + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(L, "$&/") + "/") + e)), t.push(o)), 1;
                if (s = 0, i = "" === i ? "." : i + ":", x(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = i + _(l = e[u], u);
                        s += P(l, t, a, c, o)
                    } else if (c = function(e) {
                            return null === e || "object" !== typeof e ? null : "function" === typeof(e = C && e[C] || e["@@iterator"]) ? e : null
                        }(e), "function" === typeof c)
                        for (e = c.call(e), u = 0; !(l = e.next()).done;) s += P(l = l.value, t, a, c = i + _(l, u++), o);
                    else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function B(e, t, n) {
                if (null == e) return e;
                var r = [],
                    a = 0;
                return P(e, r, "", "", (function(e) {
                    return t.call(n, e, a++)
                })), r
            }

            function Z(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var V = {
                    current: null
                },
                O = {
                    transition: null
                },
                T = {
                    ReactCurrentDispatcher: V,
                    ReactCurrentBatchConfig: O,
                    ReactCurrentOwner: S
                };
            t.Children = {
                map: B,
                forEach: function(e, t, n) {
                    B(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return B(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return B(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!E(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = v, t.Fragment = a, t.Profiler = o, t.PureComponent = g, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, t.cloneElement = function(e, t, r) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var a = m({}, e.props),
                    i = e.key,
                    o = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (o = t.ref, l = S.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (u in t) w.call(t, u) && !M.hasOwnProperty(u) && (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) a.children = r;
                else if (1 < u) {
                    s = Array(u);
                    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
                    a.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: i,
                    ref: o,
                    props: a,
                    _owner: l
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = k, t.createFactory = function(e) {
                var t = k.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, t.isValidElement = E, t.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: Z
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = O.transition;
                O.transition = {};
                try {
                    e()
                } finally {
                    O.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return V.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return V.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return V.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return V.current.useEffect(e, t)
            }, t.useId = function() {
                return V.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return V.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return V.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return V.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return V.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return V.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return V.current.useRef(e)
            }, t.useState = function(e) {
                return V.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return V.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return V.current.useTransition()
            }, t.version = "18.2.0"
        },
        791: function(e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function(e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        813: function(e, t) {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (!(0 < i(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function a(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                        var l = 2 * (r + 1) - 1,
                            s = e[l],
                            u = l + 1,
                            c = e[u];
                        if (0 > i(s, n)) u < a && 0 > i(c, s) ? (e[r] = c, e[u] = n, r = u) : (e[r] = s, e[l] = n, r = l);
                        else {
                            if (!(u < a && 0 > i(c, n))) break e;
                            e[r] = c, e[u] = n, r = u
                        }
                    }
                }
                return t
            }

            function i(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var l = Date,
                    s = l.now();
                t.unstable_now = function() {
                    return l.now() - s
                }
            }
            var u = [],
                c = [],
                d = 1,
                f = null,
                C = 3,
                p = !1,
                m = !1,
                h = !1,
                v = "function" === typeof setTimeout ? setTimeout : null,
                y = "function" === typeof clearTimeout ? clearTimeout : null,
                g = "undefined" !== typeof setImmediate ? setImmediate : null;

            function b(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) a(c);
                    else {
                        if (!(t.startTime <= e)) break;
                        a(c), t.sortIndex = t.expirationTime, n(u, t)
                    }
                    t = r(c)
                }
            }

            function x(e) {
                if (h = !1, b(e), !m)
                    if (null !== r(u)) m = !0, O(w);
                    else {
                        var t = r(c);
                        null !== t && T(x, t.startTime - e)
                    }
            }

            function w(e, n) {
                m = !1, h && (h = !1, y(E), E = -1), p = !0;
                var i = C;
                try {
                    for (b(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !P());) {
                        var o = f.callback;
                        if ("function" === typeof o) {
                            f.callback = null, C = f.priorityLevel;
                            var l = o(f.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof l ? f.callback = l : f === r(u) && a(u), b(n)
                        } else a(u);
                        f = r(u)
                    }
                    if (null !== f) var s = !0;
                    else {
                        var d = r(c);
                        null !== d && T(x, d.startTime - n), s = !1
                    }
                    return s
                } finally {
                    f = null, C = i, p = !1
                }
            }
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, M = !1,
                k = null,
                E = -1,
                L = 5,
                _ = -1;

            function P() {
                return !(t.unstable_now() - _ < L)
            }

            function B() {
                if (null !== k) {
                    var e = t.unstable_now();
                    _ = e;
                    var n = !0;
                    try {
                        n = k(!0, e)
                    } finally {
                        n ? S() : (M = !1, k = null)
                    }
                } else M = !1
            }
            if ("function" === typeof g) S = function() {
                g(B)
            };
            else if ("undefined" !== typeof MessageChannel) {
                var Z = new MessageChannel,
                    V = Z.port2;
                Z.port1.onmessage = B, S = function() {
                    V.postMessage(null)
                }
            } else S = function() {
                v(B, 0)
            };

            function O(e) {
                k = e, M || (M = !0, S())
            }

            function T(e, n) {
                E = v((function() {
                    e(t.unstable_now())
                }), n)
            }
            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                e.callback = null
            }, t.unstable_continueExecution = function() {
                m || p || (m = !0, O(w))
            }, t.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function() {
                return C
            }, t.unstable_getFirstCallbackNode = function() {
                return r(u)
            }, t.unstable_next = function(e) {
                switch (C) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = C
                }
                var n = C;
                C = t;
                try {
                    return e()
                } finally {
                    C = n
                }
            }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = C;
                C = e;
                try {
                    return t()
                } finally {
                    C = n
                }
            }, t.unstable_scheduleCallback = function(e, a, i) {
                var o = t.unstable_now();
                switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? o + i : o : i = o, e) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 1073741823;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return e = {
                    id: d++,
                    callback: a,
                    priorityLevel: e,
                    startTime: i,
                    expirationTime: l = i + l,
                    sortIndex: -1
                }, i > o ? (e.sortIndex = i, n(c, e), null === r(u) && e === r(c) && (h ? (y(E), E = -1) : h = !0, T(x, i - o))) : (e.sortIndex = l, n(u, e), m || p || (m = !0, O(w))), e
            }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(e) {
                var t = C;
                return function() {
                    var n = C;
                    C = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        C = n
                    }
                }
            }
        },
        296: function(e, t, n) {
            "use strict";
            e.exports = n(813)
        }
    },
    t = {};

function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = t[r] = {
        exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.exports
}
n.m = e, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, {
            a: t
        }), t
    },
    function() {
        var e, t = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        };
        n.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            n.r(i);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var l = 2 & a && r;
                "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((function(e) {
                o[e] = function() {
                    return r[e]
                }
            }));
            return o.default = function() {
                return r
            }, n.d(i, o), i
        }
    }(), n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = function(e) {
        return Promise.all(Object.keys(n.f).reduce((function(t, r) {
            return n.f[r](e, t), t
        }), []))
    }, n.u = function(e) {
        return "static/js/" + e + ".d10d1713.chunk.js"
    }, n.miniCssF = function(e) {}, n.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    function() {
        var e = {},
            t = "Gayane:";
        n.l = function(r, a, i, o) {
            if (e[r]) e[r].push(a);
            else {
                var l, s;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + i) {
                            l = d;
                            break
                        }
                    }
                l || (s = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, n.nc && l.setAttribute("nonce", n.nc), l.setAttribute("data-webpack", t + i), l.src = r), e[r] = [a];
                var f = function(t, n) {
                        l.onerror = l.onload = null, clearTimeout(C);
                        var a = e[r];
                        if (delete e[r], l.parentNode && l.parentNode.removeChild(l), a && a.forEach((function(e) {
                                return e(n)
                            })), t) return t(n)
                    },
                    C = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: l
                    }), 12e4);
                l.onerror = f.bind(null, l.onerror), l.onload = f.bind(null, l.onload), s && document.head.appendChild(l)
            }
        }
    }(), n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/",
    function() {
        var e = {
            179: 0
        };
        n.f.j = function(t, r) {
            var a = n.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var i = new Promise((function(n, r) {
                        a = e[t] = [n, r]
                    }));
                    r.push(a[2] = i);
                    var o = n.p + n.u(t),
                        l = new Error;
                    n.l(o, (function(r) {
                        if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var i = r && ("load" === r.type ? "missing" : r.type),
                                o = r && r.target && r.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", l.name = "ChunkLoadError", l.type = i, l.request = o, a[1](l)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = function(t, r) {
                var a, i, o = r[0],
                    l = r[1],
                    s = r[2],
                    u = 0;
                if (o.some((function(t) {
                        return 0 !== e[t]
                    }))) {
                    for (a in l) n.o(l, a) && (n.m[a] = l[a]);
                    if (s) s(n)
                }
                for (t && t(r); u < o.length; u++) i = o[u], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            r = self.webpackChunkGayane = self.webpackChunkGayane || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    }(),
    function() {
        "use strict";
        var e, t = n(791),
            r = n.t(t, 2),
            a = n(250);

        function i(e) {
            if (Array.isArray(e)) return e
        }

        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function l(e, t) {
            if (e) {
                if ("string" === typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
            }
        }

        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function u(e, t) {
            return i(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, a, i, o, l = [],
                        s = !0,
                        u = !1;
                    try {
                        if (i = (n = n.call(e)).next, 0 === t) {
                            if (Object(n) !== n) return;
                            s = !1
                        } else
                            for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
                    } catch (c) {
                        u = !0, a = c
                    } finally {
                        try {
                            if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return
                        } finally {
                            if (u) throw a
                        }
                    }
                    return l
                }
            }(e, t) || l(e, t) || s()
        }

        function c(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }

        function d(e) {
            return function(e) {
                if (Array.isArray(e)) return o(e)
            }(e) || c(e) || l(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function C(e) {
            return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, C(e)
        }

        function p(e) {
            var t = function(e, t) {
                if ("object" !== C(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== C(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === C(t) ? t : String(t)
        }

        function m(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, p(r.key), r)
            }
        }

        function h(e, t, n) {
            return t && m(e.prototype, t), n && m(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function v(e, t) {
            return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t, e
            }, v(e, t)
        }

        function y(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && v(e, t)
        }

        function g(e) {
            return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, g(e)
        }

        function b() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function x(e, t) {
            if (t && ("object" === C(t) || "function" === typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }

        function w(e) {
            var t = b();
            return function() {
                var n, r = g(e);
                if (t) {
                    var a = g(this).constructor;
                    n = Reflect.construct(r, arguments, a)
                } else n = r.apply(this, arguments);
                return x(this, n)
            }
        }

        function S(e, t, n) {
            return S = b() ? Reflect.construct.bind() : function(e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new(Function.bind.apply(e, r));
                return n && v(a, n.prototype), a
            }, S.apply(null, arguments)
        }

        function M(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return M = function(e) {
                if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                var n;
                if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return S(e, arguments, g(this).constructor)
                }
                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), v(r, e)
            }, M(e)
        }

        function k() {
            return k = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, k.apply(this, arguments)
        }! function(e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(e || (e = {}));
        var E, L = "popstate";

        function _(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function P(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {}
            }
        }

        function B(e, t) {
            return {
                usr: e.state,
                key: e.key,
                idx: t
            }
        }

        function Z(e, t, n, r) {
            return void 0 === n && (n = null), k({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? O(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function V(e) {
            var t = e.pathname,
                n = void 0 === t ? "/" : t,
                r = e.search,
                a = void 0 === r ? "" : r,
                i = e.hash,
                o = void 0 === i ? "" : i;
            return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o), n
        }

        function O(e) {
            var t = {};
            if (e) {
                var n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                var r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }

        function T(t, n, r, a) {
            void 0 === a && (a = {});
            var i = a,
                o = i.window,
                l = void 0 === o ? document.defaultView : o,
                s = i.v5Compat,
                u = void 0 !== s && s,
                c = l.history,
                d = e.Pop,
                f = null,
                C = p();

            function p() {
                return (c.state || {
                    idx: null
                }).idx
            }

            function m() {
                d = e.Pop;
                var t = p(),
                    n = null == t ? null : t - C;
                C = t, f && f({
                    action: d,
                    location: v.location,
                    delta: n
                })
            }

            function h(e) {
                var t = "null" !== l.location.origin ? l.location.origin : l.location.href,
                    n = "string" === typeof e ? e : V(e);
                return _(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }
            null == C && (C = 0, c.replaceState(k({}, c.state, {
                idx: C
            }), ""));
            var v = {
                get action() {
                    return d
                },
                get location() {
                    return t(l, c)
                },
                listen: function(e) {
                    if (f) throw new Error("A history only accepts one active listener");
                    return l.addEventListener(L, m), f = e,
                        function() {
                            l.removeEventListener(L, m), f = null
                        }
                },
                createHref: function(e) {
                    return n(l, e)
                },
                createURL: h,
                encodeLocation: function(e) {
                    var t = h(e);
                    return {
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash
                    }
                },
                push: function(t, n) {
                    d = e.Push;
                    var a = Z(v.location, t, n);
                    r && r(a, t);
                    var i = B(a, C = p() + 1),
                        o = v.createHref(a);
                    try {
                        c.pushState(i, "", o)
                    } catch (s) {
                        l.location.assign(o)
                    }
                    u && f && f({
                        action: d,
                        location: v.location,
                        delta: 1
                    })
                },
                replace: function(t, n) {
                    d = e.Replace;
                    var a = Z(v.location, t, n);
                    r && r(a, t);
                    var i = B(a, C = p()),
                        o = v.createHref(a);
                    c.replaceState(i, "", o), u && f && f({
                        action: d,
                        location: v.location,
                        delta: 0
                    })
                },
                go: function(e) {
                    return c.go(e)
                }
            };
            return v
        }

        function A(e, t, n) {
            void 0 === n && (n = "/");
            var r = U(("string" === typeof t ? O(t) : t).pathname || "/", n);
            if (null == r) return null;
            var a = I(e);
            ! function(e) {
                e.sort((function(e, t) {
                    return e.score !== t.score ? t.score - e.score : function(e, t) {
                        var n = e.length === t.length && e.slice(0, -1).every((function(e, n) {
                            return e === t[n]
                        }));
                        return n ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((function(e) {
                        return e.childrenIndex
                    })), t.routesMeta.map((function(e) {
                        return e.childrenIndex
                    })))
                }))
            }(a);
            for (var i = null, o = 0; null == i && o < a.length; ++o) i = H(a[o], D(r));
            return i
        }

        function I(e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
            var a = function(e, a, i) {
                var o = {
                    relativePath: void 0 === i ? e.path || "" : i,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                o.relativePath.startsWith("/") && (_(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length));
                var l = G([r, o.relativePath]),
                    s = n.concat(o);
                e.children && e.children.length > 0 && (_(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), I(e.children, t, s, l)), (null != e.path || e.index) && t.push({
                    path: l,
                    score: z(l, e.index),
                    routesMeta: s
                })
            };
            return e.forEach((function(e, t) {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
                    var r, i = function(e, t) {
                        var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (!n) {
                            if (Array.isArray(e) || (n = l(e)) || t && e && "number" === typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    a = function() {};
                                return {
                                    s: a,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: a
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, o = !0,
                            s = !1;
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next();
                                return o = e.done, e
                            },
                            e: function(e) {
                                s = !0, i = e
                            },
                            f: function() {
                                try {
                                    o || null == n.return || n.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                        }
                    }(R(e.path));
                    try {
                        for (i.s(); !(r = i.n()).done;) {
                            var o = r.value;
                            a(e, t, o)
                        }
                    } catch (s) {
                        i.e(s)
                    } finally {
                        i.f()
                    }
                } else a(e, t)
            })), t
        }

        function R(e) {
            var t = e.split("/");
            if (0 === t.length) return [];
            var n, r = i(n = t) || c(n) || l(n) || s(),
                a = r[0],
                o = r.slice(1),
                u = a.endsWith("?"),
                f = a.replace(/\?$/, "");
            if (0 === o.length) return u ? [f, ""] : [f];
            var C = R(o.join("/")),
                p = [];
            return p.push.apply(p, d(C.map((function(e) {
                return "" === e ? f : [f, e].join("/")
            })))), u && p.push.apply(p, d(C)), p.map((function(t) {
                return e.startsWith("/") && "" === t ? "/" : t
            }))
        }! function(e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(E || (E = {}));
        var j = /^:\w+$/,
            N = function(e) {
                return "*" === e
            };

        function z(e, t) {
            var n = e.split("/"),
                r = n.length;
            return n.some(N) && (r += -2), t && (r += 2), n.filter((function(e) {
                return !N(e)
            })).reduce((function(e, t) {
                return e + (j.test(t) ? 3 : "" === t ? 1 : 10)
            }), r)
        }

        function H(e, t) {
            for (var n = e.routesMeta, r = {}, a = "/", i = [], o = 0; o < n.length; ++o) {
                var l = n[o],
                    s = o === n.length - 1,
                    u = "/" === a ? t : t.slice(a.length) || "/",
                    c = F({
                        path: l.relativePath,
                        caseSensitive: l.caseSensitive,
                        end: s
                    }, u);
                if (!c) return null;
                Object.assign(r, c.params);
                var d = l.route;
                i.push({
                    params: r,
                    pathname: G([a, c.pathname]),
                    pathnameBase: K(G([a, c.pathnameBase])),
                    route: d
                }), "/" !== c.pathnameBase && (a = G([a, c.pathnameBase]))
            }
            return i
        }

        function F(e, t) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            var n = function(e, t, n) {
                    void 0 === t && (t = !1);
                    void 0 === n && (n = !0);
                    W("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                    var r = [],
                        a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function(e, t) {
                            return r.push(t), "/([^\\/]+)"
                        }));
                    e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                    var i = new RegExp(a, t ? void 0 : "i");
                    return [i, r]
                }(e.path, e.caseSensitive, e.end),
                r = u(n, 2),
                a = r[0],
                i = r[1],
                o = t.match(a);
            if (!o) return null;
            var l = o[0],
                s = l.replace(/(.)\/+$/, "$1"),
                c = o.slice(1);
            return {
                params: i.reduce((function(e, t, n) {
                    if ("*" === t) {
                        var r = c[n] || "";
                        s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1")
                    }
                    return e[t] = function(e, t) {
                        try {
                            return decodeURIComponent(e)
                        } catch (n) {
                            return W(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                        }
                    }(c[n] || "", t), e
                }), {}),
                pathname: l,
                pathnameBase: s,
                pattern: e
            }
        }

        function D(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return W(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function U(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            var n = t.endsWith("/") ? t.length - 1 : t.length,
                r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }

        function W(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {}
            }
        }

        function $(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function q(e) {
            return e.filter((function(e, t) {
                return 0 === t || e.route.path && e.route.path.length > 0
            }))
        }

        function Q(e, t, n, r) {
            var a;
            void 0 === r && (r = !1), "string" === typeof e ? a = O(e) : (_(!(a = k({}, e)).pathname || !a.pathname.includes("?"), $("?", "pathname", "search", a)), _(!a.pathname || !a.pathname.includes("#"), $("#", "pathname", "hash", a)), _(!a.search || !a.search.includes("#"), $("#", "search", "hash", a)));
            var i, o = "" === e || "" === a.pathname,
                l = o ? "/" : a.pathname;
            if (r || null == l) i = n;
            else {
                var s = t.length - 1;
                if (l.startsWith("..")) {
                    for (var u = l.split("/");
                        ".." === u[0];) u.shift(), s -= 1;
                    a.pathname = u.join("/")
                }
                i = s >= 0 ? t[s] : "/"
            }
            var c = function(e, t) {
                    void 0 === t && (t = "/");
                    var n = "string" === typeof e ? O(e) : e,
                        r = n.pathname,
                        a = n.search,
                        i = void 0 === a ? "" : a,
                        o = n.hash,
                        l = void 0 === o ? "" : o,
                        s = r ? r.startsWith("/") ? r : function(e, t) {
                            var n = t.replace(/\/+$/, "").split("/");
                            return e.split("/").forEach((function(e) {
                                ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                            })), n.length > 1 ? n.join("/") : "/"
                        }(r, t) : t;
                    return {
                        pathname: s,
                        search: X(i),
                        hash: Y(l)
                    }
                }(a, i),
                d = l && "/" !== l && l.endsWith("/"),
                f = (o || "." === l) && n.endsWith("/");
            return c.pathname.endsWith("/") || !d && !f || (c.pathname += "/"), c
        }
        var G = function(e) {
                return e.join("/").replace(/\/\/+/g, "/")
            },
            K = function(e) {
                return e.replace(/\/+$/, "").replace(/^\/*/, "/")
            },
            X = function(e) {
                return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
            },
            Y = function(e) {
                return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
            },
            J = function(e) {
                y(n, e);
                var t = w(n);

                function n() {
                    return f(this, n), t.apply(this, arguments)
                }
                return h(n)
            }(M(Error));

        function ee(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }
        var te = ["post", "put", "patch", "delete"],
            ne = (new Set(te), ["get"].concat(te));
        new Set(ne), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
        Symbol("deferred");

        function re() {
            return re = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, re.apply(this, arguments)
        }
        var ae = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            },
            ie = t.useState,
            oe = t.useEffect,
            le = t.useLayoutEffect,
            se = t.useDebugValue;

        function ue(e) {
            var t = e.getSnapshot,
                n = e.value;
            try {
                var r = t();
                return !ae(n, r)
            } catch (a) {
                return !0
            }
        }
        "undefined" === typeof window || "undefined" === typeof window.document || window.document.createElement, r.useSyncExternalStore;
        var ce = t.createContext(null);
        var de = t.createContext(null);
        var fe = t.createContext(null);
        var Ce = t.createContext(null);
        var pe = t.createContext(null);
        var me = t.createContext({
            outlet: null,
            matches: []
        });
        var he = t.createContext(null);

        function ve() {
            return null != t.useContext(pe)
        }

        function ye() {
            return ve() || _(!1), t.useContext(pe).location
        }

        function ge() {
            ve() || _(!1);
            var e = t.useContext(Ce),
                n = e.basename,
                r = e.navigator,
                a = t.useContext(me).matches,
                i = ye().pathname,
                o = JSON.stringify(q(a).map((function(e) {
                    return e.pathnameBase
                }))),
                l = t.useRef(!1);
            return t.useEffect((function() {
                l.current = !0
            })), t.useCallback((function(e, t) {
                if (void 0 === t && (t = {}), l.current)
                    if ("number" !== typeof e) {
                        var a = Q(e, JSON.parse(o), i, "path" === t.relative);
                        "/" !== n && (a.pathname = "/" === a.pathname ? n : G([n, a.pathname])), (t.replace ? r.replace : r.push)(a, t.state, t)
                    } else r.go(e)
            }), [n, r, o, i])
        }

        function be(e, n) {
            var r = (void 0 === n ? {} : n).relative,
                a = t.useContext(me).matches,
                i = ye().pathname,
                o = JSON.stringify(q(a).map((function(e) {
                    return e.pathnameBase
                })));
            return t.useMemo((function() {
                return Q(e, JSON.parse(o), i, "path" === r)
            }), [e, o, i, r])
        }

        function xe() {
            var e = function() {
                    var e, n = t.useContext(he),
                        r = Le(Se.UseRouteError),
                        a = _e(Se.UseRouteError);
                    if (n) return n;
                    return null == (e = r.errors) ? void 0 : e[a]
                }(),
                n = ee(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                r = e instanceof Error ? e.stack : null,
                a = "rgba(200,200,200, 0.5)",
                i = {
                    padding: "0.5rem",
                    backgroundColor: a
                };
            return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, n), r ? t.createElement("pre", {
                style: i
            }, r) : null, null)
        }
        var we, Se, Me = function(e) {
            y(r, e);
            var n = w(r);

            function r(e) {
                var t;
                return f(this, r), (t = n.call(this, e)).state = {
                    location: e.location,
                    error: e.error
                }, t
            }
            return h(r, [{
                key: "componentDidCatch",
                value: function(e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
            }, {
                key: "render",
                value: function() {
                    return this.state.error ? t.createElement(me.Provider, {
                        value: this.props.routeContext
                    }, t.createElement(he.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError",
                value: function(e) {
                    return {
                        error: e
                    }
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return t.location !== e.location ? {
                        error: e.error,
                        location: e.location
                    } : {
                        error: e.error || t.error,
                        location: t.location
                    }
                }
            }]), r
        }(t.Component);

        function ke(e) {
            var n = e.routeContext,
                r = e.match,
                a = e.children,
                i = t.useContext(ce);
            return i && i.static && i.staticContext && r.route.errorElement && (i.staticContext._deepestRenderedBoundaryId = r.route.id), t.createElement(me.Provider, {
                value: n
            }, a)
        }

        function Ee(e, n, r) {
            if (void 0 === n && (n = []), null == e) {
                if (null == r || !r.errors) return null;
                e = r.matches
            }
            var a = e,
                i = null == r ? void 0 : r.errors;
            if (null != i) {
                var o = a.findIndex((function(e) {
                    return e.route.id && (null == i ? void 0 : i[e.route.id])
                }));
                o >= 0 || _(!1), a = a.slice(0, Math.min(a.length, o + 1))
            }
            return a.reduceRight((function(e, o, l) {
                var s = o.route.id ? null == i ? void 0 : i[o.route.id] : null,
                    u = r ? o.route.errorElement || t.createElement(xe, null) : null,
                    c = n.concat(a.slice(0, l + 1)),
                    d = function() {
                        return t.createElement(ke, {
                            match: o,
                            routeContext: {
                                outlet: e,
                                matches: c
                            }
                        }, s ? u : void 0 !== o.route.element ? o.route.element : e)
                    };
                return r && (o.route.errorElement || 0 === l) ? t.createElement(Me, {
                    location: r.location,
                    component: u,
                    error: s,
                    children: d(),
                    routeContext: {
                        outlet: null,
                        matches: c
                    }
                }) : d()
            }), null)
        }

        function Le(e) {
            var n = t.useContext(de);
            return n || _(!1), n
        }

        function _e(e) {
            var n = function(e) {
                    var n = t.useContext(me);
                    return n || _(!1), n
                }(),
                r = n.matches[n.matches.length - 1];
            return r.route.id || _(!1), r.route.id
        }! function(e) {
            e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator"
        }(we || (we = {})),
        function(e) {
            e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
        }(Se || (Se = {}));
        var Pe;

        function Be(e) {
            _(!1)
        }

        function Ze(n) {
            var r = n.basename,
                a = void 0 === r ? "/" : r,
                i = n.children,
                o = void 0 === i ? null : i,
                l = n.location,
                s = n.navigationType,
                u = void 0 === s ? e.Pop : s,
                c = n.navigator,
                d = n.static,
                f = void 0 !== d && d;
            ve() && _(!1);
            var C = a.replace(/^\/*/, "/"),
                p = t.useMemo((function() {
                    return {
                        basename: C,
                        navigator: c,
                        static: f
                    }
                }), [C, c, f]);
            "string" === typeof l && (l = O(l));
            var m = l,
                h = m.pathname,
                v = void 0 === h ? "/" : h,
                y = m.search,
                g = void 0 === y ? "" : y,
                b = m.hash,
                x = void 0 === b ? "" : b,
                w = m.state,
                S = void 0 === w ? null : w,
                M = m.key,
                k = void 0 === M ? "default" : M,
                E = t.useMemo((function() {
                    var e = U(v, C);
                    return null == e ? null : {
                        pathname: e,
                        search: g,
                        hash: x,
                        state: S,
                        key: k
                    }
                }), [C, v, g, x, S, k]);
            return null == E ? null : t.createElement(Ce.Provider, {
                value: p
            }, t.createElement(pe.Provider, {
                children: o,
                value: {
                    location: E,
                    navigationType: u
                }
            }))
        }

        function Ve(n) {
            var r = n.children,
                a = n.location,
                i = t.useContext(ce);
            return function(n, r) {
                ve() || _(!1);
                var a, i = t.useContext(Ce).navigator,
                    o = t.useContext(de),
                    l = t.useContext(me).matches,
                    s = l[l.length - 1],
                    u = s ? s.params : {},
                    c = (s && s.pathname, s ? s.pathnameBase : "/"),
                    d = (s && s.route, ye());
                if (r) {
                    var f, C = "string" === typeof r ? O(r) : r;
                    "/" === c || (null == (f = C.pathname) ? void 0 : f.startsWith(c)) || _(!1), a = C
                } else a = d;
                var p = a.pathname || "/",
                    m = A(n, {
                        pathname: "/" === c ? p : p.slice(c.length) || "/"
                    }),
                    h = Ee(m && m.map((function(e) {
                        return Object.assign({}, e, {
                            params: Object.assign({}, u, e.params),
                            pathname: G([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                            pathnameBase: "/" === e.pathnameBase ? c : G([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                        })
                    })), l, o || void 0);
                return r && h ? t.createElement(pe.Provider, {
                    value: {
                        location: re({
                            pathname: "/",
                            search: "",
                            hash: "",
                            state: null,
                            key: "default"
                        }, a),
                        navigationType: e.Pop
                    }
                }, h) : h
            }(i && !r ? i.router.routes : Te(r), a)
        }! function(e) {
            e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
        }(Pe || (Pe = {}));
        var Oe = new Promise((function() {}));
        t.Component;

        function Te(e, n) {
            void 0 === n && (n = []);
            var r = [];
            return t.Children.forEach(e, (function(e, a) {
                if (t.isValidElement(e))
                    if (e.type !== t.Fragment) {
                        e.type !== Be && _(!1), e.props.index && e.props.children && _(!1);
                        var i = [].concat(d(n), [a]),
                            o = {
                                id: e.props.id || i.join("-"),
                                caseSensitive: e.props.caseSensitive,
                                element: e.props.element,
                                index: e.props.index,
                                path: e.props.path,
                                loader: e.props.loader,
                                action: e.props.action,
                                errorElement: e.props.errorElement,
                                hasErrorBoundary: null != e.props.errorElement,
                                shouldRevalidate: e.props.shouldRevalidate,
                                handle: e.props.handle
                            };
                        e.props.children && (o.children = Te(e.props.children, i)), r.push(o)
                    } else r.push.apply(r, Te(e.props.children, n))
            })), r
        }

        function Ae() {
            return Ae = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Ae.apply(this, arguments)
        }

        function Ie(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
        var Re = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];

        function je(e) {
            var n, r = e.basename,
                a = e.children,
                i = e.window,
                o = t.useRef();
            null == o.current && (o.current = (void 0 === (n = {
                window: i,
                v5Compat: !0
            }) && (n = {}), T((function(e, t) {
                var n = O(e.location.hash.substr(1)),
                    r = n.pathname,
                    a = void 0 === r ? "/" : r,
                    i = n.search,
                    o = void 0 === i ? "" : i,
                    l = n.hash;
                return Z("", {
                    pathname: a,
                    search: o,
                    hash: void 0 === l ? "" : l
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function(e, t) {
                var n = e.document.querySelector("base"),
                    r = "";
                if (n && n.getAttribute("href")) {
                    var a = e.location.href,
                        i = a.indexOf("#");
                    r = -1 === i ? a : a.slice(0, i)
                }
                return r + "#" + ("string" === typeof t ? t : V(t))
            }), (function(e, t) {
                P("/" === e.pathname.charAt(0), "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")")
            }), n)));
            var l = o.current,
                s = u(t.useState({
                    action: l.action,
                    location: l.location
                }), 2),
                c = s[0],
                d = s[1];
            return t.useLayoutEffect((function() {
                return l.listen(d)
            }), [l]), t.createElement(Ze, {
                basename: r,
                children: a,
                location: c.location,
                navigationType: c.action,
                navigator: l
            })
        }
        var Ne = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            ze = t.forwardRef((function(e, n) {
                var r = e.onClick,
                    a = e.relative,
                    i = e.reloadDocument,
                    o = e.replace,
                    l = e.state,
                    s = e.target,
                    u = e.to,
                    c = e.preventScrollReset,
                    d = Ie(e, Re),
                    f = "string" === typeof u ? u : V(u),
                    C = /^[a-z+]+:\/\//i.test(f) || f.startsWith("//"),
                    p = f,
                    m = !1;
                if (Ne && C) {
                    var h = new URL(window.location.href),
                        v = f.startsWith("//") ? new URL(h.protocol + f) : new URL(f);
                    v.origin === h.origin ? p = v.pathname + v.search + v.hash : m = !0
                }
                var y = function(e, n) {
                        var r = (void 0 === n ? {} : n).relative;
                        ve() || _(!1);
                        var a = t.useContext(Ce),
                            i = a.basename,
                            o = a.navigator,
                            l = be(e, {
                                relative: r
                            }),
                            s = l.hash,
                            u = l.pathname,
                            c = l.search,
                            d = u;
                        return "/" !== i && (d = "/" === u ? i : G([i, u])), o.createHref({
                            pathname: d,
                            search: c,
                            hash: s
                        })
                    }(p, {
                        relative: a
                    }),
                    g = function(e, n) {
                        var r = void 0 === n ? {} : n,
                            a = r.target,
                            i = r.replace,
                            o = r.state,
                            l = r.preventScrollReset,
                            s = r.relative,
                            u = ge(),
                            c = ye(),
                            d = be(e, {
                                relative: s
                            });
                        return t.useCallback((function(t) {
                            if (function(e, t) {
                                    return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                    }(e)
                                }(t, a)) {
                                t.preventDefault();
                                var n = void 0 !== i ? i : V(c) === V(d);
                                u(e, {
                                    replace: n,
                                    state: o,
                                    preventScrollReset: l,
                                    relative: s
                                })
                            }
                        }), [c, u, d, i, o, a, e, l, s])
                    }(p, {
                        replace: o,
                        state: l,
                        target: s,
                        preventScrollReset: c,
                        relative: a
                    });
                return t.createElement("a", Ae({}, d, {
                    href: C ? f : y,
                    onClick: m || i ? r : function(e) {
                        r && r(e), e.defaultPrevented || g(e)
                    },
                    ref: n,
                    target: s
                }))
            }));
        var He, Fe;
        (function(e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
        })(He || (He = {})),
        function(e) {
            e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Fe || (Fe = {}));
        var De;
        var Ue = ["title", "titleId"];

        function We() {
            return We = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, We.apply(this, arguments)
        }

        function $e(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function qe(e, n) {
            var r = e.title,
                a = e.titleId,
                i = $e(e, Ue);
            return t.createElement("svg", We({
                width: 200,
                height: 200,
                viewBox: "0 0 600 600",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, De || (De = t.createElement("path", {
                d: "M492.7 188.9C535.8 263.5 547.4 356.5 510 425.7C472.6 495 386.3 540.5 304.9 537.7C223.5 534.8 147 483.7 118.1 419.3C89.2999 355 108 277.5 146.3 205.8C184.5 134 238.7 101.9 304.9 97.0004C371.2 92.1004 449.5 114.3 492.7 188.9Z",
                fill: "#9BF4A9"
            })))
        }
        var Qe = t.forwardRef(qe),
            Ge = (n.p, n(184));
        var Ke, Xe, Ye = function() {
                var e = (0, t.useRef)(),
                    n = (0, t.useRef)(),
                    r = !1;
                (0, t.useEffect)((function() {
                    var t = document.querySelector(".cursor");
                    return e.current = t, document.addEventListener("mousemove", a), setTimeout((function() {
                            t.classList.remove("click")
                        }), 500),
                        function() {
                            document.removeEventListener("mousemove", a)
                        }
                }), []);
                var a = function(t) {
                    var a;
                    null === e || void 0 === e || null === (a = e.current) || void 0 === a || a.setAttribute("style", "left: ".concat(t.pageX - 100, "px; top: ").concat(t.pageY - 100, "px")), r || (null === e || void 0 === e || e.current.classList.remove("rotate-cursor"), r = !0), clearTimeout(n.current), n.current = setTimeout((function() {
                        null === e || void 0 === e || e.current.classList.add("rotate-cursor"), r = !1
                    }), 1e3)
                };
                return (0, Ge.jsx)(Qe, {
                    className: "cursor"
                })
            },
            Je = ["title", "titleId"];

        function et() {
            return et = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, et.apply(this, arguments)
        }

        function tt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function nt(e, n) {
            var r = e.title,
                a = e.titleId,
                i = tt(e, Je);
            return t.createElement("svg", et({
                width: 714,
                height: 822,
                viewBox: "0 0 714 822",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, Ke || (Ke = t.createElement("defs", null, t.createElement("filter", {
                id: "somefilter"
            }, t.createElement("feDisplacementMap", {
                in: "SourceGraphic",
                scale: 0
            }, t.createElement("animate", {
                id: "girl-animate-displacement",
                attributeName: "scale",
                values: "0;10;0",
                dur: "0.5s",
                repeatCount: 1,
                begin: "indefinite"
            }))))), Xe || (Xe = t.createElement("g", {
                id: "Group 1",
                filter: "url(#somefilter)"
            }, t.createElement("path", {
                id: "Vector",
                d: "M317.53 412.4C299.31 412.4 284.48 397.57 284.48 379.35C284.48 361.13 299.31 346.3 317.53 346.3C335.75 346.3 350.58 361.13 350.58 379.35C350.58 380.51 350.52 381.67 350.4 382.81L349.31 382.69C349.43 381.59 349.49 380.47 349.49 379.35C349.49 361.73 335.16 347.4 317.54 347.4C299.92 347.4 285.59 361.73 285.59 379.35C285.59 398.43 302.45 413.64 322 411L322.15 412.09C320.6 412.3 319.06 412.4 317.55 412.4H317.53Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_2",
                d: "M322.36 414.16C322.11 414.16 321.9 413.98 321.87 413.73L321.27 409.47C321.23 409.2 321.42 408.94 321.7 408.91C321.98 408.87 322.23 409.06 322.26 409.34L322.86 413.6C322.9 413.87 322.71 414.13 322.43 414.16C322.41 414.16 322.38 414.16 322.36 414.16Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_3",
                d: "M324.902 414.491C324.674 414.461 324.486 414.275 324.468 414.031L323.355 408.34C323.331 408.064 323.544 407.82 323.818 407.805C324.094 407.781 324.338 407.994 324.353 408.268L325.465 413.959C325.49 414.235 325.276 414.479 325.002 414.494C324.972 414.49 324.931 414.495 324.902 414.491Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_4",
                d: "M326.83 412.28C326.61 412.28 326.41 412.14 326.35 411.92L325.68 409.56C325.6 409.29 325.76 409.02 326.02 408.94C326.29 408.87 326.56 409.02 326.64 409.28L327.31 411.64C327.39 411.91 327.23 412.18 326.97 412.26C326.92 412.27 326.88 412.28 326.83 412.28Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_5",
                d: "M329.07 411.55C328.87 411.55 328.67 411.42 328.6 411.22L327.77 408.91C327.75 408.86 327.74 408.8 327.74 408.74C327.74 408.46 327.96 408.23 328.24 408.23C328.48 408.23 328.68 408.39 328.73 408.61L329.55 410.87C329.64 411.13 329.51 411.42 329.25 411.51C329.19 411.53 329.14 411.54 329.08 411.54L329.07 411.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_6",
                d: "M331.25 410.66C331.06 410.66 330.87 410.55 330.79 410.36L329.79 408.11C329.68 407.86 329.79 407.56 330.04 407.45C330.29 407.34 330.59 407.45 330.7 407.7L331.7 409.95C331.81 410.2 331.7 410.5 331.45 410.61C331.38 410.64 331.32 410.65 331.25 410.65V410.66Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_7",
                d: "M333.36 409.62C333.18 409.62 333.01 409.52 332.92 409.35L331.76 407.18C331.63 406.94 331.72 406.63 331.97 406.5C332.21 406.37 332.52 406.46 332.65 406.71L333.81 408.88C333.94 409.12 333.85 409.43 333.6 409.56C333.53 409.6 333.44 409.62 333.37 409.62H333.36Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_8",
                d: "M335.401 408.45C335.231 408.45 335.071 408.37 334.981 408.22L333.671 406.13C333.521 405.9 333.591 405.59 333.831 405.44C334.071 405.29 334.371 405.36 334.521 405.6L335.831 407.69C335.981 407.92 335.911 408.23 335.671 408.38C335.591 408.43 335.501 408.46 335.411 408.46L335.401 408.45Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_9",
                d: "M337.351 407.12C337.201 407.12 337.041 407.05 336.951 406.91L335.511 404.93C335.351 404.71 335.401 404.39 335.621 404.23C335.851 404.07 336.161 404.12 336.321 404.34L337.761 406.32C337.921 406.54 337.871 406.86 337.651 407.02C337.561 407.08 337.461 407.12 337.361 407.12H337.351Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_10",
                d: "M339.201 405.67C339.061 405.67 338.921 405.61 338.821 405.49L337.241 403.61C337.061 403.4 337.091 403.08 337.301 402.91C337.511 402.73 337.831 402.76 338.001 402.97L339.581 404.85C339.761 405.06 339.731 405.38 339.521 405.55C339.431 405.63 339.311 405.67 339.201 405.67Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_11",
                d: "M340.941 404.1C340.811 404.1 340.681 404.05 340.581 403.95L338.881 402.2C338.691 402 338.691 401.68 338.891 401.49C339.091 401.3 339.401 401.3 339.601 401.5L341.301 403.25C341.491 403.45 341.491 403.77 341.291 403.96C341.191 404.05 341.071 404.1 340.941 404.1Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_12",
                d: "M342.591 402.4C342.471 402.4 342.351 402.36 342.261 402.27L340.431 400.63C340.221 400.45 340.211 400.13 340.391 399.92C340.571 399.71 340.891 399.7 341.101 399.88L342.931 401.52C343.141 401.7 343.151 402.02 342.971 402.23C342.871 402.34 342.731 402.4 342.601 402.4H342.591Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_13",
                d: "M344.091 400.6C343.981 400.6 343.871 400.57 343.781 400.49L341.851 398.99C341.631 398.82 341.591 398.51 341.761 398.29C341.931 398.07 342.241 398.03 342.461 398.2L344.391 399.7C344.611 399.87 344.651 400.18 344.481 400.4C344.381 400.53 344.231 400.59 344.081 400.59L344.091 400.6Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_14",
                d: "M345.491 398.71C345.391 398.71 345.301 398.68 345.211 398.62L343.181 397.24C342.951 397.08 342.891 396.77 343.051 396.55C343.201 396.32 343.521 396.26 343.741 396.42L345.771 397.8C346.001 397.96 346.061 398.27 345.901 398.49C345.801 398.63 345.651 398.71 345.491 398.71Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_15",
                d: "M346.741 396.7C346.661 396.7 346.571 396.68 346.491 396.63L344.361 395.41C344.121 395.27 344.041 394.97 344.171 394.73C344.311 394.49 344.611 394.41 344.851 394.54L346.981 395.76C347.221 395.9 347.301 396.2 347.171 396.44C347.081 396.6 346.911 396.69 346.741 396.69V396.7Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_16",
                d: "M347.84 394.64C347.77 394.64 347.69 394.62 347.62 394.59L345.421 393.51C345.171 393.39 345.071 393.09 345.191 392.84C345.311 392.59 345.611 392.49 345.861 392.61L348.061 393.69C348.311 393.81 348.41 394.11 348.29 394.36C348.2 394.54 348.03 394.64 347.84 394.64Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_17",
                d: "M348.81 392.48C348.75 392.48 348.68 392.47 348.62 392.44L346.34 391.52C346.08 391.42 345.96 391.12 346.06 390.87C346.16 390.62 346.46 390.49 346.71 390.59L348.99 391.51C349.25 391.61 349.37 391.91 349.27 392.16C349.19 392.35 349 392.47 348.81 392.47V392.48Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_18",
                d: "M349.61 390.27C349.56 390.27 349.51 390.27 349.46 390.25L347.13 389.49C346.87 389.4 346.72 389.12 346.81 388.86C346.9 388.6 347.18 388.45 347.44 388.54L349.77 389.3C350.03 389.39 350.18 389.67 350.09 389.93C350.02 390.14 349.83 390.28 349.61 390.28V390.27Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_19",
                d: "M350.26 388.01C350.26 388.01 350.18 388.01 350.14 387.99L347.75 387.39C347.48 387.32 347.32 387.05 347.39 386.78C347.46 386.51 347.73 386.35 348 386.42L350.39 387.02C350.66 387.09 350.82 387.36 350.75 387.63C350.69 387.86 350.49 388.01 350.27 388.01H350.26Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_20",
                d: "M350.751 385.7C350.751 385.7 350.691 385.7 350.661 385.7L348.241 385.28C347.971 385.23 347.791 384.97 347.831 384.7C347.881 384.43 348.141 384.25 348.411 384.29L350.831 384.71C351.101 384.76 351.281 385.02 351.241 385.29C351.201 385.53 350.991 385.71 350.751 385.71V385.7Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_21",
                d: "M351.991 383.47C351.991 383.47 351.951 383.47 351.941 383.47L347.661 383.02C347.391 382.99 347.191 382.75 347.221 382.47C347.251 382.2 347.501 381.99 347.771 382.03L352.051 382.48C352.321 382.51 352.521 382.75 352.491 383.03C352.461 383.29 352.251 383.48 351.991 383.48V383.47Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_22",
                d: "M554.101 206.65C554.101 206.65 554.031 206.65 553.991 206.64C541.341 204.13 528.331 202.85 515.351 202.85C506.891 202.85 498.421 203.39 490.161 204.45C489.851 204.49 489.581 204.28 489.541 203.97C489.501 203.67 489.711 203.39 490.021 203.35C498.331 202.29 506.851 201.75 515.351 201.75C528.411 201.75 541.481 203.03 554.211 205.56C554.511 205.62 554.701 205.91 554.641 206.21C554.591 206.47 554.361 206.65 554.101 206.65Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_23",
                d: "M676.821 285.26C653.561 252.46 621.411 227.79 583.841 213.93C583.561 213.82 583.241 213.97 583.131 214.26C583.021 214.55 583.171 214.86 583.461 214.97C660.391 243.36 712.071 317.55 712.071 399.58C712.071 500.62 635.501 584.09 537.351 595.06C537.451 595.45 537.391 595.88 537.141 596.19C636.001 585.31 713.171 501.29 713.171 399.58C713.171 358.33 700.601 318.8 676.821 285.27V285.26Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_24",
                d: "M572.37 378.49C572.07 378.49 571.82 378.24 571.82 377.94C571.82 365.06 567.82 352.78 560.24 342.42C560.06 342.17 560.12 341.83 560.36 341.65C560.6 341.47 560.95 341.52 561.13 341.77C568.84 352.32 572.92 364.83 572.92 377.94C572.92 378.24 572.67 378.49 572.37 378.49Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_25",
                d: "M454.31 398.91C454.08 398.91 453.87 398.77 453.79 398.54C451.44 391.94 450.24 385 450.24 377.93C450.24 344.11 477.76 316.59 511.58 316.59C525.41 316.59 538.47 321.08 549.33 329.58C549.57 329.77 549.61 330.11 549.42 330.35C549.23 330.59 548.89 330.63 548.65 330.44C537.98 322.09 525.16 317.68 511.57 317.68C478.36 317.68 451.33 344.7 451.33 377.92C451.33 384.87 452.5 391.68 454.81 398.16C454.91 398.45 454.76 398.76 454.48 398.86C454.42 398.88 454.36 398.89 454.3 398.89L454.31 398.91Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_26",
                d: "M427.191 360.9C403.151 360.9 383.591 341.34 383.591 317.3C383.591 293.26 403.151 273.7 427.191 273.7C451.231 273.7 470.791 293.26 470.791 317.3C470.791 341.34 451.231 360.9 427.191 360.9ZM427.191 274.8C403.761 274.8 384.691 293.86 384.691 317.3C384.691 340.74 403.751 359.8 427.191 359.8C450.631 359.8 469.691 340.74 469.691 317.3C469.691 293.86 450.621 274.8 427.191 274.8Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_27",
                d: "M571.031 500.4C571.031 500.4 570.961 500.4 570.921 500.39C558.361 497.84 546.751 492.65 536.421 484.97C536.181 484.79 536.131 484.44 536.311 484.2C536.491 483.96 536.841 483.91 537.081 484.09C547.281 491.67 558.741 496.8 571.141 499.32C571.441 499.38 571.631 499.67 571.571 499.97C571.521 500.23 571.291 500.41 571.031 500.41V500.4Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_28",
                d: "M639.61 485.35C639.44 485.35 639.28 485.27 639.17 485.13C638.99 484.88 639.04 484.54 639.29 484.36C661.28 468.19 674.41 442.27 674.41 415.01C674.41 367.57 635.82 328.98 588.38 328.98C587.84 328.98 587.3 328.98 586.77 329H586.76C586.46 329 586.22 328.76 586.21 328.46C586.21 328.16 586.45 327.91 586.75 327.9C587.29 327.89 587.84 327.88 588.38 327.88C636.42 327.88 675.51 366.97 675.51 415.01C675.51 442.61 662.22 468.87 639.95 485.25C639.85 485.32 639.74 485.36 639.62 485.36L639.61 485.35Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_29",
                d: "M503.62 397.76C503.62 397.76 503.54 397.76 503.51 397.75C503.21 397.69 503.02 397.4 503.08 397.1C508.44 371.41 524.93 349.72 548.34 337.59C548.61 337.45 548.94 337.55 549.08 337.83C549.22 338.1 549.11 338.43 548.84 338.57C525.73 350.54 509.44 371.96 504.15 397.33C504.1 397.59 503.87 397.77 503.61 397.77L503.62 397.76Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_30",
                d: "M628.671 265.3C628.551 265.3 628.421 265.26 628.321 265.17C608.781 248.72 586.441 236.98 561.941 230.25C561.651 230.17 561.481 229.87 561.561 229.57C561.641 229.27 561.941 229.1 562.241 229.19C586.901 235.96 609.371 247.78 629.041 264.33C629.271 264.53 629.301 264.87 629.111 265.1C629.001 265.23 628.851 265.3 628.691 265.3H628.671Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_31",
                d: "M434.47 243.64C434.27 243.64 434.08 243.53 433.98 243.34C433.84 243.07 433.95 242.74 434.21 242.6C449.13 234.86 465.05 229.32 481.54 226.13C481.83 226.07 482.13 226.27 482.18 226.57C482.24 226.87 482.04 227.16 481.74 227.21C465.36 230.38 449.53 235.89 434.71 243.58C434.63 243.62 434.54 243.64 434.46 243.64H434.47Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_32",
                d: "M438.09 251.32C437.88 251.32 437.69 251.2 437.59 251L430.34 235.64C430.21 235.37 430.33 235.04 430.6 234.91C430.88 234.78 431.2 234.9 431.33 235.17L438.58 250.53C438.71 250.8 438.59 251.13 438.32 251.26C438.24 251.3 438.16 251.31 438.09 251.31V251.32Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_33",
                d: "M430.681 250.04C430.471 250.04 430.281 249.92 430.181 249.72L426.931 242.83C426.801 242.56 426.921 242.23 427.191 242.1C427.471 241.97 427.791 242.09 427.921 242.36L431.171 249.25C431.301 249.52 431.181 249.85 430.911 249.98C430.831 250.02 430.751 250.03 430.681 250.03V250.04Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_34",
                d: "M625.31 268.49C625.13 268.49 624.96 268.42 624.83 268.28C624.59 268.02 624.6 267.6 624.87 267.36L631.59 261.18C631.85 260.94 632.27 260.96 632.51 261.22C632.75 261.48 632.74 261.9 632.47 262.14L625.75 268.32C625.63 268.43 625.47 268.49 625.31 268.49Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_35",
                d: "M392.42 311.87C392.31 311.87 392.2 311.84 392.11 311.77C391.86 311.6 391.8 311.25 391.97 311L408.57 287.13C408.74 286.88 409.09 286.82 409.34 286.99C409.59 287.16 409.65 287.51 409.48 287.76L392.88 311.63C392.77 311.78 392.6 311.87 392.43 311.87H392.42Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_36",
                d: "M400.081 310.08C399.971 310.08 399.861 310.05 399.771 309.98C399.521 309.81 399.461 309.46 399.631 309.21L409.751 294.65C409.921 294.4 410.271 294.34 410.521 294.51C410.771 294.68 410.831 295.03 410.661 295.28L400.541 309.84C400.431 309.99 400.261 310.08 400.091 310.08H400.081Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_37",
                d: "M381.22 365.49C381.1 365.49 380.98 365.45 380.87 365.37C380.63 365.18 380.6 364.83 380.79 364.6L471.6 252.94C471.79 252.71 472.14 252.67 472.37 252.86C472.61 253.05 472.64 253.4 472.45 253.63L381.64 365.29C381.53 365.42 381.37 365.49 381.21 365.49H381.22Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_38",
                d: "M474.971 255.72C474.861 255.72 474.751 255.69 474.661 255.62L469.001 251.68C468.851 251.57 468.76 251.4 468.76 251.21C468.76 251.02 468.871 250.85 469.031 250.76L476.59 246.24C476.78 246.13 477.021 246.14 477.191 246.27C477.371 246.4 477.45 246.62 477.4 246.84L475.511 255.3C475.471 255.48 475.341 255.63 475.171 255.69C475.111 255.71 475.041 255.73 474.971 255.73V255.72ZM470.321 251.27L474.61 254.26L476.041 247.85L470.311 251.27H470.321Z",
                fill: "#02230B"
            }), t.createElement("line", {
                id: "dashed-line",
                x1: 1,
                y1: 383.5,
                x2: 507.001,
                y2: 383.5,
                stroke: "#02230B",
                strokeWidth: 2,
                strokeLinecap: "round"
            }), t.createElement("g", {
                id: "CHIP"
            }, t.createElement("path", {
                id: "Vector_39",
                d: "M556.58 336.48C556.28 336.48 556.03 336.24 556.03 335.93L555.78 291.57C551.53 288.82 547.71 285.63 544.43 282.07L537.6 288.06C537.37 288.26 537.02 288.24 536.82 288.01C536.62 287.78 536.64 287.43 536.87 287.23L544.1 280.89C544.32 280.69 544.67 280.71 544.87 280.93C548.24 284.65 552.19 287.97 556.62 290.81C556.78 290.91 556.87 291.08 556.87 291.27L557.12 335.93C557.12 336.23 556.88 336.48 556.57 336.48H556.58Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_40",
                d: "M537.96 288.39C537.53 288.77 536.88 288.72 536.5 288.29C536.12 287.86 536.17 287.21 536.6 286.83C537.03 286.45 537.68 286.5 538.06 286.93C538.44 287.36 538.39 288.01 537.96 288.39Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_41",
                d: "M555.551 335.89C555.551 336.46 556.021 336.92 556.591 336.92C557.161 336.92 557.621 336.45 557.621 335.88C557.621 335.31 557.151 334.85 556.581 334.85C556.011 334.85 555.551 335.32 555.551 335.89Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated"
            }, t.createElement("path", {
                id: "chip-path",
                d: "M515.95 308.84C515.65 308.84 515.41 308.6 515.4 308.3L514.73 281.51C514.73 281.32 514.82 281.14 514.97 281.04L535.25 267.5C535.38 267.41 535.55 267.38 535.7 267.43C535.85 267.47 535.98 267.58 536.05 267.72C537.46 270.68 539.13 273.53 541.02 276.16C541.19 276.4 541.14 276.72 540.92 276.91L526.75 288.42C526.52 288.61 526.17 288.58 525.98 288.34C525.79 288.1 525.82 287.76 526.06 287.57L539.83 276.38C538.14 273.98 536.63 271.42 535.33 268.76L515.83 281.78L516.5 308.27C516.5 308.57 516.27 308.83 515.96 308.83H515.95V308.84Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "3s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path"
            })))), t.createElement("path", {
                id: "Vector_42",
                d: "M516.991 308.22C517.001 308.79 516.551 309.27 515.981 309.28C515.411 309.29 514.931 308.84 514.921 308.27C514.911 307.7 515.361 307.22 515.931 307.21C516.501 307.2 516.981 307.65 516.991 308.22Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_43",
                d: "M525.801 287.16C525.361 287.52 525.291 288.17 525.651 288.61C526.011 289.05 526.661 289.12 527.101 288.76C527.541 288.4 527.611 287.75 527.251 287.31C526.891 286.87 526.241 286.8 525.801 287.16Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_44",
                d: "M519.801 273.08C519.621 273.08 519.441 272.99 519.341 272.83C519.171 272.57 519.251 272.23 519.501 272.07L533.021 263.33C529.431 253.51 529.371 244.08 529.441 241.39C529.441 241.09 529.681 240.84 530.001 240.85C530.301 240.85 530.541 241.11 530.541 241.41C530.471 244.08 530.541 253.57 534.201 263.35C534.291 263.59 534.201 263.86 533.981 264.01L520.091 272.99C520.001 273.05 519.891 273.08 519.791 273.08H519.801Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_45",
                d: "M528.97 241.43C528.99 240.86 529.46 240.41 530.03 240.43C530.6 240.45 531.05 240.92 531.03 241.49C531.01 242.06 530.54 242.51 529.97 242.49C529.4 242.47 528.95 242 528.97 241.43Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_46",
                d: "M519.28 271.63C518.8 271.94 518.66 272.58 518.97 273.06C519.28 273.54 519.92 273.68 520.4 273.37C520.88 273.06 521.02 272.42 520.71 271.94C520.4 271.46 519.76 271.32 519.28 271.63Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated_2"
            }, t.createElement("path", {
                id: "chip-path_2",
                d: "M513.201 262.3C512.981 262.3 512.771 262.17 512.691 261.95C510.231 255.68 509.251 248.29 509.771 239.97C509.791 239.72 509.971 239.51 510.221 239.46C512.831 238.98 516.931 238.35 521.681 238.05C522.001 238.03 522.241 238.26 522.261 238.56C522.281 238.86 522.051 239.12 521.751 239.14C517.301 239.42 513.431 240 510.841 240.46C510.401 248.44 511.361 255.53 513.721 261.54C513.831 261.82 513.691 262.14 513.411 262.25C513.341 262.28 513.281 262.29 513.211 262.29L513.201 262.3Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle_2",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "5s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path_2"
            })))), t.createElement("path", {
                id: "Vector_47",
                d: "M512.25 262.02C512.44 262.56 513.03 262.84 513.57 262.65C514.11 262.46 514.39 261.87 514.2 261.33C514.01 260.79 513.42 260.51 512.88 260.7C512.34 260.89 512.06 261.48 512.25 262.02Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_48",
                d: "M521.571 237.6C522.141 237.55 522.641 237.97 522.691 238.54C522.741 239.11 522.32 239.61 521.75 239.66C521.18 239.71 520.681 239.29 520.631 238.72C520.581 238.15 521.001 237.65 521.571 237.6Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_49",
                d: "M515.021 272.86C514.871 272.86 514.721 272.8 514.611 272.67C512.091 269.79 504.021 258.7 506.211 236.79C506.231 236.56 506.401 236.36 506.631 236.31C506.751 236.28 518.651 233.47 531.171 234.19C531.471 234.21 531.711 234.47 531.691 234.77C531.671 235.07 531.441 235.3 531.111 235.29C520.011 234.65 509.391 236.83 507.271 237.3C505.261 258.5 513.011 269.17 515.441 271.95C515.641 272.18 515.621 272.53 515.391 272.73C515.291 272.82 515.161 272.87 515.031 272.87L515.021 272.86Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_50",
                d: "M515.76 271.56C516.15 271.98 516.12 272.64 515.69 273.02C515.26 273.4 514.61 273.38 514.23 272.95C513.84 272.53 513.87 271.87 514.3 271.49C514.72 271.1 515.38 271.13 515.76 271.56Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_51",
                d: "M531.05 235.8C531.62 235.82 532.1 235.38 532.12 234.81C532.14 234.24 531.7 233.76 531.13 233.74C530.56 233.72 530.08 234.16 530.06 234.73C530.04 235.3 530.48 235.78 531.05 235.8Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_52",
                d: "M551.181 349.85C550.881 349.85 550.631 349.6 550.631 349.3V340.55C548.291 339.03 546.971 337.25 546.701 335.23C546.391 332.92 547.551 330.98 548.191 330.13L534.081 319.24C533.951 319.14 533.871 318.97 533.871 318.8V294.34C533.871 294.04 534.121 293.79 534.421 293.79C534.721 293.79 534.971 294.04 534.971 294.34V318.53L549.311 329.6C549.431 329.69 549.511 329.84 549.521 329.99C549.531 330.14 549.481 330.3 549.381 330.41C549.361 330.43 547.451 332.55 547.801 335.1C548.041 336.84 549.281 338.42 551.481 339.79C551.641 339.89 551.741 340.07 551.741 340.26V349.31C551.741 349.61 551.491 349.86 551.191 349.86L551.181 349.85Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_53",
                d: "M533.38 294.4C533.38 293.83 533.84 293.37 534.41 293.37C534.98 293.37 535.44 293.83 535.44 294.4C535.44 294.97 534.98 295.43 534.41 295.43C533.84 295.43 533.38 294.97 533.38 294.4Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_54",
                d: "M551.18 350.28C551.749 350.28 552.21 349.819 552.21 349.25C552.21 348.681 551.749 348.22 551.18 348.22C550.612 348.22 550.15 348.681 550.15 349.25C550.15 349.819 550.612 350.28 551.18 350.28Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_55",
                d: "M555.56 349.18C555.26 349.18 555.011 348.93 555.011 348.63V339.92C553.181 339.06 551.881 337.35 551.731 335.57C551.611 334.2 552.231 332.99 553.421 332.26C553.681 332.1 554.02 332.18 554.18 332.44C554.34 332.7 554.26 333.04 554 333.2C552.92 333.86 552.77 334.81 552.83 335.48C552.96 336.94 554.17 338.41 555.77 339.05C555.98 339.13 556.12 339.34 556.12 339.56V348.63C556.12 348.93 555.871 349.18 555.571 349.18H555.56Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_56",
                d: "M555.561 349.61C556.129 349.61 556.591 349.149 556.591 348.58C556.591 348.011 556.129 347.55 555.561 347.55C554.992 347.55 554.531 348.011 554.531 348.58C554.531 349.149 554.992 349.61 555.561 349.61Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_57",
                d: "M552.53 328.29C552.41 328.29 552.29 328.25 552.19 328.18L538.07 317.28C537.94 317.18 537.86 317.01 537.86 316.84V291.85C537.86 291.69 537.93 291.54 538.05 291.43L543.87 286.39C544.09 286.2 544.41 286.21 544.61 286.41C547.06 288.78 549.76 290.99 552.65 292.97C552.8 293.07 552.89 293.24 552.89 293.42L553.08 327.73C553.08 327.94 552.96 328.13 552.77 328.23C552.69 328.27 552.61 328.29 552.53 328.29ZM538.96 316.57L551.97 326.61L551.79 293.71C549.08 291.83 546.54 289.76 544.21 287.54L538.96 292.09V316.56V316.57Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated_3"
            }, t.createElement("path", {
                id: "chip-path_3",
                d: "M560.71 342.67C560.41 342.67 560.16 342.42 560.16 342.12V294.89C560.16 294.72 560.23 294.57 560.36 294.46L565.47 290.29C565.65 290.14 565.92 290.12 566.12 290.25C566.18 290.29 572.3 294.22 578.74 295.87C579.03 295.95 579.21 296.25 579.14 296.54C579.06 296.83 578.77 297.01 578.47 296.94C572.65 295.45 567.26 292.26 565.86 291.39L561.26 295.14V342.11C561.26 342.41 561.01 342.66 560.71 342.66V342.67Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle_3",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "8s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path_3"
            })))), t.createElement("path", {
                id: "Vector_58",
                d: "M578.3 297.37C578.85 297.52 579.42 297.19 579.57 296.64C579.72 296.09 579.39 295.52 578.84 295.37C578.29 295.22 577.72 295.55 577.57 296.1C577.42 296.65 577.75 297.22 578.3 297.37Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_59",
                d: "M564.71 327.92C564.61 327.92 564.51 327.89 564.42 327.84C564.26 327.74 564.16 327.56 564.16 327.37V296.79C564.16 296.62 564.23 296.47 564.36 296.36L565.84 295.15C566.01 295.01 566.26 294.99 566.45 295.09C569.58 296.81 574.82 299.2 579.3 300.25C579.55 300.31 579.72 300.53 579.72 300.79V319.09C579.72 320.01 579.18 320.87 578.35 321.28L564.94 327.86C564.86 327.9 564.78 327.92 564.7 327.92H564.71ZM565.26 297.05V326.48L577.88 320.29C578.34 320.07 578.63 319.59 578.63 319.09V301.22C574.3 300.14 569.37 297.92 566.26 296.23L565.27 297.04L565.26 297.05Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_60",
                d: "M567.92 341.34C567.78 341.34 567.64 341.29 567.53 341.18L564.36 338.01C564.26 337.91 564.2 337.77 564.2 337.62V331.81C564.2 331.6 564.32 331.41 564.51 331.32L579.65 323.89C581.47 323 582.64 321.12 582.64 319.09V296.4C582.64 296.1 582.89 295.85 583.19 295.85C583.49 295.85 583.74 296.1 583.74 296.4V319.09C583.74 321.53 582.32 323.8 580.14 324.87L565.31 332.14V337.38L568.32 340.39C568.53 340.6 568.53 340.95 568.32 341.17C568.21 341.28 568.07 341.33 567.93 341.33L567.92 341.34Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_61",
                d: "M568.611 340.02C569.011 340.42 569.011 341.08 568.611 341.48C568.211 341.88 567.551 341.88 567.151 341.48C566.751 341.08 566.751 340.42 567.151 340.02C567.551 339.62 568.211 339.62 568.611 340.02Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_62",
                d: "M584.22 296.46C584.22 295.89 583.76 295.43 583.19 295.43C582.62 295.43 582.16 295.89 582.16 296.46C582.16 297.03 582.62 297.49 583.19 297.49C583.76 297.49 584.22 297.03 584.22 296.46Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_63",
                d: "M570.34 335.22C570.15 335.22 569.96 335.12 569.86 334.94C569.71 334.67 569.81 334.34 570.07 334.19L583.64 326.6C585.64 325.48 586.89 323.36 586.89 321.07V313.88C586.89 313.61 587.09 313.38 587.36 313.34L609.79 309.91C610.08 309.86 610.37 310.07 610.42 310.37C610.47 310.67 610.26 310.95 609.96 311L587.99 314.35V321.07C587.99 323.76 586.53 326.25 584.18 327.56L570.61 335.15C570.53 335.2 570.43 335.22 570.34 335.22Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_64",
                d: "M570.89 335.55C570.39 335.83 569.76 335.65 569.48 335.15C569.2 334.65 569.38 334.02 569.88 333.74C570.38 333.46 571.01 333.64 571.29 334.14C571.57 334.64 571.39 335.27 570.89 335.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_65",
                d: "M609.98 311.48C610.54 311.39 610.93 310.87 610.85 310.3C610.76 309.74 610.24 309.35 609.67 309.43C609.11 309.52 608.72 310.04 608.8 310.61C608.89 311.17 609.41 311.56 609.98 311.48Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated_4"
            }, t.createElement("path", {
                id: "chip-path_4",
                d: "M588.46 308.8C588.33 308.8 588.2 308.75 588.1 308.66C587.98 308.56 587.91 308.41 587.91 308.25V302C587.91 301.7 588.16 301.45 588.46 301.45C588.76 301.45 589.01 301.7 589.01 302V307.62L604.59 305.55V302.29C604.59 302.02 604.78 301.79 605.05 301.75L623.32 298.6C623.62 298.55 623.9 298.75 623.96 299.05C624.02 299.35 623.81 299.63 623.51 299.69L605.7 302.76V306.04C605.7 306.32 605.5 306.55 605.22 306.59L588.54 308.8C588.54 308.8 588.49 308.8 588.47 308.8H588.46Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle_4",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "5s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path_4"
            })))), t.createElement("path", {
                id: "Vector_66",
                d: "M588.46 303.08C589.029 303.08 589.49 302.619 589.49 302.05C589.49 301.481 589.029 301.02 588.46 301.02C587.892 301.02 587.43 301.481 587.43 302.05C587.43 302.619 587.892 303.08 588.46 303.08Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_67",
                d: "M623.53 300.17C624.09 300.07 624.47 299.54 624.37 298.98C624.27 298.42 623.74 298.04 623.18 298.14C622.62 298.24 622.24 298.77 622.34 299.33C622.44 299.89 622.97 300.27 623.53 300.17Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_68",
                d: "M578.151 289.81C573.481 289.81 569.381 288.65 565.881 286.32C565.671 286.18 565.521 286.07 565.421 286.03C565.011 285.84 563.151 286.43 562.251 286.72C560.461 287.29 558.541 286.91 557.111 285.71C546.691 276.98 539.061 264.8 537.181 253.91C537.131 253.61 537.331 253.33 537.631 253.27C537.931 253.22 538.211 253.42 538.271 253.72C540.111 264.36 547.601 276.29 557.831 284.86C558.981 285.82 560.511 286.12 561.931 285.67C563.841 285.06 565.151 284.69 565.891 285.03C566.021 285.09 566.221 285.22 566.501 285.4C572.431 289.34 580.251 289.75 589.751 286.63C590.041 286.54 590.351 286.69 590.441 286.98C590.531 287.27 590.381 287.58 590.091 287.67C585.781 289.09 581.801 289.79 578.151 289.79V289.81Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_69",
                d: "M536.731 254.05C536.631 253.49 537.011 252.95 537.571 252.85C538.131 252.75 538.671 253.13 538.771 253.69C538.871 254.25 538.491 254.79 537.931 254.89C537.371 254.99 536.831 254.61 536.731 254.05Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_70",
                d: "M590.17 288.14C590.71 287.97 591.02 287.39 590.85 286.84C590.68 286.3 590.1 285.99 589.55 286.16C589.01 286.33 588.7 286.91 588.87 287.46C589.04 288 589.62 288.31 590.17 288.14Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated_5"
            }, t.createElement("path", {
                id: "chip-path_5",
                d: "M578.301 285.37C576.961 285.37 575.801 285.24 575.011 285.12C571.951 284.65 570.291 283.4 568.951 282.4C568.391 281.98 567.871 281.59 567.311 281.3C566.371 280.81 565.061 281.22 563.911 281.58C562.861 281.91 562.041 282.16 561.441 281.78C558.981 280.2 556.541 278.12 554.191 275.6C547.371 268.28 539.371 254.92 540.001 232.9C540.001 232.6 540.251 232.37 540.551 232.37H540.571C540.871 232.37 541.111 232.63 541.101 232.94C540.491 254.59 548.321 267.69 555.001 274.86C557.291 277.32 559.661 279.34 562.041 280.87C562.231 280.97 563.051 280.72 563.591 280.55C564.881 280.15 566.481 279.65 567.821 280.35C568.461 280.68 569.021 281.1 569.611 281.55C570.911 282.53 572.391 283.64 575.181 284.06C576.701 284.29 579.691 284.56 582.571 283.76C582.861 283.68 583.171 283.85 583.251 284.14C583.331 284.43 583.161 284.74 582.871 284.82C581.301 285.26 579.711 285.4 578.311 285.4L578.301 285.37Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle_5",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "3s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path_5"
            })))), t.createElement("path", {
                id: "Vector_71",
                d: "M539.551 232.95C539.551 232.38 540.011 231.91 540.581 231.91C541.151 231.91 541.621 232.37 541.621 232.94C541.621 233.51 541.161 233.98 540.591 233.98C540.021 233.98 539.551 233.52 539.551 232.95Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_72",
                d: "M582.98 285.26C583.52 285.09 583.82 284.5 583.65 283.96C583.48 283.42 582.89 283.12 582.35 283.29C581.81 283.46 581.51 284.05 581.68 284.59C581.85 285.13 582.44 285.43 582.98 285.26Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_73",
                d: "M578.76 293.18C578.46 293.18 578.22 292.94 578.21 292.64C578.21 292.34 578.44 292.09 578.75 292.08C589.21 291.87 594.57 288.22 594.63 286.23C594.71 283.64 594.63 279.45 594.63 279.41C594.63 279.22 594.72 279.04 594.88 278.94C594.93 278.91 600.07 275.5 602.69 273.26C602.92 273.06 603.27 273.09 603.47 273.32C603.67 273.55 603.64 273.9 603.41 274.1C601.04 276.12 596.83 278.97 595.74 279.7C595.76 280.71 595.81 284.06 595.74 286.27C595.64 289.43 589.13 292.97 578.78 293.18H578.77H578.76Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_74",
                d: "M578.85 293.63C578.28 293.65 577.8 293.21 577.77 292.64C577.75 292.07 578.19 291.59 578.76 291.56C579.33 291.53 579.81 291.98 579.84 292.55C579.86 293.12 579.42 293.6 578.85 293.63Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_75",
                d: "M603.65 274.48C604.09 274.11 604.15 273.46 603.78 273.02C603.41 272.58 602.76 272.52 602.32 272.89C601.88 273.26 601.82 273.91 602.19 274.35C602.56 274.79 603.21 274.85 603.65 274.48Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "chip-animated_6"
            }, t.createElement("path", {
                id: "chip-path_6",
                d: "M588.81 295.28C588.61 295.28 588.42 295.17 588.33 294.99C588.19 294.72 588.29 294.39 588.55 294.25C590.33 293.29 594.73 290.9 597.03 289.39C600.54 287.08 599.301 282.02 599.291 281.97C599.241 281.76 599.31 281.55 599.47 281.41L609.56 272.94C609.79 272.75 610.14 272.77 610.33 273.01C610.53 273.24 610.501 273.59 610.261 273.78L600.421 282.04C600.671 283.34 601.261 287.91 597.631 290.3C595.291 291.84 590.86 294.25 589.06 295.21C588.98 295.25 588.89 295.28 588.8 295.28H588.81Z",
                fill: "#02230B"
            }), t.createElement("circle", {
                id: "chip-circle_6",
                cx: 0,
                cy: 0,
                r: 3,
                fill: "red"
            }, t.createElement("animateMotion", {
                dur: "3s",
                repeatCount: "indefinite",
                begin: "indefinite",
                className: "animate-chip-circles"
            }, t.createElement("mpath", {
                xlinkHref: "#chip-path_6"
            })))), t.createElement("path", {
                id: "Vector_76",
                d: "M589.35 295.61C588.85 295.88 588.22 295.7 587.95 295.19C587.68 294.69 587.86 294.06 588.37 293.79C588.87 293.52 589.5 293.7 589.77 294.21C590.04 294.71 589.86 295.34 589.35 295.61Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_77",
                d: "M610.541 274.18C610.981 273.81 611.031 273.16 610.671 272.72C610.301 272.28 609.651 272.23 609.211 272.59C608.771 272.96 608.721 273.61 609.081 274.05C609.451 274.49 610.101 274.54 610.541 274.18Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_78",
                d: "M594.39 297.05C594.22 297.05 594.06 296.97 593.95 296.83C593.77 296.59 593.82 296.24 594.06 296.06C596.1 294.54 600.98 290.86 602.36 289.6C604.25 287.88 603.57 284.26 603.56 284.22C603.52 284.03 603.59 283.83 603.73 283.7L619.39 269.65C619.62 269.45 619.96 269.47 620.17 269.69C620.37 269.92 620.35 270.26 620.13 270.47L604.69 284.31C604.84 285.34 605.1 288.58 603.1 290.4C601.68 291.69 596.76 295.4 594.72 296.93C594.62 297 594.51 297.04 594.39 297.04V297.05Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_79",
                d: "M595.06 297.29C594.6 297.63 593.96 297.54 593.61 297.09C593.27 296.63 593.36 295.99 593.81 295.64C594.27 295.3 594.91 295.39 595.26 295.84C595.6 296.3 595.51 296.94 595.06 297.29Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_80",
                d: "M620.42 270.86C620.85 270.48 620.88 269.83 620.5 269.4C620.12 268.97 619.47 268.94 619.04 269.32C618.61 269.7 618.58 270.35 618.96 270.78C619.34 271.21 619.99 271.24 620.42 270.86Z",
                fill: "#02230B"
            })), t.createElement("path", {
                id: "Vector_81",
                d: "M475.371 592.2C386.011 573.68 318.641 494.34 318.641 399.57C318.641 304.8 387.661 221.4 482.751 205.54C483.051 205.49 483.251 205.21 483.201 204.91C483.151 204.61 482.871 204.41 482.571 204.46C436.941 212.07 395.171 235.73 364.941 271.09C334.381 306.84 317.541 352.47 317.541 399.57C317.541 494.79 385.171 574.51 474.921 593.23C474.901 592.83 475.061 592.45 475.371 592.2Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_82",
                d: "M421.43 323.06C421.994 323.06 422.45 322.603 422.45 322.04C422.45 321.477 421.994 321.02 421.43 321.02C420.867 321.02 420.41 321.477 420.41 322.04C420.41 322.603 420.867 323.06 421.43 323.06Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_83",
                d: "M343.45 438.62C343.2 438.62 342.97 438.45 342.91 438.19C340.1 425.59 338.67 412.59 338.67 399.57C338.67 335.86 373.19 276.84 428.76 245.53C429.03 245.38 429.36 245.47 429.51 245.74C429.66 246 429.57 246.34 429.3 246.49C374.08 277.6 339.77 336.26 339.77 399.57C339.77 412.52 341.19 425.43 343.98 437.95C344.05 438.25 343.86 438.54 343.56 438.61C343.52 438.61 343.48 438.62 343.44 438.62H343.45Z",
                fill: "#02230B"
            }), t.createElement("g", {
                id: "Arrow"
            }, t.createElement("path", {
                id: "Vector_84",
                d: "M360.28 266.42C359.42 266.42 358.45 266.18 357.43 265.5C356.16 264.65 355.041 262.76 353.741 260.57C350.771 255.55 347.4 249.87 340.92 253.46C340.65 253.61 340.32 253.51 340.17 253.25C340.02 252.98 340.12 252.65 340.38 252.5C347.79 248.39 351.77 255.11 354.68 260.01C355.86 262 356.97 263.88 358.04 264.59C360.45 266.19 362.23 264.7 362.31 264.63C362.54 264.43 362.89 264.46 363.08 264.68C363.28 264.91 363.26 265.25 363.03 265.45C362.53 265.89 361.531 266.41 360.271 266.41L360.28 266.42Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_85",
                d: "M312.31 248.61C312.18 248.61 312.05 248.56 311.95 248.47C311.83 248.37 311.76 248.22 311.76 248.06V247.4L293.8 229.69C293.62 229.51 293.59 229.24 293.71 229.03C293.83 228.81 294.09 228.71 294.33 228.77C301.89 230.78 317.05 231.87 318.93 232L319.6 231.53C319.73 231.44 319.88 231.41 320.03 231.45C320.18 231.48 320.31 231.58 320.39 231.71C320.47 231.86 322.44 235.36 322.44 241.94C322.44 242.24 322.19 242.49 321.89 242.49C321.59 242.49 321.34 242.24 321.34 241.94C321.34 237.11 320.22 233.99 319.7 232.8L319.4 233.01C319.3 233.08 319.17 233.11 319.05 233.11C318.89 233.1 304.56 232.15 295.98 230.3L312.7 246.79C312.8 246.89 312.86 247.03 312.86 247.18V247.42C314.21 247.14 317.55 246.25 320.59 243.88C320.83 243.69 321.17 243.74 321.36 243.98C321.55 244.22 321.5 244.56 321.26 244.75C317.1 248 312.57 248.6 312.37 248.63C312.35 248.63 312.32 248.63 312.3 248.63L312.31 248.61Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_86",
                d: "M322.971 253.78H322.951C320.851 253.71 319.231 253 318.291 251.7C317.261 250.29 317.071 248.27 317.751 245.85C317.831 245.56 318.141 245.39 318.431 245.47C318.721 245.55 318.891 245.86 318.811 246.15C318.221 248.23 318.351 249.92 319.181 251.05C319.701 251.76 320.501 252.24 321.531 252.49C320.591 251.12 320.581 249.65 320.701 248.77C320.911 247.16 321.781 245.68 322.761 245.25C323.041 245.13 323.361 245.25 323.481 245.54C323.601 245.82 323.481 246.14 323.191 246.26C322.651 246.49 321.961 247.58 321.791 248.92C321.671 249.82 321.711 251.52 323.321 252.8C323.511 252.95 323.581 253.2 323.491 253.42C323.411 253.64 323.201 253.78 322.971 253.78Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_87",
                d: "M324.31 242.04C324.31 242.04 324.28 242.04 324.26 242.04C323.96 242.01 323.74 241.74 323.76 241.44C323.85 240.49 324.35 239.26 325.48 238.69C326.17 238.33 327 238.27 327.94 238.5C327.31 238.06 326.54 237.72 325.73 237.61C324.37 237.43 323.13 237.93 322.12 239.06C321.92 239.29 321.57 239.31 321.34 239.11C321.11 238.91 321.09 238.56 321.29 238.33C322.88 236.53 324.66 236.35 325.87 236.52C328.01 236.81 329.81 238.36 330.48 239.73C330.59 239.95 330.54 240.21 330.36 240.37C330.18 240.53 329.92 240.56 329.71 240.44C328.12 239.5 326.83 239.24 325.98 239.67C325.25 240.04 324.92 240.92 324.86 241.55C324.83 241.83 324.59 242.05 324.31 242.05V242.04Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_88",
                d: "M326.48 254.23C326.25 254.23 326.04 254.08 325.96 253.86C325.88 253.62 325.97 253.35 326.19 253.21C326.19 253.21 326.51 252.98 326.6 252.4C326.71 251.65 326.45 250.27 324.58 247.96C324.39 247.72 324.43 247.38 324.66 247.19C324.9 247 325.24 247.04 325.43 247.27C327.16 249.41 327.91 251.22 327.67 252.63C327.66 252.72 327.64 252.8 327.62 252.87C328.41 252.6 329.01 252.16 329.35 251.58C329.89 250.66 329.82 249.37 329.16 247.83C329.04 247.55 329.16 247.23 329.45 247.11C329.73 246.99 330.05 247.11 330.17 247.4C331.19 249.76 330.8 251.28 330.3 252.14C329.62 253.3 328.28 254.04 326.53 254.23C326.51 254.23 326.49 254.23 326.47 254.23H326.48Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_89",
                d: "M333.601 240.14C333.481 239.92 333.231 239.81 332.991 239.87C332.751 239.93 332.581 240.15 332.571 240.4C332.571 240.42 332.531 241.94 331.451 242.88C330.761 243.47 329.771 243.7 328.531 243.58C328.631 243.94 328.661 244.31 328.631 244.68C330.091 244.78 331.291 244.47 332.171 243.71C332.701 243.25 333.041 242.7 333.261 242.19C333.471 242.99 333.451 243.72 333.191 244.35C332.581 245.87 330.801 246.45 330.781 246.46C330.491 246.55 330.331 246.86 330.421 247.15C330.491 247.38 330.711 247.54 330.941 247.54C330.991 247.54 331.051 247.54 331.101 247.51C331.191 247.48 333.381 246.78 334.201 244.77C334.741 243.43 334.541 241.88 333.591 240.14H333.601Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_90",
                d: "M336.761 253.08C336.761 253.08 336.681 253.08 336.641 253.07L333.321 252.32C333.021 252.25 332.841 251.96 332.911 251.66C332.981 251.36 333.271 251.18 333.571 251.25L336.891 252C337.191 252.07 337.371 252.36 337.301 252.66C337.241 252.91 337.021 253.09 336.761 253.09V253.08Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_91",
                d: "M337.71 251.68C337.58 251.68 337.45 251.63 337.34 251.54C336.02 250.36 334.52 249.06 334.3 248.93C334.03 248.79 333.93 248.47 334.07 248.2C334.21 247.93 334.55 247.83 334.82 247.96C335.03 248.07 336.13 249 338.07 250.72C338.3 250.92 338.32 251.27 338.12 251.5C338.01 251.62 337.86 251.68 337.71 251.68Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_92",
                d: "M339.691 250.59C339.491 250.59 339.291 250.48 339.201 250.29C339.071 250.02 339.171 249.7 339.431 249.56C339.521 249.49 339.791 249.21 340.021 248.95C341.311 247.55 343.981 244.64 347.661 244.64C350.471 244.64 351.831 246.59 351.881 246.67C352.051 246.92 351.981 247.26 351.731 247.43C351.481 247.6 351.141 247.53 350.971 247.28C350.931 247.22 349.871 245.73 347.661 245.73C344.461 245.73 342.011 248.4 340.831 249.68C340.371 250.18 340.151 250.41 339.931 250.52C339.851 250.56 339.771 250.58 339.681 250.58L339.691 250.59Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_93",
                d: "M317.351 238.27C318.441 236.83 321.381 236 321.381 236L321.591 237.13C321.591 237.13 319.141 237.15 317.351 238.26V238.27Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_94",
                d: "M319.781 239.57C321.221 239.25 321.541 238.39 321.541 238.39L321.601 239.57C321.601 239.57 320.361 239.98 319.791 239.57H319.781Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_95",
                d: "M308.291 233.73C311.281 234.71 314.141 236.07 316.771 237.79C313.781 236.81 310.921 235.44 308.291 233.73Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_96",
                d: "M311.561 233.26C313.541 233.85 315.391 234.83 316.981 236.14C315.001 235.55 313.161 234.57 311.561 233.26Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_97",
                d: "M333.611 245.79C333.311 244.68 333.601 244.14 333.601 244.14L333.861 243.09L333.541 241.37L331.081 243.7L329.671 243.6C329.671 243.6 327.531 242.49 326.101 241.85C324.661 241.21 325.701 239.86 325.701 239.86L326.201 239.25L324.991 239.39L324.131 240.15C322.801 238.42 325.641 237.8 326.401 238.4C327.161 239.01 328.881 239.1 328.881 239.1C328.881 239.1 326.981 237.28 325.861 237.12C324.731 236.96 322.631 237.6 322.631 237.6L321.741 238.56L321.351 241.58L304.261 233.32C304.261 233.32 305.161 232.15 306.981 231.99L308.811 231.83L305.841 231.5C304.051 232.07 301.281 232.74 302.971 231.12L294.321 229.49L301.531 236.45L302.231 236.99V236.45L298.341 231.85L320.441 243.21C320.441 243.21 320.041 244.04 319.191 244.47C318.341 244.9 317.361 243.87 317.361 243.87C317.451 245.82 315.831 247.36 314.641 243.02C315.111 247.96 313.901 248.04 311.961 242.3C312.411 246.64 311.471 245.56 309.801 243.91C308.131 242.26 309.751 242.6 309.751 242.6L304.031 238.23L311.361 246.35L312.471 247.9L316.731 246.77L318.561 246.01H319.421C320.681 245.18 322.061 245.22 322.061 245.22C322.061 245.22 320.451 247.93 320.661 249.5C320.871 251.07 321.361 250.33 321.361 250.33L321.621 248.35C323.691 248.61 324.751 250.14 326.281 249.98L326.981 249.5C326.111 248.12 325.671 247.53 325.671 247.53C325.671 247.53 327.791 247.34 328.871 245.45C331.521 245.64 332.601 244.17 332.601 244.17C332.601 244.17 330.991 246.37 330.561 246.62C330.141 246.88 328.961 247.29 328.961 247.29L329.401 248.37L329.981 248.95L330.821 250.5C330.821 250.5 331.111 249.16 330.841 247.89C331.831 247.58 333.211 249.08 333.211 249.08L334.261 250.01C334.761 249.26 335.791 250.14 335.791 250.14L336.171 249.01C336.171 249.01 333.931 246.89 333.641 245.78L333.611 245.79ZM325.271 244.32C324.871 245.47 323.011 245.09 323.671 242.04C323.671 242.04 325.671 243.17 325.271 244.32ZM326.651 245.55C326.341 244.88 326.741 243.81 327.231 243.69C327.641 243.59 328.241 244.01 328.171 244.42C328.061 245.01 326.951 246.19 326.651 245.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_98",
                d: "M318.49 249.22C318.93 251.34 320.81 251.58 320.67 250.09C320.53 248.6 321.46 247.53 321.46 247.53L321.82 252.16L322.43 253.18L319.54 252.37L317.9 250.51L318.48 249.22H318.49Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_99",
                d: "M330.82 249.31C333.03 250.71 333.26 249.11 332.89 248.8L332.52 248.49L332.74 248.04L335.45 249.35C335.45 249.35 334.33 249.67 334.24 250.02C334.15 250.37 334.11 251.37 334.67 251.5C335.23 251.63 335.84 251.69 335.84 251.69C335.84 251.69 336.22 250.38 336.54 250.36C336.86 250.34 337.19 249.93 337.19 249.93C337.88 250.08 339.19 249.87 339.85 249.16C340.51 248.45 340.94 248.63 340.94 248.63L341.02 249.52C339.63 251.56 340.04 252.57 341.19 252.11C342.34 251.65 342.26 252.22 342.26 252.22L341 253.1C340.63 255.01 340.22 255.15 339.52 255.27C338.82 255.39 338.18 256.33 336.95 255.8C335.72 255.27 334.89 253.9 335.44 252.59L334.42 252.01L333.89 252.46C332.25 252.81 330.32 252.92 329.47 252.51L329.94 251.7L330.51 249.93L330.85 249.33L330.82 249.31Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_100",
                d: "M361.301 262.62C362.891 260.08 360.84 259.19 360.84 259.19C361.14 257.28 359.141 256.68 358.501 255.1C357.861 253.53 357.011 253.1 356.161 252.89C356.161 252.89 356.42 253.49 356.37 253.95C355.31 252.29 353.01 252.33 353.01 252.33C354.71 253.44 355.441 255.48 356.331 256.16C357.141 254.63 358.881 257.22 356.031 257.05C356.971 259.05 358.461 259.82 359.561 260.58C360.671 261.35 360.241 262.11 359.691 262.01C359.141 261.91 357.12 260.29 355.84 259.65C356.44 258.7 355.751 257.78 355.751 257.78C355.921 259.49 354.461 259.03 353.941 258.76C353.411 258.48 354.221 259.76 354.221 259.76C357.001 259.19 362.03 268.74 366.62 264.62C366.62 264.62 363.94 265.04 361.29 262.61L361.301 262.62ZM359.98 259.44C359.98 259.44 358.321 259.28 357.331 257.84C358.771 258.24 360.17 258.08 359.98 259.44Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_101",
                d: "M356.96 250.52C355.05 249.72 352.97 246.47 350.61 246.43C347.83 246.39 346.05 247.9 343.65 249.11C344.38 249.91 347.19 247.96 348.63 248.76C349.38 249.18 347.64 250.04 347.51 250.64C351.66 248.82 353.61 251.34 353.86 252.62L354.53 253.07C354.53 253.07 354.5 251.98 353.99 250.86C354.76 251.02 355.94 251.12 356.96 250.51V250.52ZM351.46 249.32C351.46 249.32 352.16 249.17 352.52 249.04C351.22 248.1 349.33 248.42 349.33 248.42C349.33 248.42 348.68 247.82 349.6 247.37C351.69 247.03 352.9 248.89 354.31 249.57C353.48 249.8 351.95 249.51 351.46 249.31V249.32Z",
                fill: "#02230B"
            }), t.createElement("line", {
                id: "Line 1",
                x1: 528.394,
                y1: 398.795,
                x2: 339.394,
                y2: 254.795,
                stroke: "#02230B",
                strokeWidth: 2
            })), t.createElement("g", {
                id: "Bird"
            }, t.createElement("path", {
                id: "Vector_102",
                d: "M509.84 142.39C511.44 143.36 515.6 145.58 519.93 147.83C520.67 147.92 521.4 148.02 522.13 148.13C516.58 145.51 510.25 142.58 509.84 142.39ZM647.12 16.57C645.69 19.4 643.43 21.83 641.21 24.05C631.31 33.09 619.62 39.83 609.54 48.71C605.48 52.14 601.57 56.07 598.39 60.39C596.64 62.98 594.81 65.96 593.52 68.8C586.35 84.26 584.27 102.21 572.41 115.13C568.54 119.64 564.02 123.42 559.55 127.32C563.24 120.93 579.09 106.85 582.88 92.25C574.58 111.06 564.31 117.15 556.46 128.32C556.62 124.78 562.97 117.91 564.63 114.93L560.16 118.43L560.48 116.83C566.66 112.36 575.78 104.21 578.47 97C578.21 97.45 573.99 104.75 567.59 109.14L567.52 109.2C584.05 92.29 589.36 69.42 589.42 69.14C589.47 68.89 589.35 68.63 589.11 68.52C588.88 68.41 588.6 68.48 588.45 68.68C586.48 71.23 583.8 73.19 580.97 75.26C578.98 76.72 576.86 78.28 574.77 80.18C575.86 78.68 577 77.13 578.18 75.55C582.3 69.98 586.72 64.03 590.28 57.9C590.77 57.06 591.24 56.21 591.69 55.37C591.71 55.36 591.71 55.35 591.71 55.34C594.29 50.53 596.26 45.64 597.08 40.77C597.13 40.5 596.97 40.24 596.7 40.15C596.57 40.11 596.43 40.12 596.31 40.19C596.19 40.24 596.1 40.33 596.04 40.45C595.59 41.43 594.87 42.43 593.94 43.48C592.14 45.51 589.54 47.73 586.51 50.3C581.62 54.47 575.74 59.49 570.16 66.2C572.44 60.59 573.22 55.02 573.87 50.33C574.33 46.95 574.74 44.03 575.6 42C575.69 41.78 575.63 41.52 575.45 41.37C575.44 41.36 575.43 41.35 575.41 41.34C575.23 41.21 574.98 41.2 574.79 41.33C574.62 41.44 574.45 41.56 574.29 41.69C571.98 43.47 570.54 46.66 569.15 49.75C568.46 51.29 567.8 52.76 567.05 54.02C566.66 54.66 566.26 55.3 565.85 55.95C565.19 57.01 564.5 58.12 563.83 59.33C563.09 60.67 562.38 62.14 561.76 63.84C561.79 63.07 561.81 62.31 561.83 61.55C561.9 58.02 561.8 54.65 561.62 51.45C561.58 50.62 561.53 49.8 561.47 49C561.33 46.78 561.15 44.64 560.98 42.58C560.33 34.78 559.77 28.05 560.95 21.63C561 21.41 560.89 21.18 560.7 21.06C560.5 20.94 560.26 20.96 560.08 21.1C557.53 23.08 554.46 30.39 553.23 37.39C553.16 37.81 553.07 38.23 552.97 38.65C552.73 39.67 552.43 40.71 552.09 41.76C551.88 42.39 551.67 43.04 551.45 43.69C550.57 46.32 549.58 49.26 548.92 52.9C548.77 53.75 548.63 54.63 548.52 55.56C548.26 57.72 548.13 60.11 548.19 62.79C548.21 63.79 548.26 64.82 548.34 65.9C548.39 66.48 548.44 67.07 548.5 67.67C548.6 68.67 548.71 69.65 548.8 70.62C548.86 71.12 548.91 71.62 548.96 72.12C549.08 73.32 549.19 74.5 549.3 75.66C548.15 72.4 546.63 69.26 545.38 66.05C538.09 49.26 535.56 33.28 538.67 15.15C533.78 37.73 538.62 54.01 547.67 74.52C548.55 76.81 549.46 79.14 549.83 81.51C550.24 86.58 550.5 91.39 550.5 96.23C549.24 92.76 547.14 88.33 542.53 83.86C540.61 79.59 537.79 74.2 534.06 69.18C532.71 63.4 531.76 57.53 531.28 51.61C529.91 33.74 533.08 14.76 543.77 0C532.57 14.01 528.94 32.18 530.03 49.95C528.3 48.75 526.57 47.01 524.76 45.19C519.44 39.85 512.83 33.21 501.07 34.69C500.83 34.72 500.65 34.89 500.6 35.12C500.55 35.36 500.66 35.59 500.86 35.71C508.13 39.91 512.2 45.5 516.13 50.89C517.73 53.09 519.28 55.21 521 57.2C519.65 56.47 518.26 55.84 516.8 55.35C516.62 55.29 516.42 55.33 516.27 55.45C516.13 55.57 516.05 55.76 516.08 55.95C517.04 62.43 518.58 67.8 520.45 72.34C517.67 69.41 514.24 67.12 510.96 64.78C498.17 55.75 480.92 47.03 474.33 32.17C480.15 47.55 497.49 56.68 510.31 65.72C514.56 68.77 519.28 71.78 522.2 76.18C523.8 79.37 525.56 82.09 527.35 84.48C527.87 89.87 529.24 95.39 530.93 100.54C523.59 90.81 513.53 84.96 502.65 81.33C496.66 77.79 491.19 73.36 486.54 68.2C471.33 51.58 468.67 28.93 477.56 8.51C467.62 28.92 470.32 52 485.72 68.93C489.54 73.25 493.97 77 498.8 80.14C486.3 76.59 473.04 75.61 461.78 74.78C455.3 74.3 449.7 73.89 445.34 73.06C438.52 71.49 431.99 70.97 426.75 71.96C432.17 71.68 438.41 72.44 444.8 74C444.87 74.06 444.95 74.1 445.04 74.12C445.3 74.17 445.59 74.22 445.86 74.27C459.52 77.77 473.7 84.86 481.93 93.34C477.59 93.11 473.34 93.17 469.19 93.22C464.68 93.28 460.43 93.33 456.15 93.07C443.61 92.3 421.29 88.4 412.54 70.84C409.52 62.72 409.38 52.72 413.39 40C408.64 52.68 408.5 62.81 411.49 71.11C411.5 71.17 411.51 71.24 411.54 71.3C411.56 71.34 411.59 71.38 411.61 71.42C419.32 92.16 446.7 101.46 470.42 110.89C480.47 115.2 491.4 119.47 498.68 127.9C496.26 127.53 493.91 127.07 491.61 126.35C491.14 126.2 490.68 126.04 490.21 125.87C489.3 125.53 488.4 125.14 487.51 124.7C487.31 124.6 487.07 124.63 486.9 124.78C486.73 124.93 486.67 125.16 486.75 125.38C486.83 125.6 488.66 130.62 493.44 136.16C492.6 135.92 491.77 135.69 490.95 135.47C487.35 134.5 483.96 133.58 479.69 131.4C471.15 127.05 463.83 127.07 463.51 127.07C463.27 127.07 463.06 127.23 462.99 127.46C462.92 127.69 463.02 127.94 463.22 128.08C472.78 134.34 478.26 139.93 483.1 144.86C483.24 145.01 483.38 145.15 483.52 145.29C477.6 150.01 469.13 165.38 467.36 183.78C466.82 183.95 466.42 184.44 466.37 185.03C466.3 185.83 466.89 186.53 467.69 186.6C468.49 186.66 469.19 186.07 469.25 185.27C469.3 184.67 468.97 184.12 468.46 183.86C470.33 164.27 479.4 149.94 484.29 146.08C486.61 148.43 488.83 150.6 491.31 152.54L488.07 152.81C487.87 152.83 487.7 152.95 487.61 153.14C487.53 153.32 487.56 153.53 487.68 153.69C492.65 160.32 498.77 166.32 505.44 170.68C493.45 179.49 477.94 202.3 480.21 222.12C481.47 233.13 487.94 241.22 499.42 246.18C499.42 246.74 499.76 247.27 500.31 247.5C501.05 247.81 501.9 247.46 502.2 246.72C502.51 245.98 502.15 245.13 501.42 244.83C500.85 244.59 500.23 244.75 499.82 245.16C494.95 243.05 491.02 240.36 488.04 237.1L488.02 237.08C484.68 233.47 483.38 228.02 484.28 221.31C485.88 209.37 495.34 192.44 512.84 181.42C514.72 182.79 516.89 183.76 519.24 184.22C520.99 184.57 522.76 184.62 524.5 184.4C522.95 185.52 520.77 186.52 518.48 187.57C515.56 188.9 512.54 190.28 510.63 192.07C508.18 194.35 505.27 194.48 502.7 194.59C502.38 194.6 502.08 194.62 501.77 194.64H501.69C500.8 194.69 499.97 194.78 499.23 195.01C498.94 195.09 498.78 195.4 498.87 195.69C498.94 195.93 499.16 196.08 499.39 196.08C499.44 196.08 499.5 196.07 499.55 196.06C499.97 195.93 500.45 195.85 500.96 195.8H500.97C503.18 195.45 506.51 196.47 510.37 197.63C515.17 199.09 520.86 200.81 526.87 200.81C532.17 200.81 537.7 199.46 543.08 195.43C543.29 195.76 543.85 196.55 544.46 196.55C545.19 196.55 546.87 196.39 547.04 197.46C540.97 200.24 525.23 208.88 516.06 226.98C515.51 226.95 514.97 227.25 514.7 227.77C514.35 228.49 514.64 229.36 515.35 229.72C516.06 230.07 516.93 229.78 517.29 229.07C517.57 228.52 517.45 227.87 517.06 227.44C525.81 210.18 540.66 201.68 546.95 198.71C546.73 199.64 546.23 200.53 545.6 200.89C544.71 201.4 543.71 201.9 543.69 203.13C543.69 203.49 543.69 203.92 543.7 204.36C543.78 204.38 543.87 204.4 543.96 204.42C544.22 204.46 544.46 204.51 544.72 204.57C544.79 204.59 544.84 204.6 544.88 204.61L545.05 204.35L546.63 204.66C547.97 203.31 549.18 203.25 549.74 203.32C543.54 208.92 534.79 218.91 534.71 230.68C534.16 230.92 533.8 231.48 533.84 232.11C533.9 232.91 534.59 233.5 535.39 233.45C536.19 233.39 536.79 232.69 536.73 231.9C536.69 231.32 536.31 230.85 535.81 230.66C535.93 215.8 550.44 203.8 555.01 200.39C555 200.78 554.91 201.43 554.48 202.11C554.12 202.66 552.99 204.2 551.98 205.57L553.62 205.83C553.53 206 553.52 206.21 553.63 206.39C554.13 207.22 553.89 209.01 553 210.95C552.07 212.96 550.7 214.7 549.4 215.49C546.38 217.33 542.38 224.37 542.38 225.51C542.05 227.72 545.32 230.93 546.03 231.59C546.43 232.73 546.02 234.91 545.58 237.22C544.93 240.64 544.19 244.51 545.27 247.73C546.06 250.05 546.91 251.84 547.66 253.42C548.18 254.52 548.64 255.51 548.98 256.48C548.6 256.78 548.37 257.28 548.44 257.8C548.55 258.6 549.28 259.15 550.07 259.04C550.86 258.93 551.42 258.2 551.31 257.41C551.22 256.74 550.68 256.25 550.04 256.17C549.68 255.14 549.2 254.1 548.65 252.95C547.91 251.39 547.08 249.63 546.32 247.38C545.49 244.93 545.84 241.96 546.34 239.14C547.91 238.24 549.54 237 550.99 235.89C551.54 235.47 552.05 235.08 552.51 234.74C559.87 232.59 562.29 230.45 563.61 228.63C564.5 228.37 568.01 227.11 572.12 222.22C573.17 222.07 577.73 221.2 580.32 217.02C582.28 216.12 584.89 213.73 586.72 210.36C587.39 210.04 590.11 208.67 592.72 206.47C592.72 206.47 592.72 206.46 592.74 206.45C595.74 204.04 597.28 201.6 599.03 200.8C600.79 200 602.45 200.19 603.98 200.38C605.51 200.57 605.92 198.89 607.4 199.18C607.88 199.37 608.38 199.49 608.88 199.5H608.97C609.88 199.5 610.71 199.15 611.45 198.48C612.24 198.57 613.04 198.53 613.76 198.38C613.97 199.24 614.4 200.04 614.79 200.77C615.55 202.21 615.98 203.14 615.39 204.09C615.26 204.3 615.29 204.57 615.46 204.76C615.56 204.87 615.71 204.93 615.86 204.93C615.94 204.93 616.03 204.91 616.11 204.87C618.12 203.85 619.26 201.99 619.61 200.2C620.95 202.52 621.83 205.04 620.02 207.67C619.89 207.86 619.9 208.12 620.03 208.31C620.14 208.45 620.31 208.53 620.48 208.53C620.53 208.53 620.59 208.52 620.64 208.5C623.77 207.51 625.03 205.15 625.53 203.34C626.19 200.98 625.86 198.58 625.3 197.56C628.24 190.51 627.86 185.88 623.95 181.1C620.27 176.61 616.46 171.96 619.55 166.44C619.68 166.21 619.63 165.92 619.42 165.75C619.22 165.58 618.92 165.58 618.72 165.75C618.63 165.82 616.91 167.28 615.52 170.17C615.53 167.05 616.48 163.42 619.28 159.06C619.41 158.86 619.39 158.59 619.23 158.41C619.08 158.22 618.82 158.16 618.59 158.26C613.8 160.4 610.98 165.26 610.12 169.92C609.07 168.42 607.52 166.71 605.79 164.8C603.09 161.84 600.03 158.47 597.95 154.87C593.99 148.01 576.96 130.68 559.44 129C564.2 124.79 569.15 120.74 573.29 115.89C585.22 102.9 587.4 84.71 594.49 69.27C595.76 66.47 597.54 63.57 599.26 61.01C602.39 56.75 606.18 52.92 610.22 49.49C616.66 43.88 623.69 38.98 630.58 33.87C637.23 28.69 644.78 23.33 647.86 15.15L647.12 16.57ZM554.57 117.88C556.1 118.23 557.16 117.4 557.16 117.4C556.04 119.96 554.19 118.97 554.57 117.88ZM555.3 131.13L555.34 131.11C554.79 131.63 554.24 132.14 553.69 132.67C553.23 133.12 552.8 133.56 552.39 134.03C552.54 132.71 553.9 129.96 555.3 131.13ZM581.62 76.15C583.83 74.53 585.95 72.98 587.75 71.15C585.59 78.66 577.23 103.11 556.87 116.66C555.2 117.73 553.35 117.25 553.97 116.45C570.06 104.8 579.43 88.62 582.88 78.66C577.65 89.19 569.09 101.57 556.2 112.17C562.97 105.28 572.03 90.85 574.2 85.43C572.99 87.72 563.26 103.11 555.93 111.15C556.15 110.76 556.37 110.36 556.61 109.93C559.82 104.2 565.19 94.62 569.94 87.45C573.48 82.11 577.8 78.94 581.62 76.15ZM560.2 100.08C560.2 100.08 558.63 99.32 557.48 102.21C556.33 105.11 554.37 110.21 554.12 109.32C553.86 108.43 555.02 105.45 555.02 105.45C555.02 105.45 553.9 107.45 553.99 106.13C554.07 104.81 554.54 101.58 559.07 96.6C563.77 91.44 566.25 91.15 565.03 93.16C564.04 94.79 563.06 96.43 562.11 98.06L560.2 100.08ZM560.28 101.22C559.81 102.04 559.35 102.84 558.91 103.62C558.61 103.42 558.2 103.27 557.78 103.49C558.13 102.19 559.33 99.65 560.28 101.22ZM587.23 51.14C588.91 49.71 590.46 48.39 591.83 47.14C592.79 46.26 593.65 45.42 594.4 44.6C594.75 44.22 595.07 43.85 595.37 43.49C594 48.76 591.37 54.08 588.19 59.26C587.69 60.06 587.19 60.86 586.67 61.66C583.71 66.22 580.42 70.67 577.29 74.89C574.81 78.24 572.44 81.45 570.49 84.4C570.46 84.44 570.44 84.46 570.41 84.51C567.26 89.05 560.17 91.86 553.98 102.47C554.22 101.39 554.47 100.34 554.73 99.3C554.85 98.8 554.98 98.3 555.11 97.81C555.32 97.02 555.63 96.04 556.01 94.83C556.27 94 556.57 93.05 556.89 92C559.72 83.79 563.46 77.06 567.53 71.4C567.55 71.38 567.58 71.37 567.6 71.34C567.63 71.29 567.65 71.24 567.68 71.19C574.13 62.31 581.39 56.11 587.23 51.14ZM561.38 69.46C562.47 63.43 564.66 59.93 566.79 56.54C567.2 55.88 567.6 55.23 567.99 54.58C568.77 53.27 569.45 51.78 570.16 50.2C571.06 48.2 571.98 46.15 573.14 44.54C573.39 44.17 573.66 43.83 573.94 43.52C573.63 44.67 573.4 45.96 573.17 47.37C573.04 48.26 572.91 49.2 572.78 50.18C571.95 56.13 570.93 63.53 566.81 70.51C564.05 74.31 561.44 78.6 559.14 83.49C560.04 79.5 560.87 74.8 561.38 69.46ZM550.43 75.92C550.34 74.96 550.25 73.99 550.15 73.01C550.01 71.61 549.87 70.17 549.72 68.71C549.68 68.33 549.64 67.95 549.6 67.56C549.54 67 549.5 66.45 549.46 65.91C549.24 63.12 549.23 60.62 549.38 58.36C549.43 57.46 549.51 56.6 549.61 55.77C550.14 51.32 551.22 47.86 552.22 44.85C552.31 44.58 552.4 44.31 552.49 44.05C552.7 43.41 552.91 42.79 553.11 42.17C553.61 40.62 554.05 39.11 554.32 37.58C555.38 31.52 557.66 25.94 559.58 23.26C558.77 29.26 559.29 35.52 559.88 42.67C560.12 45.5 560.37 48.48 560.54 51.63C560.58 52.33 560.61 53.03 560.64 53.75C560.78 57.16 560.81 60.75 560.63 64.52C560.6 65.11 560.56 65.71 560.52 66.31C560.52 66.43 560.51 66.56 560.5 66.68C559.74 77.6 557.61 85.8 555.91 91.42C554.92 94.29 554.04 97.35 553.28 100.59C553.12 99.7 553.15 97.99 553.74 95.19C554.56 91.32 553.97 88.94 553.74 86.93C553.74 86.93 553.63 87.07 553.45 87.32C553.27 87.55 553.05 87.89 552.8 88.3C552.35 89.06 551.83 90.08 551.52 91.22C551.35 86.29 550.95 81.29 550.43 75.92ZM551.26 105.63C551.35 104.42 551.42 103.23 551.47 102.04C552.67 101.14 552.73 102.59 551.26 105.63ZM552.63 106.47C552.5 111.11 549.9 112.98 549.9 112.98L549.95 111.49C551.69 109.83 552.63 106.47 552.63 106.47ZM570.12 142.17C565.46 141.08 556.46 141.85 554.03 143.45C554.03 143.45 561.63 141.34 570.43 143.19L569.48 144.04C569.48 144.04 580.26 143.32 586.01 149.13C582.82 149.13 580.58 146.38 577.84 145.9C580.46 147.65 581.03 148.81 581.03 148.81C564.32 143.08 556.6 147.35 551.7 147.24C550.21 144.26 549.91 141.33 550.97 138.54H553.39L553.22 139.81C553.22 139.81 566.73 139.11 570.12 142.17ZM553.31 159.66C554.92 160.21 556.33 162.17 556.97 165.11C557.6 168.04 559.22 170.51 559.95 171.4C560.67 172.3 559.56 172.47 558.92 173.02C559.73 173.4 561.6 175.53 561.43 176.72C561.26 177.91 558.67 178.25 558.16 176.6C557.65 174.94 555.6 174.21 555.69 173.28C555.78 172.34 556.2 172.34 556.41 171.83C556.41 171.83 553.95 169.66 554.03 168.81C554.12 167.96 554.75 167.91 555.39 167.11C553.04 165.41 549.88 160.29 548.46 155.43C547.69 152.83 547.42 150.31 548.03 148.43C548.17 147.98 548.51 148.1 549.05 149.4C549.65 150.86 550.53 153.69 552.24 156.72C552.24 156.72 551.9 156.81 551.43 158.43C551.43 158.43 552.92 157.96 553.35 158.43C553.05 158.94 553.31 159.66 553.31 159.66ZM556.12 158.98C556.8 158.17 557.99 159.4 557.43 162.17C557.43 162.17 556.97 161.74 556.71 160.89C556.46 160.04 555.36 159.87 556.12 158.98ZM591.56 160.74C593.21 160.93 593.09 161.64 592.55 161.95C583.61 159.98 573.78 160.3 566.5 161.74C568.87 160.74 572.92 159.44 572.92 159.44C572.92 159.44 568.26 159.72 561.47 163.04C561.33 162.55 561.18 162.07 561.02 161.59C567.7 158.3 570.12 157.62 570.12 157.62C570.12 157.62 568.84 157.23 569.29 156.98C569.73 156.72 571.65 157.36 571.65 157.36C579.18 156.02 580.71 156.98 580.84 158.19C589.84 157.49 587.41 159.4 586.97 159.53C586.52 159.66 581.29 159.85 581.29 159.85C582.56 160.17 589.33 160.49 591.56 160.74ZM571.84 175.87C571.84 177.21 568.97 178.23 567.69 177.21C566.41 176.19 563.99 175.68 563.92 174.79C563.86 173.96 566.39 173.68 567.42 172.93C567.89 173.07 568.4 173.18 568.96 173.28C569 173.69 568.92 174.49 567.88 175.17C568.78 175.94 571.84 174.53 571.84 175.87ZM585.18 177.12C585.18 177.12 586.97 178.9 589.69 180C588.77 180.23 586.14 181.74 585.12 181.11L585.75 180C584.34 179.53 583.26 177.98 583.26 177.98C583.26 177.98 582.95 178.11 580.84 177.43C579.64 177.05 578.91 176.44 578.25 175.81C578.26 175.66 578.2 175.5 578.07 175.39C577.64 175.02 577.2 174.74 576.76 174.49C576.75 174.48 576.74 174.48 576.73 174.47H576.7C576.14 174.15 575.59 173.92 575.07 173.71C573.83 173.19 572.88 172.8 572.37 171.69C574.31 171.9 576.04 171.64 577.6 171.41C579.74 171.09 581.43 170.84 582.78 171.9C583.34 172.34 583.87 172.8 584.4 173.25C584.6 173.42 584.79 173.58 584.99 173.75C584.99 173.75 584.994 173.753 585 173.76C586.09 174.68 586.82 175.18 585.75 176.16C582.87 175.55 580.81 175.04 579.4 172.52C579.28 175.17 582.4 176.61 585.18 177.12ZM590.13 172.55C593.66 171.47 597.37 172.94 598.49 177.43C598.49 177.43 595.42 177.5 594.72 178.33C594.72 178.33 598.46 178.52 598.07 181.26C596.19 179.38 586.87 180.4 587.41 176.36C587.73 176.49 591.08 176.93 592.71 176.67C592.71 176.67 591.28 176.13 587.7 174.44C587.41 174.26 587.14 174.06 586.86 173.84C588.67 173.61 593.18 173.81 595.65 176.22C595.65 176.22 595.1 173.57 590.13 172.55ZM593.78 191.36C593.78 191.36 593.05 190.64 591.43 190.47C589.82 190.3 589.26 189.4 587.52 189.36C588.37 187.32 591.95 187.45 593.39 187.7C594.84 187.96 597.35 187.74 597.18 190.08C596.97 189.53 595.65 188.55 591.95 188.94C591.95 188.94 594.12 190.38 593.78 191.36ZM588.97 199.02C587.31 198.6 587.43 201.32 584.71 201.15C584.71 201.15 583.05 198.25 585.31 196.21C585.6 197.11 586.63 197.57 588.33 197.49C590.03 197.4 590.5 197.28 591.14 198.89C591.14 198.89 590.63 199.45 588.97 199.02ZM590.71 199.83C590.71 199.83 590.58 201.23 588.54 201.96C588.54 201.96 587.65 200.21 588.58 199.79C588.58 199.79 589.18 200.04 590.71 199.83ZM574.54 193.96C575.31 194 575.95 196.08 575.82 196.85C574.03 197.36 571.65 196.3 568.16 197.4C568.41 196.34 569.35 196.17 569.95 194.89C570.54 193.62 571.26 193.15 571.48 193.02C572.16 190.72 573.14 189.87 573.99 189.74C574.84 189.62 576.41 190.21 577.18 189.91C575.9 192.81 571.14 192.81 571.26 195.4C573.22 195.11 573.78 193.91 574.54 193.96ZM569.95 206.08C569.95 206.08 569.73 207.11 567.95 207.53C567.95 207.53 565.31 209.66 562.33 208.72C563.78 207.49 565.48 205.4 565.22 203.28C565.22 203.28 564.84 204.85 562.84 205.19C564.07 204 564.2 201.96 565.31 200.77C566.41 199.57 567.39 199.96 568.16 199.53C568.92 199.11 570.24 198.47 570.8 199.49C568.07 201.15 566.12 203.66 567.48 203.49C568.84 203.32 570.92 201.15 570.92 201.15C570.92 201.15 571.52 201.62 571.39 202.21C571.26 202.81 570.67 203.53 568.8 205.28C569.09 205.53 569.95 206.08 569.95 206.08ZM561.35 218.89C560.88 221.83 559.6 223.15 557.65 224.47C555.69 225.79 553.09 226.85 551.09 226.94C551.09 226.94 552.24 225.48 552.97 223.91C553.56 222.64 553.9 221.83 554.92 221.11C555.95 220.38 557.95 218.3 557.95 219.4C557.95 220.5 555.65 222.13 554.67 223.11C554.67 223.11 557.95 223.4 561.35 218.89ZM559.48 218.13C559.48 217.32 559.27 216.64 559.48 216.08C559.86 215.06 561.05 213.79 561.99 212.43C562.92 211.06 563.95 210.04 564.37 210.72C564.8 211.4 562.5 213.02 562.07 214.85C563.82 213.32 565.35 212.81 564.67 214.04C563.99 215.28 563.22 215.7 562.2 217.11C561.18 218.51 559.48 218.13 559.48 218.13ZM560.8 207.62C561.26 206.38 562.29 206.17 562.29 206.17C562.07 207.19 561.9 208.34 560.8 207.62ZM571.35 183.28C569.6 183.79 568.46 182.55 567.14 182.34C568.75 182 572.5 182.3 575.52 182.43C574.92 183.74 573.52 185.49 570.24 186.17C566.97 186.85 563.9 184.68 562.88 184.51C563.99 183.57 569.35 184.77 571.35 183.28ZM565.18 180.13C565.68 179.33 566.77 178.89 567.73 178.79C568.48 178.71 569.96 178.98 569.31 180.08C568.94 180.72 567.94 180.69 567.32 180.59C566.77 180.5 566.07 180.35 565.18 180.13ZM569.69 191.57C569.31 190.81 570.12 189.79 569.56 189.36C567.39 189.79 566.58 188.64 565.05 187.66C566.54 187.62 568.41 187.66 569.78 187.7C571.14 187.74 572.33 189.4 570.75 189.83C570.75 189.83 570.92 191.02 569.69 191.57ZM563.18 190.38C563.18 190.38 565.99 192.04 569.09 192.25C569.09 192.25 568.92 194.04 567.65 194.68C566.37 195.32 563.73 193.91 562.8 192.04C562.5 191.44 563.18 190.38 563.18 190.38ZM574.07 187.87C576.16 185.66 578.03 181.62 579.22 180.55C580.41 179.49 581.65 180.64 581.99 181.15C582.33 181.66 581.86 182.21 580.37 182.68C578.88 183.15 577.95 185.53 577.26 186.17C577.26 186.17 579.14 186.08 579.86 185.49C580.58 184.89 582.67 184.04 583.14 184.64C583.66 185.3 582.5 186.55 581.14 187.28C579.42 188.19 576.99 188.54 574.07 187.87ZM581.18 189.36C582.92 188.25 583.69 187.83 583.99 187.28C584.71 188.51 582.37 190.77 581.86 191.06C585.05 191.36 586.2 190.17 586.2 190.17C587.14 193.49 580.46 193.4 577.39 193.15C578.75 191.19 579.43 190.47 581.18 189.36ZM590.29 183.62C592.37 184.03 594.68 184.51 595.35 185.7C595.35 185.7 593.09 185.49 590.12 185.66C587.14 185.83 584.73 184.56 584.54 183.45C584.44 182.87 587.31 183.03 590.29 183.62ZM589.69 182.38C590.12 181.49 592.24 180.64 594.46 181.19C596.67 181.74 596.16 183.15 594.97 183.15C593.78 183.15 592.29 182.3 589.69 182.38ZM575.56 178.47C575.01 178.13 574.03 177.15 575.01 176.47C575.35 177.87 578.63 177.57 578.54 178.77C578.46 179.96 577.18 180.3 575.95 181.83C575.95 181.83 572.75 180.51 570.03 181.19C570.5 179.96 571.43 179.02 575.56 178.47ZM561.46 170.96C560.88 169.11 561.16 165.73 561.16 165.73C561.94 168.09 562.82 169.88 564.19 171.15C564.38 174.1 562.64 174.76 561.46 170.96ZM559.86 158.82C562.42 157.82 564.18 158.96 564.18 158.96L560.78 160.87C560.75 160.78 560.72 160.7 560.69 160.62C560.45 159.99 560.16 159.4 559.86 158.82ZM560.03 168.04C560.03 168.04 558.88 166.48 559.31 165.06C559.56 164.21 560.84 165.53 560.03 168.04ZM565.6 155.19C565.6 155.19 571.48 154 573.78 155.87C573.78 155.87 567.52 156.34 565.6 155.19ZM566.54 157.11C563.86 158.83 563.99 156.6 563.99 156.6C562.77 157.06 560.12 158.05 559.47 158.13C559.24 157.74 559 157.36 558.76 156.99C562.41 154.59 566.54 157.11 566.54 157.11ZM548.67 173.45C550.46 175.91 556.75 179.45 556.16 180.98C555.56 182.51 551.18 177.49 546.84 177.66C551.52 179.32 554.88 183.57 557.35 183.11C557.18 184.43 556.33 185.15 556.33 185.15C559.22 187.23 558.71 188.94 556.71 188.68C554.71 188.43 554.92 186.94 554.84 186C554.75 185.06 552.88 183.96 552.84 182.98C551.39 182.77 549.09 181.49 547.82 180.08C546.54 178.68 544.33 178.04 543.22 177.23C542.12 176.43 542.75 175.15 545.56 175.7C545.56 174.04 544.29 173.74 541.9 172.43C539.52 171.11 537.43 169.06 535.18 167.83C532.92 166.6 529.6 165.36 530.37 164.34C531.22 163.21 533.56 165.23 535.48 165.7C533.86 163.83 534.63 163.23 534.8 163.19C542.54 165.79 547.69 170.13 548.54 171.28C549.05 170.21 550.75 169.7 552.63 172.25C554.5 174.81 556.63 176.81 557.73 177.74C558.84 178.68 558.84 179.87 557.73 179.11C556.63 178.34 549.01 171.7 541.43 169.15C546.58 172.38 546.67 173.02 548.67 173.45ZM515.96 160.99C516.34 161.01 516.69 161.01 517.03 161.01H517.3C517.62 161.01 517.93 161 518.21 160.99C519.4 160.96 520.21 160.88 520.56 160.84C520.76 160.96 520.95 161.07 521.15 161.19C523.89 163.71 530.67 167.57 530.67 167.57C530.67 167.57 528.13 167.7 526.25 167.76C526.03 167.76 525.82 167.77 525.63 167.77C525.13 167.78 524.72 167.78 524.48 167.77C523.33 167.7 523.14 168.79 522.75 168.66C522.37 168.53 520.39 166.55 520.26 166.11C520.2 165.89 521.13 165.79 522.09 165.75C522.41 165.75 522.74 165.73 523.03 165.73C523.63 165.71 524.09 165.72 524.09 165.72L518.73 162.79L519.14 163.16L520.9 164.77C520.79 164.79 520.67 164.81 520.56 164.83C511.6 166.37 499.95 159.33 498.75 158.57C497.54 157.81 496.2 158.32 496.2 158.32C496.2 158.32 495.24 157.55 494.99 157.11C494.81 156.79 495.85 156.23 496.49 155.92C496.65 156.01 496.8 156.1 496.97 156.19C500.59 158.07 504.17 159.24 507.42 159.96H507.43C508.19 160.13 508.92 160.27 509.63 160.39C511.42 160.68 513.07 160.85 514.52 160.93C515.02 160.96 515.51 160.98 515.96 160.99ZM512.45 151.58C511.87 150.76 511.3 149.94 510.74 149.1C508.6 145.95 506.4 142.7 502.7 139.61C511.13 141.13 518.88 144.14 525.56 147.67C526.75 148.29 527.9 148.94 529.02 149.59C529.17 149.68 529.37 149.79 529.63 149.94C529.64 149.95 529.65 149.95 529.66 149.96C529.74 150.01 529.82 150.05 529.89 150.1C530.25 150.32 530.5 150.59 530.66 150.87C530.67 150.89 530.68 150.9 530.69 150.92C530.71 150.95 530.72 150.98 530.73 151.01C530.85 151.24 530.9 151.47 530.91 151.67C530.93 152.08 530.73 152.35 530.41 152.21C529.89 151.88 527.99 150.94 525.54 149.76C524.49 149.25 523.33 148.7 522.13 148.13C516.58 145.51 510.25 142.58 509.84 142.39C511.44 143.36 515.6 145.58 519.93 147.83C520.78 148.28 521.64 148.72 522.49 149.16C526.13 151.04 529.56 152.78 531.31 153.62L531.95 153.15L531.6 152.64C531.6 152.64 531.66 152.46 531.84 152.31C531.9 152.26 531.97 152.21 532.06 152.18C532.4 152.03 532.97 152.03 533.89 152.63C536.23 154.19 538.34 155.76 540.23 157.27C539.88 157.61 539.27 158.09 538.84 157.74C538.2 157.23 536.09 155.19 532.78 153.98L532.39 154.43C532.39 154.43 537.05 157.17 539.35 160.49C533.48 160.55 527.73 160.11 527.73 160.11C527.73 160.11 526.84 161.13 525.63 160.17C524.41 159.21 522.88 158.51 522.88 158.51C522.88 158.51 522.37 160.17 521.6 159.53C520.84 158.89 519.5 157.36 519.5 157.36C520.14 157.36 521.73 156.85 521.73 156.85C519.72 156.52 516.24 155.89 512.45 151.58ZM517.05 157.57C516.54 157.15 515.39 156.08 515.39 156.08C516.41 156.04 517.26 156.51 517.05 157.57ZM529.14 162.77C527.31 162.47 526.67 161.35 528.29 161.23C529.48 161.15 530.97 163.06 529.14 162.77ZM524.84 163.02L522.24 161.49C524.88 160.77 527.39 162.64 524.84 163.02ZM534.18 170.77C533.87 171.36 533.22 171.72 532.56 171.8C532.75 171.34 532.7 170.79 532.43 170.38C531.93 171.25 531.04 171.78 530.08 171.99C529.82 172.05 529.55 172.09 529.27 172.1C528.76 172.13 527.77 171.79 527.31 171.99C527.57 171.87 527.82 171.72 528.07 171.57C528.98 171.02 529.7 170.38 530.5 169.72C531.4 168.98 532.79 168.04 533.89 168.95C534.4 169.38 534.49 170.18 534.18 170.77ZM534.7 172.27C534.92 172.42 534.98 172.74 534.87 172.98C534.76 173.22 534.52 173.38 534.26 173.43C533.98 173.5 532.72 173.46 532.71 173.02C532.71 172.83 533.82 172.37 534.07 172.27C534.27 172.18 534.51 172.16 534.7 172.27ZM525.01 169.45C524.12 168.8 525.41 168.58 526.97 168.49C527.11 168.48 527.25 168.48 527.39 168.47H527.4C529.14 168.38 529.6 168.34 529.6 168.34C529.6 168.34 529.13 168.73 528.46 169.11C528.42 169.13 528.38 169.16 528.33 169.18C527.35 169.71 526 170.17 525.01 169.45ZM515.6 166.55C517.22 166.98 517.65 167.74 519.01 169.11C516.54 169.28 512.97 167.91 508.29 166.38C512.37 168.68 519.18 171.06 522.84 170.55C524.46 173.02 528.03 172 529.73 174.38C523.52 175.06 516.8 175.74 500.29 162.21C507.95 165.19 513.99 166.13 515.6 166.55ZM531.12 175.17L531.5 175.74C531.5 175.74 534.03 174.55 535.15 175.15C533.21 175.86 531.23 176.3 529.24 176.51L527.54 175.62L531.12 175.17ZM541.71 161C540.15 159.92 539.55 159.12 541.52 158.33C542.13 158.84 542.71 159.34 543.26 159.83C543.16 160.65 542.82 161.77 541.71 161ZM543.35 164.51C543.13 164.51 542.92 164.51 542.71 164.48C542.31 164.41 541.14 163.98 541.55 163.44C541.97 162.89 542.83 163.57 543.11 163.92C543.25 164.08 543.36 164.29 543.35 164.51ZM539.65 133.55C540.71 134.32 543.56 140.19 546.21 146.57L544.84 149.19C538.39 143.13 537.69 137.51 534.97 132.34C534.46 131.38 533.75 130.02 532.85 128.4C532.74 125.78 533.99 125.19 533.99 125.19C535.71 129.47 538.58 132.79 539.65 133.55ZM536.45 128.32C536.45 128.32 538.87 130.07 538.78 131.61C538.78 131.61 537.34 130.23 536.45 128.32ZM542.8 136.98C544.29 138.34 546.63 140.51 545.99 143.66C545.99 143.66 543.69 140.17 542.8 136.98ZM537.33 144.22C537.87 144.72 538.42 145.22 538.97 145.75C539.04 145.81 539.12 145.85 539.21 145.87C540.84 147.34 543.03 149.36 543.95 150.46C547.13 154.28 547.51 156.68 546.07 155.49C544.03 153.79 543.18 150.98 542.16 150.04C542.16 150.04 542.16 152.85 540.71 151.57C539.26 150.3 536.71 148.34 533.22 145.28C529.94 142.4 529.07 140.49 530.6 138.86C532.44 140.13 534.33 141.59 536.26 143.27C536.54 143.53 536.89 143.85 537.33 144.22ZM549.09 166.65C549.75 166.82 550.31 167.12 550.56 167.79C550.61 167.93 550.81 169.08 550.64 169.06C549.57 168.95 548.5 168.37 548.22 167.23C548.05 166.55 548.57 166.51 549.09 166.65ZM548.09 133.04C548.03 131.32 548.92 129.47 548.92 129.47C549.75 131.93 548.09 133.04 548.09 133.04ZM551.52 151.62C551.78 152.51 553.52 152.89 553.01 154.6C553.01 154.6 550.97 154.04 551.52 151.62ZM550.07 121.49C550.41 120.55 550.24 119.19 550.24 119.19L549.73 119.49C549.73 119.49 549.26 118.25 550.67 116.13C551.39 118.77 551.39 120 550.07 121.49ZM550.5 97.44C550.49 98.54 550.46 99.64 550.42 100.74C548.04 97 546.61 92.11 546.21 89.66C546.61 90.16 548.95 93.64 550.5 97.44ZM517.02 50.25C513.28 45.12 509.43 39.82 502.84 35.62C513.01 34.96 518.83 40.8 523.98 45.97C526.08 48.07 528.06 50.06 530.13 51.31C530.53 56.72 531.37 62.07 532.56 67.25C530.48 64.67 528.15 62.26 525.56 60.22C522.2 57.34 519.67 53.9 517.02 50.25ZM524.41 77.97C521.37 72.59 518.75 65.76 517.31 56.7C526.71 60.3 535.73 70.82 542.17 85.76C543.91 89.79 545.37 93.95 546.55 98.09C546.55 98.1 546.56 98.11 546.56 98.12C547.38 101.02 548.07 103.91 548.61 106.75C549.38 111.54 548.98 114.07 548.71 116.51C548.3 120.25 549.05 125.96 547.39 131.77C546.25 127.3 543.75 124.94 543.75 124.94C546.29 129.01 547.65 138.72 546.21 138.17C544.78 137.62 545.16 133.3 545.16 133.3C545.16 133.3 543.62 130.85 543.19 128.35C542.57 124.19 542.06 118.91 541.77 111.89C541.52 105.83 540.41 100.87 538.36 96.74C539.08 97.57 539.72 98.39 540.25 99.19C540.42 99.45 540.76 99.52 541.01 99.35C541.27 99.19 541.34 98.85 541.17 98.59C539.87 96.6 537.98 94.65 535.79 92.39C535.22 91.8 534.64 91.2 534.04 90.57C534.04 90.57 534.04 90.57 534.04 90.56C530.92 87.28 527.46 83.35 524.42 77.97H524.41ZM528.65 86.14C530.2 88.07 531.76 89.78 533.25 91.33C537.93 96.24 540.29 102.78 540.67 111.94C540.82 115.39 541.01 118.5 541.26 121.35C538.2 115.78 530.53 100.67 528.65 86.14ZM452.83 75.16C455.55 75.42 458.52 75.64 461.7 75.88C484.91 77.59 516.69 79.93 532.27 104.35C536.18 114.88 540.96 123.09 541.53 124.05C542.04 128.77 542.75 132.72 543.7 136.23C521.97 101.03 502.08 94.65 483.4 93.42C477.25 86.16 465.16 79.23 452.83 75.16ZM470.88 109.78C450.18 101.38 427.81 93.99 416.96 79.03C425.16 87.8 438.66 93.1 456.08 94.17C460.4 94.43 464.68 94.37 469.2 94.32C488.99 94.06 509.32 93.82 531.24 120.43C529.57 119.47 527.6 118.77 526.51 118.42C522.11 112.41 516.3 106.31 509.35 103.49C512.86 105.26 530.14 119.11 535.69 139.57C535.69 139.57 528.35 131.17 522.73 128.61C523.07 128.87 528.58 133.11 531.18 137.11C530.44 136.65 528.27 135.75 526.63 135.1C519.81 131.35 513.6 129.95 507.83 129.11L499.6 123.06L505.93 128.84C505.02 128.73 504.12 128.61 503.23 128.5C502.2 128.38 501.18 128.25 500.18 128.11C492.78 118.86 481.43 114.31 470.88 109.78ZM526.44 136.26C527.26 136.72 528.09 137.22 528.93 137.75C528.3 138.1 527.58 138.11 526.44 136.26ZM528.2 142.04C528.2 142.04 516.23 133.45 510.5 130.66C514.1 131.32 517.87 132.28 521.85 133.99C522.14 134.63 522.52 135.5 522.67 136C522.92 136.85 528.03 138.47 528.2 142.04ZM488.33 126.3C489.38 126.75 490.44 127.14 491.51 127.47C492.07 127.64 492.64 127.8 493.21 127.95C496.4 128.77 499.69 129.17 503.09 129.59C504.23 129.74 505.39 129.88 506.57 130.04C513.23 132.1 519.45 137.43 523.01 139.66C527.09 142.21 541.78 152.96 545.67 158.38L543.64 158.7C539.28 154.87 533.16 150.4 525.78 146.54C524.64 145.94 523.47 145.36 522.26 144.8C515.82 141.78 508.55 139.34 500.75 138.18C500.51 138.14 500.28 138.27 500.18 138.49C498.5 137.78 496.95 137.23 495.47 136.77C491.49 132.54 489.27 128.34 488.33 126.3ZM483.89 144.09C479.3 139.42 474.15 134.16 465.52 128.29C468.26 128.58 473.5 129.48 479.19 132.38C483.56 134.61 487.01 135.55 490.66 136.53C494.08 137.46 497.61 138.41 502.09 140.54C505.61 143.51 507.75 146.66 509.83 149.72C512.29 153.34 514.64 156.82 519.04 159.86C518.43 159.89 517.66 159.92 516.76 159.91C516.35 159.91 515.91 159.9 515.45 159.88C515.07 159.86 514.68 159.84 514.27 159.82C513.76 159.78 513.24 159.74 512.69 159.69C510.91 159.5 508.9 159.19 506.77 158.67C505.82 158.45 504.84 158.18 503.84 157.85C501.78 157.2 499.63 156.34 497.48 155.21C491.97 152.34 488.22 148.52 483.89 144.09ZM489.16 153.82L491.34 153.64C507.31 173.61 522.31 175.87 522.31 175.87L521.91 176.27C516.91 175.47 511.93 173.43 507.18 170.49C507.12 170.45 506.42 170.01 506.38 169.98C499.97 165.86 494.03 160.15 489.16 153.82ZM506.62 172.97C506.72 173.24 506.82 173.5 506.93 173.76C504.02 175.86 500.77 178.29 500.01 178.84C502.74 176.35 505.74 173.74 506.62 172.97ZM495.38 195.34L495.43 195.26C489.4 202.06 486.79 207.01 486.37 207.85C491.68 192.18 505.38 180.05 505.81 179.67C505.38 179.93 494.59 186.8 486.37 203.65C487.33 195.02 496.58 184.23 496.58 184.23L495.12 184.68C498.56 179.38 501.69 179.61 503.54 177.67C505.09 176.05 506.76 174.85 507.25 174.5C508.39 176.95 509.98 179.06 511.92 180.7C505.58 184.75 499.96 189.78 495.38 195.34ZM510.41 176.08C510.41 176.08 512.03 179.31 515.37 181.7C512.33 180.1 509.86 177.47 508.3 174.16C512.38 174.56 516.9 183.76 526.88 179.86C522.91 180.79 518.04 180.5 514.31 176.32C514.24 176.03 515.48 176.06 516.59 176.96C517.69 177.83 520.51 178.98 525.87 177.74C529.78 177.83 533.67 177.12 537.42 175.42C535.16 178.13 532.65 180.18 530.01 181.54H529.99C529.42 181.84 528.83 182.09 528.25 182.32C523.6 183.88 516.18 183.02 510.41 176.08ZM527.82 183.65L526.52 184.43L525.77 184.79C526.07 184.54 526.35 184.28 526.59 184.01C527 183.9 527.41 183.78 527.82 183.65ZM510.69 196.58C509.15 196.12 507.7 195.68 506.35 195.33C507.08 195.19 507.82 194.98 508.55 194.68C509.16 194.92 510.18 195.47 510.92 196.65C510.84 196.63 510.76 196.6 510.69 196.58ZM518.37 196.17L518.24 198.43L515.69 197.32L515.66 198.02C515.09 197.87 514.52 197.71 513.97 197.55L513.82 196.23C515.46 196.23 517.32 195.7 517.61 195.61C517.15 195.66 512.29 196.16 509.62 194.15C510.21 193.81 510.79 193.42 511.34 192.9C515.88 196.17 525.16 194.79 527.67 192.79C527.67 192.79 518.57 196.03 512.08 192.28C512.45 191.99 512.87 191.71 513.31 191.44C519.5 192.98 528.59 191.47 532.78 188.83C529.78 190.08 522.58 191.99 514.45 190.76C515.84 189.99 517.4 189.27 518.94 188.57C519.06 188.51 519.18 188.46 519.3 188.4C521.47 190.01 528.85 189.63 534.18 185.51C531.43 187.3 523.58 189.21 521.22 188.19L524.67 186.34C526.58 186.98 531.99 185.89 536.39 181.56C536 181.81 529.24 186 526.33 185.45C529.01 184.3 534.1 181.63 537.8 178.56C537.58 178.66 535.75 179.48 534.26 180.07C535.55 179.04 536.79 177.83 537.97 176.46C539.24 177.13 544.56 179.92 545.35 180.6C544.52 180.47 543.69 180.98 543.69 180.98C547.46 183.85 533.48 192.89 526.16 195.36L525.73 197.32C523.86 197.91 520.67 198.17 520.67 198.17L520.84 196.89C520.84 196.89 524.46 196.38 525.65 195.36C525.65 195.36 523.39 196.21 518.37 196.17ZM521.29 199.23C532.18 197.25 541.52 188.51 541.52 188.51C541.58 189.47 540.24 191.45 537.82 193.49C535.65 193.62 533.54 196.68 528.82 197.89C531.12 198.15 534.12 196.74 537.05 194.57C536.23 196.06 536.04 197.35 536.02 198.08C531.01 199.96 525.98 199.97 521.29 199.23ZM541.78 192.15C541.78 194 541.02 195.26 539.78 196.3C538.68 196.94 537.58 197.47 536.47 197.91C536.68 197.1 537.19 195.57 538.26 194.45C539.8 192.85 543.31 189.98 544.97 186.28C544.97 186.28 543.56 187.49 542.86 187.94L542.67 187.04C542.67 187.04 544.58 185.45 545.03 183.72C545.22 184.68 546.63 184.11 546.63 184.11C545.86 188.51 543.75 192.21 541.78 192.15ZM545.52 190.47L546.2 189.06C546.2 189.06 547.31 189.23 548.71 188.81C547.86 190.34 545.52 190.47 545.52 190.47ZM547.09 192.3C552.97 191.4 555.99 190.09 558.63 189.91C560.5 189.79 560.92 192.13 553.35 191.96C554.24 194.34 558.05 192.95 559.39 192.51C561.73 191.74 561.56 194.55 558.29 194.72C557.39 196.17 555.99 195.53 555.65 194.68C551.26 194.98 547.86 194.64 547.09 192.3ZM550.63 201.19C549.99 201.32 549.18 199.93 549.43 199.53C550.29 198.21 554.07 196.6 555.82 196.81C553.99 197.4 551.26 201.06 550.63 201.19ZM557.99 200.25C559.69 198.72 560.12 197.49 560.12 197.49C560.12 197.49 558.63 197.36 559.18 196.55C559.73 195.74 561.39 196.34 561.39 196.34C561.9 193.62 564.2 194.86 563.09 196.3C562.12 197.57 560.37 202.89 554.8 204.38C555.09 202.98 556.29 201.79 557.99 200.25ZM560.37 207.06C559.26 210.3 558.07 209.02 558.07 209.02C558.63 207.15 560.37 207.06 560.37 207.06ZM554.9 208.52C555.46 208.16 556.67 207.37 557.76 206.55C557.76 206.55 556.84 208.81 554.44 210.31C554.63 209.78 554.8 209.15 554.9 208.52ZM558.2 211.06C559.18 211.28 557.09 214.34 555.35 215.7C557.39 215.53 560.92 210.17 561.65 210.89C562.37 211.62 559.05 214.25 558.33 215.79C557.6 217.32 555.26 219.11 550.92 218.51C553.31 216.38 557.22 210.85 558.2 211.06ZM546.12 230.13C544.79 228.74 543.3 226.77 543.47 225.6C543.5 225.21 544.4 223.38 545.64 221.42C545.73 221.3 545.83 221.14 545.95 220.95C545.98 220.9 546.01 220.85 546.04 220.81C547.36 218.7 550.12 216.94 550.58 217.32C551.05 217.7 550.04 219.18 548.67 219.15C548.67 219.15 551.38 220.68 554.38 219.44C554.57 221.51 551.32 222.82 550.28 225.12C550.28 225.12 546.21 225.37 544.71 227.16C544.71 227.16 547.62 226.01 550.1 226.01C549.66 227.86 547.87 229.93 546.12 230.13ZM551.75 233.94C551.31 234.26 550.83 234.62 550.32 235.02C549.19 235.89 547.94 236.84 546.72 237.63C546.72 237.61 547.12 234.78 547.58 233.96C548.04 233.13 547.49 232.33 547.84 231.15C548.19 229.97 552.79 226.78 554.76 227.5C551.56 231.74 551.09 233.43 551.09 233.43C551.78 233.18 551.79 233.67 551.75 233.94ZM562.87 224.28C559.35 225.42 558.39 227.35 556.9 228.43C558.33 228.45 559.35 227.32 559.78 228.74C560.14 229.97 557.92 231.3 554.74 232.71C553.47 233.29 553.35 232.66 553.88 231.37C554.8 229.35 556.06 227.28 557.49 225.77C558.71 224.49 560.46 223.49 562.23 223.25C562.37 223.23 563.18 223.16 563.18 223.46C563.05 223.73 562.95 224.01 562.87 224.28ZM561.99 222.25C562.03 220.13 564.33 219.06 564.33 219.06C564.54 216.94 565.69 217.06 566.71 216.6C566.54 217.19 566.03 217.74 565.78 218.85C566.97 218.55 569.05 215.91 570.24 217.62C568.12 218.34 567.43 219.23 565.9 220.72C564.37 222.21 561.99 222.25 561.99 222.25ZM563.71 227.43C563.64 226.89 563.6 226.01 563.8 225.08C563.82 225 563.84 224.91 563.86 224.83C563.87 224.82 563.87 224.8 563.88 224.79C564.55 222.79 567.57 220.53 568.36 219.72C569.22 218.85 570.63 218.1 570.56 219.21C567.95 221.15 566.99 223.52 566.99 223.52C566.99 223.52 569.18 220.85 571.27 219.96C571.25 220.65 571.27 221.22 571.28 221.51C567.87 225.56 564.9 226.99 563.71 227.43ZM566.54 214.94C567.56 212.21 570.29 207.45 571.14 207.06C571.99 206.68 572.58 207.36 573.35 206.85C574.12 206.34 575.6 206.64 575.6 206.64C574.33 208.94 571.65 210.77 571.65 210.77C574.12 210.68 575.01 209.28 576.41 208.51C577.82 207.74 578.96 208.76 577.73 209.96C575.95 211.7 570.88 214.04 566.54 214.94ZM574.75 220.31C573.77 220.73 572.91 220.95 572.37 221.06C574.81 211.77 577.97 212.1 578.13 213.31C578.29 214.52 577.46 215.73 575.22 217.52C577.1 217.23 577.46 215.73 578.38 216.31C578.25 217.49 577.02 219.01 574.75 220.31ZM572.2 203.87C572.71 202.17 574.07 201.57 575.09 199.66C576.12 197.74 576.97 197.02 578.33 196.21C579.69 195.4 581.69 195.79 581.69 195.79C578.63 197.62 577.14 199.57 577.95 200.04C578.75 200.51 580.92 198.51 581.86 197.62C582.67 198.89 581.39 199.96 580.97 201.11C580.54 202.25 576.24 204.81 572.2 203.87ZM580.29 215.81C579.79 213.72 580.05 211.06 580.74 208.53C580.74 208.52 580.75 208.5 580.75 208.49C580.82 208.23 580.9 207.97 580.98 207.71C581.64 205.84 583.62 202.66 585.91 203.13C585.47 205.71 584.25 208.71 582.56 212.32C582.56 212.32 584.96 209.32 585.78 206.93C586.61 204.54 586.55 204.34 587.59 204.37C586.72 210.19 582.75 214.41 580.29 215.81ZM593.42 204.31C593.42 204.31 593.41 204.33 593.4 204.34L593.32 204.42C593.24 204.5 593.15 204.58 593.07 204.66C592.92 204.8 592.75 204.96 592.55 205.15C590.75 206.76 588.8 207.98 587.52 208.7C587.96 207.65 588.31 206.52 588.54 205.33H588.55C590.52 202.03 595.58 200.7 593.42 204.31ZM592.07 199.91C593.26 197.96 594.71 196.73 595.48 197.28C595.78 197.49 595.82 197.83 595.82 197.83C593.69 198.68 592.07 199.91 592.07 199.91ZM593.43 201.02C594.16 199.83 596.33 199.49 597.09 199.45C595.26 202.13 594.12 201.66 593.43 201.02ZM597.41 193.55C594.53 198.33 589.39 196.17 588.07 195.79C588.07 195.79 589.39 194.98 591.22 193.36C593.05 191.74 595.39 192 596.67 190.17C596.67 190.17 597.9 191.23 597.22 192.13C596.54 193.02 594.75 192.98 593.01 194.85C594.58 195.26 597.13 193.72 597.41 193.55ZM599.14 197.23C599.14 197.23 597.73 197.11 597.95 195.87C597.95 195.87 599.43 195.91 599.14 197.23ZM599.22 190.81C598.74 188.3 600.08 187.42 600.67 186.43C598.75 186.17 598.49 183.4 601.86 180.6C600.07 176.56 601.56 173.87 602.51 175.09C602.25 176.95 602.8 179.62 603.62 181.15C602 182.11 601.04 183.55 601.02 185.1C601 185.98 601.3 186.83 601.86 187.59C601.36 188.03 601.03 188.63 600.9 189.36C600.64 190.87 601.3 192.91 602.61 194.87C601.12 193.89 599.52 192.35 599.22 190.81ZM605.78 178.6C606.29 178.47 607.26 179.45 606.84 181.15C606.84 181.15 604.33 178.96 605.78 178.6ZM606.8 188.34C606.8 188.34 604.54 186.89 605.65 185.79C605.65 185.79 607.31 186.64 606.8 188.34ZM608.8 193.87C607.99 194.72 605.78 193.36 604.75 189.91C606.07 192.08 609.6 193.02 608.8 193.87ZM605.18 183.45C604.81 184.83 603.55 184.86 603.71 187.88C602.68 187.1 602.1 186.13 602.12 185.11C602.13 184.38 602.44 183.68 602.99 183.06C603.81 182.36 605.56 182.01 605.18 183.45ZM608.91 198.4C607.66 198.37 606.14 197.4 604.61 195.68C602.77 193.59 601.71 191.13 601.99 189.55C602.07 189.05 602.28 188.67 602.61 188.39C602.95 188.7 603.34 188.98 603.78 189.24C603.56 190.98 604.05 195.07 610.11 198.09C609.73 198.3 609.33 198.4 608.91 198.4ZM610.8 196.34C610.16 196.72 608.79 195.29 609.52 194.98C609.82 194.85 611.43 195.96 610.8 196.34ZM608.92 190.51C609.35 189.91 611.65 192.17 613.65 193.96C611.6 193.87 608.5 191.1 608.92 190.51ZM611.48 182.98C612.8 183.66 613.99 183.62 614.29 184.64C614.29 184.64 612.67 184.85 611.48 182.98ZM616.77 203.1C616.75 202.13 616.25 201.18 615.76 200.26C615.37 199.54 614.99 198.8 614.82 198.04C615.62 197.7 616.25 197.21 616.52 196.58C616.52 196.58 615.12 196.55 614.82 195.69C614.52 194.83 616.26 194.38 617.09 196.02C617.42 196.74 617.91 197.51 618.45 198.34L618.6 198.58C618.75 200.03 618.16 201.85 616.76 203.1H616.77ZM616.33 192.85C615.39 193.19 614.59 191.46 615.6 191.19C616.24 191.02 617.26 192.51 616.33 192.85ZM616.84 193.36C617.31 193.4 617.69 194.34 617.05 194.38C616.41 194.43 616.24 193.31 616.84 193.36ZM624.47 203.05C624.13 204.29 623.37 205.83 621.72 206.83C623.05 203.41 620.96 200.18 619.39 197.74C618.99 197.14 618.61 196.55 618.32 196.01C617.57 194.71 620.67 195.21 620.45 194.35C620.45 194.35 621.37 193.97 621.69 194.89C621.69 194.89 621.84 196.12 622.26 196.76C622.81 197.62 623.6 198.13 624.39 198.17C624.72 198.88 625.06 200.92 624.47 203.05ZM620.33 187.83C620.33 187.83 622.06 187.7 623.01 190.6C622.96 191.32 622.81 192 622.59 192.63C622.17 192.38 621.43 192.04 620.91 192.32C619.77 193.5 618.97 191.02 620.91 191.53C620.91 191.53 621.43 188.94 620.33 187.83ZM617.45 168.98C616.57 173.82 620 178.02 623.09 181.8C626.73 186.25 627.07 190.41 624.32 197.04C623.86 196.95 623.43 196.55 623.18 196.17C622.81 195.59 622.68 194.93 622.9 194.58C624.74 191.64 624.52 187.9 622.09 183.32C621.14 181.52 619.08 179.68 619.24 179.94C619.95 181 620.6 182.14 621.12 183.18C621.35 184.27 620.48 185.61 619.37 182.86H619.35C619.01 181.79 618.53 180.68 618.02 179.54C617.11 177.51 616.12 175.27 615.71 172.66C616.2 171.16 616.84 169.92 617.45 168.98ZM617.29 160.24C612.23 169.28 614.87 175.18 617.01 179.99C617.6 181.31 618.13 182.5 618.45 183.64C618.38 183.63 615.95 183.19 614.3 176.82C613.72 173.85 613.16 171.03 611.17 170.23C611.83 166.46 613.88 162.53 617.29 160.24ZM612.97 175.79C613.06 176.2 613.14 176.61 613.23 177.03C613.36 177.74 613.51 178.46 613.68 179.19C611.67 178 610.86 176.23 610.86 175.2C610.86 174.17 611.7 173.9 612.97 175.79ZM613.99 186.43C611.82 187.02 610.33 187.02 606.88 182.6C608.16 182.51 611.18 184.85 613.99 186.43ZM609.82 172.55C603.97 171.17 600.94 174.08 599.53 173.28H599.52C596.05 170.49 591.99 170.98 588.66 171.4C586.43 171.67 584.51 171.91 583.47 171.05H583.46C581.74 169.68 579.74 169.98 577.43 170.32C575.73 170.57 573.8 170.86 571.68 170.48C571.49 170.45 571.32 170.51 571.19 170.64C571.06 170.77 571.01 170.96 571.05 171.14C571.17 171.69 571.35 172.15 571.58 172.53C567.38 172.31 564.09 171.29 562.66 166.73C562.34 165.91 562.06 165.01 561.79 164.1C573.38 160.16 599.36 159.63 609.82 172.55ZM595.9 158.51C584.42 152.99 567.46 150.69 555.98 153.28C555.3 152.44 554.62 151.6 553.98 150.75C564.38 145.03 591.01 150.1 595.9 158.51ZM565.28 131.25C572.1 133.35 577.48 138.68 577.48 138.68C578.15 137.73 580.86 139.16 582.43 140.31C582.46 140.33 582.49 140.35 582.52 140.38C582.57 140.41 582.61 140.44 582.65 140.48C585.19 142.42 587.51 144.46 589.52 146.44C591.03 147.95 593.09 151.01 592.33 153.15C589.62 149.8 581.73 145.07 580.84 143.19C580.84 143.19 582.98 143.77 583.46 143.61C582.69 143.38 581.16 141.24 579.05 141.96C579.05 141.96 576.84 139.67 573.83 138.18C574.12 138.4 578.76 141.92 579.14 143.49C579.14 143.49 576.54 142.89 574.67 140.85C572.8 138.81 571.14 138.25 570.03 136.25C569.99 137.15 570.88 138.54 572.67 139.96C574.32 141.26 573.69 142.89 571.9 142.34C570.12 141.79 569.86 140.55 568.97 138.98C568.07 137.4 564.84 135.91 564.37 134.13C564.37 134.13 563.73 135.06 564.7 136.54C564.44 136.43 560.24 134.6 558.75 132.55C559.51 135.11 563.99 136.94 565.6 137.83C567.22 138.72 567.65 140.17 565.43 139.28C563.22 138.38 557.56 136.21 556.97 134.77C555.22 136.21 554.54 137.49 554.54 137.49L551.47 137.41C552.16 136.07 553.18 134.76 554.55 133.51C555.77 132.32 557.03 131.16 558.31 130.02C560.65 130.15 562.98 130.59 565.28 131.25ZM531.6 152.64C531.6 152.64 531.66 152.46 531.84 152.31C531.53 152.1 531.22 151.89 530.91 151.67C530.93 152.08 530.73 152.35 530.41 152.21C529.89 151.88 527.99 150.94 525.54 149.76C524.49 149.25 523.33 148.7 522.13 148.13C516.58 145.51 510.25 142.58 509.84 142.39C511.44 143.36 515.6 145.58 519.93 147.83C520.78 148.28 521.64 148.72 522.49 149.16C526.13 151.04 529.56 152.78 531.31 153.62L531.95 153.15L531.6 152.64ZM515.45 159.88C515.07 159.86 514.68 159.84 514.27 159.82C514.83 160.21 515.39 160.6 515.96 160.99C516.34 161.01 516.69 161.01 517.03 161.01H517.3C516.66 160.67 516.04 160.3 515.45 159.88ZM518.73 162.79L519.14 163.16C520.43 164.03 521.72 164.89 523.03 165.73C523.63 165.71 524.09 165.72 524.09 165.72L518.73 162.79Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_103",
                d: "M512.38 222.11C512.21 218.37 512.83 211.33 518.58 204.55C518.78 204.32 518.75 203.97 518.52 203.77C518.29 203.58 517.94 203.6 517.74 203.83C511.72 210.92 511.09 218.3 511.28 222.2C510.75 222.48 510.43 223.06 510.52 223.69C510.64 224.48 511.37 225.03 512.16 224.91C512.95 224.79 513.5 224.06 513.38 223.27C513.3 222.7 512.89 222.26 512.37 222.1L512.38 222.11Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_104",
                d: "M509.631 160.39C508.921 160.27 508.191 160.13 507.431 159.96C507.431 159.95 507.421 159.96 507.421 159.96C506.201 159.29 505.011 158.59 503.841 157.85C496.621 153.3 490.281 147.3 484.291 141.28C489.351 145.1 493.911 149.54 499.011 153.3C501.511 155.22 504.101 157.01 506.771 158.67C507.711 159.27 508.671 159.84 509.631 160.39Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_105",
                d: "M514.27 159.82C514.83 160.21 515.39 160.6 515.96 160.99C515.51 160.98 515.02 160.96 514.52 160.93C513.91 160.52 513.3 160.1 512.69 159.69L510.141 157.92C509.791 157.68 509.45 157.44 509.1 157.19C506.71 155.52 504.32 153.83 501.93 152.17C501.27 151.7 500.591 151.21 499.891 150.71C499.311 150.29 498.71 149.86 498.1 149.41C496.61 148.34 495.06 147.21 493.47 146.06C492.76 145.55 492.04 145.02 491.31 144.5C485.69 140.43 479.83 136.26 475.01 133.19C480 135.96 484.8 139.01 489.51 142.2C490.38 142.79 491.25 143.38 492.11 143.99C493.6 145.01 495.08 146.05 496.55 147.1C497.27 147.61 497.99 148.13 498.71 148.64C501.76 150.83 504.79 153.04 507.84 155.23C508.37 155.62 508.9 156 509.43 156.38C511.04 157.53 512.65 158.68 514.27 159.82Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_106",
                d: "M493.471 146.06C492.761 145.55 492.041 145.02 491.311 144.5C490.701 143.73 490.111 142.97 489.511 142.2C487.791 139.99 486.081 137.77 484.291 135.57C487.331 137.94 489.931 140.82 492.111 143.99C492.591 144.67 493.041 145.36 493.471 146.06Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_107",
                d: "M499.891 150.71C499.311 150.29 498.71 149.86 498.1 149.41C497.57 148.64 497.05 147.87 496.55 147.1C494.57 144.15 492.64 141.17 490.75 138.13C493.77 141.33 496.45 144.86 498.71 148.64C499.12 149.32 499.511 150.01 499.891 150.71Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_108",
                d: "M510.14 157.92C509.79 157.68 509.45 157.44 509.1 157.19C508.7 156.52 508.28 155.87 507.84 155.23C504.96 150.92 501.46 147.02 498.33 142.89C501.15 145.29 503.7 147.99 505.95 150.93C507.21 152.65 508.47 154.45 509.43 156.38C509.7 156.88 509.94 157.4 510.14 157.92Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_109",
                d: "M518.21 160.99C517.93 160.99 517.62 161.01 517.3 161.01C516.66 160.67 516.041 160.3 515.451 159.88C511.711 157.28 508.88 153.26 507.26 149.11C510.01 153.09 513.01 156.92 516.76 159.91C517.23 160.29 517.71 160.65 518.21 160.99Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_110",
                d: "M522.13 148.13C523.33 148.7 524.49 149.25 525.54 149.76C524.53 149.54 523.51 149.34 522.49 149.16C519.34 148.6 516.16 148.24 512.97 148.17C515.23 147.54 517.6 147.57 519.93 147.83C520.67 147.92 521.4 148.02 522.13 148.13Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_111",
                d: "M530.92 151.06C530.86 151.04 530.79 151.03 530.73 151.01C530.73 150.98 530.71 150.95 530.69 150.92C530.77 150.97 530.84 151.01 530.92 151.06Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_112",
                d: "M517.31 150.89C520.04 150.4 522.97 150.75 525.4 152.17C522.59 152.09 519.99 151.78 517.31 150.89Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_113",
                d: "M521.14 153.53C525 152.92 529.02 154.13 532.29 156.17C530.37 155.81 528.54 155.31 526.7 154.85C525.32 154.49 522.53 153.83 521.14 153.53Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_114",
                d: "M507.86 136.68C506.75 136.52 505.63 136.32 504.54 136C499.61 134.5 494.98 131.44 491.51 127.47C491.06 126.95 490.62 126.42 490.21 125.87C490.68 126.04 491.14 126.2 491.61 126.35C492.13 126.9 492.66 127.44 493.21 127.95C496.56 131.14 500.47 133.76 504.7 135.53C505.72 136.01 506.8 136.3 507.86 136.68Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_115",
                d: "M523.6 146.55C519.25 144.08 515.11 141.09 511.56 137.52C511.02 136.99 510.49 136.43 509.98 135.86C508.92 134.69 507.93 133.46 507.01 132.17C508.83 133.92 510.69 135.59 512.58 137.24C512.93 137.54 513.27 137.84 513.62 138.13C516.91 140.97 520.27 143.71 523.6 146.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_116",
                d: "M525.78 146.54C527.07 147.67 528.36 148.8 529.63 149.94C529.37 149.79 529.17 149.68 529.02 149.59C527.9 148.94 526.75 148.29 525.56 147.67C524.43 146.75 523.32 145.8 522.26 144.8C519.88 142.57 517.7 140.14 515.86 137.45C519.01 140.66 522.4 143.6 525.78 146.54Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_117",
                d: "M513.62 138.13C512.92 137.97 512.24 137.76 511.56 137.52C508.1 136.33 504.9 134.33 502.24 131.83C504.87 133.15 507.42 134.5 509.98 135.86C510.84 136.31 511.71 136.77 512.58 137.24C512.93 137.54 513.27 137.84 513.62 138.13Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_118",
                d: "M537.14 145.7C534.64 143.67 532.16 141.63 529.64 139.63C513.26 126.69 496.13 112.25 479.14 99.9701C478.84 99.7401 478.53 99.5201 478.23 99.3101H478.51C478.84 99.5101 479.16 99.7201 479.48 99.9301C489.32 106.22 498.45 113.6 507.67 120.76C517.68 128.84 527.68 136.96 537.14 145.7Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_119",
                d: "M495.521 114.89C501.531 118.21 506.311 123.64 511.951 127.49C508.671 126.28 505.931 123.97 503.281 121.76C500.661 119.5 498.071 117.25 495.521 114.89Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_120",
                d: "M483.52 99.32C482.84 99.45 482.15 99.56 481.46 99.66H481.45C481.26 99.7 481.09 99.72 480.9 99.74C480.43 99.81 479.95 99.87 479.48 99.93C479.37 99.93 479.25 99.95 479.14 99.97C477.91 100.09 476.66 100.18 475.42 100.2C475.13 100.21 474.85 100.22 474.57 100.22C472.98 100.23 471.4 100.14 469.83 99.94C469.23 99.86 468.64 99.77 468.05 99.66C465.62 99.2 463.25 98.43 461.05 97.28C462.96 97.87 464.9 98.28 466.85 98.58C467.35 98.66 467.84 98.73 468.34 98.78C470.04 99 471.75 99.12 473.47 99.2C473.7 99.21 473.93 99.22 474.17 99.23C475.52 99.28 476.87 99.3 478.23 99.31H478.51C479.11 99.32 479.7 99.32 480.3 99.32H483.52Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_121",
                d: "M479.6 108.51C475.57 105.81 471.68 102.89 468.05 99.6601C467.65 99.3101 467.24 98.9501 466.85 98.5801C467.35 98.6601 467.84 98.7301 468.34 98.7801C468.84 99.1601 469.34 99.5401 469.83 99.9401C473.24 102.6 476.52 105.43 479.6 108.51Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_122",
                d: "M494.5 116.77C487.57 111.64 480.89 106.1 474.57 100.22C474.2 99.89 473.83 99.54 473.47 99.2C473.7 99.21 473.93 99.22 474.17 99.23C474.59 99.55 475.01 99.87 475.42 100.2C482.07 105.37 488.46 110.91 494.5 116.77Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_123",
                d: "M453.48 97.28C456.47 97.39 459.22 98.86 461.81 100.22C464.38 101.68 466.84 103.31 469.06 105.28C463.75 102.77 459.02 99.25 453.49 97.28H453.48Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_124",
                d: "M520.2 126.81C518.23 125.83 516.37 124.66 514.57 123.39C509.17 119.64 504.93 114.33 499.89 110.29C493.99 106.16 486.85 103.85 480.9 99.7401C480.7 99.6101 480.51 99.4701 480.31 99.3201H480.89C481.07 99.4401 481.26 99.5501 481.45 99.6601H481.46C487.62 103.27 494.57 105.43 500.49 109.49C507.2 115.17 512.53 122.3 520.2 126.81Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_125",
                d: "M483.95 98.3C489.85 99.08 494.97 102.53 499.61 106.04C494.2 103.69 489.48 100.41 483.95 98.3Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_126",
                d: "M503.95 107.83C512.25 112.49 520.05 118.84 524.63 127.32C524.26 126.85 523.89 126.38 523.54 125.9C518 118.88 511 113.27 503.95 107.83Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_127",
                d: "M512.291 111.15C516.991 113.64 521.611 117.18 523.861 122.13C520.461 117.98 516.201 114.78 512.291 111.15Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_128",
                d: "M492.2 99.0601C499.63 100.82 507 104.17 512.46 109.61C506.26 105.33 499.1 102.08 492.2 99.0601Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_129",
                d: "M546.67 126.04C545.66 123.66 545.15 120.85 546.07 118.38C546.52 120.9 547.01 123.46 546.67 126.04Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_130",
                d: "M556.08 50.77C555.92 58.68 557.93 66.45 556.94 74.37C556.03 82.21 553.61 89.75 553.02 97.62C552.94 95.65 553.08 93.68 553.26 91.71C554.13 83.92 556.3 76.29 556.31 68.43C556.19 62.56 555.39 56.64 556.08 50.77Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_131",
                d: "M591.69 55.3701C591.24 56.2101 590.77 57.0601 590.28 57.9001C589.15 59.2401 587.941 60.4801 586.671 61.6601C582.021 66.0201 576.67 69.6401 572.63 74.6101C568.78 78.9201 566.03 84.1401 562.19 88.4401C559.33 91.8001 556.61 95.3301 554.73 99.3001C554.16 100.53 553.66 101.79 553.26 103.11C553.67 101.26 554.31 99.5001 555.11 97.8101C556.79 94.2501 559.15 91.0001 561.59 87.9601C565.34 83.4901 568.06 78.3601 571.87 73.9501C576.57 68.2501 582.98 64.3901 588.19 59.2601C589.16 58.3101 590.081 57.3201 590.951 56.2701C591.201 55.9801 591.45 55.6801 591.69 55.3701Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_132",
                d: "M552.291 104.94C555.471 92.0001 562.931 80.5101 572.461 71.3201C568.401 76.5001 564.181 81.5401 560.821 87.2101C557.381 92.8101 554.661 98.8201 552.291 104.94Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_133",
                d: "M569.22 72.1699C570.04 67.6499 571.96 63.4099 574.58 59.6599C573.19 64.0399 571.33 68.0999 569.22 72.1699Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_134",
                d: "M574.84 66.8099C576.13 63.5199 578.18 60.4899 581.05 58.3799C579.2 61.4199 577.3 64.2299 574.84 66.8099Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_135",
                d: "M596.31 40.1899C595.82 41.7099 595.15 43.1799 594.4 44.5999C593.65 46.0299 592.82 47.4199 592.01 48.7699C588.63 54.1399 584.57 59.0799 579.95 63.3999C583.99 58.5699 587.84 53.5899 591.16 48.2499C591.38 47.8799 591.6 47.5099 591.83 47.1399C592.55 45.9399 593.28 44.7199 593.94 43.4799C594.87 42.4299 595.59 41.4299 596.04 40.4499C596.1 40.3299 596.19 40.2399 596.31 40.1899Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_136",
                d: "M575.41 41.3399C574.58 43.3099 573.86 45.3299 573.17 47.3699C572.18 50.3399 571.26 53.3399 570.16 56.2499C570.76 52.2599 571.77 48.3499 573.14 44.5399C573.51 43.5899 573.88 42.6299 574.29 41.6899C574.45 41.5599 574.62 41.4399 574.79 41.3299C574.98 41.1999 575.23 41.2099 575.41 41.3399Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_137",
                d: "M568.97 58.98C568.55 62.32 567.3 65.61 564.97 68.09C566.11 64.9 567.24 61.9 568.97 58.98Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_138",
                d: "M563.83 59.3301C562.86 61.7101 561.73 64.0401 560.52 66.3101C559.91 67.4901 559.27 68.6401 558.63 69.7901C559.26 68.0201 559.93 66.2601 560.63 64.5201C561.02 63.5301 561.43 62.5401 561.83 61.5501C561.81 62.3101 561.79 63.0701 561.76 63.8401C562.38 62.1401 563.09 60.6701 563.83 59.3301Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_139",
                d: "M561.62 51.45C561.31 52.23 560.981 52.99 560.641 53.75C559.821 55.6 558.92 57.42 557.99 59.19C558.78 56.64 559.65 54.13 560.54 51.63C560.85 50.75 561.16 49.87 561.47 49C561.53 49.8 561.58 50.62 561.62 51.45Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_140",
                d: "M556.08 44.38C555.98 40.33 556.58 36.41 557.61 32.51C557.96 36.52 557.33 40.56 556.08 44.38Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_141",
                d: "M553.78 53.5699C552.92 50.7399 552.44 47.8099 552.22 44.8499C552.14 43.8199 552.1 42.7899 552.09 41.7599C552.43 40.7099 552.73 39.6699 552.97 38.6499C553.02 39.8199 553.07 40.9899 553.11 42.1699C553.26 45.9999 553.41 49.8299 553.78 53.5699Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_142",
                d: "M553.781 65.1899C551.811 63.2799 550.361 60.9199 549.381 58.3599C549.031 57.4499 548.741 56.5099 548.521 55.5599C548.631 54.6299 548.771 53.7499 548.921 52.8999C549.121 53.8699 549.351 54.8199 549.611 55.7699C550.541 59.0899 551.871 62.2699 553.781 65.1899Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_143",
                d: "M553.52 74.25C552.13 72.55 550.82 70.69 549.72 68.71C549.21 67.8 548.75 66.86 548.34 65.9C548.26 64.82 548.21 63.79 548.19 62.79C548.58 63.85 549 64.88 549.46 65.91C550.71 68.75 552.16 71.51 553.52 74.25Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_144",
                d: "M552.88 93.2801C552.92 92.1501 552.93 91.0301 552.87 89.9101C552.86 89.3701 552.83 88.8401 552.8 88.3001C552.56 84.0901 551.78 79.9101 550.43 75.9201C550.01 74.6301 549.51 73.3601 548.96 72.1201C548.91 71.6201 548.86 71.1201 548.8 70.6201C549.3 71.3901 549.74 72.1901 550.15 73.0101C552.36 77.4101 553.47 82.3801 553.45 87.3201C553.44 89.3301 553.25 91.3301 552.88 93.2801Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_145",
                d: "M506.04 87.75C505.02 87.32 503.95 87.16 502.86 87.11C502.18 87.08 501.12 87.0199 499.92 86.9499C499.28 86.9099 498.6 86.8699 497.93 86.8399C496.63 86.7599 495.33 86.68 494.3 86.61C493.81 86.58 493.38 86.56 493.04 86.54C492.84 86.52 492.64 86.51 492.44 86.5C491.36 86.42 490.29 86.37 489.22 86.35C488.69 86.33 488.16 86.33 487.63 86.32C485.07 86.29 482.51 86.34 479.93 86.29C482 85.92 484.09 85.68 486.19 85.55C486.71 85.53 487.22 85.5 487.74 85.49C488.73 85.45 489.73 85.44 490.73 85.46C491.2 85.46 491.68 85.48 492.15 85.5C493.61 85.55 495.06 85.65 496.5 85.79C497.09 85.85 497.68 85.91 498.26 85.99C498.73 86.04 499.19 86.1 499.66 86.17C501.8 86.51 504.17 86.52 506.04 87.75Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_146",
                d: "M518.02 97.49C516.33 96.45 514.51 95.76 512.64 95.2C510.71 94.62 508.73 94.17 506.8 93.58C506.24 93.41 505.69 93.23 505.14 93.03C498.03 90.21 491.62 85.97 485.12 82.02C490.63 84.57 495.97 87.55 501.36 90.3C503.07 91.27 504.92 91.97 506.8 92.6C508.09 93.04 509.4 93.44 510.68 93.88C513.29 94.76 515.82 95.78 518.02 97.49Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_147",
                d: "M489.22 86.35C488.69 86.33 488.16 86.33 487.63 86.32C487.15 86.08 486.67 85.82 486.19 85.55C483.73 84.23 481.35 82.75 479.06 81.13L478.24 80.52C478 80.35 477.68 80.08 477.39 80.31C477.6 79.98 478.1 80.16 478.38 80.29C480.54 81.23 482.62 82.37 484.65 83.55C485.72 84.11 486.72 84.83 487.74 85.49C488.23 85.8 488.71 86.09 489.22 86.35Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_148",
                d: "M494.891 83.4099C495.221 84.5499 496.43 84.8699 497.34 85.4599C500.18 87.1099 503.28 88.8399 505.99 90.7299C502.68 89.8099 499.651 88.1399 496.911 86.1099C496.081 85.4399 494.761 84.6499 494.891 83.4099Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_149",
                d: "M513.99 91.3999C518.59 94.1899 522.66 97.8199 525.9 102.12C521.67 98.7799 517.74 95.2599 513.99 91.3999Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_150",
                d: "M526.08 109.45C529.24 112.97 534.65 117.33 536.29 121.88C533.07 117.55 528.59 114.32 526.08 109.45Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_151",
                d: "M498.03 68.01C497.22 67.45 496.39 66.88 495.58 66.3C494.95 65.41 494.35 64.48 493.81 63.53C492.16 60.67 490.88 57.59 489.99 54.47C491.85 58.19 493.841 61.85 496.141 65.31C496.741 66.23 497.37 67.13 498.03 68.01Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_152",
                d: "M504.82 72.5701C504.05 72.0401 503.27 71.5201 502.49 71.0001C501.81 70.1401 501.18 69.2401 500.59 68.3201C499.13 66.0501 497.91 63.6201 496.97 61.1101C498.86 63.9901 500.81 66.9001 502.82 69.7601C503.48 70.7001 504.14 71.6401 504.82 72.5701Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_153",
                d: "M509.91 76.4699C509.01 75.7599 508.11 75.0399 507.22 74.3199C507.15 74.2699 507.09 74.2199 507.02 74.1699C506.33 73.2299 505.69 72.2599 505.08 71.2699C503.8 69.1499 502.7 66.9199 501.73 64.6799C503.67 67.3999 505.49 70.1899 507.39 72.9299C508.21 74.1199 509.05 75.3099 509.91 76.4699Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_154",
                d: "M517.31 82.51C516.96 82.19 516.6 81.89 516.24 81.59C515.68 80.7 515.2 79.75 514.75 78.8C514.28 77.81 513.84 76.81 513.37 75.85C512.07 73.03 510.49 70.41 508.88 67.74C511.13 69.94 512.93 72.58 514.27 75.42C514.99 76.92 515.56 78.47 516.18 79.98C516.53 80.84 516.89 81.68 517.31 82.51Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_155",
                d: "M520.72 85.6499C520.3 85.2299 519.87 84.8099 519.42 84.3999C518.96 83.5299 518.56 82.6299 518.21 81.7099C516.74 77.8699 515.93 73.6699 513.82 70.1299C517.13 73.7399 518.07 78.5399 519.67 83.0299C519.99 83.9199 520.33 84.7999 520.72 85.6499Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_156",
                d: "M525.23 90.35C524.57 86.09 522.99 81.94 520.46 78.47C521.86 82.05 523.1 85.76 524.27 89.46C524.65 89.68 524.95 89.99 525.24 90.35H525.23Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_157",
                d: "M483.26 56.53C487.98 62.37 497.9 71.3 508.78 77.72C509.71 78.27 510.48 79.08 511.48 79.51C499.11 74.17 487.53 63.99 483.26 56.53Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_158",
                d: "M478.25 42.8899C482.56 46.0999 486.61 50.3799 488.12 55.6599C485.35 50.9999 481.62 47.1099 478.25 42.8899Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_159",
                d: "M518.76 48C521.36 49.16 523.49 51.53 524.21 54.3C523.2 53.27 522.331 52.24 521.421 51.21C520.611 50.25 519.49 49.03 518.76 48Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_160",
                d: "M530.85 75.4201C530.01 74.6601 529.17 73.9001 528.34 73.1501C526 71.0601 523.65 69.0001 521.14 67.0601C523.13 67.9901 525 69.1501 526.74 70.5001C527.5 71.0701 528.24 71.6801 528.95 72.3301C529.61 73.3501 530.24 74.3801 530.85 75.4201Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_161",
                d: "M534.36 81.69C533.6 81 532.81 80.33 532.02 79.67C529.03 77.18 525.9 74.81 523.18 72C525.79 73.72 528.34 75.5 530.79 77.42C531.3 77.82 531.81 78.23 532.31 78.64C532.57 78.86 532.82 79.08 533.08 79.3C533.52 80.09 533.94 80.89 534.36 81.69Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_162",
                d: "M460.63 78.1301C460.63 78.1301 470.421 78.9701 478.421 82.6401C478.421 82.6401 469.22 80.7501 464.06 79.7001C458.9 78.6501 458.5 77.8301 458.5 77.8301L460.63 78.1301Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_163",
                d: "M534.32 115.65C533.94 115.22 521.59 101.49 506.8 93.5801V92.6001C508.09 93.0401 509.4 93.4401 510.68 93.8801C511.28 94.2701 511.94 94.7201 512.64 95.2001C518.89 99.5501 528.67 107.16 534.32 115.65Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_164",
                d: "M546.24 115.23C546.13 112.63 545.36 110.14 544.51 107.71C540.94 98.1399 536.85 88.6999 532.02 79.6699C531.61 78.9199 531.2 78.1699 530.79 77.4199C529.99 75.9899 529.18 74.56 528.34 73.15C527.82 72.26 527.29 71.38 526.74 70.5C524.46 66.8 522.03 63.19 519.43 59.7C522.97 63.65 526.12 67.89 528.95 72.33C529.61 73.35 530.24 74.3799 530.85 75.4199C531.63 76.6999 532.37 77.99 533.08 79.3C533.52 80.09 533.94 80.89 534.36 81.69C537.48 87.65 540.17 93.8599 542.58 100.13C544.28 104.99 546.38 110 546.24 115.23Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_165",
                d: "M539.82 98.57C540.25 99.19 543.24 104.12 544.18 106.81C545.12 109.5 545.49 108.99 545.49 108.99L541.99 99.87L540.81 98.3L539.83 98.57H539.82Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_166",
                d: "M530.16 82.8501C534.07 88.0401 536.88 94.2201 536.88 94.2201L538.24 95.4501V94.9601C536.41 90.2101 533.43 86.2101 530.15 82.8501H530.16Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_167",
                d: "M537.05 112.98C538.62 116.26 539.58 115.45 537.61 110.51C535.64 105.57 533.18 97.8 532.84 95.2C537.82 109.83 540.96 110.55 540.96 110.55L541.25 117.28L542.02 123.53L539.81 119.83L537.13 113.87L537.04 112.98H537.05Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_168",
                d: "M528.21 94.2699L527.26 94.5799C526.49 92.5199 525.24 90.6499 523.78 88.9199C523.67 88.7699 523.56 88.6399 523.44 88.5099C523.15 88.1899 522.92 87.9299 522.73 87.7099C522.46 87.4199 522.19 87.1299 521.91 86.8399C521.52 86.4399 521.13 86.0399 520.72 85.6499C520.3 85.2299 519.87 84.8099 519.42 84.3999C518.73 83.7499 518.03 83.1199 517.31 82.5099C516.96 82.1899 516.6 81.8899 516.24 81.5899C514.17 79.8299 512.04 78.1599 509.91 76.4699C509.01 75.7599 508.11 75.0399 507.22 74.3199C507.15 74.2699 507.09 74.2199 507.02 74.1699C506.31 73.6199 505.57 73.0899 504.82 72.5699C504.05 72.0399 503.27 71.5199 502.49 70.9999C501.41 70.2999 500.33 69.5899 499.27 68.8599C498.86 68.5699 498.45 68.2899 498.03 68.0099C497.22 67.4499 496.39 66.8799 495.58 66.2999C492.79 64.2999 490.11 62.0899 488.32 59.1599C486.45 56.5299 483.9 54.5999 481.52 52.4099C477.85 48.9999 476.99 43.7399 474.88 39.3999C477.03 42.8399 478.21 46.7599 480.56 50.0299C482.02 51.9299 484.09 53.2099 485.83 54.8799C487.66 56.4699 489.21 58.5399 490.57 60.4899C491.58 61.5899 492.67 62.5899 493.81 63.5299C494.56 64.1499 495.34 64.7499 496.14 65.3099C497.58 66.3699 499.08 67.3499 500.59 68.3199C501.33 68.7999 502.08 69.2799 502.82 69.7599C503.58 70.2599 504.34 70.7599 505.08 71.2699C505.86 71.7999 506.63 72.3499 507.39 72.9299C507.59 73.0799 507.78 73.2299 507.98 73.3799C510.22 75.1999 512.51 76.9699 514.75 78.7999C515.23 79.1899 515.71 79.5799 516.18 79.9799C516.86 80.5399 517.54 81.1199 518.21 81.7099C518.7 82.1399 519.19 82.5799 519.67 83.0299C520.72 83.9999 521.75 85.0099 522.73 86.0699C524.25 87.6999 525.71 89.4399 526.85 91.3999C527.38 92.3099 527.84 93.2599 528.21 94.2699Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_169",
                d: "M535.65 19.6201C534.78 31.5201 533.7 43.6601 536.15 55.4001C536.82 58.2901 537.76 61.1601 538.74 63.9701C539.42 66.1501 540.61 68.2201 540.74 70.5701C540.75 71.1501 541.11 71.8301 541.41 72.4801C542.78 75.1201 544.41 77.6901 545.7 80.3901C547.02 83.0901 548.26 85.9301 548.68 88.9301C546.93 83.1301 543.17 78.3901 540.49 72.9301C540.19 72.2201 539.79 71.5301 539.75 70.5901C539.59 68.4201 538.43 66.4101 537.77 64.3201C536.76 61.4601 535.8 58.6101 535.1 55.6401C532.64 43.7601 533.42 31.4401 535.66 19.6101L535.65 19.6201Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_170",
                d: "M584.4 83.49C587.43 82.21 590.57 75.63 591.87 72.59C593.17 69.55 594.49 69.26 594.49 69.26L590.28 77.86L587.09 88.12L586.04 89.14L588.11 82.37C582.92 88.41 579.94 90.71 579.94 90.71L584.21 83.9L584.4 83.48V83.49Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_171",
                d: "M561.45 69.0699C561.1 72.0599 561.94 73.6199 561.94 73.6199C564.79 71.8799 565.68 68.8099 565.68 68.8099C565.59 70.2099 564.79 72.1699 564.79 72.1699C568.23 67.8299 569.67 64.8099 570.34 62.3899C571.01 59.9699 571.21 60.7199 571.21 60.7199L568.61 68.5099L563.76 76.0399L558.19 86.9799L559.65 80.5099L560.27 75.8299L561 70.1299L561.44 69.0699H561.45Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_172",
                d: "M498.8 78.88C501.3 80.51 503.95 81.28 503.95 81.28C503.95 81.28 502.16 79.43 501.74 77.83C506.1 81.6 512.48 84.34 514.85 85.04L514.3 82.85C516.51 85.55 521.28 89.83 523.87 92C526.46 94.17 524.97 90.17 523.45 88.51C521.93 86.85 522 86.6 522 86.6L525.57 90.47L526.86 91.41C527.4 84.92 521.38 73.91 516.9 70.57C512.42 67.23 515.69 68.77 515.69 68.77L521.48 73.8L524.93 80.12L527.78 84.38L528.21 88.55L530.33 97.27L531.65 102.12C531.65 102.12 527.51 97.19 524.63 94.21C521.75 91.23 515.78 87.46 515.78 87.46L508.33 83.67L500.93 81.18L498.8 78.87V78.88Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_173",
                d: "M503.81 36.27C508.45 37.07 513.47 40.7299 513.47 40.7299C510.36 37.2799 504.66 35.2 504.66 35.2H501.72L503.76 36.6899L503.8 36.27H503.81Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_174",
                d: "M531.95 62.2499L530.31 51.8199C530.31 51.8199 530 48.2899 530.14 51.3099C530.28 54.4499 530.73 57.5299 529.98 57.3699C529.09 57.1799 526.46 53.3899 525.83 52.4099C523.27 48.4199 519.95 44.9899 515.7 42.8899C520.83 46.5399 524.46 51.7699 527.57 57.1999C527.95 58.1599 527.95 58.9799 526.72 58.7999C525.09 58.5599 521.76 56.3799 519.49 53.5699L519.96 54.7199L522.6 58.0799L524.6 59.6999L529.15 63.9099L533.2 68.7599L531.96 62.2499H531.95Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_175",
                d: "M547 72.98C548.49 76.68 548.81 79.48 546.49 78.47C550.53 85.56 550.48 93.62 550.48 93.62H551.27L550.82 86.6C550.01 83.82 548.36 80.24 548.36 80.24C548.36 80.24 549.91 78.97 549.06 77.45C548.21 75.93 547.86 73.36 547.86 73.36L546.99 72.98H547Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_176",
                d: "M464.42 93.2599C469.2 93.2099 479.74 92.3799 484.21 92.4399L483.19 91.6699C483.19 91.6699 488.87 92.3099 491.71 93.2699C491.71 93.2699 491.3 92.3799 491.3 91.9899C492.96 93.5799 507.64 97.1399 512.3 101.01V99.6499C515.68 103.04 526.49 111.25 533.22 121.18L523.2 111.14C523.2 111.14 516.41 104.58 508.9 100.7C501.39 96.8199 492.22 94.9199 492.22 94.9199L483.26 93.9299L471.03 93.7099L465.1 93.8399L464.43 93.2499L464.42 93.2599Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_177",
                d: "M489.17 106.58C484.64 103.37 486.82 103.21 490.42 105.01C494.02 106.81 494.83 106.75 494.83 106.75L488.64 103.69L481.24 99.6399H480.32L478.88 99.7699L481.34 101.29L489.13 107.01L489.18 106.59L489.17 106.58Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_178",
                d: "M503.07 113.07C504.65 114.58 503.07 115.24 503.07 115.24C508.41 118.22 513.14 122.76 515.83 124.27C518.52 125.78 515.17 123.52 515.17 123.52L511.6 120.48L505 114.29L504.11 113.08H503.07V113.07Z",
                fill: "#02230B"
            })), t.createElement("g", {
                id: "Girl"
            }, t.createElement("path", {
                id: "Vector_179",
                d: "M533.22 384.55C536.81 383.8 540.26 384.2 543.61 385.67C540.85 383.25 536.43 382.75 533.22 384.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_180",
                d: "M645.121 432.34C645.121 432.26 645.111 432.19 645.071 432.11C645.051 432.08 645.031 432.05 645.011 432.01C644.781 430.92 644.381 429.37 643.821 427.91C643.821 427.89 643.821 427.88 643.821 427.86C643.701 424.33 642.231 419.97 639.351 415.56C639.341 415.5 639.311 415.43 639.271 415.37C639.201 415.26 639.111 415.17 639.021 415.07C637.941 413.47 636.671 411.87 635.211 410.3C635.171 410.21 635.101 410.15 635.011 410.09C633.861 408.88 632.601 407.69 631.221 406.54C631.171 406.48 631.111 406.43 631.041 406.39C628.771 404.51 626.191 402.74 623.281 401.16C623.391 400.76 623.471 400.35 623.491 399.93C623.571 398.7 623.491 397.48 623.261 396.29C623.271 396.19 623.251 396.1 623.211 396.01C622.891 394.49 622.341 393.03 621.541 391.66C619.681 388.46 616.691 385.83 612.761 383.86C612.721 383.84 612.691 383.82 612.651 383.81C608.901 381.95 604.301 380.68 599.021 380.11C599.011 380.11 598.991 380.11 598.981 380.11C595.801 379.57 592.021 379.54 588.621 379.52H587.751C587.751 379.52 587.721 379.52 587.701 379.52C586.071 379.39 584.361 379.39 582.571 379.56C580.351 379.17 578.321 379.05 576.811 378.96C575.821 378.9 574.971 378.85 574.651 378.74C574.611 378.73 574.571 378.73 574.531 378.72C574.271 378.62 574.011 378.51 573.761 378.39C573.721 378.36 573.681 378.34 573.631 378.33C572.291 377.69 571.101 376.82 570.251 375.48C567.591 371.62 567.891 364.19 572.341 361.72C570.711 362.03 569.581 363.23 568.841 364.68C566.841 364.57 565.171 365.49 564.131 367.31C562.781 369.67 562.591 373.1 563.391 376.6C563.541 377.53 563.811 378.47 564.241 379.41C564.241 379.41 564.241 379.41 564.251 379.42C564.731 380.69 565.331 381.93 566.061 383.09C557.511 381.22 550.801 379.61 550.801 369.16C550.801 368.93 550.641 368.73 550.421 368.67C550.201 368.62 549.971 368.72 549.861 368.92C548.481 371.53 548.151 374.46 548.871 377.19C548.871 377.19 548.871 377.19 548.871 377.2C548.891 377.41 549.381 382.19 557.081 390.72C556.881 390.64 556.681 390.55 556.471 390.47C555.831 390.24 555.131 390.06 554.401 389.9C553.831 389.16 550.951 385.44 548.881 384.34C547.731 382.99 545.481 381.11 542.061 381.36C539.811 380.51 537.241 380.33 534.831 380.96C532.331 381.61 527.881 383.73 526.201 390.56C526.151 390.78 526.241 391 526.441 391.11C526.521 391.15 526.601 391.18 526.691 391.18C526.821 391.18 526.941 391.13 527.041 391.04C530.011 388.19 533.891 386.8 537.961 387.15C540.991 387.41 543.351 388.53 544.611 389.65C538.101 390.56 531.251 393.59 527.131 399.58C523.941 399.09 520.691 398.94 517.491 398.83C513.261 398.57 509.051 397.88 504.921 396.94C502.471 396.41 500.121 395.71 497.761 394.88C494.531 394.19 491.221 394.49 488.031 394.56C483.021 395.07 477.971 393.34 473.031 394.73C469.591 395.63 466.081 395.49 462.501 395.98C457.211 396.74 452.271 399.28 446.921 398.91C445.611 398.12 444.061 397.38 442.631 396.81C442.271 396.67 441.881 396.51 441.461 396.34C437.741 394.83 432.101 392.54 427.531 392.94C425.921 393.08 423.341 394.89 420.381 397.06C419.571 397.66 418.861 398.17 418.381 398.48C416.761 399.51 413.541 399.74 412.431 399.74C411.251 399.74 409.171 401.46 408.371 402.34C407.541 403.25 406.921 405.46 406.741 406.17C406.481 406.42 405.971 406.96 404.771 408.23C403.631 409.43 402.221 410.92 401.781 411.31C401.541 411.53 400.561 411.46 399.781 411.4C398.771 411.33 397.631 411.24 396.611 411.51C395.341 411.84 391.491 412.85 390.301 412.53C388.561 412.06 382.241 415.69 378.971 418.63C378.671 418.9 378.271 419.26 377.821 419.65C376.361 420.94 374.551 422.55 373.821 423.35C373.321 423.89 371.561 423.96 369.851 424.03C369.081 424.06 368.261 424.09 367.441 424.16C364.741 424.39 363.731 425.42 362.061 427.12C361.721 427.47 361.351 427.84 360.921 428.26C358.811 430.29 356.471 431.43 352.821 432.18C351.781 432.39 350.821 432.4 349.891 432.41C347.971 432.43 345.991 432.45 343.611 434.35C342.191 435.48 341.001 436.99 339.731 438.6C338.011 440.79 336.231 443.05 333.851 444.24C330.161 446.08 328.081 447.28 325.531 451.35L325.081 452.1C325.051 452.16 325.011 452.21 324.981 452.27L324.771 452.62C344.361 522.9 401.881 577.51 473.781 592.95C469.061 597.79 465.691 605.42 462.161 613.44C460.571 617.05 458.931 620.78 457.091 624.46C451.801 635.04 441.181 653.1 431.801 669.04C429.141 673.56 426.591 677.9 424.301 681.83L418.551 691.7C409.961 706.47 401.071 721.74 397.071 728.11C392.821 734.87 389.551 737.61 386.381 740.27C385.941 740.64 385.501 741.01 385.061 741.38C379.221 746.38 375.321 750.26 373.141 753.22C369.971 757.52 371.621 765.49 375.141 770.23C375.571 770.8 375.991 771.37 376.411 771.93C379.501 776.03 382.431 779.91 383.931 785.27C384.911 788.75 385.421 792.64 385.841 795.76C386.171 798.23 386.451 800.37 386.871 801.71C387.801 804.65 387.911 806.29 387.951 811.49C388.011 819.12 391.761 820.72 394.891 820.72C396.821 820.72 398.541 820.5 400.051 820.3C402.141 820.03 403.941 819.8 405.871 820.13C406.561 820.25 407.141 820.57 407.751 820.92C408.541 821.36 409.431 821.85 410.621 821.93C410.731 821.93 410.851 821.94 410.961 821.94C412.081 821.94 413.191 821.6 414.191 821.3C414.951 821.07 415.671 820.85 416.281 820.81L416.781 820.78C418.131 820.72 419.821 820.64 419.971 818.82C420.061 817.69 418.931 815.88 416.061 812.57C415.071 811.42 413.981 810.96 412.931 810.52C412.111 810.17 411.331 809.85 410.571 809.19C410.121 808.8 409.041 806.84 408.081 803.23C407.141 799.73 406.801 794.94 406.971 787.7C407.061 784 405.651 780.01 404.291 776.15C402.981 772.44 401.751 768.93 402.191 766.43C403.001 761.87 406.801 756.36 415.111 744.29C416.171 742.75 417.301 741.11 418.511 739.34C422.371 733.71 426.941 726.55 431.771 718.98C440.691 704.99 450.801 689.14 461.131 675.45C473.791 658.67 506.321 626.89 523.801 609.82C528.601 605.13 532.401 601.42 534.531 599.26C544.421 589.2 545.981 576.68 546.021 569.96C546.771 569.07 549.921 564.85 549.661 556.86C549.461 550.52 545.491 546.49 541.661 542.6C539.511 540.42 537.301 538.17 535.721 535.51C537.751 521.55 537.981 507.38 537.651 493.29C537.551 489.76 537.341 486.15 537.191 482.62C537.121 480.53 537.721 478.53 538.271 476.5C539.651 471.77 541.301 467.09 542.811 462.36C543.911 462.48 544.971 462.58 546.001 462.67C544.691 463.63 542.681 465.73 543.471 469.16C542.831 470.46 542.501 471.77 542.641 473C542.891 475.33 544.651 477.1 547.831 478.28C548.471 479.92 549.641 481.4 551.291 482.65C551.141 483.44 551.041 484.23 551.031 485.02C550.941 490.03 553.661 494.23 558.701 496.84C558.771 496.88 558.851 496.9 558.931 496.9C559.111 496.9 559.281 496.8 559.371 496.63C559.501 496.38 559.401 496.08 559.161 495.96C554.481 493.53 551.951 489.66 552.031 485.05C552.151 478.43 557.601 471.35 566.601 465.7C566.231 466.15 565.721 466.84 565.221 467.73C568.201 464.73 571.391 463.47 571.821 464.37C572.231 465.23 567.671 466.95 565.501 468.97C564.251 468.8 562.891 469.63 561.881 470.26C558.111 472.93 555.541 476.97 553.861 481.2C556.641 476.97 559.471 472.11 564.261 469.97C564.661 469.81 565.111 469.72 565.491 469.75C560.931 473.56 556.651 481.24 555.241 484.75C558.011 480.67 564.201 469.7 569.631 468.41C566.841 471 563.851 475.26 563.161 476.34C560.191 480.86 557.481 485.75 556.431 491.1C558.051 485.94 560.831 481.25 563.831 476.79C564.491 475.61 573.351 463.9 573.831 468.03C567.161 472.19 559.161 487.69 560.561 497.21C560.601 497.46 560.811 497.64 561.051 497.64C561.071 497.64 561.101 497.64 561.121 497.64C561.391 497.6 561.581 497.35 561.541 497.07C560.371 489.13 566.291 476.38 572.021 470.76C567.791 476.21 564.721 483.89 564.111 489.82C563.671 494.12 564.491 497.28 566.491 498.95C566.581 499.03 566.701 499.07 566.811 499.07C566.951 499.07 567.091 499.01 567.191 498.89C567.371 498.68 567.341 498.36 567.131 498.18C564.941 496.35 564.821 492.68 565.101 489.92C565.841 482.73 570.441 472.8 576.041 467.92C573.241 471.96 570.831 477.17 569.511 482.59C568.061 488.52 567.911 496.3 570.411 499.69C570.761 500.16 571.161 500.58 571.601 500.97C570.921 502.35 570.321 503.76 569.881 505.25C567.111 514.36 573.151 521.19 581.761 522.7C581.531 523.79 581.411 524.87 581.451 525.94C581.501 527.33 581.781 528.69 582.291 530.02C583.601 533.41 587.711 537.68 591.191 538.82C588.611 537.08 586.581 535.26 585.111 533.35C584.511 532.58 584.021 531.79 583.611 530.99C586.281 533.35 590.871 533.33 594.281 531.11C591.731 531.83 589.011 532.58 586.441 531.72C583.941 530.92 582.291 528.47 582.251 525.88C582.251 525.88 582.251 525.87 582.251 525.86C582.221 524.86 582.331 523.85 582.551 522.83C582.681 522.85 582.811 522.88 582.941 522.89C586.251 523.3 589.691 522.97 592.731 521.66C589.511 522.35 586.241 522.54 583.051 522.08C582.951 522.06 582.851 522.04 582.751 522.02C583.321 519.99 584.371 517.91 585.891 515.77C587.701 517.87 590.651 519.13 594.541 519.4C594.751 520.39 595.031 521.37 595.401 522.32C596.261 527.35 598.861 531.46 602.991 534.14C605.941 536.06 609.451 537.04 612.961 537.04C615.751 537.04 618.551 536.42 621.071 535.17C621.101 535.16 621.121 535.13 621.151 535.11C626.021 533.82 630.321 530.77 632.001 526.35C629.581 530.37 625.491 533.05 621.001 534.24C620.881 534.2 620.751 534.21 620.621 534.27C620.511 534.33 620.391 534.37 620.281 534.43C618.181 534.91 616.011 535.07 613.901 534.88C601.251 533.74 599.901 519.88 603.791 510.22C605.091 506.94 606.881 503.85 608.611 500.72C611.971 494.81 614.721 488.48 616.301 481.84C617.711 484.15 619.091 486.45 620.291 488.62C614.011 495.95 608.591 504.33 606.271 513.81C605.541 517.01 605.111 520.78 605.791 524.16C605.761 524.29 605.791 524.43 605.861 524.55C605.861 524.55 605.871 524.55 605.881 524.56C606.471 527.15 607.731 529.49 610.031 531.14C613.181 533.29 617.521 533.15 620.851 531.61C617.311 532.08 613.531 532.53 610.511 530.44C608.461 528.93 607.341 526.83 606.801 524.5C607.291 524.12 608.361 523.18 609.401 521.5C609.331 523.29 609.811 525.03 611.151 526.51C606.971 517.3 617.271 508.97 624.831 505.41C625.331 506.67 626.091 507.73 627.231 508.59C627.251 508.61 627.291 508.6 627.311 508.62C627.631 509.2 628.041 509.89 628.421 510.36C629.881 512.25 632.111 513.66 634.591 513.57C634.691 513.57 634.791 513.52 634.861 513.43C635.011 513.26 634.981 512.99 634.791 512.85C632.861 511.12 631.901 508.5 631.301 506.01C630.691 503.41 630.461 500.7 630.811 498.04C630.031 500.65 630.071 503.47 630.531 506.17C631.001 508.5 631.781 510.93 633.451 512.7C631.071 512.3 629.111 510.35 628.001 508.23C628.001 508.17 628.021 508.11 628.001 508.05C626.821 503.78 627.731 500.19 629.001 495.22C630.241 490.34 631.791 484.27 631.791 475.31C631.791 456.69 626.281 448.78 622.141 444.45C621.331 443.6 620.361 442.65 619.311 441.62C615.331 437.7 610.131 432.55 607.371 427.33C607.371 427.31 607.351 427.31 607.341 427.3C606.991 426.57 606.621 425.85 606.251 425.14C606.411 425.29 606.591 425.43 606.751 425.58C608.871 428.35 611.241 430.93 613.811 433.3C617.801 437.07 622.421 440.05 626.031 444.16C634.121 452.88 638.081 474.3 632.831 485.09C631.261 489.27 631.021 498.01 635.041 500.8C633.701 499.58 633.411 497.62 632.991 495.94C632.301 492.44 632.421 488.74 633.611 485.37C634.501 483.52 635.131 481.39 635.531 479.1C636.111 482.42 637.801 485.18 641.511 486.08C640.391 485.58 639.401 484.88 638.631 484C636.271 481.26 635.931 477.44 636.191 473.93C636.461 470.86 637.161 467.83 638.211 464.92C638.301 464.68 638.951 463.01 639.101 462.66C639.461 461.82 639.861 460.99 640.281 460.18C641.431 458.06 642.991 456.07 643.891 453.79C644.951 451.54 645.371 449.11 645.841 446.69C647.151 442.01 647.131 436.79 645.061 432.3L645.121 432.34ZM642.491 425.24C636.051 414.58 622.351 416.46 611.751 414.69C610.601 414.5 609.481 414.21 608.401 413.84C613.151 414.62 618.661 414.36 623.711 414.11C630.251 413.78 636.431 413.47 638.321 415.78C640.531 419.07 641.911 422.34 642.501 425.24H642.491ZM643.481 429.78C640.261 426.01 634.831 424.21 627.731 421.88C622.941 420.3 617.231 418.41 611.051 415.46C619.981 417.4 629.921 415.65 637.641 421.28C640.541 423.37 642.411 426.44 643.481 429.79V429.78ZM636.771 413.65C633.781 412.61 628.991 412.84 623.651 413.12C616.721 413.47 608.871 413.87 603.591 411.47C603.541 411.45 603.491 411.44 603.441 411.43C602.691 410.95 601.971 410.43 601.281 409.86C601.541 409.89 601.811 409.92 602.101 409.94C605.141 411.05 608.531 411.41 611.981 411.41C615.181 411.41 618.421 411.11 621.471 410.82C626.521 410.35 631.291 409.91 634.491 410.98C635.321 411.86 636.081 412.76 636.781 413.66L636.771 413.65ZM633.171 409.62C629.921 409.03 625.751 409.41 621.361 409.82C616.391 410.28 610.891 410.79 606.011 409.94C607.131 409.86 608.311 409.72 609.501 409.52C610.231 409.61 610.961 409.65 611.701 409.65C615.001 409.65 618.371 408.86 621.411 408.15C625.121 407.28 628.331 406.54 630.561 407.3C631.471 408.06 632.351 408.83 633.161 409.62H633.171ZM628.921 405.99C626.731 405.88 624.111 406.49 621.191 407.17C618.841 407.72 616.281 408.31 613.741 408.54C615.911 407.89 617.941 407.03 619.551 405.95C621.201 404.83 622.331 403.56 622.951 402.14C625.121 403.33 627.111 404.62 628.911 405.98L628.921 405.99ZM622.511 399.89C622.381 401.88 621.201 403.64 619.001 405.13C615.161 407.72 609.081 408.87 604.621 408.99C614.811 406.69 620.261 400.71 622.471 397.63C622.551 398.38 622.571 399.14 622.521 399.89H622.511ZM618.671 389.45C619.451 390.31 620.131 391.21 620.691 392.18C621.421 393.44 621.931 394.79 622.231 396.18C620.991 398.12 617.571 402.61 611.061 405.71C610.871 405.79 610.651 405.89 610.411 406.01C609.691 406.33 608.921 406.64 608.121 406.92C606.201 407.49 604.121 407.68 602.311 407.72H602.301C613.311 401.16 617.961 394.48 618.591 390.26C618.631 389.98 618.651 389.72 618.651 389.46L618.671 389.45ZM613.021 385.14C614.631 386.01 616.081 386.99 617.311 388.1C617.631 388.44 617.741 389.19 617.611 390.11C617.001 394.14 611.981 401.2 599.901 407.95C600.661 406.69 602.001 405.16 603.531 403.41C607.561 398.83 613.011 392.61 613.011 385.15L613.021 385.14ZM606.921 462.58C607.591 465.12 608.451 467.55 609.481 469.87C609.451 471.07 608.911 484.54 601.641 499.11C605.641 486.72 606.581 476.08 606.751 472.63C606.751 472.59 606.751 472.56 606.751 472.52C606.951 469.48 607.021 466.19 606.921 462.58ZM591.191 508.86C590.551 509.44 589.941 510.01 589.371 510.59C588.721 506.35 591.621 502.02 594.941 498.61C595.681 498.83 596.441 498.96 597.211 498.99C597.061 499.37 596.851 499.89 596.621 500.53C595.761 501.1 591.681 504.04 591.181 508.86H591.191ZM596.041 502.25C595.731 503.22 595.421 504.33 595.131 505.54C594.171 506.29 593.271 507.03 592.411 507.77C593.061 505.21 594.821 503.31 596.041 502.25ZM590.561 494.64C586.531 490.24 584.091 481.01 587.831 470.76C588.221 471.88 588.651 472.98 589.161 474.03C589.391 474.5 589.621 474.95 589.861 475.39C588.391 484.26 589.421 490.92 592.751 494.15C594.251 495.61 596.161 496.34 598.441 496.34C599.151 496.34 599.901 496.26 600.691 496.11C600.511 496.62 600.331 497.12 600.161 497.62C596.671 498.63 593.261 497.58 590.561 494.62V494.64ZM552.511 407.39C552.331 407.48 552.161 407.57 551.981 407.66C555.731 402.7 564.021 401.34 567.691 400.99C568.171 400.97 568.611 400.93 569.011 400.89H569.061C569.721 400.81 570.281 400.69 570.711 400.5C570.871 400.9 571.041 401.29 571.221 401.67C569.071 402.89 566.041 403.56 562.841 404.26C561.261 404.61 559.651 404.96 558.121 405.39C558.121 405.39 555.261 406.06 552.521 407.4L552.511 407.39ZM569.211 392.45C569.211 393.09 569.251 393.71 569.301 394.33C564.241 391.58 561.711 388.58 560.661 387.05C561.951 387.4 563.201 387.71 564.411 387.99C564.791 388.58 566.121 390.42 569.201 392.45H569.211ZM565.951 388.34C567.141 388.62 568.271 388.88 569.341 389.17C569.281 389.87 569.231 390.56 569.211 391.23C567.601 390.09 566.561 389.06 565.941 388.34H565.951ZM569.441 395.53C569.511 396.08 569.601 396.62 569.711 397.14C567.981 396.64 565.921 395.44 563.761 394.18C563.661 394.12 563.561 394.07 563.471 394.01L563.441 393.99C562.781 393.6 562.101 393.22 561.431 392.84C562.331 392.8 563.311 392.6 564.131 392.1C565.531 393.22 567.271 394.4 569.451 395.53H569.441ZM562.941 394.86C563.051 394.92 563.151 394.98 563.261 395.04C563.511 395.19 563.761 395.33 564.011 395.48C563.471 395.43 562.851 395.36 562.181 395.28C555.731 394.52 543.781 393.12 535.761 402.11C534.901 401.67 533.931 401.28 532.821 400.93C541.111 391.22 556.871 391.42 562.941 394.87V394.86ZM562.071 396.27C563.791 396.47 565.051 396.61 565.891 396.54C567.351 397.33 568.731 397.96 569.971 398.24C570.061 398.58 570.161 398.92 570.271 399.25C569.131 399.11 567.931 398.89 566.651 398.66C564.921 398.34 563.071 398.01 561.151 397.84C561.151 397.84 561.141 397.84 561.131 397.84C555.361 396.74 544.901 396.2 538.871 404.45C538.221 403.74 537.491 403.14 536.651 402.62C544.331 394.2 555.831 395.55 562.061 396.28L562.071 396.27ZM575.531 405.64C575.311 405.45 575.091 405.27 574.881 405.07C571.371 401.62 569.781 396.08 570.351 389.45C570.871 389.6 571.371 389.77 571.861 389.94C571.581 396.62 572.931 402.15 575.531 405.64ZM554.781 398.21C551.811 398.91 548.831 400.53 546.021 403.72L544.161 402.6C543.941 402.47 543.651 402.53 543.501 402.74L540.601 406.81C540.271 406.23 539.921 405.7 539.551 405.22C543.491 399.66 549.571 398.21 554.791 398.21H554.781ZM544.041 403.7L547.041 405.5L547.171 407.12L547.301 408.77L544.701 412.71C544.111 412.99 543.681 413.16 543.451 413.25C543.171 412.61 542.901 411.97 542.631 411.33C542.121 409.98 541.621 408.82 541.111 407.79L544.031 403.69L544.041 403.7ZM546.891 404.25C553.201 397.21 560.241 398.49 566.471 399.64C567.051 399.75 567.601 399.85 568.151 399.94C567.971 399.95 567.781 399.97 567.571 399.99C567.011 400.02 566.401 400.04 565.761 400.06C560.651 400.21 553.071 400.45 548.051 405.84L548.001 405.16C547.991 405 547.901 404.85 547.761 404.77L546.881 404.24L546.891 404.25ZM548.231 409.19C548.291 409.1 548.321 408.99 548.311 408.88L548.181 407.25C551.361 403.33 555.951 401.95 560.191 401.43C556.231 402.65 552.161 404.8 550.231 408.62C549.151 409.22 548.201 409.79 547.601 410.16L548.241 409.19H548.231ZM571.701 402.55C572.391 403.76 573.221 404.85 574.181 405.8C574.811 406.42 575.491 406.97 576.211 407.44C576.251 407.51 576.301 407.57 576.341 407.64C574.641 407.29 572.821 406.46 571.051 405.65C569.821 405.08 568.621 404.53 567.521 404.18C569.081 403.75 570.501 403.23 571.701 402.56V402.55ZM572.851 390.33C574.061 390.83 575.151 391.43 576.131 392.19C575.681 399.88 577.951 405.5 580.681 408.27C580.531 408.23 580.381 408.2 580.231 408.15C575.331 406.23 572.541 399.46 572.841 390.33H572.851ZM577.101 393.03C578.451 394.36 579.541 396.11 580.321 398.53C581.821 403.16 583.141 406.29 584.801 408.6C584.071 408.65 583.351 408.66 582.651 408.6C579.591 406.7 576.831 400.87 577.091 393.03H577.101ZM580.001 409.13C580.001 409.13 580.021 409.13 580.031 409.14C580.071 409.15 580.101 409.15 580.141 409.16C581.331 409.47 582.571 409.64 583.861 409.64C584.421 409.64 584.981 409.6 585.551 409.54C587.031 411.29 588.791 412.52 591.131 413.61C590.791 414.09 590.481 414.58 590.201 415.07C587.821 414.79 582.181 413.58 578.171 408.46C578.761 408.72 579.371 408.94 580.001 409.12V409.13ZM595.291 412.09C595.291 412.09 595.311 412.09 595.321 412.09C592.931 415.16 591.851 419.33 592.421 423.89C593.221 430.27 597.621 437.56 605.601 439.68C605.561 440.25 605.511 440.85 605.451 441.46C601.951 440.79 598.641 439.19 595.941 436.86C587.451 429.47 587.111 418.38 595.281 412.09H595.291ZM599.281 483.64C584.971 474.49 593.881 450.23 598.621 439.75C599.591 440.33 600.591 440.83 601.631 441.24C596.951 450.94 593.751 464.78 597.061 474.3C598.471 478.37 600.951 481.3 604.411 483.05C604.271 483.75 604.131 484.43 603.981 485.09C602.361 484.88 600.781 484.39 599.291 483.63L599.281 483.64ZM603.741 486.07C603.301 487.92 602.811 489.67 602.301 491.34C601.381 490.48 599.601 488.36 599.521 484.86C600.871 485.46 602.281 485.87 603.741 486.07ZM596.421 492.72C597.421 493.99 598.591 494.86 599.761 495.28C597.171 495.59 595.051 494.98 593.481 493.46C590.531 490.61 589.561 484.71 590.691 476.78C591.801 478.56 593.061 480.11 594.441 481.42C592.901 485.95 594.521 490.32 596.421 492.73V492.72ZM597.991 473.97C594.771 464.69 597.941 451.09 602.561 441.58C602.941 441.71 603.331 441.83 603.721 441.93C597.711 460.87 600.801 472.33 605.391 476.53C605.171 478.46 604.901 480.29 604.581 482.02C601.501 480.37 599.271 477.68 597.981 473.97H597.991ZM597.761 439.22C593.741 448.06 586.731 466.79 593.041 478.39C591.941 476.98 590.941 475.39 590.081 473.61C585.971 465.09 584.461 450.07 593.551 435.59C594.791 436.96 596.211 438.19 597.751 439.21L597.761 439.22ZM587.351 469.28C583.171 479.54 584.971 488.79 588.811 494.05C579.311 489.07 581.181 476.2 582.001 473.87C583.101 471.04 584.531 468.03 586.331 464.86C586.581 466.36 586.921 467.84 587.351 469.27V469.28ZM581.111 473.44C581.111 473.44 581.061 473.5 581.051 473.54C581.001 473.69 580.941 473.86 580.891 474.04C577.231 483.8 576.971 492.35 580.631 496.6C582.091 498.29 584.071 499.14 586.421 499.14C586.461 499.14 586.501 499.14 586.541 499.14C582.581 500.56 578.761 499.88 576.301 497.14C571.771 492.1 571.661 479.66 585.901 461.03C585.951 461.77 586.011 462.5 586.101 463.23C584.061 466.69 582.391 470.13 581.101 473.45L581.111 473.44ZM581.391 495.95C578.931 493.1 578.101 487.19 580.231 479.19C580.181 485.02 582.201 492.86 590.301 495.8C590.681 496.17 591.061 496.52 591.461 496.83C591.341 496.92 591.221 497.02 591.101 497.11C586.881 498.82 583.521 498.42 581.391 495.95ZM597.201 492.11C595.521 489.97 594.071 486.15 595.251 482.15C596.281 483.03 597.371 483.78 598.511 484.38C598.401 489.09 601.061 491.66 601.971 492.4C601.741 493.13 601.501 493.85 601.261 494.56C599.931 494.58 598.441 493.69 597.201 492.12V492.11ZM605.531 475.27C601.471 470.88 599.041 459.94 604.701 442.17C604.931 442.22 605.151 442.25 605.381 442.29C605.381 442.37 605.371 442.44 605.361 442.51C604.971 446.63 605.011 450.7 605.451 454.64C605.451 454.64 605.451 454.64 605.451 454.65C606.181 462.79 606.101 469.51 605.531 475.27ZM605.671 438.68C603.551 438.09 601.691 437.12 600.121 435.88C601.071 432.52 601.741 428.85 601.491 425.31C602.851 427.87 603.351 430.84 603.301 433.74C603.811 430.45 603.341 426.89 601.371 424.12C601.121 422.29 600.611 420.51 599.731 418.85C601.651 424.16 600.731 429.96 599.471 435.33C595.941 432.24 593.921 427.83 593.411 423.79C592.731 418.38 594.511 413.57 598.111 410.71C596.191 414.44 597.351 419.13 597.641 423.18C597.721 424.78 597.601 426.41 596.961 427.93C597.861 426.54 598.181 424.83 598.221 423.18C598.221 421.49 598.031 419.73 597.931 417.99C597.861 415.51 598.761 414.73 598.761 414.73C599.061 416.21 602.861 420.57 604.511 424.71C604.811 425.59 605.051 426.48 605.241 427.39C605.421 428.81 605.591 430.04 605.751 431.06C605.911 433.29 605.871 435.76 605.671 438.7V438.68ZM596.651 408.65C595.651 397.25 591.001 392.01 585.991 388.3C588.031 388.81 589.721 388.88 590.361 388.88C592.761 391.26 594.771 393.99 596.221 397.03C596.251 397.09 596.281 397.15 596.311 397.22C596.561 397.74 596.791 398.27 597.001 398.81C598.011 401.55 599.081 406.5 596.651 408.67V408.64V408.65ZM612.011 384.65C612.271 391.96 606.801 398.2 602.781 402.77C601.511 404.21 600.401 405.5 599.581 406.65C599.531 405.79 599.431 404.94 599.301 404.08C604.591 395.67 606.891 388.95 605.951 384.64C605.701 383.52 605.041 382.66 604.101 381.98C607.041 382.62 609.691 383.52 612.011 384.64V384.65ZM598.881 381.14C598.881 381.14 598.911 381.15 598.921 381.15C598.981 381.15 599.031 381.16 599.081 381.17C602.171 381.72 604.511 382.78 604.971 384.86C605.591 387.71 604.651 391.76 602.251 396.76C603.101 392.81 602.591 389.21 600.681 386.25C599.021 383.66 596.361 381.76 593.031 380.64C595.071 380.7 597.091 380.84 598.871 381.14H598.881ZM599.841 386.79C602.241 390.53 602.241 395.41 599.881 400.75C600.811 391.29 595.411 384.87 589.601 381.88C588.471 381.3 587.311 380.84 586.171 380.48C592.361 380.63 597.341 382.89 599.841 386.79ZM582.411 380.6C582.411 380.6 582.481 380.62 582.511 380.62C584.641 381.01 586.951 381.65 589.141 382.78C594.791 385.68 600.001 392.03 598.771 401.41C598.771 401.37 598.751 401.33 598.741 401.29C597.461 396.22 594.691 391.79 591.051 388.18C591.001 388.07 590.911 387.98 590.801 387.93C587.291 384.52 582.991 381.86 578.421 380.13C579.611 380.22 580.951 380.35 582.391 380.61L582.411 380.6ZM589.231 387.82C587.471 387.67 584.301 387.15 581.591 385.33C579.051 383.68 576.661 382.06 574.841 379.86C580.211 381.47 585.201 384.19 589.231 387.82ZM573.101 379.19C575.081 382.21 577.941 384.16 581.001 386.14L581.031 386.16C581.191 386.27 581.351 386.37 581.521 386.48C587.171 390.14 592.971 393.91 595.051 404.37C595.051 404.39 595.061 404.43 595.071 404.45C595.111 404.66 595.151 404.88 595.191 405.1C595.421 406.53 595.601 408.7 595.401 409.66C591.801 394.46 583.981 388.67 575.901 385.75C573.921 384.44 569.431 380.31 569.121 375.24C570.031 376.91 571.391 378.32 573.121 379.18L573.101 379.19ZM564.051 371.61C564.051 371.61 564.021 371.7 564.001 371.74C564.101 370.2 564.451 368.86 565.021 367.87C565.801 366.5 566.981 365.78 568.431 365.74C568.161 366.49 567.971 367.27 567.881 368.01C566.341 368.51 564.891 369.86 564.061 371.61H564.051ZM564.351 376.24C564.121 374.45 564.491 373.03 564.961 372.04C565.591 370.71 566.631 369.65 567.751 369.13C567.671 370.46 567.831 371.81 568.221 373.09C568.221 373.11 568.201 373.13 568.191 373.15C567.401 378.03 570.441 382.32 573.201 384.88C571.271 384.31 569.341 383.87 567.481 383.46C565.871 381.16 564.851 378.64 564.351 376.23V376.24ZM566.231 384.22C575.351 386.21 586.361 388.63 592.231 403C592.351 403.32 592.491 403.68 592.671 404.11C592.681 404.15 592.701 404.18 592.711 404.22C592.721 404.25 592.731 404.29 592.751 404.32C592.811 404.49 592.871 404.67 592.931 404.84C593.791 407.76 592.631 411.13 592.261 409.2C591.781 406.74 589.131 401.19 587.271 399.16C590.441 404.22 591.581 410.41 591.891 412.26C589.201 409.34 588.251 406.41 587.251 403.33C586.281 400.31 585.271 397.18 582.621 393.7C577.991 387.61 572.741 386.42 566.661 385.05C565.081 384.69 563.451 384.33 561.771 383.85C559.061 383.1 556.871 382.01 555.191 380.58C558.141 382.44 562.041 383.3 566.221 384.21L566.231 384.22ZM549.931 371.51C550.041 372.57 550.241 373.51 550.501 374.38C550.501 374.38 550.501 374.39 550.501 374.4C551.491 379.49 555.291 383.1 561.511 384.82C563.221 385.3 564.861 385.67 566.451 386.03C572.341 387.36 577.431 388.51 581.831 394.31C584.371 397.65 585.351 400.7 586.301 403.64C587.251 406.6 588.161 409.42 590.541 412.26C586.011 409.86 583.931 406.51 581.261 398.25C579.571 393.03 576.521 390.67 572.591 389.19C572.571 389.19 572.561 389.18 572.541 389.17C570.501 388.41 568.221 387.87 565.771 387.3C563.841 386.85 561.851 386.39 559.741 385.77C553.791 384.02 551.321 380.76 550.301 378.34C549.391 376.18 549.271 373.78 549.931 371.51ZM552.291 382.82C554.081 384.49 556.431 385.81 559.241 386.67C559.561 387.27 560.701 389.19 563.321 391.47C561.901 392.14 559.901 391.85 559.351 391.76C555.881 388.14 553.691 385.15 552.291 382.83V382.82ZM538.051 386.22C534.261 385.9 530.641 386.97 527.671 389.25C529.031 385.46 531.631 382.91 535.101 382C538.781 381.04 542.871 382.11 545.291 384.68C545.451 384.85 544.871 383.34 544.191 382.58C547.371 383.28 548.871 386.04 548.941 386.19C549.251 386.82 549.431 386.52 549.481 386.04C550.721 387.07 552.081 388.66 552.921 389.7C550.771 389.38 548.361 389.31 545.861 389.56C544.411 387.83 541.341 386.5 538.051 386.22ZM545.571 390.57C545.641 390.58 545.721 390.57 545.791 390.55C549.691 390.14 553.391 390.52 556.141 391.49C556.701 391.69 557.251 391.92 557.801 392.16C550.091 390.77 538.641 392.23 531.771 400.64C531.311 400.51 530.821 400.38 530.311 400.26C529.621 400.1 528.931 399.96 528.241 399.83C532.391 394.09 539.221 391.27 545.571 390.56V390.57ZM449.711 408.96C450.601 410.05 452.451 412.09 453.091 413.3C453.731 414.51 451.371 411.96 449.771 410.68C448.171 409.4 447.091 408.7 447.151 408C446.381 407.68 446.381 406.72 446.381 406.72C447.591 406.27 448.811 407.87 449.701 408.95L449.711 408.96ZM482.391 449.68C482.581 451.34 483.481 452.68 482.901 453.32C482.331 453.96 482.771 454.53 481.621 454.98C480.471 455.43 478.881 454.79 477.091 454.02C475.301 453.25 471.471 451.72 469.491 450.83C467.511 449.94 465.531 448.4 464.191 446.81C462.851 445.21 462.381 444.7 463.101 444.45C464.381 444 468.781 447.96 470.381 448.66C471.981 449.36 475.551 450.32 477.211 451.47C478.871 452.62 480.131 452.41 480.191 451.13C480.251 449.85 480.331 449.81 480.461 448.34C480.591 446.87 479.821 445.6 480.521 444.45C481.221 443.3 482.881 443.24 482.821 442.6C482.761 441.96 481.801 441.51 481.101 440.75C480.401 439.98 480.841 438.84 480.461 438.07C480.081 437.3 478.161 434.81 477.401 434.05C476.631 433.28 476.761 432.65 475.871 431.69C474.981 430.73 472.421 428.12 470.001 426.97C467.571 425.82 463.041 422.76 461.381 421.29C459.721 419.82 458.441 419.95 457.611 419.31C456.781 418.67 456.211 418.1 458.381 418.8C460.551 419.5 460.931 419.44 462.341 420.52C463.741 421.61 466.111 422.82 468.531 424.16C470.961 425.5 473.191 426.07 474.591 427.86C475.991 429.65 476.631 430.54 478.161 432.26C479.691 433.98 482.501 437.62 483.141 439.41C483.781 441.2 485.571 443.5 485.951 444.2C486.331 444.9 485.311 445.54 484.231 445.54C483.151 445.54 483.341 445.73 482.441 446.5C481.541 447.27 482.181 448.03 482.381 449.69L482.391 449.68ZM469.561 463.02C468.921 463.28 468.541 461.36 467.771 459.83C467.001 458.3 465.091 456.89 463.811 455.43C462.531 453.97 461.701 454.6 461.131 453.9C460.561 453.2 460.43 451.41 459.98 450.96C459.53 450.51 458.131 448.92 458.701 448.73C459.911 448.33 460.931 449.88 461.381 451.03C461.831 452.18 465.021 454.22 466.491 455.75C467.961 457.28 468.341 458.24 468.921 459.58C469.491 460.92 470.201 462.77 469.561 463.03V463.02ZM457.711 472.33C459.201 471.82 460.641 471.11 461.921 470.19C464.361 468.44 467.631 466.56 469.501 466.54C471.911 466.48 474.531 468.02 476.611 470.59C478.261 472.63 481.171 472.88 482.751 471.83C483.541 471.3 485.761 470.37 487.551 469.62C488.531 469.2 489.431 468.83 489.991 468.56C491.471 467.86 495.501 464.66 496.201 460.52C496.361 461.17 496.581 461.81 496.781 462.42C497.521 464.43 498.471 466.31 499.441 468.17C501.311 471.86 502.881 475.73 504.391 479.61C505.891 483.5 507.291 487.42 508.511 491.39C507.851 497.76 507.471 504.17 508.181 510.57C508.661 515.12 509.551 519.6 510.481 524.05C510.821 525.99 511.321 527.96 511.751 529.94C510.111 530.49 504.931 532.64 501.451 538.58C501.321 538.64 501.201 538.72 501.071 538.79C498.281 536.49 494.611 535.38 492.081 534.75C490.541 534.37 488.621 533.42 486.201 532.23C484.991 531.64 483.661 530.98 482.151 530.28C478.241 528.47 477.481 528.5 474.651 528.62C474.051 528.65 473.351 528.67 472.501 528.69C468.931 528.74 467.241 528.09 464.401 527C463.551 526.67 462.601 526.31 461.491 525.92C456.841 524.29 452.911 521.41 450.361 519.38C448.411 517.83 447.461 516.53 446.711 515.48C446.541 515.24 446.381 515.02 446.221 514.81C444.081 512.03 442.351 510.61 440.921 510.47C439.431 510.33 438.371 509.66 437.491 508.3C436.981 507.51 436.161 506.79 435.291 506.03C434.491 505.33 433.661 504.6 433.141 503.86C432.511 502.93 432.711 501.57 432.911 500.24C433.001 499.63 433.091 499.05 433.091 498.52C433.091 496.98 431.141 494.46 428.971 491.79L428.441 491.13C427.771 490.29 427.941 489.31 428.281 487.78C428.451 487.01 428.631 486.21 428.661 485.35C428.711 483.87 427.601 482.45 426.531 481.07C425.701 480 424.841 478.89 424.841 478.1C424.841 476.56 424.351 475.87 423.921 475.26C423.691 474.94 423.501 474.66 423.371 474.25C423.271 473.92 423.751 473.61 424.891 472.96C425.601 472.56 426.481 472.06 427.331 471.37C428.611 470.33 429.411 468.7 430.051 467.39C430.341 466.8 430.731 466 430.951 465.81C431.571 465.83 432.611 465.61 433.831 465.36C435.011 465.11 436.341 464.84 436.921 464.87C437.441 464.91 438.171 465.83 438.751 466.58C439.181 467.14 439.631 467.71 440.121 468.12C440.501 468.44 440.951 468.69 441.391 468.92C442.061 469.28 442.741 469.61 443.431 469.92C445.051 470.66 446.711 471.33 448.401 471.92C450.401 472.62 452.501 473.27 454.641 473.03C455.691 472.92 456.73 472.67 457.73 472.33H457.711ZM509.451 452.3C508.301 452.14 507.241 452.23 506.171 452.36C503.171 452.78 500.221 453.79 497.801 455.68C499.591 450.34 503.041 445.98 508.581 444.44C511.191 447.77 512.771 451.84 512.591 456.25C512.571 458.46 512.291 460.72 512.041 462.97C511.551 467.27 510.031 478.81 509.451 483.24C509.241 484.97 509.031 486.7 508.831 488.43C507.801 485.3 506.671 482.22 505.471 479.16C503.931 475.26 502.351 471.39 500.431 467.63C499.061 464.91 497.481 462.15 497.071 459.14C497.041 458.47 497.071 457.84 497.501 457.35C500.541 454.45 505.131 453.02 509.281 453.31C509.571 453.36 509.851 453.17 509.891 452.87C509.931 452.59 509.731 452.33 509.451 452.29V452.3ZM427.411 491.94L427.951 492.6C428.231 492.95 428.591 493.39 428.971 493.86C427.761 495.01 425.701 494.12 423.731 492.89C421.501 491.49 418.431 490.37 416.741 490.05C415.051 489.73 413.131 489.44 411.921 489.38C410.711 489.32 409.941 488.17 411.441 488.04C412.941 487.91 415.531 487.85 417.821 488.39C420.121 488.93 421.941 489 423.091 488.71C423.941 488.5 425.811 488.76 426.731 488.9C426.591 489.95 426.651 490.98 427.411 491.93V491.94ZM438.531 514.15C435.271 514.09 434.131 513.06 432.211 511.09C430.301 509.11 428.191 509.75 426.661 509.11C425.131 508.47 425.131 508.02 423.721 508.02C422.311 508.02 421.101 506.49 422.831 506.11C424.551 505.73 428.511 507 429.921 506.81C431.121 506.65 433.601 507 435.381 507.85C435.791 508.24 436.151 508.62 436.391 508.99C437.491 510.69 438.891 511.57 440.791 511.75C441.501 511.82 442.841 512.54 445.191 515.58C445.321 515.75 445.451 515.93 445.591 516.12C442.501 515.61 441.661 514.2 438.541 514.14L438.531 514.15ZM451.551 524.17C452.931 524.75 455.87 525.32 457.54 525.62C458.66 526.18 459.831 526.69 461.061 527.12C462.161 527.51 463.091 527.87 463.931 528.19L464.01 528.22C463.3 529.33 461.601 528.37 459.201 528.31C456.581 528.25 454.731 528.37 451.221 527.54C447.711 526.71 446.431 525.88 444.131 525.75C441.831 525.62 441.321 524.66 439.411 523.13C437.501 521.6 434.811 522.11 433.921 520.39C433.031 518.67 438.201 519.82 440.051 520.84C441.901 521.86 443.621 522.88 445.221 522.88C446.821 522.88 449.561 523.33 451.541 524.16L451.551 524.17ZM473.121 562.72C472.421 565.27 472.351 567.7 471.521 568.85C470.691 570 469.991 569.36 469.541 572.3C469.091 575.24 467.43 572.68 468.01 571.21C468.59 569.74 469.481 567.32 469.611 565.78C469.741 564.25 471.011 562.52 471.841 560.23C472.671 557.93 471.581 554.49 473.501 552.44C475.411 550.4 478.671 547.91 479.881 545.61C481.091 543.31 482.821 542.29 483.971 541.27C485.121 540.25 486.331 538.53 484.861 537.82C483.391 537.12 484.991 536.61 481.481 536.35C477.971 536.09 477.081 535.78 475.801 534.69C474.591 533.66 470.151 532.28 469.441 529.79C470.341 529.91 471.331 529.98 472.511 529.96C472.631 529.96 472.731 529.96 472.841 529.96C476.991 532.51 478.701 532.44 479.431 533.23C480.201 534.06 482.881 534 485.301 535.14C487.731 536.29 490.791 537.57 490.661 538.59C490.531 539.61 487.471 542.1 487.091 543.38C486.711 544.66 485.241 546.32 483.771 547.47C482.301 548.62 481.341 548.81 480.641 549.13C479.941 549.45 478.661 550.85 478.601 551.87C478.541 552.89 478.031 555.7 476.941 556.85C475.851 558 473.811 560.17 473.111 562.72H473.121ZM428.951 430.08C431.251 431.87 436.801 434.23 439.101 435.95C441.401 437.67 446.951 443.55 447.591 444.89C448.231 446.23 448.741 447.44 449.251 448.08C449.761 448.72 449.191 449.48 450.211 451.27C451.231 453.06 450.981 453.82 449.831 454.72C448.681 455.62 446.961 456.89 446.131 457.21C445.301 457.53 443.831 457.53 442.111 456.89C440.391 456.25 437.641 456.06 436.681 455.74C435.721 455.42 434.251 455.74 433.421 455.87C432.591 456 430.991 456.7 429.911 456.83C428.821 456.96 426.531 457.4 425.631 457.09C424.731 456.78 425.371 456.07 426.651 456.13C427.931 456.19 428.761 455.36 430.161 454.98C431.561 454.6 433.421 453.45 435.391 453.26C437.371 453.07 439.671 453.71 440.561 453.96C441.451 454.21 444.201 455.05 445.601 454.66C447.001 454.28 448.091 452.87 448.091 452.11C448.091 451.35 447.201 450.2 445.661 449.11C444.131 448.02 442.021 444.32 441.451 442.41C440.881 440.5 439.851 438.58 438.831 438.01C437.811 437.44 435.771 437.12 434.811 435.9C431.621 435.26 430.721 433.86 429.001 432.2C427.281 430.54 425.621 429.65 424.091 428.31C422.561 426.97 420.581 424.35 418.791 422.95C417.001 421.55 415.091 418.1 415.021 417.72C414.821 416.52 419.231 421.36 421.531 423.53C423.831 425.7 426.641 428.32 428.931 430.1L428.951 430.08ZM415.101 408.51C415.681 408.57 417.461 408.51 418.231 408.7C419.001 408.89 421.231 408.06 422.321 408.38C423.411 408.7 426.091 409.15 424.681 409.66C423.281 410.17 418.741 410.04 416.771 410.04C414.801 410.04 413.581 409.98 412.301 409.27C412.301 409.27 413.831 408.38 415.111 408.5L415.101 408.51ZM405.701 409.2C406.131 408.75 406.581 408.27 406.951 407.88C407.931 408.61 407.621 409.74 406.931 410.77C406.231 411.82 404.531 411.58 404.171 410.8C404.651 410.3 405.181 409.74 405.701 409.19V409.2ZM394.511 472.82C397.191 472.18 397.671 472.28 399.301 471.13C400.931 469.98 401.631 468.58 404.251 468.99C406.871 469.4 408.971 468.83 412.161 468.54C415.351 468.25 416.471 469.75 416.531 471.38C416.591 473.01 417.261 473.65 417.931 475.88C418.601 478.11 420.321 479.01 421.631 480.73C422.781 482.24 424.441 482.8 426.241 482.87C426.871 483.73 427.361 484.58 427.331 485.3C427.311 485.94 427.181 486.58 427.041 487.21C426.441 486.36 425.451 485.09 424.691 484.73C423.541 484.19 421.241 484.79 420.131 484.12C419.011 483.45 418.281 481.38 417.101 479.97C415.921 478.57 415.541 476.81 413.941 476.14C412.341 475.47 411.901 474.99 412.471 474.1C413.041 473.21 413.811 472.25 412.501 472.06C411.191 471.87 409.341 472.76 408.351 473.46C407.361 474.16 403.661 472.15 402.451 473.43C401.241 474.71 399.771 474 398.561 474.48C397.351 474.96 395.751 476.01 394.761 475.72C393.771 475.43 389.211 476.9 389.051 474.67C388.891 472.44 391.831 473.46 394.511 472.82ZM374.771 424.31C374.871 424.2 375.001 424.07 375.141 423.93C378.221 424.51 377.971 423.91 377.351 423.66C376.971 423.51 376.711 422.99 376.561 422.59C376.901 422.28 377.251 421.97 377.601 421.66C378.581 423.17 379.621 423.7 382.031 423.74C384.631 423.78 385.601 424.72 387.311 424.76C389.011 424.8 389.051 426.46 386.931 426.5C384.801 426.54 382.041 425.35 380.421 425.73C378.871 426.1 374.531 426.85 373.221 425.08C373.871 424.93 374.401 424.69 374.771 424.29V424.31ZM361.811 429.27C361.811 429.27 361.901 429.18 361.951 429.13C363.841 429.65 364.611 431.37 366.931 431.69C369.361 432.03 369.821 432.07 369.821 432.67C369.821 433.27 367.951 433.18 367.271 433.65C366.591 434.12 365.181 433.44 364.041 432.84C362.971 432.29 360.311 432.45 359.421 431.14C360.271 430.6 361.051 429.99 361.811 429.26V429.27ZM334.411 445.47C335.051 445.15 335.651 444.76 336.221 444.33C337.891 443.95 339.411 442.46 340.211 442.46C341.151 442.46 341.531 443.23 342.471 443.06C343.411 442.89 344.981 443.66 346.641 443.15C348.301 442.64 349.021 442.72 351.281 443.11C353.541 443.49 353.921 443.24 355.881 442.73C357.841 442.22 358.351 443.16 357.161 443.79C355.971 444.43 354.951 444.9 354.181 445.53C353.411 446.17 350.521 445.02 349.201 445.44C347.881 445.86 344.991 445.95 343.461 445.82C341.931 445.69 340.951 445.61 340.481 446.46C340.011 447.31 338.141 446.55 337.201 446.8C336.311 447.04 334.241 447.85 333.051 446.16C333.481 445.93 333.941 445.71 334.431 445.46L334.411 445.47ZM540.821 543.54C544.661 547.44 548.291 551.12 548.481 557C548.661 562.63 547.031 566.3 545.941 568.1C545.391 563.03 542.451 560.26 539.821 557.8L539.301 557.31C536.081 554.27 531.631 550.41 528.381 548.26C528.721 547.89 529.081 547.54 529.561 547.27C530.711 546.51 532.041 545.72 533.011 544.49C534.531 542.3 534.961 539.84 535.431 537.35C536.991 539.64 538.931 541.62 540.831 543.54H540.821ZM536.201 480.52C535.951 481.81 536.111 483.56 536.151 484.89C536.291 487.74 536.431 490.57 536.511 493.42C536.841 507.59 536.591 521.89 534.501 535.93C533.981 538.54 533.581 541.57 532.081 543.74C531.271 544.77 530.111 545.48 528.891 546.28C528.221 546.73 527.521 547.3 527.001 548.02C526.991 548.03 526.971 548.04 526.971 548.06C526.971 548.06 526.971 548.07 526.971 548.08C526.931 548.14 526.891 548.18 526.851 548.24C525.711 549.61 523.891 550.35 522.121 550.49C517.811 550.8 514.621 547.61 511.421 545.01C509.221 543.2 507.011 541.32 504.341 540C504.041 539.85 503.681 539.97 503.541 540.27C503.391 540.57 503.521 540.93 503.811 541.07C510.981 544.43 517.621 555.81 526.491 550.16C526.931 549.88 527.271 549.52 527.591 549.16C530.791 551.25 535.261 555.13 538.481 558.17L539.001 558.66C541.871 561.35 544.841 564.14 544.841 569.82C544.841 576.3 543.391 588.64 533.691 598.5C531.571 600.66 527.781 604.36 522.981 609.05C505.481 626.15 472.911 657.97 460.191 674.82C449.831 688.55 439.711 704.42 430.771 718.43C425.941 726 421.381 733.15 417.531 738.76C416.321 740.52 415.191 742.17 414.131 743.7C405.711 755.92 401.871 761.49 401.011 766.31C400.511 769.12 401.801 772.77 403.161 776.64C404.481 780.4 405.851 784.28 405.771 787.76C405.601 795.13 405.951 800.02 406.921 803.63C407.781 806.85 408.911 809.43 409.791 810.18C410.701 810.96 411.601 811.34 412.471 811.71C413.481 812.13 414.341 812.5 415.161 813.44C418.221 816.98 418.821 818.31 418.781 818.81C418.731 819.49 418.321 819.59 416.731 819.67L416.211 819.7C415.461 819.74 414.681 819.98 413.841 820.24C412.791 820.56 411.711 820.89 410.701 820.82C409.771 820.76 409.071 820.37 408.331 819.96C407.661 819.59 406.961 819.2 406.071 819.04C403.961 818.67 401.981 818.93 399.891 819.2C398.341 819.4 396.741 819.61 394.891 819.61C391.071 819.61 389.191 816.98 389.151 811.57C389.111 806.22 388.971 804.47 388.021 801.44C387.631 800.2 387.351 798.11 387.031 795.69C386.611 792.53 386.091 788.59 385.091 785.03C383.521 779.45 380.531 775.48 377.371 771.29C376.951 770.73 376.531 770.17 376.101 769.6C372.491 764.75 371.561 757.47 374.101 754.02C376.231 751.13 380.071 747.32 385.841 742.38C386.271 742.01 386.711 741.64 387.151 741.28C390.391 738.57 393.741 735.76 398.091 728.84C402.101 722.46 410.991 707.18 419.591 692.4L425.341 682.53C427.631 678.6 430.181 674.26 432.841 669.74C442.221 653.79 452.861 635.71 458.171 625.09C460.021 621.38 461.67 617.64 463.26 614.02C467.58 604.19 471.311 595.71 477.381 591.53C482.681 587.88 486.891 586.73 490.601 585.72C492.901 585.1 496.181 583.54 496.491 582.34C493.751 584.78 483.431 585.2 475.761 589.37C474.321 573.55 488.781 546.05 502.151 539.58C502.261 539.53 502.351 539.44 502.411 539.34C505.551 533.86 510.371 531.73 512.011 531.13C512.411 533.16 512.691 535.2 512.581 537.22C512.501 537.56 512.721 537.89 513.061 537.95C514.801 538.13 513.231 531.79 513.061 530.48C513.051 530.41 513.031 530.34 513.021 530.27C513.021 530.25 513.021 530.23 513.021 530.21C513.021 530.2 513.011 530.19 513.011 530.18C511.661 523.62 510.051 517.09 509.351 510.44C508.641 504.12 509.011 497.76 509.661 491.42C509.691 491.33 509.701 491.23 509.691 491.13C509.961 488.55 510.271 485.97 510.571 483.41C511.141 479.01 512.651 467.38 513.131 463.12C513.381 460.86 513.661 458.61 513.681 456.27C513.851 451.62 512.201 447.33 509.451 443.83C509.461 443.74 509.451 443.66 509.431 443.57C509.351 443.33 509.141 443.18 508.911 443.16C505.991 439.73 501.981 437.13 497.611 435.85C496.911 435.65 496.711 436.72 497.351 436.84C501.341 438.02 505.031 440.37 507.791 443.47C504.331 444.64 501.201 446.87 499.311 450.03C498.251 451.7 497.511 453.52 496.841 455.31C496.611 455.86 496.391 456.47 496.161 457.07C495.581 453.28 493.681 449.05 491.671 444.6L491.531 444.29C490.111 441.14 488.191 438.72 486.501 436.59C485.341 435.13 484.351 433.87 483.781 432.7C483.591 432.31 483.401 431.91 483.211 431.49C481.931 428.77 480.331 425.38 476.801 421.32C473.921 418.02 471.131 416.44 468.661 415.05C467.591 414.45 466.591 413.88 465.621 413.21C463.611 411.82 461.291 410 459.421 408.53C458.201 407.57 457.141 406.74 456.441 406.24C455.931 405.87 455.201 405.4 454.411 404.89C452.841 403.88 450.221 402.18 449.931 401.56C449.711 401.09 449.211 400.57 448.541 400.04C453.381 399.9 458.001 397.78 462.691 397.09C466.851 396.68 471.241 396.47 475.371 395.41C479.571 394.98 483.891 396.12 488.111 395.69C491.291 395.63 494.481 395.34 497.541 395.99C499.881 396.83 502.311 397.53 504.731 398.06C510.301 399.38 516.041 400.04 521.751 400.16C527.161 400.6 533.251 401.24 537.621 404.63C539.701 406.51 540.521 409.29 541.661 411.79C542.771 414.4 543.851 417.13 545.731 419.44C547.661 421.56 549.361 423.55 548.791 426.58C548.331 432.21 546.701 437.7 546.041 443.42C545.041 456.25 538.991 467.96 536.271 480.52H536.201ZM547.431 463.05C547.511 463.01 547.561 462.96 547.611 462.9C548.101 462.94 548.581 462.97 549.051 463C547.211 464.34 545.491 466.04 544.291 467.84C544.241 464.58 547.281 463.12 547.431 463.05ZM547.451 477.15C545.111 476.13 543.821 474.74 543.631 472.99C543.271 469.67 546.971 465.45 550.671 463.1C551.391 463.14 552.091 463.17 552.771 463.2C549.831 465.05 547.051 467.66 546.361 471.1C547.781 467.56 551.111 465.26 554.201 463.24C554.861 463.26 555.501 463.27 556.131 463.27C551.011 466.13 547.671 470.31 547.271 474.5C547.181 475.41 547.251 476.29 547.441 477.15H547.451ZM551.521 481.65C550.121 480.51 549.151 479.21 548.651 477.77V477.75C548.301 476.75 548.171 475.69 548.281 474.59C548.691 470.28 552.561 465.93 558.361 463.25C559.901 463.22 561.361 463.16 562.741 463.05C561.041 463.73 559.371 464.5 557.781 465.42C555.131 466.95 552.411 468.83 551.001 471.63C554.991 467.22 560.541 464.76 566.021 462.72C566.301 462.68 566.581 462.65 566.861 462.61C567.521 462.65 568.181 462.87 568.181 462.87C561.581 465.53 558.811 467.93 557.791 469.03C562.901 465.88 566.361 464.13 568.651 463.43L568.711 463.41C559.361 468.58 553.241 475.09 551.541 481.67L551.521 481.65ZM569.991 459.13C569.271 460.89 564.501 461.86 562.491 462.05C558.391 462.36 553.631 462.34 547.711 461.89C546.711 461.79 544.831 459.02 545.951 456.84C546.831 455.13 548.931 455.47 550.211 456.11C551.491 456.76 552.641 456.06 552.811 455.8C552.981 455.54 552.721 455.2 552.081 455.08C551.431 454.95 547.321 454.23 546.841 451.8C546.361 449.37 547.571 448.61 547.491 448.1C547.401 447.59 546.711 446.64 546.841 445.64C546.931 444.94 547.011 444.24 547.091 443.54C547.731 437.93 549.361 432.41 549.831 426.66C550.001 425.19 549.951 423.52 549.181 422.19C548.441 420.85 547.391 419.78 546.521 418.73C545.421 417.37 544.581 415.81 543.841 414.18C544.631 413.88 547.061 412.84 550.391 410.49C551.001 410.06 551.641 409.59 552.301 409.07C554.931 407.01 559.051 406.1 563.031 405.23C563.611 405.1 564.191 404.97 564.751 404.85C566.141 404.5 568.301 405.5 570.591 406.55C572.741 407.54 574.961 408.55 577.061 408.76C581.111 414.19 586.881 415.64 589.651 416.03C586.571 422.66 588.851 430.32 592.141 433.92C592.361 434.22 592.591 434.51 592.831 434.8C592.761 434.91 592.701 435.02 592.631 435.13C591.311 436.89 587.951 442.86 586.911 447.29C584.781 447.48 585.401 452.04 585.601 454.73C583.981 454.9 583.811 454.05 583.261 452.43C582.711 450.81 582.031 450.39 580.581 449.37C579.131 448.35 575.941 444.81 575.281 444.11C574.621 443.41 573.011 445.68 573.221 446.17C573.501 446.82 577.681 449.84 578.571 450.56C579.461 451.28 580.441 452.05 580.831 452.69C581.211 453.33 582.021 454.65 582.281 455.37C582.541 456.09 581.131 456.6 580.541 455.63C579.941 454.65 577.431 451.84 576.031 450.91C574.631 449.97 570.751 447.38 569.941 446.82L567.941 447.12C567.941 447.12 568.321 446.35 569.221 445.97C570.111 445.59 571.561 445.2 571.771 445.08C571.981 444.95 571.601 443.76 569.511 444.23C567.421 444.7 561.811 447.59 559.511 448.53C557.211 449.47 553.421 451.25 552.321 451.81C551.211 452.36 553.891 452.32 554.751 451.77C555.601 451.22 556.881 450.79 557.471 450.79C558.061 450.79 558.191 451.6 558.621 451.39C559.051 451.18 559.731 450.2 561.301 449.99C562.871 449.78 565.171 448.5 565.941 448.67C566.711 448.84 565.391 450.71 565.851 450.84C566.321 450.97 568.701 448.63 569.131 448.97C569.131 448.97 568.921 451.14 569.811 453.31C569.811 453.31 569.211 453.31 568.751 453.35C570.411 455.78 570.751 457.26 569.981 459.14L569.991 459.13ZM576.831 456.23C576.911 456.26 577.011 456.3 577.031 456.38C577.061 456.49 576.931 456.58 576.811 456.61C576.531 456.7 576.191 456.71 575.961 456.55C575.791 456.43 575.701 456.25 575.631 456.07C575.561 455.88 575.521 455.69 575.511 455.49C575.491 455.27 575.511 455.04 575.661 454.87C576.121 454.29 576.751 455.03 577.021 455.37C577.071 455.43 577.121 455.5 577.111 455.58C577.091 455.68 576.971 455.74 576.851 455.76C576.731 455.78 576.611 455.76 576.501 455.81C576.391 455.85 576.311 455.97 576.371 456.06L576.841 456.23H576.831ZM574.391 451.73C574.901 452.13 575.401 452.58 575.901 453.06C574.241 454.92 573.021 452.94 574.391 451.73ZM573.201 450.85C572.161 451.53 571.671 452.64 571.701 453.77C570.961 452.34 570.541 450.85 570.501 449.43C571.251 449.66 572.201 450.16 573.211 450.84L573.201 450.85ZM572.761 460.41C569.191 459.22 572.461 457.05 574.611 459.92C574.001 460.09 573.381 460.26 572.761 460.41ZM574.431 457.33C575.601 457.71 577.141 457.67 579.011 456.92C579.281 457.38 579.531 457.84 579.751 458.32C578.831 458.63 577.921 458.93 577.011 459.21C576.051 458.68 575.191 458.04 574.431 457.34V457.33ZM571.221 499.17C568.931 496.06 569.131 488.47 570.491 482.9C572.071 476.42 575.321 470.13 578.851 466C578.861 465.99 578.871 465.98 578.881 465.97C580.611 463.95 582.401 462.47 584.101 461.73C570.491 480.13 570.871 492.6 575.541 497.81C577.371 499.85 579.851 500.88 582.591 500.88C583.701 500.88 584.851 500.7 586.021 500.37C584.401 501.8 582.031 502.68 579.451 502.76C576.041 502.87 572.951 501.52 571.231 499.19L571.221 499.17ZM581.971 521.94C571.391 519.86 567.461 511.33 572.241 501.58C573.431 502.47 574.851 503.12 576.421 503.46C576.211 504.32 576.061 505.2 576.041 506.09C575.931 509.23 577.351 512.61 580.041 514.28C577.011 511.57 576.481 507.37 577.231 503.6C577.841 503.69 578.451 503.75 579.091 503.75C579.211 503.75 579.341 503.75 579.471 503.75C583.081 503.65 586.321 502.07 588.001 499.63C588.271 499.51 588.541 499.37 588.811 499.23C584.901 503.42 583.041 508.72 584.281 512.87C584.531 513.72 584.911 514.49 585.401 515.19C583.731 517.49 582.581 519.75 581.981 521.95L581.971 521.94ZM585.231 512.58C583.841 507.89 586.801 501.57 592.291 497.43C592.861 497.79 593.441 498.08 594.041 498.32C590.481 501.69 587.491 506.83 588.751 511.22C587.751 512.26 586.841 513.29 586.051 514.31C585.711 513.77 585.421 513.21 585.241 512.57L585.231 512.58ZM594.351 518.44C590.781 518.14 588.081 516.96 586.511 515.01C587.251 514.04 588.111 513.06 589.041 512.07C589.611 513.41 590.611 514.65 592.161 515.74C590.771 514.38 589.951 512.97 589.541 511.54C591.061 509.99 592.821 508.41 594.821 506.81C594.101 510.28 593.681 514.41 594.341 518.44H594.351ZM595.161 516.84C594.381 508.82 597.621 500.57 598.281 499.01C598.761 498.98 599.251 498.91 599.741 498.8C599.661 499.01 599.591 499.22 599.511 499.44C598.541 502.14 597.641 504.68 596.891 507.25C596.891 507.26 596.891 507.27 596.881 507.29C596.001 510.33 595.371 513.42 595.161 516.85V516.84ZM612.531 490.78C609.831 497.42 605.631 503.28 602.921 509.95C600.441 516.57 599.711 525 604.211 530.93C606.911 534.32 611.291 535.88 615.811 535.89C611.591 536.58 607.131 535.73 603.531 533.39C598.441 530.07 595.801 524.45 596.111 517.54C596.271 513.94 596.931 510.74 597.841 507.57C607.821 492.83 609.911 477.18 610.341 471.78C610.721 472.53 611.101 473.26 611.521 473.98C612.701 476.02 614.041 478.21 615.341 480.34C615.461 480.54 615.591 480.74 615.711 480.94C614.891 484.3 613.861 487.59 612.531 490.78ZM606.591 523.45C606.131 520.36 606.581 516.98 607.251 514.1C609.511 504.91 614.731 496.69 620.721 489.44C621.471 490.83 622.141 492.16 622.681 493.39C616.011 497.28 611.391 506.61 610.911 513.2C610.471 519.3 607.821 522.34 606.591 523.44V523.45ZM612.291 514.14C612.091 514.42 611.891 514.72 611.701 515.02C611.781 514.46 611.861 513.89 611.901 513.28C612.361 506.98 616.741 498.09 623.061 494.33C623.691 495.93 624.061 497.32 624.061 498.44C624.061 498.59 624.041 498.74 624.041 498.88C619.601 502.11 615.221 507.77 612.301 514.06C612.291 514.09 612.301 514.11 612.291 514.14ZM615.081 510.91C617.611 506.52 620.771 502.7 624.011 500.17C624.011 501.88 624.161 503.39 624.561 504.7C621.091 506.2 617.801 508.24 615.081 510.91ZM624.741 490.79C623.821 487.99 622.521 485.35 621.351 482.64C618.371 475.9 614.591 469.43 613.171 462.13C612.401 458.53 612.151 454.85 611.961 451.15C611.751 446.53 611.551 441.81 610.671 437.24C611.051 437.83 611.451 438.41 611.881 439.01C612.741 442.73 614.011 446.4 615.481 450.64C618.681 459.85 622.661 471.31 624.781 490.29C624.761 490.46 624.751 490.62 624.731 490.78L624.741 490.79ZM616.431 450.31C615.291 447.02 614.281 444.07 613.481 441.19C613.721 441.51 613.961 441.85 614.211 442.2C619.011 448.89 624.451 456.48 625.361 468.65C625.851 475.16 625.611 480.78 625.221 485.66C623.001 469.23 619.381 458.81 616.431 450.31ZM618.611 442.4C619.651 443.42 620.611 444.37 621.411 445.21C625.431 449.41 630.781 457.11 630.781 475.38C630.781 484.21 629.251 490.21 628.021 495.04C626.921 499.36 626.021 502.88 626.661 506.72C625.241 504.9 624.901 502.33 625.021 498.98C625.041 498.78 625.051 498.57 625.051 498.36C625.141 496.46 625.371 494.33 625.611 491.95C626.261 485.79 627.061 478.12 626.351 468.58C625.421 456.14 619.651 448.09 615.021 441.63C613.051 438.88 611.041 436.25 609.811 433.7C609.671 433.23 609.531 432.75 609.371 432.29C612.101 436.06 615.551 439.42 618.601 442.42L618.611 442.4ZM606.321 442.59C606.621 439.38 606.811 436.67 606.831 434.27C606.881 433.87 607.101 432.11 607.061 430.86C607.681 431.45 609.811 436.6 610.431 440.92C610.491 441.43 610.551 441.94 610.591 442.45C610.651 443.15 610.701 443.71 610.741 444.16C611.211 450.21 611.161 456.39 612.381 462.3C614.551 473.17 621.541 482.37 624.511 492.94C624.441 493.62 624.371 494.28 624.311 494.91C624.141 494.43 623.961 493.94 623.741 493.42C623.741 493.39 623.731 493.37 623.721 493.34C623.721 493.34 623.721 493.34 623.711 493.32C622.051 489.37 619.081 484.53 616.181 479.79C614.881 477.67 613.541 475.48 612.371 473.46C607.401 464.85 605.251 453.89 606.311 442.58L606.321 442.59ZM636.781 466.68C636.511 467.62 636.241 468.67 636.011 469.8C635.501 460.89 632.611 451.47 628.511 445.75C624.741 440.49 619.121 436.99 614.431 432.7C612.861 431.28 611.371 429.77 609.961 428.19C613.391 430.67 617.401 432.96 620.771 434.87C621.751 435.43 622.671 435.95 623.491 436.43C629.731 440.09 632.981 444.74 634.701 452.49C635.061 454.12 635.261 455.84 635.441 457.51C635.811 460.81 636.111 463.47 637.611 464.18C637.311 465 637.031 465.83 636.781 466.66V466.68ZM639.221 460.54C638.781 461.43 638.361 462.34 637.981 463.27C637.021 462.7 636.731 460.13 636.421 457.42C636.241 455.81 636.031 453.98 635.661 452.3C633.871 444.25 630.481 439.41 623.981 435.59C623.151 435.11 622.231 434.58 621.241 434.02C618.181 432.28 614.551 430.21 611.371 428.01C609.331 426.6 607.491 425.12 606.061 423.64C604.241 421.76 602.851 418.93 602.651 418.57C602.131 417.58 601.641 416.56 601.211 415.51C604.111 419.49 609.261 422.53 615.011 425.91C626.871 432.89 640.311 440.8 639.191 460.43C639.191 460.47 639.191 460.51 639.201 460.55L639.221 460.54ZM643.391 452.8C642.881 454.15 642.251 455.46 641.461 456.7C641.031 457.32 640.641 457.97 640.261 458.62C640.461 439.73 626.691 431.6 615.541 425.04C612.921 423.5 610.431 422.03 608.231 420.52C603.351 416.48 603.311 414.64 606.621 416.68L606.671 416.71C610.251 419.06 614.711 421.4 619.301 423.8C623.131 425.8 627.091 427.88 630.551 429.98C642.921 437.49 643.911 447.54 643.391 452.8ZM644.991 446.55C644.851 447.42 644.681 448.29 644.481 449.16C644.161 443.46 641.531 435.49 631.061 429.13C627.571 427.01 623.591 424.93 619.751 422.92C615.471 420.68 611.311 418.5 607.901 416.34C605.371 414.4 606.611 414.34 608.331 415.2C608.571 415.32 608.771 415.42 608.961 415.5C615.791 418.92 622.191 421.14 627.371 422.85C635.581 425.55 641.511 427.51 644.131 432.6C644.151 432.64 644.191 432.66 644.221 432.69C646.211 437.07 646.261 441.94 644.991 446.56V446.55Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_181",
                d: "M557.101 432.6L557.991 431.75C560.371 435.49 564.181 436.13 564.181 436.13C564.181 436.13 564.541 436.73 565.951 437.07C565.691 432.56 567.361 429.41 566.651 426.09C565.591 421.07 561.951 418.77 561.951 418.77V419.96C559.571 418.05 559.591 415.87 559.591 415.87C558.501 417.34 558.071 420.59 558.251 422C557.411 423.28 556.011 422.67 556.011 422.67C556.011 422.67 556.651 421.17 556.901 420.79C557.161 420.41 557.161 419.77 557.161 419.77C555.121 420.03 555.121 421.92 555.181 424.58C555.241 427.24 555.441 429.96 557.091 432.6H557.101ZM559.251 430.46C560.261 431.59 562.081 432.23 564.661 431.68C564.641 432.66 564.661 433.56 564.841 434.34C561.901 434.34 560.131 432.65 559.241 430.46H559.251ZM562.041 427.65C562.161 427.55 562.321 427.51 562.471 427.51C562.611 427.51 562.691 427.58 562.701 427.73C562.721 428.01 562.421 428.44 562.091 428.35C561.821 428.27 561.851 427.81 562.031 427.66L562.041 427.65ZM564.691 428.86C564.711 429.41 564.711 429.97 564.691 430.5C563.351 430.61 562.211 429.71 562.611 429.04C563.001 428.38 564.051 428.77 564.681 428.86H564.691ZM563.261 426.47C563.231 426.53 563.191 426.58 563.151 426.62C562.951 426.84 562.661 426.96 562.381 427.05C562.241 427.09 562.011 427.2 561.871 427.16C561.641 427.09 561.621 426.71 561.611 426.52C561.611 426.34 561.611 426.15 561.701 425.98C561.911 425.53 562.521 425.33 562.991 425.35C563.541 425.37 563.471 426.08 563.261 426.47ZM560.171 421.53C561.321 422.12 562.171 422.8 562.811 423.54C560.861 423.78 559.551 424.71 558.861 425.87C558.971 424.1 559.271 422.54 560.161 421.54L560.171 421.53ZM558.531 426.57C558.131 427.69 558.241 428.93 558.861 429.92C558.551 430.12 558.211 430.34 557.931 430.51C557.731 429.83 557.561 428.08 558.531 426.56V426.57Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_182",
                d: "M551.031 475.81C553.071 473.11 555.331 470.78 557.351 468.06C554.621 470.01 552.171 472.6 551.031 475.81Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_183",
                d: "M564.86 418.06C565.6 419.52 568.14 423.97 568.71 425.32C569.28 426.66 568.58 431.38 568.65 432.47C568.71 433.56 570.31 434.7 570.82 434.51C571.33 434.32 571.14 430.3 571.33 427.81C571.52 425.32 570.5 424.49 569.22 422.45C567.94 420.41 566.22 417.25 565.39 415.81C564.66 414.53 563 414.5 561.94 414.72C561.94 414.72 563.68 415.74 564.85 418.06H564.86Z",
                fill: "#02230B"
            }), t.createElement("path", {
                id: "Vector_184",
                d: "M565.691 437.79C565.051 437.75 563.861 438 563.521 437.79C563.181 437.58 562.241 437.53 562.241 438.13V438.73C562.241 438.73 560.501 439.62 559.691 440.3C558.881 440.98 558.841 442.35 558.841 442.35C558.841 442.35 562.201 439.96 562.541 439.75C562.881 439.54 566.671 439.24 567.221 439.15C567.771 439.06 566.331 437.83 565.691 437.79Z",
                fill: "#02230B"
            })))))
        }
        var rt = t.forwardRef(nt),
            at = (n.p, function(e) {
                var t = document.querySelectorAll(".animate-chip-circles"),
                    n = e ? "beginElement" : "endElement";
                null !== t && void 0 !== t && t.length && d(t).forEach((function(e) {
                    return null === e || void 0 === e ? void 0 : e[n]()
                }))
            });
        var it = function() {
            return (0, t.useEffect)((function() {
                var e = document.body.classList.contains("dark");
                at(e)
            }), []), (0, Ge.jsx)(rt, {
                className: "girl-svg"
            })
        };
        var ot = function() {
            return (0, Ge.jsx)("article", {
                children: (0, Ge.jsxs)("main", {
                    children: [(0, Ge.jsx)("div", {
                        className: "home-visual",
                        children: (0, Ge.jsx)(it, {})
                    }), (0, Ge.jsxs)("div", {
                        className: "container",
                        children: [(0, Ge.jsx)("h1", {
                            children: "Hey there!"
                        }), (0, Ge.jsx)("h1", {
                            children: "I'm Gayane. I create things."
                        })]
                    })]
                })
            })
        };

        function lt(e, t, n) {
            return (t = p(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function(t) {
                    lt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var ct, dt = n(47),
            ft = n.n(dt),
            Ct = ["title", "titleId"];

        function pt() {
            return pt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, pt.apply(this, arguments)
        }

        function mt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function ht(e, n) {
            var r = e.title,
                a = e.titleId,
                i = mt(e, Ct);
            return t.createElement("svg", pt({
                width: "100%",
                height: "100%",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, ct || (ct = t.createElement("path", {
                d: "M25 4L4 17.3438V32.6523L25 46L46 32.6562V17.3438L25 4ZM25 29.1836L19.0664 25.0703L25 21.0234L30.9336 25.0703L25 29.1836ZM27 17.6055V9.94922L40.4297 18.4844L34.4102 22.6562L27 17.6055ZM23 17.6055L15.5898 22.6562L9.57031 18.4844L23 9.94922V17.6055ZM12.0938 25.043L8 27.832V22.2031L12.0938 25.043ZM15.5703 27.4531L23 32.6055V40.0508L9.58984 31.5273L15.5703 27.4531ZM27 32.6055L34.4297 27.4531L40.4102 31.5273L27 40.0508V32.6055ZM37.9062 25.043L42 22.2031V27.832L37.9062 25.043Z",
                fill: "currentColor"
            })))
        }
        var vt, yt = t.forwardRef(ht),
            gt = (n.p, ["title", "titleId"]);

        function bt() {
            return bt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, bt.apply(this, arguments)
        }

        function xt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function wt(e, n) {
            var r = e.title,
                a = e.titleId,
                i = xt(e, gt);
            return t.createElement("svg", bt({
                width: "100%",
                height: "100%",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, vt || (vt = t.createElement("path", {
                d: "M8 3.00977C4.53 3.00977 2.00977 5.08922 2.00977 7.94922C2.00977 10.8192 4.59 12.9902 8 12.9902C11.47 12.9902 13.9902 10.8706 13.9902 7.89062C13.8302 5.02063 11.36 3.00977 8 3.00977ZM3 15C2.45 15 2 15.45 2 16V45C2 45.55 2.45 46 3 46H13C13.55 46 14 45.55 14 45V16C14 15.45 13.55 15 13 15H3ZM18 15C17.45 15 17 15.45 17 16V45C17 45.55 17.45 46 18 46H27C27.552 46 28 45.552 28 45V30V29.75V29.5C28 27.13 29.8206 25.1995 32.1406 25.0195C32.2606 24.9995 32.38 25 32.5 25C32.62 25 32.7394 24.9995 32.8594 25.0195C35.1794 25.1995 37 27.13 37 29.5V45C37 45.552 37.448 46 38 46H47C47.55 46 48 45.55 48 45V28C48 21.53 44.5291 15 36.7891 15C33.2691 15 30.61 16.3602 29 17.4902V16C29 15.45 28.55 15 28 15H18Z",
                fill: "currentColor"
            })))
        }
        var St, Mt = t.forwardRef(wt),
            kt = (n.p, ["title", "titleId"]);

        function Et() {
            return Et = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Et.apply(this, arguments)
        }

        function Lt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function _t(e, n) {
            var r = e.title,
                a = e.titleId,
                i = Lt(e, kt);
            return t.createElement("svg", Et({
                width: "100%",
                height: "100%",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, St || (St = t.createElement("path", {
                d: "M22.7083 4.375C13.125 5.41667 5.41667 13.125 4.375 22.5C3.33334 32.2917 8.95834 41.0417 17.5 44.375C18.125 44.5833 18.75 44.1667 18.75 43.3333V40C18.75 40 17.9167 40.2083 16.875 40.2083C13.9583 40.2083 12.7083 37.7083 12.5 36.25C12.2917 35.4167 11.875 34.7917 11.25 34.1667C10.625 33.9583 10.4167 33.9583 10.4167 33.75C10.4167 33.3333 11.0417 33.3333 11.25 33.3333C12.5 33.3333 13.5417 34.7917 13.9583 35.4167C15 37.0833 16.25 37.5 16.875 37.5C17.7083 37.5 18.3333 37.2917 18.75 37.0833C18.9583 35.625 19.5833 34.1667 20.8333 33.3333C16.0417 32.2917 12.5 29.5833 12.5 25C12.5 22.7083 13.5417 20.4167 15 18.75C14.7917 18.3333 14.5833 17.2917 14.5833 15.8333C14.5833 15 14.5833 13.9583 15 13.125C15 12.7083 15.4167 12.5 15.625 12.5H15.8333C16.875 12.7083 18.9583 13.3333 20.8333 15.2083C22.0833 14.7917 23.5417 14.5833 25 14.5833C26.4583 14.5833 27.9167 14.7917 29.1667 15.2083C31.0417 13.3333 33.3333 12.7083 34.375 12.5H34.5833C35 12.5 35.2083 12.7083 35.4167 13.125C35.4167 13.9583 35.4167 15 35.4167 15.8333C35.4167 17.5 35.2083 18.3333 35 18.75C36.4583 20.4167 37.5 22.5 37.5 25C37.5 29.5833 33.9583 32.2917 29.1667 33.3333C30.4167 34.375 31.25 36.25 31.25 38.125V43.5417C31.25 44.1667 31.875 44.7917 32.7083 44.5833C40.4167 41.4583 45.8333 33.9583 45.8333 25.2083C45.8333 12.7083 35.2083 2.91667 22.7083 4.375Z",
                fill: "currentColor"
            })))
        }
        var Pt, Bt = t.forwardRef(_t),
            Zt = (n.p, ["title", "titleId"]);

        function Vt() {
            return Vt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Vt.apply(this, arguments)
        }

        function Ot(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function Tt(e, n) {
            var r = e.title,
                a = e.titleId,
                i = Ot(e, Zt);
            return t.createElement("svg", Vt({
                width: "100%",
                height: "100%",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, Pt || (Pt = t.createElement("path", {
                d: "M49.12 9.62786C47.3461 10.4154 45.4447 10.9442 43.4458 11.1842C45.486 9.96164 47.0536 8.02649 47.7886 5.72381C45.8835 6.85264 43.7646 7.67396 41.5182 8.11649C39.718 6.19634 37.1528 5 34.3138 5C28.8609 5 24.4393 9.41784 24.4393 14.8708C24.4393 15.6433 24.5293 16.3971 24.6981 17.1209C16.4925 16.7084 9.22064 12.7781 4.34901 6.80389C3.49769 8.2665 3.01391 9.96164 3.01391 11.7693C3.01391 15.1933 4.75404 18.216 7.4055 19.9899C5.78537 19.9374 4.26275 19.4911 2.9314 18.7523C2.9314 18.7936 2.9314 18.8348 2.9314 18.8761C2.9314 23.6615 6.33667 27.648 10.8483 28.5593C10.0232 28.7844 9.14939 28.9044 8.24932 28.9044C7.61177 28.9044 6.99297 28.8444 6.38917 28.7243C7.64927 32.6434 11.2946 35.5049 15.6111 35.5836C12.2359 38.2313 7.97929 39.8065 3.35143 39.8065C2.55262 39.8065 1.76881 39.7615 1 39.6677C5.36534 42.4729 10.5557 44.1043 16.1324 44.1043C34.2913 44.1043 44.2221 29.0619 44.2221 16.0184C44.2221 15.5908 44.2109 15.1595 44.1959 14.7395C46.1235 13.3482 47.7961 11.608 49.12 9.62786Z",
                fill: "currentColor"
            })))
        }
        var At, It = t.forwardRef(Tt),
            Rt = (n.p, ["title", "titleId"]);

        function jt() {
            return jt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, jt.apply(this, arguments)
        }

        function Nt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function zt(e, n) {
            var r = e.title,
                a = e.titleId,
                i = Nt(e, Rt);
            return t.createElement("svg", jt({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 50 50",
                width: "100%",
                height: "100%",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, At || (At = t.createElement("path", {
                d: "M 37 5 L 28.898438 5 L 25.199219 12 L 12 12 L 12 22 L 19.898438 22 L 12 37 L 12 45 L 20 45 L 23.699219 38 L 37 38 L 37 28 L 29 28 L 37 13 Z",
                fill: "currentColor"
            })))
        }
        var Ht, Ft, Dt = t.forwardRef(zt),
            Ut = (n.p, function() {
                return (0, Ge.jsxs)("div", {
                    className: "social-links",
                    children: [(0, Ge.jsx)("a", {
                        href: "https://codepen.io/gayane-gasparyan",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, Ge.jsx)("span", {
                            children: (0, Ge.jsx)(yt, {})
                        })
                    }), (0, Ge.jsx)("a", {
                        href: "https://linkedin.com/in/gayanegasparyan",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, Ge.jsx)("span", {
                            children: (0, Ge.jsx)(Mt, {})
                        })
                    }), (0, Ge.jsx)("a", {
                        href: "https://github.com/Ggayane",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, Ge.jsx)("span", {
                            children: (0, Ge.jsx)(Bt, {})
                        })
                    }), (0, Ge.jsx)("a", {
                        href: "https://www.deviantart.com/gggayane",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, Ge.jsx)("span", {
                            children: (0, Ge.jsx)(Dt, {})
                        })
                    }), (0, Ge.jsx)("a", {
                        href: "https://twitter.com/gggayane",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, Ge.jsx)("span", {
                            children: (0, Ge.jsx)(It, {})
                        })
                    })]
                })
            }),
            Wt = function() {
                var e = (0, t.useRef)(null),
                    n = (0, t.useRef)(null),
                    r = (0, t.useRef)(null);
                return (0, t.useEffect)((function() {
                    return function() {
                            var t = ft().Engine,
                                a = ft().Render,
                                i = ft().World,
                                o = ft().Bodies,
                                l = ft().Runner,
                                s = {
                                    isStatic: !0,
                                    render: {
                                        fillStyle: "transparent"
                                    }
                                },
                                u = {
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                },
                                c = t.create({}),
                                f = a.create({
                                    element: r.current,
                                    engine: c,
                                    canvas: e.current,
                                    options: ut(ut({}, u), {}, {
                                        background: "transparent",
                                        wireframes: !1
                                    })
                                }),
                                C = o.rectangle(u.width / 2, u.height, u.width, 200, s),
                                p = o.rectangle(0, u.height / 2, 100, u.height, s),
                                m = o.rectangle(u.width, u.height / 2, 100, u.height, s),
                                h = o.rectangle(u.width / 2, 0, u.width, 150, s),
                                v = d(document.querySelectorAll(".box")).map((function(e) {
                                    var t = e.offsetWidth,
                                        n = e.offsetHeight;
                                    return {
                                        body: ft().Bodies.rectangle(u.width / 2, 0, t, n, {
                                            render: {
                                                fillStyle: "transparent"
                                            }
                                        }),
                                        elem: e,
                                        render: function() {
                                            var e = this.body.position,
                                                n = e.x,
                                                r = e.y;
                                            this.elem.style.top = "".concat(r - 20, "px"), this.elem.style.left = "".concat(n - t / 2, "px"), this.elem.style.transform = "rotate(".concat(this.body.angle, "rad)")
                                        }
                                    }
                                })),
                                y = window.innerWidth <= 479 ? f.canvas : document.body,
                                g = ft().Mouse.create(y),
                                b = ft().MouseConstraint.create(c, {
                                    mouse: g,
                                    constraint: {
                                        stiffness: .2,
                                        render: {
                                            visible: !1
                                        }
                                    }
                                });
                            g.element.removeEventListener("mousewheel", g.mousewheel), g.element.removeEventListener("DOMMouseScroll", g.mousewheel), i.add(c.world, [C].concat(d(v.map((function(e) {
                                    return e.body
                                }))), [p, m, h, b])), f.mouse = g, l.run(c), a.run(f),
                                function e() {
                                    v.forEach((function(e) {
                                        e.render()
                                    })), ft().Engine.update(c), n.current = requestAnimationFrame(e)
                                }()
                        }(),
                        function() {
                            return cancelAnimationFrame(n.current)
                        }
                }), []), (0, Ge.jsxs)("div", {
                    className: "about-container",
                    ref: r,
                    children: ['software developer with over 9 years of experience, I have developed a strong foundation in crafting innovative and efficient technology solutions. My passion for technology and entrepreneurship led me to co-found Mythrill, where I currently serve as the CTO. I am proud to be recognized as one of the "30under30" Armenians in Tech and am constantly driven to push boundaries and make a positive impact in the industry. When I\'m not coding, I enjoy exploring my creative side through art, music, and nature'.split(" ").map((function(e, t) {
                        var n = e.startsWith('"30under30"') || e.startsWith("CTO") || e.startsWith("Mythrill");
                        return (0, Ge.jsx)("span", {
                            className: "box ".concat(n ? "highlighted" : ""),
                            children: e
                        }, "word-".concat(t))
                    })), (0, Ge.jsx)("canvas", {
                        ref: e
                    }), (0, Ge.jsx)(Ut, {})]
                })
            },
            $t = function(e) {
                var n = e.children,
                    r = e.className,
                    a = void 0 === r ? "" : r,
                    i = e.icon,
                    o = void 0 === i ? null : i,
                    l = (0, t.useRef)(),
                    s = (0, t.useRef)(),
                    u = (0, t.useRef)(),
                    c = (0, t.useRef)(),
                    d = (0, t.useRef)();
                (0, t.useEffect)((function() {
                    var e = s.current,
                        t = l.current;
                    return u.current = t.textContent, e.addEventListener("mouseenter", C), e.addEventListener("mouseleave", p),
                        function() {
                            e.removeEventListener("mouseenter", C), e.removeEventListener("mouseleave", p)
                        }
                }), []);
                var f = function() {
                    var e, t = Array.from({
                        length: u.current.length
                    }, (function() {
                        return Math.floor(2 * Math.random())
                    }));
                    t = t.map((function() {
                        return Math.floor(2 * Math.random())
                    })), null !== l && void 0 !== l && null !== (e = l.current) && void 0 !== e && e.textContent && (l.current.textContent = t.join(""))
                };
                (0, t.useEffect)((function() {
                    var e = setInterval(f, 100);
                    setTimeout((function() {
                        l.current.textContent && (l.current.textContent = u.current), clearInterval(e)
                    }), 500)
                }), []);
                var C = function() {
                        c.current = setInterval(f, 100), d.current = setTimeout((function() {
                            l.current.textContent && (l.current.textContent = u.current), clearInterval(c.current)
                        }), 500)
                    },
                    p = function() {
                        c && clearInterval(c.current), d && clearInterval(d.current), l.current.textContent && (l.current.textContent = u.current)
                    };
                return (0, Ge.jsxs)("span", {
                    ref: s,
                    className: "shuffle-text ".concat(a),
                    children: [(0, Ge.jsx)("span", {
                        ref: l,
                        children: n
                    }), o]
                })
            },
            qt = ["title", "titleId"];

        function Qt() {
            return Qt = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, Qt.apply(this, arguments)
        }

        function Gt(e, t) {
            if (null == e) return {};
            var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
            }
            return a
        }

        function Kt(e, n) {
            var r = e.title,
                a = e.titleId,
                i = Gt(e, qt);
            return t.createElement("svg", Qt({
                width: 349,
                height: 349,
                viewBox: "0 0 349 349",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n,
                "aria-labelledby": a
            }, i), r ? t.createElement("title", {
                id: a
            }, r) : null, Ht || (Ht = t.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M150 69C150 80.0457 141.046 89 130 89H48C43.5817 89 40 92.5817 40 97V301C40 305.418 43.5817 309 48 309H252C256.418 309 260 305.418 260 301V219C260 207.954 268.954 199 280 199V199C291.046 199 300 207.954 300 219V301C300 327.51 278.51 349 252 349H48C21.4903 349 0 327.51 0 301V97C0 70.4903 21.4903 49 48 49H130C141.046 49 150 57.9543 150 69V69Z",
                fill: "black"
            })), Ft || (Ft = t.createElement("path", {
                d: "M139.393 187.91C133.536 193.768 133.536 203.266 139.393 209.124C145.251 214.982 154.749 214.982 160.607 209.124L139.393 187.91ZM348.517 15.0001C348.517 6.7158 341.801 7.16259e-05 333.517 7.16259e-05L198.517 7.16259e-05C190.233 7.16259e-05 183.517 6.7158 183.517 15.0001C183.517 23.2843 190.233 30.0001 198.517 30.0001L318.517 30.0001V150C318.517 158.284 325.233 165 333.517 165C341.801 165 348.517 158.284 348.517 150V15.0001ZM160.607 209.124L344.124 25.6067L322.91 4.39347L139.393 187.91L160.607 209.124Z",
                fill: "black"
            })))
        }
        var Xt = t.forwardRef(Kt),
            Yt = (n.p, function(e) {
                var n = e.children,
                    r = u((0, t.useState)(!1), 2),
                    a = r[0],
                    i = r[1];
                return (0, Ge.jsxs)("div", {
                    id: "menuToggle",
                    onClick: function() {
                        i(!a)
                    },
                    className: a ? "open" : null,
                    children: [(0, Ge.jsx)("span", {
                        className: "menu-icon"
                    }), (0, Ge.jsx)("span", {
                        className: "menu-icon"
                    }), (0, Ge.jsx)("span", {
                        className: "menu-icon"
                    }), (0, Ge.jsx)("div", {
                        id: "menu",
                        children: a ? n : null
                    })]
                })
            }),
            Jt = function() {
                var e = u((0, t.useState)(!1), 2),
                    n = e[0],
                    r = e[1],
                    a = (0, Ge.jsxs)(Ge.Fragment, {
                        children: [(0, Ge.jsx)(ze, {
                            to: "/",
                            children: (0, Ge.jsx)($t, {
                                children: "Home"
                            })
                        }), (0, Ge.jsx)(ze, {
                            to: "about",
                            children: (0, Ge.jsx)($t, {
                                children: "About"
                            })
                        }), (0, Ge.jsx)("a", {
                            href: "https://codepen.io/gayane-gasparyan/pens/popular",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, Ge.jsx)($t, {
                                icon: (0, Ge.jsx)(Xt, {
                                    width: 10,
                                    height: 10
                                }),
                                children: "Work"
                            })
                        }), (0, Ge.jsx)("a", {
                            href: "#",
                            onClick: function(e) {
                                var t;
                                e.preventDefault(), document.body.classList.toggle("dark"), null === (t = document.querySelector("#girl-animate-displacement")) || void 0 === t || t.beginElement(), at(!n), r(!n)
                            },
                            children: n ? (0, Ge.jsx)($t, {
                                children: "normal"
                            }, "static") : (0, Ge.jsx)($t, {
                                children: "add spice"
                            }, "spice")
                        })]
                    });
                return (0, Ge.jsxs)(Ge.Fragment, {
                    children: [(0, Ge.jsxs)("div", {
                        className: "navbar",
                        children: [(0, Ge.jsx)(ze, {
                            to: "/",
                            className: "logo",
                            children: (0, Ge.jsx)("span", {
                                children: "Gg."
                            })
                        }), a]
                    }), (0, Ge.jsxs)("div", {
                        className: "navbar mobile-navbar",
                        children: [(0, Ge.jsx)(ze, {
                            to: "/",
                            className: "logo",
                            children: (0, Ge.jsx)("span", {
                                children: "Gg."
                            })
                        }), (0, Ge.jsx)(Yt, {
                            children: a
                        })]
                    })]
                })
            };
        var en = function() {
                return (0, Ge.jsxs)(Ge.Fragment, {
                    children: [(0, Ge.jsxs)(je, {
                        children: [(0, Ge.jsx)(Jt, {}), (0, Ge.jsxs)(Ve, {
                            children: [(0, Ge.jsx)(Be, {
                                path: "/",
                                element: (0, Ge.jsx)(ot, {})
                            }), (0, Ge.jsx)(Be, {
                                path: "/about",
                                element: (0, Ge.jsx)(Wt, {})
                            })]
                        })]
                    }), (0, Ge.jsx)(Ye, {})]
                })
            },
            tn = function(e) {
                e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                    var n = t.getCLS,
                        r = t.getFID,
                        a = t.getFCP,
                        i = t.getLCP,
                        o = t.getTTFB;
                    n(e), r(e), a(e), i(e), o(e)
                }))
            };
        a.createRoot(document.getElementById("root")).render((0, Ge.jsx)(t.StrictMode, {
            children: (0, Ge.jsx)(en, {})
        })), tn()
    }()
}();
//# sourceMappingURL=main.5d181981.js.map