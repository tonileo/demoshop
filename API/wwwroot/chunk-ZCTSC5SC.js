import{b as c,n as $}from"./chunk-7XK2MI2N.js";import{ea as d,ka as f,ra as a}from"./chunk-KSTUA5KL.js";var y=class e{baseUrl=$.apiUrl;http=f(c);orderComplete=!1;createOrder(r){return this.http.post(this.baseUrl+"orders",r)}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(r){return this.http.get(this.baseUrl+"orders/"+r)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"})};var l=class e{transform(r,...n){if(r&&"address"in r&&r.name){let{line1:o,line2:t,city:i,state:s,country:p,postal_code:m}=r?.address;return`${r.name}, ${o}${t?", "+t:""}, ${i}, ${s}, ${m}, ${p}`}else if(r&&"line1"in r){let{line1:o,line2:t,city:i,state:s,country:p,postalCode:m}=r;return`${r.name}, ${o}${t?", "+t:""}, ${i}, ${s}, ${m}, ${p}`}else return"Unknown address"}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=a({name:"address",type:e,pure:!0,standalone:!0})};var u=class e{transform(r,...n){if(r&&"card"in r){let{brand:o,last4:t,exp_month:i,exp_year:s}=r.card;return`${o.toUpperCase()} **** **** **** ${t}, Exp: ${i}/${s}`}else if(r&&"last4"in r){let{brand:o,last4:t,expMonth:i,expYear:s}=r;return`${o.toUpperCase()} **** **** **** ${t}, Exp: ${i}/${s}`}else return"Unknown card"}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=a({name:"payment",type:e,pure:!0,standalone:!0})};export{y as a,l as b,u as c};
