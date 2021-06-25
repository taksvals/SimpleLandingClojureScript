goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716 = (function (val,meta42717){
this.val = val;
this.meta42717 = meta42717;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42718,meta42717__$1){
var self__ = this;
var _42718__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716(self__.val,meta42717__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42718){
var self__ = this;
var _42718__$1 = this;
return self__.meta42717;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta42717","meta42717",-1897946694,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42716");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42716");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels42716.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels42716 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels42716(val__$1,meta42717){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716(val__$1,meta42717));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels42716(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_42837 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_42837(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_42847 = self__.puts.pop();
if((putter_42847 == null)){
} else {
var put_handler_42849 = putter_42847.handler;
var val_42850 = putter_42847.val;
if(put_handler_42849.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_42853 = put_handler_42849.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_42853,put_handler_42849,val_42850,putter_42847,this$__$1){
return (function (){
return (put_cb_42853.cljs$core$IFn$_invoke$arity$1 ? put_cb_42853.cljs$core$IFn$_invoke$arity$1(true) : put_cb_42853.call(null,true));
});})(put_cb_42853,put_handler_42849,val_42850,putter_42847,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4221__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__42874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__42874;
continue;
} else {
var G__42875 = takers;
takers = G__42875;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__42744_42876 = cljs.core.seq(take_cbs);
var chunk__42745_42877 = null;
var count__42746_42878 = (0);
var i__42747_42879 = (0);
while(true){
if((i__42747_42879 < count__42746_42878)){
var f_42880 = chunk__42745_42877.cljs$core$IIndexed$_nth$arity$2(null,i__42747_42879);
cljs.core.async.impl.dispatch.run(f_42880);


var G__42881 = seq__42744_42876;
var G__42882 = chunk__42745_42877;
var G__42883 = count__42746_42878;
var G__42884 = (i__42747_42879 + (1));
seq__42744_42876 = G__42881;
chunk__42745_42877 = G__42882;
count__42746_42878 = G__42883;
i__42747_42879 = G__42884;
continue;
} else {
var temp__5753__auto___42890 = cljs.core.seq(seq__42744_42876);
if(temp__5753__auto___42890){
var seq__42744_42892__$1 = temp__5753__auto___42890;
if(cljs.core.chunked_seq_QMARK_(seq__42744_42892__$1)){
var c__4649__auto___42893 = cljs.core.chunk_first(seq__42744_42892__$1);
var G__42894 = cljs.core.chunk_rest(seq__42744_42892__$1);
var G__42895 = c__4649__auto___42893;
var G__42896 = cljs.core.count(c__4649__auto___42893);
var G__42897 = (0);
seq__42744_42876 = G__42894;
chunk__42745_42877 = G__42895;
count__42746_42878 = G__42896;
i__42747_42879 = G__42897;
continue;
} else {
var f_42898 = cljs.core.first(seq__42744_42892__$1);
cljs.core.async.impl.dispatch.run(f_42898);


var G__42899 = cljs.core.next(seq__42744_42892__$1);
var G__42900 = null;
var G__42901 = (0);
var G__42902 = (0);
seq__42744_42876 = G__42899;
chunk__42745_42877 = G__42900;
count__42746_42878 = G__42901;
i__42747_42879 = G__42902;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5751__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5751__auto__)){
var take_cb = temp__5751__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__42760 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__4221__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__4221__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__42909 = cbs__$1;
cbs = G__42909;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42760,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42760,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__42771_42910 = cljs.core.seq(cbs);
var chunk__42772_42911 = null;
var count__42773_42912 = (0);
var i__42774_42913 = (0);
while(true){
if((i__42774_42913 < count__42773_42912)){
var cb_42914 = chunk__42772_42911.cljs$core$IIndexed$_nth$arity$2(null,i__42774_42913);
cljs.core.async.impl.dispatch.run(((function (seq__42771_42910,chunk__42772_42911,count__42773_42912,i__42774_42913,cb_42914,val,vec__42760,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_42914.cljs$core$IFn$_invoke$arity$1 ? cb_42914.cljs$core$IFn$_invoke$arity$1(true) : cb_42914.call(null,true));
});})(seq__42771_42910,chunk__42772_42911,count__42773_42912,i__42774_42913,cb_42914,val,vec__42760,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__42915 = seq__42771_42910;
var G__42916 = chunk__42772_42911;
var G__42917 = count__42773_42912;
var G__42918 = (i__42774_42913 + (1));
seq__42771_42910 = G__42915;
chunk__42772_42911 = G__42916;
count__42773_42912 = G__42917;
i__42774_42913 = G__42918;
continue;
} else {
var temp__5753__auto___42919 = cljs.core.seq(seq__42771_42910);
if(temp__5753__auto___42919){
var seq__42771_42920__$1 = temp__5753__auto___42919;
if(cljs.core.chunked_seq_QMARK_(seq__42771_42920__$1)){
var c__4649__auto___42921 = cljs.core.chunk_first(seq__42771_42920__$1);
var G__42922 = cljs.core.chunk_rest(seq__42771_42920__$1);
var G__42923 = c__4649__auto___42921;
var G__42924 = cljs.core.count(c__4649__auto___42921);
var G__42925 = (0);
seq__42771_42910 = G__42922;
chunk__42772_42911 = G__42923;
count__42773_42912 = G__42924;
i__42774_42913 = G__42925;
continue;
} else {
var cb_42926 = cljs.core.first(seq__42771_42920__$1);
cljs.core.async.impl.dispatch.run(((function (seq__42771_42910,chunk__42772_42911,count__42773_42912,i__42774_42913,cb_42926,seq__42771_42920__$1,temp__5753__auto___42919,val,vec__42760,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_42926.cljs$core$IFn$_invoke$arity$1 ? cb_42926.cljs$core$IFn$_invoke$arity$1(true) : cb_42926.call(null,true));
});})(seq__42771_42910,chunk__42772_42911,count__42773_42912,i__42774_42913,cb_42926,seq__42771_42920__$1,temp__5753__auto___42919,val,vec__42760,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__42928 = cljs.core.next(seq__42771_42920__$1);
var G__42929 = null;
var G__42930 = (0);
var G__42931 = (0);
seq__42771_42910 = G__42928;
chunk__42772_42911 = G__42929;
count__42773_42912 = G__42930;
i__42774_42913 = G__42931;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4221__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})())){
var has_val = (function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4221__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (self__.puts.length === (0));
} else {
return and__4221__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_42934 = self__.takes.pop();
if((taker_42934 == null)){
} else {
if(taker_42934.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_42935 = taker_42934.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_42936 = (cljs.core.truth_((function (){var and__4221__auto__ = self__.buf;
if(cljs.core.truth_(and__4221__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4221__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_42935,val_42936,taker_42934,this$__$1){
return (function (){
return (take_cb_42935.cljs$core$IFn$_invoke$arity$1 ? take_cb_42935.cljs$core$IFn$_invoke$arity$1(val_42936) : take_cb_42935.call(null,val_42936));
});})(take_cb_42935,val_42936,taker_42934,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__42800 = (function (){var or__4223__auto__ = exh;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__42800.cljs$core$IFn$_invoke$arity$1 ? fexpr__42800.cljs$core$IFn$_invoke$arity$1(t) : fexpr__42800.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__42808 = arguments.length;
switch (G__42808) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__42938 = null;
var G__42938__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e42824){var t = e42824;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__42938__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e42829){var t = e42829;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__42938 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__42938__1.call(this,buf__$1);
case 2:
return G__42938__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__42938.cljs$core$IFn$_invoke$arity$1 = G__42938__1;
G__42938.cljs$core$IFn$_invoke$arity$2 = G__42938__2;
return G__42938;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
