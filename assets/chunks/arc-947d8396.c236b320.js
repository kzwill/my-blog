import{c as S,p as sn}from"./constant-b644328d.6af51708.js";import{aW as en,aX as j,aY as P,aZ as an,a_ as y,Z as ln,a$ as C,b0 as k,b1 as rn,b2 as t,b3 as un,b4 as on,b5 as tn}from"../app.cac3ba11.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,q,Z,h,v,W,a){var s=q-l,n=Z-x,m=W-h,i=a-v,r=i*s-m*n;if(!(r*r<y))return r=(m*(x-v)-i*(l-h))/r,[l+r*s,x+r*n]}function K(l,x,q,Z,h,v,W){var a=l-q,s=x-Z,n=(W?v:-v)/C(a*a+s*s),m=n*s,i=-n*a,r=l+m,f=x+i,c=q+m,w=Z+i,o=(r+c)/2,D=(f+w)/2,p=c-r,g=w-f,A=p*p+g*g,E=h-v,b=r*w-c*f,I=(g<0?-1:1)*C(tn(0,E*E*A-b*b)),O=(b*g-p*I)/A,d=(-b*p-g*I)/A,R=(b*g+p*I)/A,T=(-b*p+g*I)/A,e=O-o,u=d-D,X=R-o,Y=T-D;return e*e+u*u>X*X+Y*Y&&(O=R,d=T),{cx:O,cy:d,x01:-m,y01:-i,x11:O*(h/E-1),y11:d*(h/E-1)}}function hn(){var l=fn,x=cn,q=S(0),Z=null,h=yn,v=gn,W=mn,a=null;function s(){var n,m,i=+l.apply(this,arguments),r=+x.apply(this,arguments),f=h.apply(this,arguments)-an,c=v.apply(this,arguments)-an,w=rn(c-f),o=c>f;if(a||(a=n=sn()),r<i&&(m=r,r=i,i=m),!(r>y))a.moveTo(0,0);else if(w>ln-y)a.moveTo(r*j(f),r*P(f)),a.arc(0,0,r,f,c,!o),i>y&&(a.moveTo(i*j(c),i*P(c)),a.arc(0,0,i,c,f,o));else{var D=f,p=c,g=f,A=c,E=w,b=w,I=W.apply(this,arguments)/2,O=I>y&&(Z?+Z.apply(this,arguments):C(i*i+r*r)),d=k(rn(r-i)/2,+q.apply(this,arguments)),R=d,T=d,e,u;if(O>y){var X=un(O/i*P(I)),Y=un(O/r*P(I));(E-=X*2)>y?(X*=o?1:-1,g+=X,A-=X):(E=0,g=A=(f+c)/2),(b-=Y*2)>y?(Y*=o?1:-1,D+=Y,p-=Y):(b=0,D=p=(f+c)/2)}var z=r*j(D),B=r*P(D),F=i*j(A),G=i*P(A);if(d>y){var H=r*j(p),J=r*P(p),L=i*j(g),M=i*P(g),$;if(w<en&&($=pn(z,B,L,M,H,J,F,G))){var N=z-$[0],Q=B-$[1],U=H-$[0],V=J-$[1],_=1/P(on((N*U+Q*V)/(C(N*N+Q*Q)*C(U*U+V*V)))/2),nn=C($[0]*$[0]+$[1]*$[1]);R=k(d,(i-nn)/(_-1)),T=k(d,(r-nn)/(_+1))}}b>y?T>y?(e=K(L,M,z,B,r,T,o),u=K(H,J,F,G,r,T,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),T<d?a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,T,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,T,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(z,B),a.arc(0,0,r,D,p,!o)):a.moveTo(z,B),!(i>y)||!(E>y)?a.lineTo(F,G):R>y?(e=K(F,G,H,J,i,-R,o),u=K(z,B,L,M,i,-R,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),R<d?a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,R,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,R,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,i,A,g,o)}if(a.closePath(),n)return a=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-en/2;return[j(m)*n,P(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:S(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:S(+n),s):x},s.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:S(+n),s):q},s.padRadius=function(n){return arguments.length?(Z=n==null?null:typeof n=="function"?n:S(+n),s):Z},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:S(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:S(+n),s):v},s.padAngle=function(n){return arguments.length?(W=typeof n=="function"?n:S(+n),s):W},s.context=function(n){return arguments.length?(a=n??null,s):a},s}export{hn as d};