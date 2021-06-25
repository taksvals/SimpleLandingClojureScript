goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50649 = arguments.length;
var i__4830__auto___50650 = (0);
while(true){
if((i__4830__auto___50650 < len__4829__auto___50649)){
args__4835__auto__.push((arguments[i__4830__auto___50650]));

var G__50651 = (i__4830__auto___50650 + (1));
i__4830__auto___50650 = G__50651;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50518){
var G__50519 = cljs.core.first(seq50518);
var seq50518__$1 = cljs.core.next(seq50518);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50519,seq50518__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__50522 = cljs.core.seq(sources);
var chunk__50523 = null;
var count__50524 = (0);
var i__50525 = (0);
while(true){
if((i__50525 < count__50524)){
var map__50534 = chunk__50523.cljs$core$IIndexed$_nth$arity$2(null,i__50525);
var map__50534__$1 = cljs.core.__destructure_map(map__50534);
var src = map__50534__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50534__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50536){var e_50652 = e50536;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50652);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50652.message)].join('')));
}

var G__50653 = seq__50522;
var G__50654 = chunk__50523;
var G__50655 = count__50524;
var G__50656 = (i__50525 + (1));
seq__50522 = G__50653;
chunk__50523 = G__50654;
count__50524 = G__50655;
i__50525 = G__50656;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50522);
if(temp__5753__auto__){
var seq__50522__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50522__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50522__$1);
var G__50657 = cljs.core.chunk_rest(seq__50522__$1);
var G__50658 = c__4649__auto__;
var G__50659 = cljs.core.count(c__4649__auto__);
var G__50660 = (0);
seq__50522 = G__50657;
chunk__50523 = G__50658;
count__50524 = G__50659;
i__50525 = G__50660;
continue;
} else {
var map__50537 = cljs.core.first(seq__50522__$1);
var map__50537__$1 = cljs.core.__destructure_map(map__50537);
var src = map__50537__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e50538){var e_50661 = e50538;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50661);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50661.message)].join('')));
}

var G__50662 = cljs.core.next(seq__50522__$1);
var G__50663 = null;
var G__50664 = (0);
var G__50665 = (0);
seq__50522 = G__50662;
chunk__50523 = G__50663;
count__50524 = G__50664;
i__50525 = G__50665;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__50539 = cljs.core.seq(js_requires);
var chunk__50540 = null;
var count__50541 = (0);
var i__50542 = (0);
while(true){
if((i__50542 < count__50541)){
var js_ns = chunk__50540.cljs$core$IIndexed$_nth$arity$2(null,i__50542);
var require_str_50666 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50666);


var G__50667 = seq__50539;
var G__50668 = chunk__50540;
var G__50669 = count__50541;
var G__50670 = (i__50542 + (1));
seq__50539 = G__50667;
chunk__50540 = G__50668;
count__50541 = G__50669;
i__50542 = G__50670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50539);
if(temp__5753__auto__){
var seq__50539__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50539__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50539__$1);
var G__50671 = cljs.core.chunk_rest(seq__50539__$1);
var G__50672 = c__4649__auto__;
var G__50673 = cljs.core.count(c__4649__auto__);
var G__50674 = (0);
seq__50539 = G__50671;
chunk__50540 = G__50672;
count__50541 = G__50673;
i__50542 = G__50674;
continue;
} else {
var js_ns = cljs.core.first(seq__50539__$1);
var require_str_50675 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50675);


