System.register([],(function(t){"use strict";return{execute:function(){var e=window.localStorage;var r=t("l",(function(){try{var t=e.getItem("state");if(t==null){return undefined}return JSON.parse(t)}catch(t){return undefined}}));var n=t("s",(function(t){var r=function(t){var e=t.auth,r=t.wishlist;return{auth:e,wishlist:r}}(t);try{e.setItem("state",JSON.stringify(r))}catch(t){console.log(t)}}))}}}));