(this["webpackJsonpdashboard-ant"]=this["webpackJsonpdashboard-ant"]||[]).push([[0],{180:function(e,a,t){e.exports=t(373)},185:function(e,a,t){},373:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),m=t.n(r),s=t(176),c=t(129),i=(t(185),t(375)),o=t(127),d=t(376),u=t(9),E=t(383),p=t(381),f=t(377),y=t(378),h=t(382),g=t(380),I=t(49),x=t(72),N=t(379),S=i.a.Content,b=i.a.Sider,A=i.a.Header,k=(i.a.Footer,["ADMIN","RECORDS","INTERACT","CALANDER","PROVIDERS","SETTINGS"]),T=[["CLIENTS","user"],["MONITORING","monitor"],["REPORTING","file"],["LOCATION","pushpin"],["LOGS","profile"]],R=["Alerts","Tasks","Risk","Authorization","Vituals"],O=[{"Date Time of alert":"2018-09-31 22:19","Client name":"Mike",Source:"Client pulse rate",Value:"N/A",Alert:"Over 2 days","Alert type":"Time-based"},{"Date Time of alert":"2018-09-31 22:19","Client name":"Mike",Source:"Client pulse rate",Value:"N/A",Alert:"Over 2 days","Alert type":"Time-based"},{"Date Time of alert":"2018-09-31 22:19","Client name":"Mike",Source:"Client pulse rate",Value:"N/A",Alert:"Over 2 days","Alert type":"Time-based"}],v=[{title:"Date Time of alert",dataIndex:"Date Time of alert",key:"Date Time of alert"},{title:"Client name",dataIndex:"Client name",key:"Client name"},{title:"Source",dataIndex:"Source",key:"Source"},{title:"Value",dataIndex:"Value",key:"Value"},{title:"Alert",dataIndex:"Alert",key:"Alert"},{title:"Alert type",dataIndex:"Alert type",key:"Alert type"}],w=function(e){e((function(e){return Object(c.a)({},e,{showSidebar:!e.showSidebar})}))};m.a.render(n.a.createElement((function(e){var a=Object(l.useState)({showSidebar:!1}),t=Object(s.a)(a,2),r=t[0],m=t[1];return Object(l.useEffect)((function(){var e=window.matchMedia("(max-width: 576px)"),a=function(e){m((function(a){return Object(c.a)({},a,{showSidebar:e.matches})}))};return e.addListener(a),function(){e.removeListener(a)}}),[]),n.a.createElement(i.a,{style:{height:"100vh"}},n.a.createElement(A,{className:"header"},n.a.createElement("div",{className:"mainTitle"},"VIRTUAL ",n.a.createElement("span",null,"HEALTH")),n.a.createElement(o.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},k.map((function(e,a){return n.a.createElement(o.a.Item,{className:"topMenuItem",key:a},e)})),n.a.createElement(o.a.Item,{style:{fontFamily:"Roboto",fontSize:12,float:"right"}},n.a.createElement(d.a,{style:{marginRight:10}},"K"),"Kirsten Mcellar",n.a.createElement(u.a,{style:{fontSize:10},type:"down"})))),n.a.createElement(i.a,null,r.showSidebar?null:n.a.createElement(b,{className:"sider"},n.a.createElement(o.a,{style:{display:"flex",flexDirection:"column",height:"100%"},span:0},T.map((function(e,a){return n.a.createElement(o.a.Item,{className:"leftMenuItem",key:a},n.a.createElement(u.a,{type:e[1]}),n.a.createElement("span",null,e[0]))})),n.a.createElement(o.a.Item,{style:{marginTop:"auto",display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement(u.a,{type:"question-circle"}),"Need Help?"))),function(e,a){return n.a.createElement(S,{className:"body"},n.a.createElement(o.a,{mode:"horizontal",style:{backgroundColor:"transparent"}},R.map((function(e,a){return n.a.createElement(o.a.Item,{className:"topMenuItem",key:a},0==a?n.a.createElement(E.a,{className:"topMenuItem",dot:!0},e):e)})),n.a.createElement(o.a.Item,{className:"topMenuItem",style:{float:"right"}},"Unresolved"),n.a.createElement(o.a.Item,{className:"topMenuItem",style:{float:"right",color:"#1890ff"}},"Resolved")),n.a.createElement("div",{style:{padding:24,background:"white",margin:"24px 16px",minHeight:300}},n.a.createElement(p.a,{className:"form1"},n.a.createElement(f.a,{gutter:12},n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6},n.a.createElement(p.a.Item,null,n.a.createElement("span",{className:"formLabel"},"First name"),n.a.createElement(h.a,{placeholder:"John"}))),n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6},n.a.createElement(p.a.Item,null,n.a.createElement("span",{className:"formLabel"},"Last name"),n.a.createElement(h.a,{placeholder:"Dove"}))),n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6},n.a.createElement(p.a.Item,null,n.a.createElement("span",{className:"formLabel"},"Start date"),n.a.createElement(g.a,{placeholder:"2018/02/25",style:{width:"100%"}}))),n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6},n.a.createElement(p.a.Item,null,n.a.createElement("span",{className:"formLabel"},"End date"),n.a.createElement(g.a,{placeholder:"2019/09/01",style:{width:"100%"}})))),n.a.createElement(f.a,{gutter:12,type:"flex",align:"center"},n.a.createElement(y.a,{xs:24,sm:24,md:24,lg:12,xl:12},n.a.createElement(p.a.Item,null,n.a.createElement("div",{className:"formLabel"},"Date range"),n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement(I.a,{shape:"link",className:"dataRangeFields"},"1 day"),n.a.createElement(I.a,{shape:"link",className:"dataRangeFields"},"7 days"),n.a.createElement(I.a,{shape:"round",style:{fontSize:11,flex:1,border:"1px solid #1890ff",color:"#1890ff"}},"30 days"),n.a.createElement(I.a,{shape:"link",className:"dataRangeFields"},"90 days"),n.a.createElement(I.a,{shape:"link",className:"dataRangeFields"},"All")))),n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6},n.a.createElement(p.a.Item,null,n.a.createElement("div",null,"Source"),n.a.createElement(x.a,{style:{width:"100%"},placeholder:"Select source"},n.a.createElement(x.a.Option,{value:"Option one"},"Source one"),n.a.createElement(x.a.Option,{value:"Option two"},"Source two")))),n.a.createElement(y.a,{xs:24,sm:24,md:12,lg:6,xl:6,style:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:14}},n.a.createElement(I.a,{shape:"round",type:"primary",className:"formLabel",style:{paddingLeft:40,paddingRight:40,fontSize:11,marginRight:"auto",marginLeft:"auto"}},"Search"),n.a.createElement(I.a,{shape:"circle",icon:"close",style:{marginRight:"auto",marginLeft:"auto",fontSize:10}}))),n.a.createElement(f.a,{style:{marginTop:30},gutter:12},n.a.createElement(N.a,{bodyStyle:{fontSize:10,fontFamily:"Roboto"},columns:v,dataSource:O,scroll:{x:"auto"}})))),e.showSidebar?n.a.createElement("div",{onClick:function(){return w(a)},className:"drawerButton"},n.a.createElement(u.a,{type:"menu"})):null)}(r,m)))}),null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.59d6171d.chunk.js.map