var G__50676 = cljs.core.next(seq__50539__$1);
var G__50677 = null;
var G__50678 = (0);
var G__50679 = (0);
seq__50539 = G__50676;
chunk__50540 = G__50677;
count__50541 = G__50678;
i__50542 = G__50679;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__50546){
var map__50547 = p__50546;
var map__50547__$1 = cljs.core.__destructure_map(map__50547);
var msg = map__50547__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50547__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50548(s__50549){
return (new cljs.core.LazySeq(null,(function (){
var s__50549__$1 = s__50549;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50549__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__50554 = cljs.core.first(xs__6308__auto__);
var map__50554__$1 = cljs.core.__destructure_map(map__50554);
var src = map__50554__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50554__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__50549__$1,map__50554,map__50554__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50547,map__50547__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50548_$_iter__50550(s__50551){
return (new cljs.core.LazySeq(null,((function (s__50549__$1,map__50554,map__50554__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50547,map__50547__$1,msg,info,reload_info){
return (function (){
var s__50551__$1 = s__50551;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50551__$1);
if(temp__5753__auto____$1){
var s__50551__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50551__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__50551__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__50553 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__50552 = (0);
while(true){
if((i__50552 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__50552);
cljs.core.chunk_append(b__50553,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50680 = (i__50552 + (1));
i__50552 = G__50680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50553),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50548_$_iter__50550(cljs.core.chunk_rest(s__50551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50553),null);
}
} else {
var warning = cljs.core.first(s__50551__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50548_$_iter__50550(cljs.core.rest(s__50551__$2)));
}
} else {
return null;
}
break;
}
});})(s__50549__$1,map__50554,map__50554__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50547,map__50547__$1,msg,info,reload_info))
,null,null));
});})(s__50549__$1,map__50554,map__50554__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__50547,map__50547__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50548(cljs.core.rest(s__50549__$1)));
} else {
var G__50681 = cljs.core.rest(s__50549__$1);
s__50549__$1 = G__50681;
continue;
}
} else {
var G__50682 = cljs.core.rest(s__50549__$1);
s__50549__$1 = G__50682;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__50555_50683 = cljs.core.seq(warnings);
var chunk__50556_50684 = null;
var count__50557_50685 = (0);
var i__50558_50686 = (0);
while(true){
if((i__50558_50686 < count__50557_50685)){
var map__50561_50687 = chunk__50556_50684.cljs$core$IIndexed$_nth$arity$2(null,i__50558_50686);
var map__50561_50688__$1 = cljs.core.__destructure_map(map__50561_50687);
var w_50689 = map__50561_50688__$1;
var msg_50690__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561_50688__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561_50688__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561_50688__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50561_50688__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50693)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50691),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50692),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50690__$1)].join(''));


var G__50694 = seq__50555_50683;
var G__50695 = chunk__50556_50684;
var G__50696 = count__50557_50685;
var G__50697 = (i__50558_50686 + (1));
seq__50555_50683 = G__50694;
chunk__50556_50684 = G__50695;
count__50557_50685 = G__50696;
i__50558_50686 = G__50697;
continue;
} else {
var temp__5753__auto___50698 = cljs.core.seq(seq__50555_50683);
if(temp__5753__auto___50698){
var seq__50555_50699__$1 = temp__5753__auto___50698;
if(cljs.core.chunked_seq_QMARK_(seq__50555_50699__$1)){
var c__4649__auto___50700 = cljs.core.chunk_first(seq__50555_50699__$1);
var G__50701 = cljs.core.chunk_rest(seq__50555_50699__$1);
var G__50702 = c__4649__auto___50700;
var G__50703 = cljs.core.count(c__4649__auto___50700);
var G__50704 = (0);
seq__50555_50683 = G__50701;
chunk__50556_50684 = G__50702;
count__50557_50685 = G__50703;
i__50558_50686 = G__50704;
continue;
} else {
var map__50562_50705 = cljs.core.first(seq__50555_50699__$1);
var map__50562_50706__$1 = cljs.core.__destructure_map(map__50562_50705);
var w_50707 = map__50562_50706__$1;
var msg_50708__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562_50706__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562_50706__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562_50706__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50562_50706__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50711)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50709),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50710),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50708__$1)].join(''));


