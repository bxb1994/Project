;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-suo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M325.15094 850.320379l-5.028527-0.032746C321.763796 850.309122 323.436902 850.320379 325.15094 850.320379zM250.452657 547.515888c-0.017396 1.473561-0.028653 2.967588-0.028653 4.501524L250.452657 547.515888zM847.973426 469.625914c-3.397377-37.812187-34.968419-67.528999-73.578786-67.950601l-411.951353 0.248663-0.25685-113.266693c0-0.095167-0.00614-0.188288-0.007163-0.282433l0.372483 0c0.522909-81.975013 67.12377-148.262742 149.219533-148.262742 77.506235 0 141.189649 59.084677 148.510382 134.669142-1.719154 4.291746-2.673899 8.972349-2.673899 13.876032l0.344854 1.455141c0 20.62576 16.733103 37.369096 37.367049 37.369096 20.637016 0 37.370119-16.742313 37.370119-37.369096l-0.342808-1.455141c0-0.095167-0.007163-0.188288-0.007163-0.282433l2.566452 0c0.001023-0.202615 0.008186-0.404206 0.008186-0.606821 0-123.471103-100.084463-223.566822-223.556589-223.566822-121.93205 0-221.059722 97.634668-223.496214 218.993666-0.260943 1.783623-0.402159 3.606131-0.402159 5.462408l0.171915 77.970816 0.170892 0 0 35.025725-0.093121 0 0 0.315178-44.322461 0.026606c-37.968753 3.559059-67.680449 35.523051-67.680449 74.394361l0 39.715537-0.294712 0 0.225127 294.25886 0.069585 0 0 39.674605c0 41.291428 33.455973 74.738192 74.737168 74.738192l37.359886 0 0 0.317225 448.39538-0.273223 0-0.044002 37.370119 0c40.791032 0 73.925686-32.68133 74.690096-73.309656L847.973426 469.625914zM773.241374 476.41248l0.019443 25.243941-0.162706-25.243941L773.241374 476.41248zM250.404562 850.380754l-0.285502-373.651049 0.792039 0-0.458441 70.787206c0.714268-59.482743 16.191774-70.234621 74.699306-70.234621l-23.775496-0.583285 19.675108-0.01228c1.350764 0.147356 2.720971 0.229221 4.110621 0.229221 1.403976 0 2.786463-0.083911 4.149507-0.234337l404.007427-0.245593-34.458813 0.845251c55.216579 0 72.104201 9.584286 74.429153 60.662615l0.189312 245.169839c-1.304715 51.900044-15.299451 65.360614-63.010079 67.017346L250.404562 850.380754zM729.311863 850.121857l43.767829-0.285502 0.402159-59.926858 0.046049 60.187801L729.311863 850.121857zM250.45368 779.005147l-0.029676-4.593622C250.422981 775.97616 250.434238 777.500886 250.45368 779.005147zM250.45368 779.005147l0.465604 70.831208 69.203128 0.451278C265.781784 849.584622 251.160785 836.719616 250.45368 779.005147z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M501.93 556.742c-93.732 0-169.97-89.184-169.97-198.778s76.223-198.778 169.97-198.778 169.97 89.184 169.97 198.778c0 109.581-76.223 198.778-169.97 198.778M501.93 219.277c-60.615 0-109.9 62.208-109.9 138.695s49.287 138.695 109.9 138.695 109.9-62.214 109.9-138.695c0-76.452-49.287-138.695-109.9-138.695z"  ></path>' +
    '' +
    '<path d="M573.618 860.101c-10.918 0-22.155-0.007-33.737-0.183-24.503-0.208-51.426-0.208-75.93 0-88.534 0.821-158.579 1.436-202.956-42.509-27.105-26.887-40.327-67.401-40.327-123.882 0-40.537 14.653-78.25 43.495-112.106 10.796-12.639 29.767-14.1 42.374-3.324 12.622 10.78 14.112 29.735 3.363 42.374-19.562 22.949-29.135 46.86-29.135 73.075 0 39.625 7.374 66.197 22.508 81.223 26.542 26.33 85.452 25.795 160.106 25.107 24.826-0.222 52.169-0.222 76.972 0 74.682 0.752 133.553 1.184 160.106-25.107 15.178-15.040 22.508-41.614 22.508-81.223 0-16.453-14.54-54.34-32.454-69.946-12.51-10.892-13.787-29.849-2.917-42.382 10.898-12.51 29.871-13.766 42.381-2.868 31.741 27.617 53.106 81.9 53.106 115.22 0 56.478-13.191 97.007-40.327 123.882-38.588 38.203-96.519 42.701-169.221 42.701z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)