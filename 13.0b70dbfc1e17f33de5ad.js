(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WoO9:function(n,l,u){"use strict";u.r(l);var e=u("CcnG"),t=u("9Z1F"),a=u("67Y/"),r=u("jn67").a+"announcements.json",o=function(){function n(n,l){this.http=n,this.logger=l}return n.prototype.ngOnInit=function(){var n=this;this.http.get(r).pipe(Object(t.a)(function(l){return n.logger.error(new Error(r+" request failed: "+l.message)),[]}),Object(a.a)(function(l){return n.findCurrentAnnouncement(l)}),Object(t.a)(function(l){return n.logger.error(new Error(r+" contains invalid data: "+l.message)),[]})).subscribe(function(l){return n.announcement=l})},n.prototype.findCurrentAnnouncement=function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]},n}(),c=function(){return function(){this.customElementComponent=o}}(),i=u("Ip0R"),f=u("t/Na"),s=u("vHPH"),m=e.Na({encapsulation:2,styles:[],data:{}});function g(n){return e.gb(0,[(n()(),e.Pa(0,0,null,null,5,"div",[["class","homepage-container"]],null,null,null,null,null)),(n()(),e.Pa(1,0,null,null,4,"div",[["class","announcement-bar"]],null,null,null,null,null)),(n()(),e.Pa(2,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.Pa(3,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),e.Pa(4,0,null,null,1,"a",[["class","button"]],[[8,"href",4]],null,null,null,null)),(n()(),e.eb(-1,null,["Learn More"]))],null,function(n,l){var u=l.component;n(l,2,0,u.announcement.imageUrl),n(l,3,0,u.announcement.message),n(l,4,0,u.announcement.linkUrl)})}function p(n){return e.gb(0,[(n()(),e.Ga(16777216,null,null,1,null,g)),e.Oa(1,16384,null,0,i.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.announcement)},null)}var W=e.La("aio-announcement-bar",o,function(n){return e.gb(0,[(n()(),e.Pa(0,0,null,null,1,"aio-announcement-bar",[],null,null,null,p,m)),e.Oa(1,114688,null,0,o,[f.c,s.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),b=u("PCNd");u.d(l,"AnnouncementBarModuleNgFactory",function(){return d});var d=e.Ma(c,[],function(n){return e.Va([e.Wa(512,e.j,e.Ba,[[8,[W]],[3,e.j],e.w]),e.Wa(4608,i.m,i.l,[e.t,[2,i.x]]),e.Wa(4608,f.h,f.n,[i.d,e.A,f.l]),e.Wa(4608,f.o,f.o,[f.h,f.m]),e.Wa(5120,f.a,function(n){return[n]},[f.o]),e.Wa(4608,f.k,f.k,[]),e.Wa(6144,f.i,null,[f.k]),e.Wa(4608,f.g,f.g,[f.i]),e.Wa(6144,f.b,null,[f.g]),e.Wa(4608,f.f,f.j,[f.b,e.q]),e.Wa(4608,f.c,f.c,[f.f]),e.Wa(1073742336,i.c,i.c,[]),e.Wa(1073742336,b.a,b.a,[]),e.Wa(1073742336,f.e,f.e,[]),e.Wa(1073742336,f.d,f.d,[]),e.Wa(1073742336,c,c,[]),e.Wa(256,f.l,"XSRF-TOKEN",[]),e.Wa(256,f.m,"X-XSRF-TOKEN",[])])})}}]);
//# sourceMappingURL=13.0b70dbfc1e17f33de5ad.js.map