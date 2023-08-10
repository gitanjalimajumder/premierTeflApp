(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2ACH":function(e,t,n){"use strict";n.d(t,"a",(function(){return AddonCompetencyCourseCompetenciesSource}));var c=n("mrSG"),o=n("CvRw"),i=n("bFG1"),a=n("FBtE"),r=n("qjHM");class AddonCompetencyCourseCompetenciesSource extends o.a{constructor(e,t){super(),this.COURSE_ID=e,this.USER_ID=t}static getSourceId(e,t){return`${e}-${t||"current-user"}`}getItemPath(e){return String(e.competency.id)}load(){const e=Object.create(null,{load:{get:()=>super.load}});return Object(c.a)(this,void 0,void 0,(function*(){!this.dirty&&this.courseCompetencies||(yield this.loadCourseCompetencies()),yield e.load.call(this)}))}invalidateCache(){return Object(c.a)(this,void 0,void 0,(function*(){yield i.a.ignoreErrors(a.a.invalidateCourseCompetencies(this.COURSE_ID,this.USER_ID))}))}loadPageItems(){return Object(c.a)(this,void 0,void 0,(function*(){if(!this.courseCompetencies)throw new Error("Can't load competencies without course data");return{items:this.courseCompetencies.competencies}}))}loadCourseCompetencies(){return Object(c.a)(this,void 0,void 0,(function*(){[this.courseCompetencies,this.user]=yield Promise.all([a.a.getCourseCompetencies(this.COURSE_ID,this.USER_ID),r.a.getProfile(this.USER_ID)])}))}}},"47DI":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var c=n("mrSG"),o=n("3LXp"),i=n("46ml"),a=n("j3ag"),r=n("pHTc"),d=n("93ts"),m=n("l4/z"),p=n("2ACH"),s=n("EoRH"),l=n("baaQ"),_=n("D7J2"),y=n("9+EE"),u=n("8vmT"),g=n("fXoL"),C=n("TEn/"),f=n("nt/U"),h=n("PgjG"),I=n("ofXK"),P=n("sYmb");function AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_6_Template(e,t){if(1&e&&(g.Ec(0,"ion-badge",9),g.pd(1),g.Dc()),2&e){const e=g.Oc().$implicit;g.Vc("color",e.usercompetency.proficiency?"success":"danger"),g.lc(1),g.rd(" ",e.usercompetency.gradename," ")}}function AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_7_Template(e,t){if(1&e&&(g.Ec(0,"ion-badge",9),g.pd(1),g.Dc()),2&e){const e=g.Oc().$implicit;g.Vc("color",e.usercompetencycourse.proficiency?"success":"danger"),g.lc(1),g.rd(" ",e.usercompetencycourse.gradename," ")}}function AddonCompetencyCompetenciesPage_ion_item_15_Template(e,t){if(1&e){const e=g.Fc();g.Ec(0,"ion-item",6),g.Mc("click",(function AddonCompetencyCompetenciesPage_ion_item_15_Template_ion_item_click_0_listener(){g.fd(e);const n=t.$implicit;return g.Oc().competencies.select(n)})),g.Ec(1,"ion-label"),g.Ec(2,"p",7),g.pd(3),g.Ec(4,"em"),g.pd(5),g.Dc(),g.Dc(),g.Dc(),g.nd(6,AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_6_Template,2,2,"ion-badge",8),g.nd(7,AddonCompetencyCompetenciesPage_ion_item_15_ion_badge_7_Template,2,2,"ion-badge",8),g.Dc()}if(2&e){const e=t.$implicit,n=g.Oc();g.mc("aria-label",e.competency.shortname)("aria-current",n.competencies.getItemAriaCurrent(e)),g.lc(3),g.rd("",e.competency.shortname," "),g.lc(2),g.qd(e.competency.idnumber),g.lc(1),g.Vc("ngIf",e.usercompetency),g.lc(1),g.Vc("ngIf",e.usercompetencycourse)}}let v=(()=>{class AddonCompetencyCompetenciesPage{constructor(){this.title="";const e=r.a.getRouteNumberParam("planId");if(this.logView=u.a.once((()=>this.performLogView())),!e){const e=r.a.getRequiredRouteNumberParam("courseId"),t=r.a.getRouteNumberParam("userId"),n=l.a.getOrCreateSource(p.a,[e,t]);return this.competencies=new s.a(n,AddonCompetencyCompetenciesPage),void 0}const t=l.a.getOrCreateSource(m.a,[e]);this.competencies=new s.a(t,AddonCompetencyCompetenciesPage)}ngAfterViewInit(){return Object(c.a)(this,void 0,void 0,(function*(){yield this.fetchCompetencies(),this.competencies.start(this.splitView)}))}fetchCompetencies(){return Object(c.a)(this,void 0,void 0,(function*(){try{const e=this.competencies.getSource();if(yield this.competencies.load(),e instanceof m.a){if(!e.plan||e.plan&&e.plan.competencycount<=0)throw new d.a(a.I.instant("addon.competency.errornocompetenciesfound"));this.title=e.plan.plan.name}else this.title=a.I.instant("addon.competency.coursecompetencies");this.logView()}catch(e){o.a.showErrorModalDefault(e,"Error getting competencies data.")}}))}refreshCompetencies(e){return Object(c.a)(this,void 0,void 0,(function*(){yield this.competencies.getSource().invalidateCache(),this.competencies.getSource().setDirty(!0),this.fetchCompetencies().finally((()=>{null==e?void 0:e.complete()}))}))}ngOnDestroy(){this.competencies.destroy()}performLogView(){const e=this.competencies.getSource();if(e instanceof m.a)return _.a.logEvent({type:_.b.VIEW_ITEM_LIST,ws:"tool_lp_data_for_plan_page",name:this.title,data:{category:"competency",planid:e.PLAN_ID},url:`/admin/tool/lp/plan.php?id=${e.PLAN_ID}`}),void 0;e.USER_ID&&e.USER_ID!==y.b.getCurrentSiteUserId()||_.a.logEvent({type:_.b.VIEW_ITEM_LIST,ws:"tool_lp_data_for_course_competencies_page",name:this.title,data:{category:"competency",courseid:e.COURSE_ID},url:`/admin/tool/lp/coursecompetencies.php?courseid=${e.COURSE_ID}`})}}return AddonCompetencyCompetenciesPage.ɵfac=function AddonCompetencyCompetenciesPage_Factory(e){return new(e||AddonCompetencyCompetenciesPage)},AddonCompetencyCompetenciesPage.ɵcmp=g.sc({type:AddonCompetencyCompetenciesPage,selectors:[["page-addon-competency-competencies"]],viewQuery:function AddonCompetencyCompetenciesPage_Query(e,t){var n;(1&e&&g.ud(i.a,!0),2&e)&&(g.dd(n=g.Nc())&&(t.splitView=n.first))},decls:16,vars:10,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-wrap","button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",1,"ion-text-wrap",3,"click"],[1,"item-heading"],["slot","end",3,"color",4,"ngIf"],["slot","end",3,"color"]],template:function AddonCompetencyCompetenciesPage_Template(e,t){1&e&&(g.Ec(0,"ion-header"),g.Ec(1,"ion-toolbar"),g.Ec(2,"ion-buttons",0),g.zc(3,"ion-back-button",1),g.Pc(4,"translate"),g.Dc(),g.Ec(5,"ion-title"),g.Ec(6,"h1"),g.pd(7),g.Dc(),g.Dc(),g.Dc(),g.Dc(),g.Ec(8,"ion-content"),g.Ec(9,"core-split-view"),g.Ec(10,"ion-refresher",2),g.Mc("ionRefresh",(function AddonCompetencyCompetenciesPage_Template_ion_refresher_ionRefresh_10_listener(e){return t.refreshCompetencies(e.target)})),g.zc(11,"ion-refresher-content",3),g.Pc(12,"translate"),g.Dc(),g.Ec(13,"core-loading",4),g.Ec(14,"ion-list"),g.nd(15,AddonCompetencyCompetenciesPage_ion_item_15_Template,8,6,"ion-item",5),g.Dc(),g.Dc(),g.Dc(),g.Dc()),2&e&&(g.lc(3),g.Vc("text",g.Qc(4,6,"core.back")),g.lc(4),g.qd(t.title),g.lc(3),g.Vc("disabled",!t.competencies.loaded),g.lc(1),g.Wc("pullingText",g.Qc(12,8,"core.pulltorefresh")),g.lc(2),g.Vc("hideUntil",t.competencies.loaded),g.lc(2),g.Vc("ngForOf",t.competencies.items))},directives:[C.C,C.Ab,C.m,C.h,C.i,C.yb,f.a,C.v,i.a,C.bb,C.cb,h.a,C.P,I.s,C.I,C.O,I.t,C.k],pipes:[P.d],encapsulation:2}),AddonCompetencyCompetenciesPage})()},"7Dkd":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("L3Fv"),o=n("vgj2"),i=n("fXoL");let a=(()=>{class AddonCompetencyCompetencySummaryPageModule{}return AddonCompetencyCompetencySummaryPageModule.ɵmod=i.wc({type:AddonCompetencyCompetencySummaryPageModule}),AddonCompetencyCompetencySummaryPageModule.ɵinj=i.vc({factory:function AddonCompetencyCompetencySummaryPageModule_Factory(e){return new(e||AddonCompetencyCompetencySummaryPageModule)},imports:[[c.a]]}),AddonCompetencyCompetencySummaryPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(a,{declarations:[o.a],imports:[c.a]}))},H4nd:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("L3Fv"),o=n("47DI"),i=n("fXoL");let a=(()=>{class AddonCompetencyCompetenciesPageModule{}return AddonCompetencyCompetenciesPageModule.ɵmod=i.wc({type:AddonCompetencyCompetenciesPageModule}),AddonCompetencyCompetenciesPageModule.ɵinj=i.vc({factory:function AddonCompetencyCompetenciesPageModule_Factory(e){return new(e||AddonCompetencyCompetenciesPageModule)},imports:[[c.a]]}),AddonCompetencyCompetenciesPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(a,{declarations:[o.a],imports:[c.a]}))},XQtJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("L3Fv"),o=n("ZnQC"),i=n("fXoL");let a=(()=>{class AddonCompetencyCompetencyPageModule{}return AddonCompetencyCompetencyPageModule.ɵmod=i.wc({type:AddonCompetencyCompetencyPageModule}),AddonCompetencyCompetencyPageModule.ɵinj=i.vc({factory:function AddonCompetencyCompetencyPageModule_Factory(e){return new(e||AddonCompetencyCompetencyPageModule)},imports:[[c.a]]}),AddonCompetencyCompetencyPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(a,{declarations:[o.a],imports:[c.a]}))},ZnQC:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var c=n("mrSG"),o=n("qjHM"),i=n("9+EE"),a=n("3LXp"),r=n("j3ag"),d=n("FBtE"),m=n("pHTc"),p=n("bFG1"),s=n("RJwM"),l=n("eoiU"),_=n("baaQ"),y=n("l4/z"),u=n("2ACH"),g=n("8vmT"),C=n("D7J2"),f=n("mvS9"),h=n("fXoL"),I=n("TEn/"),P=n("ofXK"),v=n("nt/U"),E=n("OZH1"),A=n("PgjG"),b=n("FeAf"),D=n("hMzs"),S=n("iSJP"),T=n("eAud"),w=n("nu3w"),O=n("sYmb"),x=n("uYHD");function AddonCompetencyCompetencyPage_h1_6_Template(e,t){if(1&e&&(h.Ec(0,"h1"),h.pd(1),h.Ec(2,"small"),h.pd(3),h.Dc(),h.Dc()),2&e){const e=h.Oc();h.lc(1),h.rd(" ",e.competency.competency.competency.shortname," "),h.lc(2),h.qd(e.competency.competency.competency.idnumber)}}function AddonCompetencyCompetencyPage_ion_card_12_Template(e,t){if(1&e&&(h.Ec(0,"ion-card"),h.Ec(1,"ion-item",7),h.zc(2,"core-user-avatar",8),h.Ec(3,"ion-label"),h.Ec(4,"p",9),h.pd(5),h.Dc(),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc();h.lc(2),h.Vc("user",e.user),h.lc(3),h.qd(e.user.fullname)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_1_Template(e,t){if(1&e&&(h.Ec(0,"ion-item",7),h.Ec(1,"ion-label"),h.zc(2,"core-format-text",14),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(2),h.Vc("text",e.competency.competency.competency.description)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencyPage_ion_card_13_a_8_Template(e,t){if(1&e&&(h.Ec(0,"a",15),h.pd(1),h.Dc()),2&e){const e=h.Oc(2);h.Vc("href",e.competencyFrameworkUrl,h.id),h.lc(1),h.rd(" ",e.competency.competency.comppath.framework.name," ")}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_9_Template(e,t){if(1&e&&(h.Cc(0),h.pd(1),h.Bc()),2&e){const e=h.Oc(2);h.lc(1),h.rd(" ",e.competency.competency.comppath.framework.name," ")}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template(e,t){if(1&e){const e=h.Fc();h.Ec(0,"button",17),h.Mc("click",(function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template_button_click_0_listener(){h.fd(e);const t=h.Oc().$implicit;return h.Oc(2).openCompetencySummary(t.id)})),h.pd(1),h.Dc()}if(2&e){const e=h.Oc().$implicit;h.lc(1),h.rd(" ",e.name," ")}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_2_Template(e,t){if(1&e&&(h.Cc(0),h.pd(1),h.Bc()),2&e){const e=h.Oc().$implicit;h.lc(1),h.qd(e.name)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_3_Template(e,t){1&e&&(h.Cc(0),h.pd(1," / "),h.Bc())}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_Template(e,t){if(1&e&&(h.Cc(0),h.nd(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_button_1_Template,2,1,"button",16),h.nd(2,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_2_Template,2,1,"ng-container",2),h.nd(3,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_ng_container_3_Template,2,0,"ng-container",2),h.Bc()),2&e){const e=t.$implicit,n=h.Oc(2);h.lc(1),h.Vc("ngIf",n.competency.competency.comppath.showlinks),h.lc(1),h.Vc("ngIf",!n.competency.competency.comppath.showlinks),h.lc(1),h.Vc("ngIf",!e.last)}}function AddonCompetencyCompetencyPage_ion_card_13_p_17_Template(e,t){1&e&&(h.Ec(0,"p"),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.competency.nocrossreferencedcompetencies")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template(e,t){if(1&e){const e=h.Fc();h.Ec(0,"p"),h.Ec(1,"button",17),h.Mc("click",(function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template_button_click_1_listener(){h.fd(e);const n=t.$implicit;return h.Oc(3).openCompetencySummary(n.id)})),h.pd(2),h.Dc(),h.Dc()}if(2&e){const e=t.$implicit;h.lc(2),h.sd(" ",e.shortname," - ",e.idnumber," ")}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_Template(e,t){if(1&e&&(h.Cc(0),h.nd(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_p_1_Template,3,2,"p",13),h.Bc()),2&e){const e=h.Oc(2);h.lc(1),h.Vc("ngForOf",e.competency.competency.relatedcompetencies)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_p_5_Template(e,t){1&e&&(h.Ec(0,"p"),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.competency.noactivities")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_core_mod_icon_1_Template(e,t){if(1&e&&h.zc(0,"core-mod-icon",22),2&e){const e=h.Oc().$implicit;h.Vc("modicon",e.iconurl)("showAlt",!1)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_Template(e,t){if(1&e&&(h.Ec(0,"ion-item",19),h.nd(1,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_core_mod_icon_1_Template,1,2,"core-mod-icon",20),h.Ec(2,"ion-label"),h.zc(3,"core-format-text",21),h.Dc(),h.Dc()),2&e){const e=t.$implicit,n=h.Oc(3);h.Vc("href",e.url),h.mc("aria-label",e.name),h.lc(1),h.Vc("ngIf",e.iconurl),h.lc(2),h.Vc("text",e.name)("contextInstanceId",e.id)("courseId",n.courseId)}}function AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_Template(e,t){if(1&e&&(h.Ec(0,"ion-item",7),h.Ec(1,"ion-label"),h.Ec(2,"p",9),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.nd(5,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_p_5_Template,3,3,"p",2),h.nd(6,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_ion_item_6_Template,4,6,"ion-item",18),h.Dc(),h.Dc()),2&e){const e=h.Oc(2);h.lc(3),h.qd(h.Qc(4,3,"addon.competency.activities")),h.lc(2),h.Vc("ngIf",0==e.coursemodules.length),h.lc(1),h.Vc("ngForOf",e.coursemodules)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_item_1_Template(e,t){if(1&e&&(h.Ec(0,"ion-item",7),h.Ec(1,"ion-label"),h.Ec(2,"p",9),h.pd(3),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc(3);h.lc(3),h.qd(h.Qc(4,2,"addon.competency.reviewstatus")),h.lc(3),h.qd(e.competency.usercompetency.statusname)}}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_7_Template(e,t){1&e&&(h.Ec(0,"ion-badge",26),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"core.yes")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_8_Template(e,t){1&e&&(h.Ec(0,"ion-badge",27),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"core.no")," "))}function AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_Template(e,t){if(1&e&&(h.Cc(0),h.nd(1,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_item_1_Template,7,4,"ion-item",10),h.Ec(2,"ion-item",7),h.Ec(3,"ion-label"),h.Ec(4,"p",9),h.pd(5),h.Pc(6,"translate"),h.Dc(),h.Dc(),h.nd(7,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_7_Template,3,3,"ion-badge",23),h.nd(8,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_ion_badge_8_Template,3,3,"ion-badge",24),h.Dc(),h.Ec(9,"ion-item",7),h.Ec(10,"ion-label"),h.Ec(11,"p",9),h.pd(12),h.Pc(13,"translate"),h.Dc(),h.Dc(),h.Ec(14,"ion-badge",25),h.pd(15),h.Dc(),h.Dc(),h.Bc()),2&e){const e=h.Oc(2);h.lc(1),h.Vc("ngIf",e.competency.usercompetency&&e.competency.usercompetency.status),h.lc(4),h.qd(h.Qc(6,6,"addon.competency.proficient")),h.lc(2),h.Vc("ngIf",e.userCompetency.proficiency),h.lc(1),h.Vc("ngIf",!e.userCompetency.proficiency),h.lc(4),h.qd(h.Qc(13,8,"addon.competency.rating")),h.lc(3),h.qd(e.userCompetency.gradename)}}function AddonCompetencyCompetencyPage_ion_card_13_Template(e,t){if(1&e&&(h.Ec(0,"ion-card"),h.nd(1,AddonCompetencyCompetencyPage_ion_card_13_ion_item_1_Template,3,3,"ion-item",10),h.Ec(2,"ion-item",11),h.Ec(3,"ion-label"),h.Ec(4,"p",9),h.pd(5),h.Pc(6,"translate"),h.Dc(),h.Ec(7,"p"),h.nd(8,AddonCompetencyCompetencyPage_ion_card_13_a_8_Template,2,2,"a",12),h.nd(9,AddonCompetencyCompetencyPage_ion_card_13_ng_container_9_Template,2,1,"ng-container",2),h.pd(10,"  /  "),h.nd(11,AddonCompetencyCompetencyPage_ion_card_13_ng_container_11_Template,4,3,"ng-container",13),h.Dc(),h.Dc(),h.Dc(),h.Ec(12,"ion-item",7),h.Ec(13,"ion-label"),h.Ec(14,"p",9),h.pd(15),h.Pc(16,"translate"),h.Dc(),h.nd(17,AddonCompetencyCompetencyPage_ion_card_13_p_17_Template,3,3,"p",2),h.nd(18,AddonCompetencyCompetencyPage_ion_card_13_ng_container_18_Template,2,1,"ng-container",2),h.Dc(),h.Dc(),h.nd(19,AddonCompetencyCompetencyPage_ion_card_13_ion_item_19_Template,7,5,"ion-item",10),h.nd(20,AddonCompetencyCompetencyPage_ion_card_13_ng_container_20_Template,16,10,"ng-container",2),h.Dc()),2&e){const e=h.Oc();h.lc(1),h.Vc("ngIf",e.competency.competency.competency.description),h.lc(4),h.qd(h.Qc(6,10,"addon.competency.path")),h.lc(3),h.Vc("ngIf",e.competency.competency.comppath.showlinks),h.lc(1),h.Vc("ngIf",!e.competency.competency.comppath.showlinks),h.lc(2),h.Vc("ngForOf",e.competency.competency.comppath.ancestors),h.lc(4),h.qd(h.Qc(16,12,"addon.competency.crossreferencedcompetencies")),h.lc(2),h.Vc("ngIf",!e.competency.competency.hasrelatedcompetencies),h.lc(1),h.Vc("ngIf",e.competency.competency.hasrelatedcompetencies),h.lc(1),h.Vc("ngIf",e.coursemodules),h.lc(1),h.Vc("ngIf",e.userCompetency)}}function AddonCompetencyCompetencyPage_div_14_p_4_Template(e,t){1&e&&(h.Ec(0,"p",28),h.pd(1),h.Pc(2,"translate"),h.Dc()),2&e&&(h.lc(1),h.rd(" ",h.Qc(2,1,"addon.competency.noevidence")," "))}function AddonCompetencyCompetencyPage_div_14_ion_card_5_ion_item_1_Template(e,t){if(1&e&&(h.Ec(0,"ion-item",33),h.zc(1,"core-user-avatar",34),h.Ec(2,"ion-label"),h.Ec(3,"p",9),h.pd(4),h.Dc(),h.Ec(5,"p"),h.pd(6),h.Pc(7,"coreFormatDate"),h.Dc(),h.Dc(),h.Dc()),2&e){const e=h.Oc().$implicit,t=h.Oc(2);h.Vc("userId",e.actionuser.id)("courseId",t.courseId),h.lc(1),h.Vc("user",e.actionuser)("linkProfile",!1),h.lc(3),h.qd(e.actionuser.fullname),h.lc(2),h.qd(h.Qc(7,6,1e3*e.timemodified))}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_p_7_Template(e,t){if(1&e&&(h.Ec(0,"p",35),h.pd(1),h.Dc()),2&e){const e=h.Oc().$implicit;h.lc(1),h.qd(e.description)}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_blockquote_8_Template(e,t){if(1&e&&(h.Ec(0,"blockquote"),h.pd(1),h.Dc()),2&e){const e=h.Oc().$implicit;h.lc(1),h.qd(e.note)}}function AddonCompetencyCompetencyPage_div_14_ion_card_5_Template(e,t){if(1&e&&(h.Ec(0,"ion-card"),h.nd(1,AddonCompetencyCompetencyPage_div_14_ion_card_5_ion_item_1_Template,8,8,"ion-item",30),h.Ec(2,"ion-item",7),h.Ec(3,"ion-label"),h.Ec(4,"p"),h.Ec(5,"ion-badge",31),h.pd(6),h.Dc(),h.Dc(),h.nd(7,AddonCompetencyCompetencyPage_div_14_ion_card_5_p_7_Template,2,1,"p",32),h.nd(8,AddonCompetencyCompetencyPage_div_14_ion_card_5_blockquote_8_Template,2,1,"blockquote",2),h.Dc(),h.Dc(),h.Dc()),2&e){const e=t.$implicit;h.lc(1),h.Vc("ngIf",e.actionuser),h.lc(5),h.qd(e.gradename),h.lc(1),h.Vc("ngIf",e.description),h.lc(1),h.Vc("ngIf",e.note)}}function AddonCompetencyCompetencyPage_div_14_Template(e,t){if(1&e&&(h.Ec(0,"div"),h.Ec(1,"h2",28),h.pd(2),h.Pc(3,"translate"),h.Dc(),h.nd(4,AddonCompetencyCompetencyPage_div_14_p_4_Template,3,3,"p",29),h.nd(5,AddonCompetencyCompetencyPage_div_14_ion_card_5_Template,9,4,"ion-card",13),h.Dc()),2&e){const e=h.Oc();h.lc(2),h.qd(h.Qc(3,3,"addon.competency.evidence")),h.lc(2),h.Vc("ngIf",0==e.competency.evidence.length),h.lc(1),h.Vc("ngForOf",e.competency.evidence)}}let V=(()=>{class AddonCompetencyCompetencyPage{constructor(){this.competencyLoaded=!1,this.logView=g.a.once((()=>this.performLogView()));try{const e=m.a.getRouteNumberParam("planId");if(!e){const e=m.a.getRequiredRouteNumberParam("courseId"),t=m.a.getRouteNumberParam("userId"),n=_.a.getOrCreateSource(u.a,[e,t]);return this.competencies=new AddonCompetencyCompetenciesSwipeManager(n),void 0}const t=_.a.getOrCreateSource(y.a,[e]);this.competencies=new AddonCompetencyCompetenciesSwipeManager(t)}catch(e){return a.a.showErrorModal(e),m.a.back(),void 0}}get competencyFrameworkUrl(){if(!this.competency)return;const{pluginbaseurl:e,framework:t,pagecontextid:n}=this.competency.competency.comppath;return`${e}/competencies.php?competencyframeworkid=${t.id}&pagecontextid=${n}`}get courseId(){const e=this.competencies.getSource();if(e instanceof u.a)return e.COURSE_ID}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){try{const e=this.competencies.getSource();yield e.reload(),yield this.competencies.start(),yield this.fetchCompetency()}finally{this.competencyLoaded=!0}}))}ngOnDestroy(){this.competencies.destroy()}fetchCompetency(){return Object(c.a)(this,void 0,void 0,(function*(){try{const e=this.competencies.getSource();this.competency=e instanceof y.a?yield this.fetchCompetencySummaryFromPlan(e):yield this.fetchCompetencySummaryFromCourse(e),this.competency.user.id!=i.b.getCurrentSiteUserId()&&(this.user=this.competency.user),this.competency.evidence.forEach((e=>{if(e.descidentifier){e.description=r.I.instant("addon.competency."+e.descidentifier,{$a:e.desca})}})),this.logView()}catch(e){a.a.showErrorModalDefault(e,"Error getting competency data.")}}))}refreshCompetency(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=this.competencies.getSource();yield p.a.ignoreErrors(t instanceof y.a?d.a.invalidateCompetencyInPlan(t.PLAN_ID,this.requireCompetencyId()):d.a.invalidateCompetencyInCourse(t.COURSE_ID,this.requireCompetencyId(),t.USER_ID)),this.fetchCompetency().finally((()=>{null==e?void 0:e.complete()}))}))}openCompetencySummary(e){m.a.navigate(`../${e}/${s.d}`,{params:{contextLevel:this.contextLevel,contextInstanceId:this.contextInstanceId}})}requireCompetencyId(){const e=this.competencies.getSelectedItem();if(!e)throw new Error("Failed to get competency id from selected item");return e.competency.id}fetchCompetencySummaryFromPlan(e){var t;return Object(c.a)(this,void 0,void 0,(function*(){const n=yield d.a.getCompetencyInPlan(e.PLAN_ID,this.requireCompetencyId());return this.planStatus=n.plan.status,n.usercompetencysummary.usercompetency&&(n.usercompetencysummary.usercompetency.statusname=o.a.getCompetencyStatusName(n.usercompetencysummary.usercompetency.status)),this.contextLevel="user",this.contextInstanceId=(null===(t=e.user)||void 0===t?void 0:t.id)||n.usercompetencysummary.user.id,this.userCompetency=n.usercompetencysummary.usercompetencyplan||n.usercompetencysummary.usercompetency,n.usercompetencysummary}))}fetchCompetencySummaryFromCourse(e){return Object(c.a)(this,void 0,void 0,(function*(){const t=yield d.a.getCompetencyInCourse(e.COURSE_ID,this.requireCompetencyId(),e.USER_ID);return this.coursemodules=t.coursemodules,this.contextLevel="course",this.contextInstanceId=e.COURSE_ID,this.userCompetency=t.usercompetencysummary.usercompetencycourse||t.usercompetencysummary.usercompetency,t.usercompetencysummary}))}performLogView(){var e;return Object(c.a)(this,void 0,void 0,(function*(){if(!this.competency)return;const t=this.competencies.getSource(),n=this.requireCompetencyId(),c=this.competency.competency.competency.shortname,o=null===(e=t.user)||void 0===e?void 0:e.id;if(t instanceof y.a){if(!this.planStatus)return;yield p.a.ignoreErrors(d.a.logCompetencyInPlanView(t.PLAN_ID,n,this.planStatus,c,o));return C.a.logEvent({type:C.b.VIEW_ITEM,ws:this.planStatus===d.b.STATUS_COMPLETE?"core_competency_user_competency_plan_viewed":"core_competency_user_competency_viewed_in_plan",name:c,data:{id:n,category:"competency",planid:t.PLAN_ID,planstatus:this.planStatus,userid:o},url:f.a.addParamsToUrl("/admin/tool/lp/user_competency_in_plan.php",{planid:t.PLAN_ID,userid:o,competencyid:n})}),void 0}yield p.a.ignoreErrors(d.a.logCompetencyInCourseView(t.COURSE_ID,n,c,t.USER_ID)),C.a.logEvent({type:C.b.VIEW_ITEM,ws:"core_competency_user_competency_viewed_in_course",name:c,data:{id:n,category:"competency",courseid:t.COURSE_ID,userid:o},url:f.a.addParamsToUrl("/admin/tool/lp/user_competency_in_course.php",{courseid:t.COURSE_ID,competencyid:n,userid:o})})}))}}return AddonCompetencyCompetencyPage.ɵfac=function AddonCompetencyCompetencyPage_Factory(e){return new(e||AddonCompetencyCompetencyPage)},AddonCompetencyCompetencyPage.ɵcmp=h.sc({type:AddonCompetencyCompetencyPage,selectors:[["page-addon-competency-competency"]],decls:15,vars:13,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width",3,"core-swipe-navigation"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[1,"ion-text-wrap"],["slot","start",3,"user"],[1,"item-heading"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap","only-links"],["core-link","",3,"href",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"text","contextLevel","contextInstanceId"],["core-link","",3,"href"],["class","as-link",3,"click",4,"ngIf"],[1,"as-link",3,"click"],["class","ion-text-wrap","core-link","","capture","true",3,"href",4,"ngFor","ngForOf"],["core-link","","capture","true",1,"ion-text-wrap",3,"href"],["slot","start",3,"modicon","showAlt",4,"ngIf"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","start",3,"modicon","showAlt"],["slot","end","color","success",4,"ngIf"],["slot","end","color","danger",4,"ngIf"],["color","dark","slot","end"],["slot","end","color","success"],["slot","end","color","danger"],[1,"ion-margin-horizontal"],["class","ion-margin-horizontal",4,"ngIf"],["class","ion-text-wrap","core-user-link","",3,"userId","courseId",4,"ngIf"],["color","dark"],["class","ion-margin-top",4,"ngIf"],["core-user-link","",1,"ion-text-wrap",3,"userId","courseId"],["slot","start",3,"user","linkProfile"],[1,"ion-margin-top"]],template:function AddonCompetencyCompetencyPage_Template(e,t){1&e&&(h.Ec(0,"ion-header"),h.Ec(1,"ion-toolbar"),h.Ec(2,"ion-buttons",0),h.zc(3,"ion-back-button",1),h.Pc(4,"translate"),h.Dc(),h.Ec(5,"ion-title"),h.nd(6,AddonCompetencyCompetencyPage_h1_6_Template,4,2,"h1",2),h.Dc(),h.Dc(),h.Dc(),h.Ec(7,"ion-content",3),h.Ec(8,"ion-refresher",4),h.Mc("ionRefresh",(function AddonCompetencyCompetencyPage_Template_ion_refresher_ionRefresh_8_listener(e){return t.refreshCompetency(e.target)})),h.zc(9,"ion-refresher-content",5),h.Pc(10,"translate"),h.Dc(),h.Ec(11,"core-loading",6),h.nd(12,AddonCompetencyCompetencyPage_ion_card_12_Template,6,2,"ion-card",2),h.nd(13,AddonCompetencyCompetencyPage_ion_card_13_Template,21,14,"ion-card",2),h.nd(14,AddonCompetencyCompetencyPage_div_14_Template,6,5,"div",2),h.Dc(),h.Dc()),2&e&&(h.lc(3),h.Vc("text",h.Qc(4,9,"core.back")),h.lc(3),h.Vc("ngIf",t.competency),h.lc(1),h.Vc("core-swipe-navigation",t.competencies),h.lc(1),h.Vc("disabled",!t.competencyLoaded),h.lc(1),h.Wc("pullingText",h.Qc(10,11,"core.pulltorefresh")),h.lc(2),h.Vc("hideUntil",t.competencyLoaded),h.lc(1),h.Vc("ngIf",t.user),h.lc(1),h.Vc("ngIf",t.competency),h.lc(1),h.Vc("ngIf",t.competency))},directives:[I.C,I.Ab,I.m,I.h,I.i,I.yb,P.t,v.a,I.v,E.a,I.bb,I.cb,A.a,I.n,I.I,b.a,I.O,P.s,D.a,S.a,T.a,I.k,w.a],pipes:[O.d,x.a],encapsulation:2}),AddonCompetencyCompetencyPage})();class AddonCompetencyCompetenciesSwipeManager extends l.a{getSelectedItemPathFromRoute(e){return e.params.competencyId}}},eoiU:function(e,t,n){"use strict";n.d(t,"a",(function(){return CoreSwipeNavigationItemsManager}));var c=n("mrSG"),o=n("pHTc"),i=n("CtbY");class CoreSwipeNavigationItemsManager extends i.a{start(){return Object(c.a)(this,void 0,void 0,(function*(){this.updateSelectedItem()}))}navigateToNextItem(){return Object(c.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(1,"forward")}))}navigateToPreviousItem(){return Object(c.a)(this,void 0,void 0,(function*(){yield this.navigateToItemBy(-1,"back")}))}hasNextItem(){return Object(c.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(1))}))}hasPreviousItem(){return Object(c.a)(this,void 0,void 0,(function*(){return!!(yield this.getItemBy(-1))}))}getCurrentPageRoute(){return o.a.getCurrentRoute()}getSelectedItemPathFromRoute(e){const t=[];for(;e&&(t.push(...e.url),e.firstChild);)e=e.firstChild;return t.map((e=>e.path)).join("/").replace(/\/+/,"/").trim()||null}navigateToItemBy(e,t){return Object(c.a)(this,void 0,void 0,(function*(){const n=yield this.getItemBy(e);n&&(yield this.navigateToItem(n,{animationDirection:t,replace:!0}))}))}getItemBy(e){var t;return Object(c.a)(this,void 0,void 0,(function*(){const n=this.getSource().getItems(),c=null!==(t=this.selectedItem&&(null==n?void 0:n.indexOf(this.selectedItem)))&&void 0!==t?t:-1;if(-1===c||null===n)return null;const o=e>0?1:-1;let i=c,a=0;for(;a!==e;){if(i+=o,i<0)return null;if(i>=n.length)break;this.skipItemInSwipe(n[i])||(a+=o)}return a===e?n[i]:this.getSource().isCompleted()?null:(yield this.getSource().load(),this.getItemBy(e))}))}skipItemInSwipe(e){return!1}}},"l4/z":function(e,t,n){"use strict";n.d(t,"a",(function(){return AddonCompetencyPlanCompetenciesSource}));var c=n("mrSG"),o=n("CvRw"),i=n("bFG1"),a=n("FBtE"),r=n("qjHM");class AddonCompetencyPlanCompetenciesSource extends o.a{constructor(e){super(),this.PLAN_ID=e}getItemPath(e){return String(e.competency.id)}load(){const e=Object.create(null,{load:{get:()=>super.load}});return Object(c.a)(this,void 0,void 0,(function*(){!this.dirty&&this.plan||(yield this.loadLearningPlan()),yield e.load.call(this)}))}invalidateCache(){return Object(c.a)(this,void 0,void 0,(function*(){yield i.a.ignoreErrors(a.a.invalidateLearningPlan(this.PLAN_ID))}))}loadPageItems(){return Object(c.a)(this,void 0,void 0,(function*(){if(!this.plan)throw new Error("Can't load competencies without plan!");return{items:this.plan.competencies}}))}loadLearningPlan(){return Object(c.a)(this,void 0,void 0,(function*(){this.plan=yield a.a.getLearningPlan(this.PLAN_ID),this.plan.plan.statusname=r.a.getPlanStatusName(this.plan.plan.status),this.user=yield r.a.getProfile(this.plan.plan.userid)}))}}},vgj2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n("mrSG"),o=n("FBtE"),i=n("pHTc"),a=n("3LXp"),r=n("bFG1"),d=n("RJwM"),m=n("8vmT"),p=n("D7J2"),s=n("fXoL"),l=n("TEn/"),_=n("ofXK"),y=n("nt/U"),u=n("PgjG"),g=n("hMzs"),C=n("sYmb");function AddonCompetencyCompetencySummaryPage_h1_6_Template(e,t){if(1&e&&(s.Ec(0,"h1"),s.pd(1),s.Ec(2,"small"),s.pd(3),s.Dc(),s.Dc()),2&e){const e=s.Oc();s.lc(1),s.rd(" ",e.competency.competency.shortname," "),s.lc(2),s.qd(e.competency.competency.idnumber)}}function AddonCompetencyCompetencySummaryPage_ion_card_12_ion_item_1_Template(e,t){if(1&e&&(s.Ec(0,"ion-item",8),s.Ec(1,"ion-label"),s.zc(2,"core-format-text",11),s.Dc(),s.Dc()),2&e){const e=s.Oc(2);s.lc(2),s.Vc("text",e.competency.competency.description)("contextLevel",e.contextLevel)("contextInstanceId",e.contextInstanceId)}}function AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template(e,t){if(1&e){const e=s.Fc();s.Cc(0),s.pd(1,"  /  "),s.Ec(2,"button",12),s.Mc("click",(function AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template_button_click_2_listener(){s.fd(e);const n=t.$implicit;return s.Oc(2).openCompetencySummary(n.id)})),s.pd(3),s.Dc(),s.Bc()}if(2&e){const e=t.$implicit;s.lc(3),s.rd(" ",e.name," ")}}function AddonCompetencyCompetencySummaryPage_ion_card_12_Template(e,t){if(1&e&&(s.Ec(0,"ion-card"),s.nd(1,AddonCompetencyCompetencySummaryPage_ion_card_12_ion_item_1_Template,3,3,"ion-item",7),s.Ec(2,"ion-item",8),s.Ec(3,"ion-label"),s.Ec(4,"p",9),s.pd(5),s.Pc(6,"translate"),s.Dc(),s.Ec(7,"p"),s.pd(8),s.nd(9,AddonCompetencyCompetencySummaryPage_ion_card_12_ng_container_9_Template,4,1,"ng-container",10),s.Dc(),s.Dc(),s.Dc(),s.Dc()),2&e){const e=s.Oc();s.lc(1),s.Vc("ngIf",e.competency.competency.description),s.lc(4),s.qd(s.Qc(6,4,"addon.competency.path")),s.lc(3),s.rd("",e.competency.comppath.framework.name," "),s.lc(1),s.Vc("ngForOf",e.competency.comppath.ancestors)}}let f=(()=>{class AddonCompetencyCompetencySummaryPage{constructor(){this.competencyLoaded=!1,this.logView=m.a.once((()=>Object(c.a)(this,void 0,void 0,(function*(){this.competency&&(yield r.a.ignoreErrors(o.a.logCompetencyView(this.competencyId,this.competency.competency.shortname)),p.a.logEvent({type:p.b.VIEW_ITEM_LIST,ws:"core_competency_competency_viewed",name:this.competency.competency.shortname,data:{competencyId:this.competencyId,category:"competency"},url:`/admin/tool/lp/user_competency.php?id=${this.competencyId}`}))}))))}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){try{this.competencyId=i.a.getRequiredRouteNumberParam("competencyId"),this.contextLevel=i.a.getRouteParam("contextLevel"),this.contextInstanceId=i.a.getRouteNumberParam("contextInstanceId")}catch(e){return a.a.showErrorModal(e),i.a.back(),void 0}try{yield this.fetchCompetency()}finally{this.competencyLoaded=!0}}))}fetchCompetency(){var e;return Object(c.a)(this,void 0,void 0,(function*(){try{const t=yield o.a.getCompetencySummary(this.competencyId);this.contextLevel&&void 0!==this.contextInstanceId||(this.contextLevel="user",this.contextInstanceId=null===(e=t.usercompetency)||void 0===e?void 0:e.userid),this.competency=t.competency,this.logView()}catch(e){a.a.showErrorModalDefault(e,"Error getting competency summary data.")}}))}refreshCompetency(e){o.a.invalidateCompetencySummary(this.competencyId).finally((()=>{this.fetchCompetency().finally((()=>{null==e?void 0:e.complete()}))}))}openCompetencySummary(e){i.a.navigate(`../../${e}/${d.d}`,{params:{contextLevel:this.contextLevel,contextInstanceId:this.contextInstanceId}})}}return AddonCompetencyCompetencySummaryPage.ɵfac=function AddonCompetencyCompetencySummaryPage_Factory(e){return new(e||AddonCompetencyCompetencySummaryPage)},AddonCompetencyCompetencySummaryPage.ɵcmp=s.sc({type:AddonCompetencyCompetencySummaryPage,selectors:[["page-addon-competency-competency-summary"]],decls:13,vars:10,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[1,"limited-width"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-wrap",4,"ngIf"],[1,"ion-text-wrap"],[1,"item-heading"],[4,"ngFor","ngForOf"],[3,"text","contextLevel","contextInstanceId"],[1,"as-link",3,"click"]],template:function AddonCompetencyCompetencySummaryPage_Template(e,t){1&e&&(s.Ec(0,"ion-header"),s.Ec(1,"ion-toolbar"),s.Ec(2,"ion-buttons",0),s.zc(3,"ion-back-button",1),s.Pc(4,"translate"),s.Dc(),s.Ec(5,"ion-title"),s.nd(6,AddonCompetencyCompetencySummaryPage_h1_6_Template,4,2,"h1",2),s.Dc(),s.Dc(),s.Dc(),s.Ec(7,"ion-content",3),s.Ec(8,"ion-refresher",4),s.Mc("ionRefresh",(function AddonCompetencyCompetencySummaryPage_Template_ion_refresher_ionRefresh_8_listener(e){return t.refreshCompetency(e.target)})),s.zc(9,"ion-refresher-content",5),s.Pc(10,"translate"),s.Dc(),s.Ec(11,"core-loading",6),s.nd(12,AddonCompetencyCompetencySummaryPage_ion_card_12_Template,10,6,"ion-card",2),s.Dc(),s.Dc()),2&e&&(s.lc(3),s.Vc("text",s.Qc(4,6,"core.back")),s.lc(3),s.Vc("ngIf",t.competency),s.lc(2),s.Vc("disabled",!t.competencyLoaded),s.lc(1),s.Wc("pullingText",s.Qc(10,8,"core.pulltorefresh")),s.lc(2),s.Vc("hideUntil",t.competencyLoaded),s.lc(1),s.Vc("ngIf",t.competency))},directives:[l.C,l.Ab,l.m,l.h,l.i,l.yb,_.t,y.a,l.v,l.bb,l.cb,u.a,l.n,l.I,l.O,_.s,g.a],pipes:[C.d],encapsulation:2}),AddonCompetencyCompetencySummaryPage})()}}]);