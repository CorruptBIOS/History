(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    447: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = [
          "There's nothing here.",
          'How did we get here?',
          "That's a Four-Oh-Four.",
          "Looks like we've got a leak.",
          "That's Un-Four-unate.",
          'Someone divided by zero.',
          'Someone spilled coffee on the mainframe by accident.',
          'Someone tripped over the power cord',
          'That no longer exists, or never did existed.',
        ],
        s = {
          methods: {
            getMsg: function () {
              return o[Math.floor(Math.random() * o.length)];
            },
          },
        },
        a = n(53),
        r = Object(a.a)(
          s,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n('div', { staticClass: 'theme-container' }, [
              n(
                'div',
                { staticClass: 'theme-default-content' },
                [
                  n('img', {
                    attrs: {
                      src: 'https://images.rbxcdn.com/9281912c23312bc0d08ab750afa588cc.png',
                      alt: '404',
                      width: '512',
                    },
                  }),
                  t._v(' '),
                  n('h1', [t._v('404')]),
                  t._v(' '),
                  n('blockquote', [t._v(t._s(t.getMsg()))]),
                  t._v(' '),
                  n('router-link', { attrs: { to: '/' } }, [
                    t._v('Take me home.'),
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
      e.default = r.exports;
    },
  },
]);
