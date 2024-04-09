import{o as a,c as u,C as s,ad as x,z as A,aa as S,u as w,aB as L,ab as B,_ as t,B as h,a as g,x as _,G as l,D as c,v as W,f as k,J as P,I as E,r as m}from"./index.MAPGMl_Z.js";import{u as z,p as T}from"./LicenseUpgrade.B79nrkvy.js";import{u as N}from"./SetupWizard.BRj8cUen.js";import{C as M,D as y}from"./datetime.lrMItkpN.js";import{B as U}from"./Button.CyqkHmlf.js";import{_ as v}from"./dynamic-import-helper._aqDH9xp.js";const O={},D={viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-circle-check-solid"},K=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.75 10.5C1.75 5.67 5.67 1.75 10.5 1.75C15.33 1.75 19.25 5.67 19.25 10.5C19.25 15.33 15.33 19.25 10.5 19.25C5.67 19.25 1.75 15.33 1.75 10.5ZM8.75 12.3988L14.5163 6.63251L15.75 7.87501L8.75 14.875L5.25 11.375L6.48375 10.1413L8.75 12.3988Z",fill:"currentColor"},null,-1),q=[K];function H(e,o){return a(),u("svg",D,q)}const I=v(O,[["render",H]]),n="aioseo-broken-link-checker",V={setup(){return{licenseStore:x(),licenseUpgradeComposable:z(),links:A,optionsStore:S(),rootStore:w(),setupWizardComposable:N(),setupWizardStore:L()}},components:{BaseButton:U,CoreAlert:M,SvgCircleCheckSolid:I},props:{isSetupWizard:Boolean},data(){return{DateTime:y,licenseKey:"",error:null,creatingNewAccount:!1,connectingWithExistingAccount:!1,activating:!1,deactivating:!1,strings:B({createAccount:t("Create a Free Account",n),connectExistingAccount:t("Connect to an Existing Account",n),or:t("OR",n),boldText:h("<strong>%1$s %2$s</strong>","Broken Link Checker","Free"),disconnect:t("Disconnect",n),connected:t("Your account is connected!",n)},this.licenseUpgradeComposable.strings,this.setupWizardComposable.strings)}},methods:{createNewAccountPopup(){this.creatingNewAccount=!0;const e=this.rootStore.aioseoBrokenLinkChecker.urls.marketingSite+"blc-trial-checkout?url="+btoa(this.rootStore.aioseoBrokenLinkChecker.urls.connect);this.openPopup(e)},connectWithExistingAccountPopup(){this.connectingWithExistingAccount=!0;const e=this.rootStore.aioseoBrokenLinkChecker.urls.marketingSite+"account/?blc-connect=1&url="+btoa(this.rootStore.aioseoBrokenLinkChecker.urls.connect);this.openPopup(e)},openPopup(e){T(e,t("Connect Your Site with Broken Link Checker",n),650,800,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){if(!e.token){this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1,this.error=t("Could not connect site to Broken Link Checker. Please try again later.",n);return}return this.licenseKey=e.token,this.activate(),Promise.resolve()},closedCallback(){this.activating||(this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1)},activate(){return this.error=null,this.activating=!0,this.licenseStore.activate(this.licenseKey).then(()=>{this.isSetupWizard&&this.$router.push(this.setupWizardStore.getNextLink)}).catch(e=>{var d,r;if(this.licenseKey="",!((r=(d=e==null?void 0:e.response)==null?void 0:d.body)!=null&&r.error)||!e.response.body.licenseData){this.error=t("An unknown error occurred, please try again later.",n);return}const o=e.response.body.licenseData;o.invalid?this.error=t("The license key provided is invalid. Please use a different key.",n):o.disabled?this.error=t("The license key provided is disabled. Please use a different key.",n):o.expired?this.error=t("The license key provided is expired. Please renew your license or use a different key.",n):o.activationsError?this.error=t("This license has reached the maximum number of activations. Please deactivate it from another site or purchase a new license.",n):(o.connectionError||o.requestError)&&(this.error=t("There was an error connecting to the licensing API. Please try again later.",n)),this.error=t("An unknown error occurred, please try again later.",n)}).finally(()=>{this.activating=!1,this.creatingNewAccount=!1,this.connectingWithExistingAccount=!1})},disconnect(){this.deactivating=!0,this.licenseStore.deactivate().catch(()=>{this.error=t("An unknown error occurred, please try again later.",n)}).finally(()=>{this.deactivating=!1})}},computed:{link(){return h('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return h(t("To unlock a higher quota, consider %1$s.",n),this.link)},licenseInfo(){const e=y.fromMillis(this.optionsStore.internalOptions.internal.license.expires*1e3).toFormat("MM/dd/yyyy");return h(t("You have a total quota of %1$s links, which renews on %2$s.",n),`<strong>${this.optionsStore.internalOptions.internal.license.quota.toLocaleString()}</strong>`,`<strong>${e}</strong>`)}}},F={key:0,class:"connect-buttons"},R={class:"button-divider description"},Y={key:1},Z={class:"license"},G={class:"license-buttons"},J={class:"account-connected"},j={class:"license-info"},Q=["innerHTML"],X={key:0};function $(e,o,d,r,i,p){const f=m("base-button"),C=m("core-alert"),b=m("svg-circle-check-solid");return a(),u("div",{class:E(["license-container",[{"setup-wizard":d.isSetupWizard}]])},[r.optionsStore.internalOptions.internal.license.licenseKey?k("",!0):(a(),u("div",F,[g(f,{type:"green",size:"medium",inline:"",tag:"button",loading:i.creatingNewAccount,disabled:i.connectingWithExistingAccount,onClick:p.createNewAccountPopup},{default:_(()=>[l(c(i.strings.createAccount),1)]),_:1},8,["loading","disabled","onClick"]),s("div",R,c(i.strings.or),1),g(f,{type:"gray",size:"medium",inline:"",tag:"button",loading:i.connectingWithExistingAccount,disabled:i.creatingNewAccount,onClick:p.connectWithExistingAccountPopup},{default:_(()=>[l(c(i.strings.connectExistingAccount),1)]),_:1},8,["loading","disabled","onClick"]),i.error?(a(),W(C,{key:0,class:"license-key-error",type:"red",innerHTML:i.error},null,8,["innerHTML"])):k("",!0)])),r.optionsStore.internalOptions.internal.license.licenseKey?(a(),u("div",Y,[s("div",Z,[s("div",G,[s("div",J,[g(b),l(" "+c(i.strings.connected),1)]),g(f,{type:"gray",size:"medium",inline:"",tag:"button",loading:i.deactivating,onClick:p.disconnect},{default:_(()=>[l(c(i.strings.disconnect),1)]),_:1},8,["loading","onClick"])]),s("div",j,[s("p",{innerHTML:p.licenseInfo},null,8,Q),r.optionsStore.internalOptions.internal.license.level&&r.optionsStore.internalOptions.internal.license.level.toLowerCase()!=="elite"?(a(),u("p",X,[s("span",null,c(i.strings.toUnlock)+" ",1),s("strong",null,[s("a",{href:"#",onClick:o[0]||(o[0]=P(ee=>r.licenseUpgradeComposable.openLicenseUpgradePopup("settings","license-key"),["prevent","stop"]))},c(r.licenseUpgradeComposable.upgradeAnchor.value),1)]),l(". ")])):k("",!0)])])])):k("",!0)],2)}const ce=v(V,[["render",$]]);export{ce as C};