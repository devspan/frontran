(window.webpackJsonp = window.webpackJsonp || []).push([
  ["custom-intervals-add-dialog"],
  {
    "+l/S": function (e, t, n) {},
    "02pg": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n("q1tI"),
        r = n("TSYQ"),
        o = n("XiJV");
      function s(e) {
        return a.createElement("div", {
          className: r(o.separator, e.className),
        });
      }
    },
    "2A9e": function (e) {
      e.exports = JSON.parse(
        '{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","grouped":"grouped-2NxOpIxM","adjust-position":"adjust-position-2zd-ooQC","first-row":"first-row-11wXF7aC","first-col":"first-col-pbJu53tK","no-corner-top-left":"no-corner-top-left-3ZsS65Fk","no-corner-top-right":"no-corner-top-right-3MYQOwk_","no-corner-bottom-right":"no-corner-bottom-right-3II18BAU","no-corner-bottom-left":"no-corner-bottom-left-3KZuX8tv","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}'
      );
    },
    ItnF: function (e, t, n) {
      e.exports = {
        dialog: "dialog-2cMrvu9r",
        wrapper: "wrapper-2cMrvu9r",
        separator: "separator-2cMrvu9r",
      };
    },
    Qhte: function (e, t, n) {
      e.exports = {
        scrollable: "scrollable-FNPZI_Xo",
        content: "content-FNPZI_Xo",
        row: "row-FNPZI_Xo",
        title: "title-FNPZI_Xo",
        control: "control-FNPZI_Xo",
      };
    },
    XiJV: function (e, t, n) {
      e.exports = { separator: "separator-3No0pWrk" };
    },
    g89m: function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        r = n.n(a),
        o = n("Eyy1"),
        s = n("TSYQ"),
        i = n.n(s),
        l = n("/3z9"),
        c = n("d700"),
        d = n("WXjp"),
        u = n("02pg"),
        p = n("uhCe"),
        m = n("/KDZ"),
        h = n("pafz"),
        f = n("ZjKI"),
        b = n("FQhm"),
        g = n("Iivm");
      const v = r.a.createContext({ setHideClose: () => {} });
      var w = n("zztK"),
        N = n("px1m");
      function C(e) {
        const {
            title: t,
            subtitle: n,
            showCloseIcon: o = !0,
            onClose: s,
            renderBefore: l,
            renderAfter: c,
            draggable: d,
            className: u,
            unsetAlign: p,
          } = e,
          [m, h] = Object(a.useState)(!1);
        return r.a.createElement(
          v.Provider,
          { value: { setHideClose: h } },
          r.a.createElement(
            "div",
            { className: i()(N.container, u, (n || p) && N.unsetAlign) },
            l,
            r.a.createElement(
              "div",
              { "data-dragg-area": d, className: N.title },
              r.a.createElement("div", { className: N.ellipsis }, t),
              n &&
                r.a.createElement(
                  "div",
                  { className: i()(N.ellipsis, N.subtitle) },
                  n
                )
            ),
            c,
            o &&
              !m &&
              r.a.createElement(g.a, {
                className: N.close,
                icon: w,
                onClick: s,
                "data-name": "close",
                "data-role": "button",
              })
          )
        );
      }
      var _ = n("ItnF");
      n.d(t, "a", function () {
        return A;
      });
      const E = { vertical: 20 },
        O = { vertical: 0 };
      class A extends r.a.PureComponent {
        constructor() {
          super(...arguments),
            (this._controller = null),
            (this._reference = null),
            (this._renderChildren = (e, t) => (
              (this._controller = e),
              this.props.render({
                requestResize: this._requestResize,
                centerAndFit: this._centerAndFit,
                isSmallWidth: t,
              })
            )),
            (this._handleReference = (e) => (this._reference = e)),
            (this._handleClose = () => {
              this.props.onClose();
            }),
            (this._handleKeyDown = (e) => {
              var t;
              if (!e.defaultPrevented)
                switch (
                  (this.props.onKeyDown && this.props.onKeyDown(e),
                  Object(l.hashFromEvent)(e))
                ) {
                  case 27:
                    if (e.defaultPrevented) return;
                    if (
                      this.props.forceCloseOnEsc &&
                      this.props.forceCloseOnEsc()
                    )
                      return void this._handleClose();
                    const { activeElement: n } = document,
                      a = Object(o.ensureNotNull)(this._reference);
                    if (null !== n) {
                      if (
                        (e.preventDefault(),
                        "true" === (t = n).getAttribute("data-haspopup") &&
                          "true" !== t.getAttribute("data-expanded"))
                      )
                        return void this._handleClose();
                      if (Object(c.b)(n)) return void a.focus();
                      if (a.contains(n)) return void this._handleClose();
                    }
                }
            }),
            (this._requestResize = () => {
              null !== this._controller && this._controller.recalculateBounds();
            }),
            (this._centerAndFit = () => {
              null !== this._controller && this._controller.centerAndFit();
            });
        }
        componentDidMount() {
          b.subscribe(
            f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
            this._handleClose,
            null
          );
        }
        componentWillUnmount() {
          b.unsubscribe(
            f.CLOSE_POPUPS_AND_DIALOGS_COMMAND,
            this._handleClose,
            null
          );
        }
        focus() {
          Object(o.ensureNotNull)(this._reference).focus();
        }
        getElement() {
          return this._reference;
        }
        contains(e) {
          var t, n;
          return (
            null !==
              (n =
                null === (t = this._reference) || void 0 === t
                  ? void 0
                  : t.contains(e)) &&
            void 0 !== n &&
            n
          );
        }
        render() {
          const {
              className: e,
              headerClassName: t,
              isOpened: n,
              title: a,
              dataName: o,
              onClickOutside: s,
              additionalElementPos: l,
              additionalHeaderElement: c,
              backdrop: f,
              shouldForceFocus: b = !0,
              showSeparator: g,
              subtitle: v,
              draggable: w = !0,
              fullScreen: N = !1,
              showCloseIcon: A = !0,
              rounded: S = !0,
              isAnimationEnabled: P,
              growPoint: x,
              dialogTooltip: I,
              unsetHeaderAlign: j,
            } = this.props,
            F = "after" !== l ? c : void 0,
            y = "after" === l ? c : void 0;
          return r.a.createElement(m.a, { rule: p.a.SmallHeight }, (l) =>
            r.a.createElement(m.a, { rule: p.a.TabletSmall }, (c) =>
              r.a.createElement(
                d.a,
                {
                  rounded: !(c || N) && S,
                  className: i()(_.dialog, e),
                  isOpened: n,
                  reference: this._handleReference,
                  onKeyDown: this._handleKeyDown,
                  onClickOutside: s,
                  onClickBackdrop: s,
                  fullscreen: c || N,
                  guard: l ? O : E,
                  boundByScreen: c || N,
                  shouldForceFocus: b,
                  backdrop: f,
                  draggable: w,
                  isAnimationEnabled: P,
                  growPoint: x,
                  name: this.props.dataName,
                  dialogTooltip: I,
                },
                r.a.createElement(
                  "div",
                  {
                    className: _.wrapper,
                    "data-name": o,
                    "data-dialog-name": "string" == typeof a ? a : "",
                  },
                  void 0 !== a &&
                    r.a.createElement(C, {
                      draggable: w && !(c || N),
                      onClose: this._handleClose,
                      renderAfter: y,
                      renderBefore: F,
                      subtitle: v,
                      title: a,
                      showCloseIcon: A,
                      className: t,
                      unsetAlign: j,
                    }),
                  g && r.a.createElement(u.a, { className: _.separator }),
                  r.a.createElement(h.a.Consumer, null, (e) =>
                    this._renderChildren(e, c || N)
                  )
                )
              )
            )
          );
        }
      }
    },
    mwqF: function (e, t, n) {
      "use strict";
      var a = n("q1tI"),
        r = n.n(a),
        o = n("TSYQ"),
        s = n("wwkJ"),
        i = n("ZWNO");
      function l(e, t) {
        const {
            intent: n = "primary",
            size: a = "m",
            appearance: r = "default",
            useFullWidth: s = !1,
            tabIndex: l = 0,
            icon: c,
            className: d,
            isGrouped: u,
            cellState: p,
            disablePositionAdjustment: m = !1,
          } = t,
          h = (function (e, t) {
            let n = "";
            return (
              0 !== e &&
                (1 & e && (n = o(n, t["no-corner-top-left"])),
                2 & e && (n = o(n, t["no-corner-top-right"])),
                4 & e && (n = o(n, t["no-corner-bottom-right"])),
                8 & e && (n = o(n, t["no-corner-bottom-left"]))),
              n
            );
          })(Object(i.a)(p), e);
        return o(
          d,
          e.button,
          e["size-" + a],
          e["intent-" + n],
          e["appearance-" + r],
          s && e["full-width"],
          -1 === l && e.noOutline,
          c && "s" !== a && e["with-icon"],
          h,
          u && e.grouped,
          !m && e["adjust-position"],
          p.isTop && e["first-row"],
          p.isLeft && e["first-col"]
        );
      }
      var c = n("2A9e");
      n("+l/S");
      function d(e) {
        const {
            className: t,
            intent: n,
            size: i,
            appearance: d,
            disabled: u,
            useFullWidth: p,
            reference: m,
            icon: h,
            children: f,
            tabIndex: b,
            ...g
          } = e,
          {
            isGrouped: v,
            cellState: w,
            disablePositionAdjustment: N,
          } = Object(a.useContext)(s.a),
          C = l(c, {
            intent: n,
            size: i,
            appearance: d,
            disabled: u,
            useFullWidth: p,
            tabIndex: b,
            icon: h,
            isGrouped: v,
            cellState: w,
            disablePositionAdjustment: N,
          });
        return r.a.createElement(
          "button",
          { className: o(C, t), disabled: u, ref: m, tabIndex: b, ...g },
          h && "s" !== i && r.a.createElement("span", { className: c.icon }, h),
          r.a.createElement("span", { className: c.content }, f)
        );
      }
      n.d(t, "a", function () {
        return d;
      });
    },
    px1m: function (e, t, n) {
      e.exports = {
        "small-height-breakpoint": "screen and (max-height: 360px)",
        container: "container-2sL5JydP",
        unsetAlign: "unsetAlign-2sL5JydP",
        title: "title-2sL5JydP",
        subtitle: "subtitle-2sL5JydP",
        ellipsis: "ellipsis-2sL5JydP",
        close: "close-2sL5JydP",
      };
    },
    w9vS: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "ToolWidgetIntervalsAddDialog", function () {
          return h;
        });
      var a = n("q1tI"),
        r = n.n(a),
        o = n("YFKU"),
        s = n("ycFu"),
        i = n("PECq"),
        l = n("wHCJ"),
        c = n("tWVy"),
        d = n("tmL0"),
        u = n("cSDC"),
        p = n("Qhte");
      const m = u.a.map((e) => ({ value: e.name, content: e.label }));
      function h(e) {
        const { onAdd: t, onClose: n, onUnmount: h } = e,
          [f, b] = Object(a.useState)(u.a[0].name),
          [g, v] = Object(a.useState)("1");
        return (
          Object(a.useEffect)(
            () => () => {
              h && h();
            },
            []
          ),
          r.a.createElement(s.a, {
            dataName: "add-custom-interval-dialog",
            title: Object(o.t)("Add custom time interval"),
            isOpened: !0,
            onSubmit: function () {
              t(g, f), n();
            },
            onCancel: n,
            onClickOutside: n,
            onClose: n,
            render: () =>
              r.a.createElement(
                d.a,
                { className: p.scrollable, onScroll: N },
                r.a.createElement(
                  "div",
                  { className: p.content },
                  r.a.createElement(
                    "div",
                    { className: p.row },
                    r.a.createElement(
                      "div",
                      { className: p.title },
                      Object(o.t)("Type")
                    ),
                    r.a.createElement(i.a, {
                      id: "metric-items",
                      className: p.control,
                      value: f,
                      items: m,
                      onChange: C,
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: p.row },
                    r.a.createElement(
                      "div",
                      { className: p.title },
                      Object(o.t)("Interval")
                    ),
                    r.a.createElement(l.a, {
                      className: p.control,
                      inputMode: "numeric",
                      maxLength: 6,
                      value: g,
                      onChange: w,
                    })
                  )
                )
              ),
            defaultActionOnClose: "none",
            submitButtonText: Object(o.t)("Add"),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        );
        function w(e) {
          const { value: t } = e.currentTarget;
          /^[0-9]*$/.test(t) && v(t);
        }
        function N() {
          c.a.fire();
        }
        function C(e) {
          b(e);
        }
      }
    },
    zztK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="none"><path stroke="currentColor" stroke-width="1.2" d="M1 1l15 15m0-15L1 16"/></svg>';
    },
  },
]);
