goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50279,p__50280){
var map__50281 = p__50279;
var map__50281__$1 = cljs.core.__destructure_map(map__50281);
var svc = map__50281__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50281__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50282 = p__50280;
var map__50282__$1 = cljs.core.__destructure_map(map__50282);
var msg = map__50282__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50282__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50292,p__50293){
var map__50294 = p__50292;
var map__50294__$1 = cljs.core.__destructure_map(map__50294);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50294__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50295 = p__50293;
var map__50295__$1 = cljs.core.__destructure_map(map__50295);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50295__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50303,p__50304){
var map__50305 = p__50303;
var map__50305__$1 = cljs.core.__destructure_map(map__50305);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50305__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50305__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50306 = p__50304;
var map__50306__$1 = cljs.core.__destructure_map(map__50306);
var msg = map__50306__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50306__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50307,tid){
var map__50313 = p__50307;
var map__50313__$1 = cljs.core.__destructure_map(map__50313);
var svc = map__50313__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50313__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50322 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50323 = null;
var count__50324 = (0);
var i__50325 = (0);
while(true){
if((i__50325 < count__50324)){
var vec__50342 = chunk__50323.cljs$core$IIndexed$_nth$arity$2(null,i__50325);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50342,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50342,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50356 = seq__50322;
var G__50357 = chunk__50323;
var G__50358 = count__50324;
var G__50359 = (i__50325 + (1));
seq__50322 = G__50356;
chunk__50323 = G__50357;
count__50324 = G__50358;
i__50325 = G__50359;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50322);
if(temp__5753__auto__){
var seq__50322__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50322__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50322__$1);
var G__50360 = cljs.core.chunk_rest(seq__50322__$1);
var G__50361 = c__4649__auto__;
var G__50362 = cljs.core.count(c__4649__auto__);
var G__50363 = (0);
seq__50322 = G__50360;
chunk__50323 = G__50361;
count__50324 = G__50362;
i__50325 = G__50363;
continue;
} else {
var vec__50345 = cljs.core.first(seq__50322__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50345,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50345,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50364 = cljs.core.next(seq__50322__$1);
var G__50365 = null;
var G__50366 = (0);
var G__50367 = (0);
seq__50322 = G__50364;
chunk__50323 = G__50365;
count__50324 = G__50366;
i__50325 = G__50367;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50317_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50317_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50318_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50318_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50319_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50319_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50320_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50320_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50349){
var map__50350 = p__50349;
var map__50350__$1 = cljs.core.__destructure_map(map__50350);
var svc = map__50350__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50350__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50350__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