var G__50712 = cljs.core.next(seq__50555_50699__$1);
var G__50713 = null;
var G__50714 = (0);
var G__50715 = (0);
seq__50555_50683 = G__50712;
chunk__50556_50684 = G__50713;
count__50557_50685 = G__50714;
i__50558_50686 = G__50715;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__50545_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50545_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__50563){
var map__50564 = p__50563;
var map__50564__$1 = cljs.core.__destructure_map(map__50564);
var msg = map__50564__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50564__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50565 = cljs.core.seq(updates);
var chunk__50567 = null;
var count__50568 = (0);
var i__50569 = (0);
while(true){
if((i__50569 < count__50568)){
var path = chunk__50567.cljs$core$IIndexed$_nth$arity$2(null,i__50569);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50599_50716 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50603_50717 = null;
var count__50604_50718 = (0);
var i__50605_50719 = (0);
while(true){
if((i__50605_50719 < count__50604_50718)){
var node_50720 = chunk__50603_50717.cljs$core$IIndexed$_nth$arity$2(null,i__50605_50719);
if(cljs.core.not(node_50720.shadow$old)){
var path_match_50721 = shadow.cljs.devtools.client.browser.match_paths(node_50720.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50721)){
var new_link_50722 = (function (){var G__50611 = node_50720.cloneNode(true);
G__50611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50721),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50611;
})();
(node_50720.shadow$old = true);

(new_link_50722.onload = ((function (seq__50599_50716,chunk__50603_50717,count__50604_50718,i__50605_50719,seq__50565,chunk__50567,count__50568,i__50569,new_link_50722,path_match_50721,node_50720,path,map__50564,map__50564__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50720);
});})(seq__50599_50716,chunk__50603_50717,count__50604_50718,i__50605_50719,seq__50565,chunk__50567,count__50568,i__50569,new_link_50722,path_match_50721,node_50720,path,map__50564,map__50564__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50721], 0));

goog.dom.insertSiblingAfter(new_link_50722,node_50720);


var G__50723 = seq__50599_50716;
var G__50724 = chunk__50603_50717;
var G__50725 = count__50604_50718;
var G__50726 = (i__50605_50719 + (1));
seq__50599_50716 = G__50723;
chunk__50603_50717 = G__50724;
count__50604_50718 = G__50725;
i__50605_50719 = G__50726;
continue;
} else {
var G__50727 = seq__50599_50716;
var G__50728 = chunk__50603_50717;
var G__50729 = count__50604_50718;
var G__50730 = (i__50605_50719 + (1));
seq__50599_50716 = G__50727;
chunk__50603_50717 = G__50728;
count__50604_50718 = G__50729;
i__50605_50719 = G__50730;
continue;
}
} else {
var G__50731 = seq__50599_50716;
var G__50732 = chunk__50603_50717;
var G__50733 = count__50604_50718;
var G__50734 = (i__50605_50719 + (1));
seq__50599_50716 = G__50731;
chunk__50603_50717 = G__50732;
count__50604_50718 = G__50733;
i__50605_50719 = G__50734;
continue;
}
} else {
var temp__5753__auto___50735 = cljs.core.seq(seq__50599_50716);
if(temp__5753__auto___50735){
var seq__50599_50736__$1 = temp__5753__auto___50735;
if(cljs.core.chunked_seq_QMARK_(seq__50599_50736__$1)){
var c__4649__auto___50737 = cljs.core.chunk_first(seq__50599_50736__$1);
var G__50738 = cljs.core.chunk_rest(seq__50599_50736__$1);
var G__50739 = c__4649__auto___50737;
var G__50740 = cljs.core.count(c__4649__auto___50737);
var G__50741 = (0);
seq__50599_50716 = G__50738;
chunk__50603_50717 = G__50739;
count__50604_50718 = G__50740;
i__50605_50719 = G__50741;
continue;
} else {
var node_50742 = cljs.core.first(seq__50599_50736__$1);
if(cljs.core.not(node_50742.shadow$old)){
var path_match_50743 = shadow.cljs.devtools.client.browser.match_paths(node_50742.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50743)){
var new_link_50744 = (function (){var G__50612 = node_50742.cloneNode(true);
G__50612.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50743),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50612;
})();
(node_50742.shadow$old = true);

(new_link_50744.onload = ((function (seq__50599_50716,chunk__50603_50717,count__50604_50718,i__50605_50719,seq__50565,chunk__50567,count__50568,i__50569,new_link_50744,path_match_50743,node_50742,seq__50599_50736__$1,temp__5753__auto___50735,path,map__50564,map__50564__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50742);
});})(seq__50599_50716,chunk__50603_50717,count__50604_50718,i__50605_50719,seq__50565,chunk__50567,count__50568,i__50569,new_link_50744,path_match_50743,node_50742,seq__50599_50736__$1,temp__5753__auto___50735,path,map__50564,map__50564__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50743], 0));

goog.dom.insertSiblingAfter(new_link_50744,node_50742);


var G__50745 = cljs.core.next(seq__50599_50736__$1);
var G__50746 = null;
var G__50747 = (0);
var G__50748 = (0);
seq__50599_50716 = G__50745;
chunk__50603_50717 = G__50746;
count__50604_50718 = G__50747;
i__50605_50719 = G__50748;
continue;
} else {
var G__50749 = cljs.core.next(seq__50599_50736__$1);
var G__50750 = null;
var G__50751 = (0);
var G__50752 = (0);
seq__50599_50716 = G__50749;
chunk__50603_50717 = G__50750;
count__50604_50718 = G__50751;
i__50605_50719 = G__50752;
continue;
}
} else {
var G__50753 = cljs.core.next(seq__50599_50736__$1);
var G__50754 = null;
var G__50755 = (0);
var G__50756 = (0);
seq__50599_50716 = G__50753;
chunk__50603_50717 = G__50754;
count__50604_50718 = G__50755;
i__50605_50719 = G__50756;
continue;
}
}
} else {
}
}
break;
}


