// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: BUNQ.ggsk
// Generated 2024-07-16T14:13:04

function pano2vrSkin(player, base) {
  var me = this;
  var skin = this;
  var flag = false;
  var nodeMarker = [];
  var activeNodeMarker = [];
  var hotspotTemplates = {};
  var skinKeyPressed = 0;
  this.player = player;
  this.player.skinObj = this;
  this.divSkin = player.divSkin;
  this.ggUserdata = player.userdata;
  this.lastSize = { w: -1, h: -1 };
  var basePath = "";
  // auto detect base path
  if (base == "?") {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src.indexOf("skin.js") >= 0) {
        var p = src.lastIndexOf("/");
        if (p >= 0) {
          basePath = src.substr(0, p + 1);
        }
      }
    }
  } else if (base) {
    basePath = base;
  }
  this.elementMouseDown = [];
  this.elementMouseOver = [];
  var cssPrefix = "";
  var domTransition = "transition";
  var domTransform = "transform";
  var prefixes = "Webkit,Moz,O,ms,Ms".split(",");
  var i;
  var hs,
    el,
    els,
    elo,
    ela,
    elHorScrollFg,
    elHorScrollBg,
    elVertScrollFg,
    elVertScrollBg,
    elCornerBg;
  if (typeof document.body.style["transform"] == "undefined") {
    for (var i = 0; i < prefixes.length; i++) {
      if (
        typeof document.body.style[prefixes[i] + "Transform"] !== "undefined"
      ) {
        cssPrefix = "-" + prefixes[i].toLowerCase() + "-";
        domTransition = prefixes[i] + "Transition";
        domTransform = prefixes[i] + "Transform";
      }
    }
  }

  player.setMargins(0, 0, 0, 0);

  this.updateSize = function (startElement) {
    var stack = [];
    stack.push(startElement);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggUpdatePosition) {
        e.ggUpdatePosition();
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };

  this.callNodeChange = function (startElement) {
    var stack = [];
    stack.push(startElement);
    while (stack.length > 0) {
      var e = stack.pop();
      if (e.ggNodeChange) {
        e.ggNodeChange();
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
  };
  player.addListener("changenode", function () {
    me.ggUserdata = player.userdata;
    me.callNodeChange(me.divSkin);
  });

  var parameterToTransform = function (p) {
    var hs =
      "translate(" +
      p.rx +
      "px," +
      p.ry +
      "px) rotate(" +
      p.a +
      "deg) scale(" +
      p.sx +
      "," +
      p.sy +
      ")";
    return hs;
  };

  this.findElements = function (id, regex) {
    var r = [];
    var stack = [];
    var pat = new RegExp(id, "");
    stack.push(me.divSkin);
    while (stack.length > 0) {
      var e = stack.pop();
      if (regex) {
        if (pat.test(e.ggId)) r.push(e);
      } else {
        if (e.ggId == id) r.push(e);
      }
      if (e.hasChildNodes()) {
        for (var i = 0; i < e.childNodes.length; i++) {
          stack.push(e.childNodes[i]);
        }
      }
    }
    return r;
  };

  this.addSkin = function () {
    var hs = "";
    this.ggCurrentTime = new Date().getTime();
    el = me._ground_floor_trigger = document.createElement("div");
    el.ggMarkerNodeId = "gf";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "ground floor trigger";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 52px;";
    hs += "position : absolute;";
    hs += "top : 158px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._ground_floor_trigger.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._ground_floor_trigger.onclick = function (e) {
      player.openNext("gf");
    };
    me._ground_floor_trigger.ggActivate = function () {
      me._ground_floor_select.onclick.call(me._ground_floor_select);
    };
    me._ground_floor_trigger.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._ground_floor_trigger);
    el = me._first_floor_trigger = document.createElement("div");
    el.ggMarkerNodeId = "ff";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "first floor trigger";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 45px;";
    hs += "position : absolute;";
    hs += "top : 156px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._first_floor_trigger.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._first_floor_trigger.onclick = function (e) {
      player.openNext("ff");
    };
    me._first_floor_trigger.ggActivate = function () {
      me._first_floor_select.onclick.call(me._first_floor_select);
    };
    me._first_floor_trigger.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._first_floor_trigger);
    el = me._floor_plan_bg = document.createElement("div");
    el.ggId = "floor_plan_bg";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 30px;";
    hs += "border-radius : 30px;";
    hs += "border : 0px solid #202020;";
    hs += "bottom : 10px;";
    hs += "cursor : default;";
    hs += "height : 490px;";
    hs += "left : -380px;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 330px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floor_plan_bg.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._floor_plan_bg.ggUpdatePosition = function (useTransition) {};
    el = me._panel1_bg = document.createElement("div");
    el.ggId = "panel1_bg";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 420px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : 70px;";
    hs += "visibility : inherit;";
    hs += "width : 330px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._panel1_bg.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._panel1_bg.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
      }
    };
    me._floor_plan_bg.appendChild(me._panel1_bg);
    el = me._panel2_bg = document.createElement("div");
    el.ggId = "panel2_bg";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 30px;";
    hs += "border-radius : 30px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 60px;";
    hs += "left : -10000px;";
    hs += "opacity : 0.5;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 330px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._panel2_bg.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._panel2_bg.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
      }
    };
    me._floor_plan_bg.appendChild(me._panel2_bg);
    el = me._ground_floor_select = document.createElement("div");
    el.ggId = "ground_floor_select";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._ground_floor_select.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._ground_floor_select.onclick = function (e) {
      me._floor_location.style[domTransition] = "none";
      me._floor_location.ggParameter.rx = 10;
      me._floor_location.ggParameter.ry = 10;
      me._floor_location.style[domTransform] = parameterToTransform(
        me._floor_location.ggParameter,
      );
      if (player.transitionsDisabled) {
        me._floorplans.style[domTransition] = "none";
      } else {
        me._floorplans.style[domTransition] = "all 300ms ease-out 0ms";
      }
      me._floorplans.ggParameter.rx = 0;
      me._floorplans.ggParameter.ry = 0;
      me._floorplans.style[domTransform] = parameterToTransform(
        me._floorplans.ggParameter,
      );
    };
    me._ground_floor_select.ggUpdatePosition = function (useTransition) {};
    el = me._image_5 = document.createElement("div");
    els = me._image_5__img = document.createElement("img");
    els.className = "ggskin ggskin_image_5";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC7klEQVRYhc2ZoVbjQBSGv8kDhKxmRLAIWNcIztlgMKg9IMCBQhaBB56g3SdgXQ22BgTF4WBFW9nuIeiWvMBdkSakJdky09LynzOnSTOTfLl/5s5korCUiITAd+DH6NcbFYAh0B+VP0BLKdWyvZYJlCci5yIyEHP1RORKRPzPAqtZQJVpfqAiUhW7iE1TT0SOZoWbZ9TKVLMB80TkbgFwqR5FxJtO9gb4uEC4VHdFLE6RrSRpY9EKZZrdInK0hMhN6jTPpHJwPnAH+J8QHRMNgTWl1BDGLT5n+XCQjEbn6Y6CLHo9m7PFccz19TXdbpcoitBaU6lUCIIArfUsoN/SKCJJZjdWu92WjY0N8X3/Xdna2pJ2uz3Ls3iRj2APQ3ujKGJ3d5c4jgGoVCporX" +
      "l5eeHh4QEA13VpNpu2kRwqpb4hIqHN7Z2dnWXRqtfrY8dqtVp27ODgYJYohojIhWmr5+fnMSuLlLf+9fXVFvDUATZNY9/pdLLtnZ2dwjp7e3vZ9s3NjbnBiUIHi9SSB1xdXS2sk3/uoigyJhtp0wowf0HXdQvr5P+fAdBzeJumf0V57yYLX00OydhnpDJby7SysmJ6iVRDK8B8B0gT9aTyz11ZR/qA+g7wZNpqfX0928736Ly63W5hfUP9dYB701ZBEGQ2397evotiFEVZ7tNaEwSBLeCTVQQBjo+PgcTiw8PDzNJOp8PJyUlWb39/3xYOoJVOFgYYppsUrMxiSKxtNpu2cH2l1FqaZn6ZtnZdl0ajkUVy8li1WqXRaNjCAbTgbbrlAQPbM8VxnEXSdV201sapqEBrSql+tici9Skzi0XqKuXKvzR5JNP+ZQ99fWA7" +
      "jV421I3m/5fLYRrT5Zi1k5LlWl3/0C3IYtdlUj0WsZTNZn5imcAt1QK2jVvJYuz+mK3/gTySZLFx3hrIxDrMLJC+iPyeI1xdTNYDLUB7FlADSV5xjcDU9CqlsCEQkry2+qOS/wwxJOlo98CT7WeIfyVkBsIj0GZNAAAAAElFTkSuQmCC";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 5";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_5.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_5.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._ground_floor_select.appendChild(me._image_5);
    el = me._ground_floor_hit = document.createElement("div");
    el.ggId = "ground_floor_hit";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._ground_floor_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._ground_floor_hit.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._ground_floor_select.appendChild(me._ground_floor_hit);
    me._floor_plan_bg.appendChild(me._ground_floor_select);
    el = me._first_floor_select = document.createElement("div");
    el.ggId = "first_floor_select";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 60px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._first_floor_select.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._first_floor_select.onclick = function (e) {
      me._floor_location.style[domTransition] = "none";
      me._floor_location.ggParameter.rx = 60;
      me._floor_location.ggParameter.ry = 10;
      me._floor_location.style[domTransform] = parameterToTransform(
        me._floor_location.ggParameter,
      );
      if (player.transitionsDisabled) {
        me._floorplans.style[domTransition] = "none";
      } else {
        me._floorplans.style[domTransition] = "all 300ms ease-out 0ms";
      }
      me._floorplans.ggParameter.rx = 0;
      me._floorplans.ggParameter.ry = 400;
      me._floorplans.style[domTransform] = parameterToTransform(
        me._floorplans.ggParameter,
      );
    };
    me._first_floor_select.ggUpdatePosition = function (useTransition) {};
    el = me._image_6 = document.createElement("div");
    els = me._image_6__img = document.createElement("img");
    els.className = "ggskin ggskin_image_6";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACFUlEQVRYhc2ZP27iQBSHv7GokbenmJwgKd2tc4S9ATfINtQkJ4A9AenhBDQ4HR3sCfAKehAX+G1hG0LCn9ie2P6kkWUJD5/fs2fejA0FkRQCD8DP9OinDWAHxGn7C0TGmKjof+WR8iX1JW2Vn5WkkST7XWKDAlKXcCcq6UnFInaLlaRuWTmXUbvEoIiYL2lWgVzGQpJ/2+wouKhQLmN2zsU7l1aSYaNqQt1Kt6RuDZH7yO/3TuadnAVmgP2G6ORhB9wZY3ZwmuI+9ctBMhv1sxMDh+itXPQ+mUwACIKATqdTpqsfWRRRMrKXZr1ey1ora63G43HZ7p7hmOKwzK1mzOdzF91kPAG0lFQltkgP+/2ezWZzaKPRyKEfvqSwRYnoTadTer2eO6XPPLSA+6" +
      "JXt9ttgiA4nGeRdEjodFobDAYuXxJJWnk0Y+y7hO9xLNObiP+pWGgaHsnc11R2TReMPWBZt8UV/nnAW90WV1g2PYKRl674m/gcxsaYKBtm/tSqcp4IjgWrD2zrtDnDnTEm9gDSyrVJUXw1xsRwumjyScr+uqe+GHjMBA9TXRrFl3qcTnjJ5M4iaeiiTirI8Eu3oGr3ZTIW51wuVTO/qHYAj4DH3FepmnR/La1XJLtKNhtds9WHfZgyklbSq0O5ofLsBxYQXRWQ2kp6zitmbv/komxIsqa+J1l4WU4/Q+xIXrQ3YFn0M8R/CVi4W4vdOyIAAAAASUVORK5CYII=";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 6";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_6.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_6.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._first_floor_select.appendChild(me._image_6);
    el = me._first_floor_hit = document.createElement("div");
    el.ggId = "first_floor_hit";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._first_floor_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._first_floor_hit.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._first_floor_select.appendChild(me._first_floor_hit);
    me._floor_plan_bg.appendChild(me._first_floor_select);
    el = me._floor_location = document.createElement("div");
    el.ggId = "floor_location";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 3px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 36px;";
    hs += "left : -1px;";
    hs += "opacity : 0.75;";
    hs += "position : absolute;";
    hs += "top : -1px;";
    hs += "visibility : inherit;";
    hs += "width : 36px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floor_location.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floor_location.ggUpdatePosition = function (useTransition) {};
    me._floor_plan_bg.appendChild(me._floor_location);
    el = me._button_close = document.createElement("div");
    el.ggId = "button_close";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "position : absolute;";
    hs += "right : 10px;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_close.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_close.onclick = function (e) {
      if (player.transitionsDisabled) {
        me._floor_plan_bg.style[domTransition] = "none";
      } else {
        me._floor_plan_bg.style[domTransition] = "all 300ms ease-out 0ms";
      }
      me._floor_plan_bg.ggParameter.rx = 0;
      me._floor_plan_bg.ggParameter.ry = 0;
      me._floor_plan_bg.style[domTransform] = parameterToTransform(
        me._floor_plan_bg.ggParameter,
      );
      me._floorplan_open.style[domTransition] = "none";
      me._floorplan_open.ggParameter.sx = 1;
      me._floorplan_open.ggParameter.sy = 1;
      me._floorplan_open.style[domTransform] = parameterToTransform(
        me._floorplan_open.ggParameter,
      );
      me._floorplan_close.style[domTransition] = "none";
      me._floorplan_close.ggParameter.sx = 0;
      me._floorplan_close.ggParameter.sy = 0;
      me._floorplan_close.style[domTransform] = parameterToTransform(
        me._floorplan_close.ggParameter,
      );
    };
    me._button_close.ggUpdatePosition = function (useTransition) {};
    el = me._image_4 = document.createElement("div");
    els = me._image_4__img = document.createElement("img");
    els.className = "ggskin ggskin_image_4";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABRElEQVRYhe3WMU7DMBSA4T+wML4jPDbGsnUsIzfoFo7AEXqNbuEGZWQqTFzjjR3fEVgSZKEU/OKkEpL/LVasfEoU21Cr1Wq12kVTVbnk864jN6uqAp8iIu7+EZzbikjj7qdFgD3uCCiwERFykaraAh2wFZG3CDIb6O4uIvfAqh/KQiY4gBtg7e772YE98iAit7nIHzgAAx7d3RcBRpBncA9mZpHnhYE5yLlwAM0U4JCqdkCbDO16TJeMGRNxUAiEUWSaUYCDiZ84beRzDxmFOICrkslJx5GxQykOZniDIz/E0DqymJ+rCHjmb30H7vrr0I4z1mTgL0vJPrKYLwL8a52L7jizAnMX4bmQ0eNWaIeYA5m9zKjqKoL7vsnsCXhJhkKbQ+S4dRKRBtjk4p" +
      "K5w5t8NbNdBBhOVZ/7w2utVqvVav+gLzaMxUKkFbNSAAAAAElFTkSuQmCC";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 4";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_4.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_4.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._button_close.appendChild(me._image_4);
    el = me._button_close_hit = document.createElement("div");
    el.ggId = "button_close_hit";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_close_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_close_hit.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._button_close.appendChild(me._button_close_hit);
    me._floor_plan_bg.appendChild(me._button_close);
    el = me._mask = document.createElement("div");
    el.ggId = "mask";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 400px;";
    hs += "left : 10px;";
    hs += "overflow : hidden;";
    hs += "position : absolute;";
    hs += "top : 80px;";
    hs += "visibility : inherit;";
    hs += "width : 310px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mask.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._mask.ggUpdatePosition = function (useTransition) {};
    el = me._floorplans = document.createElement("div");
    el.ggId = "floorplans";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 400px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 310px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floorplans.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplans.ggUpdatePosition = function (useTransition) {};
    el = me._groundfloor = document.createElement("div");
    els = me._groundfloor__img = document.createElement("img");
    els.className = "ggskin ggskin_groundfloor";
    hs =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QHTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjYuMCI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMj" +
      "QtMDctMTZUMTQ6MTM6MDMrMDU6MzAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA3LTE2VDE0OjEzOjAzKzA1OjMwIgogICB4bXA6Q3JlYXRvclRvb2w9IlBhbm8yVlIgNi4xLjExIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+/9sAQwAoHB4jHhkoIyEjLSsoMDxkQTw3Nzx7WF1JZJGAmZaPgIyKoLTmw6Cq2q2KjMj/y9ru9f///5vB////+v/m/f/4/9sAQwErLS08NTx2QUF2+KWMpfj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4/8AAEQgBkAE2AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYH" +
      "CAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4" +
      "iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A2aKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACms2OAMmnVGOWY++KA" +
      "F+f+9j8KPn/v/pS0UAJ8/wDf/Sj5/wC/+lLRQAnz/wB/9KPn/v8A6UtFACfP/f8A0o+f+/8ApS0UAJ8/9/8ASj5/7/6UtFACfP8A3/0o+f8Av/pS0UAJ8/8Af/Sj5/7/AOlLRQAnz/3/ANKPn/v/AKUtFACfP/f/AEo+f+/+lLRQAnz/AN/9KPn/AL/6UtFACfP/AH/0o+f+/wDpS0UAJ8/9/wDSj5/7/wClLRQAnz/3/wBKPn/v/pS0UAJ8/wDf/Sj5/wC/+lLRQAnz/wB/9KPn/v8A6UtFACbmX73I9af1ptEf3SPQ4oAdRRRQAUUUUAFFFFABUa9W+pqSo16t9TQApIFAYGmN940L1FICSiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAhOKTcKH7UykBLRH0b60g" +
      "6Clj6N9aYDqKKKACiiigAooooAKjXq31NSVGvVvqaAGt940L1FDfeNC9RSESUUUUxjS6g9aN6+tR+tLQK4/evrRvX1plIelAXJqKRfuj6UtAwooooAKKKKACiiigAooooAKKKKACiiigBKTevrQ/3TTKAH719aN6+tMooFckBBHFLTI+h+tPoGNftTKe/amUhEg6Clj6N9aQdBSx9G+tMY6iiigAooooAKKKKACo16t9TUlRr1b6mgBrfeNC9RQ33jQvUUhElFFFMZF6/Wij1+tFMQUh6UtIelAEq/dH0paRfuj6UtIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAjDIIqPa3pUtFAEW1vSja3pUtFADUBA5p1FFADX7Uynv2plIRIOgpY+jfWkHQUsfRvrTGOooooAKKKKACiiigAqNerfU1JUa9W+poAa33jQvUUN" +
      "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";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "groundfloor";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 400px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 310px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._groundfloor.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._groundfloor.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._groundfloor);
    el = me._mh_radar = document.createElement("div");
    el.ggId = "mh_radar";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 38px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 38px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mh_radar.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._mh_radar.ggUpdatePosition = function (useTransition) {};
    el = me._radar_ring = document.createElement("div");
    el.ggId = "radar_ring";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "border : 0px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 10px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 10px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._radar_ring.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._radar_ring.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._mh_radar.appendChild(me._radar_ring);
    el = me._radar = document.createElement("div");
    els = me._radar__img = document.createElement("img");
    els.className = "ggskin ggskin_radar";
    hs = basePath + "images/radar.png";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "radar";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 400px;";
    hs += "left : -10000px;";
    hs += "opacity : 0;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : hidden;";
    hs += "width : 400px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._radar.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._radar.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._mh_radar.appendChild(me._radar);
    me._floorplans.appendChild(me._mh_radar);
    el = me._marker_node10 = document.createElement("div");
    el.ggMarkerNodeId = "{node14}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node10";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 134px;";
    hs += "position : absolute;";
    hs += "top : 313px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node10.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node10.onclick = function (e) {
      player.openNext("{node14}");
    };
    me._marker_node10.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 134;
      me._mh_radar.ggParameter.ry = 313;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node10.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node10);
    el = me._marker_node1 = document.createElement("div");
    el.ggMarkerNodeId = "{node5}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 107px;";
    hs += "position : absolute;";
    hs += "top : 271px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node1.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node1.onclick = function (e) {
      player.openNext("{node5}");
    };
    me._marker_node1.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 107;
      me._mh_radar.ggParameter.ry = 271;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node1.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node1);
    el = me._marker_node2 = document.createElement("div");
    el.ggMarkerNodeId = "{node6}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node2";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 52px;";
    hs += "position : absolute;";
    hs += "top : 157px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node2.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node2.onclick = function (e) {
      player.openNext("{node6}");
    };
    me._marker_node2.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 52;
      me._mh_radar.ggParameter.ry = 157;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node2.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node2);
    el = me._marker_node4 = document.createElement("div");
    el.ggMarkerNodeId = "{node8}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node4";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 105px;";
    hs += "position : absolute;";
    hs += "top : 233px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node4.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node4.onclick = function (e) {
      player.openNext("{node8}");
    };
    me._marker_node4.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 105;
      me._mh_radar.ggParameter.ry = 233;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node4.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node4);
    el = me._marker_node3 = document.createElement("div");
    el.ggMarkerNodeId = "{node7}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node3";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 123px;";
    hs += "position : absolute;";
    hs += "top : 210px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node3.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node3.onclick = function (e) {
      player.openNext("{node7}");
    };
    me._marker_node3.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 123;
      me._mh_radar.ggParameter.ry = 210;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node3.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node3);
    el = me._marker_node5 = document.createElement("div");
    el.ggMarkerNodeId = "{node9}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node5";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 161px;";
    hs += "position : absolute;";
    hs += "top : 210px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node5.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node5.onclick = function (e) {
      player.openNext("{node9}");
    };
    me._marker_node5.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 161;
      me._mh_radar.ggParameter.ry = 210;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node5.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node5);
    el = me._marker_node6 = document.createElement("div");
    el.ggMarkerNodeId = "{node10}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node6";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 191px;";
    hs += "position : absolute;";
    hs += "top : 173px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node6.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node6.onclick = function (e) {
      player.openNext("{node10}");
    };
    me._marker_node6.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 191;
      me._mh_radar.ggParameter.ry = 173;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node6.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node6);
    el = me._marker_node7 = document.createElement("div");
    el.ggMarkerNodeId = "{node11}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node7";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 229px;";
    hs += "position : absolute;";
    hs += "top : 177px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node7.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node7.onclick = function (e) {
      player.openNext("{node11}");
    };
    me._marker_node7.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 229;
      me._mh_radar.ggParameter.ry = 177;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node7.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node7);
    el = me._marker_node8 = document.createElement("div");
    el.ggMarkerNodeId = "{node12}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node8";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 200px;";
    hs += "position : absolute;";
    hs += "top : 257px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node8.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node8.onclick = function (e) {
      player.openNext("{node12}");
    };
    me._marker_node8.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 200;
      me._mh_radar.ggParameter.ry = 257;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node8.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node8);
    el = me._marker_node9 = document.createElement("div");
    el.ggMarkerNodeId = "{node13}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_node9";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 229px;";
    hs += "position : absolute;";
    hs += "top : 257px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_node9.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_node9.onclick = function (e) {
      player.openNext("{node13}");
    };
    me._marker_node9.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 229;
      me._mh_radar.ggParameter.ry = 257;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_node9.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_node9);
    el = me._firstfloor = document.createElement("div");
    els = me._firstfloor__img = document.createElement("img");
    els.className = "ggskin ggskin_firstfloor";
    hs =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QHTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjYuMCI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMj" +
      "QtMDctMTZUMTQ6MTM6MDMrMDU6MzAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA3LTE2VDE0OjEzOjAzKzA1OjMwIgogICB4bXA6Q3JlYXRvclRvb2w9IlBhbm8yVlIgNi4xLjExIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+/9sAQwAoHB4jHhkoIyEjLSsoMDxkQTw3Nzx7WF1JZJGAmZaPgIyKoLTmw6Cq2q2KjMj/y9ru9f///5vB////+v/m/f/4/9sAQwErLS08NTx2QUF2+KWMpfj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4/8AAEQgBkAE2AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYH" +
      "CAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4" +
      "iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A2aKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACms2OAMmnVGOWY++KA" +
      "F+f+9j8KPn/v/pS0UAJ8/wDf/Sj5/wC/+lLRQAnz/wB/9KPn/v8A6UtFACfP/f8A0o+f+/8ApS0UAJ8/9/8ASj5/7/6UtFACfP8A3/0o+f8Av/pS0UAJ8/8Af/Sj5/7/AOlLRQAnz/3/ANKPn/v/AKUtFACfP/f/AEo+f+/+lLRQAnz/AN/9KPn/AL/6UtFACfP/AH/0o+f+/wDpS0UAJ8/9/wDSj5/7/wClLRQAnz/3/wBKPn/v/pS0UAJ8/wDf/Sj5/wC/+lLRQAnz/wB/9KPn/v8A6UtFACbmX73I9af1ptEf3SPQ4oAdRRRQAUUUUAFFFFABUa9W+pqSo16t9TQApIFAYGmN940L1FICSiiimAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAhOKTcKH7UykBLRH0b60g" +
      "6Clj6N9aYDqKKKACiiigAooooAKjXq31NSVGvVvqaAGt940L1FDfeNC9RSESUUUUxjS6g9aN6+tR+tLQK4/evrRvX1plIelAXJqKRfuj6UtAwooooAKKKKACiiigAooooAKKKKACiiigBKTevrQ/3TTKAH719aN6+tMooFckBBHFLTI+h+tPoGNftTKe/amUhEg6Clj6N9aQdBSx9G+tMY6iiigAooooAKKKKACo16t9TUlRr1b6mgBrfeNC9RQ33jQvUUhElFFFMZF6/Wij1+tFMQUh6UtIelAEq/dH0paRfuj6UtIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAjDIIqPa3pUtFAEW1vSja3pUtFADUBA5p1FFADX7Uynv2plIRIOgpY+jfWkHQUsfRvrTGOooooAKKKKACiiigAqNerfU1JUa9W+poAa33jQvUUN" +
      "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";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "firstfloor";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 400px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : -400px;";
    hs += "visibility : inherit;";
    hs += "width : 310px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._firstfloor.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._firstfloor.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._firstfloor);
    el = me._marker_nodei1 = document.createElement("div");
    el.ggMarkerNodeId = "{node1}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_nodei1";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 114px;";
    hs += "position : absolute;";
    hs += "top : -227px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_nodei1.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_nodei1.onclick = function (e) {
      player.openNext("{node1}");
    };
    me._marker_nodei1.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 114;
      me._mh_radar.ggParameter.ry = -227;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_nodei1.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_nodei1);
    el = me._marker_nodei2 = document.createElement("div");
    el.ggMarkerNodeId = "{node2}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_nodei2";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 142px;";
    hs += "position : absolute;";
    hs += "top : -265px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_nodei2.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_nodei2.onclick = function (e) {
      player.openNext("{node2}");
    };
    me._marker_nodei2.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 142;
      me._mh_radar.ggParameter.ry = -265;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_nodei2.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_nodei2);
    el = me._marker_nodei3 = document.createElement("div");
    el.ggMarkerNodeId = "{node3}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_nodei3";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 144px;";
    hs += "position : absolute;";
    hs += "top : -226px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_nodei3.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_nodei3.onclick = function (e) {
      player.openNext("{node3}");
    };
    me._marker_nodei3.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 144;
      me._mh_radar.ggParameter.ry = -226;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_nodei3.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_nodei3);
    el = me._marker_nodei4 = document.createElement("div");
    el.ggMarkerNodeId = "{node4}";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "marker_nodei4";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 104px;";
    hs += "position : absolute;";
    hs += "top : -262px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._marker_nodei4.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._marker_nodei4.onclick = function (e) {
      player.openNext("{node4}");
    };
    me._marker_nodei4.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 104;
      me._mh_radar.ggParameter.ry = -262;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._marker_nodei4.ggUpdatePosition = function (useTransition) {};
    me._floorplans.appendChild(me._marker_nodei4);
    me._mask.appendChild(me._floorplans);
    me._floor_plan_bg.appendChild(me._mask);
    me.divSkin.appendChild(me._floor_plan_bg);
    el = me._control = document.createElement("div");
    el.ggId = "control";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "bottom : 20px;";
    hs += "height : 60px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 160px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._control.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._control.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
      }
    };
    el = me._background = document.createElement("div");
    el.ggId = "Background";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 30px;";
    hs += "border-radius : 30px;";
    hs += "background : #202020;";
    hs += "border : 0px solid #000000;";
    hs += "bottom : 0px;";
    hs += "cursor : default;";
    hs += "height : 60px;";
    hs += "left : -10000px;";
    hs += "opacity : 0.5;";
    hs += "position : absolute;";
    hs += "visibility : inherit;";
    hs += "width : 160px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._background.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._background.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
      }
    };
    me._control.appendChild(me._background);
    el = me._floorplan_open = document.createElement("div");
    el.ggId = "floorplan_open";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 110px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floorplan_open.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplan_open.onclick = function (e) {
      if (player.transitionsDisabled) {
        me._floor_plan_bg.style[domTransition] = "none";
      } else {
        me._floor_plan_bg.style[domTransition] = "all 300ms ease-out 0ms";
      }
      me._floor_plan_bg.ggParameter.rx = 400;
      me._floor_plan_bg.ggParameter.ry = 0;
      me._floor_plan_bg.style[domTransform] = parameterToTransform(
        me._floor_plan_bg.ggParameter,
      );
      me._floorplan_open.style[domTransition] = "none";
      me._floorplan_open.ggParameter.sx = 0;
      me._floorplan_open.ggParameter.sy = 0;
      me._floorplan_open.style[domTransform] = parameterToTransform(
        me._floorplan_open.ggParameter,
      );
      me._floorplan_close.style[domTransition] = "none";
      me._floorplan_close.ggParameter.sx = 1;
      me._floorplan_close.ggParameter.sy = 1;
      me._floorplan_close.style[domTransform] = parameterToTransform(
        me._floorplan_close.ggParameter,
      );
    };
    me._floorplan_open.ggUpdatePosition = function (useTransition) {};
    el = me._image_2 = document.createElement("div");
    els = me._image_2__img = document.createElement("img");
    els.className = "ggskin ggskin_image_2";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB5UlEQVRYhc2Z/XGjMBBH3zIugHQAFTgdhJRwHbiDpANfKoivgqQTkwrsqwBSAXTwuz8E8ceBMWAj3gzj8YyEn3eRtBLGQCQlwCPwVH2G1QVQAnl1/QVSM0uH/lYfqVDSWlKh/mSSPiRF9xJ7HyDVxu1EJb1oWMS6yCStxsrdMmptvA8RCyVtJ5Cr2UkKu80OgrsJ5Wq2TS5BU1px08bUJOpKt6SVh8id83rsZEdyEbAFojtEpw8lEJtZCacpXuNfDtxqtK6/GPxEL/Mk1MaDmZV1BNcXm/rhFQ4RzJhHeo8pzexhIVeVRE0t4jjudccsy0b1OyOUlARA0utu0/IYAEvfFhdIFlz57LWkoTOdQ/tVLAPmNziOCQMOZfocCf8rFuZGgFv75ko5d8F8Ae" +
      "y5YqD0nXzH9qv4DoCvMXe4M/sAF8G5ktbFQsH8ppvczOJ6mvnjVaWZFA7lVggUPm0aiM0sDwCq+n9OUfw0sxxON00hruz3/SzmwHMt+LPUVVF88+N0wlst14ikjbcdsbS56i9o2nOZml2TS1s184tpJ/AUeO7dS9Ok+7q0XpBcyR023ppCZ+cwYyQjSZ83lNuoz3ngANFsgFQh6XdfMetu0iqb4PbUS1w9GXH6GqLEDbQvYD/0NcQ/R92JHtZ5I64AAAAASUVORK5CYII=";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 2";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_2.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_2.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._floorplan_open.appendChild(me._image_2);
    el = me._floorplan_open_hit = document.createElement("div");
    el.ggId = "floorplan_open_hit";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 15px;";
    hs += "border-radius : 15px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floorplan_open_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplan_open_hit.ggUpdatePosition = function (useTransition) {};
    me._floorplan_open.appendChild(me._floorplan_open_hit);
    me._control.appendChild(me._floorplan_open);
    el = me._floorplan_close = document.createElement("div");
    el.ggId = "floorplan_close";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0, sy: 0 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 110px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    el.style[domTransform] = parameterToTransform(el.ggParameter);
    me._floorplan_close.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplan_close.onclick = function (e) {
      if (player.transitionsDisabled) {
        me._floor_plan_bg.style[domTransition] = "none";
      } else {
        me._floor_plan_bg.style[domTransition] = "all 300ms ease-out 0ms";
      }
      me._floor_plan_bg.ggParameter.rx = 0;
      me._floor_plan_bg.ggParameter.ry = 0;
      me._floor_plan_bg.style[domTransform] = parameterToTransform(
        me._floor_plan_bg.ggParameter,
      );
      me._floorplan_close.style[domTransition] = "none";
      me._floorplan_close.ggParameter.sx = 0;
      me._floorplan_close.ggParameter.sy = 0;
      me._floorplan_close.style[domTransform] = parameterToTransform(
        me._floorplan_close.ggParameter,
      );
      me._floorplan_open.style[domTransition] = "none";
      me._floorplan_open.ggParameter.sx = 1;
      me._floorplan_open.ggParameter.sy = 1;
      me._floorplan_open.style[domTransform] = parameterToTransform(
        me._floorplan_open.ggParameter,
      );
    };
    me._floorplan_close.ggUpdatePosition = function (useTransition) {};
    el = me._image_3 = document.createElement("div");
    els = me._image_3__img = document.createElement("img");
    els.className = "ggskin ggskin_image_3";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACf0lEQVRYhcWZP5KiQBTGP+YAFgcg6L0AuwewatlQsi1NzLzBmBCPOcGYTuRkBmrt3kD3BM4GkDJbkEtxgW8D/D8gdNMyX1WXBfajf/We/V77MKAokg6AbwC+7z/N/QCAFMD7fvwFsDEMY6O6lgyUSfKJ5I7yikjOSIp7gT0rQJVJHyjJR6p5rEoRyVFTOJ1eK9OzCphJct0C3EFbkmY12Qlw2yLcQesiloeisCJPG23LYVW4SY4+wXPXGp8zGWdwAsAagLiDd2SUAvhiGEYKXIb4CRVwYRhiuVzeDy2XuWc5iaSo8nsQBLRtm0IILhYL6bjFcUzXdRkEQV0T8xxwVjXbdV0KIY5DBjKOY3a7XQohaNt2XcgJcAqxU+X3l5cXWJZ1vPY8r1a4kyTBcD" +
      "hEkiQAgCzLEIZhpR2Ax4P3HBVP1PGk7PwCOSA5kbGou6gGOJIcg+QvWauqxTXBkeRv5bJWBqERjiQjg+QOp5OwlK43AAB0Oh1kWXa89n0fg8FA5fEAkBokqWpdBqkJDkDBYUFWlmXB9/0P9/v9fmM4IAdMmzwgSRJ4nvfh/mq10lEW00aAReFVSeY39P4A4E0XnO/7mM/nOiH/geRYV4qp+72EJlKlTmZxTZAOAIA1/1a2XIujY6BZox6rLtYAcnYOaFbN/oTzoLjYLiSnt2brOFH3er26cDNci7kXb/4WgyBoUvjrKmJZ34YKKecOGt3MjKwI9Z01rZW+2W5f5qBtEUvZaeYnFEugojYAfkhbsZ1w1wvrDcgR852lWzte9WGaQAqSrxrhppTpByqARgpQO+YlVQrMqJ5SCusg70h8Rd50Erh8DZEi32h/ALypvob4" +
      "Dy2h/aUmdZByAAAAAElFTkSuQmCC";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 3";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_3.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_3.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._floorplan_close.appendChild(me._image_3);
    el = me._floorplan_close_hit = document.createElement("div");
    el.ggId = "floorplan_close_hit";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 15px;";
    hs += "border-radius : 15px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._floorplan_close_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._floorplan_close_hit.ggUpdatePosition = function (useTransition) {};
    me._floorplan_close.appendChild(me._floorplan_close_hit);
    me._control.appendChild(me._floorplan_close);
    el = me._button_zoomin = document.createElement("div");
    el.ggId = "button_zoomin";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 10px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_zoomin.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_zoomin.onmouseout = function (e) {
      me.elementMouseDown["button_zoomin"] = false;
    };
    me._button_zoomin.onmousedown = function (e) {
      me.elementMouseDown["button_zoomin"] = true;
    };
    me._button_zoomin.onmouseup = function (e) {
      me.elementMouseDown["button_zoomin"] = false;
    };
    me._button_zoomin.ontouchend = function (e) {
      me.elementMouseDown["button_zoomin"] = false;
    };
    me._button_zoomin.ggUpdatePosition = function (useTransition) {};
    el = me._image_10 = document.createElement("div");
    els = me._image_10__img = document.createElement("img");
    els.className = "ggskin ggskin_image_10";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACBUlEQVRYhc2Zz5GiQByF369rAiCENgLnprdlQ9gMzAAycIwAJoI1k2FuctKJADcCyeDtARjRaRAabPiqKK1qgY/Xbf9DYAlJH8ArgF/lp1ceAJADOJfHF4BERBLbe/WR8khuSV7Yn4zkX5L6WWKRhVQT44mSDGiX2CMykpuhcmOm1kRkI+aR/HAgV3Ek6T02uwoeHcpVfJhclKlaUXQbrvH5qLpJbmwfP4oiaq2ptWYUDWq6Yd1J1eQ0gO1TsunHlrX2WK/iLQDtXOcnHmpBKeA7vc00PkbCKsUqwTlU7T0hcBX0p/NoJAAAxWJWoidVMeOR9BXmmV7FqwKwnNqiBV9hntVbsXxBi2Acx52vlKbpzfeu54Zh2FbsCUk2lS4Wi65+1mRZ1lr+Y7IwN1" +
      "5QLHCMc7EgCDpfKE1THA4HAMB6vcZqtRrDLweLqfdgRpzN1DkqAKcxHvVJ/FMAPqe2aOE09wQTVa7486lNDJxFJKm6mfdJVcwkwLUf7D5kuGMHlIIikmNeKe5F5AzcjiRvmEdbPKNMD6gJlinuDCe4ZlelB9yNxSISY9qqfheR/cNf0e2+zPewZnJpms38gdsOPAHwu/dZJGMHyQ3r4ljs12RPELvwbh9miKQmuR9RLmaf/UAL0cxC6kLyra+YDJD1UayplygWXhq3ryFyFH+0TwAn29cQ/wHAPZslQMfV7QAAAABJRU5ErkJggg==";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_10.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_10.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._button_zoomin.appendChild(me._image_10);
    el = me._button_zoomin_hit = document.createElement("div");
    el.ggId = "button_zoomin_hit";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 15px;";
    hs += "border-radius : 15px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_zoomin_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_zoomin_hit.ggUpdatePosition = function (useTransition) {};
    me._button_zoomin.appendChild(me._button_zoomin_hit);
    me._control.appendChild(me._button_zoomin);
    el = me._button_zoomout = document.createElement("div");
    el.ggId = "button_zoomout";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 20px;";
    hs += "border-radius : 20px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #202020;";
    hs += "cursor : default;";
    hs += "height : 40px;";
    hs += "left : 60px;";
    hs += "position : absolute;";
    hs += "top : 10px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_zoomout.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_zoomout.onmouseout = function (e) {
      me.elementMouseDown["button_zoomout"] = false;
    };
    me._button_zoomout.onmousedown = function (e) {
      me.elementMouseDown["button_zoomout"] = true;
    };
    me._button_zoomout.onmouseup = function (e) {
      me.elementMouseDown["button_zoomout"] = false;
    };
    me._button_zoomout.ontouchend = function (e) {
      me.elementMouseDown["button_zoomout"] = false;
    };
    me._button_zoomout.ggUpdatePosition = function (useTransition) {};
    el = me._image_1 = document.createElement("div");
    els = me._image_1__img = document.createElement("img");
    els.className = "ggskin ggskin_image_1";
    hs =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACAUlEQVRYhc2ZQXKiQBSGv0dlbZG9C1zqxlzAGnKEuYE3mNzAyQninGByE015AJ2NW50q91Je4J8FdNQMYCBK81VRFNVQfLwH3a8boyaSYuAB+Jbtw2wDSIBttv0B5mY2r3uvKlKhpImkvaqzkfRbUnQrsZcaUkVcT1TSD9WL2CU2ksZflbtm1Ip4qSMWSpo1IOdYSgovmx0Flw3KOWZ5LkFeWkm7jaaJdSndksYeIveRp1MnO5GLgBkQ3SA6VUiAnpklcJ7iCf7lIB2NJu7A4D16G09CRdybWeIiOCk91Q9PcIzghnak95TEzO4DpVVJ5Fkmj1BSHACxb5MSHgJg6NuihDignel1DO8oEVyv1xwOh5saDAYDOp1OUXNoklTUOhqN2O12tzHLWCwWdL" +
      "vdwvb/ioW2cUc69uXWYv1+v/TprkFJegESa2kn7VgFwMq3RQl/A+DNt0UJrY/g3BULewo+FI9szaznuplfXlXymcOx3AqBvU+bHHpmtg0Asvq/TVF8NbMtnE+aQtKy3/e7uAUeneD7UJdF8dmP0xnPTi4XSVM/02FJ0vRTj6Bm12UcyzyXomrmO8124HPgsfJVaibdn0trieRY6WLjtdnrwzrMVyQjSa9XlJuqynpgDdFNDam9pJ9VxezyKYWyMemcekha8Eac/4ZISD+0N2BV9zfEP0ZZkBUKNmggAAAAAElFTkSuQmCC";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Image 1";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 40px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._image_1.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._image_1.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._button_zoomout.appendChild(me._image_1);
    el = me._button_zoomout_hit = document.createElement("div");
    el.ggId = "button_zoomout_hit";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 15px;";
    hs += "border-radius : 15px;";
    hs += "background : rgba(255,255,255,0.0392157);";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : pointer;";
    hs += "height : 40px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._button_zoomout_hit.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._button_zoomout_hit.ggUpdatePosition = function (useTransition) {};
    me._button_zoomout.appendChild(me._button_zoomout_hit);
    me._control.appendChild(me._button_zoomout);
    me.divSkin.appendChild(me._control);
    el = me._hide_mh = document.createElement("div");
    el.ggId = "hide_mh";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = false;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 39px;";
    hs += "position : absolute;";
    hs += "right : 13px;";
    hs += "top : 10px;";
    hs += "visibility : hidden;";
    hs += "width : 114px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._hide_mh.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._hide_mh.ggUpdatePosition = function (useTransition) {};
    el = me._markertemplate = document.createElement("div");
    el.ggMarkerNodeId = "";
    el.ggMarkerInstances = [];
    nodeMarker.push(el);
    el.ggId = "markertemplate";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_mark ";
    el.ggType = "mark";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 0px;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._markertemplate.ggIsActive = function () {
      return this.ggIsMarkerActive == true;
    };
    el.ggElementNodeId = function () {
      var hs = String(this.ggMarkerNodeId);
      if (hs.charAt(0) == "{") {
        // }
        return hs.substr(1, hs.length - 2);
      }
      return "";
    };
    me._markertemplate.ggActivate = function () {
      me._mh_radar.style[domTransition] = "none";
      me._mh_radar.ggParameter.rx = 0;
      me._mh_radar.ggParameter.ry = 0;
      me._mh_radar.style[domTransform] = parameterToTransform(
        me._mh_radar.ggParameter,
      );
    };
    me._markertemplate.ggUpdatePosition = function (useTransition) {};
    me._hide_mh.appendChild(me._markertemplate);
    me.divSkin.appendChild(me._hide_mh);
    el = me._logo = document.createElement("div");
    els = me._logo__img = document.createElement("img");
    els.className = "ggskin ggskin_logo";
    hs = basePath + "images/logo.png";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_button";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Logo";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_button ";
    el.ggType = "button";
    hs = "";
    hs += "height : 200px;";
    hs += "position : absolute;";
    hs += "right : -10px;";
    hs += "top : -50px;";
    hs += "visibility : inherit;";
    hs += "width : 200px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._logo.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._logo.onclick = function (e) {
      player.openUrl("https://www.thebunq.com/", "");
    };
    me._logo.ggUpdatePosition = function (useTransition) {};
    me.divSkin.appendChild(me._logo);
    el = me._loader = document.createElement("div");
    el.ggId = "loader";
    el.ggDx = 0;
    el.ggDy = -1;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "background : #000000;";
    hs += "border : 0px solid #0000ff;";
    hs += "cursor : default;";
    hs += "height : 100%;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 100%;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._loader.ggIsActive = function () {
      return false;
    };
    el.ggElementNodeId = function () {
      return player.getCurrentNode();
    };
    me._loader.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    el = me._loadbar = document.createElement("div");
    el.ggId = "loadbar";
    el.ggDx = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += "z-index: 1;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : default;";
    hs += "height : 5px;";
    hs += "left : -10000px;";
    hs += "opacity : 0.5;";
    hs += "position : absolute;";
    hs += "top : 50%;";
    hs += "visibility : inherit;";
    hs += "width : 220px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "0% 50%";
    me._loadbar.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._loadbar.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
      }
    };
    me._loader.appendChild(me._loadbar);
    el = me._loader_logo = document.createElement("div");
    els = me._loader_logo__img = document.createElement("img");
    els.className = "ggskin ggskin_loader_logo";
    hs = basePath + "images/loader_logo.png";
    els.setAttribute("src", hs);
    els.ggNormalSrc = hs;
    els.setAttribute(
      "style",
      "position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;",
    );
    els.className = "ggskin ggskin_image";
    els["ondragstart"] = function () {
      return false;
    };
    player.checkLoaded.push(els);
    el.appendChild(els);
    el.ggSubElement = els;
    el.ggId = "Loader logo";
    el.ggDx = 0;
    el.ggDy = -50;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_image ";
    el.ggType = "image";
    hs = "";
    hs += "height : 200px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 200px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._loader_logo.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return player.getCurrentNode();
    };
    me._loader_logo.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._loader.appendChild(me._loader_logo);
    me.divSkin.appendChild(me._loader);
    me._ground_floor_trigger.ggMarkerNormal = null;
    me._ground_floor_trigger.ggMarkerInstances.push(null);
    me._ground_floor_trigger.ggMarkerActive = null;
    me._ground_floor_trigger.ggMarkerInstances.push(null);
    for (var i = 0; i < me._ground_floor_trigger.childNodes.length; i++) {
      me._ground_floor_trigger.ggMarkerInstances.push(
        me._ground_floor_trigger.childNodes[i],
      );
    }
    me._first_floor_trigger.ggMarkerNormal = null;
    me._first_floor_trigger.ggMarkerInstances.push(null);
    me._first_floor_trigger.ggMarkerActive = null;
    me._first_floor_trigger.ggMarkerInstances.push(null);
    for (var i = 0; i < me._first_floor_trigger.childNodes.length; i++) {
      me._first_floor_trigger.ggMarkerInstances.push(
        me._first_floor_trigger.childNodes[i],
      );
    }
    me._floor_location.style[domTransition] = "none";
    me._floor_location.ggParameter.rx = 10;
    me._floor_location.ggParameter.ry = 10;
    me._floor_location.style[domTransform] = parameterToTransform(
      me._floor_location.ggParameter,
    );
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._marker_node10,
    );
    me._marker_node10__normal = clonedNormalElement._mhn;
    me._marker_node10__normal.style.visibility = "inherit";
    me._marker_node10__normal.style.left = "0px";
    me._marker_node10__normal.style.top = "0px";
    me._marker_node10.ggMarkerNormal = me._marker_node10__normal;
    me._marker_node10.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._marker_node10,
    );
    me._marker_node10__active = clonedActiveElement._mha;
    me._marker_node10__active.style.visibility = "hidden";
    me._marker_node10__active.style.left = "0px";
    me._marker_node10__active.style.top = "0px";
    me._marker_node10.ggMarkerActive = me._marker_node10__active;
    me._marker_node10.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node10.firstChild) {
      me._marker_node10.insertBefore(
        me._marker_node10__active,
        me._marker_node10.firstChild,
      );
    } else {
      me._marker_node10.appendChild(me._marker_node10__active);
    }
    if (me._marker_node10.firstChild) {
      me._marker_node10.insertBefore(
        me._marker_node10__normal,
        me._marker_node10.firstChild,
      );
    } else {
      me._marker_node10.appendChild(me._marker_node10__normal);
    }
    for (var i = 0; i < me._marker_node10.childNodes.length; i++) {
      me._marker_node10.ggMarkerInstances.push(me._marker_node10.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node1);
    me._marker_node1__normal = clonedNormalElement._mhn;
    me._marker_node1__normal.style.visibility = "inherit";
    me._marker_node1__normal.style.left = "0px";
    me._marker_node1__normal.style.top = "0px";
    me._marker_node1.ggMarkerNormal = me._marker_node1__normal;
    me._marker_node1.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node1);
    me._marker_node1__active = clonedActiveElement._mha;
    me._marker_node1__active.style.visibility = "hidden";
    me._marker_node1__active.style.left = "0px";
    me._marker_node1__active.style.top = "0px";
    me._marker_node1.ggMarkerActive = me._marker_node1__active;
    me._marker_node1.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node1.firstChild) {
      me._marker_node1.insertBefore(
        me._marker_node1__active,
        me._marker_node1.firstChild,
      );
    } else {
      me._marker_node1.appendChild(me._marker_node1__active);
    }
    if (me._marker_node1.firstChild) {
      me._marker_node1.insertBefore(
        me._marker_node1__normal,
        me._marker_node1.firstChild,
      );
    } else {
      me._marker_node1.appendChild(me._marker_node1__normal);
    }
    for (var i = 0; i < me._marker_node1.childNodes.length; i++) {
      me._marker_node1.ggMarkerInstances.push(me._marker_node1.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node2);
    me._marker_node2__normal = clonedNormalElement._mhn;
    me._marker_node2__normal.style.visibility = "inherit";
    me._marker_node2__normal.style.left = "0px";
    me._marker_node2__normal.style.top = "0px";
    me._marker_node2.ggMarkerNormal = me._marker_node2__normal;
    me._marker_node2.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node2);
    me._marker_node2__active = clonedActiveElement._mha;
    me._marker_node2__active.style.visibility = "hidden";
    me._marker_node2__active.style.left = "0px";
    me._marker_node2__active.style.top = "0px";
    me._marker_node2.ggMarkerActive = me._marker_node2__active;
    me._marker_node2.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node2.firstChild) {
      me._marker_node2.insertBefore(
        me._marker_node2__active,
        me._marker_node2.firstChild,
      );
    } else {
      me._marker_node2.appendChild(me._marker_node2__active);
    }
    if (me._marker_node2.firstChild) {
      me._marker_node2.insertBefore(
        me._marker_node2__normal,
        me._marker_node2.firstChild,
      );
    } else {
      me._marker_node2.appendChild(me._marker_node2__normal);
    }
    for (var i = 0; i < me._marker_node2.childNodes.length; i++) {
      me._marker_node2.ggMarkerInstances.push(me._marker_node2.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node4);
    me._marker_node4__normal = clonedNormalElement._mhn;
    me._marker_node4__normal.style.visibility = "inherit";
    me._marker_node4__normal.style.left = "0px";
    me._marker_node4__normal.style.top = "0px";
    me._marker_node4.ggMarkerNormal = me._marker_node4__normal;
    me._marker_node4.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node4);
    me._marker_node4__active = clonedActiveElement._mha;
    me._marker_node4__active.style.visibility = "hidden";
    me._marker_node4__active.style.left = "0px";
    me._marker_node4__active.style.top = "0px";
    me._marker_node4.ggMarkerActive = me._marker_node4__active;
    me._marker_node4.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node4.firstChild) {
      me._marker_node4.insertBefore(
        me._marker_node4__active,
        me._marker_node4.firstChild,
      );
    } else {
      me._marker_node4.appendChild(me._marker_node4__active);
    }
    if (me._marker_node4.firstChild) {
      me._marker_node4.insertBefore(
        me._marker_node4__normal,
        me._marker_node4.firstChild,
      );
    } else {
      me._marker_node4.appendChild(me._marker_node4__normal);
    }
    for (var i = 0; i < me._marker_node4.childNodes.length; i++) {
      me._marker_node4.ggMarkerInstances.push(me._marker_node4.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node3);
    me._marker_node3__normal = clonedNormalElement._mhn;
    me._marker_node3__normal.style.visibility = "inherit";
    me._marker_node3__normal.style.left = "0px";
    me._marker_node3__normal.style.top = "0px";
    me._marker_node3.ggMarkerNormal = me._marker_node3__normal;
    me._marker_node3.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node3);
    me._marker_node3__active = clonedActiveElement._mha;
    me._marker_node3__active.style.visibility = "hidden";
    me._marker_node3__active.style.left = "0px";
    me._marker_node3__active.style.top = "0px";
    me._marker_node3.ggMarkerActive = me._marker_node3__active;
    me._marker_node3.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node3.firstChild) {
      me._marker_node3.insertBefore(
        me._marker_node3__active,
        me._marker_node3.firstChild,
      );
    } else {
      me._marker_node3.appendChild(me._marker_node3__active);
    }
    if (me._marker_node3.firstChild) {
      me._marker_node3.insertBefore(
        me._marker_node3__normal,
        me._marker_node3.firstChild,
      );
    } else {
      me._marker_node3.appendChild(me._marker_node3__normal);
    }
    for (var i = 0; i < me._marker_node3.childNodes.length; i++) {
      me._marker_node3.ggMarkerInstances.push(me._marker_node3.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node5);
    me._marker_node5__normal = clonedNormalElement._mhn;
    me._marker_node5__normal.style.visibility = "inherit";
    me._marker_node5__normal.style.left = "0px";
    me._marker_node5__normal.style.top = "0px";
    me._marker_node5.ggMarkerNormal = me._marker_node5__normal;
    me._marker_node5.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node5);
    me._marker_node5__active = clonedActiveElement._mha;
    me._marker_node5__active.style.visibility = "hidden";
    me._marker_node5__active.style.left = "0px";
    me._marker_node5__active.style.top = "0px";
    me._marker_node5.ggMarkerActive = me._marker_node5__active;
    me._marker_node5.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node5.firstChild) {
      me._marker_node5.insertBefore(
        me._marker_node5__active,
        me._marker_node5.firstChild,
      );
    } else {
      me._marker_node5.appendChild(me._marker_node5__active);
    }
    if (me._marker_node5.firstChild) {
      me._marker_node5.insertBefore(
        me._marker_node5__normal,
        me._marker_node5.firstChild,
      );
    } else {
      me._marker_node5.appendChild(me._marker_node5__normal);
    }
    for (var i = 0; i < me._marker_node5.childNodes.length; i++) {
      me._marker_node5.ggMarkerInstances.push(me._marker_node5.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node6);
    me._marker_node6__normal = clonedNormalElement._mhn;
    me._marker_node6__normal.style.visibility = "inherit";
    me._marker_node6__normal.style.left = "0px";
    me._marker_node6__normal.style.top = "0px";
    me._marker_node6.ggMarkerNormal = me._marker_node6__normal;
    me._marker_node6.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node6);
    me._marker_node6__active = clonedActiveElement._mha;
    me._marker_node6__active.style.visibility = "hidden";
    me._marker_node6__active.style.left = "0px";
    me._marker_node6__active.style.top = "0px";
    me._marker_node6.ggMarkerActive = me._marker_node6__active;
    me._marker_node6.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node6.firstChild) {
      me._marker_node6.insertBefore(
        me._marker_node6__active,
        me._marker_node6.firstChild,
      );
    } else {
      me._marker_node6.appendChild(me._marker_node6__active);
    }
    if (me._marker_node6.firstChild) {
      me._marker_node6.insertBefore(
        me._marker_node6__normal,
        me._marker_node6.firstChild,
      );
    } else {
      me._marker_node6.appendChild(me._marker_node6__normal);
    }
    for (var i = 0; i < me._marker_node6.childNodes.length; i++) {
      me._marker_node6.ggMarkerInstances.push(me._marker_node6.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node7);
    me._marker_node7__normal = clonedNormalElement._mhn;
    me._marker_node7__normal.style.visibility = "inherit";
    me._marker_node7__normal.style.left = "0px";
    me._marker_node7__normal.style.top = "0px";
    me._marker_node7.ggMarkerNormal = me._marker_node7__normal;
    me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node7);
    me._marker_node7__active = clonedActiveElement._mha;
    me._marker_node7__active.style.visibility = "hidden";
    me._marker_node7__active.style.left = "0px";
    me._marker_node7__active.style.top = "0px";
    me._marker_node7.ggMarkerActive = me._marker_node7__active;
    me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node7.firstChild) {
      me._marker_node7.insertBefore(
        me._marker_node7__active,
        me._marker_node7.firstChild,
      );
    } else {
      me._marker_node7.appendChild(me._marker_node7__active);
    }
    if (me._marker_node7.firstChild) {
      me._marker_node7.insertBefore(
        me._marker_node7__normal,
        me._marker_node7.firstChild,
      );
    } else {
      me._marker_node7.appendChild(me._marker_node7__normal);
    }
    for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
      me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node8);
    me._marker_node8__normal = clonedNormalElement._mhn;
    me._marker_node8__normal.style.visibility = "inherit";
    me._marker_node8__normal.style.left = "0px";
    me._marker_node8__normal.style.top = "0px";
    me._marker_node8.ggMarkerNormal = me._marker_node8__normal;
    me._marker_node8.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node8);
    me._marker_node8__active = clonedActiveElement._mha;
    me._marker_node8__active.style.visibility = "hidden";
    me._marker_node8__active.style.left = "0px";
    me._marker_node8__active.style.top = "0px";
    me._marker_node8.ggMarkerActive = me._marker_node8__active;
    me._marker_node8.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node8.firstChild) {
      me._marker_node8.insertBefore(
        me._marker_node8__active,
        me._marker_node8.firstChild,
      );
    } else {
      me._marker_node8.appendChild(me._marker_node8__active);
    }
    if (me._marker_node8.firstChild) {
      me._marker_node8.insertBefore(
        me._marker_node8__normal,
        me._marker_node8.firstChild,
      );
    } else {
      me._marker_node8.appendChild(me._marker_node8__normal);
    }
    for (var i = 0; i < me._marker_node8.childNodes.length; i++) {
      me._marker_node8.ggMarkerInstances.push(me._marker_node8.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(this, me._marker_node9);
    me._marker_node9__normal = clonedNormalElement._mhn;
    me._marker_node9__normal.style.visibility = "inherit";
    me._marker_node9__normal.style.left = "0px";
    me._marker_node9__normal.style.top = "0px";
    me._marker_node9.ggMarkerNormal = me._marker_node9__normal;
    me._marker_node9.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(this, me._marker_node9);
    me._marker_node9__active = clonedActiveElement._mha;
    me._marker_node9__active.style.visibility = "hidden";
    me._marker_node9__active.style.left = "0px";
    me._marker_node9__active.style.top = "0px";
    me._marker_node9.ggMarkerActive = me._marker_node9__active;
    me._marker_node9.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_node9.firstChild) {
      me._marker_node9.insertBefore(
        me._marker_node9__active,
        me._marker_node9.firstChild,
      );
    } else {
      me._marker_node9.appendChild(me._marker_node9__active);
    }
    if (me._marker_node9.firstChild) {
      me._marker_node9.insertBefore(
        me._marker_node9__normal,
        me._marker_node9.firstChild,
      );
    } else {
      me._marker_node9.appendChild(me._marker_node9__normal);
    }
    for (var i = 0; i < me._marker_node9.childNodes.length; i++) {
      me._marker_node9.ggMarkerInstances.push(me._marker_node9.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._marker_nodei1,
    );
    me._marker_nodei1__normal = clonedNormalElement._mhn;
    me._marker_nodei1__normal.style.visibility = "inherit";
    me._marker_nodei1__normal.style.left = "0px";
    me._marker_nodei1__normal.style.top = "0px";
    me._marker_nodei1.ggMarkerNormal = me._marker_nodei1__normal;
    me._marker_nodei1.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._marker_nodei1,
    );
    me._marker_nodei1__active = clonedActiveElement._mha;
    me._marker_nodei1__active.style.visibility = "hidden";
    me._marker_nodei1__active.style.left = "0px";
    me._marker_nodei1__active.style.top = "0px";
    me._marker_nodei1.ggMarkerActive = me._marker_nodei1__active;
    me._marker_nodei1.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_nodei1.firstChild) {
      me._marker_nodei1.insertBefore(
        me._marker_nodei1__active,
        me._marker_nodei1.firstChild,
      );
    } else {
      me._marker_nodei1.appendChild(me._marker_nodei1__active);
    }
    if (me._marker_nodei1.firstChild) {
      me._marker_nodei1.insertBefore(
        me._marker_nodei1__normal,
        me._marker_nodei1.firstChild,
      );
    } else {
      me._marker_nodei1.appendChild(me._marker_nodei1__normal);
    }
    for (var i = 0; i < me._marker_nodei1.childNodes.length; i++) {
      me._marker_nodei1.ggMarkerInstances.push(me._marker_nodei1.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._marker_nodei2,
    );
    me._marker_nodei2__normal = clonedNormalElement._mhn;
    me._marker_nodei2__normal.style.visibility = "inherit";
    me._marker_nodei2__normal.style.left = "0px";
    me._marker_nodei2__normal.style.top = "0px";
    me._marker_nodei2.ggMarkerNormal = me._marker_nodei2__normal;
    me._marker_nodei2.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._marker_nodei2,
    );
    me._marker_nodei2__active = clonedActiveElement._mha;
    me._marker_nodei2__active.style.visibility = "hidden";
    me._marker_nodei2__active.style.left = "0px";
    me._marker_nodei2__active.style.top = "0px";
    me._marker_nodei2.ggMarkerActive = me._marker_nodei2__active;
    me._marker_nodei2.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_nodei2.firstChild) {
      me._marker_nodei2.insertBefore(
        me._marker_nodei2__active,
        me._marker_nodei2.firstChild,
      );
    } else {
      me._marker_nodei2.appendChild(me._marker_nodei2__active);
    }
    if (me._marker_nodei2.firstChild) {
      me._marker_nodei2.insertBefore(
        me._marker_nodei2__normal,
        me._marker_nodei2.firstChild,
      );
    } else {
      me._marker_nodei2.appendChild(me._marker_nodei2__normal);
    }
    for (var i = 0; i < me._marker_nodei2.childNodes.length; i++) {
      me._marker_nodei2.ggMarkerInstances.push(me._marker_nodei2.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._marker_nodei3,
    );
    me._marker_nodei3__normal = clonedNormalElement._mhn;
    me._marker_nodei3__normal.style.visibility = "inherit";
    me._marker_nodei3__normal.style.left = "0px";
    me._marker_nodei3__normal.style.top = "0px";
    me._marker_nodei3.ggMarkerNormal = me._marker_nodei3__normal;
    me._marker_nodei3.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._marker_nodei3,
    );
    me._marker_nodei3__active = clonedActiveElement._mha;
    me._marker_nodei3__active.style.visibility = "hidden";
    me._marker_nodei3__active.style.left = "0px";
    me._marker_nodei3__active.style.top = "0px";
    me._marker_nodei3.ggMarkerActive = me._marker_nodei3__active;
    me._marker_nodei3.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_nodei3.firstChild) {
      me._marker_nodei3.insertBefore(
        me._marker_nodei3__active,
        me._marker_nodei3.firstChild,
      );
    } else {
      me._marker_nodei3.appendChild(me._marker_nodei3__active);
    }
    if (me._marker_nodei3.firstChild) {
      me._marker_nodei3.insertBefore(
        me._marker_nodei3__normal,
        me._marker_nodei3.firstChild,
      );
    } else {
      me._marker_nodei3.appendChild(me._marker_nodei3__normal);
    }
    for (var i = 0; i < me._marker_nodei3.childNodes.length; i++) {
      me._marker_nodei3.ggMarkerInstances.push(me._marker_nodei3.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._marker_nodei4,
    );
    me._marker_nodei4__normal = clonedNormalElement._mhn;
    me._marker_nodei4__normal.style.visibility = "inherit";
    me._marker_nodei4__normal.style.left = "0px";
    me._marker_nodei4__normal.style.top = "0px";
    me._marker_nodei4.ggMarkerNormal = me._marker_nodei4__normal;
    me._marker_nodei4.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._marker_nodei4,
    );
    me._marker_nodei4__active = clonedActiveElement._mha;
    me._marker_nodei4__active.style.visibility = "hidden";
    me._marker_nodei4__active.style.left = "0px";
    me._marker_nodei4__active.style.top = "0px";
    me._marker_nodei4.ggMarkerActive = me._marker_nodei4__active;
    me._marker_nodei4.ggMarkerInstances.push(clonedActiveElement);
    if (me._marker_nodei4.firstChild) {
      me._marker_nodei4.insertBefore(
        me._marker_nodei4__active,
        me._marker_nodei4.firstChild,
      );
    } else {
      me._marker_nodei4.appendChild(me._marker_nodei4__active);
    }
    if (me._marker_nodei4.firstChild) {
      me._marker_nodei4.insertBefore(
        me._marker_nodei4__normal,
        me._marker_nodei4.firstChild,
      );
    } else {
      me._marker_nodei4.appendChild(me._marker_nodei4__normal);
    }
    for (var i = 0; i < me._marker_nodei4.childNodes.length; i++) {
      me._marker_nodei4.ggMarkerInstances.push(me._marker_nodei4.childNodes[i]);
    }
    var clonedNormalElement = new SkinElement_mhn_Class(
      this,
      me._markertemplate,
    );
    me._markertemplate__normal = clonedNormalElement._mhn;
    me._markertemplate__normal.style.visibility = "inherit";
    me._markertemplate__normal.style.left = "0px";
    me._markertemplate__normal.style.top = "0px";
    me._markertemplate.ggMarkerNormal = me._markertemplate__normal;
    me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
    var clonedActiveElement = new SkinElement_mha_Class(
      this,
      me._markertemplate,
    );
    me._markertemplate__active = clonedActiveElement._mha;
    me._markertemplate__active.style.visibility = "hidden";
    me._markertemplate__active.style.left = "0px";
    me._markertemplate__active.style.top = "0px";
    me._markertemplate.ggMarkerActive = me._markertemplate__active;
    me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
    if (me._markertemplate.firstChild) {
      me._markertemplate.insertBefore(
        me._markertemplate__active,
        me._markertemplate.firstChild,
      );
    } else {
      me._markertemplate.appendChild(me._markertemplate__active);
    }
    if (me._markertemplate.firstChild) {
      me._markertemplate.insertBefore(
        me._markertemplate__normal,
        me._markertemplate.firstChild,
      );
    } else {
      me._markertemplate.appendChild(me._markertemplate__normal);
    }
    for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
      me._markertemplate.ggMarkerInstances.push(
        me._markertemplate.childNodes[i],
      );
    }
    player.addListener("sizechanged", function () {
      me.updateSize(me.divSkin);
    });
    player.addListener("imagesready", function () {
      me._loader.style[domTransition] = "none";
      me._loader.ggParameter.sx = 0;
      me._loader.ggParameter.sy = 0;
      me._loader.style[domTransform] = parameterToTransform(
        me._loader.ggParameter,
      );
    });
    player.addListener("beforechangenode", function () {
      me._loader.style[domTransition] = "none";
      me._loader.ggParameter.sx = 1;
      me._loader.ggParameter.sy = 1;
      me._loader.style[domTransform] = parameterToTransform(
        me._loader.ggParameter,
      );
    });
  };
  this.hotspotProxyClick = function (id, url) {};
  this.hotspotProxyDoubleClick = function (id, url) {};
  me.hotspotProxyOver = function (id, url) {};
  me.hotspotProxyOut = function (id, url) {};
  player.addListener("changenode", function () {
    me.ggUserdata = player.userdata;
    var newMarker = [];
    var id = player.getCurrentNode();
    var i, j;
    var tags = me.ggUserdata.tags;
    for (i = 0; i < nodeMarker.length; i++) {
      var match = false;
      if (
        nodeMarker[i].ggMarkerNodeId.length > 0 &&
        nodeMarker[i].ggMarkerNodeId.charAt(0) == "{" &&
        nodeMarker[i].ggMarkerNodeId.substr(
          1,
          nodeMarker[i].ggMarkerNodeId.length - 2,
        ) == id &&
        id != ""
      )
        match = true; // }
      for (j = 0; j < tags.length; j++) {
        if (nodeMarker[i].ggMarkerNodeId == tags[j]) match = true;
      }
      if (match) {
        newMarker.push(nodeMarker[i]);
      }
    }
    for (i = 0; i < activeNodeMarker.length; i++) {
      if (newMarker.indexOf(activeNodeMarker[i]) < 0) {
        if (activeNodeMarker[i].ggMarkerNormal) {
          activeNodeMarker[i].ggMarkerNormal.style.visibility = "inherit";
        }
        if (activeNodeMarker[i].ggMarkerActive) {
          activeNodeMarker[i].ggMarkerActive.style.visibility = "hidden";
        }
        if (activeNodeMarker[i].ggDeactivate) {
          activeNodeMarker[i].ggDeactivate();
        }
        activeNodeMarker[i].ggIsMarkerActive = false;
      }
    }
    for (i = 0; i < newMarker.length; i++) {
      if (activeNodeMarker.indexOf(newMarker[i]) < 0) {
        if (newMarker[i].ggMarkerNormal) {
          newMarker[i].ggMarkerNormal.style.visibility = "hidden";
        }
        if (newMarker[i].ggMarkerActive) {
          newMarker[i].ggMarkerActive.style.visibility = "inherit";
        }
        if (newMarker[i].ggActivate) {
          newMarker[i].ggActivate();
        }
        newMarker[i].ggIsMarkerActive = true;
      }
    }
    activeNodeMarker = newMarker;
  });
  me.skinTimerEvent = function () {
    me.ggCurrentTime = new Date().getTime();
    var hs = "";
    if (me._mh_radar.ggParameter) {
      hs += parameterToTransform(me._mh_radar.ggParameter) + " ";
    }
    hs += "rotate(" + -1.0 * (1 * player.getPanNorth() + 90) + "deg) ";
    me._mh_radar.style[domTransform] = hs;
    if (me.elementMouseDown["button_zoomin"]) {
      player.changeFovLog(-0.5, true);
    }
    if (me.elementMouseDown["button_zoomout"]) {
      player.changeFovLog(0.5, true);
    }
    var hs = "";
    if (me._loadbar.ggParameter) {
      hs += parameterToTransform(me._loadbar.ggParameter) + " ";
    }
    hs += "scale(" + (1 * player.getPercentLoaded() + 0) + ",1.0) ";
    me._loadbar.style[domTransform] = hs;
  };
  player.addListener("timer", me.skinTimerEvent);
  function SkinHotspotClass_hs(parentScope, hotspot) {
    var me = this;
    var flag = false;
    var hs = "";
    me.parentScope = parentScope;
    me.hotspot = hotspot;
    var nodeId = String(hotspot.url);
    nodeId = nodeId.charAt(0) == "{" ? nodeId.substr(1, nodeId.length - 2) : ""; // }
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.elementMouseDown = [];
    me.elementMouseOver = [];
    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };
    el = me._hs = document.createElement("div");
    el.ggId = "hs";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_hotspot ";
    el.ggType = "hotspot";
    hs = "";
    hs += "height : 0px;";
    hs += "left : 102px;";
    hs += "position : absolute;";
    hs += "top : 76px;";
    hs += "visibility : inherit;";
    hs += "width : 0px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._hs.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (me.hotspot.url != "" && me.hotspot.url.charAt(0) == "{") {
        // }
        return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
      } else {
        if (this.parentNode && this.parentNode.ggElementNodeId) {
          return this.parentNode.ggElementNodeId();
        } else {
          return player.getCurrentNode();
        }
      }
    };
    me._hs.onclick = function (e) {
      function showHotspotSidePanel(hotspotId) {
        const hotspotImages = {
          hotspot1: "./blueprints/1.jpeg", // Replace with your URLs
          hotspot2: "./blueprints/1.jpeg",
          hotspot3: "./blueprints/1.jpeg",
        };

        const imageSrc = hotspotImages[hotspotId] || "./blueprints/1.jpeg";

        const existingPanel = document.getElementById("hotspot_sidepanel");
        const existingOverlay = document.getElementById("sidepanel_overlay");
        if (existingPanel) existingPanel.remove();
        if (existingOverlay) existingOverlay.remove();

        const sidePanel = document.createElement("div");
        sidePanel.id = "hotspot_sidepanel";
        sidePanel.style.position = "fixed";
        sidePanel.style.borderRadius = "20px";
        sidePanel.style.top = "1rem";
        sidePanel.style.left = "1rem";
        sidePanel.style.width = "350px";
        sidePanel.style.height = "70%";
        sidePanel.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        sidePanel.style.backdropFilter = "blur(50px)";
        sidePanel.style.color = "#ffffff";
        sidePanel.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        sidePanel.style.padding = "20px";
        sidePanel.style.borderLeft = "1px solid #ccc";
        sidePanel.style.overflowY = "auto";
        sidePanel.style.transform = "translateX(100%)";
        sidePanel.style.transition = "transform 0.3s ease-in-out";
        sidePanel.style.zIndex = "1000";

        sidePanel.innerHTML = `
    <h2>Hotspot Clicked</h2>
    <p>You clicked on the hotspot: <strong>${hotspotId}</strong></p>
    <img 
      src="${imageSrc}" 
      alt="Hotspot Image" 
      style="width: 100%; border-radius: 10px; margin-top: 20px;"
    />
    <button id="closeSidePanel" style="
      margin-top: 20px;
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    ">Close</button>
  `;

        document.body.appendChild(sidePanel);

        setTimeout(() => {
          sidePanel.style.transform = "translateX(0)";
        }, 10);

        const closeButton = sidePanel.querySelector("#closeSidePanel");
        closeButton.addEventListener("click", closeSidePanel);
        function closeSidePanel() {
          sidePanel.style.transform = "translateX(100%)";
          setTimeout(() => {
            sidePanel.remove();
          }, 300);
        }
      }

      showHotspotSidePanel(me.hotspot.id);

      player.openUrl(me.hotspot.url, me.hotspot.target);
      skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
    };
    me._hs.ondblclick = function (e) {
      skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
    };
    me._hs.onmouseover = function (e) {
      player.setActiveHotspot(me.hotspot);
      me._tooltip.style[domTransition] = "none";
      me._tooltip.ggParameter.sx = 1;
      me._tooltip.ggParameter.sy = 1;
      me._tooltip.style[domTransform] = parameterToTransform(
        me._tooltip.ggParameter,
      );
      skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
    };
    me._hs.onmouseout = function (e) {
      player.setActiveHotspot(null);
      me._tooltip.style[domTransition] = "none";
      me._tooltip.ggParameter.sx = 0;
      me._tooltip.ggParameter.sy = 0;
      me._tooltip.style[domTransform] = parameterToTransform(
        me._tooltip.ggParameter,
      );
      skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
    };
    me._hs.ggUpdatePosition = function (useTransition) {};
    el = me._hs_image = document.createElement("div");
    el.ggId = "hs_image";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 15px;";
    hs += "border-radius : 15px;";
    hs += "background : #ffffff;";
    hs += "border : 0px solid #ff0000;";
    hs += "cursor : pointer;";
    hs += "height : 30px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 30px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._hs_image.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._hs_image.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._hs.appendChild(me._hs_image);
    el = me._hs_red_dot = document.createElement("div");
    el.ggId = "hs_red_dot";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 999px;";
    hs += "border-radius : 999px;";
    hs += "background : #202020;";
    hs += "border : 0px solid #000000;";
    hs += "cursor : pointer;";
    hs += "height : 20px;";
    hs += "left : -10000px;";
    hs += "opacity : 0.2;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 20px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._hs_red_dot.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._hs_red_dot.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._hs.appendChild(me._hs_red_dot);
    el = me._tooltip = document.createElement("div");
    el.ggId = "tooltip";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 0, sy: 0 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 18px;";
    hs += "left : -98px;";
    hs += "position : absolute;";
    hs += "top : -50px;";
    hs += "visibility : inherit;";
    hs += "width : 201px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    el.style[domTransform] = parameterToTransform(el.ggParameter);
    me._tooltip.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._tooltip.ggUpdatePosition = function (useTransition) {};
    el = me._tooltip_face = document.createElement("div");
    els = me._tooltip_face__text = document.createElement("div");
    el.className = "ggskin ggskin_textdiv";
    el.ggTextDiv = els;
    el.ggId = "tooltip_face";
    el.ggDx = 0;
    el.ggDy = 0;
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1.2, sy: 1.2 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_text ";
    el.ggType = "text";
    hs = "";
    hs += "height : 30px;";
    hs += "left : -10000px;";
    hs += "position : absolute;";
    hs += "top : -10000px;";
    hs += "visibility : inherit;";
    hs += "width : 100px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    el.style[domTransform] = parameterToTransform(el.ggParameter);
    hs = "position:absolute;";
    hs += "box-sizing: border-box;";
    hs += "cursor: default;";
    hs += "left: 0px;";
    hs += "top:  0px;";
    hs += "width: 100px;";
    hs += "height: auto;";
    hs += "background: #ffffff;";
    hs += "background: rgba(255,255,255,0.588235);";
    hs += "border: 0px solid #000000;";
    hs += "border-radius: 10px;";
    hs += cssPrefix + "border-radius: 10px;";
    hs += "color: rgba(32,32,32,1);";
    hs += "font-size: 14px;";
    hs += "font-weight: 400;";
    hs += "text-align: center;";
    hs += "white-space: pre-wrap;";
    hs += "padding: 2px 4px 2px 4px;";
    hs += "overflow: hidden;";
    els.setAttribute("style", hs);
    els.innerHTML = me.hotspot.title;
    el.appendChild(els);
    me._tooltip_face.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._tooltip_face.ggUpdatePosition = function (useTransition) {
      if (useTransition === "undefined") {
        useTransition = false;
      }
      if (!useTransition) {
        this.style[domTransition] = "none";
      }
      if (this.parentNode) {
        var pw = this.parentNode.clientWidth;
        var w = this.offsetWidth + 0;
        this.style.left = this.ggDx + pw / 2 - w / 2 + "px";
        var ph = this.parentNode.clientHeight;
        var h = this.offsetHeight;
        this.style.top = this.ggDy + ph / 2 - h / 2 + "px";
      }
    };
    me._tooltip.appendChild(me._tooltip_face);
    me._hs.appendChild(me._tooltip);
    me.__div = me._hs;
  }
  me.addSkinHotspot = function (hotspot) {
    var hsinst = null;
    {
      hotspot.skinid = "hs";
      hsinst = new SkinHotspotClass_hs(me, hotspot);
      if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
        hotspotTemplates[hotspot.skinid] = [];
      }
      hotspotTemplates[hotspot.skinid].push(hsinst);
    }
    return hsinst;
  };
  me.removeSkinHotspots = function () {
    if (hotspotTemplates["hs"]) {
      var i;
      for (i = 0; i < hotspotTemplates["hs"].length; i++) {
        hotspotTemplates["hs"][i] = null;
      }
    }
    hotspotTemplates = [];
  };
  function SkinElement_mhn_Class(parentScope, ggParent) {
    var me = this;
    var flag = false;
    me.parentScope = parentScope;
    me.ggParent = ggParent;
    var nodeId = ggParent.ggElementNodeId();
    me.ggNodeId = nodeId;
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.elementMouseDown = [];
    me.elementMouseOver = [];

    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };

    el = me._mhn = document.createElement("div");
    el.ggId = "mhn";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 40px;";
    hs += "left : 41px;";
    hs += "overflow : hidden;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mhn.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._mhn.ggUpdatePosition = function (useTransition) {};
    el = me._mhn_image = document.createElement("div");
    el.ggId = "mhn_image";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 999px;";
    hs += "border-radius : 999px;";
    hs += "background : #ffffff;";
    hs += "border : 2px solid #202020;";
    hs += "cursor : pointer;";
    hs += "height : 18px;";
    hs += "left : 9px;";
    hs += "position : absolute;";
    hs += "top : 9px;";
    hs += "visibility : inherit;";
    hs += "width : 18px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mhn_image.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._mhn_image.ggUpdatePosition = function (useTransition) {};
    me._mhn.appendChild(me._mhn_image);
  }
  function SkinElement_mha_Class(parentScope, ggParent) {
    var me = this;
    var flag = false;
    me.parentScope = parentScope;
    me.ggParent = ggParent;
    var nodeId = ggParent.ggElementNodeId();
    me.ggNodeId = nodeId;
    me.ggUserdata = skin.player.getNodeUserdata(nodeId);
    me.elementMouseDown = [];
    me.elementMouseOver = [];

    me.findElements = function (id, regex) {
      return skin.findElements(id, regex);
    };

    el = me._mha = document.createElement("div");
    el.ggId = "mha";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_container ";
    el.ggType = "container";
    hs = "";
    hs += "height : 40px;";
    hs += "left : 69px;";
    hs += "overflow : hidden;";
    hs += "position : absolute;";
    hs += "top : 0px;";
    hs += "visibility : inherit;";
    hs += "width : 40px;";
    hs += "pointer-events:none;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mha.ggIsActive = function () {
      return player.getCurrentNode() == this.ggElementNodeId();
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._mha.ggUpdatePosition = function (useTransition) {};
    el = me._mha_image = document.createElement("div");
    el.ggId = "mha_image";
    el.ggParameter = { rx: 0, ry: 0, a: 0, sx: 1, sy: 1 };
    el.ggVisible = true;
    el.className = "ggskin ggskin_rectangle ";
    el.ggType = "rectangle";
    hs = "";
    hs += cssPrefix + "border-radius : 999px;";
    hs += "border-radius : 999px;";
    hs += "background : #ffffff;";
    hs += "border : 2px solid #ff0000;";
    hs += "cursor : default;";
    hs += "height : 18px;";
    hs += "left : 9px;";
    hs += "position : absolute;";
    hs += "top : 9px;";
    hs += "visibility : inherit;";
    hs += "width : 18px;";
    hs += "pointer-events:auto;";
    el.setAttribute("style", hs);
    el.style[domTransform + "Origin"] = "50% 50%";
    me._mha_image.ggIsActive = function () {
      if (this.parentNode && this.parentNode.ggIsActive) {
        return this.parentNode.ggIsActive();
      }
      return false;
    };
    el.ggElementNodeId = function () {
      if (this.parentNode && this.parentNode.ggElementNodeId) {
        return this.parentNode.ggElementNodeId();
      }
      return me.ggNodeId;
    };
    me._mha_image.ggUpdatePosition = function (useTransition) {};
    me._mha.appendChild(me._mha_image);
  }
  me.addSkin();
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(
    document.createTextNode(
      ".ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}",
    ),
  );
  document.head.appendChild(style);
  me.skinTimerEvent();
}
