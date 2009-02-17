YUI.add("history",function(C){var E=C.Lang,Q=C.UA,S=C.Event.Target,B=C.config.win.history,W=C.config.win.location,J,K,T="Missing or invalid argument",N=/([^=&]+)=([^&]*)/g,M="history:ready",R="history:globalStateChange",F="history:moduleStateChange";if(!YUI.Env.history){YUI.Env.history=K={ready:false,_modules:[],_fqstates:[],_stateField:null,_historyIFrame:null};}function O(){return W.hash.substr(1);}function U(){var H=[],A=[],G;C.Object.each(K._modules,function(L,X){H.push(X+"="+L.initialState);A.push(X+"="+L.currentState);});G=H.join("&")+"|"+A.join("&");if(Q.webkit){G+="|"+K._fqstates.join(",");}K._stateField.set("value",G);}function P(H){var A,G;if(!H){C.Object.each(K._modules,function(L,X){L.currentState=L.initialState;L.fire(F,L.currentState);J.fire(R);});return;}G=[];N.lastIndex=0;while((A=N.exec(H))){G[A[1]]=A[2];}C.Object.each(K._modules,function(L,Y){var X=G[Y];if(!X||L.currentState!==X){L.currentState=X||L.initialState;L.fire(F,L.currentState);J.fire(R);}});}function I(L){var A,H;A="<html><body>"+L+"</body></html>";try{H=K._historyIFrame.get("contentWindow.document");H.invoke("open");H.invoke("write",A,"","","","");H.invoke("close");return true;}catch(G){return false;}}function D(){var A,H,G;if(!K._historyIFrame.get("contentWindow.document")){setTimeout(D,10);return;}A=K._historyIFrame.get("contentWindow.document.body");H=A?A.get("innerText"):null;G=O();setInterval(function(){var Y,L,X;A=K._historyIFrame.get("contentWindow.document.body");Y=A?A.get("innerText"):null;X=O();if(Y!==H){H=Y;P(H);if(!H){L=[];C.Object.each(K._modules,function(Z,a){L.push(a+"="+Z.initialState);});X=L.join("&");}else{X=H;}W.hash=G=X;U();}else{if(X!==G){G=X;I(X);}}},50);K.ready=true;J.fire(M);}function V(){var G,a,Y,L,A,X,H,Z;a=K._stateField.get("value").split("|");if(a.length>1){N.lastIndex=0;while((G=N.exec(a[0]))){Y=G[1];A=G[2];L=K._modules[Y];if(L){L.initialState=A;}}N.lastIndex=0;while((G=N.exec(a[1]))){Y=G[1];X=G[2];L=K._modules[Y];if(L){L.currentState=X;}}}if(a.length>2){K._fqstates=a[2].split(",");}if(Q.ie){if(E.isUndefined(C.config.doc.documentMode)||C.config.doc.documentMode<8){D();}else{C.on("hashchange",function(){var b=O();P(b);U();},window);K.ready=true;J.fire(M);}}else{H=B.length;Z=O();setInterval(function(){var d,b,c;b=O();c=B.length;if(b!==Z){Z=b;H=c;P(Z);U();}else{if(c!==H&&Q.webkit){Z=b;H=c;d=K._fqstates[H-1];P(d);U();}}},50);K.ready=true;J.fire(M);}}J={register:function(H,A){var G;if(!E.isString(H)||E.trim(H)===""||!E.isString(A)){throw new Error(T);}if(K._modules[H]){return;}if(K.ready){return null;}H=encodeURIComponent(H);A=encodeURIComponent(A);G=new J.Module(H,A);K._modules[H]=G;return G;},initialize:function(A,L){var G,H;if(K.ready){return true;}A=C.get(A);if(!A){throw new Error(T);}G=A.get("tagName").toUpperCase();H=A.get("type");if(G!=="TEXTAREA"&&(G!=="INPUT"||H!=="hidden"&&H!=="text")){throw new Error(T);}if(Q.ie&&(E.isUndefined(C.config.doc.documentMode)||C.config.doc.documentMode<8)){L=C.get(L);if(!L||L.get("tagName").toUpperCase()!=="IFRAME"){throw new Error(T);}}if(Q.opera&&!E.isUndefined(B.navigationMode)){B.navigationMode="compatible";}K._stateField=A;K._historyIFrame=L;C.on("domready",V);return true;},navigate:function(G,H){var A;if(!E.isString(G)||!E.isString(H)){throw new Error(T);}A={};A[G]=H;return J.multiNavigate(A);},multiNavigate:function(G){var A,H;if(!K.ready){return false;}C.Object.each(G,function(L,X){if(!K._modules[X]){}});A=[];C.Object.each(K._modules,function(L,Y){var X;if(G[Y]){X=G[decodeURIComponent(Y)];}else{X=decodeURIComponent(L.currentState);}Y=encodeURIComponent(Y);X=encodeURIComponent(X);A.push(Y+"="+X);});H=A.join("&");if(Q.ie&&(E.isUndefined(C.config.doc.documentMode)||C.config.doc.documentMode<8)){return I(H);}else{W.hash=H;if(Q.webkit){K._fqstates[B.length]=H;U();}return true;}},getCurrentState:function(G){var A;if(!E.isString(G)){throw new Error(T);}if(!K.ready){return null;}A=K._modules[G];if(!A){return null;}return decodeURIComponent(A.currentState);},getBookmarkedState:function(L){var A,G,H;if(!E.isString(L)){throw new Error(T);}H=W.href;G=H.indexOf("#");if(G>=0){H=H.substr(G+1);N.lastIndex=0;while((A=N.exec(H))){if(A[1]===L){return decodeURIComponent(A[2]);}}}return null;},getQueryStringParameter:function(X,G){var A,L,H;G=G||W.href;H=G.indexOf("?");L=H>=0?G.substr(H+1):G;H=L.lastIndexOf("#");L=H>=0?L.substr(0,H):L;N.lastIndex=0;while((A=N.exec(L))){if(A[1]===X){return decodeURIComponent(A[2]);}}return null;}};C.mix(J,S.prototype);S.call(J);J.Module=function(G,A){S.call(this);this.id=G;this.initialState=A;this.currentState=A;};C.mix(J.Module,S,false,null,1);C.History=J;},"@VERSION@",{use:["event","node"],skinnable:false});