var G__50757 = seq__50565;
var G__50758 = chunk__50567;
var G__50759 = count__50568;
var G__50760 = (i__50569 + (1));
seq__50565 = G__50757;
chunk__50567 = G__50758;
count__50568 = G__50759;
i__50569 = G__50760;
continue;
} else {
var G__50761 = seq__50565;
var G__50762 = chunk__50567;
var G__50763 = count__50568;
var G__50764 = (i__50569 + (1));
seq__50565 = G__50761;
chunk__50567 = G__50762;
count__50568 = G__50763;
i__50569 = G__50764;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50565);
if(temp__5753__auto__){
var seq__50565__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50565__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50565__$1);
var G__50765 = cljs.core.chunk_rest(seq__50565__$1);
var G__50766 = c__4649__auto__;
var G__50767 = cljs.core.count(c__4649__auto__);
var G__50768 = (0);
seq__50565 = G__50765;
chunk__50567 = G__50766;
count__50568 = G__50767;
i__50569 = G__50768;
continue;
} else {
var path = cljs.core.first(seq__50565__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50613_50769 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50617_50770 = null;
var count__50618_50771 = (0);
var i__50619_50772 = (0);
while(true){
if((i__50619_50772 < count__50618_50771)){
var node_50773 = chunk__50617_50770.cljs$core$IIndexed$_nth$arity$2(null,i__50619_50772);
if(cljs.core.not(node_50773.shadow$old)){
var path_match_50774 = shadow.cljs.devtools.client.browser.match_paths(node_50773.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50774)){
var new_link_50775 = (function (){var G__50625 = node_50773.cloneNode(true);
G__50625.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50774),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50625;
})();
(node_50773.shadow$old = true);

(new_link_50775.onload = ((function (seq__50613_50769,chunk__50617_50770,count__50618_50771,i__50619_50772,seq__50565,chunk__50567,count__50568,i__50569,new_link_50775,path_match_50774,node_50773,path,seq__50565__$1,temp__5753__auto__,map__50564,map__50564__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50773);
});})(seq__50613_50769,chunk__50617_50770,count__50618_50771,i__50619_50772,seq__50565,chunk__50567,count__50568,i__50569,new_link_50775,path_match_50774,node_50773,path,seq__50565__$1,temp__5753__auto__,map__50564,map__50564__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50774], 0));

goog.dom.insertSiblingAfter(new_link_50775,node_50773);


var G__50776 = seq__50613_50769;
var G__50777 = chunk__50617_50770;
var G__50778 = count__50618_50771;
var G__50779 = (i__50619_50772 + (1));
seq__50613_50769 = G__50776;
chunk__50617_50770 = G__50777;
count__50618_50771 = G__50778;
i__50619_50772 = G__50779;
continue;
} else {
var G__50780 = seq__50613_50769;
var G__50781 = chunk__50617_50770;
var G__50782 = count__50618_50771;
var G__50783 = (i__50619_50772 + (1));
seq__50613_50769 = G__50780;
chunk__50617_50770 = G__50781;
count__50618_50771 = G__50782;
i__50619_50772 = G__50783;
continue;
}
} else {
var G__50784 = seq__50613_50769;
var G__50785 = chunk__50617_50770;
var G__50786 = count__50618_50771;
var G__50787 = (i__50619_50772 + (1));
seq__50613_50769 = G__50784;
chunk__50617_50770 = G__50785;
count__50618_50771 = G__50786;
i__50619_50772 = G__50787;
continue;
}
} else {
var temp__5753__auto___50788__$1 = cljs.core.seq(seq__50613_50769);
if(temp__5753__auto___50788__$1){
var seq__50613_50789__$1 = temp__5753__auto___50788__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50613_50789__$1)){
var c__4649__auto___50790 = cljs.core.chunk_first(seq__50613_50789__$1);
var G__50791 = cljs.core.chunk_rest(seq__50613_50789__$1);
var G__50792 = c__4649__auto___50790;
var G__50793 = cljs.core.count(c__4649__auto___50790);
var G__50794 = (0);
seq__50613_50769 = G__50791;
chunk__50617_50770 = G__50792;
count__50618_50771 = G__50793;
i__50619_50772 = G__50794;
continue;
} else {
var node_50795 = cljs.core.first(seq__50613_50789__$1);
if(cljs.core.not(node_50795.shadow$old)){
var path_match_50796 = shadow.cljs.devtools.client.browser.match_paths(node_50795.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50796)){
var new_link_50797 = (function (){var G__50626 = node_50795.cloneNode(true);
G__50626.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50796),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50626;
})();
(node_50795.shadow$old = true);

(new_link_50797.onload = ((function (seq__50613_50769,chunk__50617_50770,count__50618_50771,i__50619_50772,seq__50565,chunk__50567,count__50568,i__50569,new_link_50797,path_match_50796,node_50795,seq__50613_50789__$1,temp__5753__auto___50788__$1,path,seq__50565__$1,temp__5753__auto__,map__50564,map__50564__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_50795);
});})(seq__50613_50769,chunk__50617_50770,count__50618_50771,i__50619_50772,seq__50565,chunk__50567,count__50568,i__50569,new_link_50797,path_match_50796,node_50795,seq__50613_50789__$1,temp__5753__auto___50788__$1,path,seq__50565__$1,temp__5753__auto__,map__50564,map__50564__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50796], 0));

