import{$ as vt,c as yt,W as I,l as ot,s as Lt,g as Ct,B as zt,D as bt,a as Et,b as Dt,E as It,h as gt,i as Bt,d as wt}from"../app.11edd73f.js";import{l as _t}from"./linear-1a8511e4.3a5b2ce8.js";import"./framework.2ccfef42.js";import"./theme.553f4b98.js";import"./init-cc95ec8e.77b53fdd.js";var pt=function(){var e=function(K,n,r,l){for(r=r||{},l=K.length;l--;r[K[l]]=n);return r},s=[1,3],h=[1,4],x=[1,5],f=[1,6],d=[1,7],c=[1,5,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],g=[1,5,6,13,15,17,19,20,25,27,28,29,30,31,32,33,34,37,38,40,41,42,43,44,45,46,47,48,49,50],i=[32,33,34],y=[2,7],p=[1,13],B=[1,17],W=[1,18],L=[1,19],C=[1,20],N=[1,21],M=[1,22],X=[1,23],z=[1,24],it=[1,25],at=[1,26],nt=[1,27],U=[1,30],Q=[1,31],T=[1,32],_=[1,33],m=[1,34],t=[1,35],b=[1,36],A=[1,37],S=[1,38],k=[1,39],F=[1,40],P=[1,41],v=[1,42],O=[1,57],Y=[1,58],E=[5,22,26,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51],ht={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,QUADRANT:6,document:7,line:8,statement:9,axisDetails:10,quadrantDetails:11,points:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,text:21,point_start:22,point_x:23,point_y:24,"X-AXIS":25,"AXIS-TEXT-DELIMITER":26,"Y-AXIS":27,QUADRANT_1:28,QUADRANT_2:29,QUADRANT_3:30,QUADRANT_4:31,NEWLINE:32,SEMI:33,EOF:34,alphaNumToken:35,textNoTagsToken:36,STR:37,MD_STR:38,alphaNum:39,PUNCTUATION:40,AMP:41,NUM:42,ALPHA:43,COMMA:44,PLUS:45,EQUALS:46,MULT:47,DOT:48,BRKT:49,UNDERSCORE:50,MINUS:51,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",6:"QUADRANT",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",22:"point_start",23:"point_x",24:"point_y",25:"X-AXIS",26:"AXIS-TEXT-DELIMITER",27:"Y-AXIS",28:"QUADRANT_1",29:"QUADRANT_2",30:"QUADRANT_3",31:"QUADRANT_4",32:"NEWLINE",33:"SEMI",34:"EOF",37:"STR",38:"MD_STR",40:"PUNCTUATION",41:"AMP",42:"NUM",43:"ALPHA",44:"COMMA",45:"PLUS",46:"EQUALS",47:"MULT",48:"DOT",49:"BRKT",50:"UNDERSCORE",51:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[9,0],[9,2],[9,1],[9,1],[9,1],[9,2],[9,2],[9,2],[9,1],[9,1],[12,4],[10,4],[10,3],[10,2],[10,4],[10,3],[10,2],[11,2],[11,2],[11,2],[11,2],[4,1],[4,1],[4,1],[21,1],[21,2],[21,1],[21,1],[39,1],[39,2],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[35,1],[36,1],[36,1],[36,1]],performAction:function(n,r,l,o,q,a,et){var u=a.length-1;switch(q){case 12:this.$=a[u].trim(),o.setDiagramTitle(this.$);break;case 13:this.$=a[u].trim(),o.setAccTitle(this.$);break;case 14:case 15:this.$=a[u].trim(),o.setAccDescription(this.$);break;case 16:o.addSection(a[u].substr(8)),this.$=a[u].substr(8);break;case 17:o.addPoint(a[u-3],a[u-1],a[u]);break;case 18:o.setXAxisLeftText(a[u-2]),o.setXAxisRightText(a[u]);break;case 19:a[u-1].text+=" ⟶ ",o.setXAxisLeftText(a[u-1]);break;case 20:o.setXAxisLeftText(a[u]);break;case 21:o.setYAxisBottomText(a[u-2]),o.setYAxisTopText(a[u]);break;case 22:a[u-1].text+=" ⟶ ",o.setYAxisBottomText(a[u-1]);break;case 23:o.setYAxisBottomText(a[u]);break;case 24:o.setQuadrant1Text(a[u]);break;case 25:o.setQuadrant2Text(a[u]);break;case 26:o.setQuadrant3Text(a[u]);break;case 27:o.setQuadrant4Text(a[u]);break;case 31:this.$={text:a[u],type:"text"};break;case 32:this.$={text:a[u-1].text+""+a[u],type:a[u-1].type};break;case 33:this.$={text:a[u],type:"text"};break;case 34:this.$={text:a[u],type:"markdown"};break;case 35:this.$=a[u];break;case 36:this.$=a[u-1]+""+a[u];break}},table:[{3:1,4:2,5:s,6:h,32:x,33:f,34:d},{1:[3]},{3:8,4:2,5:s,6:h,32:x,33:f,34:d},{3:9,4:2,5:s,6:h,32:x,33:f,34:d},e(c,[2,4],{7:10}),e(g,[2,28]),e(g,[2,29]),e(g,[2,30]),{1:[2,1]},{1:[2,2]},e(i,y,{8:11,9:12,10:14,11:15,12:16,21:28,35:29,1:[2,3],5:p,13:B,15:W,17:L,19:C,20:N,25:M,27:X,28:z,29:it,30:at,31:nt,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v}),e(c,[2,5]),{4:43,32:x,33:f,34:d},e(i,y,{10:14,11:15,12:16,21:28,35:29,9:44,5:p,13:B,15:W,17:L,19:C,20:N,25:M,27:X,28:z,29:it,30:at,31:nt,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v}),e(i,[2,9]),e(i,[2,10]),e(i,[2,11]),{14:[1,45]},{16:[1,46]},{18:[1,47]},e(i,[2,15]),e(i,[2,16]),{21:48,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{21:49,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{21:50,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{21:51,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{21:52,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{21:53,35:29,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v},{5:O,22:[1,54],35:56,36:55,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y},e(E,[2,31]),e(E,[2,33]),e(E,[2,34]),e(E,[2,37]),e(E,[2,38]),e(E,[2,39]),e(E,[2,40]),e(E,[2,41]),e(E,[2,42]),e(E,[2,43]),e(E,[2,44]),e(E,[2,45]),e(E,[2,46]),e(E,[2,47]),e(c,[2,6]),e(i,[2,8]),e(i,[2,12]),e(i,[2,13]),e(i,[2,14]),e(i,[2,20],{36:55,35:56,5:O,26:[1,59],40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,23],{36:55,35:56,5:O,26:[1,60],40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,24],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,25],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,26],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,27],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),{23:[1,61]},e(E,[2,32]),e(E,[2,48]),e(E,[2,49]),e(E,[2,50]),e(i,[2,19],{35:29,21:62,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v}),e(i,[2,22],{35:29,21:63,37:U,38:Q,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v}),{24:[1,64]},e(i,[2,18],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,21],{36:55,35:56,5:O,40:T,41:_,42:m,43:t,44:b,45:A,46:S,47:k,48:F,49:P,50:v,51:Y}),e(i,[2,17])],defaultActions:{8:[2,1],9:[2,2]},parseError:function(n,r){if(r.recoverable)this.trace(n);else{var l=new Error(n);throw l.hash=r,l}},parse:function(n){var r=this,l=[0],o=[],q=[null],a=[],et=this.table,u="",st=0,qt=0,St=2,Tt=1,kt=a.slice.call(arguments,1),D=Object.create(this.lexer),Z={yy:{}};for(var dt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,dt)&&(Z.yy[dt]=this.yy[dt]);D.setInput(n,Z.yy),Z.yy.lexer=D,Z.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var ut=D.yylloc;a.push(ut);var Ft=D.options&&D.options.ranges;typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Pt(){var j;return j=o.pop()||D.lex()||Tt,typeof j!="number"&&(j instanceof Array&&(o=j,j=o.pop()),j=r.symbols_[j]||j),j}for(var V,J,H,xt,tt={},rt,$,mt,lt;;){if(J=l[l.length-1],this.defaultActions[J]?H=this.defaultActions[J]:((V===null||typeof V>"u")&&(V=Pt()),H=et[J]&&et[J][V]),typeof H>"u"||!H.length||!H[0]){var ft="";lt=[];for(rt in et[J])this.terminals_[rt]&&rt>St&&lt.push("'"+this.terminals_[rt]+"'");D.showPosition?ft="Parse error on line "+(st+1)+`:
`+D.showPosition()+`
Expecting `+lt.join(", ")+", got '"+(this.terminals_[V]||V)+"'":ft="Parse error on line "+(st+1)+": Unexpected "+(V==Tt?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(ft,{text:D.match,token:this.terminals_[V]||V,line:D.yylineno,loc:ut,expected:lt})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+V);switch(H[0]){case 1:l.push(V),q.push(D.yytext),a.push(D.yylloc),l.push(H[1]),V=null,qt=D.yyleng,u=D.yytext,st=D.yylineno,ut=D.yylloc;break;case 2:if($=this.productions_[H[1]][1],tt.$=q[q.length-$],tt._$={first_line:a[a.length-($||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-($||1)].first_column,last_column:a[a.length-1].last_column},Ft&&(tt._$.range=[a[a.length-($||1)].range[0],a[a.length-1].range[1]]),xt=this.performAction.apply(tt,[u,qt,st,Z.yy,H[1],q,a].concat(kt)),typeof xt<"u")return xt;$&&(l=l.slice(0,-1*$*2),q=q.slice(0,-1*$),a=a.slice(0,-1*$)),l.push(this.productions_[H[1]][0]),q.push(tt.$),a.push(tt._$),mt=et[l[l.length-2]][l[l.length-1]],l.push(mt);break;case 3:return!0}}return!0}},At=function(){var K={EOF:1,parseError:function(r,l){if(this.yy.parser)this.yy.parser.parseError(r,l);else throw new Error(r)},setInput:function(n,r){return this.yy=r||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var r=n.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var r=n.length,l=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var q=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===o.length?this.yylloc.first_column:0)+o[o.length-l.length].length-l[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[q[0],q[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),r=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+r+"^"},test_match:function(n,r){var l,o,q;if(this.options.backtrack_lexer&&(q={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(q.yylloc.range=this.yylloc.range.slice(0))),o=n[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],l=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var a in q)this[a]=q[a];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,r,l,o;this._more||(this.yytext="",this.match="");for(var q=this._currentRules(),a=0;a<q.length;a++)if(l=this._input.match(this.rules[q[a]]),l&&(!r||l[0].length>r[0].length)){if(r=l,o=a,this.options.backtrack_lexer){if(n=this.test_match(l,q[a]),n!==!1)return n;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(n=this.test_match(r,q[o]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,l,o,q){switch(o){case 0:break;case 1:break;case 2:return 32;case 3:break;case 4:return this.begin("title"),13;case 5:return this.popState(),"title_value";case 6:return this.begin("acc_title"),15;case 7:return this.popState(),"acc_title_value";case 8:return this.begin("acc_descr"),17;case 9:return this.popState(),"acc_descr_value";case 10:this.begin("acc_descr_multiline");break;case 11:this.popState();break;case 12:return"acc_descr_multiline_value";case 13:return 25;case 14:return 27;case 15:return 26;case 16:return 28;case 17:return 29;case 18:return 30;case 19:return 31;case 20:this.begin("md_string");break;case 21:return"MD_STR";case 22:this.popState();break;case 23:this.begin("string");break;case 24:this.popState();break;case 25:return"STR";case 26:return this.begin("point_start"),22;case 27:return this.begin("point_x"),23;case 28:this.popState();break;case 29:this.popState(),this.begin("point_y");break;case 30:return this.popState(),24;case 31:return 6;case 32:return 43;case 33:return"COLON";case 34:return 45;case 35:return 44;case 36:return 46;case 37:return 46;case 38:return 47;case 39:return 49;case 40:return 50;case 41:return 48;case 42:return 41;case 43:return 51;case 44:return 42;case 45:return 5;case 46:return 33;case 47:return 40;case 48:return 34}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[30],inclusive:!1},point_x:{rules:[29],inclusive:!1},point_start:{rules:[27,28],inclusive:!1},acc_descr_multiline:{rules:[11,12],inclusive:!1},acc_descr:{rules:[9],inclusive:!1},acc_title:{rules:[7],inclusive:!1},title:{rules:[5],inclusive:!1},md_string:{rules:[21,22],inclusive:!1},string:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,6,8,10,13,14,15,16,17,18,19,20,23,26,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return K}();ht.lexer=At;function ct(){this.yy={}}return ct.prototype=ht,ht.Parser=ct,new ct}();pt.parser=pt;const Rt=pt,R=vt();class Vt{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var s,h,x,f,d,c,g,i,y,p,B,W,L,C,N,M,X,z;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:((s=I.quadrantChart)==null?void 0:s.chartWidth)||500,chartWidth:((h=I.quadrantChart)==null?void 0:h.chartHeight)||500,titlePadding:((x=I.quadrantChart)==null?void 0:x.titlePadding)||10,titleFontSize:((f=I.quadrantChart)==null?void 0:f.titleFontSize)||20,quadrantPadding:((d=I.quadrantChart)==null?void 0:d.quadrantPadding)||5,xAxisLabelPadding:((c=I.quadrantChart)==null?void 0:c.xAxisLabelPadding)||5,yAxisLabelPadding:((g=I.quadrantChart)==null?void 0:g.yAxisLabelPadding)||5,xAxisLabelFontSize:((i=I.quadrantChart)==null?void 0:i.xAxisLabelFontSize)||16,yAxisLabelFontSize:((y=I.quadrantChart)==null?void 0:y.yAxisLabelFontSize)||16,quadrantLabelFontSize:((p=I.quadrantChart)==null?void 0:p.quadrantLabelFontSize)||16,quadrantTextTopPadding:((B=I.quadrantChart)==null?void 0:B.quadrantTextTopPadding)||5,pointTextPadding:((W=I.quadrantChart)==null?void 0:W.pointTextPadding)||5,pointLabelFontSize:((L=I.quadrantChart)==null?void 0:L.pointLabelFontSize)||12,pointRadius:((C=I.quadrantChart)==null?void 0:C.pointRadius)||5,xAxisPosition:((N=I.quadrantChart)==null?void 0:N.xAxisPosition)||"top",yAxisPosition:((M=I.quadrantChart)==null?void 0:M.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:((X=I.quadrantChart)==null?void 0:X.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:((z=I.quadrantChart)==null?void 0:z.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:R.quadrant1Fill,quadrant2Fill:R.quadrant2Fill,quadrant3Fill:R.quadrant3Fill,quadrant4Fill:R.quadrant4Fill,quadrant1TextFill:R.quadrant1TextFill,quadrant2TextFill:R.quadrant2TextFill,quadrant3TextFill:R.quadrant3TextFill,quadrant4TextFill:R.quadrant4TextFill,quadrantPointFill:R.quadrantPointFill,quadrantPointTextFill:R.quadrantPointTextFill,quadrantXAxisTextFill:R.quadrantXAxisTextFill,quadrantYAxisTextFill:R.quadrantYAxisTextFill,quadrantTitleFill:R.quadrantTitleFill,quadrantInternalBorderStrokeFill:R.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:R.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),ot.info("clear called")}setData(s){this.data={...this.data,...s}}addPoints(s){this.data.points=[...s,...this.data.points]}setConfig(s){ot.trace("setConfig called with: ",s),this.config={...this.config,...s}}setThemeConfig(s){ot.trace("setThemeConfig called with: ",s),this.themeConfig={...this.themeConfig,...s}}calculateSpace(s,h,x,f){const d=this.config.xAxisLabelPadding*2+this.config.xAxisLabelFontSize,c={top:s==="top"&&h?d:0,bottom:s==="bottom"&&h?d:0},g=this.config.yAxisLabelPadding*2+this.config.yAxisLabelFontSize,i={left:this.config.yAxisPosition==="left"&&x?g:0,right:this.config.yAxisPosition==="right"&&x?g:0},y=this.config.titleFontSize+this.config.titlePadding*2,p={top:f?y:0},B=this.config.quadrantPadding+i.left,W=this.config.quadrantPadding+c.top+p.top,L=this.config.chartWidth-this.config.quadrantPadding*2-i.left-i.right,C=this.config.chartHeight-this.config.quadrantPadding*2-c.top-c.bottom-p.top,N=L/2,M=C/2;return{xAxisSpace:c,yAxisSpace:i,titleSpace:p,quadrantSpace:{quadrantLeft:B,quadrantTop:W,quadrantWidth:L,quadrantHalfWidth:N,quadrantHeight:C,quadrantHalfHeight:M}}}getAxisLabels(s,h,x,f){const{quadrantSpace:d,titleSpace:c}=f,{quadrantHalfHeight:g,quadrantHeight:i,quadrantLeft:y,quadrantHalfWidth:p,quadrantTop:B,quadrantWidth:W}=d,L=this.data.points.length===0,C=[];return this.data.xAxisLeftText&&h&&C.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:y+(L?p/2:0),y:s==="top"?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+B+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&h&&C.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:y+p+(L?p/2:0),y:s==="top"?this.config.xAxisLabelPadding+c.top:this.config.xAxisLabelPadding+B+i+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&x&&C.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+y+W+this.config.quadrantPadding,y:B+i-(L?g/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&x&&C.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+y+W+this.config.quadrantPadding,y:B+g-(L?g/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),C}getQuadrants(s){const{quadrantSpace:h}=s,{quadrantHalfHeight:x,quadrantLeft:f,quadrantHalfWidth:d,quadrantTop:c}=h,g=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f+d,y:c,width:d,height:x,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f,y:c,width:d,height:x,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f,y:c+x,width:d,height:x,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:f+d,y:c+x,width:d,height:x,fill:this.themeConfig.quadrant4Fill}];for(const i of g)i.text.x=i.x+i.width/2,this.data.points.length===0?(i.text.y=i.y+i.height/2,i.text.horizontalPos="middle"):(i.text.y=i.y+this.config.quadrantTextTopPadding,i.text.horizontalPos="top");return g}getQuadrantPoints(s){const{quadrantSpace:h}=s,{quadrantHeight:x,quadrantLeft:f,quadrantTop:d,quadrantWidth:c}=h,g=_t().domain([0,1]).range([f,c+f]),i=_t().domain([0,1]).range([x+d,d]);return this.data.points.map(p=>({x:g(p.x),y:i(p.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:p.text,fill:this.themeConfig.quadrantPointTextFill,x:g(p.x),y:i(p.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(s){const h=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:x}=s,{quadrantHalfHeight:f,quadrantHeight:d,quadrantLeft:c,quadrantHalfWidth:g,quadrantTop:i,quadrantWidth:y}=x;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i,x2:c+y+h,y2:i},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c+y,y1:i+h,x2:c+y,y2:i+d-h},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c-h,y1:i+d,x2:c+y+h,y2:i+d},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:c,y1:i+h,x2:c,y2:i+d-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+g,y1:i+h,x2:c+g,y2:i+d-h},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:c+h,y1:i+f,x2:c+y-h,y2:i+f}]}getTitle(s){if(s)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const s=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),h=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),x=this.config.showTitle&&!!this.data.titleText,f=this.data.points.length>0?"bottom":this.config.xAxisPosition,d=this.calculateSpace(f,s,h,x);return{points:this.getQuadrantPoints(d),quadrants:this.getQuadrants(d),axisLabels:this.getAxisLabels(f,s,h,d),borderLines:this.getBorders(d),title:this.getTitle(x)}}}const Wt=yt();function G(e){return wt(e.trim(),Wt)}const w=new Vt;function Nt(e){w.setData({quadrant1Text:G(e.text)})}function Ut(e){w.setData({quadrant2Text:G(e.text)})}function Qt(e){w.setData({quadrant3Text:G(e.text)})}function Ht(e){w.setData({quadrant4Text:G(e.text)})}function Mt(e){w.setData({xAxisLeftText:G(e.text)})}function Xt(e){w.setData({xAxisRightText:G(e.text)})}function Ot(e){w.setData({yAxisTopText:G(e.text)})}function Yt(e){w.setData({yAxisBottomText:G(e.text)})}function $t(e,s,h){w.addPoints([{x:s,y:h,text:G(e.text)}])}function jt(e){w.setConfig({chartWidth:e})}function Gt(e){w.setConfig({chartHeight:e})}function Kt(){const e=yt(),{themeVariables:s,quadrantChart:h}=e;return h&&w.setConfig(h),w.setThemeConfig({quadrant1Fill:s.quadrant1Fill,quadrant2Fill:s.quadrant2Fill,quadrant3Fill:s.quadrant3Fill,quadrant4Fill:s.quadrant4Fill,quadrant1TextFill:s.quadrant1TextFill,quadrant2TextFill:s.quadrant2TextFill,quadrant3TextFill:s.quadrant3TextFill,quadrant4TextFill:s.quadrant4TextFill,quadrantPointFill:s.quadrantPointFill,quadrantPointTextFill:s.quadrantPointTextFill,quadrantXAxisTextFill:s.quadrantXAxisTextFill,quadrantYAxisTextFill:s.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:s.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:s.quadrantInternalBorderStrokeFill,quadrantTitleFill:s.quadrantTitleFill}),w.setData({titleText:bt()}),w.build()}const Zt=function(){w.clear(),It()},Jt={setWidth:jt,setHeight:Gt,setQuadrant1Text:Nt,setQuadrant2Text:Ut,setQuadrant3Text:Qt,setQuadrant4Text:Ht,setXAxisLeftText:Mt,setXAxisRightText:Xt,setYAxisTopText:Ot,setYAxisBottomText:Yt,addPoint:$t,getQuadrantData:Kt,clear:Zt,setAccTitle:Lt,getAccTitle:Ct,setDiagramTitle:zt,getDiagramTitle:bt,getAccDescription:Et,setAccDescription:Dt},te=(e,s,h,x)=>{var f,d,c;function g(t){return t==="top"?"hanging":"middle"}function i(t){return t==="left"?"start":"middle"}function y(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const p=yt();ot.debug(`Rendering quadrant chart
`+e);const B=p.securityLevel;let W;B==="sandbox"&&(W=gt("#i"+s));const C=(B==="sandbox"?gt(W.nodes()[0].contentDocument.body):gt("body")).select(`[id="${s}"]`),N=C.append("g").attr("class","main"),M=((f=p.quadrantChart)==null?void 0:f.chartWidth)||500,X=((d=p.quadrantChart)==null?void 0:d.chartHeight)||500;Bt(C,X,M,((c=p.quadrantChart)==null?void 0:c.useMaxWidth)||!0),C.attr("viewBox","0 0 "+M+" "+X),x.db.setHeight(X),x.db.setWidth(M);const z=x.db.getQuadrantData(),it=N.append("g").attr("class","quadrants"),at=N.append("g").attr("class","border"),nt=N.append("g").attr("class","data-points"),U=N.append("g").attr("class","labels"),Q=N.append("g").attr("class","title");z.title&&Q.append("text").attr("x",0).attr("y",0).attr("fill",z.title.fill).attr("font-size",z.title.fontSize).attr("dominant-baseline",g(z.title.horizontalPos)).attr("text-anchor",i(z.title.verticalPos)).attr("transform",y(z.title)).text(z.title.text),z.borderLines&&at.selectAll("line").data(z.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const T=it.selectAll("g.quadrant").data(z.quadrants).enter().append("g").attr("class","quadrant");T.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),T.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>g(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>y(t.text)).text(t=>t.text.text),U.selectAll("g.label").data(z.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>g(t.horizontalPos)).attr("text-anchor",t=>i(t.verticalPos)).attr("transform",t=>y(t));const m=nt.selectAll("g.data-point").data(z.points).enter().append("g").attr("class","data-point");m.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),m.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>g(t.text.horizontalPos)).attr("text-anchor",t=>i(t.text.verticalPos)).attr("transform",t=>y(t.text))},ee={draw:te},le={parser:Rt,db:Jt,renderer:ee,styles:()=>""};export{le as diagram};
