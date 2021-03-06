/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
//$(document).ready(function () {
//    "use strict";
//    $("#clickMe").click(function (e) {
//        alert("hello world!");
//    });
//});

(function ($) {

    $("div.uk-panel:contains('text')").html('new-text<span class="someclass">some other text</span>')

})(jQuery);

//invision JS file
/*! invisionapp 2016-10-13 */
function FullscreenVideo(a) {
    var b = jQuery.extend({
        playerId: "",
        modal: "",
        body: jQuery(document.body)
    }, a || {});
    this.player = $f(jQuery("#" + b.playerId)[0]), this.player.addEvent("ready", function () {}), this.playModalVideo = function () {
        var a = this;
        a.player.addEvent("ready", function () {
            a.player.api("play")
        })
    }, this.pauseModalVideo = function () {
        this.player.api("pause")
    }, this.resetModalVideo = function () {
        this.player.api("seekTo", 0)
    }, this.openVideoModal = function () {
        var a = this;
        b.body.addClass("no-overflow"), TweenLite.to(b.modal, .5, {
            force3D: !0,
            autoAlpha: 1,
            zIndex: 1e3,
            onComplete: function () {
                b.modal.addClass("is-open"), a.playModalVideo()
            }
        }), a.player.addEvent("finish", function () {
            a.closeVideoModal()
        })
    }, this.closeVideoModal = function () {
        var a = this;
        b.body.removeClass("no-overflow"), b.modal.removeClass("is-open"), a.pauseModalVideo(), TweenLite.to(b.modal, .5, {
            force3D: !0,
            autoAlpha: 0,
            zIndex: -1,
            onComplete: function () {
                a.resetModalVideo()
            }
        })
    }
}
var Froogaloop = function () {
    function a(b) {
        return new a.fn.init(b)
    }

    function b(a, b, c) {
        if (!c.contentWindow.postMessage) return !1;
        var d = c.getAttribute("src").split("?")[0],
            a = JSON.stringify({
                method: a,
                value: b
            });
        "//" === d.substr(0, 2) && (d = window.location.protocol + d), c.contentWindow.postMessage(a, d)
    }

    function c(a) {
        var b, c;
        try {
            b = JSON.parse(a.data), c = b.event || b.method
        } catch (d) {}
        if ("ready" == c && !f && (f = !0), a.origin != g) return !1;
        var a = b.value,
            h = b.data,
            i = "" === i ? null : b.player_id;
        return b = i ? e[i][c] : e[c], c = [], b ? (void 0 !== a && c.push(a), h && c.push(h), i && c.push(i), 0 < c.length ? b.apply(null, c) : b.call()) : !1
    }

    function d(a, b, c) {
        c ? (e[c] || (e[c] = {}), e[c][a] = b) : e[a] = b
    }
    var e = {},
        f = !1,
        g = "";
    return a.fn = a.prototype = {
        element: null,
        init: function (a) {
            "string" == typeof a && (a = document.getElementById(a)), this.element = a, a = this.element.getAttribute("src"), "//" === a.substr(0, 2) && (a = window.location.protocol + a);
            for (var a = a.split("/"), b = "", c = 0, d = a.length; d > c && 3 > c; c++) b += a[c], 2 > c && (b += "/");
            return g = b, this
        },
        api: function (a, c) {
            if (!this.element || !a) return !1;
            var e = this.element,
                f = "" !== e.id ? e.id : null,
                g = c && c.constructor && c.call && c.apply ? null : c,
                h = c && c.constructor && c.call && c.apply ? c : null;
            return h && d(a, h, f), b(a, g, e), this
        },
        addEvent: function (a, c) {
            if (!this.element) return !1;
            var e = this.element,
                g = "" !== e.id ? e.id : null;
            return d(a, c, g), "ready" != a ? b("addEventListener", a, e) : "ready" == a && f && c.call(null, g), this
        },
        removeEvent: function (a) {
            if (!this.element) return !1;
            var c, d = this.element;
            a: {
                if ((c = "" !== d.id ? d.id : null) && e[c]) {
                    if (!e[c][a]) {
                        c = !1;
                        break a
                    }
                    e[c][a] = null
                } else {
                    if (!e[a]) {
                        c = !1;
                        break a
                    }
                    e[a] = null
                }
                c = !0
            }
            "ready" != a && c && b("removeEventListener", a, d)
        }
    }, a.fn.init.prototype = a.fn, window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c), window.Froogaloop = window.$f = a
}();
! function (a, b, c) {
    a.fn.backstretch = function (d, e) {
        return (d === c || 0 === d.length) && a.error("No images were supplied for Backstretch"), 0 === a(b).scrollTop() && b.scrollTo(0, 0), this.each(function () {
            var b = a(this),
                c = b.data("backstretch");
            if (c) {
                if ("string" == typeof d && "function" == typeof c[d]) return void c[d](e);
                e = a.extend(c.options, e), c.destroy(!0)
            }
            c = new f(this, d, e), b.data("backstretch", c)
        })
    }, a.backstretch = function (b, c) {
        return a("body").backstretch(b, c).data("backstretch")
    }, a.expr[":"].backstretch = function (b) {
        return a(b).data("backstretch") !== c
    }, a.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5e3,
        fade: 0
    };
    var d = {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        e = {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxHeight: "none",
            maxWidth: "none",
            zIndex: -999999
        },
        f = function (c, e, f) {
            this.options = a.extend({}, a.fn.backstretch.defaults, f || {}), this.images = a.isArray(e) ? e : [e], a.each(this.images, function () {
                a("<img />")[0].src = this
            }), this.isBody = c === document.body, this.$container = a(c), this.$root = this.isBody ? a(g ? b : document) : this.$container, c = this.$container.children(".backstretch").first(), this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(d).appendTo(this.$container), this.isBody || (c = this.$container.css("position"), e = this.$container.css("zIndex"), this.$container.css({
                position: "static" === c ? "relative" : c,
                zIndex: "auto" === e ? 0 : e,
                background: "none"
            }), this.$wrap.css({
                zIndex: -999998
            })), this.$wrap.css({
                position: this.isBody && g ? "fixed" : "absolute"
            }), this.index = 0, this.show(this.index), a(b).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
                this.isBody && 0 === b.pageYOffset && (b.scrollTo(0, 1), this.resize())
            }, this))
        };
    f.prototype = {
        resize: function () {
            try {
                var a, c = {
                        left: 0,
                        top: 0
                    },
                    d = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    e = d,
                    f = this.isBody ? b.innerHeight ? b.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    g = e / this.$img.data("ratio");
                g >= f ? (a = (g - f) / 2, this.options.centeredY && (c.top = "-" + a + "px")) : (g = f, e = g * this.$img.data("ratio"), a = (e - d) / 2, this.options.centeredX && (c.left = "-" + a + "px")), this.$wrap.css({
                    width: d,
                    height: f
                }).find("img:not(.deleteable)").css({
                    width: e,
                    height: g
                }).css(c)
            } catch (h) {}
            return this
        },
        show: function (b) {
            if (!(Math.abs(b) > this.images.length - 1)) {
                var c = this,
                    d = c.$wrap.find("img").addClass("deleteable"),
                    f = {
                        relatedTarget: c.$container[0]
                    };
                return c.$container.trigger(a.Event("backstretch.before", f), [c, b]), this.index = b, clearInterval(c.interval), c.$img = a("<img />").css(e).bind("load", function (e) {
                    var g = this.width || a(e.target).width();
                    e = this.height || a(e.target).height(), a(this).data("ratio", g / e), a(this).fadeIn(c.options.speed || c.options.fade, function () {
                        d.remove(), c.paused || c.cycle(), a(["after", "show"]).each(function () {
                            c.$container.trigger(a.Event("backstretch." + this, f), [c, b])
                        })
                    }), c.resize()
                }).appendTo(c.$wrap), c.$img.attr("src", c.images[b]), c
            }
        },
        next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        },
        pause: function () {
            return this.paused = !0, this
        },
        resume: function () {
            return this.paused = !1, this.next(), this
        },
        cycle: function () {
            return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration)), this
        },
        destroy: function (c) {
            a(b).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), c || this.$wrap.remove(), this.$container.removeData("backstretch")
        }
    };
    var g, h = navigator.userAgent,
        i = navigator.platform,
        j = h.match(/AppleWebKit\/([0-9]+)/),
        j = !!j && j[1],
        k = h.match(/Fennec\/([0-9]+)/),
        k = !!k && k[1],
        l = h.match(/Opera Mobi\/([0-9]+)/),
        m = !!l && l[1],
        n = h.match(/MSIE ([0-9]+)/),
        n = !!n && n[1];
    g = !((-1 < i.indexOf("iPhone") || -1 < i.indexOf("iPad") || -1 < i.indexOf("iPod")) && j && 534 > j || b.operamini && "[object OperaMini]" === {}.toString.call(b.operamini) || l && 7458 > m || -1 < h.indexOf("Android") && j && 533 > j || k && 6 > k || "palmGetResource" in b && j && 534 > j || -1 < h.indexOf("MeeGo") && -1 < h.indexOf("NokiaBrowser/8.5.0") || n && 6 >= n)
}(jQuery, window),
function (a) {
    a.fn.binnacle = function (b) {
        var c, d, e = {
                className: "binnacle",
                color: "#ffffff",
                height: 40,
                width: 40,
                image: '<svg width="{{width}}" height="{{height}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40"><path fill="{{color}}" d="M36.4-.1h-32.8c-2 0-3.6 1.7-3.6 3.7v32.8c0 2 1.6 3.6 3.6 3.6h32.8c2 0 3.6-1.6 3.6-3.6v-32.8c0-2-1.6-3.7-3.6-3.7zm-23 7.9c1.3 0 2.4 1 2.4 2.4s-1.1 2.4-2.4 2.4-2.4-1-2.4-2.4c-.1-1.4 1-2.4 2.4-2.4zm16.3 23c-2.5 0-3.7-1.5-3.7-3.5 0-.6.1-1.2.3-1.8l1.2-4.2c.1-.5.2-.9.2-1.3 0-1.4-.8-2.2-2.2-2.2-1.7 0-2.8 1.2-3.4 3.5l-2.3 9.2h-4l.7-2.9c-1.2 1.9-2.8 3.1-4.9 3.1-2.4 0-3.6-1.4-3.6-3.5 0-.5.1-1.2.2-1.8l1.8-7.5h-2.7l.9-3.2h6.8l-2.7 10.7c-.2.7-.3 1.2-.3 1.6 0 .7.3.9.9 1 .3.1 2.9 0 4.3-3.1l1.8-7.1h-2.9l.9-3.2h6.1l-.8 3.6c1.1-2 3.2-3.9 5.4-3.9 2.3 0 4.1 1.6 4.1 4.7 0 .8-.1 1.7-.4 2.6l-1.2 4.4c-.1.4-.2.8-.2 1.1 0 .7.3 1.1.8 1.1s1.2-.4 2-2.6l1.6.6c-.9 3.2-2.6 4.6-4.7 4.6z"/></svg>',
                displayMode: !1
            },
            f = a.extend({}, e, b),
            g = a(document);
        return c = f.image.replace("{{color}}", f.color).replace("{{height}}", f.height).replace("{{width}}", f.width), this.each(function () {
            var b = a(this),
                e = a('<div class="' + f.className + '">' + c + "</div>"),
                h = function () {
                    b.append(e), e.siblings().addClass("alpha-zero"), d = !0
                },
                i = function () {
                    e.siblings().removeClass("alpha-zero"), e.remove(), d = !1
                };
            return displayMode = function () {
                b.append(e), e.siblings().css({
                    opacity: "0.5"
                })
            }, activeQuery = function () {
                d && i()
            }, f.displayMode ? void displayMode() : (b.on("binnacle", h), void g.ajaxComplete(activeQuery))
        })
    }
}(jQuery),
function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.viewportUnitsBuggyfill = b()
}(this, function () {
    "use strict";

    function a(a, b) {
        var c;
        return function () {
            var d = this,
                e = arguments,
                f = function () {
                    a.apply(d, e)
                };
            clearTimeout(c), c = setTimeout(f, b)
        }
    }

    function b() {
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    }

    function c(c) {
        t || (c === !0 && (c = {
            force: !0
        }), p = c || {}, p.isMobileSafari = z, p.isBadStockAndroid = A, (p.force || z || x || A || y || p.hacks && p.hacks.required(p)) && (p.hacks && p.hacks.initialize(p), t = !0, s = document.createElement("style"), s.id = "patched-viewport", document.head.appendChild(s), l(function () {
            var c = a(e, p.refreshDebounceWait || 100);
            window.addEventListener("orientationchange", c, !0), window.addEventListener("pageshow", c, !0), (p.force || x || b()) && (window.addEventListener("resize", c, !0), p._listeningToResize = !0), p.hacks && p.hacks.initializeEvents(p, e, c), e()
        })))
    }

    function d() {
        s.textContent = h(), s.parentNode.appendChild(s)
    }

    function e() {
        t && (f(), setTimeout(function () {
            d()
        }, 1))
    }

    function f() {
        return r = [], w.call(document.styleSheets, function (a) {
            "patched-viewport" !== a.ownerNode.id && a.cssRules && "ignore" !== a.ownerNode.getAttribute("data-viewport-units-buggyfill") && (a.media && a.media.mediaText && window.matchMedia && !window.matchMedia(a.media.mediaText).matches || w.call(a.cssRules, g))
        }), r
    }

    function g(a) {
        if (7 === a.type) {
            var b;
            try {
                b = a.cssText
            } catch (c) {
                return
            }
            return v.lastIndex = 0, void(v.test(b) && (r.push([a, null, b]), p.hacks && p.hacks.findDeclarations(r, a, null, b)))
        }
        if (!a.style) {
            if (!a.cssRules) return;
            return void w.call(a.cssRules, function (a) {
                g(a)
            })
        }
        w.call(a.style, function (b) {
            var c = a.style.getPropertyValue(b);
            a.style.getPropertyPriority(b) && (c += " !important"), v.lastIndex = 0, v.test(c) && (r.push([a, b, c]), p.hacks && p.hacks.findDeclarations(r, a, b, c))
        })
    }

    function h() {
        q = k();
        var a, b, c = [],
            d = [];
        return r.forEach(function (e) {
            var f = i.apply(null, e),
                g = f.selector.length ? f.selector.join(" {\n") + " {\n" : "",
                h = new Array(f.selector.length + 1).join("\n}");
            return g && g === a ? (g && !a && (a = g, b = h), void d.push(f.content)) : (d.length && (c.push(a + d.join("\n") + b), d.length = 0), void(g ? (a = g, b = h, d.push(f.content)) : (c.push(f.content), a = null, b = null)))
        }), d.length && c.push(a + d.join("\n") + b), y && c.push("* { content: normal !important; }"), c.join("\n\n")
    }

    function i(a, b, c) {
        var d, e = [];
        d = c.replace(v, j), p.hacks && (d = p.hacks.overwriteDeclaration(a, b, d)), b && (e.push(a.selectorText), d = b + ": " + d + ";");
        for (var f = a.parentRule; f;) e.unshift("@media " + f.media.mediaText), f = f.parentRule;
        return {
            selector: e,
            content: d
        }
    }

    function j(a, b, c) {
        var d = q[c],
            e = parseFloat(b) / 100;
        return e * d + "px"
    }

    function k() {
        var a = window.innerHeight,
            b = window.innerWidth;
        return {
            vh: a,
            vw: b,
            vmax: Math.max(b, a),
            vmin: Math.min(b, a)
        }
    }

    function l(a) {
        var b = 0,
            c = function () {
                b--, b || a()
            };
        w.call(document.styleSheets, function (a) {
            a.href && m(a.href) !== m(location.href) && (b++, n(a.ownerNode, c))
        }), b || a()
    }

    function m(a) {
        return a.slice(0, a.indexOf("/", a.indexOf("://") + 3))
    }

    function n(a, b) {
        o(a.href, function () {
            var c = document.createElement("style");
            c.media = a.media, c.setAttribute("data-href", a.href), c.textContent = this.responseText, a.parentNode.replaceChild(c, a), b()
        }, b)
    }

    function o(a, b, c) {
        var d = new XMLHttpRequest;
        if ("withCredentials" in d) d.open("GET", a, !0);
        else {
            if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
            d = new XDomainRequest, d.open("GET", a)
        }
        return d.onload = b, d.onerror = c, d.send(), d
    }
    var p, q, r, s, t = !1,
        u = window.navigator.userAgent,
        v = /([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,
        w = [].forEach,
        x = !1,
        y = u.indexOf("Opera Mini") > -1,
        z = /(iPhone|iPod|iPad).+AppleWebKit/i.test(u) && function () {
            var a = u.match(/OS (\d)/);
            return a && a.length > 1 && parseInt(a[1]) < 8
        }(),
        A = function () {
            var a = u.indexOf(" Android ") > -1;
            if (!a) return !1;
            var b = u.indexOf("Version/") > -1;
            if (!b) return !1;
            var c = parseFloat((u.match("Android ([0-9.]+)") || [])[1]);
            return 4.4 >= c
        }();
    return x || (x = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)), {
        version: "0.5.1",
        findProperties: f,
        getCss: h,
        init: c,
        refresh: e
    }
}),
function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function (e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function (b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
}),
function (a, b, c, d) {
    "use strict";
    var e = c("html"),
        f = c(a),
        g = c(b),
        h = c.fancybox = function () {
            h.open.apply(this, arguments)
        },
        i = navigator.userAgent.match(/msie/i),
        j = null,
        k = b.createTouch !== d,
        l = function (a) {
            return a && a.hasOwnProperty && a instanceof c
        },
        m = function (a) {
            return a && "string" === c.type(a)
        },
        n = function (a) {
            return m(a) && a.indexOf("%") > 0
        },
        o = function (a) {
            return a && !(a.style.overflow && "hidden" === a.style.overflow) && (a.clientWidth && a.scrollWidth > a.clientWidth || a.clientHeight && a.scrollHeight > a.clientHeight)
        },
        p = function (a, b) {
            var c = parseInt(a, 10) || 0;
            return b && n(a) && (c = h.getViewport()[b] / 100 * c), Math.ceil(c)
        },
        q = function (a, b) {
            return p(a, b) + "px"
        };
    c.extend(h, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !k,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (i ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: c.noop,
            beforeLoad: c.noop,
            afterLoad: c.noop,
            beforeShow: c.noop,
            afterShow: c.noop,
            beforeChange: c.noop,
            beforeClose: c.noop,
            afterClose: c.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, b) {
            return a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0)) ? (c.isArray(a) || (a = l(a) ? c(a).get() : [a]), c.each(a, function (e, f) {
                var g, i, j, k, n, o, p, q = {};
                "object" === c.type(f) && (f.nodeType && (f = c(f)), l(f) ? (q = {
                    href: f.data("fancybox-href") || f.attr("href"),
                    title: c("<div/>").text(f.data("fancybox-title") || f.attr("title")).html(),
                    isDom: !0,
                    element: f
                }, c.metadata && c.extend(!0, q, f.metadata())) : q = f), g = b.href || q.href || (m(f) ? f : null), i = b.title !== d ? b.title : q.title || "", j = b.content || q.content, k = j ? "html" : b.type || q.type, !k && q.isDom && (k = f.data("fancybox-type"), k || (n = f.prop("class").match(/fancybox\.(\w+)/), k = n ? n[1] : null)), m(g) && (k || (h.isImage(g) ? k = "image" : h.isSWF(g) ? k = "swf" : "#" === g.charAt(0) ? k = "inline" : m(f) && (k = "html", j = f)), "ajax" === k && (o = g.split(/\s+/, 2), g = o.shift(), p = o.shift())), j || ("inline" === k ? g ? j = c(m(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : q.isDom && (j = f) : "html" === k ? j = g : k || g || !q.isDom || (k = "inline", j = f)), c.extend(q, {
                    href: g,
                    type: k,
                    content: j,
                    title: i,
                    selector: p
                }), a[e] = q
            }), h.opts = c.extend(!0, {}, h.defaults, b), b.keys !== d && (h.opts.keys = b.keys ? c.extend({}, h.defaults.keys, b.keys) : !1), h.group = a, h._start(h.opts.index)) : void 0
        },
        cancel: function () {
            var a = h.coming;
            a && !1 === h.trigger("onCancel") || (h.hideLoading(), a && (h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a)))
        },
        close: function (a) {
            h.cancel(), !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && a !== !0 ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut())))
        },
        play: function (a) {
            var b = function () {
                    clearTimeout(h.player.timer)
                },
                c = function () {
                    b(), h.current && h.player.isActive && (h.player.timer = setTimeout(h.next, h.current.playSpeed))
                },
                d = function () {
                    b(), g.unbind(".player"), h.player.isActive = !1, h.trigger("onPlayEnd")
                },
                e = function () {
                    h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, g.bind({
                        "onCancel.player beforeClose.player": d,
                        "onUpdate.player": c,
                        "beforeLoad.player": b
                    }), c(), h.trigger("onPlayStart"))
                };
            a === !0 || !h.player.isActive && a !== !1 ? e() : d()
        },
        next: function (a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
        },
        prev: function (a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.prev), h.jumpto(b.index - 1, a, "prev"))
        },
        jumpto: function (a, b, c) {
            var e = h.current;
            e && (a = p(a), h.direction = b || e.direction[a >= e.index ? "next" : "prev"], h.router = c || "jumpto", e.loop && (0 > a && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (h.cancel(), h._start(a)))
        },
        reposition: function (a, b) {
            var d, e = h.current,
                f = e ? e.wrap : null;
            f && (d = h._getPosition(b), a && "scroll" === a.type ? (delete d.position, f.stop(!0, !0).animate(d, 200)) : (f.css(d), e.pos = c.extend({}, e.dim, d)))
        },
        update: function (a) {
            var b = a && a.originalEvent && a.originalEvent.type,
                c = !b || "orientationchange" === b;
            c && (clearTimeout(j), j = null), h.isOpen && !j && (j = setTimeout(function () {
                var d = h.current;
                d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), j = null)
            }, c && !k ? 0 : 300))
        },
        toggle: function (a) {
            h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a : !h.current.fitToView, k && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update())
        },
        hideLoading: function () {
            g.unbind(".loading"), c("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, b;
            h.hideLoading(), a = c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body"), g.bind("keydown.loading", function (a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel())
            }), h.defaults.fixed || (b = h.getViewport(), a.css({
                position: "absolute",
                top: .5 * b.h + b.y,
                left: .5 * b.w + b.x
            })), h.trigger("onLoading")
        },
        getViewport: function () {
            var b = h.current && h.current.locked || !1,
                c = {
                    x: f.scrollLeft(),
                    y: f.scrollTop()
                };
            return b && b.length ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = k && a.innerWidth ? a.innerWidth : f.width(), c.h = k && a.innerHeight ? a.innerHeight : f.height()), c
        },
        unbindEvents: function () {
            h.wrap && l(h.wrap) && h.wrap.unbind(".fb"), g.unbind(".fb"), f.unbind(".fb")
        },
        bindEvents: function () {
            var a, b = h.current;
            b && (f.bind("orientationchange.fb" + (k ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), h.update), a = b.keys, a && g.bind("keydown.fb", function (e) {
                var f = e.which || e.keyCode,
                    g = e.target || e.srcElement;
                return 27 === f && h.coming ? !1 : void(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || g && (g.type || c(g).is("[contenteditable]")) || c.each(a, function (a, g) {
                    return b.group.length > 1 && g[f] !== d ? (h[a](g[f]), e.preventDefault(), !1) : c.inArray(f, g) > -1 ? (h[a](), e.preventDefault(), !1) : void 0
                }))
            }), c.fn.mousewheel && b.mouseWheel && h.wrap.bind("mousewheel.fb", function (a, d, e, f) {
                for (var g = a.target || null, i = c(g), j = !1; i.length && !(j || i.is(".fancybox-skin") || i.is(".fancybox-wrap"));) j = o(i[0]), i = c(i).parent();
                0 === d || j || h.group.length > 1 && !b.canShrink && (f > 0 || e > 0 ? h.prev(f > 0 ? "down" : "left") : (0 > f || 0 > e) && h.next(0 > f ? "up" : "right"), a.preventDefault())
            }))
        },
        trigger: function (a, b) {
            var d, e = b || h.coming || h.current;
            if (e) {
                if (c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1))), d === !1) return !1;
                e.helpers && c.each(e.helpers, function (b, d) {
                    d && h.helpers[b] && c.isFunction(h.helpers[b][a]) && h.helpers[b][a](c.extend(!0, {}, h.helpers[b].defaults, d), e)
                })
            }
            g.trigger(a)
        },
        isImage: function (a) {
            return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return m(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var b, d, e, f, g, i = {};
            if (a = p(a), b = h.group[a] || null, !b) return !1;
            if (i = c.extend(!0, {}, h.opts, b), f = i.margin, g = i.padding, "number" === c.type(f) && (i.margin = [f, f, f, f]), "number" === c.type(g) && (i.padding = [g, g, g, g]), i.modal && c.extend(!0, i, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), i.autoSize && (i.autoWidth = i.autoHeight = !0), "auto" === i.width && (i.autoWidth = !0), "auto" === i.height && (i.autoHeight = !0), i.group = h.group, i.index = a, h.coming = i, !1 === h.trigger("beforeLoad")) return void(h.coming = null);
            if (e = i.type, d = i.href, !e) return h.coming = null, h.current && h.router && "jumpto" !== h.router ? (h.current.index = a, h[h.router](h.direction)) : !1;
            if (h.isActive = !0, ("image" === e || "swf" === e) && (i.autoHeight = i.autoWidth = !1, i.scrolling = "visible"), "image" === e && (i.aspectRatio = !0), "iframe" === e && k && (i.scrolling = "scroll"), i.wrap = c(i.tpl.wrap).addClass("fancybox-" + (k ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body"), c.extend(i, {
                    skin: c(".fancybox-skin", i.wrap),
                    outer: c(".fancybox-outer", i.wrap),
                    inner: c(".fancybox-inner", i.wrap)
                }), c.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    i.skin.css("padding" + b, q(i.padding[a]))
                }), h.trigger("onReady"), "inline" === e || "html" === e) {
                if (!i.content || !i.content.length) return h._error("content")
            } else if (!d) return h._error("href");
            "image" === e ? h._loadImage() : "ajax" === e ? h._loadAjax() : "iframe" === e ? h._loadIframe() : h._afterLoad()
        },
        _error: function (a) {
            c.extend(h.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: h.coming.tpl.error
            }), h._afterLoad()
        },
        _loadImage: function () {
            var a = h.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null, h.coming.width = this.width / h.opts.pixelRatio, h.coming.height = this.height / h.opts.pixelRatio, h._afterLoad()
            }, a.onerror = function () {
                this.onload = this.onerror = null, h._error("image")
            }, a.src = h.coming.href, a.complete !== !0 && h.showLoading()
        },
        _loadAjax: function () {
            var a = h.coming;
            h.showLoading(), h.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                url: a.href,
                error: function (a, b) {
                    h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading()
                },
                success: function (b, c) {
                    "success" === c && (a.content = b, h._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = h.coming,
                b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", k ? "auto" : a.iframe.scrolling).attr("src", a.href);
            c(a.wrap).bind("onReset", function () {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            }), a.iframe.preload && (h.showLoading(), b.one("load", function () {
                c(this).data("ready", 1), k || c(this).bind("load.fb", h.update), c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), h._afterLoad()
            })), a.content = b.appendTo(a.inner), a.iframe.preload || h._afterLoad()
        },
        _preloadImages: function () {
            var a, b, c = h.group,
                d = h.current,
                e = c.length,
                f = d.preload ? Math.min(d.preload, e - 1) : 0;
            for (b = 1; f >= b; b += 1) a = c[(d.index + b) % e], "image" === a.type && a.href && ((new Image).src = a.href)
        },
        _afterLoad: function () {
            var a, b, d, e, f, g, i = h.coming,
                j = h.current,
                k = "fancybox-placeholder";
            if (h.hideLoading(), i && h.isActive !== !1) {
                if (!1 === h.trigger("afterLoad", i, j)) return i.wrap.stop(!0).trigger("onReset").remove(), void(h.coming = null);
                switch (j && (h.trigger("beforeChange", j), j.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), h.unbindEvents(), a = i, b = i.content, d = i.type, e = i.scrolling, c.extend(h, {
                    wrap: a.wrap,
                    skin: a.skin,
                    outer: a.outer,
                    inner: a.inner,
                    current: a,
                    previous: j
                }), f = a.href, d) {
                case "inline":
                case "ajax":
                case "html":
                    a.selector ? b = c("<div>").html(b).find(a.selector) : l(b) && (b.data(k) || b.data(k, c('<div class="' + k + '"></div>').insertAfter(b).hide()), b = b.show().detach(), a.wrap.bind("onReset", function () {
                        c(this).find(b).length && b.hide().replaceAll(b.data(k)).data(k, !1)
                    }));
                    break;
                case "image":
                    b = a.tpl.image.replace(/\{href\}/g, f);
                    break;
                case "swf":
                    b = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + f + '"></param>', g = "", c.each(a.swf, function (a, c) {
                        b += '<param name="' + a + '" value="' + c + '"></param>', g += " " + a + '="' + c + '"'
                    }), b += '<embed src="' + f + '" type="application/x-shockwave-flash" width="100%" height="100%"' + g + "></embed></object>"
                }
                l(b) && b.parent().is(a.inner) || a.inner.append(b), h.trigger("beforeShow"), a.inner.css("overflow", "yes" === e ? "scroll" : "no" === e ? "hidden" : e), h._setDimension(), h.reposition(), h.isOpen = !1, h.coming = null, h.bindEvents(), h.isOpened ? j.prevMethod && h.transitions[j.prevMethod]() : c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), h.transitions[h.isOpened ? a.nextMethod : a.openMethod](), h._preloadImages()
            }
        },
        _setDimension: function () {
            var a, b, d, e, f, g, i, j, k, l, m, o, r, s, t, u = h.getViewport(),
                v = 0,
                w = !1,
                x = !1,
                y = h.wrap,
                z = h.skin,
                A = h.inner,
                B = h.current,
                C = B.width,
                D = B.height,
                E = B.minWidth,
                F = B.minHeight,
                G = B.maxWidth,
                H = B.maxHeight,
                I = B.scrolling,
                J = B.scrollOutside ? B.scrollbarWidth : 0,
                K = B.margin,
                L = p(K[1] + K[3]),
                M = p(K[0] + K[2]);
            if (y.add(z).add(A).width("auto").height("auto").removeClass("fancybox-tmp"), a = p(z.outerWidth(!0) - z.width()), b = p(z.outerHeight(!0) - z.height()), d = L + a, e = M + b, f = n(C) ? (u.w - d) * p(C) / 100 : C, g = n(D) ? (u.h - e) * p(D) / 100 : D, "iframe" === B.type) {
                if (s = B.content, B.autoHeight && 1 === s.data("ready")) try {
                    s[0].contentWindow.document.location && (A.width(f).height(9999), t = s.contents().find("body"), J && t.css("overflow-x", "hidden"), g = t.outerHeight(!0))
                } catch (N) {}
            } else(B.autoWidth || B.autoHeight) && (A.addClass("fancybox-tmp"), B.autoWidth || A.width(f), B.autoHeight || A.height(g), B.autoWidth && (f = A.width()), B.autoHeight && (g = A.height()), A.removeClass("fancybox-tmp"));
            if (C = p(f), D = p(g), k = f / g, E = p(n(E) ? p(E, "w") - d : E), G = p(n(G) ? p(G, "w") - d : G), F = p(n(F) ? p(F, "h") - e : F), H = p(n(H) ? p(H, "h") - e : H), i = G, j = H, B.fitToView && (G = Math.min(u.w - d, G), H = Math.min(u.h - e, H)), o = u.w - L, r = u.h - M, B.aspectRatio ? (C > G && (C = G, D = p(C / k)), D > H && (D = H, C = p(D * k)), E > C && (C = E, D = p(C / k)), F > D && (D = F, C = p(D * k))) : (C = Math.max(E, Math.min(C, G)), B.autoHeight && "iframe" !== B.type && (A.width(C), D = A.height()), D = Math.max(F, Math.min(D, H))), B.fitToView)
                if (A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height(), B.aspectRatio)
                    for (;
                        (l > o || m > r) && C > E && D > F && !(v++ > 19);) D = Math.max(F, Math.min(H, D - 10)), C = p(D * k), E > C && (C = E, D = p(C / k)), C > G && (C = G, D = p(C / k)), A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height();
                else C = Math.max(E, Math.min(C, C - (l - o))), D = Math.max(F, Math.min(D, D - (m - r)));
            J && "auto" === I && g > D && o > C + a + J && (C += J), A.width(C).height(D), y.width(C + a), l = y.width(), m = y.height(), w = (l > o || m > r) && C > E && D > F, x = B.aspectRatio ? i > C && j > D && f > C && g > D : (i > C || j > D) && (f > C || g > D), c.extend(B, {
                dim: {
                    width: q(l),
                    height: q(m)
                },
                origWidth: f,
                origHeight: g,
                canShrink: w,
                canExpand: x,
                wPadding: a,
                hPadding: b,
                wrapSpace: m - z.outerHeight(!0),
                skinSpace: z.height() - D
            }), !s && B.autoHeight && D > F && H > D && !x && A.height("auto")
        },
        _getPosition: function (a) {
            var b = h.current,
                c = h.getViewport(),
                d = b.margin,
                e = h.wrap.width() + d[1] + d[3],
                f = h.wrap.height() + d[0] + d[2],
                g = {
                    position: "absolute",
                    top: d[0],
                    left: d[3]
                };
            return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? g.position = "fixed" : b.locked || (g.top += c.y, g.left += c.x), g.top = q(Math.max(g.top, g.top + (c.h - f) * b.topRatio)), g.left = q(Math.max(g.left, g.left + (c.w - e) * b.leftRatio)), g
        },
        _afterZoomIn: function () {
            var a = h.current;
            a && (h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened"), h.update(), (a.closeClick || a.nextClick && h.group.length > 1) && h.inner.css("cursor", "pointer").bind("click.fb", function (b) {
                c(b.target).is("a") || c(b.target).parent().is("a") || (b.preventDefault(), h[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function (a) {
                a.preventDefault(), h.close()
            }), a.arrows && h.group.length > 1 && ((a.loop || a.index > 0) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)), h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play(!0)) : h.play(!1))
        },
        _afterZoomOut: function (a) {
            a = a || h.current, c(".fancybox-wrap").trigger("onReset").remove(), c.extend(h, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), h.trigger("afterClose", a)
        }
    }), h.transitions = {
        getOrigPosition: function () {
            var a = h.current,
                b = a.element,
                c = a.orig,
                d = {},
                e = 50,
                f = 50,
                g = a.hPadding,
                i = a.wPadding,
                j = h.getViewport();
            return !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)), l(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = j.y + (j.h - f) * a.topRatio, d.left = j.x + (j.w - e) * a.leftRatio), ("fixed" === h.wrap.css("position") || a.locked) && (d.top -= j.y, d.left -= j.x), d = {
                top: q(d.top - g * a.topRatio),
                left: q(d.left - i * a.leftRatio),
                width: q(e + i),
                height: q(f + g)
            }
        },
        step: function (a, b) {
            var c, d, e, f = b.prop,
                g = h.current,
                i = g.wrapSpace,
                j = g.skinSpace;
            ("width" === f || "height" === f) && (c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), h.isClosing && (c = 1 - c), d = "width" === f ? g.wPadding : g.hPadding, e = a - d, h.skin[f](p("width" === f ? e : e - i * c)), h.inner[f](p("width" === f ? e : e - i * c - j * c)))
        },
        zoomIn: function () {
            var a = h.current,
                b = a.pos,
                d = a.openEffect,
                e = "elastic" === d,
                f = c.extend({
                    opacity: 1
                }, b);
            delete f.position, e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1), h.wrap.css(b).animate(f, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: h._afterZoomIn
            })
        },
        zoomOut: function () {
            var a = h.current,
                b = a.closeEffect,
                c = "elastic" === b,
                d = {
                    opacity: .1
                };
            c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)), h.wrap.animate(d, {
                duration: "none" === b ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: c ? this.step : null,
                complete: h._afterZoomOut
            })
        },
        changeIn: function () {
            var a, b = h.current,
                c = b.nextEffect,
                d = b.pos,
                e = {
                    opacity: 1
                },
                f = h.direction,
                g = 200;
            d.opacity = .1, "elastic" === c && (a = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (d[a] = q(p(d[a]) - g), e[a] = "+=" + g + "px") : (d[a] = q(p(d[a]) + g), e[a] = "-=" + g + "px")), "none" === c ? h._afterZoomIn() : h.wrap.css(d).animate(e, {
                duration: b.nextSpeed,
                easing: b.nextEasing,
                complete: h._afterZoomIn
            })
        },
        changeOut: function () {
            var a = h.previous,
                b = a.prevEffect,
                d = {
                    opacity: .1
                },
                e = h.direction,
                f = 200;
            "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=" + f + "px"), a.wrap.animate(d, {
                duration: "none" === b ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function () {
                    c(this).trigger("onReset").remove()
                }
            })
        }
    }, h.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !k,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: c("html"),
        create: function (a) {
            var b;
            a = c.extend({}, this.defaults, a), this.overlay && this.close(), b = h.coming ? h.coming.parent : a.parent, this.overlay = c('<div class="fancybox-overlay"></div>').appendTo(b && b.lenth ? b : "body"), this.fixed = !1, a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var b = this;
            a = c.extend({}, this.defaults, a), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a), this.fixed || (f.bind("resize.overlay", c.proxy(this.update, this)), this.update()), a.closeClick && this.overlay.bind("click.overlay", function (a) {
                return c(a.target).hasClass("fancybox-overlay") ? (h.isActive ? h.close() : b.close(), !1) : void 0
            }), this.overlay.css(a.css).show()
        },
        close: function () {
            f.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), f.scrollTop(this.scrollV).scrollLeft(this.scrollH)), c(".fancybox-overlay").remove().hide(), c.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var a, c = "100%";
            this.overlay.width(c).height("100%"), i ? (a = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), g.width() > a && (c = g.width())) : g.width() > f.width() && (c = g.width()), this.overlay.width(c).height(g.height())
        },
        onReady: function (a, b) {
            var d = this.overlay;
            c(".fancybox-overlay").stop(!0, !0), d || this.create(a), a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1), a.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            b.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && c("*").filter(function () {
                return "fixed" === c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = f.scrollTop(), this.scrollH = f.scrollLeft(), this.el.addClass("fancybox-lock"), f.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
        }
    }, h.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (a) {
            var b, d, e = h.current,
                f = e.title,
                g = a.type;
            if (c.isFunction(f) && (f = f.call(e.element, e)), m(f) && "" !== c.trim(f)) {
                switch (b = c('<div class="fancybox-title fancybox-title-' + g + '-wrap">' + f + "</div>"), g) {
                case "inside":
                    d = h.skin;
                    break;
                case "outside":
                    d = h.wrap;
                    break;
                case "over":
                    d = h.inner;
                    break;
                default:
                    d = h.skin, b.appendTo("body"), i && b.width(b.width()), b.wrapInner('<span class="child"></span>'), h.current.margin[2] += Math.abs(p(b.css("margin-bottom")))
                }
                b["top" === a.position ? "prependTo" : "appendTo"](d)
            }
        }
    }, c.fn.fancybox = function (a) {
        var b, d = c(this),
            e = this.selector || "",
            f = function (f) {
                var g, i, j = c(this).blur(),
                    k = b;
                f.ctrlKey || f.altKey || f.shiftKey || f.metaKey || j.is(".fancybox-wrap") || (g = a.groupAttr || "data-fancybox-group", i = j.attr(g), i || (g = "rel", i = j.get(0)[g]), i && "" !== i && "nofollow" !== i && (j = e.length ? c(e) : d, j = j.filter("[" + g + '="' + i + '"]'), k = j.index(this)), a.index = k, h.open(j, a) !== !1 && f.preventDefault())
            };
        return a = a || {}, b = a.index || 0, e && a.live !== !1 ? g.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f) : d.unbind("click.fb-start").bind("click.fb-start", f), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, g.ready(function () {
        c.scrollbarWidth === d && (c.scrollbarWidth = function () {
            var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                d = b.innerWidth() - b.height(99).innerWidth();
            return a.remove(), d
        }), c.support.fixedPosition === d && (c.support.fixedPosition = function () {
            var a = c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            return a.remove(), b
        }()), c.extend(h.defaults, {
            scrollbarWidth: c.scrollbarWidth(),
            fixed: c.support.fixedPosition,
            parent: c("body")
        })
    }), g.load(function () {
        var b, d;
        b = c(a).width(), e.addClass("fancybox-lock-test"), d = c(a).width(), e.removeClass("fancybox-lock-test"), c("<style type='text/css'>.fancybox-margin{margin-right:" + (d - b) + "px !important;}</style>").appendTo("head")
    })
}(window, document, jQuery),
function (a) {
    "use strict";
    var b = a.fancybox,
        c = function (b, c, d) {
            return d = d || "", "object" === a.type(d) && (d = a.param(d, !0)), a.each(c, function (a, c) {
                b = b.replace("$" + a, c || "")
            }), d.length && (b += (b.indexOf("?") > 0 ? "&" : "?") + d), b
        };
    b.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "opaque",
                    enablejsapi: 1
                },
                type: "iframe",
                url: "//www.youtube.com/embed/$3"
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: "iframe",
                url: "//player.vimeo.com/video/$1"
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: "yes"
                },
                type: "swf",
                url: function (b, c, d) {
                    return d.swf.flashVars = "playerVars=" + a.param(c, !0), "//www.metacafe.com/fplayer/" + b[1] + "/.swf"
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "swf",
                url: "//www.dailymotion.com/swf/video/$1"
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: "iframe",
                url: "//www.twitvid.com/embed.php?guid=$1"
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: "image",
                url: "//twitpic.com/show/full/$1/"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: "iframe",
                url: function (a) {
                    return "//maps.google." + a[1] + "/" + a[3] + a[4] + "&output=" + (a[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        },
        beforeLoad: function (b, d) {
            var e, f, g, h, i = d.href || "",
                j = !1;
            for (e in b)
                if (b.hasOwnProperty(e) && (f = b[e], g = i.match(f.matcher))) {
                    j = f.type, h = a.extend(!0, {}, f.params, d[e] || (a.isPlainObject(b[e]) ? b[e].params : null)), i = "function" === a.type(f.url) ? f.url.call(this, g, h, d) : c(f.url, g, h);
                    break
                }
            j && (d.href = i, d.type = j, d.autoHeight = !1)
        }
    }
}(jQuery),
function (a) {
    a.InFieldLabels = function (b, c, d) {
        var e = this;
        e.$label = a(b), e.label = b, e.$field = a(c), e.field = c, e.$label.data("InFieldLabels", e), e.showing = !0, e.init = function () {
            var b;
            e.options = a.extend({}, a.InFieldLabels.defaultOptions, d), e.options.className && e.$label.addClass(e.options.className), setTimeout(function () {
                "" !== e.$field.val() ? (e.$label.hide(), e.showing = !1) : (e.$label.show(), e.showing = !0)
            }, 200), e.$field.focus(function () {
                e.fadeOnFocus()
            }).blur(function () {
                e.checkForEmpty(!0)
            }).bind("keydown.infieldlabel", function (a) {
                e.hideOnChange(a)
            }).bind("paste", function () {
                e.setOpacity(0)
            }).change(function () {
                e.checkForEmpty()
            }).bind("onPropertyChange", function () {
                e.checkForEmpty()
            }).bind("keyup.infieldlabel", function () {
                e.checkForEmpty()
            }), e.options.pollDuration > 0 && (b = setInterval(function () {
                "" !== e.$field.val() && (e.$label.hide(), e.showing = !1, clearInterval(b))
            }, e.options.pollDuration))
        }, e.fadeOnFocus = function () {
            e.showing && e.setOpacity(e.options.fadeOpacity)
        }, e.setOpacity = function (a) {
            e.$label.stop().animate({
                opacity: a
            }, e.options.fadeDuration, function () {
                0 == a && e.$label.hide()
            }), e.showing = a > 0
        }, e.checkForEmpty = function (a) {
            "" === e.$field.val() ? (e.prepForShow(), e.setOpacity(a ? 1 : e.options.fadeOpacity)) : e.setOpacity(0)
        }, e.prepForShow = function () {
            e.showing || (e.$label.css({
                opacity: 0
            }).show(), e.$field.bind("keydown.infieldlabel", function (a) {
                e.hideOnChange(a)
            }))
        }, e.hideOnChange = function (a) {
            16 !== a.keyCode && 9 !== a.keyCode && (e.showing && (e.$label.hide(), e.showing = !1), e.$field.unbind("keydown.infieldlabel"))
        }, e.init()
    }, a.InFieldLabels.defaultOptions = {
        fadeOpacity: .5,
        fadeDuration: 300,
        pollDuration: 0,
        enabledInputTypes: ["text", "search", "tel", "url", "email", "password", "number", "textarea"],
        className: !1
    }, a.fn.inFieldLabels = function (b) {
        var c = b && b.enabledInputTypes || a.InFieldLabels.defaultOptions.enabledInputTypes;
        return this.each(function () {
            var d, e, f = a(this).attr("for");
            f && (d = document.getElementById(f), d && (e = a.inArray(d.type, c), (-1 !== e || "TEXTAREA" === d.nodeName) && new a.InFieldLabels(this, d, b)))
        })
    }
}(jQuery),
function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function () {
            if (a(this[0]).is("form")) return this.validate().form();
            var b = !0,
                c = a(this[0].form).validate();
            return this.each(function () {
                b = b && c.element(this)
            }), b
        },
        removeAttrs: function (b) {
            var c = {},
                d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        },
        rules: function (b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings,
                    f = e.rules,
                    g = a.validator.staticRules(d);
                switch (b) {
                case "add":
                    a.extend(g, a.validator.normalizeRule(c)), delete g.messages, f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                    break;
                case "remove":
                    if (!c) return delete f[d.name], g;
                    var h = {};
                    return a.each(c.split(/\s/), function (a, b) {
                        h[b] = g[b], delete g[b]
                    }), h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required, i = a.extend({
                    required: j
                }, i)
            }
            return i
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            return !!a.trim("" + a(b).val())
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"),
                        d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function (b, d) {
                    "string" == typeof d && (d = d.split(/\s/)), a.each(d, function (a, d) {
                        c[d] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (b, c) {
                    d[b] = a.validator.normalizeRule(c)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                var c = this.check(b) !== !1;
                return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
            },
            showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b = 0;
                for (var c in a) b++;
                return b
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c = a(b).attr("type"),
                    d = a(b).val();
                return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d = a(b).rules(),
                    e = !1,
                    f = this.elementValue(b);
                for (var g in d) {
                    var h = {
                        method: g,
                        parameters: d[g]
                    };
                    try {
                        if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, h), !1
                    } catch (i) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + h.method + "' method.", i), i
                    }
                }
                return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b;
                for (a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
            },
            errorsFor: function (b) {
                var c = this.idOrName(b);
                return this.errors().filter(function () {
                    return a(this).attr("for") === c
                })
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c = {},
                d = a(b),
                e = d[0].getAttribute("type");
            for (var f in a.validator.methods) {
                var g;
                "required" === f ? (g = d.get(0).getAttribute(f), "" === g && (g = !0), g = !!g) : g = d.attr(f), /min|max/.test(f) && (null === e || /number|range|text/.test(e)) && (g = Number(g)), g ? c[f] = g : e === f && "range" !== e && (c[f] = !0)
            }
            return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
        },
        dataRules: function (b) {
            var c, d, e = {},
                f = a(b);
            for (c in a.validator.methods) d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            },
            email: function (a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c = 0,
                    d = 0,
                    e = !1;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                }
                return c % 10 === 0
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function (a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                        url: d
                    } || d, e.old === b) return e.valid;
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                return g[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function (d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === !0 || "true" === d;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                        } else {
                            var i = {},
                                j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                        }
                        e.valid = g, f.stopRequest(c, g)
                    }
                }, d)), "pending"
            }
        }
    }), a.format = a.validator.format
}(jQuery),
function (a) {
    var b = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function (a, c, d) {
        var e = a.port;
        "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
    });
    else {
        var c = a.ajax;
        a.ajax = function (d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments), b[f]) : c.apply(this, arguments)
        }
    }
}(jQuery),
function (a) {
    a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}(jQuery),
