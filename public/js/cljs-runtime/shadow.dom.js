goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47903 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47903(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47904 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47904(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47226 = coll;
var G__47227 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47226,G__47227) : shadow.dom.lazy_native_coll_seq.call(null,G__47226,G__47227));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47270 = arguments.length;
switch (G__47270) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47276 = arguments.length;
switch (G__47276) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47296 = arguments.length;
switch (G__47296) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47310 = arguments.length;
switch (G__47310) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47329 = arguments.length;
switch (G__47329) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47344 = arguments.length;
switch (G__47344) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47363){if((e47363 instanceof Object)){
var e = e47363;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47363;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47368 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47369 = null;
var count__47370 = (0);
var i__47371 = (0);
while(true){
if((i__47371 < count__47370)){
var el = chunk__47369.cljs$core$IIndexed$_nth$arity$2(null,i__47371);
var handler_47911__$1 = ((function (seq__47368,chunk__47369,count__47370,i__47371,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47368,chunk__47369,count__47370,i__47371,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47911__$1);


var G__47912 = seq__47368;
var G__47913 = chunk__47369;
var G__47914 = count__47370;
var G__47915 = (i__47371 + (1));
seq__47368 = G__47912;
chunk__47369 = G__47913;
count__47370 = G__47914;
i__47371 = G__47915;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47368);
if(temp__5753__auto__){
var seq__47368__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47368__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47368__$1);
var G__47916 = cljs.core.chunk_rest(seq__47368__$1);
var G__47917 = c__4649__auto__;
var G__47918 = cljs.core.count(c__4649__auto__);
var G__47919 = (0);
seq__47368 = G__47916;
chunk__47369 = G__47917;
count__47370 = G__47918;
i__47371 = G__47919;
continue;
} else {
var el = cljs.core.first(seq__47368__$1);
var handler_47920__$1 = ((function (seq__47368,chunk__47369,count__47370,i__47371,el,seq__47368__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47368,chunk__47369,count__47370,i__47371,el,seq__47368__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47920__$1);


var G__47921 = cljs.core.next(seq__47368__$1);
var G__47922 = null;
var G__47923 = (0);
var G__47924 = (0);
seq__47368 = G__47921;
chunk__47369 = G__47922;
count__47370 = G__47923;
i__47371 = G__47924;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47405 = arguments.length;
switch (G__47405) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47426 = cljs.core.seq(events);
var chunk__47428 = null;
var count__47429 = (0);
var i__47430 = (0);
while(true){
if((i__47430 < count__47429)){
var vec__47445 = chunk__47428.cljs$core$IIndexed$_nth$arity$2(null,i__47430);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47445,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47926 = seq__47426;
var G__47927 = chunk__47428;
var G__47928 = count__47429;
var G__47929 = (i__47430 + (1));
seq__47426 = G__47926;
chunk__47428 = G__47927;
count__47429 = G__47928;
i__47430 = G__47929;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47426);
if(temp__5753__auto__){
var seq__47426__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47426__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47426__$1);
var G__47930 = cljs.core.chunk_rest(seq__47426__$1);
var G__47931 = c__4649__auto__;
var G__47932 = cljs.core.count(c__4649__auto__);
var G__47933 = (0);
seq__47426 = G__47930;
chunk__47428 = G__47931;
count__47429 = G__47932;
i__47430 = G__47933;
continue;
} else {
var vec__47457 = cljs.core.first(seq__47426__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47934 = cljs.core.next(seq__47426__$1);
var G__47935 = null;
var G__47936 = (0);
var G__47937 = (0);
seq__47426 = G__47934;
chunk__47428 = G__47935;
count__47429 = G__47936;
i__47430 = G__47937;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47460 = cljs.core.seq(styles);
var chunk__47461 = null;
var count__47462 = (0);
var i__47463 = (0);
while(true){
if((i__47463 < count__47462)){
var vec__47477 = chunk__47461.cljs$core$IIndexed$_nth$arity$2(null,i__47463);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47477,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47938 = seq__47460;
var G__47939 = chunk__47461;
var G__47940 = count__47462;
var G__47941 = (i__47463 + (1));
seq__47460 = G__47938;
chunk__47461 = G__47939;
count__47462 = G__47940;
i__47463 = G__47941;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47460);
if(temp__5753__auto__){
var seq__47460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47460__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47460__$1);
var G__47942 = cljs.core.chunk_rest(seq__47460__$1);
var G__47943 = c__4649__auto__;
var G__47944 = cljs.core.count(c__4649__auto__);
var G__47945 = (0);
seq__47460 = G__47942;
chunk__47461 = G__47943;
count__47462 = G__47944;
i__47463 = G__47945;
continue;
} else {
var vec__47485 = cljs.core.first(seq__47460__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47485,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47946 = cljs.core.next(seq__47460__$1);
var G__47947 = null;
var G__47948 = (0);
var G__47949 = (0);
seq__47460 = G__47946;
chunk__47461 = G__47947;
count__47462 = G__47948;
i__47463 = G__47949;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47492_47950 = key;
var G__47492_47951__$1 = (((G__47492_47950 instanceof cljs.core.Keyword))?G__47492_47950.fqn:null);
switch (G__47492_47951__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47953 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_47953,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_47953,"aria-");
}
})())){
el.setAttribute(ks_47953,value);
} else {
(el[ks_47953] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47515){
var map__47517 = p__47515;
var map__47517__$1 = cljs.core.__destructure_map(map__47517);
var props = map__47517__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47518,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47522 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47522,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47522;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47524 = arguments.length;
switch (G__47524) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47527){
var vec__47529 = p__47527;
var seq__47530 = cljs.core.seq(vec__47529);
var first__47531 = cljs.core.first(seq__47530);
var seq__47530__$1 = cljs.core.next(seq__47530);
var nn = first__47531;
var first__47531__$1 = cljs.core.first(seq__47530__$1);
var seq__47530__$2 = cljs.core.next(seq__47530__$1);
var np = first__47531__$1;
var nc = seq__47530__$2;
var node = vec__47529;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47535 = nn;
var G__47536 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47535,G__47536) : create_fn.call(null,G__47535,G__47536));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47539 = nn;
var G__47540 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47539,G__47540) : create_fn.call(null,G__47539,G__47540));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47546 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47546,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47546,(1),null);
var seq__47549_47955 = cljs.core.seq(node_children);
var chunk__47550_47956 = null;
var count__47551_47957 = (0);
var i__47552_47958 = (0);
while(true){
if((i__47552_47958 < count__47551_47957)){
var child_struct_47959 = chunk__47550_47956.cljs$core$IIndexed$_nth$arity$2(null,i__47552_47958);
var children_47960 = shadow.dom.dom_node(child_struct_47959);
if(cljs.core.seq_QMARK_(children_47960)){
var seq__47586_47961 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47960));
var chunk__47588_47962 = null;
var count__47589_47963 = (0);
var i__47590_47964 = (0);
while(true){
if((i__47590_47964 < count__47589_47963)){
var child_47965 = chunk__47588_47962.cljs$core$IIndexed$_nth$arity$2(null,i__47590_47964);
if(cljs.core.truth_(child_47965)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47965);


var G__47966 = seq__47586_47961;
var G__47967 = chunk__47588_47962;
var G__47968 = count__47589_47963;
var G__47969 = (i__47590_47964 + (1));
seq__47586_47961 = G__47966;
chunk__47588_47962 = G__47967;
count__47589_47963 = G__47968;
i__47590_47964 = G__47969;
continue;
} else {
var G__47970 = seq__47586_47961;
var G__47971 = chunk__47588_47962;
var G__47972 = count__47589_47963;
var G__47973 = (i__47590_47964 + (1));
seq__47586_47961 = G__47970;
chunk__47588_47962 = G__47971;
count__47589_47963 = G__47972;
i__47590_47964 = G__47973;
continue;
}
} else {
var temp__5753__auto___47974 = cljs.core.seq(seq__47586_47961);
if(temp__5753__auto___47974){
var seq__47586_47975__$1 = temp__5753__auto___47974;
if(cljs.core.chunked_seq_QMARK_(seq__47586_47975__$1)){
var c__4649__auto___47976 = cljs.core.chunk_first(seq__47586_47975__$1);
var G__47977 = cljs.core.chunk_rest(seq__47586_47975__$1);
var G__47978 = c__4649__auto___47976;
var G__47979 = cljs.core.count(c__4649__auto___47976);
var G__47980 = (0);
seq__47586_47961 = G__47977;
chunk__47588_47962 = G__47978;
count__47589_47963 = G__47979;
i__47590_47964 = G__47980;
continue;
} else {
var child_47981 = cljs.core.first(seq__47586_47975__$1);
if(cljs.core.truth_(child_47981)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47981);


var G__47982 = cljs.core.next(seq__47586_47975__$1);
var G__47983 = null;
var G__47984 = (0);
var G__47985 = (0);
seq__47586_47961 = G__47982;
chunk__47588_47962 = G__47983;
count__47589_47963 = G__47984;
i__47590_47964 = G__47985;
continue;
} else {
var G__47986 = cljs.core.next(seq__47586_47975__$1);
var G__47987 = null;
var G__47988 = (0);
var G__47989 = (0);
seq__47586_47961 = G__47986;
chunk__47588_47962 = G__47987;
count__47589_47963 = G__47988;
i__47590_47964 = G__47989;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47960);
}


var G__47990 = seq__47549_47955;
var G__47991 = chunk__47550_47956;
var G__47992 = count__47551_47957;
var G__47993 = (i__47552_47958 + (1));
seq__47549_47955 = G__47990;
chunk__47550_47956 = G__47991;
count__47551_47957 = G__47992;
i__47552_47958 = G__47993;
continue;
} else {
var temp__5753__auto___47994 = cljs.core.seq(seq__47549_47955);
if(temp__5753__auto___47994){
var seq__47549_47995__$1 = temp__5753__auto___47994;
if(cljs.core.chunked_seq_QMARK_(seq__47549_47995__$1)){
var c__4649__auto___47996 = cljs.core.chunk_first(seq__47549_47995__$1);
var G__47997 = cljs.core.chunk_rest(seq__47549_47995__$1);
var G__47998 = c__4649__auto___47996;
var G__47999 = cljs.core.count(c__4649__auto___47996);
var G__48000 = (0);
seq__47549_47955 = G__47997;
chunk__47550_47956 = G__47998;
count__47551_47957 = G__47999;
i__47552_47958 = G__48000;
continue;
} else {
var child_struct_48001 = cljs.core.first(seq__47549_47995__$1);
var children_48002 = shadow.dom.dom_node(child_struct_48001);
if(cljs.core.seq_QMARK_(children_48002)){
var seq__47603_48003 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48002));
var chunk__47605_48004 = null;
var count__47606_48005 = (0);
var i__47607_48006 = (0);
while(true){
if((i__47607_48006 < count__47606_48005)){
var child_48007 = chunk__47605_48004.cljs$core$IIndexed$_nth$arity$2(null,i__47607_48006);
if(cljs.core.truth_(child_48007)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48007);


var G__48008 = seq__47603_48003;
var G__48009 = chunk__47605_48004;
var G__48010 = count__47606_48005;
var G__48011 = (i__47607_48006 + (1));
seq__47603_48003 = G__48008;
chunk__47605_48004 = G__48009;
count__47606_48005 = G__48010;
i__47607_48006 = G__48011;
continue;
} else {
var G__48012 = seq__47603_48003;
var G__48013 = chunk__47605_48004;
var G__48014 = count__47606_48005;
var G__48015 = (i__47607_48006 + (1));
seq__47603_48003 = G__48012;
chunk__47605_48004 = G__48013;
count__47606_48005 = G__48014;
i__47607_48006 = G__48015;
continue;
}
} else {
var temp__5753__auto___48016__$1 = cljs.core.seq(seq__47603_48003);
if(temp__5753__auto___48016__$1){
var seq__47603_48017__$1 = temp__5753__auto___48016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47603_48017__$1)){
var c__4649__auto___48018 = cljs.core.chunk_first(seq__47603_48017__$1);
var G__48019 = cljs.core.chunk_rest(seq__47603_48017__$1);
var G__48020 = c__4649__auto___48018;
var G__48021 = cljs.core.count(c__4649__auto___48018);
var G__48022 = (0);
seq__47603_48003 = G__48019;
chunk__47605_48004 = G__48020;
count__47606_48005 = G__48021;
i__47607_48006 = G__48022;
continue;
} else {
var child_48023 = cljs.core.first(seq__47603_48017__$1);
if(cljs.core.truth_(child_48023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48023);


var G__48024 = cljs.core.next(seq__47603_48017__$1);
var G__48025 = null;
var G__48026 = (0);
var G__48027 = (0);
seq__47603_48003 = G__48024;
chunk__47605_48004 = G__48025;
count__47606_48005 = G__48026;
i__47607_48006 = G__48027;
continue;
} else {
var G__48028 = cljs.core.next(seq__47603_48017__$1);
var G__48029 = null;
var G__48030 = (0);
var G__48031 = (0);
seq__47603_48003 = G__48028;
chunk__47605_48004 = G__48029;
count__47606_48005 = G__48030;
i__47607_48006 = G__48031;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48002);
}


var G__48032 = cljs.core.next(seq__47549_47995__$1);
var G__48033 = null;
var G__48034 = (0);
var G__48035 = (0);
seq__47549_47955 = G__48032;
chunk__47550_47956 = G__48033;
count__47551_47957 = G__48034;
i__47552_47958 = G__48035;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47632 = cljs.core.seq(node);
var chunk__47633 = null;
var count__47634 = (0);
var i__47635 = (0);
while(true){
if((i__47635 < count__47634)){
var n = chunk__47633.cljs$core$IIndexed$_nth$arity$2(null,i__47635);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48036 = seq__47632;
var G__48037 = chunk__47633;
var G__48038 = count__47634;
var G__48039 = (i__47635 + (1));
seq__47632 = G__48036;
chunk__47633 = G__48037;
count__47634 = G__48038;
i__47635 = G__48039;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47632);
if(temp__5753__auto__){
var seq__47632__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47632__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47632__$1);
var G__48040 = cljs.core.chunk_rest(seq__47632__$1);
var G__48041 = c__4649__auto__;
var G__48042 = cljs.core.count(c__4649__auto__);
var G__48043 = (0);
seq__47632 = G__48040;
chunk__47633 = G__48041;
count__47634 = G__48042;
i__47635 = G__48043;
continue;
} else {
var n = cljs.core.first(seq__47632__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48044 = cljs.core.next(seq__47632__$1);
var G__48045 = null;
var G__48046 = (0);
var G__48047 = (0);
seq__47632 = G__48044;
chunk__47633 = G__48045;
count__47634 = G__48046;
i__47635 = G__48047;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47647 = arguments.length;
switch (G__47647) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47655 = arguments.length;
switch (G__47655) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47660 = arguments.length;
switch (G__47660) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48053 = arguments.length;
var i__4830__auto___48054 = (0);
while(true){
if((i__4830__auto___48054 < len__4829__auto___48053)){
args__4835__auto__.push((arguments[i__4830__auto___48054]));

var G__48055 = (i__4830__auto___48054 + (1));
i__4830__auto___48054 = G__48055;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47664_48056 = cljs.core.seq(nodes);
var chunk__47665_48057 = null;
var count__47666_48058 = (0);
var i__47667_48059 = (0);
while(true){
if((i__47667_48059 < count__47666_48058)){
var node_48060 = chunk__47665_48057.cljs$core$IIndexed$_nth$arity$2(null,i__47667_48059);
fragment.appendChild(shadow.dom._to_dom(node_48060));


var G__48061 = seq__47664_48056;
var G__48062 = chunk__47665_48057;
var G__48063 = count__47666_48058;
var G__48064 = (i__47667_48059 + (1));
seq__47664_48056 = G__48061;
chunk__47665_48057 = G__48062;
count__47666_48058 = G__48063;
i__47667_48059 = G__48064;
continue;
} else {
var temp__5753__auto___48065 = cljs.core.seq(seq__47664_48056);
if(temp__5753__auto___48065){
var seq__47664_48066__$1 = temp__5753__auto___48065;
if(cljs.core.chunked_seq_QMARK_(seq__47664_48066__$1)){
var c__4649__auto___48067 = cljs.core.chunk_first(seq__47664_48066__$1);
var G__48068 = cljs.core.chunk_rest(seq__47664_48066__$1);
var G__48069 = c__4649__auto___48067;
var G__48070 = cljs.core.count(c__4649__auto___48067);
var G__48071 = (0);
seq__47664_48056 = G__48068;
chunk__47665_48057 = G__48069;
count__47666_48058 = G__48070;
i__47667_48059 = G__48071;
continue;
} else {
var node_48072 = cljs.core.first(seq__47664_48066__$1);
fragment.appendChild(shadow.dom._to_dom(node_48072));


var G__48073 = cljs.core.next(seq__47664_48066__$1);
var G__48074 = null;
var G__48075 = (0);
var G__48076 = (0);
seq__47664_48056 = G__48073;
chunk__47665_48057 = G__48074;
count__47666_48058 = G__48075;
i__47667_48059 = G__48076;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47661){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47661));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47681_48077 = cljs.core.seq(scripts);
var chunk__47682_48078 = null;
var count__47683_48079 = (0);
var i__47684_48080 = (0);
while(true){
if((i__47684_48080 < count__47683_48079)){
var vec__47694_48081 = chunk__47682_48078.cljs$core$IIndexed$_nth$arity$2(null,i__47684_48080);
var script_tag_48082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47694_48081,(0),null);
var script_body_48083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47694_48081,(1),null);
eval(script_body_48083);


var G__48084 = seq__47681_48077;
var G__48085 = chunk__47682_48078;
var G__48086 = count__47683_48079;
var G__48087 = (i__47684_48080 + (1));
seq__47681_48077 = G__48084;
chunk__47682_48078 = G__48085;
count__47683_48079 = G__48086;
i__47684_48080 = G__48087;
continue;
} else {
var temp__5753__auto___48088 = cljs.core.seq(seq__47681_48077);
if(temp__5753__auto___48088){
var seq__47681_48089__$1 = temp__5753__auto___48088;
if(cljs.core.chunked_seq_QMARK_(seq__47681_48089__$1)){
var c__4649__auto___48090 = cljs.core.chunk_first(seq__47681_48089__$1);
var G__48091 = cljs.core.chunk_rest(seq__47681_48089__$1);
var G__48092 = c__4649__auto___48090;
var G__48093 = cljs.core.count(c__4649__auto___48090);
var G__48094 = (0);
seq__47681_48077 = G__48091;
chunk__47682_48078 = G__48092;
count__47683_48079 = G__48093;
i__47684_48080 = G__48094;
continue;
} else {
var vec__47701_48095 = cljs.core.first(seq__47681_48089__$1);
var script_tag_48096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701_48095,(0),null);
var script_body_48097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701_48095,(1),null);
eval(script_body_48097);


var G__48098 = cljs.core.next(seq__47681_48089__$1);
var G__48099 = null;
var G__48100 = (0);
var G__48101 = (0);
seq__47681_48077 = G__48098;
chunk__47682_48078 = G__48099;
count__47683_48079 = G__48100;
i__47684_48080 = G__48101;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47705){
var vec__47706 = p__47705;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47706,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47718 = arguments.length;
switch (G__47718) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47734 = cljs.core.seq(style_keys);
var chunk__47735 = null;
var count__47736 = (0);
var i__47737 = (0);
while(true){
if((i__47737 < count__47736)){
var it = chunk__47735.cljs$core$IIndexed$_nth$arity$2(null,i__47737);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48103 = seq__47734;
var G__48104 = chunk__47735;
var G__48105 = count__47736;
var G__48106 = (i__47737 + (1));
seq__47734 = G__48103;
chunk__47735 = G__48104;
count__47736 = G__48105;
i__47737 = G__48106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47734);
if(temp__5753__auto__){
var seq__47734__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47734__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47734__$1);
var G__48107 = cljs.core.chunk_rest(seq__47734__$1);
var G__48108 = c__4649__auto__;
var G__48109 = cljs.core.count(c__4649__auto__);
var G__48110 = (0);
seq__47734 = G__48107;
chunk__47735 = G__48108;
count__47736 = G__48109;
i__47737 = G__48110;
continue;
} else {
var it = cljs.core.first(seq__47734__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48111 = cljs.core.next(seq__47734__$1);
var G__48112 = null;
var G__48113 = (0);
var G__48114 = (0);
seq__47734 = G__48111;
chunk__47735 = G__48112;
count__47736 = G__48113;
i__47737 = G__48114;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47746,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47757 = k47746;
var G__47757__$1 = (((G__47757 instanceof cljs.core.Keyword))?G__47757.fqn:null);
switch (G__47757__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47746,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47761){
var vec__47762 = p__47761;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47762,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47762,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47745){
var self__ = this;
var G__47745__$1 = this;
return (new cljs.core.RecordIter((0),G__47745__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47747,other47748){
var self__ = this;
var this47747__$1 = this;
return (((!((other47748 == null)))) && ((((this47747__$1.constructor === other47748.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47747__$1.x,other47748.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47747__$1.y,other47748.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47747__$1.__extmap,other47748.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47746){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47782 = k47746;
var G__47782__$1 = (((G__47782 instanceof cljs.core.Keyword))?G__47782.fqn:null);
switch (G__47782__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47746);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47745){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47785 = cljs.core.keyword_identical_QMARK_;
var expr__47786 = k__4481__auto__;
if(cljs.core.truth_((pred__47785.cljs$core$IFn$_invoke$arity$2 ? pred__47785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47786) : pred__47785.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47786)))){
return (new shadow.dom.Coordinate(G__47745,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47785.cljs$core$IFn$_invoke$arity$2 ? pred__47785.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47786) : pred__47785.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47786)))){
return (new shadow.dom.Coordinate(self__.x,G__47745,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47745),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47745){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47745,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47752){
var extmap__4512__auto__ = (function (){var G__47797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47752,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47752)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47797);
} else {
return G__47797;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47752),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47752),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k47810,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__47814 = k47810;
var G__47814__$1 = (((G__47814 instanceof cljs.core.Keyword))?G__47814.fqn:null);
switch (G__47814__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47810,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__47815){
var vec__47816 = p__47815;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47816,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47809){
var self__ = this;
var G__47809__$1 = this;
return (new cljs.core.RecordIter((0),G__47809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47811,other47812){
var self__ = this;
var this47811__$1 = this;
return (((!((other47812 == null)))) && ((((this47811__$1.constructor === other47812.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.w,other47812.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.h,other47812.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47811__$1.__extmap,other47812.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k47810){
var self__ = this;
var this__4479__auto____$1 = this;
var G__47819 = k47810;
var G__47819__$1 = (((G__47819 instanceof cljs.core.Keyword))?G__47819.fqn:null);
switch (G__47819__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47810);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__47809){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__47820 = cljs.core.keyword_identical_QMARK_;
var expr__47821 = k__4481__auto__;
if(cljs.core.truth_((pred__47820.cljs$core$IFn$_invoke$arity$2 ? pred__47820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47821) : pred__47820.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47821)))){
return (new shadow.dom.Size(G__47809,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47820.cljs$core$IFn$_invoke$arity$2 ? pred__47820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47821) : pred__47820.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47821)))){
return (new shadow.dom.Size(self__.w,G__47809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__47809),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__47809){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47813){
var extmap__4512__auto__ = (function (){var G__47823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47813,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47813)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47823);
} else {
return G__47823;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47813),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47813),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__48123 = (i + (1));
var G__48124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48123;
ret = G__48124;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47828){
var vec__47829 = p__47828;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47829,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47833 = arguments.length;
switch (G__47833) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48126 = ps;
var G__48127 = (i + (1));
el__$1 = G__48126;
i = G__48127;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47834,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47837_48130 = cljs.core.seq(props);
var chunk__47838_48131 = null;
var count__47839_48132 = (0);
var i__47840_48133 = (0);
while(true){
if((i__47840_48133 < count__47839_48132)){
var vec__47847_48134 = chunk__47838_48131.cljs$core$IIndexed$_nth$arity$2(null,i__47840_48133);
var k_48135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847_48134,(0),null);
var v_48136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847_48134,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48135);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48135),v_48136);


var G__48137 = seq__47837_48130;
var G__48138 = chunk__47838_48131;
var G__48139 = count__47839_48132;
var G__48140 = (i__47840_48133 + (1));
seq__47837_48130 = G__48137;
chunk__47838_48131 = G__48138;
count__47839_48132 = G__48139;
i__47840_48133 = G__48140;
continue;
} else {
var temp__5753__auto___48141 = cljs.core.seq(seq__47837_48130);
if(temp__5753__auto___48141){
var seq__47837_48142__$1 = temp__5753__auto___48141;
if(cljs.core.chunked_seq_QMARK_(seq__47837_48142__$1)){
var c__4649__auto___48143 = cljs.core.chunk_first(seq__47837_48142__$1);
var G__48144 = cljs.core.chunk_rest(seq__47837_48142__$1);
var G__48145 = c__4649__auto___48143;
var G__48146 = cljs.core.count(c__4649__auto___48143);
var G__48147 = (0);
seq__47837_48130 = G__48144;
chunk__47838_48131 = G__48145;
count__47839_48132 = G__48146;
i__47840_48133 = G__48147;
continue;
} else {
var vec__47850_48148 = cljs.core.first(seq__47837_48142__$1);
var k_48149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850_48148,(0),null);
var v_48150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47850_48148,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48149);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48149),v_48150);


var G__48151 = cljs.core.next(seq__47837_48142__$1);
var G__48152 = null;
var G__48153 = (0);
var G__48154 = (0);
seq__47837_48130 = G__48151;
chunk__47838_48131 = G__48152;
count__47839_48132 = G__48153;
i__47840_48133 = G__48154;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47854 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47854,(1),null);
var seq__47857_48155 = cljs.core.seq(node_children);
var chunk__47859_48156 = null;
var count__47860_48157 = (0);
var i__47861_48158 = (0);
while(true){
if((i__47861_48158 < count__47860_48157)){
var child_struct_48159 = chunk__47859_48156.cljs$core$IIndexed$_nth$arity$2(null,i__47861_48158);
if((!((child_struct_48159 == null)))){
if(typeof child_struct_48159 === 'string'){
var text_48160 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48160),child_struct_48159].join(''));
} else {
var children_48162 = shadow.dom.svg_node(child_struct_48159);
if(cljs.core.seq_QMARK_(children_48162)){
var seq__47875_48163 = cljs.core.seq(children_48162);
var chunk__47877_48164 = null;
var count__47878_48165 = (0);
var i__47879_48166 = (0);
while(true){
if((i__47879_48166 < count__47878_48165)){
var child_48167 = chunk__47877_48164.cljs$core$IIndexed$_nth$arity$2(null,i__47879_48166);
if(cljs.core.truth_(child_48167)){
node.appendChild(child_48167);


var G__48168 = seq__47875_48163;
var G__48169 = chunk__47877_48164;
var G__48170 = count__47878_48165;
var G__48171 = (i__47879_48166 + (1));
seq__47875_48163 = G__48168;
chunk__47877_48164 = G__48169;
count__47878_48165 = G__48170;
i__47879_48166 = G__48171;
continue;
} else {
var G__48172 = seq__47875_48163;
var G__48173 = chunk__47877_48164;
var G__48174 = count__47878_48165;
var G__48175 = (i__47879_48166 + (1));
seq__47875_48163 = G__48172;
chunk__47877_48164 = G__48173;
count__47878_48165 = G__48174;
i__47879_48166 = G__48175;
continue;
}
} else {
var temp__5753__auto___48176 = cljs.core.seq(seq__47875_48163);
if(temp__5753__auto___48176){
var seq__47875_48177__$1 = temp__5753__auto___48176;
if(cljs.core.chunked_seq_QMARK_(seq__47875_48177__$1)){
var c__4649__auto___48178 = cljs.core.chunk_first(seq__47875_48177__$1);
var G__48179 = cljs.core.chunk_rest(seq__47875_48177__$1);
var G__48180 = c__4649__auto___48178;
var G__48181 = cljs.core.count(c__4649__auto___48178);
var G__48182 = (0);
seq__47875_48163 = G__48179;
chunk__47877_48164 = G__48180;
count__47878_48165 = G__48181;
i__47879_48166 = G__48182;
continue;
} else {
var child_48183 = cljs.core.first(seq__47875_48177__$1);
if(cljs.core.truth_(child_48183)){
node.appendChild(child_48183);


var G__48184 = cljs.core.next(seq__47875_48177__$1);
var G__48185 = null;
var G__48186 = (0);
var G__48187 = (0);
seq__47875_48163 = G__48184;
chunk__47877_48164 = G__48185;
count__47878_48165 = G__48186;
i__47879_48166 = G__48187;
continue;
} else {
var G__48188 = cljs.core.next(seq__47875_48177__$1);
var G__48189 = null;
var G__48190 = (0);
var G__48191 = (0);
seq__47875_48163 = G__48188;
chunk__47877_48164 = G__48189;
count__47878_48165 = G__48190;
i__47879_48166 = G__48191;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48162);
}
}


var G__48192 = seq__47857_48155;
var G__48193 = chunk__47859_48156;
var G__48194 = count__47860_48157;
var G__48195 = (i__47861_48158 + (1));
seq__47857_48155 = G__48192;
chunk__47859_48156 = G__48193;
count__47860_48157 = G__48194;
i__47861_48158 = G__48195;
continue;
} else {
var G__48196 = seq__47857_48155;
var G__48197 = chunk__47859_48156;
var G__48198 = count__47860_48157;
var G__48199 = (i__47861_48158 + (1));
seq__47857_48155 = G__48196;
chunk__47859_48156 = G__48197;
count__47860_48157 = G__48198;
i__47861_48158 = G__48199;
continue;
}
} else {
var temp__5753__auto___48200 = cljs.core.seq(seq__47857_48155);
if(temp__5753__auto___48200){
var seq__47857_48201__$1 = temp__5753__auto___48200;
if(cljs.core.chunked_seq_QMARK_(seq__47857_48201__$1)){
var c__4649__auto___48202 = cljs.core.chunk_first(seq__47857_48201__$1);
var G__48206 = cljs.core.chunk_rest(seq__47857_48201__$1);
var G__48207 = c__4649__auto___48202;
var G__48208 = cljs.core.count(c__4649__auto___48202);
var G__48209 = (0);
seq__47857_48155 = G__48206;
chunk__47859_48156 = G__48207;
count__47860_48157 = G__48208;
i__47861_48158 = G__48209;
continue;
} else {
var child_struct_48210 = cljs.core.first(seq__47857_48201__$1);
if((!((child_struct_48210 == null)))){
if(typeof child_struct_48210 === 'string'){
var text_48212 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48212),child_struct_48210].join(''));
} else {
var children_48213 = shadow.dom.svg_node(child_struct_48210);
if(cljs.core.seq_QMARK_(children_48213)){
var seq__47881_48215 = cljs.core.seq(children_48213);
var chunk__47883_48216 = null;
var count__47884_48217 = (0);
var i__47885_48218 = (0);
while(true){
if((i__47885_48218 < count__47884_48217)){
var child_48219 = chunk__47883_48216.cljs$core$IIndexed$_nth$arity$2(null,i__47885_48218);
if(cljs.core.truth_(child_48219)){
node.appendChild(child_48219);


var G__48220 = seq__47881_48215;
var G__48221 = chunk__47883_48216;
var G__48222 = count__47884_48217;
var G__48223 = (i__47885_48218 + (1));
seq__47881_48215 = G__48220;
chunk__47883_48216 = G__48221;
count__47884_48217 = G__48222;
i__47885_48218 = G__48223;
continue;
} else {
var G__48224 = seq__47881_48215;
var G__48225 = chunk__47883_48216;
var G__48226 = count__47884_48217;
var G__48227 = (i__47885_48218 + (1));
seq__47881_48215 = G__48224;
chunk__47883_48216 = G__48225;
count__47884_48217 = G__48226;
i__47885_48218 = G__48227;
continue;
}
} else {
var temp__5753__auto___48228__$1 = cljs.core.seq(seq__47881_48215);
if(temp__5753__auto___48228__$1){
var seq__47881_48229__$1 = temp__5753__auto___48228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47881_48229__$1)){
var c__4649__auto___48230 = cljs.core.chunk_first(seq__47881_48229__$1);
var G__48231 = cljs.core.chunk_rest(seq__47881_48229__$1);
var G__48232 = c__4649__auto___48230;
var G__48233 = cljs.core.count(c__4649__auto___48230);
var G__48234 = (0);
seq__47881_48215 = G__48231;
chunk__47883_48216 = G__48232;
count__47884_48217 = G__48233;
i__47885_48218 = G__48234;
continue;
} else {
var child_48235 = cljs.core.first(seq__47881_48229__$1);
if(cljs.core.truth_(child_48235)){
node.appendChild(child_48235);


var G__48236 = cljs.core.next(seq__47881_48229__$1);
var G__48237 = null;
var G__48238 = (0);
var G__48239 = (0);
seq__47881_48215 = G__48236;
chunk__47883_48216 = G__48237;
count__47884_48217 = G__48238;
i__47885_48218 = G__48239;
continue;
} else {
var G__48240 = cljs.core.next(seq__47881_48229__$1);
var G__48241 = null;
var G__48242 = (0);
var G__48243 = (0);
seq__47881_48215 = G__48240;
chunk__47883_48216 = G__48241;
count__47884_48217 = G__48242;
i__47885_48218 = G__48243;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48213);
}
}


var G__48244 = cljs.core.next(seq__47857_48201__$1);
var G__48245 = null;
var G__48246 = (0);
var G__48247 = (0);
seq__47857_48155 = G__48244;
chunk__47859_48156 = G__48245;
count__47860_48157 = G__48246;
i__47861_48158 = G__48247;
continue;
} else {
var G__48248 = cljs.core.next(seq__47857_48201__$1);
var G__48249 = null;
var G__48250 = (0);
var G__48251 = (0);
seq__47857_48155 = G__48248;
chunk__47859_48156 = G__48249;
count__47860_48157 = G__48250;
i__47861_48158 = G__48251;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48255 = arguments.length;
var i__4830__auto___48256 = (0);
while(true){
if((i__4830__auto___48256 < len__4829__auto___48255)){
args__4835__auto__.push((arguments[i__4830__auto___48256]));

var G__48257 = (i__4830__auto___48256 + (1));
i__4830__auto___48256 = G__48257;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47887){
var G__47888 = cljs.core.first(seq47887);
var seq47887__$1 = cljs.core.next(seq47887);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47888,seq47887__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47890 = arguments.length;
switch (G__47890) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__45586__auto___48263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_47895){
var state_val_47896 = (state_47895[(1)]);
if((state_val_47896 === (1))){
var state_47895__$1 = state_47895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47895__$1,(2),once_or_cleanup);
} else {
if((state_val_47896 === (2))){
var inst_47892 = (state_47895[(2)]);
var inst_47893 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47895__$1 = (function (){var statearr_47897 = state_47895;
(statearr_47897[(7)] = inst_47892);

return statearr_47897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47895__$1,inst_47893);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45289__auto__ = null;
var shadow$dom$state_machine__45289__auto____0 = (function (){
var statearr_47898 = [null,null,null,null,null,null,null,null];
(statearr_47898[(0)] = shadow$dom$state_machine__45289__auto__);

(statearr_47898[(1)] = (1));

return statearr_47898;
});
var shadow$dom$state_machine__45289__auto____1 = (function (state_47895){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_47895);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e47899){var ex__45292__auto__ = e47899;
var statearr_47900_48264 = state_47895;
(statearr_47900_48264[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_47895[(4)]))){
var statearr_47901_48265 = state_47895;
(statearr_47901_48265[(1)] = cljs.core.first((state_47895[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48266 = state_47895;
state_47895 = G__48266;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
shadow$dom$state_machine__45289__auto__ = function(state_47895){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45289__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45289__auto____1.call(this,state_47895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45289__auto____0;
shadow$dom$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45289__auto____1;
return shadow$dom$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_47902 = f__45587__auto__();
(statearr_47902[(6)] = c__45586__auto___48263);

return statearr_47902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
