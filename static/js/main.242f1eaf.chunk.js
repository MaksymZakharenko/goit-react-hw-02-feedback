(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={count:"Statistics_count__vEe4o",percent:"Statistics_percent__ZuWGS"}},function(t,e,n){t.exports={item_good:"FeedbackOptions_item_good__1PtEq",item_neutral:"FeedbackOptions_item_neutral__2BzNk",item_bad:"FeedbackOptions_item_bad__2DlQV"}},,function(t,e,n){t.exports={statistics:"Main_statistics__2Zjz5"}},,,,function(t,e,n){t.exports={title:"Section_title__QxBxR"}},function(t,e,n){t.exports={message:"Notification_message__c2JcG"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(6),o=n.n(s),i=n(7),r=n(8),u=n(12),d=n(11),l=n(3),b=n.n(l),j=n(0),h=function(t){var e=t.countGoodFeedback,n=t.countNeutralFeedback,c=t.countBadFeedback;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:b.a.item_good,onClick:function(){return e(1)},children:"Good"}),Object(j.jsx)("button",{type:"button",className:b.a.item_neutral,onClick:function(){return n(1)},children:"Neutral"}),Object(j.jsx)("button",{type:"button",className:b.a.item_bad,onClick:function(){return c(1)},children:"Bad"})]})},m=n(9),p=n.n(m),x=function(t){var e=t.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:p.a.title,children:"Please leave feedback"}),e]})},O=n(10),f=n.n(O),k=function(t){var e=t.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{className:f.a.message,children:e})})},_=n(2),g=n.n(_),F=function(t){var e=t.state,n=t.total,c=t.positivePercentage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Statistics:"}),n()>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{className:g.a.count,children:["Good: ",e.good]}),Object(j.jsxs)("span",{className:g.a.count,children:["Neutral: ",e.neutral]}),Object(j.jsxs)("span",{className:g.a.count,children:["Bad: ",e.bad]}),Object(j.jsxs)("span",{className:g.a.count,children:["Total: ",n()]}),Object(j.jsxs)("span",{className:g.a.count,children:["Positive feedback: ",Object(j.jsxs)("span",{className:g.a.percent,children:[c()," %"]})]})]}):Object(j.jsx)(k,{message:"No feedback given"})]})},N=n(5),v=n.n(N),B=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.countGoodFeedback=function(){t.setState((function(t){return{good:t.good+1}}))},t.countNeutralFeedback=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.countBadFeedback=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.total=function(){var e=t.state;return e.good+e.neutral+e.bad},t.positivePercentage=function(){var e=t.state.good,n=t.total();return Math.round(e/n*100)},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(x,{children:Object(j.jsxs)("div",{className:v.a.container,children:[Object(j.jsx)(h,{countGoodFeedback:this.countGoodFeedback,countNeutralFeedback:this.countNeutralFeedback,countBadFeedback:this.countBadFeedback}),Object(j.jsx)("div",{className:v.a.statistics,children:Object(j.jsx)(F,{state:this.state,countGoodFeedback:this.countGoodFeedback,countNeutralFeedback:this.countNeutralFeedback,countBadFeedback:this.countBadFeedback,total:this.total,positivePercentage:this.positivePercentage})})]})})}}]),n}(c.Component),G=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(B,{})})};n(18);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.242f1eaf.chunk.js.map