function (a, b) {
    "use strict";
    var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
    if (!c.TweenLite) {
        var d, e, f, g, h, i = function (a) {
                var b, d = a.split("."),
                    e = c;
                for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                return e
            },
            j = i("com.greensock"),
            k = 1e-10,
            l = function (a) {
                var b, c = [],
                    d = a.length;
                for (b = 0; b !== d; c.push(a[b++]));
                return c
            },
            m = function () {},
            n = function () {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function (c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            o = {},
            p = function (d, e, f, g) {
                this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                var h = [];
                this.check = function (j) {
                    for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                    if (0 === r && f)
                        for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                                return n
                            }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                }, this.check(!0)
            },
            q = a._gsDefine = function (a, b, c, d) {
                return new p(a, b, c, d)
            },
            r = j._class = function (a, b, c) {
                return b = b || function () {}, q(a, [], function () {
                    return b
                }, c), b
            };
        q.globals = c;
        var s = [0, 0, 1, 1],
            t = [],
            u = r("easing.Ease", function (a, b, c, d) {
                this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
            }, !0),
            v = u.map = {},
            w = u.register = function (a, b, c, d) {
                for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                    for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
            };
        for (f = u.prototype, f._calcEnd = !1, f.getRatio = function (a) {
                if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                var b = this._type,
                    c = this._power,
                    d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
            }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
        v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
        var x = r("events.EventDispatcher", function (a) {
            this._listeners = {}, this._eventTarget = a || this
        });
        f = x.prototype, f.addEventListener = function (a, b, c, d, e) {
            e = e || 0;
            var f, i, j = this._listeners[a],
                k = 0;
            for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
            j.splice(k, 0, {
                c: b,
                s: c,
                up: d,
                pr: e
            }), this !== g || h || g.wake()
        }, f.removeEventListener = function (a, b) {
            var c, d = this._listeners[a];
            if (d)
                for (c = d.length; --c > -1;)
                    if (d[c].c === b) return void d.splice(c, 1)
        }, f.dispatchEvent = function (a) {
            var b, c, d, e = this._listeners[a];
            if (e)
                for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                    type: a,
                    target: c
                }) : d.c.call(d.s || c))
        };
        var y = a.requestAnimationFrame,
            z = a.cancelAnimationFrame,
            A = Date.now || function () {
                return (new Date).getTime()
            },
            B = A();
        for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
        r("Ticker", function (a, b) {
            var c, d, e, f, i, j = this,
                l = A(),
                n = b !== !1 && y,
                o = 500,
                p = 33,
                q = "tick",
                r = function (a) {
                    var b, g, h = A() - B;
                    h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
                };
            x.call(j), j.time = j.frame = 0, j.tick = function () {
                r(!0)
            }, j.lagSmoothing = function (a, b) {
                o = a || 1 / k, p = Math.min(b, o, 0)
            }, j.sleep = function () {
                null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
            }, j.wake = function () {
                null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function (a) {
                    return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                }, j === g && (h = !0), r(2)
            }, j.fps = function (a) {
                return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
            }, j.useRAF = function (a) {
                return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
            }, j.fps(a), setTimeout(function () {
                n && (!e || 5 > j.frame) && j.useRAF(!1)
            }, 1500)
        }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
        var C = r("core.Animation", function (a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, R) {
                h || g.wake();
                var c = this.vars.useFrames ? Q : R;
                c.add(this, c._time), this.vars.paused && this.paused(!0)
            }
        });
        g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
        var D = function () {
            h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
        };
        D(), f.play = function (a, b) {
            return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
        }, f.pause = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!0)
        }, f.resume = function (a, b) {
            return null != a && this.seek(a, b), this.paused(!1)
        }, f.seek = function (a, b) {
            return this.totalTime(Number(a), b !== !1)
        }, f.restart = function (a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }, f.reverse = function (a, b) {
            return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        }, f.render = function () {}, f.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, f.isActive = function () {
            var a, b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        }, f._enabled = function (a, b) {
            return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        }, f._kill = function () {
            return this._enabled(!1, !1)
        }, f.kill = function (a, b) {
            return this._kill(a, b), this
        }, f._uncache = function (a) {
            for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
            return this
        }, f._swapSelfInParams = function (a) {
            for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
            return c
        }, f.eventCallback = function (a, b, c, d) {
            if ("on" === (a || "").substr(0, 2)) {
                var e = this.vars;
                if (1 === arguments.length) return e[a];
                null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        }, f.delay = function (a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        }, f.duration = function (a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, f.totalDuration = function (a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        }, f.time = function (a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }, f.totalTime = function (a, b, c) {
            if (h || g.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var d = this._totalDuration,
                        e = this._timeline;
                    if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                        for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && S())
            }
            return this
        }, f.progress = f.totalProgress = function (a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }, f.startTime = function (a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        }, f.endTime = function (a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }, f.timeScale = function (a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    c = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = c - (c - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        }, f.reversed = function (a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, f.paused = function (a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                h || a || g.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    d = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        var E = r("core.SimpleTimeline", function (a) {
            C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function (a, b) {
            var c, d;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (d = a._startTime; c && c._startTime > d;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._recent = a, this._timeline && this._uncache(!0), this
        }, f._remove = function (a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, f.render = function (a, b, c) {
            var d, e = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
        }, f.rawTime = function () {
            return h || g.wake(), this._totalTime
        };
        var F = r("TweenLite", function (b, c, d) {
                if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                    i = this.vars.overwrite;
                if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                    for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1), 1 === i && this._siblings[e].length > 1 && V(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                else this._propLookup = {}, this._siblings = T(b, this, !1), 1 === i && this._siblings.length > 1 && V(b, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
            }, !0),
            G = function (b) {
                return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
            },
            H = function (a, b) {
                var c, d = {};
                for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                a.css = d
            };
        f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.15.1", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = !0, F.lagSmoothing = function (a, b) {
            g.lagSmoothing(a, b)
        }, F.selector = a.$ || a.jQuery || function (b) {
            var c = a.$ || a.jQuery;
            return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        };
        var I = [],
            J = {},
            K = F._internals = {
                isArray: n,
                isSelector: G,
                lazyTweens: I
            },
            L = F._plugins = {},
            M = K.tweenLookup = {},
            N = 0,
            O = K.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1
            },
            P = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            Q = C._rootFramesTimeline = new E,
            R = C._rootTimeline = new E,
            S = K.lazyRender = function () {
                var a, b = I.length;
                for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                I.length = 0
            };
        R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(S, 1), C._updateRoot = F.render = function () {
            var a, b, c;
            if (I.length && S(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && S(), !(g.frame % 120)) {
                for (c in M) {
                    for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete M[c]
                }
                if (c = R._first, (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || g.sleep()
                }
            }
        }, g.addEventListener("tick", C._updateRoot);
        var T = function (a, b, c) {
                var d, e, f = a._gsTweenID;
                if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                        target: a,
                        tweens: []
                    }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                    for (; --e > -1;) d[e] === b && d.splice(e, 1);
                return M[f].tweens
            },
            U = function (a, b, c, d) {
                var e, f, g = a.vars.onOverwrite;
                return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
            },
            V = function (a, b, c, d, e) {
                var f, g, h, i;
                if (1 === d || d >= 4) {
                    for (i = e.length, f = 0; i > f; f++)
                        if ((h = e[f]) !== b) h._gc || U(h, b) && h._enabled(!1, !1) && (g = !0);
                        else if (5 === d) break;
                    return g
                }
                var j, l = b._startTime + k,
                    m = [],
                    n = 0,
                    o = 0 === b._duration;
                for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || W(b, 0, o), 0 === W(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                for (f = n; --f > -1;)
                    if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                        if (2 !== d && !U(h, b)) continue;
                        h._enabled(!1, !1) && (g = !0)
                    }
                return g
            },
            W = function (a, b, c) {
                for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                    if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                    d = d._timeline
                }
                return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
            };
        f._init = function () {
            var a, b, c, d, e, f = this.vars,
                g = this._overwrittenProps,
                h = this._duration,
                i = !!f.immediateRender,
                j = f.ease;
            if (f.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                for (d in f.startAt) e[d] = f.startAt[d];
                if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== h) return
            } else if (f.runBackwards && 0 !== h)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (i = !1), c = {};
                    for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                    if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, g);
            if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = f.onUpdate, this._initted = !0
        }, f._initProps = function (b, c, d, e) {
            var f, g, h, i, j, k;
            if (null == b) return !1;
            J[b._gsTweenID] && S(), this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
            for (f in this.vars) {
                if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                    for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: i,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: f,
                            pg: !0,
                            pr: i._priority
                        }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                    (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = c[f] = j = {
                    _next: this._firstPT,
                    t: b,
                    p: f,
                    f: "function" == typeof b[f],
                    n: f,
                    pg: !1,
                    pr: 0
                }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                j && j._next && (j._next._prev = j)
            }
            return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && V(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
        }, f.render = function (a, b, c) {
            var d, e, f, g, h = this._time,
                i = this._duration,
                j = this._rawPrevTime;
            if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
            else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                var l = a / i,
                    m = this._easeType,
                    n = this._easePower;
                (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
            } else this.ratio = this._ease.getRatio(a / i);
            if (this._time !== h || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                    this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
            }
        }, f._kill = function (a, b, c) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
            var d, e, f, g, h, i, j, k, l;
            if ((n(b) || G(b)) && "number" != typeof b[0])
                for (d = b.length; --d > -1;) this._kill(a, b[d]) && (i = !0);
            else {
                if (this._targets) {
                    for (d = this._targets.length; --d > -1;)
                        if (b === this._targets[d]) {
                            h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                            break
                        }
                } else {
                    if (b !== this.target) return !1;
                    h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                }
                if (h) {
                    if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (f in j) h[f] && (l || (l = []), l.push(f));
                        if (!U(this, c, b, l)) return !1
                    }
                    for (f in j)(g = h[f]) && (g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return i
        }, f.invalidate = function () {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
        }, f._enabled = function (a, b) {
            if (h || g.wake(), a && this._gc) {
                var c, d = this._targets;
                if (d)
                    for (c = d.length; --c > -1;) this._siblings[c] = T(d[c], this, !0);
                else this._siblings = T(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        }, F.to = function (a, b, c) {
            return new F(a, b, c)
        }, F.from = function (a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
        }, F.fromTo = function (a, b, c, d) {
            return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
        }, F.delayedCall = function (a, b, c, d, e) {
            return new F(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: d,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: d,
                immediateRender: !1,
                lazy: !1,
                useFrames: e,
                overwrite: 0
            })
        }, F.set = function (a, b) {
            return new F(a, 0, b)
        }, F.getTweensOf = function (a, b) {
            if (null == a) return [];
            a = "string" != typeof a ? a : F.selector(a) || a;
            var c, d, e, f;
            if ((n(a) || G(a)) && "number" != typeof a[0]) {
                for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                for (c = d.length; --c > -1;)
                    for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
            } else
                for (d = T(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
            return d
        }, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
        };
        var X = r("plugins.TweenPlugin", function (a, b) {
            this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = X.prototype
        }, !0);
        if (f = X.prototype, X.version = "1.10.1", X.API = 2, f._firstPT = null, f._addTween = function (a, b, c, d, e, f) {
                var g, h;
                return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: g,
                    f: "function" == typeof a[b],
                    n: e || b,
                    r: f
                }, h._next && (h._next._prev = h), h) : void 0
            }, f.setRatio = function (a) {
                for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, f._kill = function (a) {
                var b, c = this._overwriteProps,
                    d = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                return !1
            }, f._roundProps = function (a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, F._onPluginEvent = function (a, b) {
                var c, d, e, f, g, h = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; h;) {
                        for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                        (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                    }
                    h = b._firstPT = e
                }
                for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                return c
            }, X.activate = function (a) {
                for (var b = a.length; --b > -1;) a[b].API === X.API && (L[(new a[b])._propName] = a[b]);
                return !0
            }, q.plugin = function (a) {
                if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    e = a.overwriteProps,
                    f = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
                        X.call(this, c, d), this._overwriteProps = e || []
                    }, a.global === !0),
                    h = g.prototype = new X(c);
                h.constructor = g, g.API = a.API;
                for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                return g.version = a.version, X.activate([g]), g
            }, d = a._gsQueue) {
            for (e = 0; d.length > e; e++) d[e]();
            for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
        }
        h = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
function () {
    var a = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        },
        b = [].slice;
    ! function (a, b) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (c) {
            return b(c, a)
        }) : b(a.jQuery, a)
    }(this, function (c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
            horizontal: {},
            vertical: {}
        }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function () {
            function a(a) {
                var b = this;
                this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, this.element[j] = this.id, k[this.id] = this, a.bind(p, function () {
                    var a;
                    return b.didScroll || l ? void 0 : (b.didScroll = !0, a = function () {
                        return b.doScroll(), b.didScroll = !1
                    }, d.setTimeout(a, c[t].settings.scrollThrottle))
                }), a.bind(o, function () {
                    var a;
                    return b.didResize ? void 0 : (b.didResize = !0, a = function () {
                        return c[t]("refresh"), b.didResize = !1
                    }, d.setTimeout(a, c[t].settings.resizeThrottle))
                })
            }
            return a.prototype.doScroll = function () {
                var a, b = this;
                return a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function (a, d) {
                    var e, f, g;
                    return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function (a, b) {
                        var c, e;
                        return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                    }), g.sort(function (a, b) {
                        return a.offset - b.offset
                    }), f || g.reverse(), c.each(g, function (a, b) {
                        return b.options.continuous || a === g.length - 1 ? b.trigger([e]) : void 0
                    })
                }), this.oldScroll = {
                    x: a.horizontal.newScroll,
                    y: a.vertical.newScroll
                }
            }, a.prototype.refresh = function () {
                var a, b, d, e = this;
                return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                    horizontal: {
                        contextOffset: d ? 0 : b.left,
                        contextScroll: d ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: d ? 0 : b.top,
                        contextScroll: d ? 0 : this.oldScroll.y,
                        contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, c.each(a, function (a, b) {
                    return c.each(e.waypoints[a], function (a, d) {
                        var e, f, g, h, i;
                        return e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, d.options.onlyOnScroll && null != g || !d.enabled ? void 0 : null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                    })
                })
            }, a.prototype.checkEmpty = function () {
                return c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([o, p].join(" ")), delete k[this.id]) : void 0
            }, a
        }(), g = function () {
            function a(a, b, d) {
                var e, f;
                d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function () {
                    var a;
                    return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = this.element[r]) ? f : [], e.push(this.id), this.element[r] = e
            }
            return a.prototype.trigger = function (a) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, a.prototype.disable = function () {
                return this.enabled = !1
            }, a.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, a.prototype.destroy = function () {
                return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, a.getWaypointsByElement = function (a) {
                var b, d;
                return (d = a[r]) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function (a) {
                    return b[a]
                })) : []
            }, a
        }(), n = {
            init: function (a, b) {
                var d;
                return null == b && (b = {}), null == (d = b.handler) && (b.handler = a), this.each(function () {
                    var a, d, e, h;
                    return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e[0][j]], d || (d = new f(e)), new g(a, d, b)
                }), c[t]("refresh"), this
            },
            disable: function () {
                return n._invoke.call(this, "disable")
            },
            enable: function () {
                return n._invoke.call(this, "enable")
            },
            destroy: function () {
                return n._invoke.call(this, "destroy")
            },
            prev: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    return b > 0 ? a.push(c[b - 1]) : void 0
                })
            },
            next: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    return b < c.length - 1 ? a.push(c[b + 1]) : void 0
                })
            },
            _traverse: function (a, b, e) {
                var f, g;
                return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function () {
                    var b;
                    return b = c.inArray(this, g[a]), e(f, b, g[a])
                }), this.pushStack(f)
            },
            _invoke: function (a) {
                return this.each(function () {
                    var b;
                    return b = g.getWaypointsByElement(this), c.each(b, function (b, c) {
                        return c[a](), !0
                    })
                }), this
            }
        }, c.fn[s] = function () {
            var a, d;
            return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : c.error(d ? "The " + d + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
        }, c.fn[s].defaults = {
            context: d,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, m = {
            refresh: function () {
                return c.each(k, function (a, b) {
                    return b.refresh()
                })
            },
            viewportHeight: function () {
                var a;
                return null != (a = d.innerHeight) ? a : e.height()
            },
            aggregate: function (a) {
                var b, d, e;
                return b = h, a && (b = null != (e = k[c(a)[0][j]]) ? e.waypoints : void 0), b ? (d = {
                    horizontal: [],
                    vertical: []
                }, c.each(d, function (a, e) {
                    return c.each(b[a], function (a, b) {
                        return e.push(b)
                    }), e.sort(function (a, b) {
                        return a.offset - b.offset
                    }), d[a] = c.map(e, function (a) {
                        return a.element
                    }), d[a] = c.unique(d[a])
                }), d) : []
            },
            above: function (a) {
                return null == a && (a = d), m._filter(a, "vertical", function (a, b) {
                    return b.offset <= a.oldScroll.y
                })
            },
            below: function (a) {
                return null == a && (a = d), m._filter(a, "vertical", function (a, b) {
                    return b.offset > a.oldScroll.y
                })
            },
            left: function (a) {
                return null == a && (a = d), m._filter(a, "horizontal", function (a, b) {
                    return b.offset <= a.oldScroll.x
                })
            },
            right: function (a) {
                return null == a && (a = d), m._filter(a, "horizontal", function (a, b) {
                    return b.offset > a.oldScroll.x
                })
            },
            enable: function () {
                return m._invoke("enable")
            },
            disable: function () {
                return m._invoke("disable")
            },
            destroy: function () {
                return m._invoke("destroy")
            },
            extendFn: function (a, b) {
                return n[a] = b
            },
            _invoke: function (a) {
                var b;
                return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function (b, c) {
                    return c[a](), !0
                })
            },
            _filter: function (a, b, d) {
                var e, f;
                return (e = k[c(a)[0][j]]) ? (f = [], c.each(e.waypoints[b], function (a, b) {
                    return d(e, b) ? f.push(b) : void 0
                }), f.sort(function (a, b) {
                    return a.offset - b.offset
                }), c.map(f, function (a) {
                    return a.element
                })) : []
            }
        }, c[t] = function () {
            var a, c;
            return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
        }, c[t].settings = {
            resizeThrottle: 100,
            scrollThrottle: 10
        }, e.load(function () {
            return c[t]("refresh")
        })
    })
}.call(this),
    function () {
        ! function (a, b) {
            return "function" == typeof define && define.amd ? define(["jquery", "waypoints"], b) : b(a.jQuery)
        }(this, function (a) {
            var b, c;
            return b = {
                wrapper: '<div class="sticky-wrapper" />',
                stuckClass: "stuck"
            }, c = function (a, b) {
                return a.wrap(b.wrapper), a.parent()
            }, a.waypoints("extendFn", "sticky", function (d) {
                var e, f, g;
                return f = a.extend({}, a.fn.waypoint.defaults, b, d), e = c(this, f), g = f.handler, f.handler = function (b) {
                    var c, d;
                    return c = a(this).children(":first"), d = "down" === b || "right" === b, c.toggleClass(f.stuckClass, d), e.height(d ? c.outerHeight() : ""), null != g ? g.call(this, b) : void 0
                }, e.waypoint(f), this.data("stuckClass", f.stuckClass)
            }), a.waypoints("extendFn", "unsticky", function () {
                return this.parent().waypoint("destroy"), this.unwrap(), this.removeClass(this.data("stuckClass"))
            })
        })
    }.call(this), jQuery(function (a) {
        var b = a(document),
            c = a(window),
            d = (a("html"), a("body")),
            e = d.find("#smart_ctas"),
            f = d.find("#fixed-ad-smart-cta"),
            g = d.find("#fixed-ad-bug.smart-cta-ad-bug"),
            h = a("#fixed-ad, #fixed-ad-mobile"),
            i = a(".share-widget-container-fixed"),
            j = !0,
            k = !0,
            l = !1,
            m = new FullscreenVideo({
                playerId: "ad",
                modal: a(".blog .sticky-ad-modal")
            }),
            n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            o = n || c.width() < 768,
            p = a("#tshirt_modal"),
            q = a("#tshirt_tweet"),
            r = a("#tshirt_follow"),
            s = !1,
            t = d.hasClass("smart_cta_banner"),
            u = a(".entry p img, .entry a img"),
            v = function () {
                u.parent().not(".tiled-gallery-item a").addClass("anchorImage")
            },
            w = function () {
                for (var a = {}, b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].split("=");
                    if ("undefined" == typeof a[e[0]]) a[e[0]] = e[1];
                    else if ("string" == typeof a[e[0]]) {
                        var f = [a[e[0]], e[1]];
                        a[e[0]] = f
                    } else a[e[0]].push(e[1])
                }
                return a
            }(),
            x = function () {
                var b = a("*[data-bg]"),
                    c = a("img"),
                    e = d.data("image-ver");
                b.each(function () {
                    var b = a(this),
                        c = b.data("bg");
                    c.indexOf("?") >= 0 ? b.data("bg", b.data("bg") + "&ver=" + e) : b.data("bg", b.data("bg") + "?ver=" + e)
                }), c.each(function () {
                    var b = a(this),
                        c = b.attr("src");
                    c.indexOf("?") >= 0 ? b.attr("src", c + "&ver=" + e) : b.attr("src", c + "?ver=" + e)
                })
            },
            y = function () {
                o ? (g.removeClass("on"), f.addClass("on")) : (g.addClass("on"), f.removeClass("on"))
            },
            z = function () {
                a(".sticky-play").on("click touchend", function () {
                    return m.openVideoModal(), !1
                }), a(".sticky-ad-modal-close").on("click touchend", function () {
                    return m.closeVideoModal(), !1
                }), c.on("keyup", function (a) {
                    27 == a.keyCode && m.modalVideoOpen && m.closeVideoModal()
                }), a(".signup-btn").on("click touchend", function (b) {
                    b.preventDefault();
                    var c = a(this);
                    c.hasClass("enterprise") ? window.open(themeDir + "/redirect.php?redirect_url=" + a(this).data("url")) : (a(".signup-modal").fadeIn(200, function () {
                        a(this).find("#signup_name").focus()
                    }), a(".modal-overlay").fadeIn(200))
                }), a("li.signup a").on("click touchend", function (b) {
                    b.preventDefault(), a(".subscribe-modal").fadeIn(200, function () {
                        a(this).find('input[type="text"]').focus()
                    }), a(".modal-overlay").fadeIn(200)
                }), a(".modal-overlay").on("click touchend", function () {
                    a(".subscribe-modal").fadeOut(200), a(".subscribe-modal-confirm").fadeOut(200), a(".signup-modal").fadeOut(200), a(".modal-overlay").fadeOut(200)
                }), a(".subscribe-modal-close").click(function () {
                    a(".subscribe-modal").fadeOut(200), a(".subscribe-modal-confirm").fadeOut(200), a(".signup-modal").fadeOut(200), a(".modal-overlay").fadeOut(200)
                }), a('a:not(".no-redirect")[target="_blank"]').each(function () {
                    var b = a(this),
                        c = b.attr("href");
                    b.removeAttr("target"), b.click(function (a) {
                        a.preventDefault(), window.open(themeDir + "/redirect.php?redirect_url=" + c)
                    })
                }), a(".slide-ad .close").on("click touchend", function (b) {
                    b.preventDefault(), a.cookie("invblog-user-subscribed", 1, {
                        expires: 7300,
                        path: "/"
                    }), a.cookie("invblog-tshirt-closed", 1, {
                        expires: 7300,
                        path: "/"
                    }), j = !1, k = !1, a(this).parent().removeClass("on"), a(".share-wrapper #signup_email").removeClass("error"), a(".share-wrapper p.button input").removeClass("on")
                }), a("#fixed-ad .close").add("#fixed-ad-smart-cta .close").on("click touchend", function (b) {
                    b.preventDefault(), a.cookie("invblog-hide-fixed-ad", 1, {
                        expires: 1,
                        path: "/"
                    }), a("#fixed-ad").add("#fixed-ad-mobile").removeClass("on"), setTimeout(function () {
                        a("#fixed-ad-bug").addClass("on")
                    }, 200)
                }), a("#fixed-ad-bug").on("click touchend", function (b) {
                    b.preventDefault(), a.cookie("invblog-hide-fixed-ad", 0, {
                        expires: 1,
                        path: "/"
                    }), a(this).removeClass("on"), setTimeout(function () {
                        a("#fixed-ad").add("#fixed-ad-mobile").add("#fixed-ad-smart-cta").addClass("on")
                    }, 200)
                }), b.on("addedContent", function () {
                    v(), setTimeout(function () {
                        a.waypoints("refresh"), a(".preview-bg[data-bg]").each(function () {
                            var b = a(this),
                                c = b.data("bg"),
                                e = d.data("image-ver");
                            c.indexOf("ver=" + e) < 0 && (c.indexOf("?") >= 0 ? b.data("bg", b.data("bg") + "&ver=" + e) : b.data("bg", b.data("bg") + "?ver=" + e)), b.backstretch(b.data("bg"), {
                                centeredX: !0,
                                centeredY: !0,
                                fade: 200
                            })
                        }).promise().done(function () {
                            a(".add-scroll-content").masonry(), a(".content-link").fadeIn(200)
                        })
                    }, 500)
                }), c.resize(function () {
                    var b = a(".hero-bg").data("backstretch"),
                        d = a("[data-bg]"),
                        e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || c.width() < 768;
                    t || (e ? a("#fixed-ad-mobile").show() : a("#fixed-ad").show()), b && b.resize(), d.each(function () {
                        var b = a(this),
                            c = b.data("backstretch");
                        c && c.resize()
                    }), y()
                });
                var e = function (a, b, c, d, e) {
                        TweenLite.to(a, b, {
                            force3D: !0,
                            y: c,
                            scale: d,
                            ease: Cubic.easeOut,
                            opacity: e
                        })
                    },
                    f = a(".post-hero .header-content .wrapper"),
                    g = function (b) {
                        b <= a(".post-hero").height() && c.width() > 768 && (e(a(".post-hero .backstretch"), 0, b / 3 * -1, b / 2e3 + 1, 1 - b / 400), f.css({
                            transform: "translateY(" + b / 3 * -1 + "px)",
                            opacity: 1 - b / 400
                        }))
                    };
                g(c.scrollTop()), a(".post-hero").imagesLoaded(function (a) {
                    a.hasAnyBroken || g(c.scrollTop())
                }), c.on("scroll", function () {
                    g(a(this).scrollTop())
                }), a("#signup_form").each(function () {
                    var b = a(this);
                    a(this).validate({
                        rules: {
                            name: {
                                required: !0
                            },
                            email: {
                                required: !0,
                                email: !0
                            },
                            password: {
                                required: !0,
                                minlength: 3
                            }
                        },
                        submitHandler: function (c) {
                            var d = b.find('[name="email"]'),
                                e = d.val();
                            b.trigger("binnacle"), a.post("https://www.invisionapp.com/api/validateEmailBV", {
                                email: e
                            }, function (a) {
                                "invalid" != a.status ? c.submit() : d.after('<p class="bv-error">Please enter an active email.</p>')
                            })
                        }
                    });
                    var c = function () {
                        function b(a) {
                            for (var b = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", d = 0; a > d; d++) b += c.charAt(Math.floor(Math.random() * c.length));
                            return b
                        }
                        var c;
                        return "undefined" != typeof a.cookie("FORM_TOKEN") ? a.cookie("FORM_TOKEN") : (c = b(16), a.cookie("FORM_TOKEN", c, {
                            expires: 1 / 48,
                            path: "/",
                            domain: ".invisionapp.com"
                        }), c)
                    }();
                    a(this).find("[name='xsrfFormToken']").val(c)
                }), b.on("mouseleave", function () {
                    !j || Modernizr.touch || s || t || a.fancybox({
                        padding: 0,
                        autoDimensions: !0,
                        href: "#tshirt_modal",
                        afterShow: function () {
                            s = !0
                        },
                        afterClose: function () {
                            s = !1, a.cookie("invblog-tshirt-closed", 1, {
                                expires: 7300,
                                path: "/"
                            }), j = !1
                        }
                    })
                }), a(".tshirt-modal-close").on("click touchend", function (b) {
                    b.preventDefault(), a.fancybox.close()
                }), p.find("form.tshirt_form").validate({
                    rules: {
                        tshirt_email: {
                            required: !0,
                            email: !0
                        }
                    },
                    submitHandler: function (b) {
                        var c = a("#tshirt_email"),
                            d = (p.find("div.subscribe"), a(b));
                        try {
                            ga("send", "event", "Redeemed Offer", "Tshirt Entry", "Popup"), ga("rollupTracker.send", "event", "Redeemed Offer", "Tshirt Entry", "Popup")
                        } catch (e) {}
                        try {
                            analytics.identify({
                                email: c.val()
                            }), analytics.track("Tshirt", {
                                email: c.val(),
                                source: "tshirt_modal"
                            })
                        } catch (e) {}
                        a.post(d.data("url"), {
                            email: c.val(),
                            listSource: "biscuit-tshirt",
                            hs_context: JSON.stringify({
                                hutk: a.cookie("hubspotutk"),
                                pageUrl: window.location.href,
                                pageName: document.title
                            })
                        }, function () {
                            a.fancybox({
                                content: q,
                                padding: 0,
                                autoDimensions: !0,
                                afterShow: function () {
                                    a(".tshirt_tweet_link, .opt-out a").on("click", function (b) {
                                        b.preventDefault(), a.fancybox({
                                            content: r,
                                            padding: 0,
                                            autoDimensions: !0,
                                            afterShow: function () {
                                                a(".global-share a, .global-share").on("click touchend", function (b) {
                                                    b.preventDefault();
                                                    var c = a(this);
                                                    a.fancybox.close(), A(c.attr("href"), "Follow about InVision", c.data("width"), c.data("height"))
                                                })
                                            },
                                            afterClose: function () {
                                                a.cookie("invblog-tshirt-closed", 1, {
                                                    expires: 7300,
                                                    path: "/"
                                                }), j = !1
                                            }
                                        }), a(this).hasClass("tshirt_tweet_link") && A(a(".tshirt_tweet_link").attr("href"), "Tweet about InVision", 800, 400)
                                    })
                                },
                                afterClose: function () {
                                    a.cookie("invblog-tshirt-closed", 1, {
                                        expires: 7300,
                                        path: "/"
                                    }), j = !1
                                }
                            })
                        })
                    }
                })
            },
            A = function (a, b, c, d) {
                var e, f, g, h, i, j = void 0 !== window.screenLeft ? window.screenLeft : screen.left,
                    k = void 0 !== window.screenTop ? window.screenTop : screen.top;
                h = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, i = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, e = h / 2 - c / 2 + j, f = i / 2 - d / 2 + k, g = window.open(a, b, "scrollbars=yes, width=" + c + ", height=" + d + ", top=" + f + ", left=" + e), window.focus && g.focus()
            },
            B = function () {
                if (a("[data-bg]").each(function () {
                        var b = a(this);
                        b.on("backstretch.show", function () {
                            b.parent().siblings(".content-link").fadeIn(200)
                        }), b.backstretch(b.data("bg"), {
                            centeredX: !0,
                            centeredY: !0,
                            fade: 200
                        })
                    }), a(".hero-slide").length) {
                    var b = [],
                        c = 0,
                        d = [];
                    a(".hero-slide").each(function () {
                        var e = a(this);
                        b[c] = e.data("backstretch-bg"), d[c] = {
                            link: e.data("link"),
                            categorySlug: e.data("category-slug"),
                            title: e.data("title")
                        }, c++
                    }), b.length > 1 && (a(".hero-bg").append('<ul class="bs-bullets"></ul>'), b.forEach(function () {
                        a(".bs-bullets").append("<li></li>")
                    }), a(".bs-bullets li").on("click", function () {
                        a(this).parents(".hero-bg").backstretch("show", a(this).index())
                    })), a(".hero-bg").on("backstretch.before", function (b, c, e) {
                        a(".hero .content h1").html(d[e].title), a('.hero .content a:not(".category-link")').attr("href", d[e].link), a(".hero .content a.category-link").attr("href", "/category/" + d[e].categorySlug), a(b.currentTarget).find(".bs-bullets>li.active").removeClass("active"), a(b.currentTarget).find(".bs-bullets>li:eq(" + e + ")").addClass("active")
                    }), a(".hero-bg").backstretch(b, {
                        fade: 200
                    })
                }
            },
            C = function () {
                "undefined" != typeof w.utm_source && "" !== w.utm_source && a.cookie("source", w.utm_source, {
                    expires: 365,
                    path: "/",
                    domain: ".invisionapp.com"
                }), "undefined" != typeof w.utm_medium && "email" === w.utm_medium && a.cookie("invblog-user-subscribed", 1, {
                    expires: 7300,
                    path: "/"
                }), l ? (a(".static-ad.enterprise:first").show().css({
                    display: "inline-block"
                }), a(".static-ad.enterprise:not(:first)").hide(), a(".static-ad:not('.enterprise')").hide(), a(".fixed-ad-content:not('.enterprise')").hide(), a(".fixed-ad-content.enterprise").show(), a(".footer-signup .inside:not('.enterprise')").hide(), a(".footer-signup .inside.enterprise").show()) : (a(".static-ad:first").show().css({
                    display: "inline-block"
                }), a(".static-ad:not(:first)").hide(), a(".static-ad.enterprise").hide(), a(".fixed-ad-content:not('.enterprise')").show(), a(".fixed-ad-content.enterprise").hide(), a(".footer-signup .inside:not('.enterprise')").show(), a(".footer-signup .inside.enterprise").hide()), l ? a(".invision-user").show() : 1 == a.cookie("invblog-user-subscribed") ? a(".invision-subscriber").show() : a(".invision-anonymous").show()
            },
            D = function () {
                function a(a) {
                    document.title = a
                }
                var d = b.find("title").text(),
                    e = "Don't forget to read this...";
                c.on("focus", function () {
                    a(d), setTimeout(function () {
                        a("."), a(d)
                    }, 1e3)
                }).on("blur", function () {
                    a(e)
                })
            },
            E = function () {
                a(".invision-share-banner a:not(.b-facebook)").on("click", function (b) {
                    b.preventDefault(), b.stopPropagation(), A(a(this).attr("href"), "Share InVision News", 850, 500)
                }), a(".invision-share-banner a.b-facebook").on("click", function (b) {
                    b.preventDefault();
                    var c = a(this);
                    FB.ui({
                        method: "share",
                        href: c.data("url")
                    }, function () {})
                })
            },
            F = function (b) {
                if (!a(b).length) return !1;
                var d = a(b).offset().top - (c.scrollTop() + c.height()),
                    e = a(b).offset().top + a(b).height() - c.scrollTop();
                return (e > 0 || d > 0) && 0 > d
            },
            G = function () {
                var g = a(".share-wrapper"),
                    h = a(".share-widget-container-fixed"),
                    i = a("#fixed-ad, #fixed-ad-mobile, #fixed-ad-smart-cta"),
                    j = a("#fixed-ad-bug"),
                    l = 100,
                    m = a(".slide-ad.two");
                if (a("#feature-share a").on("click", function (b) {
                        b.preventDefault(), b.stopPropagation(), A(a(this).attr("href"), "Share InVision News", 800, 400)
                    }), g.length) {
                    var n = {
                            header: {
                                scrollHandler: function (a, b) {
                                    b > l && !F(e) ? n.header.show() : n.header.hide(b, l)
                                },
                                show: function () {
                                    1 != a.cookie("invblog-hide-fixed-ad") || o ? (i.addClass("on"), f.addClass("on")) : j.addClass("on")
                                },
                                hide: function (b, c) {
                                    1 != a.cookie("invblog-hide-fixed-ad") || o ? (f.removeClass("on"), c > b && i.removeClass("on")) : c > b && j.removeClass("on")
                                }
                            },
                            footer: {
                                scrollHandler: function (c, d) {
                                    b.height(), b.width(), a(".footer-signup").height() + 100, a(".related-articles").height() + 100;
                                    return d > l ? n.footer.show() : void n.footer.hide()
                                },
                                show: function () {
                                    if (e = d.find("#smart_ctas"), 1 == e.length && e.hasClass("reveal") || h.addClass("on"), 1 != a.cookie("invblog-subscribe-closed") && 1 != a.cookie("invblog-user-subscribed") && k && d.hasClass("single")) {
                                        setTimeout(function () {
                                            h.hasClass("on") && (m.addClass("on"), setTimeout(function () {
                                                a(".share-wrapper p.button input").addClass("on"), a(".share-wrapper #signup_email").addClass("error").focus()
                                            }, 200))
                                        }, 1e3)
                                    }
                                },
                                hide: function () {
                                    h.removeClass("on"), 1 != a.cookie("invblog-subscribe-closed") && 1 != a.cookie("invblog-user-subscribed") && k && d.hasClass("single") && (m.removeClass("on"), setTimeout(function () {
                                        a(".share-wrapper p.button input").removeClass("on"), a(".share-wrapper #signup_email").removeClass("error").blur()
                                    }, 200))
                                }
                            }
                        },
                        p = function () {
                            var b = a(this),
                                c = b.scrollTop();
                            n.header.scrollHandler(b, c), n.footer.scrollHandler(b, c)
                        };
                    p(), c.on("scroll", p)
                }
            },
            H = function () {
                a(".signup-form").each(function () {
                    var b = a(this),
                        c = !1;
                    b.binnacle({
                        color: "#ff3366"
                    }), b.validate({
                        rules: {
                            email: {
                                required: !0,
                                email: !0
                            }
                        },
                        submitHandler: function (d) {
                            a(d).trigger("binnacle");
                            var e = a.cookie("hubspotutk"),
                                f = "https://forms.hubspot.com/uploads/form/v2/425470/9de8a344-801e-48ea-9aeb-953a61002a80",
                                g = JSON.stringify({
                                    hutk: e,
                                    pageUrl: "http://blog.invisionapp.com",
                                    pageName: "Blog"
                                }),
                                h = b.find("input[type=text]"),
                                i = h.val(),
                                j = function () {
                                    a.post(b.data("url"), {
                                        email: i,
                                        formUrl: f,
                                        hs_context: g
                                    }, function (b) {
                                        b === !0 ? (analytics.identify({
                                            email: i
                                        }), analytics.track("Subscribed", {
                                            email: i
                                        }), a(".subscribe-modal").fadeOut(250, function () {
                                            a(".modal-overlay").fadeIn(200), a(".subscribe-modal-confirm").fadeIn(250).delay(1e3).fadeOut(250, function () {
                                                a(".modal-overlay").fadeOut(250), a("#signup_email").val(""), a(".slide-ad.two").removeClass("on")
                                            })
                                        }), a.cookie("invblog-user-subscribed", 1, {
                                            expires: 7300,
                                            path: "/"
                                        })) : console.log("Form error")
                                    })
                                };
                            a.post("https://www.invisionapp.com/api/validateEmailBV", {
                                email: i
                            }, function (a) {
                                return "invalid" == a.status ? c ? !1 : (h.after('<p class="bv-error">Please enter an active email.</p>'), c = !0, !1) : (c && (b.find(".bv-error").remove(), c = !1), void j(a))
                            })
                        }
                    })
                })
            },
            I = d.find(".single-post"),
            J = 100;
        I.length && (J = I.offset().top + I.height() / 3);
        var K = function (a, b) {
                document.cookie = a + "=" + b + "; path=/"
            },
            L = function (a) {
                for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                    for (var e = c[d];
                        " " == e.charAt(0);) e = e.substring(1);
                    if (0 === e.indexOf(b)) return e.substring(b.length, e.length)
                }
                return ""
            },
            M = function () {
                c.scrollTop() > J && (e.addClass("reveal"), h.removeClass("on").css({
                    "z-index": "-1"
                }), i.removeClass("on").css({
                    "z-index": "-1"
                }), f.removeClass("on").css({
                    "z-index": "-1"
                }))
            },
            N = function () {
                e.find(".cta_button").first().attr("id").replace("cta_button_", "");
                e.hasClass("reveal") && (e.removeClass("reveal"), K("smart_cta_modal_closed", 1), c.unbind("scroll", M)), L("smart_cta_header-closed") ? h.addClass("on").removeAttr("style") : f.addClass("on").removeAttr("style"), i.addClass("on").removeAttr("style")
            },
            O = function () {
                var a = f.find(".close");
                a.on("click", function () {
                    f.removeClass("on"), K("smart_cta_header-closed", !0)
                })
            },
            P = function () {
                var b = '<svg viewBox="0 0 512 512"><polygon points="340.2,160 255.8,244.3 171.8,160.4 160,172.2 244,256 160,339.9 171.8,351.6 255.8,267.8 340.2,352   352,340.3 267.6,256 352,171.8 "/></svg>';
                if (f.show(), a("#fixed-ad, #fixed-ad-mobile").remove(), 1 != L("invblog-tshirt-closed")) return !1;
                o && f.find(".close").remove();
                var g = setInterval(function () {
                    var f = (e.find(".close"), e.find(".static_smart_cta a.cta_button, .dynamic_smart_cta a.cta_button"));
                    f.length > 0 && (f.each(function () {
                        a(this).attr("title", ""), e.hasClass("scroll_up") && a(this).closest(".smart_cta_container").find(".close").append(b)
                    }), f.closest(".smart_cta_container").find(".close").on("click", function () {
                        N()
                    }), d.not("a.cta_button").on("click", function (a) {
                        a.stopPropagation(), N()
                    }), e.hasClass("scroll_up") && c.scroll(M), clearInterval(g))
                }, 200);
                O()
            },
            Q = function () {
                var b = a(".sign-up-ctas");
                b.length && b.each(function () {
                    var b = a(this),
                        c = b.attr("title"),
                        d = "";
                    c && (d = "<h2>" + c + "</h2>");
                    var e = d + '<div class="sign-in-cta"><a href="https://projects.invisionapp.com/" target="_blank" title="">SIGN IN</a></div><span> or </span><div class="sign-up-cta"><a href="https://projects.invisionapp.com/d/signup?redir=" target="_blank" title="">SIGN UPâ€”FREE!</a></div>';
                    b.append(e).addClass("loaded");
                    var f = b.find(".sign-in-cta"),
                        g = b.find(".sign-up-cta"),
                        h = f.add(g);
                    h.click(function () {
                        var b = a(this),
                            c = b.parent().attr("position"),
                            d = "ClickSignUpCTA";
                        b.is(f) && (d = "ClickSignInCTA"), analytics.track(d, {
                            category: "Blog",
                            label: c
                        })
                    })
                })
            },
            R = function () {
                if (d.hasClass("single")) {
                    var b = a("article img"),
                        c = a("article img").attr("tweet");
                    if ("undefined" != typeof c && c !== !1) {
                        var e = b.filter("[tweet]");
                        e.each(function () {
                            var b = a(this),
                                c = b.parent();
                            c.is("a") || (b.wrapAll('<a class="anchorImage"></a>'), c = b.parent());
                            var d = b.attr("tweet").replace(/\s+/g, "+") + "+",
                                e = "https://twitter.com/intent/tweet?text=" + d + b.attr("src").split("?")[0] + "+via+%40InVisionApp",
                                f = '<div class="tweetable-container"><a href="' + e + '" class="no-redirect" target="_blank"><span class="svg-wrapper"><svg xmlns="http://www.w3.org/2000/svg" width="300" height="244.2" viewBox="0 0 300 244.2" enable-background="new 0 0 300 244.2" xml:space="preserve"><path fill="#ffffff" d="M94.7 243.2c112.5 0 174-93.2 174-174 0-2.6-0.1-5.3-0.2-7.9 11.9-8.6 22.3-19.4 30.5-31.7 -11 4.9-22.7 8.1-35.1 9.6 12.6-7.6 22.3-19.5 26.9-33.8 -11.8 7-24.9 12.1-38.8 14.8C240.8 8.4 224.9 1 207.3 1c-33.8 0-61.1 27.4-61.1 61.1 0 4.8 0.5 9.5 1.6 13.9 -50.8-2.6-95.9-26.9-126-63.9 -5.3 9-8.3 19.5-8.3 30.7 0 21.2 10.8 39.9 27.2 50.9 -10-0.3-19.5-3.1-27.7-7.6 0 0.3 0 0.5 0 0.8 0 29.6 21.1 54.3 49.1 59.9 -5.1 1.4-10.5 2.2-16.1 2.2 -3.9 0-7.8-0.4-11.5-1.1 7.8 24.3 30.4 42 57.1 42.5 -20.9 16.4-47.3 26.2-75.9 26.2 -4.9 0-9.8-0.3-14.6-0.8C28.1 233.1 60.2 243.2 94.7 243.2"/></svg></span><span class="circle-wrapper"><span class="circle"><span class="tweet-text">tweet</span></span></span></a></div>';
                            c.append(f);
                            var g = c.find(".tweetable-container");
                            n ? g.addClass("active tweetable-hover") : c.hover(function () {
                                g.addClass("active")
                            }, function () {
                                g.removeClass("active")
                            }), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && g.addClass("safari")
                        })
                    }
                }
            },
            S = function () {
                a("label").inFieldLabels();
                var b = function () {
                    u.parent().not(".tiled-gallery-item a").addClass("anchorImage")
                };
                b(), a(".add-scroll-content").masonry({
                    columnWidth: ".inv-scroll-item",
                    itemSelector: "article"
                }), window.viewportUnitsBuggyfill.init(), ("YES" == a.cookie("INV_CUSTOMER_LOCAL") || "YES" == a.cookie("INV_CUSTOMER_QA") || "YES" == a.cookie("INV_CUSTOMER_LIVE") || 1 == a.cookie("invblog-user-subscribed") || 1 == a.cookie("invblog-subscribe-closed")) && (a.cookie("invblog-user-subscribed", 1, {
                    expires: 7300,
                    path: "/"
                }), a.cookie("invblog-subscribe-closed", 1, {
                    path: "/",
                    expires: 7300
                }), a.cookie("invblog-tshirt-closed", 1, {
                    expires: 7300,
                    path: "/"
                }), j = !1, k = !1, l = !0), 1 == a.cookie("invblog-tshirt-closed") && (j = !1), z(), x(), B(), C(), D(), E(), G(), H(), Q(), R(), t ? (K("invblog-tshirt-closed", 1), d.find(".fancybox-overlay").remove(), 1 == L("smart_cta_modal_closed") || o || (e.addClass("scroll_up"), d.find(".slide-ad").remove()), c.load(function () {
                    P()
                })) : o ? a("#fixed-ad-mobile").show() : a("#fixed-ad").show(), c.load(function () {
                    h.add("#smart_ctas, #fixed-ad-smart-cta").on("click", function () {
                        analytics.track("ClickBlogCTA", {
                            category: "Blog",
                            label: window.location.href
                        })
                    })
                })
            };
        S()
    });