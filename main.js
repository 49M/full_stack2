"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function start() {
  class Bookmark extends React.Component {
    constructor(props) {
      super(props);
      _defineProperty(this, "title", this.props.title);
      _defineProperty(this, "titleStyle", {
        color: "blue"
      });
      console.log("Bookmark component created");
    }
    render() {
      return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", {
        style: this.titleStyle
      }, this.title), /*#__PURE__*/React.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.href
      }, this.props.description), /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          this.title = this.title + "-Changed";
          this.setState({});
        }
      }, "Click me"));
    }
  }
  ReactDOM.render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Bookmarks"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(Bookmark, {
    title: "Developian",
    href: "https://main-bvxea6i-nf7smjfwr2mu4.ca-1.platformsh.site/",
    description: "Goal Tracker"
  }), /*#__PURE__*/React.createElement(Bookmark, {
    title: "Michal Buczek",
    href: "https://www.linkedin.com/in/michal-buczek-99b64b278/",
    description: "LinkedIn"
  }))), document.getElementById("mainContainer"));
}
