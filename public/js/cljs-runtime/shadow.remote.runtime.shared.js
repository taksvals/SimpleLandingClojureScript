goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48704,res){
var map__48709 = p__48704;
var map__48709__$1 = cljs.core.__destructure_map(map__48709);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48710 = res;
var G__48710__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48710,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48710);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48710__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48710__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48712 = arguments.length;
switch (G__48712) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48713,msg,handlers,timeout_after_ms){
var map__48714 = p__48713;
var map__48714__$1 = cljs.core.__destructure_map(map__48714);
var runtime = map__48714__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48881 = arguments.length;
var i__4830__auto___48882 = (0);
while(true){
if((i__4830__auto___48882 < len__4829__auto___48881)){
args__4835__auto__.push((arguments[i__4830__auto___48882]));

var G__48883 = (i__4830__auto___48882 + (1));
i__4830__auto___48882 = G__48883;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48722,ev,args){
var map__48723 = p__48722;
var map__48723__$1 = cljs.core.__destructure_map(map__48723);
var runtime = map__48723__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48723__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48724 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48727 = null;
var count__48728 = (0);
var i__48729 = (0);
while(true){
if((i__48729 < count__48728)){
var ext = chunk__48727.cljs$core$IIndexed$_nth$arity$2(null,i__48729);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48884 = seq__48724;
var G__48885 = chunk__48727;
var G__48886 = count__48728;
var G__48887 = (i__48729 + (1));
seq__48724 = G__48884;
chunk__48727 = G__48885;
count__48728 = G__48886;
i__48729 = G__48887;
continue;
} else {
var G__48888 = seq__48724;
var G__48889 = chunk__48727;
var G__48890 = count__48728;
var G__48891 = (i__48729 + (1));
seq__48724 = G__48888;
chunk__48727 = G__48889;
count__48728 = G__48890;
i__48729 = G__48891;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48724);
if(temp__5753__auto__){
var seq__48724__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48724__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48724__$1);
var G__48892 = cljs.core.chunk_rest(seq__48724__$1);
var G__48893 = c__4649__auto__;
var G__48894 = cljs.core.count(c__4649__auto__);
var G__48895 = (0);
seq__48724 = G__48892;
chunk__48727 = G__48893;
count__48728 = G__48894;
i__48729 = G__48895;
continue;
} else {
var ext = cljs.core.first(seq__48724__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48896 = cljs.core.next(seq__48724__$1);
var G__48897 = null;
var G__48898 = (0);
var G__48899 = (0);
seq__48724 = G__48896;
chunk__48727 = G__48897;
count__48728 = G__48898;
i__48729 = G__48899;
continue;
} else {
var G__48900 = cljs.core.next(seq__48724__$1);
var G__48901 = null;
var G__48902 = (0);
var G__48903 = (0);
seq__48724 = G__48900;
chunk__48727 = G__48901;
count__48728 = G__48902;
i__48729 = G__48903;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48716){
var G__48717 = cljs.core.first(seq48716);
var seq48716__$1 = cljs.core.next(seq48716);
var G__48718 = cljs.core.first(seq48716__$1);
var seq48716__$2 = cljs.core.next(seq48716__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48717,G__48718,seq48716__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48745,p__48746){
var map__48748 = p__48745;
var map__48748__$1 = cljs.core.__destructure_map(map__48748);
var runtime = map__48748__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48749 = p__48746;
var map__48749__$1 = cljs.core.__destructure_map(map__48749);
var msg = map__48749__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48749__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48755 = cljs.core.deref(state_ref);
var map__48755__$1 = cljs.core.__destructure_map(map__48755);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48755__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48757){
var map__48761 = p__48757;
var map__48761__$1 = cljs.core.__destructure_map(map__48761);
var runtime = map__48761__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48763,msg){
var map__48764 = p__48763;
var map__48764__$1 = cljs.core.__destructure_map(map__48764);
var runtime = map__48764__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48764__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48765,key,p__48766){
var map__48775 = p__48765;
var map__48775__$1 = cljs.core.__destructure_map(map__48775);
var state = map__48775__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48775__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48776 = p__48766;
var map__48776__$1 = cljs.core.__destructure_map(map__48776);
var spec = map__48776__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48776__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48778,key,spec){
var map__48780 = p__48778;
var map__48780__$1 = cljs.core.__destructure_map(map__48780);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48780__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48783_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48783_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48784_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48784_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48785_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48785_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48786_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48786_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48788_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48788_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48797,key){
var map__48799 = p__48797;
var map__48799__$1 = cljs.core.__destructure_map(map__48799);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48816,msg){
var map__48821 = p__48816;
var map__48821__$1 = cljs.core.__destructure_map(map__48821);
var runtime = map__48821__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48821__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48833,p__48834){
var map__48835 = p__48833;
var map__48835__$1 = cljs.core.__destructure_map(map__48835);
var runtime = map__48835__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48835__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48836 = p__48834;
var map__48836__$1 = cljs.core.__destructure_map(map__48836);
var msg = map__48836__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48836__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48836__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48841 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48843 = null;
var count__48844 = (0);
var i__48845 = (0);
while(true){
if((i__48845 < count__48844)){
var map__48873 = chunk__48843.cljs$core$IIndexed$_nth$arity$2(null,i__48845);
var map__48873__$1 = cljs.core.__destructure_map(map__48873);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48873__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48961 = seq__48841;
var G__48962 = chunk__48843;
var G__48963 = count__48844;
var G__48964 = (i__48845 + (1));
seq__48841 = G__48961;
chunk__48843 = G__48962;
count__48844 = G__48963;
i__48845 = G__48964;
continue;
} else {
var G__48965 = seq__48841;
var G__48966 = chunk__48843;
var G__48967 = count__48844;
var G__48968 = (i__48845 + (1));
seq__48841 = G__48965;
chunk__48843 = G__48966;
count__48844 = G__48967;
i__48845 = G__48968;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48841);
if(temp__5753__auto__){
var seq__48841__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48841__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48841__$1);
var G__48969 = cljs.core.chunk_rest(seq__48841__$1);
var G__48970 = c__4649__auto__;
var G__48971 = cljs.core.count(c__4649__auto__);
var G__48972 = (0);
seq__48841 = G__48969;
chunk__48843 = G__48970;
count__48844 = G__48971;
i__48845 = G__48972;
continue;
} else {
var map__48874 = cljs.core.first(seq__48841__$1);
var map__48874__$1 = cljs.core.__destructure_map(map__48874);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48874__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48973 = cljs.core.next(seq__48841__$1);
var G__48974 = null;
var G__48975 = (0);
var G__48976 = (0);
seq__48841 = G__48973;
chunk__48843 = G__48974;
count__48844 = G__48975;
i__48845 = G__48976;
continue;
} else {
var G__48977 = cljs.core.next(seq__48841__$1);
var G__48978 = null;
var G__48979 = (0);
var G__48980 = (0);
seq__48841 = G__48977;
chunk__48843 = G__48978;
count__48844 = G__48979;
i__48845 = G__48980;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
