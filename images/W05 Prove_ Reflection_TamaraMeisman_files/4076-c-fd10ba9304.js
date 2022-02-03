(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4076],{"3jyj":function(e,t,a){"use strict"
var i=a("QYKH")
a("mX+G")
var n=a("Y/W1")
var o=a.n(n)
var d={}
var r=function(e){var t=o.a.uniqueId()
var a=o.a.extend((function(a,i){var n=function(){return new e(a,i)}
var o=a&&a[e.prototype.idAttribute]
if(o){var r=t+":"+o
if(d[r]){var s=d[r]
i&&i.parse&&(a=s.parse(a))
s.set(a)}else d[r]=n()
return d[r]}var _=n()
_.on("change:"+e.prototype.idAttribute,(function(e,a){d[t+":"+a]=_
_.off(null,null,this)}),this)
return _}),e)
a.prototype=e.prototype
return a}
r.resetCache=function(){d={}}
var s=r
var _=a("TnsN")
var c=a("VXGR")
var l=a("plYi")
var f={encodeSpecialChars:e=>e.replace(/%/g,"&#37;"),decodeSpecialChars:e=>e.split("/").map(e=>encodeURIComponent(decodeURIComponent(e).replace(/&#37;/,"%"))).join("/")}
const u=/^[^\/]+\/?/
let p=null
function h(e,t){return"name"!==t||e instanceof g?"user"===t?m(e.get("user"),e=>e.display_name)||"":"usage_rights"===t?m(e.get("usage_rights"),e=>e.license_name)||"":e.get(t):e.get("display_name")}class b extends i["a"]{initialize(e){this.contentTypes||(this.contentTypes=null!=e?e.contentTypes:void 0)
this.useVerifiers||(this.useVerifiers=null!=e?e.useVerifiers:void 0)
this.setUpFilesAndFoldersIfNeeded()
this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}url(){return this.isNew()?super.url(...arguments):"/api/v1/folders/"+this.id}parse(e){const t=super.parse(...arguments)
this.contentTypes||(this.contentTypes=e.contentTypes)
this.useVerifiers||(this.useVerifiers=e.useVerifiers)
this.setUpFilesAndFoldersIfNeeded()
this.folders.url=e.folders_url
this.files.url=e.files_url
return t}setUpFilesAndFoldersIfNeeded(){this.folders||(this.folders=new v([],{parentFolder:this}))
if(!this.files)return this.files=new c["a"]([],{parentFolder:this})}getSubtrees(){return this.folders}getItems(){return this.files}expand(e=false,t={}){let a
this.isExpanded=true
this.trigger("expanded")
if(this.expandDfd||e)return $.when()
this.isExpanding=true
this.trigger("beginexpanding")
this.expandDfd=$.Deferred().done(()=>{this.isExpanding=false
return this.trigger("endexpanding")})
const i=this.folders.url===this.folders.constructor.prototype.url||this.files.url===this.files.constructor.prototype.url;(i||e)&&(a=this.fetch())
return $.when(a).done(()=>{let e,a
0!==this.get("folders_count")&&(a=this.folders.fetch())
0===this.get("files_count")||t.onlyShowSubtrees||(e=this.files.fetch())
return $.when(a,e).done(this.expandDfd.resolve)})}collapse(){this.isExpanded=false
return this.trigger("collapsed")}toggle(e){return this.isExpanded?this.collapse():this.expand(false,e)}previewUrl(){let e
if(e=this.get("context_type"),["Course","Group"].includes(e))return`/${this.get("context_type").toLowerCase()+"s"}/${this.get("context_id")}/files/{{id}}/preview`}isEmpty(){return!!(this.files.loadedAll&&0===this.files.length)&&this.folders.loadedAll&&0===this.folders.length}urlPath(){let e=(this.get("full_name")||"").replace(u,"")
e=f.encodeSpecialChars(e)
e=e.split("/").map(e=>encodeURIComponent(e)).join("/")
p||(p=a("m452").default)
if(p.showingAllContexts){const t=`${m(this.get("context_type"),e=>e.toLowerCase())}s_${this.get("context_id")}`
e=`${t}/${e}`}return e}childrenSorter(e="name",t="asc",a,i){let n
const o=["name","user","usage_rights"].includes(e)
a=h(a,e)
i=h(i,e)
n=o?l["a"].strings(a,i):(()=>{if(a===i)return 0
if(a>i||void 0===a)return 1
if(a<i||void 0===i)return-1
throw new Error("wat? error sorting")})()
"desc"===t&&(n=0-n)
return n}children({sort:e,order:t}){return this.folders.toArray().concat(this.files.toArray()).sort(this.childrenSorter.bind(null,e,t))}}b.resolvePath=function(e,t,a){a=f.decodeSpecialChars(a)
const i=`/api/v1/${e}/${t}/folders/by_path${a}`
return $.getJSON(i).pipe(e=>e.map(e=>new g(e,{parse:true})))}
b.prototype.defaults={name:""}
const g=s(b)
t["a"]=g
class v extends _["a"]{static initClass(){this.optionProperty("parentFolder")
this.prototype.model=g}parse(e){e&&e.forEach(e=>{e.contentTypes=this.parentFolder.contentTypes
return e.useVerifiers=this.parentFolder.useVerifiers})
return super.parse(...arguments)}}v.initClass()
g.FoldersCollection=v
function m(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},Lg2F:function(e,t,a){"use strict"
var i=a("17x9")
var n=a.n(i)
var o=a("3jyj")
var d=a("QYKH")
t["a"]={contextType:n.a.oneOf(["users","groups","accounts","courses"]),contextId:n.a.oneOfType([n.a.string,n.a.number]),folder:n.a.instanceOf(o["a"]),filesystemObject:n.a.instanceOf(d["a"])}},TnsN:function(e,t,a){"use strict"
var i=a("ouhR")
var n=a.n(i)
var o=a("mX+G")
var d=a.n(o)
var r=a("Y/W1")
var s=a.n(r)
var _,c=function(e,t){return function(){return e.apply(t,arguments)}},l=function(e,t){for(var a in t)f.call(t,a)&&(e[a]=t[a])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},f={}.hasOwnProperty,u=[].slice,p=[].indexOf||function(e){for(var t=0,a=this.length;t<a;t++)if(t in this&&this[t]===e)return t
return-1}
_=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){l(t,e)
function t(){this._setStateAfterFetch=c(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var a,i,o,d
null==e&&(e={})
e=s.a.clone(e)
this.loadedAll=false
i="fetching"+_(e.page)+"Page"
this[i]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(o=this.urls)?o[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
d=null
e.dataFilter=(r=this,function(t){r[i]=false
r._setStateAfterFetch(d,e)
return t})
var r
a=e.dfd||n.a.Deferred()
d=t.__super__.fetch.call(this,e).done(function(t){return function(i,n,o){var d
t.trigger("fetch",t,i,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,i,e);(null!=(d=t.urls)?d.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(u.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:a})})):a.resolve(i,n,o)}}(this))
a.abort=d.abort
a.success=a.done
a.error=a.fail
return a}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var a,i,n,o,d,r,s,_,c,l,f,u,h,b
null==this._urlCache&&(this._urlCache=[])
b=(r=t.url,p.call(this._urlCache,r)<0)
b||this._urlCache.push(t.url)
i=!this.atLeastOnePageFetched
f=i||("next"===(s=t.page)||"bottom"===s)&&b
u=i||("prev"===(_=t.page)||"top"===_)&&b
o=this.urls
this.urls=this._parsePageLinks(e)
f&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=o.bottom:delete this.urls.bottom
u&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=o.top:delete this.urls.top
h=null!=(c=this.urls.first)?c:this.urls.next
if(null!=h){d=parseInt(h.match(this.perPageRegex)[1],10);(null!=(a=null!=this.options?this.options:this.options={}).params?a.params:a.params={}).per_page=d}this.urls.last&&(n=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(n[1],10));(null!=(l=this.urls)?l.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,a
t=null!=(a=e.getResponseHeader("link"))?a.split(","):void 0
null==t&&(t=[])
return s.a.reduce(t,(i=this,function(e,t){var a,n
a=t.match(i.nameRegex)[1]
n=t.match(i.linkRegex)[1]
e[a]=n
return e}),{})
var i}
return t}(d.a.Collection)},VXGR:function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
var i=a("TnsN")
var n=a("Y/W1")
var o=a.n(n)
var d=a("C8i9")
class r extends i["a"]{initialize(){this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}fetch(e={}){e.data=o.a.extend({content_types:null!=this.parentFolder?this.parentFolder.contentTypes:void 0},e.data||{});(null!=this.parentFolder?this.parentFolder.useVerifiers:void 0)&&(e.data.use_verifiers=1)
return super.fetch(e)}parse(e){if(e&&this.parentFolder){const t=this.parentFolder.previewUrl()
o.a.each(e,e=>e.rce_preview_url=t?t.replace("{{id}}",e.id.toString()):e.url)}return super.parse(...arguments)}setQueryStringParams(){const e={include:["user"],per_page:20,sort:this.get("sort"),order:this.get("order")}
if(this.loadedAll)return
const t=new URL(this.url)
const a=deparam(t.search)
t.search=$.param(o.a.extend(a,e))
this.url=t.toString()
return this.reset()}}r.optionProperty("parentFolder")
r.prototype.model=d["a"]},eAd9:function(e,t,a){(function(t){var a=false
var i
var n
function o(){if("undefined"!==typeof i)return i
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
i=t.offsetWidth-t.clientWidth
e.removeChild(t)
return i}function d(){return document.documentElement.scrollHeight>window.innerHeight}function r(e){if("undefined"===typeof document||a)return
var t=document.documentElement
n=window.pageYOffset
d()?t.style.width="calc(100% - "+o()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-n+"px"
t.style.overflow="hidden"
a=true}function s(){if("undefined"===typeof document||!a)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,n)
a=false}function _(){if(a){s()
return}r()}var c={on:r,off:s,toggle:_}
"undefined"!==typeof e.exports?e.exports=c:t.noScroll=c})(this)},"i7z/":function(e,t,a){"use strict"
a.r(t)
a.d(t,"showFilePreview",(function(){return h}))
var i=a("ODXe")
var n=a("An8g")
var o=a("q1tI")
var d=a("i8i4")
var r=a.n(d)
a("17x9")
var s=a("HGxv")
var _=a("8WeW")
Object(_["a"])(JSON.parse('{"ar":{"failed_getting_file_to_preview_89fe2bf4":"تعذر الحصول على الملف للمعاينة"},"ca":{"failed_getting_file_to_preview_89fe2bf4":"No s\'ha pogut obtenir el fitxer per a la visualització prèvia"},"cy":{"failed_getting_file_to_preview_89fe2bf4":"Wedi methu cael ffeil i weld rhagolwg ohoni"},"da":{"failed_getting_file_to_preview_89fe2bf4":"Kunne ikke hente filen til forhåndsvisning"},"da-x-k12":{"failed_getting_file_to_preview_89fe2bf4":"Kunne ikke hente filen til forhåndsvisning"},"de":{"failed_getting_file_to_preview_89fe2bf4":"Fehler beim Abrufen der Datei für die Vorschau"},"en-AU":{"failed_getting_file_to_preview_89fe2bf4":"Failed getting file to preview"},"en-AU-x-unimelb":{"failed_getting_file_to_preview_89fe2bf4":"Failed getting file to preview"},"en-CA":{"failed_getting_file_to_preview_89fe2bf4":"Failed getting file to preview"},"en-GB":{"failed_getting_file_to_preview_89fe2bf4":"Failed getting file to preview"},"en-GB-x-ukhe":{"failed_getting_file_to_preview_89fe2bf4":"Failed getting file to preview"},"es":{"failed_getting_file_to_preview_89fe2bf4":"No se pudo previsualizar el archivo"},"es-ES":{"failed_getting_file_to_preview_89fe2bf4":"No se ha podido previsualizar el archivo"},"fi":{"failed_getting_file_to_preview_89fe2bf4":"Tiedoston saanti esikatselua varten epäonnistui"},"fr":{"failed_getting_file_to_preview_89fe2bf4":"Impossible d\'accéder au fichier à prévisualiser"},"fr-CA":{"failed_getting_file_to_preview_89fe2bf4":"Échec de l’obtention du fichier à prévisualiser"},"ht":{"failed_getting_file_to_preview_89fe2bf4":"Echèk previzyalizasyon dosye"},"is":{"failed_getting_file_to_preview_89fe2bf4":"Ekki tókst að forskoða skrána."},"it":{"failed_getting_file_to_preview_89fe2bf4":"Impossibile ottenere il file per l’anteprima"},"ja":{"failed_getting_file_to_preview_89fe2bf4":"ファイルのプレビューに失敗しました"},"mi":{"failed_getting_file_to_preview_89fe2bf4":"I hapa i te wā e tiki ana i t`nei kōnae mo te arokite"},"nb":{"failed_getting_file_to_preview_89fe2bf4":"Kunne ikke hente filen til forhåndsvisning"},"nb-x-k12":{"failed_getting_file_to_preview_89fe2bf4":"Kunne ikke hente filen til forhåndsvisning"},"nl":{"failed_getting_file_to_preview_89fe2bf4":"Voorbeeldweergave van bestand niet gelukt"},"pl":{"failed_getting_file_to_preview_89fe2bf4":"Nie udało się pobrać zdjęcia do podglądu"},"pt":{"failed_getting_file_to_preview_89fe2bf4":"Falha em obter ficheiro para pré-visualizar"},"pt-BR":{"failed_getting_file_to_preview_89fe2bf4":"Falha ao obter arquivo para visualização"},"ru":{"failed_getting_file_to_preview_89fe2bf4":"Не удалось получить файл для предпросмотра"},"sl":{"failed_getting_file_to_preview_89fe2bf4":"Pridobivanje datoteke za predogled ni uspelo"},"sv":{"failed_getting_file_to_preview_89fe2bf4":"Det gick inte att hämta filen för förhandsgranskning"},"sv-x-k12":{"failed_getting_file_to_preview_89fe2bf4":"Det gick inte att hämta filen för förhandsgranskning"},"th":{"failed_getting_file_to_preview_89fe2bf4":"ไม่สามารถสืบค้นไฟล์ที่จะแสดงตัวอย่าง"},"zh-Hans":{"failed_getting_file_to_preview_89fe2bf4":"获取预览文件失败"},"zh-Hant":{"failed_getting_file_to_preview_89fe2bf4":"取得要預覽的檔案失敗"}}'))
a("jQeR")
a("0sPK")
var c=s["default"].scoped("standalone_file_preview")
var l=a("uloQ")
var f=a("Llkk")
var u=a("C8i9")
var p=a("etQE")
function h(e,t=""){let a=document.getElementById("file_preview_container")
if(!a){a=document.createElement("div")
a.id="file_preview_container"
document.body.appendChild(a)}Object(p["b"])(fetch(`/api/v1/files/${e}?include[]=enhanced_preview_url&verifier=${t}&use_verifiers=1`,p["e"])).then(e=>{const t=new u["a"](e)
r.a.render(Object(n["a"])(b,{preview_file:t}),a)}).catch(e=>{Object(l["a"])({message:c.t("Failed getting file to preview"),err:e})})}function b({preview_file:e}){const t=Object(o["useState"])(true),a=Object(i["a"])(t,2),d=a[0],r=a[1]
const s=Object(o["useState"])(e),_=Object(i["a"])(s,2),c=_[0],l=_[1]
Object(o["useEffect"])(()=>{(null===e||void 0===e?void 0:e.id)!==(null===c||void 0===c?void 0:c.id)&&l(e)
r(!!c)},[c,e])
return c&&Object(n["a"])(f["a"],{isOpen:d,currentFolder:{files:{models:[c]}},query:{only_preview:"xyzzy",preview:c.id},closePreview:()=>r(false)})}},m452:function(e,t,a){"use strict"
a.r(t)
var i=a("ODXe")
var n=a("3jyj")
var o=a("s9Pr")
const d=ENV.FILES_CONTEXTS||[]
const r={contexts:d,contextsDictionary:d.reduce((e,t)=>{const a=Array.from(Object(o["a"])(t.asset_string)),n=Object(i["a"])(a,2),d=n[0],r=n[1]
t.contextType=d
t.contextId=r
e[[d,r].join("_")]=t
return e},{}),showingAllContexts:window.location.pathname.match(/^\/files/),contextType:null!=d[0]?d[0].contextType:void 0,contextId:null!=d[0]?d[0].contextId:void 0,rootFolders:d.map(e=>{if(ENV.current_user_id){const t=new n["a"]({custom_name:e.name,context_type:e.contextType.replace(/s$/,""),context_id:e.contextId})
t.url=`/api/v1/${e.contextType}/${e.contextId}/folders/root`
t.fetch()
return t}})}
r.contextFor=function(e){let t
e.collection&&e.collection.parentFolder&&(e=e.collection.parentFolder)
if(e instanceof n["a"]){const a=e
t=`${a&&a.get("context_type")}s_${a&&a.get("context_id")}`.toLowerCase()}else e.contextType&&e.contextId&&(t=`${e.contextType}_${e.contextId}`.toLowerCase())
return r.contextsDictionary&&r.contextsDictionary[t]}
r.userHasPermission=function(e,t){if(!e)return false
return r.contextFor(e)&&r.contextFor(e).permissions&&r.contextFor(e).permissions[t]}
r.baseUrl=r.showingAllContexts?"/files":`/${r.contextType}/${r.contextId}/files`
t["default"]=r},plYi:function(e,t,a){"use strict"
var i=a("HGxv")
t["a"]={strings(e,t){let a=i["default"].locale||"en-US"
const n={zh_Hant:"zh-Hant"}
a=n[a]||a
return e.localeCompare(t,a,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,a)=>this.strings(e(t),e(a))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},scx4:function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
var i=a("HGxv")
var n=a("8WeW")
Object(n["a"])(JSON.parse('{"ar":{"archive_3f794d7e":"أرشيف","audio_dd489fcc":"صوت","flash_6afbf65a":"Flash","image_8ad06":"الصورة","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"نص عادي","presentation_2d9387ca":"عرض تقديمي","source_code_2395ca74":"رمز المصدر","spreadsheet_6d622119":"جدول بيانات","text_document_eacbcdb7":"مستند نصي","unknown_47a3b725":"غير معروف","video_b9f27375":"فيديو","web_page_146f9102":"صفحة الويب"},"ca":{"archive_3f794d7e":"Arxiva","audio_dd489fcc":"Àudio","flash_6afbf65a":"Flash","image_8ad06":"Imatge","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Text sense format","presentation_2d9387ca":"Presentació","source_code_2395ca74":"Codi font","spreadsheet_6d622119":"Full de càlcul","text_document_eacbcdb7":"Document de text","unknown_47a3b725":"Desconegut","video_b9f27375":"Vídeo","web_page_146f9102":"Pàgina web"},"cy":{"archive_3f794d7e":"Archifo","audio_dd489fcc":"Sain","flash_6afbf65a":"Flash","image_8ad06":"Delwedd","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Testun plaen","presentation_2d9387ca":"Cyflwyniad","source_code_2395ca74":"Cod ffynhonnell","spreadsheet_6d622119":"Taenlen","text_document_eacbcdb7":"Dogfen Testun","unknown_47a3b725":"Dieithr","video_b9f27375":"Fideo","web_page_146f9102":"Tudalen we"},"da":{"archive_3f794d7e":"Arkiv","audio_dd489fcc":"Lyd","flash_6afbf65a":"Flash","image_8ad06":"Billede","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Almindelig tekst","presentation_2d9387ca":"Præsentation","source_code_2395ca74":"Kildekode","spreadsheet_6d622119":"Regneark","text_document_eacbcdb7":"Tekstdokument","unknown_47a3b725":"Ukendt","video_b9f27375":"Video","web_page_146f9102":"Webside"},"da-x-k12":{"archive_3f794d7e":"Arkiv","audio_dd489fcc":"Lyd","flash_6afbf65a":"Flash","image_8ad06":"Billede","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Almindelig tekst","presentation_2d9387ca":"Præsentation","source_code_2395ca74":"Kildekode","spreadsheet_6d622119":"Regneark","text_document_eacbcdb7":"Tekstdokument","unknown_47a3b725":"Ukendt","video_b9f27375":"Video","web_page_146f9102":"Webside"},"de":{"archive_3f794d7e":"Archivieren","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Bild","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Nur-Text","presentation_2d9387ca":"Präsentation","source_code_2395ca74":"Quellcode","spreadsheet_6d622119":"Tabellenblatt","text_document_eacbcdb7":"Textdokument","unknown_47a3b725":"Unbekannt","video_b9f27375":"Video","web_page_146f9102":"Webseite"},"el":{"archive_3f794d7e":"Αρχείο","audio_dd489fcc":"Αρχείο ήχου","flash_6afbf65a":"Flash","image_8ad06":"Εικόνα","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Απλό κείμενο","presentation_2d9387ca":"Παρουσίαση","source_code_2395ca74":"Πηγαίος κώδικας","spreadsheet_6d622119":"Λογιστικό φύλλο","text_document_eacbcdb7":"Έγγραφο κειμένου","unknown_47a3b725":"Άγνωστο","video_b9f27375":"Αρχείο Βίντεο","web_page_146f9102":"Ιστοσελίδα"},"en-AU":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"en-AU-x-unimelb":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"en-CA":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"en-GB":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"en-GB-x-lbs":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"en-GB-x-ukhe":{"archive_3f794d7e":"Archive","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Plain text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Source code","spreadsheet_6d622119":"Spreadsheet","text_document_eacbcdb7":"Text document","unknown_47a3b725":"Unknown","video_b9f27375":"Video","web_page_146f9102":"Web page"},"es":{"archive_3f794d7e":"Archivar","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Imagen","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texto sin formato","presentation_2d9387ca":"Presentación","source_code_2395ca74":"Código fuente","spreadsheet_6d622119":"Hoja de cálculo","text_document_eacbcdb7":"Documento de texto","unknown_47a3b725":"Desconocido","video_b9f27375":"Video","web_page_146f9102":"Página web"},"es-ES":{"archive_3f794d7e":"Archivar","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Imagen","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texto sin formato","presentation_2d9387ca":"Presentación","source_code_2395ca74":"Código fuente","spreadsheet_6d622119":"Hoja de cálculo","text_document_eacbcdb7":"Documento de texto","unknown_47a3b725":"Desconocido","video_b9f27375":"Video","web_page_146f9102":"Página web"},"fa":{"archive_3f794d7e":"بایگانی","audio_dd489fcc":"صدا","flash_6afbf65a":"فلش","image_8ad06":"تصویر","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"متن ساده","presentation_2d9387ca":"ارائه","source_code_2395ca74":"رمز منبع","spreadsheet_6d622119":"صفحه گسترده","text_document_eacbcdb7":"سند متنی","unknown_47a3b725":"ناشناس","video_b9f27375":"تصویر","web_page_146f9102":"صفحه وب"},"fi":{"archive_3f794d7e":"Arkisto","audio_dd489fcc":"Ääni","flash_6afbf65a":"Flash","image_8ad06":"Kuva","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Pelkkä teksti","presentation_2d9387ca":"Esitys","source_code_2395ca74":"Lähteen koodi","spreadsheet_6d622119":"Laskentataulukko","text_document_eacbcdb7":"Tekstiasiakirja","unknown_47a3b725":"Tuntematon","video_b9f27375":"Video","web_page_146f9102":"Verkkosivusto"},"fr":{"archive_3f794d7e":"Archiver","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texte brut","presentation_2d9387ca":"Présentation","source_code_2395ca74":"Code source","spreadsheet_6d622119":"Feuille","text_document_eacbcdb7":"Document de texte","unknown_47a3b725":"Inconnu","video_b9f27375":"Vidéo","web_page_146f9102":"Page Web"},"fr-CA":{"archive_3f794d7e":"Archiver","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Image","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texte brut","presentation_2d9387ca":"Présentation","source_code_2395ca74":"Code source","spreadsheet_6d622119":"Feuille","text_document_eacbcdb7":"Document de texte","unknown_47a3b725":"Inconnu","video_b9f27375":"Vidéo","web_page_146f9102":"Page Web"},"he":{"archive_3f794d7e":"העברה לארכיון","audio_dd489fcc":"שמע","flash_6afbf65a":"פלאש","image_8ad06":"תמונה","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"כיתוב פשוט","presentation_2d9387ca":"מצגת","source_code_2395ca74":"קוד מקור","spreadsheet_6d622119":"גיליון חישובים","text_document_eacbcdb7":"מסמך מלל","unknown_47a3b725":"לא מוכר","video_b9f27375":"וידאו","web_page_146f9102":"דף אינטרנט"},"ht":{"archive_3f794d7e":"Achiv","audio_dd489fcc":"Son","flash_6afbf65a":"Flash","image_8ad06":"Imaj","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Tèks brit","presentation_2d9387ca":"Prezantasyon","source_code_2395ca74":"Kòd sous","spreadsheet_6d622119":"Fèy Kalkil","text_document_eacbcdb7":"Dokiman Tèks","unknown_47a3b725":"Enkoni","video_b9f27375":"Videyo","web_page_146f9102":"Paj web"},"hu":{"archive_3f794d7e":"Archívum","audio_dd489fcc":"Hang","flash_6afbf65a":"Flash","image_8ad06":"Kép","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Egyszerű szöveg","presentation_2d9387ca":"Prezentáció","source_code_2395ca74":"Forráskód","spreadsheet_6d622119":"Táblázat","text_document_eacbcdb7":"Szöveges dokumentum","unknown_47a3b725":"Ismeretlen","video_b9f27375":"Videó","web_page_146f9102":"Weboldal "},"hy":{"archive_3f794d7e":"Արխիվ","audio_dd489fcc":"Աուդիո","flash_6afbf65a":"Flash","image_8ad06":"Պատկեր","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Սովորական տեքստ","presentation_2d9387ca":"Պրեզենտացիա","source_code_2395ca74":"Աղբյուրի կոդ","spreadsheet_6d622119":"Էլեկտրոնային աղյուսակ","text_document_eacbcdb7":"Տեքստային փաստաթուղթ","unknown_47a3b725":"Անհայտ է","video_b9f27375":"Վիդեո","web_page_146f9102":"Վեբ-էջ"},"is":{"archive_3f794d7e":"Safn","audio_dd489fcc":"Hljóð","flash_6afbf65a":"Flash","image_8ad06":"Mynd","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Einfaldur texti","presentation_2d9387ca":"Kynning","source_code_2395ca74":"Frumkóði","spreadsheet_6d622119":"Töflureiknir","text_document_eacbcdb7":"Textaskjal","unknown_47a3b725":"Óþekkt","video_b9f27375":"Myndband","web_page_146f9102":"Vefsíða"},"it":{"archive_3f794d7e":"Archivia","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Immagine","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Testo normale","presentation_2d9387ca":"Presentazione","source_code_2395ca74":"Codice sorgente","spreadsheet_6d622119":"Foglio di calcolo","text_document_eacbcdb7":"Documento di testo","unknown_47a3b725":"Sconosciuto","video_b9f27375":"Video","web_page_146f9102":"Pagina web"},"ja":{"archive_3f794d7e":"アーカイブ","audio_dd489fcc":"オーディオ","flash_6afbf65a":"Flash","image_8ad06":"画像","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"プレーン テキスト","presentation_2d9387ca":"プレゼンテーション","source_code_2395ca74":"ソース コード","spreadsheet_6d622119":"スプレッドシート","text_document_eacbcdb7":"テキスト文書","unknown_47a3b725":"不明","video_b9f27375":"ビデオ","web_page_146f9102":"Web ページ"},"ko":{"archive_3f794d7e":"저장소","image_8ad06":"이미지","unknown_47a3b725":"알 수 없음"},"mi":{"archive_3f794d7e":"Pūranga","audio_dd489fcc":"Ōrorongo","flash_6afbf65a":"Flash","image_8ad06":"Āhua","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"kuputuhi tōkau","presentation_2d9387ca":"Whakāturanga","source_code_2395ca74":"waehere pūtake","spreadsheet_6d622119":"Ripanga","text_document_eacbcdb7":"tuhinga Kupu","unknown_47a3b725":"Kaore e mōhiotia","video_b9f27375":"Ataata","web_page_146f9102":"whārangi Tukutuku"},"nb":{"archive_3f794d7e":"Arkiv","audio_dd489fcc":"Lyd","flash_6afbf65a":"Blitz","image_8ad06":"Bilde","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Enkel tekst","presentation_2d9387ca":"Presentasjon","source_code_2395ca74":"kilde kode","spreadsheet_6d622119":"Regneark","text_document_eacbcdb7":"Tekst dokument","unknown_47a3b725":"Ukjent","video_b9f27375":"Video","web_page_146f9102":"Nettside"},"nb-x-k12":{"archive_3f794d7e":"Arkiv","audio_dd489fcc":"Lyd","flash_6afbf65a":"Blitz","image_8ad06":"Bilde","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Enkel tekst","presentation_2d9387ca":"Presentasjon","source_code_2395ca74":"kilde kode","spreadsheet_6d622119":"Regneark","text_document_eacbcdb7":"Tekst dokument","unknown_47a3b725":"Ukjent","video_b9f27375":"Video","web_page_146f9102":"Nettside"},"nl":{"archive_3f794d7e":"Archiveren","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash ","image_8ad06":"Afbeelding","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Tekst zonder opmaak","presentation_2d9387ca":"Presentatie","source_code_2395ca74":"Broncode","spreadsheet_6d622119":"Werkblad","text_document_eacbcdb7":"Tekstdocument","unknown_47a3b725":"Onbekend","video_b9f27375":"Video ","web_page_146f9102":"webpagina"},"nn":{"archive_3f794d7e":"Arkiv","audio_dd489fcc":"Lyd","flash_6afbf65a":"Flash","image_8ad06":"Bilde","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Rein tekst","presentation_2d9387ca":"Presentasjon","source_code_2395ca74":"Kjeldekode","spreadsheet_6d622119":"Rekneark","text_document_eacbcdb7":"Tekstdokument","unknown_47a3b725":"Ukjent","video_b9f27375":"Video","web_page_146f9102":"Nettside"},"pl":{"archive_3f794d7e":"Archiwum","audio_dd489fcc":"Audio","flash_6afbf65a":"Flash","image_8ad06":"Obraz","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Zwykły tekst","presentation_2d9387ca":"Prezentacja","source_code_2395ca74":"Kod źródłowy","spreadsheet_6d622119":"Arkusz kalkulacyjny","text_document_eacbcdb7":"Dokument tekstowy","unknown_47a3b725":"Nieznany","video_b9f27375":"Wideo","web_page_146f9102":"Strona sieci Web"},"pt":{"archive_3f794d7e":"Arquivar","audio_dd489fcc":"Áudio","flash_6afbf65a":"Flash","image_8ad06":"Imagem","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texto simples","presentation_2d9387ca":"Apresentação","source_code_2395ca74":"Código-fonte","spreadsheet_6d622119":"Folha de cálculo","text_document_eacbcdb7":"Documento de texto","unknown_47a3b725":"Desconhecido","video_b9f27375":"Vídeo","web_page_146f9102":"Página Web"},"pt-BR":{"archive_3f794d7e":"Arquivar","audio_dd489fcc":"Áudio","flash_6afbf65a":"Flash","image_8ad06":"Imagem","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Texto simples","presentation_2d9387ca":"Apresentação","source_code_2395ca74":"Código-fonte","spreadsheet_6d622119":"Planilha","text_document_eacbcdb7":"Documento de texto","unknown_47a3b725":"Desconhecido","video_b9f27375":"Vídeo","web_page_146f9102":"Página Web"},"ru":{"archive_3f794d7e":"Архив","audio_dd489fcc":"Аудио","flash_6afbf65a":"Flash","image_8ad06":"Изображение","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Обычный текст","presentation_2d9387ca":"Презентация","source_code_2395ca74":"Код источника","spreadsheet_6d622119":"Динамическая таблица","text_document_eacbcdb7":"Текстовый документ","unknown_47a3b725":"Неизвестно","video_b9f27375":"Видео","web_page_146f9102":"Веб-страница"},"sl":{"archive_3f794d7e":"Arhiviraj","audio_dd489fcc":"Zvok","flash_6afbf65a":"Flash","image_8ad06":"Slika","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Navadno besedilo","presentation_2d9387ca":"Predstavitev","source_code_2395ca74":"Izvorna koda","spreadsheet_6d622119":"Preglednica","text_document_eacbcdb7":"Besedilni dokument","unknown_47a3b725":"Neznano","video_b9f27375":"Videoposnetek","web_page_146f9102":"Spletna stran"},"sv":{"archive_3f794d7e":"Arkivera","audio_dd489fcc":"Ljud","flash_6afbf65a":"Flash","image_8ad06":"Bild","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Oformaterad text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Källkod","spreadsheet_6d622119":"Kalkylblad","text_document_eacbcdb7":"Textdokument","unknown_47a3b725":"Okänd","video_b9f27375":"Video","web_page_146f9102":"Webbsida"},"sv-x-k12":{"archive_3f794d7e":"Arkivera","audio_dd489fcc":"Ljud","flash_6afbf65a":"Flash","image_8ad06":"Bild","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Oformaterad text","presentation_2d9387ca":"Presentation","source_code_2395ca74":"Källkod","spreadsheet_6d622119":"Kalkylblad","text_document_eacbcdb7":"Textdokument","unknown_47a3b725":"Okänd","video_b9f27375":"Video","web_page_146f9102":"Webbsida"},"th":{"archive_3f794d7e":"จัดเก็บแยก","audio_dd489fcc":"เสียง","flash_6afbf65a":"แฟลช","image_8ad06":"ภาพ","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"อักษรอย่างเดียว","presentation_2d9387ca":"การนำเสนอ","source_code_2395ca74":"รหัสข้อมูลต้นทาง","spreadsheet_6d622119":"กระดาษคำนวณ","text_document_eacbcdb7":"เอกสารแบบข้อความ","unknown_47a3b725":"ไม่รู้จัก","video_b9f27375":"วิดีโอ","web_page_146f9102":"เว็บเพจ"},"tr":{"archive_3f794d7e":"Arşiv","audio_dd489fcc":"Ses","flash_6afbf65a":"Flash","image_8ad06":"Resim","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"Düz metin","presentation_2d9387ca":"Sunum","source_code_2395ca74":"Kaynak kodu","spreadsheet_6d622119":"Elektronik Tablo","text_document_eacbcdb7":"Metin belgesi","unknown_47a3b725":"Bilinmiyor","video_b9f27375":"Video","web_page_146f9102":"Web sayfası"},"uk":{"archive_3f794d7e":"Архів","audio_dd489fcc":"Звук","flash_6afbf65a":"Флеш","image_8ad06":"Зображення","pdf_d8236d9a":"Формат PDF","plain_text_e3ab33aa":"Простий текст","presentation_2d9387ca":"Презентація","source_code_2395ca74":"Вихідний код","spreadsheet_6d622119":"Електронна таблиця","text_document_eacbcdb7":"Текстовий документ","unknown_47a3b725":"Невідомий","video_b9f27375":"Відео","web_page_146f9102":"Веб-сторінка"},"zh-Hans":{"archive_3f794d7e":"存档","audio_dd489fcc":"音频","flash_6afbf65a":"Flash","image_8ad06":"图像","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"纯文本","presentation_2d9387ca":"展示","source_code_2395ca74":"源代码","spreadsheet_6d622119":"电子表格","text_document_eacbcdb7":"文本文档","unknown_47a3b725":"未知","video_b9f27375":"视频","web_page_146f9102":"网页"},"zh-Hant":{"archive_3f794d7e":"存檔","audio_dd489fcc":"音頻","flash_6afbf65a":"Flash","image_8ad06":"影像","pdf_d8236d9a":"PDF","plain_text_e3ab33aa":"純文字","presentation_2d9387ca":"簡報","source_code_2395ca74":"源代碼","spreadsheet_6d622119":"电子表格","text_document_eacbcdb7":"文本文件","unknown_47a3b725":"未知","video_b9f27375":"視訊","web_page_146f9102":"網頁"}}'))
a("jQeR")
a("0sPK")
var o=i["default"].scoped("mimeClass")
const d={audio:{get displayName(){return o.t("Audio")},mimeTypes:["audio/x-mpegurl","audio/x-pn-realaudio","audio/x-aiff","audio/3gpp","audio/mid","audio/x-wav","audio/basic","audio/mpeg"]},code:{get displayName(){return o.t("Source code")},mimeTypes:["text/xml","text/css","text/x-yaml","application/xml","application/javascript","text/x-csharp"]},doc:{get displayName(){return o.t("Text document")},mimeTypes:["application/x-docx","text/rtf","application/msword","application/rtf","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},flash:{get displayName(){return o.t("Flash")},mimeTypes:["application/x-shockwave-flash"]},html:{get displayName(){return o.t("Web page")},mimeTypes:["text/html","application/xhtml+xml"]},image:{get displayName(){return o.t("Image")},mimeTypes:["image/png","image/x-psd","image/gif","image/pjpeg","image/jpeg"]},ppt:{get displayName(){return o.t("Presentation")},mimeTypes:["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint"]},pdf:{get displayName(){return o.t("PDF")},mimeTypes:["application/pdf"]},text:{get displayName(){return o.t("Plain text")},mimeTypes:["text","text/plain"]},video:{get displayName(){return o.t("Video")},mimeTypes:["video/mp4","video/x-ms-asf","video/x-msvideo","video/x-sgi-movie","video/mpeg","video/quicktime","video/x-la-asf","video/3gpp","video/webm","video/avi"]},xls:{get displayName(){return o.t("Spreadsheet")},mimeTypes:["application/vnd.oasis.opendocument.spreadsheet","text/csv","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"]},zip:{get displayName(){return o.t("Archive")},mimeTypes:["application/x-rar-compressed","application/x-zip-compressed","application/zip","application/x-zip","application/x-rar"]}}
function r(e){return r.mimeClasses[e]||"file"}r.displayName=function(e){const t=d[r(e)]
return t&&t.displayName||o.t("Unknown")}
r.mimeClasses={}
for(const e in d){const t=d[e]
t.mimeTypes.forEach(t=>r.mimeClasses[t]=e)}},ysUD:function(e,t,a){"use strict"
a.d(t,"a",(function(){return A}))
var i=a("VTBJ")
var n=a("rePB")
var o=a("1OyB")
var d=a("vuIU")
var r=a("Ji7U")
var s=a("LK+K")
var _=a("q1tI")
var c=a.n(_)
var l=a("17x9")
var f=a.n(l)
var u=a("TSYQ")
var p=a.n(u)
var h=a("eAd9")
var b=a.n(h)
var g=a("J2CL")
var v=a("sQ3t")
var m=a("jtGx")
function x(e){var t=e.colors,a=e.borders,i=e.stacking
return{zIndex:i.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:a.radiusMedium,borderWidth:a.widthSmall}}x.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
var w,k,y,F
var P={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var A=(w=Object(g["l"])(x,P),w(k=(F=y=function(e){Object(r["a"])(a,e)
var t=Object(s["a"])(a)
function a(){var e
Object(o["a"])(this,a)
for(var i=arguments.length,n=new Array(i),d=0;d<i;d++)n[d]=arguments[d]
e=t.call.apply(t,[this].concat(n))
e.handleElementRef=function(t){e.props.elementRef(t)}
e.contentRef=function(t){e._content=t}
return e}Object(d["a"])(a,[{key:"componentDidMount",value:function(){this.props.fullscreen&&b.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&b.a.off()}},{key:"render",value:function(){var e
var t=Object(v["a"])(this.props.children,{ref:this.contentRef})
var o=p()((e={},Object(n["a"])(e,P.root,true),Object(n["a"])(e,P[this.props.placement],true),Object(n["a"])(e,P.fullscreen,this.props.fullscreen),e))
var d=Object(i["a"])({},Object(m["a"])(this.props,a.propTypes),{className:o,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){d.onClick=this.props.onClick
d.tabIndex=-1}return c.a.createElement("span",d,t)}}])
a.displayName="Mask"
return a}(_["Component"]),y.propTypes={onDismiss:f.a.func,placement:f.a.oneOf(["top","center","bottom","stretch"]),fullscreen:f.a.bool,children:f.a.node,onClick:f.a.func,elementRef:f.a.func},y.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},F))||k)}}])

//# sourceMappingURL=4076-c-fd10ba9304.js.map