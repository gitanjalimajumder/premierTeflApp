(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{tVmb:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n("mrSG"),i=n("fjkH"),o=n("vPQ6"),s=n("35jd"),r=n("j3ag"),c=n("bFG1"),b=n("4G9N"),d=n("pHTc"),l=n("pLZG"),g=n("tyNb"),u=n("R0Ic"),_=n("9+EE"),h=n("6s78"),m=n("3j9v"),p=n("r2Z7"),M=n("fXoL"),P=n("TEn/"),O=n("ofXK"),C=n("3CSS"),f=n("C1x5"),v=n("sYmb");const y=["mainTabs"];function CoreMainMenuPage_ion_spinner_3_Template(e,t){1&e&&(M.zc(0,"ion-spinner"),M.Pc(1,"translate")),2&e&&M.mc("aria-label",M.Qc(1,1,"core.loading"))}function CoreMainMenuPage_core_user_menu_button_4_Template(e,t){1&e&&M.zc(0,"core-user-menu-button",14),2&e&&M.Vc("alwaysShow",!0)}function CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template(e,t){if(1&e&&(M.Ec(0,"ion-badge",19),M.pd(1),M.Dc()),2&e){const e=M.Oc().$implicit;M.lc(1),M.qd(e.badge)}}const _c1=function(e){return{$a:e}};function CoreMainMenuPage_ion_tab_button_5_span_9_Template(e,t){if(1&e&&(M.Ec(0,"span",9),M.pd(1),M.Pc(2,"translate"),M.Dc()),2&e){const e=M.Oc().$implicit;M.lc(1),M.rd(" ",M.Rc(2,1,e.badgeA11yText,M.ad(4,_c1,e.badge))," ")}}function CoreMainMenuPage_ion_tab_button_5_Template(e,t){if(1&e){const e=M.Fc();M.Ec(0,"ion-tab-button",15),M.Mc("keydown",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keydown_0_listener(n){M.fd(e);const a=t.$implicit;return M.Oc().tabAction.keyDown(a.page,n)}))("keyup",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keyup_0_listener(n){M.fd(e);const a=t.$implicit;return M.Oc().tabAction.keyUp(a.page,n)})),M.zc(1,"ion-icon",16),M.Ec(2,"ion-label",8),M.pd(3),M.Pc(4,"translate"),M.Dc(),M.nd(5,CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template,2,1,"ion-badge",17),M.Ec(6,"span",9),M.pd(7),M.Pc(8,"translate"),M.Dc(),M.nd(9,CoreMainMenuPage_ion_tab_button_5_span_9_Template,3,6,"span",18),M.Dc()}if(2&e){const e=t.$implicit,n=M.Oc();M.nc(e.class),M.Vc("hidden",!n.loaded&&e.hide)("tab",e.page)("disabled",e.hide)("selected",e.page===n.selectedTab)("tabindex",n.selectedTab==e.page?0:-1),M.mc("aria-controls",e.id),M.lc(1),M.Vc("name",e.icon),M.lc(2),M.qd(M.Qc(4,14,e.title)),M.lc(2),M.Vc("ngIf",e.badge),M.lc(2),M.qd(M.Qc(8,16,e.title)),M.lc(2),M.Vc("ngIf",e.badge&&e.badgeA11yText)}}function CoreMainMenuPage_ion_icon_14_Template(e,t){1&e&&M.zc(0,"ion-icon",20)}let k=(()=>{class CoreMainMenuPage{constructor(){this.tabs=[],this.loaded=!1,this.showTabs=!1,this.tabsPlacement="bottom",this.morePageName=o.b.MORE_PAGE_NAME,this.isMainScreen=!1,this.moreBadge=!1,this.visibility="hidden",this.selectHistory=[],this.backButtonFunction=e=>this.backButtonClicked(e),this.tabAction=new CoreMainMenuRoleTab(this),this.logger=m.a.getInstance("CoreMainMenuPage"),this.navSubscription=r.D.events.pipe(Object(l.a)((e=>e instanceof g.c))).subscribe((()=>{var e;this.isMainScreen=!(null===(e=this.mainTabs)||void 0===e?void 0:e.outlet.canGoBack()),this.updateVisibility()}))}ngOnInit(){var e;return Object(a.a)(this,void 0,void 0,(function*(){this.showTabs=!0,this.urlToOpen=d.a.getRouteParam("urlToOpen"),this.redirectPath=d.a.getRouteParam("redirectPath"),this.redirectOptions=d.a.getRouteParam("redirectOptions"),this.isMainScreen=!(null===(e=this.mainTabs)||void 0===e?void 0:e.outlet.canGoBack()),this.updateVisibility(),this.subscription=s.a.getHandlersObservable().subscribe((e=>{const t=this.allHandlers;this.allHandlers=e,this.updateHandlers(t)})),this.badgeUpdateObserver=i.b.on(o.b.MAIN_MENU_HANDLER_BADGE_UPDATED,(e=>{e.siteId==_.b.getCurrentSiteId()&&this.updateMoreBadge()})),this.resizeListener=h.a.onWindowResize((()=>{this.updateHandlers()})),document.addEventListener("ionBackButton",this.backButtonFunction),p.a.isIOS()&&(this.keyboardObserver=i.b.on(i.b.KEYBOARD_CHANGE,(e=>{0===e&&(this.updateHandlers(),setTimeout((()=>{this.updateHandlers()}),250))}))),i.b.trigger(i.b.MAIN_HOME_LOADED)}))}updateHandlers(e){return Object(a.a)(this,void 0,void 0,(function*(){if(!this.allHandlers)return;this.tabsPlacement=o.a.getTabPlacement(),this.updateVisibility();const t=this.allHandlers.filter((e=>!e.onlyInMore)).slice(0,o.a.getNumItems()),n=[];for(let e=0;e<t.length;e++){const a=t[e],i=this.tabs.find((e=>e.page==a.page));i&&(i.hide=!1),a.hide=!1,a.id=a.id||"core-mainmenu-"+c.a.getUniqueId("CoreMainMenuPage"),n.push(i||a)}this.tabs=n,this.tabs.sort(((e,t)=>(t.priority||0)-(e.priority||0))),this.updateMoreBadge();let a=[];if(e){const t=this.allHandlers;a=e.map((e=>e.page)).filter((e=>!t.some((t=>t.page===e))))}const i=d.a.getCurrentMainMenuTab();if(this.loaded=s.a.areHandlersLoaded(),this.loaded&&(!i||a.includes(i))){yield c.a.nextTick();const e=this.tabs[0]?this.tabs[0].page:this.morePageName,t=this.tabs[0]?this.tabs[0].pageParams:{};this.logger.debug(`Select first tab: ${e}.`,this.tabs),d.a.navigateToSitePath(e,{preferCurrentTab:!1,params:Object.assign({urlToOpen:this.urlToOpen,redirectPath:this.redirectPath,redirectOptions:this.redirectOptions},t)})}}))}updateMoreBadge(){if(!this.allHandlers)return;const e=this.allHandlers.filter((e=>!e.onlyInMore)).slice(0,o.a.getNumItems());this.moreBadge=this.allHandlers.some((t=>-1==e.indexOf(t)&&!!t.badge))}ngOnDestroy(){var e,t,n,a,i;null===(e=this.subscription)||void 0===e?void 0:e.unsubscribe(),null===(t=this.navSubscription)||void 0===t||t.unsubscribe(),document.removeEventListener("ionBackButton",this.backButtonFunction),null===(n=this.keyboardObserver)||void 0===n||n.off(),null===(a=this.badgeUpdateObserver)||void 0===a||a.off(),null===(i=this.resizeListener)||void 0===i||i.off()}tabChanged(e){var t;this.selectedTab=e.tab,this.firstSelectedTab=null!==(t=this.firstSelectedTab)&&void 0!==t?t:e.tab,this.selectHistory.push(e.tab)}updateVisibility(){const e="side"==this.tabsPlacement?"":this.isMainScreen?"visible":"hidden";e!==this.visibility&&(this.visibility=e,this.notifyVisibilityUpdated())}backButtonClicked(e){e.detail.register(-10,(e=>Object(a.a)(this,void 0,void 0,(function*(){var t,n;if(yield this.currentRouteIsMainMenuRoot()){if(this.selectHistory.length>1){const e=this.selectHistory[this.selectHistory.length-2];return this.selectHistory=this.selectHistory.filter((t=>this.selectedTab!=t&&e!=t)),null===(t=this.mainTabs)||void 0===t||t.select(e),void 0}if(this.firstSelectedTab&&this.selectedTab!=this.firstSelectedTab)return this.selectHistory=[],null===(n=this.mainTabs)||void 0===n||n.select(this.firstSelectedTab),void 0;e()}}))))}currentRouteIsMainMenuRoot(){return Object(a.a)(this,void 0,void 0,(function*(){return!!d.a.getCurrentRoute({routeData:{mainMenuTabRoot:d.a.getCurrentMainMenuTab()}})}))}notifyVisibilityUpdated(){return Object(a.a)(this,void 0,void 0,(function*(){yield c.a.nextTick(),yield c.a.wait(500),yield c.a.nextTick(),i.b.trigger(o.b.MAIN_MENU_VISIBILITY_UPDATED)}))}}return CoreMainMenuPage.ɵfac=function CoreMainMenuPage_Factory(e){return new(e||CoreMainMenuPage)},CoreMainMenuPage.ɵcmp=M.sc({type:CoreMainMenuPage,selectors:[["page-core-mainmenu"]],viewQuery:function CoreMainMenuPage_Query(e,t){var n;(1&e&&M.ud(y,!0),2&e)&&(M.dd(n=M.Nc())&&(t.mainTabs=n.first))},decls:22,vars:27,consts:[[3,"hidden","ionTabsDidChange"],["mainTabs",""],["slot","bottom",1,"mainmenu-tabs"],[4,"ngIf"],[3,"alwaysShow",4,"ngIf"],["layout","label-hide",3,"hidden","tab","disabled","class","selected","tabindex","keydown","keyup",4,"ngFor","ngForOf"],["layout","label-hide",3,"hidden","tab","tabindex","keydown","keyup"],["name","ellipsis-horizontal","aria-hidden","true",1,"core-tab-icon"],["aria-hidden","true"],[1,"sr-only"],["class","core-tab-badge","name","fas-circle","aria-hidden","true",4,"ngIf"],[1,"core-network-message",3,"hidden"],[1,"core-online-message"],[1,"core-offline-message"],[3,"alwaysShow"],["layout","label-hide",3,"hidden","tab","disabled","selected","tabindex","keydown","keyup"],["aria-hidden","true",1,"core-tab-icon",3,"name"],["class","core-tab-badge","aria-hidden","true",4,"ngIf"],["class","sr-only",4,"ngIf"],["aria-hidden","true",1,"core-tab-badge"],["name","fas-circle","aria-hidden","true",1,"core-tab-badge"]],template:function CoreMainMenuPage_Template(e,t){1&e&&(M.Ec(0,"ion-tabs",0,1),M.Mc("ionTabsDidChange",(function CoreMainMenuPage_Template_ion_tabs_ionTabsDidChange_0_listener(e){return t.tabChanged(e)})),M.Ec(2,"ion-tab-bar",2),M.nd(3,CoreMainMenuPage_ion_spinner_3_Template,2,3,"ion-spinner",3),M.nd(4,CoreMainMenuPage_core_user_menu_button_4_Template,1,1,"core-user-menu-button",4),M.nd(5,CoreMainMenuPage_ion_tab_button_5_Template,10,18,"ion-tab-button",5),M.Ec(6,"ion-tab-button",6),M.Mc("keydown",(function CoreMainMenuPage_Template_ion_tab_button_keydown_6_listener(e){return t.tabAction.keyDown(t.morePageName,e)}))("keyup",(function CoreMainMenuPage_Template_ion_tab_button_keyup_6_listener(e){return t.tabAction.keyUp(t.morePageName,e)})),M.zc(7,"ion-icon",7),M.Ec(8,"ion-label",8),M.pd(9),M.Pc(10,"translate"),M.Dc(),M.Ec(11,"span",9),M.pd(12),M.Pc(13,"translate"),M.Dc(),M.nd(14,CoreMainMenuPage_ion_icon_14_Template,1,0,"ion-icon",10),M.Dc(),M.Dc(),M.Dc(),M.Ec(15,"div",11),M.Ec(16,"div",12),M.pd(17),M.Pc(18,"translate"),M.Dc(),M.Ec(19,"div",13),M.pd(20),M.Pc(21,"translate"),M.Dc(),M.Dc()),2&e&&(M.nc("placement-"+t.tabsPlacement),M.qc("tabshidden",!t.isMainScreen&&"bottom"==t.tabsPlacement),M.Vc("hidden",!t.showTabs),M.lc(2),M.Vc("@menuVisibilityAnimation",t.visibility),M.lc(1),M.Vc("ngIf",!t.loaded),M.lc(1),M.Vc("ngIf",t.loaded&&"side"==t.tabsPlacement),M.lc(1),M.Vc("ngForOf",t.tabs),M.lc(1),M.Vc("hidden",!t.loaded)("tab",t.morePageName)("tabindex",t.selectedTab==t.morePageName?0:-1),M.mc("aria-controls",t.morePageName),M.lc(3),M.qd(M.Qc(10,19,"core.more")),M.lc(3),M.qd(M.Qc(13,21,"core.more")),M.lc(2),M.Vc("ngIf",t.moreBadge),M.lc(1),M.Vc("hidden",!t.showTabs),M.lc(2),M.rd(" ",M.Qc(18,23,"core.youreonline")," "),M.lc(3),M.rd(" ",M.Qc(21,25,"core.youreoffline")," "))},directives:[P.ub,P.sb,O.t,O.s,P.tb,P.D,C.a,P.O,P.qb,f.a,P.k],pipes:[v.d],styles:["[_nghost-%COMP%]{--network-margin-bottom:0px;--network-message-background:transparent;--network-message-offline:none;--network-message-online:none;--network-message-height:16px}[_nghost-%COMP%]   ion-tabs[_ngcontent-%COMP%]{--menutabbar-size:var(--bottom-tabs-size)}[_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]{--menutabbar-size:var(--side-tabs-size)}.core-offline[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-offline   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%]{visibility:visible;height:var(--network-message-height);line-height:var(--network-message-height);padding-bottom:calc(var(--ion-safe-area-bottom, 0px) + var(--network-message-height))}.core-online[_nghost-%COMP%], .core-online   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--success);--network-message-online:block}.core-offline[_nghost-%COMP%], .core-offline   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--danger);--network-message-offline:block}ion-tab-bar[_ngcontent-%COMP%]{height:var(--menutabbar-size)}ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]{background:var(--background-selected)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{text-overflow:unset;overflow:visible;text-align:center;font-size:24px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{font-size:12px;font-weight:700;border-radius:10px;padding-left:6px;padding-right:6px;line-height:14px;--background:var(--core-bottom-tabs-badge-color);--color:var(--core-bottom-tabs-badge-text-color)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{color:var(--core-bottom-tabs-badge-color);padding:3px 6px 2px;left:calc(50% + 6px);top:8px;min-width:12px;font-size:8px;font-weight:400;box-sizing:border-box;position:absolute;z-index:1}[dir=rtl][_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;right:calc(50% + 6px)}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{margin-bottom:var(--network-margin-bottom);transition:margin .5s ease-in-out,transform .3s ease-in-out}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:8px}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{pointer-events:none}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{height:auto}ion-tabs.placement-side[_ngcontent-%COMP%]{flex-direction:row}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{order:-1;width:var(--menutabbar-size);height:calc(100% - var(--ion-safe-area-top) - var(--ion-safe-area-bottom));flex-direction:column;border-right:var(--border);border-top:0;justify-content:flex-start;padding-left:var(--ion-safe-area-left);padding-right:0;padding-top:var(--ion-safe-area-top);padding-bottom:var(--ion-safe-area-bottom)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{border-right:unset;-webkit-border-end:var(--border);border-inline-end:var(--border);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:0;padding-inline-end:0}}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:auto;right:1px}[dir=rtl][_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;left:1px;right:auto}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{width:100%;min-height:var(--menutabbar-size);flex:0}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:calc(50% - 20px)}.core-network-message[_ngcontent-%COMP%]{background:var(--network-message-background);pointer-events:none;position:absolute;bottom:0;left:0;right:0;padding-left:10px;padding-right:10px;text-align:center;color:#fff;visibility:hidden;height:0;transition:all .5s ease-in-out;opacity:.8;z-index:12;font-size:12px}.core-network-message[_ngcontent-%COMP%]   .core-online-message[_ngcontent-%COMP%]{display:var(--network-message-online)}.core-network-message[_ngcontent-%COMP%]   .core-offline-message[_ngcontent-%COMP%]{display:var(--network-message-offline)}"],data:{animation:[Object(u.k)("menuVisibilityAnimation",[Object(u.h)("hidden",Object(u.i)({height:0,visibility:"hidden",transform:"translateY(100%)"})),Object(u.h)("visible",Object(u.i)({visibility:"visible"})),Object(u.j)("visible => hidden",[Object(u.i)({transform:"translateY(0)"}),Object(u.e)("500ms ease-in-out",Object(u.i)({transform:"translateY(100%)"}))]),Object(u.j)("hidden => visible",[Object(u.i)({transform:"translateY(100%)",visibility:"visible",height:"*"}),Object(u.e)("500ms ease-in-out",Object(u.i)({transform:"translateY(0)"}))])])]}}),CoreMainMenuPage})();class CoreMainMenuRoleTab extends b.a{getSelectableTabs(){const e=this.componentInstance.tabs.filter((e=>!e.hide)).map((e=>({id:e.id||e.page,findIndex:e.page})));return e.push({id:this.componentInstance.morePageName,findIndex:this.componentInstance.morePageName}),e}isHorizontal(){return"bottom"==this.componentInstance.tabsPlacement}selectTab(e){var t;null===(t=this.componentInstance.mainTabs)||void 0===t?void 0:t.select(e)}}}}]);