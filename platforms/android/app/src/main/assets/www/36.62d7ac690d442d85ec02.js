(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{cx1z:function(o,e,t){"use strict";t.r(e),t.d(e,"AddonCourseCompletionLazyModule",(function(){return y}));var c=t("L3Fv"),n=t("tyNb"),i=t("rGK3"),r=t("yQkb"),l=t("mrSG"),d=t("xd1G"),a=t("4pns"),s=t("D7J2"),p=t("pHTc"),m=t("9+EE"),u=t("3LXp"),_=t("j3ag"),C=t("8vmT"),f=t("fXoL"),g=t("TEn/"),h=t("nt/U"),E=t("PgjG"),D=t("ofXK"),P=t("FeAf"),A=t("hMzs"),b=t("ACYt"),R=t("3CSS"),I=t("sYmb"),w=t("uYHD");function AddonCourseCompletionReportPage_ion_item_14_Template(o,e){if(1&o&&(f.Ec(0,"ion-item",8),f.zc(1,"core-user-avatar",9),f.Ec(2,"ion-label"),f.Ec(3,"p",10),f.pd(4),f.Dc(),f.Dc(),f.Dc()),2&o){const o=f.Oc();f.lc(1),f.Vc("user",o.user)("courseId",o.courseId)("linkProfile",!1),f.lc(3),f.qd(o.user.fullname)}}function AddonCourseCompletionReportPage_ion_card_15_p_14_Template(o,e){1&o&&(f.Ec(0,"p"),f.pd(1),f.Pc(2,"translate"),f.Dc()),2&o&&(f.lc(1),f.qd(f.Qc(2,1,"addon.coursecompletion.criteriarequiredall")))}function AddonCourseCompletionReportPage_ion_card_15_p_15_Template(o,e){1&o&&(f.Ec(0,"p"),f.pd(1),f.Pc(2,"translate"),f.Dc()),2&o&&(f.lc(1),f.qd(f.Qc(2,1,"addon.coursecompletion.criteriarequiredany")))}function AddonCourseCompletionReportPage_ion_card_15_Template(o,e){if(1&o&&(f.Ec(0,"ion-card"),f.Ec(1,"ion-item",8),f.Ec(2,"ion-label"),f.Ec(3,"p",10),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Ec(6,"p"),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Ec(9,"ion-item",8),f.Ec(10,"ion-label"),f.Ec(11,"p",10),f.pd(12),f.Pc(13,"translate"),f.Dc(),f.nd(14,AddonCourseCompletionReportPage_ion_card_15_p_14_Template,3,3,"p",6),f.nd(15,AddonCourseCompletionReportPage_ion_card_15_p_15_Template,3,3,"p",6),f.Dc(),f.Dc(),f.Dc()),2&o){const o=f.Oc();f.lc(4),f.qd(f.Qc(5,5,"addon.coursecompletion.status")),f.lc(3),f.qd(f.Qc(8,7,o.statusText)),f.lc(5),f.qd(f.Qc(13,9,"addon.coursecompletion.required")),f.lc(2),f.Vc("ngIf",1===o.completion.aggregation),f.lc(1),f.Vc("ngIf",2===o.completion.aggregation)}}function AddonCourseCompletionReportPage_ion_card_16_ion_item_6_Template(o,e){if(1&o&&(f.Ec(0,"ion-item",14),f.Ec(1,"ion-label"),f.Ec(2,"p",10),f.zc(3,"core-format-text",15),f.Dc(),f.Ec(4,"p"),f.zc(5,"core-format-text",15),f.Dc(),f.Dc(),f.Ec(6,"strong",16),f.pd(7),f.Dc(),f.Dc()),2&o){const o=e.$implicit;f.lc(3),f.Vc("text",o.details.criteria)("filter",!1),f.lc(2),f.Vc("text",o.details.requirement)("filter",!1),f.lc(2),f.qd(o.status)}}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_11_Template(o,e){if(1&o&&(f.Ec(0,"ion-col"),f.pd(1),f.Pc(2,"coreFormatDate"),f.Dc()),2&o){const o=f.Oc().$implicit;f.lc(1),f.rd(" ",f.Rc(2,1,1e3*o.timecompleted,"strftimedatetimeshort")," ")}}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_12_Template(o,e){1&o&&f.zc(0,"ion-col")}function AddonCourseCompletionReportPage_ion_card_16_ion_row_34_Template(o,e){if(1&o&&(f.Ec(0,"ion-row"),f.Ec(1,"ion-col"),f.zc(2,"core-format-text",15),f.Dc(),f.Ec(3,"ion-col"),f.zc(4,"core-format-text",15),f.Dc(),f.Ec(5,"ion-col"),f.zc(6,"core-format-text",15),f.Dc(),f.Ec(7,"ion-col"),f.zc(8,"core-format-text",17),f.Dc(),f.Ec(9,"ion-col"),f.pd(10),f.Dc(),f.nd(11,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_11_Template,3,4,"ion-col",6),f.nd(12,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_ion_col_12_Template,1,0,"ion-col",6),f.Dc()),2&o){const o=e.$implicit;f.lc(2),f.Vc("text",o.title)("filter",!1),f.lc(2),f.Vc("text",o.details.criteria)("filter",!1),f.lc(2),f.Vc("text",o.details.requirement)("filter",!1),f.lc(2),f.Vc("text",o.details.status)("filter",!1),f.lc(2),f.qd(o.status),f.lc(1),f.Vc("ngIf",o.timecompleted),f.lc(1),f.Vc("ngIf",!o.timecompleted)}}function AddonCourseCompletionReportPage_ion_card_16_Template(o,e){if(1&o&&(f.Ec(0,"ion-card"),f.Ec(1,"ion-item-divider"),f.Ec(2,"ion-label"),f.Ec(3,"h2"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.nd(6,AddonCourseCompletionReportPage_ion_card_16_ion_item_6_Template,8,5,"ion-item",11),f.Ec(7,"ion-item",12),f.Ec(8,"ion-label"),f.Ec(9,"ion-row"),f.Ec(10,"ion-col"),f.Ec(11,"strong"),f.pd(12),f.Pc(13,"translate"),f.Dc(),f.Dc(),f.Ec(14,"ion-col"),f.Ec(15,"strong"),f.pd(16),f.Pc(17,"translate"),f.Dc(),f.Dc(),f.Ec(18,"ion-col"),f.Ec(19,"strong"),f.pd(20),f.Pc(21,"translate"),f.Dc(),f.Dc(),f.Ec(22,"ion-col"),f.Ec(23,"strong"),f.pd(24),f.Pc(25,"translate"),f.Dc(),f.Dc(),f.Ec(26,"ion-col"),f.Ec(27,"strong"),f.pd(28),f.Pc(29,"translate"),f.Dc(),f.Dc(),f.Ec(30,"ion-col"),f.Ec(31,"strong"),f.pd(32),f.Pc(33,"translate"),f.Dc(),f.Dc(),f.Dc(),f.nd(34,AddonCourseCompletionReportPage_ion_card_16_ion_row_34_Template,13,11,"ion-row",13),f.Dc(),f.Dc(),f.Dc()),2&o){const o=f.Oc();f.lc(4),f.qd(f.Qc(5,9,"addon.coursecompletion.requiredcriteria")),f.lc(2),f.Vc("ngForOf",o.completion.completions),f.lc(6),f.qd(f.Qc(13,11,"addon.coursecompletion.criteriagroup")),f.lc(4),f.qd(f.Qc(17,13,"addon.coursecompletion.criteria")),f.lc(4),f.qd(f.Qc(21,15,"addon.coursecompletion.requirement")),f.lc(4),f.qd(f.Qc(25,17,"addon.coursecompletion.status")),f.lc(4),f.qd(f.Qc(29,19,"addon.coursecompletion.complete")),f.lc(4),f.qd(f.Qc(33,21,"addon.coursecompletion.completiondate")),f.lc(2),f.Vc("ngForOf",o.completion.completions)}}function AddonCourseCompletionReportPage_ion_card_17_Template(o,e){if(1&o){const o=f.Fc();f.Ec(0,"ion-card"),f.Ec(1,"ion-item-divider"),f.Ec(2,"ion-label"),f.Ec(3,"h2"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Ec(6,"ion-item"),f.Ec(7,"ion-label"),f.Ec(8,"ion-button",18),f.Mc("click",(function AddonCourseCompletionReportPage_ion_card_17_Template_ion_button_click_8_listener(){f.fd(o);return f.Oc().completeCourse()})),f.pd(9),f.Pc(10,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Dc()}2&o&&(f.lc(4),f.qd(f.Qc(5,2,"addon.coursecompletion.manualselfcompletion")),f.lc(5),f.rd(" ",f.Qc(10,4,"addon.coursecompletion.completecourse")," "))}function AddonCourseCompletionReportPage_ion_card_18_Template(o,e){1&o&&(f.Ec(0,"ion-card",19),f.Ec(1,"ion-item"),f.zc(2,"ion-icon",20),f.Ec(3,"ion-label"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc()),2&o&&(f.lc(4),f.qd(f.Qc(5,1,"addon.coursecompletion.nottracked")))}let T=(()=>{class AddonCourseCompletionReportPage{constructor(){this.completionLoaded=!1,this.showSelfComplete=!1,this.tracked=!0,this.logView=C.a.once((()=>{s.a.logEvent({type:s.b.VIEW_ITEM,ws:"core_completion_get_course_completion_status",name:_.I.instant("addon.coursecompletion.coursecompletion"),data:{course:this.courseId,user:this.userId},url:`/blocks/completionstatus/details.php?course=${this.courseId}&user=${this.userId}`})}))}ngOnInit(){try{this.courseId=p.a.getRequiredRouteNumberParam("courseId"),this.userId=p.a.getRouteNumberParam("userId")||m.b.getCurrentSiteUserId()}catch(o){return u.a.showErrorModal(o),p.a.back(),void 0}this.fetchCompletion().finally((()=>{this.completionLoaded=!0}))}fetchCompletion(){return Object(l.a)(this,void 0,void 0,(function*(){try{this.user=yield a.a.getProfile(this.userId,this.courseId,!0),this.completion=yield d.a.getCompletion(this.courseId,this.userId),this.statusText=d.a.getCompletedStatusText(this.completion),this.showSelfComplete=d.a.canMarkSelfCompleted(this.userId,this.completion),this.tracked=!0,this.logView()}catch(o){o&&"notenroled"==o.errorcode?this.tracked=!1:u.a.showErrorModalDefault(o,"addon.coursecompletion.couldnotloadreport",!0)}}))}refreshCompletion(o){return Object(l.a)(this,void 0,void 0,(function*(){yield d.a.invalidateCourseCompletion(this.courseId,this.userId).finally((()=>{this.fetchCompletion().finally((()=>{null==o?void 0:o.complete()}))}))}))}completeCourse(){return Object(l.a)(this,void 0,void 0,(function*(){const o=yield u.a.showModalLoading("core.sending",!0);try{yield d.a.markCourseAsSelfCompleted(this.courseId),yield this.refreshCompletion()}catch(o){u.a.showErrorModal(o)}finally{o.dismiss()}}))}}return AddonCourseCompletionReportPage.ɵfac=function AddonCourseCompletionReportPage_Factory(o){return new(o||AddonCourseCompletionReportPage)},AddonCourseCompletionReportPage.ɵcmp=f.sc({type:AddonCourseCompletionReportPage,selectors:[["page-addon-course-completion-report"]],decls:19,vars:16,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-wrap",4,"ngIf"],[4,"ngIf"],["class","core-warning-card",4,"ngIf"],[1,"ion-text-wrap"],["slot","start",3,"user","courseId","linkProfile"],[1,"item-heading"],["class","ion-hide-md-up ion-text-wrap",4,"ngFor","ngForOf"],[1,"ion-hide-md-down","ion-text-wrap"],[4,"ngFor","ngForOf"],[1,"ion-hide-md-up","ion-text-wrap"],["clean","true",3,"text","filter"],["slot","end"],[3,"text","filter"],["expand","block",3,"click"],[1,"core-warning-card"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"]],template:function AddonCourseCompletionReportPage_Template(o,e){1&o&&(f.Ec(0,"ion-header"),f.Ec(1,"ion-toolbar"),f.Ec(2,"ion-buttons",0),f.zc(3,"ion-back-button",1),f.Pc(4,"translate"),f.Dc(),f.Ec(5,"ion-title"),f.Ec(6,"h1"),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Dc(),f.Ec(9,"ion-content"),f.Ec(10,"ion-refresher",2),f.Mc("ionRefresh",(function AddonCourseCompletionReportPage_Template_ion_refresher_ionRefresh_10_listener(o){return e.refreshCompletion(o.target)})),f.zc(11,"ion-refresher-content",3),f.Pc(12,"translate"),f.Dc(),f.Ec(13,"core-loading",4),f.nd(14,AddonCourseCompletionReportPage_ion_item_14_Template,5,4,"ion-item",5),f.nd(15,AddonCourseCompletionReportPage_ion_card_15_Template,16,11,"ion-card",6),f.nd(16,AddonCourseCompletionReportPage_ion_card_16_Template,35,23,"ion-card",6),f.nd(17,AddonCourseCompletionReportPage_ion_card_17_Template,11,6,"ion-card",6),f.nd(18,AddonCourseCompletionReportPage_ion_card_18_Template,6,3,"ion-card",7),f.Dc(),f.Dc()),2&o&&(f.lc(3),f.Vc("text",f.Qc(4,10,"core.back")),f.lc(4),f.qd(f.Qc(8,12,"addon.coursecompletion.coursecompletion")),f.lc(3),f.Vc("disabled",!e.completionLoaded),f.lc(1),f.Wc("pullingText",f.Qc(12,14,"core.pulltorefresh")),f.lc(2),f.Vc("hideUntil",e.completionLoaded),f.lc(1),f.Vc("ngIf",e.user),f.lc(1),f.Vc("ngIf",e.completion&&e.tracked),f.lc(1),f.Vc("ngIf",e.completion&&e.tracked),f.lc(1),f.Vc("ngIf",e.showSelfComplete&&e.tracked),f.lc(1),f.Vc("ngIf",!e.tracked))},directives:[g.C,g.Ab,g.m,g.h,g.i,g.yb,h.a,g.v,g.bb,g.cb,E.a,D.t,g.I,P.a,g.O,g.n,g.J,D.s,g.hb,g.u,A.a,b.a,g.l,g.D,R.a],pipes:[I.d,w.a],encapsulation:2}),AddonCourseCompletionReportPage})();const x=[{path:"",component:T}];let y=(()=>{class AddonCourseCompletionLazyModule{}return AddonCourseCompletionLazyModule.ɵmod=f.wc({type:AddonCourseCompletionLazyModule}),AddonCourseCompletionLazyModule.ɵinj=f.vc({factory:function AddonCourseCompletionLazyModule_Factory(o){return new(o||AddonCourseCompletionLazyModule)},imports:[[n.m.forChild(x),c.a,i.a,r.a],n.m]}),AddonCourseCompletionLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&f.kd(y,{declarations:[T],imports:[n.m,c.a,i.a,r.a],exports:[n.m]}))}}]);