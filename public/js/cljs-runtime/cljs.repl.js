goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49844){
var map__49845 = p__49844;
var map__49845__$1 = cljs.core.__destructure_map(map__49845);
var m = map__49845__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49846_50053 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49847_50054 = null;
var count__49848_50055 = (0);
var i__49849_50056 = (0);
while(true){
if((i__49849_50056 < count__49848_50055)){
var f_50057 = chunk__49847_50054.cljs$core$IIndexed$_nth$arity$2(null,i__49849_50056);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50057], 0));


var G__50058 = seq__49846_50053;
var G__50059 = chunk__49847_50054;
var G__50060 = count__49848_50055;
var G__50061 = (i__49849_50056 + (1));
seq__49846_50053 = G__50058;
chunk__49847_50054 = G__50059;
count__49848_50055 = G__50060;
i__49849_50056 = G__50061;
continue;
} else {
var temp__5753__auto___50062 = cljs.core.seq(seq__49846_50053);
if(temp__5753__auto___50062){
var seq__49846_50063__$1 = temp__5753__auto___50062;
if(cljs.core.chunked_seq_QMARK_(seq__49846_50063__$1)){
var c__4649__auto___50064 = cljs.core.chunk_first(seq__49846_50063__$1);
var G__50065 = cljs.core.chunk_rest(seq__49846_50063__$1);
var G__50066 = c__4649__auto___50064;
var G__50067 = cljs.core.count(c__4649__auto___50064);
var G__50068 = (0);
seq__49846_50053 = G__50065;
chunk__49847_50054 = G__50066;
count__49848_50055 = G__50067;
i__49849_50056 = G__50068;
continue;
} else {
var f_50069 = cljs.core.first(seq__49846_50063__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50069], 0));


var G__50070 = cljs.core.next(seq__49846_50063__$1);
var G__50071 = null;
var G__50072 = (0);
var G__50073 = (0);
seq__49846_50053 = G__50070;
chunk__49847_50054 = G__50071;
count__49848_50055 = G__50072;
i__49849_50056 = G__50073;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50078 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50078], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50078)))?cljs.core.second(arglists_50078):arglists_50078)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49855_50084 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49856_50085 = null;
var count__49857_50086 = (0);
var i__49858_50087 = (0);
while(true){
if((i__49858_50087 < count__49857_50086)){
var vec__49869_50088 = chunk__49856_50085.cljs$core$IIndexed$_nth$arity$2(null,i__49858_50087);
var name_50089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49869_50088,(0),null);
var map__49872_50090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49869_50088,(1),null);
var map__49872_50091__$1 = cljs.core.__destructure_map(map__49872_50090);
var doc_50092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872_50091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49872_50091__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50089], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50093], 0));

if(cljs.core.truth_(doc_50092)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50092], 0));
} else {
}


var G__50094 = seq__49855_50084;
var G__50095 = chunk__49856_50085;
var G__50096 = count__49857_50086;
var G__50097 = (i__49858_50087 + (1));
seq__49855_50084 = G__50094;
chunk__49856_50085 = G__50095;
count__49857_50086 = G__50096;
i__49858_50087 = G__50097;
continue;
} else {
var temp__5753__auto___50098 = cljs.core.seq(seq__49855_50084);
if(temp__5753__auto___50098){
var seq__49855_50099__$1 = temp__5753__auto___50098;
if(cljs.core.chunked_seq_QMARK_(seq__49855_50099__$1)){
var c__4649__auto___50100 = cljs.core.chunk_first(seq__49855_50099__$1);
var G__50101 = cljs.core.chunk_rest(seq__49855_50099__$1);
var G__50102 = c__4649__auto___50100;
var G__50103 = cljs.core.count(c__4649__auto___50100);
var G__50104 = (0);
seq__49855_50084 = G__50101;
chunk__49856_50085 = G__50102;
count__49857_50086 = G__50103;
i__49858_50087 = G__50104;
continue;
} else {
var vec__49873_50105 = cljs.core.first(seq__49855_50099__$1);
var name_50106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873_50105,(0),null);
var map__49876_50107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49873_50105,(1),null);
var map__49876_50108__$1 = cljs.core.__destructure_map(map__49876_50107);
var doc_50109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876_50108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876_50108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50106], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50110], 0));

if(cljs.core.truth_(doc_50109)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50109], 0));
} else {
}


var G__50112 = cljs.core.next(seq__49855_50099__$1);
var G__50113 = null;
var G__50114 = (0);
var G__50115 = (0);
seq__49855_50084 = G__50112;
chunk__49856_50085 = G__50113;
count__49857_50086 = G__50114;
i__49858_50087 = G__50115;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49879 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49880 = null;
var count__49881 = (0);
var i__49882 = (0);
while(true){
if((i__49882 < count__49881)){
var role = chunk__49880.cljs$core$IIndexed$_nth$arity$2(null,i__49882);
var temp__5753__auto___50116__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50116__$1)){
var spec_50117 = temp__5753__auto___50116__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50117)], 0));
} else {
}