goog.dom.insertSiblingAfter(new_link_50797,node_50795);


var G__50798 = cljs.core.next(seq__50613_50789__$1);
var G__50799 = null;
var G__50800 = (0);
var G__50801 = (0);
seq__50613_50769 = G__50798;
chunk__50617_50770 = G__50799;
count__50618_50771 = G__50800;
i__50619_50772 = G__50801;
continue;
} else {
var G__50802 = cljs.core.next(seq__50613_50789__$1);
var G__50803 = null;
var G__50804 = (0);
var G__50805 = (0);
seq__50613_50769 = G__50802;
chunk__50617_50770 = G__50803;
count__50618_50771 = G__50804;
i__50619_50772 = G__50805;
continue;
}
} else {
var G__50806 = cljs.core.next(seq__50613_50789__$1);
var G__50807 = null;
var G__50808 = (0);
var G__50809 = (0);
seq__50613_50769 = G__50806;
chunk__50617_50770 = G__50807;
count__50618_50771 = G__50808;
i__50619_50772 = G__50809;
continue;
}
}
} else {
}
}
break;
}


var G__50810 = cljs.core.next(seq__50565__$1);
var G__50811 = null;
var G__50812 = (0);
var G__50813 = (0);
seq__50565 = G__50810;
chunk__50567 = G__50811;
count__50568 = G__50812;
i__50569 = G__50813;
continue;
} else {
var G__50814 = cljs.core.next(seq__50565__$1);
var G__50815 = null;
var G__50816 = (0);
var G__50817 = (0);
seq__50565 = G__50814;
chunk__50567 = G__50815;
count__50568 = G__50816;
i__50569 = G__50817;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50627){
var map__50628 = p__50627;
var map__50628__$1 = cljs.core.__destructure_map(map__50628);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50628__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50629){
var map__50630 = p__50629;
var map__50630__$1 = cljs.core.__destructure_map(map__50630);
var _ = map__50630__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50631,done,error){
var map__50632 = p__50631;
var map__50632__$1 = cljs.core.__destructure_map(map__50632);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50632__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50633,done,error){
var map__50634 = p__50633;
var map__50634__$1 = cljs.core.__destructure_map(map__50634);
var msg = map__50634__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50634__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50635){
var map__50636 = p__50635;
var map__50636__$1 = cljs.core.__destructure_map(map__50636);
var src = map__50636__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50637 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50637) : done.call(null,G__50637));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50638){
var map__50639 = p__50638;
var map__50639__$1 = cljs.core.__destructure_map(map__50639);
var msg__$1 = map__50639__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50639__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50640){var ex = e50640;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50641){
var map__50642 = p__50641;
var map__50642__$1 = cljs.core.__destructure_map(map__50642);
var env = map__50642__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50642__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__50643){
var map__50644 = p__50643;
var map__50644__$1 = cljs.core.__destructure_map(map__50644);
var msg = map__50644__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50644__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50645){
var map__50646 = p__50645;
var map__50646__$1 = cljs.core.__destructure_map(map__50646);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50646__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50646__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50647){
var map__50648 = p__50647;
var map__50648__$1 = cljs.core.__destructure_map(map__50648);
var svc = map__50648__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50648__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
