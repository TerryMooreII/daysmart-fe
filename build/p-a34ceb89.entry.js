import{r as t,h as e}from"./p-036a7ec8.js";import{s as r,g as o,a as i,t as a}from"./p-16daaeba.js";const n=["Sun","Mon","Tues","Wed","Thu","Fri","Sat","Sun"],s=t=>{if(!t)return"";const e=new Date(t);return n[e.getDay()]},l=t=>{if(!t)return"";const e=new Date(t);return`${e.getMonth()+1}/${e.getDate()}`},c=t=>{if(!t)return"";let[e,r]=t.split(":");return+e>12&&(e=+e-12),`${e}:${r}`};let d=class{constructor(e){t(this,e),this.events=[],this.beerList=null}async componentWillLoad(){if(r.schedule)return void(this.events=r.schedule);const t=await o();this.events=await this.getData(t),this.beerList=await i(),r.schedule=this.events}async getData(t){const e=t.included.filter((t=>"resource"===t.type)).reduce(((t,e)=>(t[e.id]=e.attributes.name,t)),{}),r=t.included.filter((t=>"team"===t.type)).reduce(((t,e)=>(t[e.id]=e.attributes.name,t)),{[t.data.id]:t.data.attributes.name});return t.included.filter((t=>"event"===t.type&&"L"!==t.attributes.event_type)).map((t=>{var o,i,a,n;const d=t.attributes;return{location:e[d.resource_id],hscore:null!==(o=d.hscore)&&void 0!==o?o:0,vscore:null!==(i=d.vscore)&&void 0!==i?i:0,sub_type:d.sub_type,hteam_id:d.hteam_id,vteam_id:d.vteam_id,hteam:null!==(a=r[d.hteam_id])&&void 0!==a?a:"Home Team",vteam:null!==(n=r[d.vteam_id])&&void 0!==n?n:"Away Team",desc:d.desc,start_date:d.start_date,start_time:d.event_start_time,date_formatted:l(d.start_date),time_fomatted:c(d.event_start_time),day_of_week:s(d.start_date)}})).sort(((t,e)=>t.start_date>e.start_date?1:t.start_date<e.start_date?-1:0))}getNextEvent(t){const e=Date.now();let r=0,o=null;return t.forEach((t=>{if(![t.vteam_id,t.hteam_id].includes(+a))return;const i=[t.start_date.split("T")[0],t.start_time].join("T"),n=new Date(i).getTime();if(n>e){const i=n-e;(0===r||i<r)&&(r=i,o=t)}})),o}makeEventDom(t,r){return e("div",{class:"flex-column border-b border-gray-400 lg:w-1/2 w-full",key:r},e("div",{class:"flex w-full py-5"},e("div",{class:"event flex flex-col w-full p-4"},e("div",{class:"away flex items-center justify-between "+(t.vscore>t.hscore?"font-bold":"")},e("div",{class:"team text-lg"},t.vteam),e("div",{class:"score text-lg"},t.vscore)),e("div",{class:"home flex items-center justify-between "+(t.hscore>t.vscore?"font-bold":"")},e("div",{class:"team text-lg"},t.hteam),e("div",{class:"score text-lg"},t.hscore)),e("div",{class:"meta flex items-center justify-between mt-2 text-md text-zinc-800 font-light"},e("div",{class:"location"},t.location),e("div",{class:"timedate"},t.day_of_week," ",t.date_formatted," ",t.time_fomatted)),this.beerList&&this.beerList[t.date_formatted]&&e("div",{class:"meta flex items-center justify-start mt-2 text-md text-zinc-900 font-light"},e("span",{class:"text-2xl"},"🍻"),"   ",` provided by ${this.beerList[t.date_formatted]}`))))}getNextEventDom(t){const r=this.getNextEvent(t);return r?this.makeEventDom(r,0):e("div",{class:"text-center"},"n/a")}getScheduleDom(t){return t.map(((t,e)=>this.makeEventDom(t,e)))}render(){return r.loading?e("div",{class:"text-center"},"Loading...."):e("div",{class:"flex-col w-full flex items-center justify-center"},e("h4",{class:"text-2xl text-center w-full"}," Next Game "),this.getNextEventDom(this.events)||"n/a",e("h4",{class:"text-2xl text-center w-full my-3 mt-8"}," Schedule "),this.getScheduleDom(this.events))}};d.style='/*! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.my-3{margin-bottom:.75rem;margin-top:.75rem}.mt-2{margin-top:.5rem}.mt-8{margin-top:2rem}.flex{display:flex}.table{display:table}.hidden{display:none}.w-1{width:.25rem}.w-full{width:100%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.border-b{border-bottom-width:1px}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.p-4{padding:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-light{font-weight:300}.text-zinc-800{color:rgb(39 39 42/var(--tw-text-opacity))}.text-zinc-800,.text-zinc-900{--tw-text-opacity:1}.text-zinc-900{color:rgb(24 24 27/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)} /*! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:""}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}@media (min-width:1024px){.lg\\:w-1\\/2{width:50%}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}';export{d as app_schedule}