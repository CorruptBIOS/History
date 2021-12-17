(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    390: function (t, e, s) {
      'use strict';
      s.r(e);
      var n = [
          "There's nothing here.",
          'How did we get here?',
          "That's a Four-Oh-Four.",
          "Looks like we've got a leak.",
          "That's Un-Four-unate.",
          "Someone divided by zero.",
          "Someone spilled coffee on the mainframe by accident.",
          "Someone tripped over the power cord",
          "That no longer exists, or never did existed."
        ],
        o = {
          methods: {
            getMsg: function () {
              return n[Math.floor(Math.random() * n.length)];
            },
          },
        },
        i = s(54),
        h = Object(i.a)(
          o,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e('div', { staticClass: 'theme-container' }, [
              e(
                'div',
                { staticClass: 'theme-default-content' },
                [
                  e('h1', [this._v('404')]),
                  this._v(' '),
                  e('blockquote', [this._v(this._s(this.getMsg()))]),
                  this._v(' '),
                  e('RouterLink', { attrs: { to: '/' } }, [
                    this._v('\n      Take me home.\n    '),
                  ]),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = h.exports;
    },
  },
]);
