(this["webpackJsonppareto-explorer"]=this["webpackJsonppareto-explorer"]||[]).push([[24],{628:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(156),n=a(1),s=a.n(n),l=a(626),i=s.a.memo((function(e){var t=e.name,a=e.text,n=Object(r.a)(e,["name","text"]),i=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return s.a.createElement("div",{className:"card-header-actions"},s.a.createElement(l.db,Object.assign({},n,{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action"}),s.a.createElement("small",{className:"text-muted"},a||"docs")))}))},668:function(e,t,a){"use strict";t.a=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active"},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"Zbyn\u011bk Phoibos",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"Aulus Agmundr",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"Ford Prefect",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}]},866:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(626),l=a(628),i=a(668),u=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},m=["name","registered","role","status"];t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.wb,null,n.a.createElement(s.u,{xs:"12",lg:"6"},n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Simple Table",n.a.createElement(l.a,{name:"CModal"})),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}})))),n.a.createElement(s.u,{xs:"12",lg:"6"},n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Striped Table"),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,striped:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}}))))),n.a.createElement(s.wb,null,n.a.createElement(s.u,{xs:"12",lg:"6"},n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Condensed Table"),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,size:"sm",itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}})))),n.a.createElement(s.u,{xs:"12",lg:"6"},n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Bordered Table"),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,bordered:!0,itemsPerPage:5,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}}))))),n.a.createElement(s.wb,null,n.a.createElement(s.u,null,n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Combined All Table"),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}}))))),n.a.createElement(s.wb,null,n.a.createElement(s.u,null,n.a.createElement(s.j,null,n.a.createElement(s.n,null,"Combined All dark Table"),n.a.createElement(s.k,null,n.a.createElement(s.y,{items:i.a,fields:m,dark:!0,hover:!0,striped:!0,bordered:!0,size:"sm",itemsPerPage:10,pagination:!0,scopedSlots:{status:function(e){return n.a.createElement("td",null,n.a.createElement(s.b,{color:u(e.status)},e.status))}}}))))))}}}]);
//# sourceMappingURL=24.47224f45.chunk.js.map