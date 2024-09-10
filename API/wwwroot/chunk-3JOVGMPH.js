import{C as Re,D as Te,G as Be,L as De,U as je,V as Fe,m as $,n as Ae,o as Ie,q as K,s as Ce,v as Se}from"./chunk-HISGLHQX.js";import{D as U,G as be,H as ye,R as ke,Y as xe,Z as Ee,ja as we,o as v,p as Z,q as ge,y as T}from"./chunk-7XK2MI2N.js";import{c as Me,d as Q,g as B,h as X,i as Y}from"./chunk-JGYM447R.js";import{$ as ie,$b as V,Ab as ce,Ac as _e,Da as k,Db as le,Ga as _,Ib as R,Jb as w,Ka as x,Kb as de,Nc as ve,Ob as he,Pb as me,Qb as ue,Rb as A,Sb as fe,Tb as P,Zb as H,_b as N,a as f,db as E,dc as z,ea as p,eb as c,fc as q,gb as re,ha as y,ja as h,ka as S,kc as pe,l as d,lc as W,oa as L,p as te,qa as u,sb as oe,wa as ne,wb as O,xa as se,xb as M,ya as ae}from"./chunk-KSTUA5KL.js";var Le=ge({passive:!0}),Ne=(()=>{let n=class n{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return te;let t=U(e),i=this._monitoredElements.get(t);if(i)return i.subject;let s=new d,r="cdk-text-field-autofilled",o=l=>{l.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>s.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>s.next({target:l.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",o,Le),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:s,unlisten:()=>{t.removeEventListener("animationstart",o,Le)}}),s}stopMonitoring(e){let t=U(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}};n.\u0275fac=function(t){return new(t||n)(h(v),h(_))},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();var Ze=new y("MAT_INPUT_VALUE_ACCESSOR"),Ue=["button","checkbox","file","hidden","image","radio","range","reset","submit"],$e=0,Rt=(()=>{let n=class n{get disabled(){return this._disabled}set disabled(e){this._disabled=T(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(Re.required)??!1}set required(e){this._required=T(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Z().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._ensureWheelDefaultBehavior()}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=T(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,s,r,o,l,D,C,J){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=D,this._ngZone=C,this._formField=J,this._uid=`mat-input-${$e++}`,this._webkitBlinkWheelListenerAttached=!1,this.focused=!1,this.stateChanges=new d,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(F=>Z().has(F)),this._iOSKeyupListener=F=>{let b=F.target;!b.value&&b.selectionStart===0&&b.selectionEnd===0&&(b.setSelectionRange(1,1),b.setSelectionRange(0,0))},this._webkitBlinkWheelListener=()=>{};let j=this._elementRef.nativeElement,ee=j.nodeName.toLowerCase();this._inputValueAccessor=l||j,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&C.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new xe(o,i,r,s,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=ee==="select",this._isTextarea=ee==="textarea",this._isInFormField=!!J,this._isNativeSelect&&(this.controlType=j.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener),this._webkitBlinkWheelListenerAttached&&this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ue.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_ensureWheelDefaultBehavior(){!this._webkitBlinkWheelListenerAttached&&this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("wheel",this._webkitBlinkWheelListener)}),this._webkitBlinkWheelListenerAttached=!0),this._webkitBlinkWheelListenerAttached&&this._type!=="number"&&(this._elementRef.nativeElement.removeEventListener("wheel",this._webkitBlinkWheelListener),this._webkitBlinkWheelListenerAttached=!0)}};n.\u0275fac=function(t){return new(t||n)(c(x),c(v),c(Te,10),c(Be,8),c(De,8),c(Ee),c(Ze,10),c(Ne),c(_),c(Fe,8))},n.\u0275dir=u({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&A("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(me("id",i.id)("disabled",i.disabled)("required",i.required),M("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),ce("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[pe([{provide:je,useExisting:n}]),ne]});let a=n;return a})();function Ke(a,n){if(a&1){let m=he();R(0,"div",1)(1,"button",2),A("click",function(){se(m);let t=P();return ae(t.action())}),z(2),w()()}if(a&2){let m=P();E(2),q(" ",m.data.action," ")}}var Qe=["label"];function Xe(a,n){}var Ye=Math.pow(2,31)-1,I=class{constructor(n,m){this._overlayRef=m,this._afterDismissed=new d,this._afterOpened=new d,this._onAction=new d,this._dismissedByAction=!1,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,Ye))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},Ve=new y("MatSnackBarData"),g=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},Ge=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=u({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0});let a=n;return a})(),Je=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=u({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0});let a=n;return a})(),et=(()=>{let n=class n{};n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=u({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0});let a=n;return a})(),tt=(()=>{let n=class n{constructor(e,t){this.snackBarRef=e,this.data=t}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}};n.\u0275fac=function(t){return new(t||n)(c(I),c(Ve))},n.\u0275cmp=L({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[W],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(t,i){t&1&&(R(0,"div",0),z(1),w(),O(2,Ke,3,1,"div",1)),t&2&&(E(),q(" ",i.data.message,`
`),E(),le(i.hasAction?2:-1))},dependencies:[we,Ge,Je,et],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0});let a=n;return a})(),it={snackBarState:Me("state",[X("void, hidden",B({transform:"scale(0.8)",opacity:0})),X("visible",B({transform:"scale(1)",opacity:1})),Y("* => visible",Q("150ms cubic-bezier(0, 0, 0.2, 1)")),Y("* => void, * => hidden",Q("75ms cubic-bezier(0.4, 0.0, 1, 1)",B({opacity:0})))])},nt=0,st=(()=>{let n=class n extends Ie{constructor(e,t,i,s,r){super(),this._ngZone=e,this._elementRef=t,this._changeDetectorRef=i,this._platform=s,this.snackBarConfig=r,this._document=S(ve),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new d,this._onExit=new d,this._onEnter=new d,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${nt++}`,this.attachDomPortal=o=>{this._assertNotAttached();let l=this._portalOutlet.attachDomPortal(o);return this._afterPortalAttached(),l},r.politeness==="assertive"&&!r.announcementMessage?this._live="assertive":r.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}onAnimationEnd(e){let{fromState:t,toState:i}=e;if((i==="void"&&t!=="void"||i==="hidden")&&this._completeExit(),i==="visible"){let s=this._onEnter;this._ngZone.run(()=>{s.next(),s.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,s="mdc-snackbar__label";i.classList.toggle(s,!i.querySelector(`.${s}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<t.length;i++){let s=t[i],r=s.getAttribute("aria-owns");this._trackedModals.add(s),r?r.indexOf(e)===-1&&s.setAttribute("aria-owns",r+" "+e):s.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute("aria-owns");if(t){let i=t.replace(this._liveElementId,"").trim();i.length>0?e.setAttribute("aria-owns",i):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let e=this._elementRef.nativeElement.querySelector("[aria-hidden]"),t=this._elementRef.nativeElement.querySelector("[aria-live]");if(e&&t){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&e.contains(document.activeElement)&&(i=document.activeElement),e.removeAttribute("aria-hidden"),t.appendChild(e),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}};n.\u0275fac=function(t){return new(t||n)(c(_),c(x),c(_e),c(v),c(g))},n.\u0275cmp=L({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,i){if(t&1&&(H(K,7),H(Qe,7)),t&2){let s;N(s=V())&&(i._portalOutlet=s.first),N(s=V())&&(i._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(t,i){t&1&&fe("@state.done",function(r){return i.onAnimationEnd(r)}),t&2&&ue("@state",i._animationState)},standalone:!0,features:[oe,W],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(R(0,"div",1)(1,"div",2,0)(3,"div",3),O(4,Xe,0,0,"ng-template",4),w(),de(5,"div"),w()()),t&2&&(E(5),M("aria-live",i._live)("role",i._role)("id",i._liveElementId))},dependencies:[K],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-app-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-app-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-app-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-app-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color, var(--mat-app-inverse-primary));--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[it.snackBarState]}});let a=n;return a})();function at(){return new g}var rt=new y("mat-snack-bar-default-options",{providedIn:"root",factory:at}),ze=(()=>{let n=class n{get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(e,t,i,s,r,o){this._overlay=e,this._live=t,this._injector=i,this._breakpointObserver=s,this._parentSnackBar=r,this._defaultConfig=o,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=tt,this.snackBarContainerComponent=st,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t="",i){let s=f(f({},this._defaultConfig),i);return s.data={message:e,action:t},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,s=k.create({parent:i||this._injector,providers:[{provide:g,useValue:t}]}),r=new $(this.snackBarContainerComponent,t.viewContainerRef,s),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let i=f(f(f({},new g),this._defaultConfig),t),s=this._createOverlay(i),r=this._attachSnackBarContainer(s,i),o=new I(r,s);if(e instanceof re){let l=new Ae(e,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(l)}else{let l=this._createInjector(i,o),D=new $(e,void 0,l),C=r.attachComponentPortal(D);o.instance=C.instance}return this._breakpointObserver.observe(ye.HandsetPortrait).pipe(ie(s.detachments())).subscribe(l=>{s.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter(),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration))}_createOverlay(e){let t=new Ce;t.direction=e.direction;let i=this._overlay.position().global(),s=e.direction==="rtl",r=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!s||e.horizontalPosition==="end"&&s,o=!r&&e.horizontalPosition!=="center";return r?i.left("0"):o?i.right("0"):i.centerHorizontally(),e.verticalPosition==="top"?i.top("0"):i.bottom("0"),t.positionStrategy=i,this._overlay.create(t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return k.create({parent:i||this._injector,providers:[{provide:I,useValue:t},{provide:Ve,useValue:e.data}]})}};n.\u0275fac=function(t){return new(t||n)(h(Se),h(ke),h(k),h(be),h(n,12),h(rt))},n.\u0275prov=p({token:n,factory:n.\u0275fac,providedIn:"root"});let a=n;return a})();var qe=class a{snackbar=S(ze);error(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-error"]})}success(n){this.snackbar.open(n,"Close",{duration:5e3,panelClass:["snack-success"]})}static \u0275fac=function(m){return new(m||a)};static \u0275prov=p({token:a,factory:a.\u0275fac,providedIn:"root"})};export{Rt as a,qe as b};