var G__50118 = seq__49879;
var G__50119 = chunk__49880;
var G__50120 = count__49881;
var G__50121 = (i__49882 + (1));
seq__49879 = G__50118;
chunk__49880 = G__50119;
count__49881 = G__50120;
i__49882 = G__50121;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49879);
if(temp__5753__auto____$1){
var seq__49879__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49879__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49879__$1);
var G__50122 = cljs.core.chunk_rest(seq__49879__$1);
var G__50123 = c__4649__auto__;
var G__50124 = cljs.core.count(c__4649__auto__);
var G__50125 = (0);
seq__49879 = G__50122;
chunk__49880 = G__50123;
count__49881 = G__50124;
i__49882 = G__50125;
continue;
} else {
var role = cljs.core.first(seq__49879__$1);
var temp__5753__auto___50126__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50126__$2)){
var spec_50127 = temp__5753__auto___50126__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50127)], 0));
} else {
}


var G__50128 = cljs.core.next(seq__49879__$1);
var G__50129 = null;
var G__50130 = (0);
var G__50131 = (0);
seq__49879 = G__50128;
chunk__49880 = G__50129;
count__49881 = G__50130;
i__49882 = G__50131;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50137 = cljs.core.ex_cause(t);
via = G__50136;
t = G__50137;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49912 = datafied_throwable;
var map__49912__$1 = cljs.core.__destructure_map(map__49912);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49912__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49912__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49913 = cljs.core.last(via);
var map__49913__$1 = cljs.core.__destructure_map(map__49913);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49913__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49913__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49913__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49918 = data;
var map__49918__$1 = cljs.core.__destructure_map(map__49918);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49918__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49918__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49918__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49919 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49919__$1 = cljs.core.__destructure_map(map__49919);
var top_data = map__49919__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49934 = phase;
var G__49934__$1 = (((G__49934 instanceof cljs.core.Keyword))?G__49934.fqn:null);
switch (G__49934__$1) {
case "read-source":
var map__49942 = data;
var map__49942__$1 = cljs.core.__destructure_map(map__49942);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49942__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49942__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49956 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49956__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49956,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49956);
var G__49956__$2 = (cljs.core.truth_((function (){var fexpr__49957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49957.cljs$core$IFn$_invoke$arity$1 ? fexpr__49957.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49957.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49956__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49956__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49956__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49958 = top_data;
var G__49958__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49958,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49958);
var G__49958__$2 = (cljs.core.truth_((function (){var fexpr__49963 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49963.cljs$core$IFn$_invoke$arity$1 ? fexpr__49963.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49963.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49958__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49958__$1);
var G__49958__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49958__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49958__$2);
var G__49958__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49958__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49958__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49958__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49958__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49967 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(3),null);
var G__49977 = top_data;
var G__49977__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49977,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49977);
var G__49977__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49977__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49977__$1);
var G__49977__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49977__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49977__$2);
var G__49977__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49977__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49977__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49977__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49977__$4;
}

break;
case "execution":
var vec__49993 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49911_SHARP_){
var or__4223__auto__ = (p1__49911_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__50000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50000.cljs$core$IFn$_invoke$arity$1 ? fexpr__50000.cljs$core$IFn$_invoke$arity$1(p1__49911_SHARP_) : fexpr__50000.call(null,p1__49911_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__50001 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50001__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50001);
var G__50001__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50001__$1);
var G__50001__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50001__$2);
var G__50001__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50001__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50001__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50001__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49934__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50006){
var map__50007 = p__50006;
var map__50007__$1 = cljs.core.__destructure_map(map__50007);
var triage_data = map__50007__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50007__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50009 = phase;
var G__50009__$1 = (((G__50009 instanceof cljs.core.Keyword))?G__50009.fqn:null);
switch (G__50009__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50010 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50011 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50012 = loc;
var G__50013 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50015_50146 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50016_50147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50017_50148 = true;
var _STAR_print_fn_STAR__temp_val__50018_50149 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50017_50148);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50018_50149);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50004_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50004_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50016_50147);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50015_50146);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50010,G__50011,G__50012,G__50013) : format.call(null,G__50010,G__50011,G__50012,G__50013));

break;
case "macroexpansion":
var G__50020 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50021 = cause_type;
var G__50022 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50023 = loc;
var G__50024 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50020,G__50021,G__50022,G__50023,G__50024) : format.call(null,G__50020,G__50021,G__50022,G__50023,G__50024));

break;
case "compile-syntax-check":
var G__50025 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50026 = cause_type;
var G__50027 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50028 = loc;
var G__50029 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50025,G__50026,G__50027,G__50028,G__50029) : format.call(null,G__50025,G__50026,G__50027,G__50028,G__50029));

break;
case "compilation":
var G__50030 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50031 = cause_type;
var G__50032 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50033 = loc;
var G__50034 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50030,G__50031,G__50032,G__50033,G__50034) : format.call(null,G__50030,G__50031,G__50032,G__50033,G__50034));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50035 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50036 = symbol;
var G__50037 = loc;
var G__50038 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50040_50150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50041_50151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50042_50152 = true;
var _STAR_print_fn_STAR__temp_val__50043_50153 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50042_50152);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50043_50153);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50005_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50005_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50041_50151);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50040_50150);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50035,G__50036,G__50037,G__50038) : format.call(null,G__50035,G__50036,G__50037,G__50038));
} else {
var G__50044 = "Execution error%s at %s(%s).\n%s\n";
var G__50045 = cause_type;
var G__50046 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50047 = loc;
var G__50048 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50044,G__50045,G__50046,G__50047,G__50048) : format.call(null,G__50044,G__50045,G__50046,G__50047,G__50048));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50009__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
