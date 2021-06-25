goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45648 = arguments.length;
switch (G__45648) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45649 = (function (f,blockable,meta45650){
this.f = f;
this.blockable = blockable;
this.meta45650 = meta45650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45651,meta45650__$1){
var self__ = this;
var _45651__$1 = this;
return (new cljs.core.async.t_cljs$core$async45649(self__.f,self__.blockable,meta45650__$1));
}));

(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45651){
var self__ = this;
var _45651__$1 = this;
return self__.meta45650;
}));

(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45650","meta45650",475214414,null)], null);
}));

(cljs.core.async.t_cljs$core$async45649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45649");

(cljs.core.async.t_cljs$core$async45649.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45649.
 */
cljs.core.async.__GT_t_cljs$core$async45649 = (function cljs$core$async$__GT_t_cljs$core$async45649(f__$1,blockable__$1,meta45650){
return (new cljs.core.async.t_cljs$core$async45649(f__$1,blockable__$1,meta45650));
});

}

return (new cljs.core.async.t_cljs$core$async45649(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45676 = arguments.length;
switch (G__45676) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45678 = arguments.length;
switch (G__45678) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45680 = arguments.length;
switch (G__45680) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_47201 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47201) : fn1.call(null,val_47201));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47201) : fn1.call(null,val_47201));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45682 = arguments.length;
switch (G__45682) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___47203 = n;
var x_47204 = (0);
while(true){
if((x_47204 < n__4706__auto___47203)){
(a[x_47204] = x_47204);

var G__47205 = (x_47204 + (1));
x_47204 = G__47205;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45683 = (function (flag,meta45684){
this.flag = flag;
this.meta45684 = meta45684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45685,meta45684__$1){
var self__ = this;
var _45685__$1 = this;
return (new cljs.core.async.t_cljs$core$async45683(self__.flag,meta45684__$1));
}));

(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45685){
var self__ = this;
var _45685__$1 = this;
return self__.meta45684;
}));

(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45684","meta45684",86930591,null)], null);
}));

(cljs.core.async.t_cljs$core$async45683.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45683");

(cljs.core.async.t_cljs$core$async45683.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45683");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45683.
 */
cljs.core.async.__GT_t_cljs$core$async45683 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45683(flag__$1,meta45684){
return (new cljs.core.async.t_cljs$core$async45683(flag__$1,meta45684));
});

}

return (new cljs.core.async.t_cljs$core$async45683(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45686 = (function (flag,cb,meta45687){
this.flag = flag;
this.cb = cb;
this.meta45687 = meta45687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45688,meta45687__$1){
var self__ = this;
var _45688__$1 = this;
return (new cljs.core.async.t_cljs$core$async45686(self__.flag,self__.cb,meta45687__$1));
}));

(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45688){
var self__ = this;
var _45688__$1 = this;
return self__.meta45687;
}));

(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45687","meta45687",-700156159,null)], null);
}));

(cljs.core.async.t_cljs$core$async45686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45686");

(cljs.core.async.t_cljs$core$async45686.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45686.
 */
cljs.core.async.__GT_t_cljs$core$async45686 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45686(flag__$1,cb__$1,meta45687){
return (new cljs.core.async.t_cljs$core$async45686(flag__$1,cb__$1,meta45687));
});

}

return (new cljs.core.async.t_cljs$core$async45686(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45689_SHARP_){
var G__45691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45689_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45691) : fret.call(null,G__45691));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45690_SHARP_){
var G__45692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45690_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45692) : fret.call(null,G__45692));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47206 = (i + (1));
i = G__47206;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47207 = arguments.length;
var i__4830__auto___47208 = (0);
while(true){
if((i__4830__auto___47208 < len__4829__auto___47207)){
args__4835__auto__.push((arguments[i__4830__auto___47208]));

var G__47209 = (i__4830__auto___47208 + (1));
i__4830__auto___47208 = G__47209;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45695){
var map__45696 = p__45695;
var map__45696__$1 = cljs.core.__destructure_map(map__45696);
var opts = map__45696__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45693){
var G__45694 = cljs.core.first(seq45693);
var seq45693__$1 = cljs.core.next(seq45693);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45694,seq45693__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45698 = arguments.length;
switch (G__45698) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45586__auto___47211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45722){
var state_val_45723 = (state_45722[(1)]);
if((state_val_45723 === (7))){
var inst_45718 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45724_47212 = state_45722__$1;
(statearr_45724_47212[(2)] = inst_45718);

(statearr_45724_47212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (1))){
var state_45722__$1 = state_45722;
var statearr_45725_47213 = state_45722__$1;
(statearr_45725_47213[(2)] = null);

(statearr_45725_47213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (4))){
var inst_45701 = (state_45722[(7)]);
var inst_45701__$1 = (state_45722[(2)]);
var inst_45702 = (inst_45701__$1 == null);
var state_45722__$1 = (function (){var statearr_45726 = state_45722;
(statearr_45726[(7)] = inst_45701__$1);

return statearr_45726;
})();
if(cljs.core.truth_(inst_45702)){
var statearr_45727_47214 = state_45722__$1;
(statearr_45727_47214[(1)] = (5));

} else {
var statearr_45728_47215 = state_45722__$1;
(statearr_45728_47215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (13))){
var state_45722__$1 = state_45722;
var statearr_45729_47216 = state_45722__$1;
(statearr_45729_47216[(2)] = null);

(statearr_45729_47216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (6))){
var inst_45701 = (state_45722[(7)]);
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45722__$1,(11),to,inst_45701);
} else {
if((state_val_45723 === (3))){
var inst_45720 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45722__$1,inst_45720);
} else {
if((state_val_45723 === (12))){
var state_45722__$1 = state_45722;
var statearr_45730_47217 = state_45722__$1;
(statearr_45730_47217[(2)] = null);

(statearr_45730_47217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (2))){
var state_45722__$1 = state_45722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45722__$1,(4),from);
} else {
if((state_val_45723 === (11))){
var inst_45711 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
if(cljs.core.truth_(inst_45711)){
var statearr_45731_47218 = state_45722__$1;
(statearr_45731_47218[(1)] = (12));

} else {
var statearr_45732_47219 = state_45722__$1;
(statearr_45732_47219[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (9))){
var state_45722__$1 = state_45722;
var statearr_45733_47220 = state_45722__$1;
(statearr_45733_47220[(2)] = null);

(statearr_45733_47220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (5))){
var state_45722__$1 = state_45722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45734_47221 = state_45722__$1;
(statearr_45734_47221[(1)] = (8));

} else {
var statearr_45735_47222 = state_45722__$1;
(statearr_45735_47222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (14))){
var inst_45716 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45736_47223 = state_45722__$1;
(statearr_45736_47223[(2)] = inst_45716);

(statearr_45736_47223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (10))){
var inst_45708 = (state_45722[(2)]);
var state_45722__$1 = state_45722;
var statearr_45737_47224 = state_45722__$1;
(statearr_45737_47224[(2)] = inst_45708);

(statearr_45737_47224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45723 === (8))){
var inst_45705 = cljs.core.async.close_BANG_(to);
var state_45722__$1 = state_45722;
var statearr_45738_47225 = state_45722__$1;
(statearr_45738_47225[(2)] = inst_45705);

(statearr_45738_47225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_45739 = [null,null,null,null,null,null,null,null];
(statearr_45739[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_45739[(1)] = (1));

return statearr_45739;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_45722){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45722);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45740){var ex__45292__auto__ = e45740;
var statearr_45741_47228 = state_45722;
(statearr_45741_47228[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45722[(4)]))){
var statearr_45742_47229 = state_45722;
(statearr_45742_47229[(1)] = cljs.core.first((state_45722[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47230 = state_45722;
state_45722 = G__47230;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_45722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_45722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_45743 = f__45587__auto__();
(statearr_45743[(6)] = c__45586__auto___47211);

return statearr_45743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__45744){
var vec__45745 = p__45744;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45745,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45745,(1),null);
var job = vec__45745;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45586__auto___47231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45752){
var state_val_45753 = (state_45752[(1)]);
if((state_val_45753 === (1))){
var state_45752__$1 = state_45752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45752__$1,(2),res,v);
} else {
if((state_val_45753 === (2))){
var inst_45749 = (state_45752[(2)]);
var inst_45750 = cljs.core.async.close_BANG_(res);
var state_45752__$1 = (function (){var statearr_45754 = state_45752;
(statearr_45754[(7)] = inst_45749);

return statearr_45754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45752__$1,inst_45750);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_45755 = [null,null,null,null,null,null,null,null];
(statearr_45755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__);

(statearr_45755[(1)] = (1));

return statearr_45755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1 = (function (state_45752){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45752);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45756){var ex__45292__auto__ = e45756;
var statearr_45757_47232 = state_45752;
(statearr_45757_47232[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45752[(4)]))){
var statearr_45758_47233 = state_45752;
(statearr_45758_47233[(1)] = cljs.core.first((state_45752[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47234 = state_45752;
state_45752 = G__47234;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = function(state_45752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1.call(this,state_45752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_45759 = f__45587__auto__();
(statearr_45759[(6)] = c__45586__auto___47231);

return statearr_45759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45760){
var vec__45761 = p__45760;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45761,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45761,(1),null);
var job = vec__45761;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___47235 = n;
var __47236 = (0);
while(true){
if((__47236 < n__4706__auto___47235)){
var G__45764_47237 = type;
var G__45764_47238__$1 = (((G__45764_47237 instanceof cljs.core.Keyword))?G__45764_47237.fqn:null);
switch (G__45764_47238__$1) {
case "compute":
var c__45586__auto___47240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47236,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = ((function (__47236,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function (state_45777){
var state_val_45778 = (state_45777[(1)]);
if((state_val_45778 === (1))){
var state_45777__$1 = state_45777;
var statearr_45779_47241 = state_45777__$1;
(statearr_45779_47241[(2)] = null);

(statearr_45779_47241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45778 === (2))){
var state_45777__$1 = state_45777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45777__$1,(4),jobs);
} else {
if((state_val_45778 === (3))){
var inst_45775 = (state_45777[(2)]);
var state_45777__$1 = state_45777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45777__$1,inst_45775);
} else {
if((state_val_45778 === (4))){
var inst_45767 = (state_45777[(2)]);
var inst_45768 = process(inst_45767);
var state_45777__$1 = state_45777;
if(cljs.core.truth_(inst_45768)){
var statearr_45780_47242 = state_45777__$1;
(statearr_45780_47242[(1)] = (5));

} else {
var statearr_45781_47243 = state_45777__$1;
(statearr_45781_47243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45778 === (5))){
var state_45777__$1 = state_45777;
var statearr_45782_47244 = state_45777__$1;
(statearr_45782_47244[(2)] = null);

(statearr_45782_47244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45778 === (6))){
var state_45777__$1 = state_45777;
var statearr_45783_47245 = state_45777__$1;
(statearr_45783_47245[(2)] = null);

(statearr_45783_47245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45778 === (7))){
var inst_45773 = (state_45777[(2)]);
var state_45777__$1 = state_45777;
var statearr_45784_47246 = state_45777__$1;
(statearr_45784_47246[(2)] = inst_45773);

(statearr_45784_47246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47236,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
;
return ((function (__47236,switch__45288__auto__,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_45785 = [null,null,null,null,null,null,null];
(statearr_45785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__);

(statearr_45785[(1)] = (1));

return statearr_45785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1 = (function (state_45777){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45777);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45786){var ex__45292__auto__ = e45786;
var statearr_45787_47247 = state_45777;
(statearr_45787_47247[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45777[(4)]))){
var statearr_45788_47248 = state_45777;
(statearr_45788_47248[(1)] = cljs.core.first((state_45777[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47249 = state_45777;
state_45777 = G__47249;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = function(state_45777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1.call(this,state_45777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__;
})()
;})(__47236,switch__45288__auto__,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
})();
var state__45588__auto__ = (function (){var statearr_45789 = f__45587__auto__();
(statearr_45789[(6)] = c__45586__auto___47240);

return statearr_45789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
});})(__47236,c__45586__auto___47240,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
);


break;
case "async":
var c__45586__auto___47250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47236,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = ((function (__47236,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function (state_45802){
var state_val_45803 = (state_45802[(1)]);
if((state_val_45803 === (1))){
var state_45802__$1 = state_45802;
var statearr_45804_47251 = state_45802__$1;
(statearr_45804_47251[(2)] = null);

(statearr_45804_47251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45803 === (2))){
var state_45802__$1 = state_45802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45802__$1,(4),jobs);
} else {
if((state_val_45803 === (3))){
var inst_45800 = (state_45802[(2)]);
var state_45802__$1 = state_45802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45802__$1,inst_45800);
} else {
if((state_val_45803 === (4))){
var inst_45792 = (state_45802[(2)]);
var inst_45793 = async(inst_45792);
var state_45802__$1 = state_45802;
if(cljs.core.truth_(inst_45793)){
var statearr_45805_47252 = state_45802__$1;
(statearr_45805_47252[(1)] = (5));

} else {
var statearr_45806_47253 = state_45802__$1;
(statearr_45806_47253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45803 === (5))){
var state_45802__$1 = state_45802;
var statearr_45807_47254 = state_45802__$1;
(statearr_45807_47254[(2)] = null);

(statearr_45807_47254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45803 === (6))){
var state_45802__$1 = state_45802;
var statearr_45808_47255 = state_45802__$1;
(statearr_45808_47255[(2)] = null);

(statearr_45808_47255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45803 === (7))){
var inst_45798 = (state_45802[(2)]);
var state_45802__$1 = state_45802;
var statearr_45809_47256 = state_45802__$1;
(statearr_45809_47256[(2)] = inst_45798);

(statearr_45809_47256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47236,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
;
return ((function (__47236,switch__45288__auto__,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_45810 = [null,null,null,null,null,null,null];
(statearr_45810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__);

(statearr_45810[(1)] = (1));

return statearr_45810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1 = (function (state_45802){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45802);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45811){var ex__45292__auto__ = e45811;
var statearr_45812_47257 = state_45802;
(statearr_45812_47257[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45802[(4)]))){
var statearr_45813_47258 = state_45802;
(statearr_45813_47258[(1)] = cljs.core.first((state_45802[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47259 = state_45802;
state_45802 = G__47259;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = function(state_45802){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1.call(this,state_45802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__;
})()
;})(__47236,switch__45288__auto__,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
})();
var state__45588__auto__ = (function (){var statearr_45814 = f__45587__auto__();
(statearr_45814[(6)] = c__45586__auto___47250);

return statearr_45814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
});})(__47236,c__45586__auto___47250,G__45764_47237,G__45764_47238__$1,n__4706__auto___47235,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45764_47238__$1)].join('')));

}

var G__47260 = (__47236 + (1));
__47236 = G__47260;
continue;
} else {
}
break;
}

var c__45586__auto___47262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45836){
var state_val_45837 = (state_45836[(1)]);
if((state_val_45837 === (7))){
var inst_45832 = (state_45836[(2)]);
var state_45836__$1 = state_45836;
var statearr_45838_47263 = state_45836__$1;
(statearr_45838_47263[(2)] = inst_45832);

(statearr_45838_47263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45837 === (1))){
var state_45836__$1 = state_45836;
var statearr_45839_47264 = state_45836__$1;
(statearr_45839_47264[(2)] = null);

(statearr_45839_47264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45837 === (4))){
var inst_45817 = (state_45836[(7)]);
var inst_45817__$1 = (state_45836[(2)]);
var inst_45818 = (inst_45817__$1 == null);
var state_45836__$1 = (function (){var statearr_45840 = state_45836;
(statearr_45840[(7)] = inst_45817__$1);

return statearr_45840;
})();
if(cljs.core.truth_(inst_45818)){
var statearr_45841_47265 = state_45836__$1;
(statearr_45841_47265[(1)] = (5));

} else {
var statearr_45842_47266 = state_45836__$1;
(statearr_45842_47266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45837 === (6))){
var inst_45817 = (state_45836[(7)]);
var inst_45822 = (state_45836[(8)]);
var inst_45822__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45824 = [inst_45817,inst_45822__$1];
var inst_45825 = (new cljs.core.PersistentVector(null,2,(5),inst_45823,inst_45824,null));
var state_45836__$1 = (function (){var statearr_45843 = state_45836;
(statearr_45843[(8)] = inst_45822__$1);

return statearr_45843;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45836__$1,(8),jobs,inst_45825);
} else {
if((state_val_45837 === (3))){
var inst_45834 = (state_45836[(2)]);
var state_45836__$1 = state_45836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45836__$1,inst_45834);
} else {
if((state_val_45837 === (2))){
var state_45836__$1 = state_45836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45836__$1,(4),from);
} else {
if((state_val_45837 === (9))){
var inst_45829 = (state_45836[(2)]);
var state_45836__$1 = (function (){var statearr_45844 = state_45836;
(statearr_45844[(9)] = inst_45829);

return statearr_45844;
})();
var statearr_45845_47268 = state_45836__$1;
(statearr_45845_47268[(2)] = null);

(statearr_45845_47268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45837 === (5))){
var inst_45820 = cljs.core.async.close_BANG_(jobs);
var state_45836__$1 = state_45836;
var statearr_45846_47269 = state_45836__$1;
(statearr_45846_47269[(2)] = inst_45820);

(statearr_45846_47269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45837 === (8))){
var inst_45822 = (state_45836[(8)]);
var inst_45827 = (state_45836[(2)]);
var state_45836__$1 = (function (){var statearr_45847 = state_45836;
(statearr_45847[(10)] = inst_45827);

return statearr_45847;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45836__$1,(9),results,inst_45822);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_45848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__);

(statearr_45848[(1)] = (1));

return statearr_45848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1 = (function (state_45836){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45836);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45849){var ex__45292__auto__ = e45849;
var statearr_45850_47271 = state_45836;
(statearr_45850_47271[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45836[(4)]))){
var statearr_45851_47272 = state_45836;
(statearr_45851_47272[(1)] = cljs.core.first((state_45836[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47273 = state_45836;
state_45836 = G__47273;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = function(state_45836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1.call(this,state_45836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_45852 = f__45587__auto__();
(statearr_45852[(6)] = c__45586__auto___47262);

return statearr_45852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


var c__45586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45890){
var state_val_45891 = (state_45890[(1)]);
if((state_val_45891 === (7))){
var inst_45886 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
var statearr_45892_47275 = state_45890__$1;
(statearr_45892_47275[(2)] = inst_45886);

(statearr_45892_47275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (20))){
var state_45890__$1 = state_45890;
var statearr_45893_47277 = state_45890__$1;
(statearr_45893_47277[(2)] = null);

(statearr_45893_47277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (1))){
var state_45890__$1 = state_45890;
var statearr_45894_47278 = state_45890__$1;
(statearr_45894_47278[(2)] = null);

(statearr_45894_47278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (4))){
var inst_45855 = (state_45890[(7)]);
var inst_45855__$1 = (state_45890[(2)]);
var inst_45856 = (inst_45855__$1 == null);
var state_45890__$1 = (function (){var statearr_45895 = state_45890;
(statearr_45895[(7)] = inst_45855__$1);

return statearr_45895;
})();
if(cljs.core.truth_(inst_45856)){
var statearr_45896_47279 = state_45890__$1;
(statearr_45896_47279[(1)] = (5));

} else {
var statearr_45897_47280 = state_45890__$1;
(statearr_45897_47280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (15))){
var inst_45868 = (state_45890[(8)]);
var state_45890__$1 = state_45890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45890__$1,(18),to,inst_45868);
} else {
if((state_val_45891 === (21))){
var inst_45881 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
var statearr_45898_47281 = state_45890__$1;
(statearr_45898_47281[(2)] = inst_45881);

(statearr_45898_47281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (13))){
var inst_45883 = (state_45890[(2)]);
var state_45890__$1 = (function (){var statearr_45899 = state_45890;
(statearr_45899[(9)] = inst_45883);

return statearr_45899;
})();
var statearr_45900_47282 = state_45890__$1;
(statearr_45900_47282[(2)] = null);

(statearr_45900_47282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (6))){
var inst_45855 = (state_45890[(7)]);
var state_45890__$1 = state_45890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45890__$1,(11),inst_45855);
} else {
if((state_val_45891 === (17))){
var inst_45876 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
if(cljs.core.truth_(inst_45876)){
var statearr_45901_47283 = state_45890__$1;
(statearr_45901_47283[(1)] = (19));

} else {
var statearr_45902_47284 = state_45890__$1;
(statearr_45902_47284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (3))){
var inst_45888 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45890__$1,inst_45888);
} else {
if((state_val_45891 === (12))){
var inst_45865 = (state_45890[(10)]);
var state_45890__$1 = state_45890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45890__$1,(14),inst_45865);
} else {
if((state_val_45891 === (2))){
var state_45890__$1 = state_45890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45890__$1,(4),results);
} else {
if((state_val_45891 === (19))){
var state_45890__$1 = state_45890;
var statearr_45903_47285 = state_45890__$1;
(statearr_45903_47285[(2)] = null);

(statearr_45903_47285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (11))){
var inst_45865 = (state_45890[(2)]);
var state_45890__$1 = (function (){var statearr_45904 = state_45890;
(statearr_45904[(10)] = inst_45865);

return statearr_45904;
})();
var statearr_45905_47286 = state_45890__$1;
(statearr_45905_47286[(2)] = null);

(statearr_45905_47286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (9))){
var state_45890__$1 = state_45890;
var statearr_45906_47287 = state_45890__$1;
(statearr_45906_47287[(2)] = null);

(statearr_45906_47287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (5))){
var state_45890__$1 = state_45890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45907_47288 = state_45890__$1;
(statearr_45907_47288[(1)] = (8));

} else {
var statearr_45908_47289 = state_45890__$1;
(statearr_45908_47289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (14))){
var inst_45870 = (state_45890[(11)]);
var inst_45868 = (state_45890[(8)]);
var inst_45868__$1 = (state_45890[(2)]);
var inst_45869 = (inst_45868__$1 == null);
var inst_45870__$1 = cljs.core.not(inst_45869);
var state_45890__$1 = (function (){var statearr_45909 = state_45890;
(statearr_45909[(11)] = inst_45870__$1);

(statearr_45909[(8)] = inst_45868__$1);

return statearr_45909;
})();
if(inst_45870__$1){
var statearr_45910_47290 = state_45890__$1;
(statearr_45910_47290[(1)] = (15));

} else {
var statearr_45911_47291 = state_45890__$1;
(statearr_45911_47291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (16))){
var inst_45870 = (state_45890[(11)]);
var state_45890__$1 = state_45890;
var statearr_45912_47292 = state_45890__$1;
(statearr_45912_47292[(2)] = inst_45870);

(statearr_45912_47292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (10))){
var inst_45862 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
var statearr_45913_47293 = state_45890__$1;
(statearr_45913_47293[(2)] = inst_45862);

(statearr_45913_47293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (18))){
var inst_45873 = (state_45890[(2)]);
var state_45890__$1 = state_45890;
var statearr_45914_47295 = state_45890__$1;
(statearr_45914_47295[(2)] = inst_45873);

(statearr_45914_47295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45891 === (8))){
var inst_45859 = cljs.core.async.close_BANG_(to);
var state_45890__$1 = state_45890;
var statearr_45915_47297 = state_45890__$1;
(statearr_45915_47297[(2)] = inst_45859);

(statearr_45915_47297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_45916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__);

(statearr_45916[(1)] = (1));

return statearr_45916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1 = (function (state_45890){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45890);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45917){var ex__45292__auto__ = e45917;
var statearr_45918_47298 = state_45890;
(statearr_45918_47298[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45890[(4)]))){
var statearr_45919_47299 = state_45890;
(statearr_45919_47299[(1)] = cljs.core.first((state_45890[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47300 = state_45890;
state_45890 = G__47300;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__ = function(state_45890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1.call(this,state_45890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_45920 = f__45587__auto__();
(statearr_45920[(6)] = c__45586__auto__);

return statearr_45920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

return c__45586__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45922 = arguments.length;
switch (G__45922) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45924 = arguments.length;
switch (G__45924) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45926 = arguments.length;
switch (G__45926) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__45586__auto___47304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45952){
var state_val_45953 = (state_45952[(1)]);
if((state_val_45953 === (7))){
var inst_45948 = (state_45952[(2)]);
var state_45952__$1 = state_45952;
var statearr_45954_47305 = state_45952__$1;
(statearr_45954_47305[(2)] = inst_45948);

(statearr_45954_47305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (1))){
var state_45952__$1 = state_45952;
var statearr_45955_47306 = state_45952__$1;
(statearr_45955_47306[(2)] = null);

(statearr_45955_47306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (4))){
var inst_45929 = (state_45952[(7)]);
var inst_45929__$1 = (state_45952[(2)]);
var inst_45930 = (inst_45929__$1 == null);
var state_45952__$1 = (function (){var statearr_45956 = state_45952;
(statearr_45956[(7)] = inst_45929__$1);

return statearr_45956;
})();
if(cljs.core.truth_(inst_45930)){
var statearr_45957_47308 = state_45952__$1;
(statearr_45957_47308[(1)] = (5));

} else {
var statearr_45958_47309 = state_45952__$1;
(statearr_45958_47309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (13))){
var state_45952__$1 = state_45952;
var statearr_45959_47311 = state_45952__$1;
(statearr_45959_47311[(2)] = null);

(statearr_45959_47311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (6))){
var inst_45929 = (state_45952[(7)]);
var inst_45935 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45929) : p.call(null,inst_45929));
var state_45952__$1 = state_45952;
if(cljs.core.truth_(inst_45935)){
var statearr_45960_47312 = state_45952__$1;
(statearr_45960_47312[(1)] = (9));

} else {
var statearr_45961_47313 = state_45952__$1;
(statearr_45961_47313[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (3))){
var inst_45950 = (state_45952[(2)]);
var state_45952__$1 = state_45952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45952__$1,inst_45950);
} else {
if((state_val_45953 === (12))){
var state_45952__$1 = state_45952;
var statearr_45962_47314 = state_45952__$1;
(statearr_45962_47314[(2)] = null);

(statearr_45962_47314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (2))){
var state_45952__$1 = state_45952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45952__$1,(4),ch);
} else {
if((state_val_45953 === (11))){
var inst_45929 = (state_45952[(7)]);
var inst_45939 = (state_45952[(2)]);
var state_45952__$1 = state_45952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45952__$1,(8),inst_45939,inst_45929);
} else {
if((state_val_45953 === (9))){
var state_45952__$1 = state_45952;
var statearr_45963_47315 = state_45952__$1;
(statearr_45963_47315[(2)] = tc);

(statearr_45963_47315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (5))){
var inst_45932 = cljs.core.async.close_BANG_(tc);
var inst_45933 = cljs.core.async.close_BANG_(fc);
var state_45952__$1 = (function (){var statearr_45964 = state_45952;
(statearr_45964[(8)] = inst_45932);

return statearr_45964;
})();
var statearr_45965_47316 = state_45952__$1;
(statearr_45965_47316[(2)] = inst_45933);

(statearr_45965_47316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (14))){
var inst_45946 = (state_45952[(2)]);
var state_45952__$1 = state_45952;
var statearr_45966_47317 = state_45952__$1;
(statearr_45966_47317[(2)] = inst_45946);

(statearr_45966_47317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (10))){
var state_45952__$1 = state_45952;
var statearr_45967_47318 = state_45952__$1;
(statearr_45967_47318[(2)] = fc);

(statearr_45967_47318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45953 === (8))){
var inst_45941 = (state_45952[(2)]);
var state_45952__$1 = state_45952;
if(cljs.core.truth_(inst_45941)){
var statearr_45968_47319 = state_45952__$1;
(statearr_45968_47319[(1)] = (12));

} else {
var statearr_45969_47320 = state_45952__$1;
(statearr_45969_47320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_45970 = [null,null,null,null,null,null,null,null,null];
(statearr_45970[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_45970[(1)] = (1));

return statearr_45970;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_45952){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45952);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e45971){var ex__45292__auto__ = e45971;
var statearr_45972_47321 = state_45952;
(statearr_45972_47321[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45952[(4)]))){
var statearr_45973_47322 = state_45952;
(statearr_45973_47322[(1)] = cljs.core.first((state_45952[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47323 = state_45952;
state_45952 = G__47323;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_45952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_45952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_45974 = f__45587__auto__();
(statearr_45974[(6)] = c__45586__auto___47304);

return statearr_45974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_45996){
var state_val_45997 = (state_45996[(1)]);
if((state_val_45997 === (7))){
var inst_45992 = (state_45996[(2)]);
var state_45996__$1 = state_45996;
var statearr_45998_47324 = state_45996__$1;
(statearr_45998_47324[(2)] = inst_45992);

(statearr_45998_47324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (1))){
var inst_45975 = init;
var inst_45976 = inst_45975;
var state_45996__$1 = (function (){var statearr_45999 = state_45996;
(statearr_45999[(7)] = inst_45976);

return statearr_45999;
})();
var statearr_46000_47325 = state_45996__$1;
(statearr_46000_47325[(2)] = null);

(statearr_46000_47325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (4))){
var inst_45979 = (state_45996[(8)]);
var inst_45979__$1 = (state_45996[(2)]);
var inst_45980 = (inst_45979__$1 == null);
var state_45996__$1 = (function (){var statearr_46001 = state_45996;
(statearr_46001[(8)] = inst_45979__$1);

return statearr_46001;
})();
if(cljs.core.truth_(inst_45980)){
var statearr_46002_47326 = state_45996__$1;
(statearr_46002_47326[(1)] = (5));

} else {
var statearr_46003_47327 = state_45996__$1;
(statearr_46003_47327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (6))){
var inst_45983 = (state_45996[(9)]);
var inst_45979 = (state_45996[(8)]);
var inst_45976 = (state_45996[(7)]);
var inst_45983__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45976,inst_45979) : f.call(null,inst_45976,inst_45979));
var inst_45984 = cljs.core.reduced_QMARK_(inst_45983__$1);
var state_45996__$1 = (function (){var statearr_46004 = state_45996;
(statearr_46004[(9)] = inst_45983__$1);

return statearr_46004;
})();
if(inst_45984){
var statearr_46005_47330 = state_45996__$1;
(statearr_46005_47330[(1)] = (8));

} else {
var statearr_46006_47331 = state_45996__$1;
(statearr_46006_47331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (3))){
var inst_45994 = (state_45996[(2)]);
var state_45996__$1 = state_45996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45996__$1,inst_45994);
} else {
if((state_val_45997 === (2))){
var state_45996__$1 = state_45996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45996__$1,(4),ch);
} else {
if((state_val_45997 === (9))){
var inst_45983 = (state_45996[(9)]);
var inst_45976 = inst_45983;
var state_45996__$1 = (function (){var statearr_46007 = state_45996;
(statearr_46007[(7)] = inst_45976);

return statearr_46007;
})();
var statearr_46008_47332 = state_45996__$1;
(statearr_46008_47332[(2)] = null);

(statearr_46008_47332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (5))){
var inst_45976 = (state_45996[(7)]);
var state_45996__$1 = state_45996;
var statearr_46009_47333 = state_45996__$1;
(statearr_46009_47333[(2)] = inst_45976);

(statearr_46009_47333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (10))){
var inst_45990 = (state_45996[(2)]);
var state_45996__$1 = state_45996;
var statearr_46010_47334 = state_45996__$1;
(statearr_46010_47334[(2)] = inst_45990);

(statearr_46010_47334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45997 === (8))){
var inst_45983 = (state_45996[(9)]);
var inst_45986 = cljs.core.deref(inst_45983);
var state_45996__$1 = state_45996;
var statearr_46011_47335 = state_45996__$1;
(statearr_46011_47335[(2)] = inst_45986);

(statearr_46011_47335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__45289__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45289__auto____0 = (function (){
var statearr_46012 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46012[(0)] = cljs$core$async$reduce_$_state_machine__45289__auto__);

(statearr_46012[(1)] = (1));

return statearr_46012;
});
var cljs$core$async$reduce_$_state_machine__45289__auto____1 = (function (state_45996){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_45996);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46013){var ex__45292__auto__ = e46013;
var statearr_46014_47336 = state_45996;
(statearr_46014_47336[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_45996[(4)]))){
var statearr_46015_47337 = state_45996;
(statearr_46015_47337[(1)] = cljs.core.first((state_45996[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47338 = state_45996;
state_45996 = G__47338;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45289__auto__ = function(state_45996){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45289__auto____1.call(this,state_45996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45289__auto____0;
cljs$core$async$reduce_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45289__auto____1;
return cljs$core$async$reduce_$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46016 = f__45587__auto__();
(statearr_46016[(6)] = c__45586__auto__);

return statearr_46016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

return c__45586__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46022){
var state_val_46023 = (state_46022[(1)]);
if((state_val_46023 === (1))){
var inst_46017 = cljs.core.async.reduce(f__$1,init,ch);
var state_46022__$1 = state_46022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46022__$1,(2),inst_46017);
} else {
if((state_val_46023 === (2))){
var inst_46019 = (state_46022[(2)]);
var inst_46020 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46019) : f__$1.call(null,inst_46019));
var state_46022__$1 = state_46022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46022__$1,inst_46020);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45289__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45289__auto____0 = (function (){
var statearr_46024 = [null,null,null,null,null,null,null];
(statearr_46024[(0)] = cljs$core$async$transduce_$_state_machine__45289__auto__);

(statearr_46024[(1)] = (1));

return statearr_46024;
});
var cljs$core$async$transduce_$_state_machine__45289__auto____1 = (function (state_46022){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46022);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46025){var ex__45292__auto__ = e46025;
var statearr_46026_47339 = state_46022;
(statearr_46026_47339[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46022[(4)]))){
var statearr_46027_47340 = state_46022;
(statearr_46027_47340[(1)] = cljs.core.first((state_46022[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47341 = state_46022;
state_46022 = G__47341;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45289__auto__ = function(state_46022){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45289__auto____1.call(this,state_46022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45289__auto____0;
cljs$core$async$transduce_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45289__auto____1;
return cljs$core$async$transduce_$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46028 = f__45587__auto__();
(statearr_46028[(6)] = c__45586__auto__);

return statearr_46028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

return c__45586__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46030 = arguments.length;
switch (G__46030) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46055){
var state_val_46056 = (state_46055[(1)]);
if((state_val_46056 === (7))){
var inst_46037 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
var statearr_46057_47345 = state_46055__$1;
(statearr_46057_47345[(2)] = inst_46037);

(statearr_46057_47345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (1))){
var inst_46031 = cljs.core.seq(coll);
var inst_46032 = inst_46031;
var state_46055__$1 = (function (){var statearr_46058 = state_46055;
(statearr_46058[(7)] = inst_46032);

return statearr_46058;
})();
var statearr_46059_47346 = state_46055__$1;
(statearr_46059_47346[(2)] = null);

(statearr_46059_47346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (4))){
var inst_46032 = (state_46055[(7)]);
var inst_46035 = cljs.core.first(inst_46032);
var state_46055__$1 = state_46055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46055__$1,(7),ch,inst_46035);
} else {
if((state_val_46056 === (13))){
var inst_46049 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
var statearr_46060_47347 = state_46055__$1;
(statearr_46060_47347[(2)] = inst_46049);

(statearr_46060_47347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (6))){
var inst_46040 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
if(cljs.core.truth_(inst_46040)){
var statearr_46061_47348 = state_46055__$1;
(statearr_46061_47348[(1)] = (8));

} else {
var statearr_46062_47349 = state_46055__$1;
(statearr_46062_47349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (3))){
var inst_46053 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46055__$1,inst_46053);
} else {
if((state_val_46056 === (12))){
var state_46055__$1 = state_46055;
var statearr_46063_47350 = state_46055__$1;
(statearr_46063_47350[(2)] = null);

(statearr_46063_47350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (2))){
var inst_46032 = (state_46055[(7)]);
var state_46055__$1 = state_46055;
if(cljs.core.truth_(inst_46032)){
var statearr_46064_47351 = state_46055__$1;
(statearr_46064_47351[(1)] = (4));

} else {
var statearr_46065_47352 = state_46055__$1;
(statearr_46065_47352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (11))){
var inst_46046 = cljs.core.async.close_BANG_(ch);
var state_46055__$1 = state_46055;
var statearr_46066_47353 = state_46055__$1;
(statearr_46066_47353[(2)] = inst_46046);

(statearr_46066_47353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (9))){
var state_46055__$1 = state_46055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46067_47354 = state_46055__$1;
(statearr_46067_47354[(1)] = (11));

} else {
var statearr_46068_47355 = state_46055__$1;
(statearr_46068_47355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (5))){
var inst_46032 = (state_46055[(7)]);
var state_46055__$1 = state_46055;
var statearr_46069_47356 = state_46055__$1;
(statearr_46069_47356[(2)] = inst_46032);

(statearr_46069_47356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (10))){
var inst_46051 = (state_46055[(2)]);
var state_46055__$1 = state_46055;
var statearr_46070_47357 = state_46055__$1;
(statearr_46070_47357[(2)] = inst_46051);

(statearr_46070_47357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46056 === (8))){
var inst_46032 = (state_46055[(7)]);
var inst_46042 = cljs.core.next(inst_46032);
var inst_46032__$1 = inst_46042;
var state_46055__$1 = (function (){var statearr_46071 = state_46055;
(statearr_46071[(7)] = inst_46032__$1);

return statearr_46071;
})();
var statearr_46072_47358 = state_46055__$1;
(statearr_46072_47358[(2)] = null);

(statearr_46072_47358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46073 = [null,null,null,null,null,null,null,null];
(statearr_46073[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46073[(1)] = (1));

return statearr_46073;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46055){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46055);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46074){var ex__45292__auto__ = e46074;
var statearr_46075_47359 = state_46055;
(statearr_46075_47359[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46055[(4)]))){
var statearr_46076_47360 = state_46055;
(statearr_46076_47360[(1)] = cljs.core.first((state_46055[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47361 = state_46055;
state_46055 = G__47361;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46077 = f__45587__auto__();
(statearr_46077[(6)] = c__45586__auto__);

return statearr_46077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

return c__45586__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46079 = arguments.length;
switch (G__46079) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47364 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47364(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47365 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47365(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47366 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47366(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47367 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47367(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46080 = (function (ch,cs,meta46081){
this.ch = ch;
this.cs = cs;
this.meta46081 = meta46081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46082,meta46081__$1){
var self__ = this;
var _46082__$1 = this;
return (new cljs.core.async.t_cljs$core$async46080(self__.ch,self__.cs,meta46081__$1));
}));

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46082){
var self__ = this;
var _46082__$1 = this;
return self__.meta46081;
}));

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46081","meta46081",-1615031134,null)], null);
}));

(cljs.core.async.t_cljs$core$async46080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46080");

(cljs.core.async.t_cljs$core$async46080.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46080.
 */
cljs.core.async.__GT_t_cljs$core$async46080 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46080(ch__$1,cs__$1,meta46081){
return (new cljs.core.async.t_cljs$core$async46080(ch__$1,cs__$1,meta46081));
});

}

return (new cljs.core.async.t_cljs$core$async46080(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45586__auto___47372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46215){
var state_val_46216 = (state_46215[(1)]);
if((state_val_46216 === (7))){
var inst_46211 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46217_47373 = state_46215__$1;
(statearr_46217_47373[(2)] = inst_46211);

(statearr_46217_47373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (20))){
var inst_46116 = (state_46215[(7)]);
var inst_46128 = cljs.core.first(inst_46116);
var inst_46129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46128,(0),null);
var inst_46130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46128,(1),null);
var state_46215__$1 = (function (){var statearr_46218 = state_46215;
(statearr_46218[(8)] = inst_46129);

return statearr_46218;
})();
if(cljs.core.truth_(inst_46130)){
var statearr_46219_47374 = state_46215__$1;
(statearr_46219_47374[(1)] = (22));

} else {
var statearr_46220_47375 = state_46215__$1;
(statearr_46220_47375[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (27))){
var inst_46085 = (state_46215[(9)]);
var inst_46160 = (state_46215[(10)]);
var inst_46158 = (state_46215[(11)]);
var inst_46165 = (state_46215[(12)]);
var inst_46165__$1 = cljs.core._nth(inst_46158,inst_46160);
var inst_46166 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46165__$1,inst_46085,done);
var state_46215__$1 = (function (){var statearr_46221 = state_46215;
(statearr_46221[(12)] = inst_46165__$1);

return statearr_46221;
})();
if(cljs.core.truth_(inst_46166)){
var statearr_46222_47376 = state_46215__$1;
(statearr_46222_47376[(1)] = (30));

} else {
var statearr_46223_47377 = state_46215__$1;
(statearr_46223_47377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (1))){
var state_46215__$1 = state_46215;
var statearr_46224_47378 = state_46215__$1;
(statearr_46224_47378[(2)] = null);

(statearr_46224_47378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (24))){
var inst_46116 = (state_46215[(7)]);
var inst_46135 = (state_46215[(2)]);
var inst_46136 = cljs.core.next(inst_46116);
var inst_46094 = inst_46136;
var inst_46095 = null;
var inst_46096 = (0);
var inst_46097 = (0);
var state_46215__$1 = (function (){var statearr_46225 = state_46215;
(statearr_46225[(13)] = inst_46095);

(statearr_46225[(14)] = inst_46097);

(statearr_46225[(15)] = inst_46096);

(statearr_46225[(16)] = inst_46094);

(statearr_46225[(17)] = inst_46135);

return statearr_46225;
})();
var statearr_46226_47379 = state_46215__$1;
(statearr_46226_47379[(2)] = null);

(statearr_46226_47379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (39))){
var state_46215__$1 = state_46215;
var statearr_46230_47380 = state_46215__$1;
(statearr_46230_47380[(2)] = null);

(statearr_46230_47380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (4))){
var inst_46085 = (state_46215[(9)]);
var inst_46085__$1 = (state_46215[(2)]);
var inst_46086 = (inst_46085__$1 == null);
var state_46215__$1 = (function (){var statearr_46231 = state_46215;
(statearr_46231[(9)] = inst_46085__$1);

return statearr_46231;
})();
if(cljs.core.truth_(inst_46086)){
var statearr_46232_47381 = state_46215__$1;
(statearr_46232_47381[(1)] = (5));

} else {
var statearr_46233_47382 = state_46215__$1;
(statearr_46233_47382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (15))){
var inst_46095 = (state_46215[(13)]);
var inst_46097 = (state_46215[(14)]);
var inst_46096 = (state_46215[(15)]);
var inst_46094 = (state_46215[(16)]);
var inst_46112 = (state_46215[(2)]);
var inst_46113 = (inst_46097 + (1));
var tmp46227 = inst_46095;
var tmp46228 = inst_46096;
var tmp46229 = inst_46094;
var inst_46094__$1 = tmp46229;
var inst_46095__$1 = tmp46227;
var inst_46096__$1 = tmp46228;
var inst_46097__$1 = inst_46113;
var state_46215__$1 = (function (){var statearr_46234 = state_46215;
(statearr_46234[(13)] = inst_46095__$1);

(statearr_46234[(18)] = inst_46112);

(statearr_46234[(14)] = inst_46097__$1);

(statearr_46234[(15)] = inst_46096__$1);

(statearr_46234[(16)] = inst_46094__$1);

return statearr_46234;
})();
var statearr_46235_47383 = state_46215__$1;
(statearr_46235_47383[(2)] = null);

(statearr_46235_47383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (21))){
var inst_46139 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46239_47384 = state_46215__$1;
(statearr_46239_47384[(2)] = inst_46139);

(statearr_46239_47384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (31))){
var inst_46165 = (state_46215[(12)]);
var inst_46169 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46165);
var state_46215__$1 = state_46215;
var statearr_46240_47385 = state_46215__$1;
(statearr_46240_47385[(2)] = inst_46169);

(statearr_46240_47385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (32))){
var inst_46160 = (state_46215[(10)]);
var inst_46157 = (state_46215[(19)]);
var inst_46158 = (state_46215[(11)]);
var inst_46159 = (state_46215[(20)]);
var inst_46171 = (state_46215[(2)]);
var inst_46172 = (inst_46160 + (1));
var tmp46236 = inst_46157;
var tmp46237 = inst_46158;
var tmp46238 = inst_46159;
var inst_46157__$1 = tmp46236;
var inst_46158__$1 = tmp46237;
var inst_46159__$1 = tmp46238;
var inst_46160__$1 = inst_46172;
var state_46215__$1 = (function (){var statearr_46241 = state_46215;
(statearr_46241[(10)] = inst_46160__$1);

(statearr_46241[(19)] = inst_46157__$1);

(statearr_46241[(21)] = inst_46171);

(statearr_46241[(11)] = inst_46158__$1);

(statearr_46241[(20)] = inst_46159__$1);

return statearr_46241;
})();
var statearr_46242_47386 = state_46215__$1;
(statearr_46242_47386[(2)] = null);

(statearr_46242_47386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (40))){
var inst_46184 = (state_46215[(22)]);
var inst_46188 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46184);
var state_46215__$1 = state_46215;
var statearr_46243_47387 = state_46215__$1;
(statearr_46243_47387[(2)] = inst_46188);

(statearr_46243_47387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (33))){
var inst_46175 = (state_46215[(23)]);
var inst_46177 = cljs.core.chunked_seq_QMARK_(inst_46175);
var state_46215__$1 = state_46215;
if(inst_46177){
var statearr_46244_47388 = state_46215__$1;
(statearr_46244_47388[(1)] = (36));

} else {
var statearr_46245_47389 = state_46215__$1;
(statearr_46245_47389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (13))){
var inst_46106 = (state_46215[(24)]);
var inst_46109 = cljs.core.async.close_BANG_(inst_46106);
var state_46215__$1 = state_46215;
var statearr_46246_47390 = state_46215__$1;
(statearr_46246_47390[(2)] = inst_46109);

(statearr_46246_47390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (22))){
var inst_46129 = (state_46215[(8)]);
var inst_46132 = cljs.core.async.close_BANG_(inst_46129);
var state_46215__$1 = state_46215;
var statearr_46247_47391 = state_46215__$1;
(statearr_46247_47391[(2)] = inst_46132);

(statearr_46247_47391[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (36))){
var inst_46175 = (state_46215[(23)]);
var inst_46179 = cljs.core.chunk_first(inst_46175);
var inst_46180 = cljs.core.chunk_rest(inst_46175);
var inst_46181 = cljs.core.count(inst_46179);
var inst_46157 = inst_46180;
var inst_46158 = inst_46179;
var inst_46159 = inst_46181;
var inst_46160 = (0);
var state_46215__$1 = (function (){var statearr_46248 = state_46215;
(statearr_46248[(10)] = inst_46160);

(statearr_46248[(19)] = inst_46157);

(statearr_46248[(11)] = inst_46158);

(statearr_46248[(20)] = inst_46159);

return statearr_46248;
})();
var statearr_46249_47392 = state_46215__$1;
(statearr_46249_47392[(2)] = null);

(statearr_46249_47392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (41))){
var inst_46175 = (state_46215[(23)]);
var inst_46190 = (state_46215[(2)]);
var inst_46191 = cljs.core.next(inst_46175);
var inst_46157 = inst_46191;
var inst_46158 = null;
var inst_46159 = (0);
var inst_46160 = (0);
var state_46215__$1 = (function (){var statearr_46250 = state_46215;
(statearr_46250[(10)] = inst_46160);

(statearr_46250[(19)] = inst_46157);

(statearr_46250[(11)] = inst_46158);

(statearr_46250[(20)] = inst_46159);

(statearr_46250[(25)] = inst_46190);

return statearr_46250;
})();
var statearr_46251_47393 = state_46215__$1;
(statearr_46251_47393[(2)] = null);

(statearr_46251_47393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (43))){
var state_46215__$1 = state_46215;
var statearr_46252_47394 = state_46215__$1;
(statearr_46252_47394[(2)] = null);

(statearr_46252_47394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (29))){
var inst_46199 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46253_47395 = state_46215__$1;
(statearr_46253_47395[(2)] = inst_46199);

(statearr_46253_47395[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (44))){
var inst_46208 = (state_46215[(2)]);
var state_46215__$1 = (function (){var statearr_46254 = state_46215;
(statearr_46254[(26)] = inst_46208);

return statearr_46254;
})();
var statearr_46255_47396 = state_46215__$1;
(statearr_46255_47396[(2)] = null);

(statearr_46255_47396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (6))){
var inst_46149 = (state_46215[(27)]);
var inst_46148 = cljs.core.deref(cs);
var inst_46149__$1 = cljs.core.keys(inst_46148);
var inst_46150 = cljs.core.count(inst_46149__$1);
var inst_46151 = cljs.core.reset_BANG_(dctr,inst_46150);
var inst_46156 = cljs.core.seq(inst_46149__$1);
var inst_46157 = inst_46156;
var inst_46158 = null;
var inst_46159 = (0);
var inst_46160 = (0);
var state_46215__$1 = (function (){var statearr_46256 = state_46215;
(statearr_46256[(10)] = inst_46160);

(statearr_46256[(28)] = inst_46151);

(statearr_46256[(19)] = inst_46157);

(statearr_46256[(11)] = inst_46158);

(statearr_46256[(20)] = inst_46159);

(statearr_46256[(27)] = inst_46149__$1);

return statearr_46256;
})();
var statearr_46257_47397 = state_46215__$1;
(statearr_46257_47397[(2)] = null);

(statearr_46257_47397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (28))){
var inst_46157 = (state_46215[(19)]);
var inst_46175 = (state_46215[(23)]);
var inst_46175__$1 = cljs.core.seq(inst_46157);
var state_46215__$1 = (function (){var statearr_46258 = state_46215;
(statearr_46258[(23)] = inst_46175__$1);

return statearr_46258;
})();
if(inst_46175__$1){
var statearr_46259_47398 = state_46215__$1;
(statearr_46259_47398[(1)] = (33));

} else {
var statearr_46260_47399 = state_46215__$1;
(statearr_46260_47399[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (25))){
var inst_46160 = (state_46215[(10)]);
var inst_46159 = (state_46215[(20)]);
var inst_46162 = (inst_46160 < inst_46159);
var inst_46163 = inst_46162;
var state_46215__$1 = state_46215;
if(cljs.core.truth_(inst_46163)){
var statearr_46261_47400 = state_46215__$1;
(statearr_46261_47400[(1)] = (27));

} else {
var statearr_46262_47401 = state_46215__$1;
(statearr_46262_47401[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (34))){
var state_46215__$1 = state_46215;
var statearr_46263_47402 = state_46215__$1;
(statearr_46263_47402[(2)] = null);

(statearr_46263_47402[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (17))){
var state_46215__$1 = state_46215;
var statearr_46264_47404 = state_46215__$1;
(statearr_46264_47404[(2)] = null);

(statearr_46264_47404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (3))){
var inst_46213 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46215__$1,inst_46213);
} else {
if((state_val_46216 === (12))){
var inst_46144 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46265_47406 = state_46215__$1;
(statearr_46265_47406[(2)] = inst_46144);

(statearr_46265_47406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (2))){
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46215__$1,(4),ch);
} else {
if((state_val_46216 === (23))){
var state_46215__$1 = state_46215;
var statearr_46266_47407 = state_46215__$1;
(statearr_46266_47407[(2)] = null);

(statearr_46266_47407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (35))){
var inst_46197 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46267_47408 = state_46215__$1;
(statearr_46267_47408[(2)] = inst_46197);

(statearr_46267_47408[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (19))){
var inst_46116 = (state_46215[(7)]);
var inst_46120 = cljs.core.chunk_first(inst_46116);
var inst_46121 = cljs.core.chunk_rest(inst_46116);
var inst_46122 = cljs.core.count(inst_46120);
var inst_46094 = inst_46121;
var inst_46095 = inst_46120;
var inst_46096 = inst_46122;
var inst_46097 = (0);
var state_46215__$1 = (function (){var statearr_46268 = state_46215;
(statearr_46268[(13)] = inst_46095);

(statearr_46268[(14)] = inst_46097);

(statearr_46268[(15)] = inst_46096);

(statearr_46268[(16)] = inst_46094);

return statearr_46268;
})();
var statearr_46269_47409 = state_46215__$1;
(statearr_46269_47409[(2)] = null);

(statearr_46269_47409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (11))){
var inst_46116 = (state_46215[(7)]);
var inst_46094 = (state_46215[(16)]);
var inst_46116__$1 = cljs.core.seq(inst_46094);
var state_46215__$1 = (function (){var statearr_46270 = state_46215;
(statearr_46270[(7)] = inst_46116__$1);

return statearr_46270;
})();
if(inst_46116__$1){
var statearr_46271_47410 = state_46215__$1;
(statearr_46271_47410[(1)] = (16));

} else {
var statearr_46272_47411 = state_46215__$1;
(statearr_46272_47411[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (9))){
var inst_46146 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46273_47412 = state_46215__$1;
(statearr_46273_47412[(2)] = inst_46146);

(statearr_46273_47412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (5))){
var inst_46092 = cljs.core.deref(cs);
var inst_46093 = cljs.core.seq(inst_46092);
var inst_46094 = inst_46093;
var inst_46095 = null;
var inst_46096 = (0);
var inst_46097 = (0);
var state_46215__$1 = (function (){var statearr_46274 = state_46215;
(statearr_46274[(13)] = inst_46095);

(statearr_46274[(14)] = inst_46097);

(statearr_46274[(15)] = inst_46096);

(statearr_46274[(16)] = inst_46094);

return statearr_46274;
})();
var statearr_46275_47413 = state_46215__$1;
(statearr_46275_47413[(2)] = null);

(statearr_46275_47413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (14))){
var state_46215__$1 = state_46215;
var statearr_46276_47414 = state_46215__$1;
(statearr_46276_47414[(2)] = null);

(statearr_46276_47414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (45))){
var inst_46205 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46277_47415 = state_46215__$1;
(statearr_46277_47415[(2)] = inst_46205);

(statearr_46277_47415[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (26))){
var inst_46149 = (state_46215[(27)]);
var inst_46201 = (state_46215[(2)]);
var inst_46202 = cljs.core.seq(inst_46149);
var state_46215__$1 = (function (){var statearr_46278 = state_46215;
(statearr_46278[(29)] = inst_46201);

return statearr_46278;
})();
if(inst_46202){
var statearr_46279_47416 = state_46215__$1;
(statearr_46279_47416[(1)] = (42));

} else {
var statearr_46280_47417 = state_46215__$1;
(statearr_46280_47417[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (16))){
var inst_46116 = (state_46215[(7)]);
var inst_46118 = cljs.core.chunked_seq_QMARK_(inst_46116);
var state_46215__$1 = state_46215;
if(inst_46118){
var statearr_46281_47418 = state_46215__$1;
(statearr_46281_47418[(1)] = (19));

} else {
var statearr_46282_47419 = state_46215__$1;
(statearr_46282_47419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (38))){
var inst_46194 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46283_47420 = state_46215__$1;
(statearr_46283_47420[(2)] = inst_46194);

(statearr_46283_47420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (30))){
var state_46215__$1 = state_46215;
var statearr_46284_47421 = state_46215__$1;
(statearr_46284_47421[(2)] = null);

(statearr_46284_47421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (10))){
var inst_46095 = (state_46215[(13)]);
var inst_46097 = (state_46215[(14)]);
var inst_46105 = cljs.core._nth(inst_46095,inst_46097);
var inst_46106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46105,(0),null);
var inst_46107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46105,(1),null);
var state_46215__$1 = (function (){var statearr_46285 = state_46215;
(statearr_46285[(24)] = inst_46106);

return statearr_46285;
})();
if(cljs.core.truth_(inst_46107)){
var statearr_46286_47422 = state_46215__$1;
(statearr_46286_47422[(1)] = (13));

} else {
var statearr_46287_47423 = state_46215__$1;
(statearr_46287_47423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (18))){
var inst_46142 = (state_46215[(2)]);
var state_46215__$1 = state_46215;
var statearr_46288_47424 = state_46215__$1;
(statearr_46288_47424[(2)] = inst_46142);

(statearr_46288_47424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (42))){
var state_46215__$1 = state_46215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46215__$1,(45),dchan);
} else {
if((state_val_46216 === (37))){
var inst_46085 = (state_46215[(9)]);
var inst_46184 = (state_46215[(22)]);
var inst_46175 = (state_46215[(23)]);
var inst_46184__$1 = cljs.core.first(inst_46175);
var inst_46185 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46184__$1,inst_46085,done);
var state_46215__$1 = (function (){var statearr_46289 = state_46215;
(statearr_46289[(22)] = inst_46184__$1);

return statearr_46289;
})();
if(cljs.core.truth_(inst_46185)){
var statearr_46290_47425 = state_46215__$1;
(statearr_46290_47425[(1)] = (39));

} else {
var statearr_46291_47427 = state_46215__$1;
(statearr_46291_47427[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46216 === (8))){
var inst_46097 = (state_46215[(14)]);
var inst_46096 = (state_46215[(15)]);
var inst_46099 = (inst_46097 < inst_46096);
var inst_46100 = inst_46099;
var state_46215__$1 = state_46215;
if(cljs.core.truth_(inst_46100)){
var statearr_46292_47431 = state_46215__$1;
(statearr_46292_47431[(1)] = (10));

} else {
var statearr_46293_47432 = state_46215__$1;
(statearr_46293_47432[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__45289__auto__ = null;
var cljs$core$async$mult_$_state_machine__45289__auto____0 = (function (){
var statearr_46294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46294[(0)] = cljs$core$async$mult_$_state_machine__45289__auto__);

(statearr_46294[(1)] = (1));

return statearr_46294;
});
var cljs$core$async$mult_$_state_machine__45289__auto____1 = (function (state_46215){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46215);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46295){var ex__45292__auto__ = e46295;
var statearr_46296_47433 = state_46215;
(statearr_46296_47433[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46215[(4)]))){
var statearr_46297_47434 = state_46215;
(statearr_46297_47434[(1)] = cljs.core.first((state_46215[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47435 = state_46215;
state_46215 = G__47435;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45289__auto__ = function(state_46215){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45289__auto____1.call(this,state_46215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45289__auto____0;
cljs$core$async$mult_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45289__auto____1;
return cljs$core$async$mult_$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46298 = f__45587__auto__();
(statearr_46298[(6)] = c__45586__auto___47372);

return statearr_46298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46300 = arguments.length;
switch (G__46300) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47440 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47440(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47441 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47441(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47448 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47448(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47449 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47449(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47450 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47450(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47451 = arguments.length;
var i__4830__auto___47452 = (0);
while(true){
if((i__4830__auto___47452 < len__4829__auto___47451)){
args__4835__auto__.push((arguments[i__4830__auto___47452]));

var G__47453 = (i__4830__auto___47452 + (1));
i__4830__auto___47452 = G__47453;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46305){
var map__46306 = p__46305;
var map__46306__$1 = cljs.core.__destructure_map(map__46306);
var opts = map__46306__$1;
var statearr_46307_47454 = state;
(statearr_46307_47454[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46308_47455 = state;
(statearr_46308_47455[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_46309_47456 = state;
(statearr_46309_47456[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46301){
var G__46302 = cljs.core.first(seq46301);
var seq46301__$1 = cljs.core.next(seq46301);
var G__46303 = cljs.core.first(seq46301__$1);
var seq46301__$2 = cljs.core.next(seq46301__$1);
var G__46304 = cljs.core.first(seq46301__$2);
var seq46301__$3 = cljs.core.next(seq46301__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46302,G__46303,G__46304,seq46301__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46310 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46311){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46311 = meta46311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46312,meta46311__$1){
var self__ = this;
var _46312__$1 = this;
return (new cljs.core.async.t_cljs$core$async46310(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46311__$1));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46312){
var self__ = this;
var _46312__$1 = this;
return self__.meta46311;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46311","meta46311",-159915992,null)], null);
}));

(cljs.core.async.t_cljs$core$async46310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46310");

(cljs.core.async.t_cljs$core$async46310.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46310.
 */
cljs.core.async.__GT_t_cljs$core$async46310 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46311){
return (new cljs.core.async.t_cljs$core$async46310(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46311));
});

}

return (new cljs.core.async.t_cljs$core$async46310(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45586__auto___47470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46387){
var state_val_46388 = (state_46387[(1)]);
if((state_val_46388 === (7))){
var inst_46344 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
if(cljs.core.truth_(inst_46344)){
var statearr_46389_47471 = state_46387__$1;
(statearr_46389_47471[(1)] = (8));

} else {
var statearr_46390_47472 = state_46387__$1;
(statearr_46390_47472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (20))){
var inst_46337 = (state_46387[(7)]);
var state_46387__$1 = state_46387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46387__$1,(23),out,inst_46337);
} else {
if((state_val_46388 === (1))){
var inst_46316 = calc_state();
var inst_46317 = cljs.core.__destructure_map(inst_46316);
var inst_46318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46321 = inst_46316;
var state_46387__$1 = (function (){var statearr_46391 = state_46387;
(statearr_46391[(8)] = inst_46321);

(statearr_46391[(9)] = inst_46318);

(statearr_46391[(10)] = inst_46319);

(statearr_46391[(11)] = inst_46320);

return statearr_46391;
})();
var statearr_46392_47473 = state_46387__$1;
(statearr_46392_47473[(2)] = null);

(statearr_46392_47473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (24))){
var inst_46328 = (state_46387[(12)]);
var inst_46321 = inst_46328;
var state_46387__$1 = (function (){var statearr_46393 = state_46387;
(statearr_46393[(8)] = inst_46321);

return statearr_46393;
})();
var statearr_46394_47474 = state_46387__$1;
(statearr_46394_47474[(2)] = null);

(statearr_46394_47474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (4))){
var inst_46337 = (state_46387[(7)]);
var inst_46339 = (state_46387[(13)]);
var inst_46336 = (state_46387[(2)]);
var inst_46337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46336,(0),null);
var inst_46338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46336,(1),null);
var inst_46339__$1 = (inst_46337__$1 == null);
var state_46387__$1 = (function (){var statearr_46395 = state_46387;
(statearr_46395[(14)] = inst_46338);

(statearr_46395[(7)] = inst_46337__$1);

(statearr_46395[(13)] = inst_46339__$1);

return statearr_46395;
})();
if(cljs.core.truth_(inst_46339__$1)){
var statearr_46396_47475 = state_46387__$1;
(statearr_46396_47475[(1)] = (5));

} else {
var statearr_46397_47476 = state_46387__$1;
(statearr_46397_47476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (15))){
var inst_46358 = (state_46387[(15)]);
var inst_46329 = (state_46387[(16)]);
var inst_46358__$1 = cljs.core.empty_QMARK_(inst_46329);
var state_46387__$1 = (function (){var statearr_46398 = state_46387;
(statearr_46398[(15)] = inst_46358__$1);

return statearr_46398;
})();
if(inst_46358__$1){
var statearr_46399_47480 = state_46387__$1;
(statearr_46399_47480[(1)] = (17));

} else {
var statearr_46400_47481 = state_46387__$1;
(statearr_46400_47481[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (21))){
var inst_46328 = (state_46387[(12)]);
var inst_46321 = inst_46328;
var state_46387__$1 = (function (){var statearr_46401 = state_46387;
(statearr_46401[(8)] = inst_46321);

return statearr_46401;
})();
var statearr_46402_47482 = state_46387__$1;
(statearr_46402_47482[(2)] = null);

(statearr_46402_47482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (13))){
var inst_46351 = (state_46387[(2)]);
var inst_46352 = calc_state();
var inst_46321 = inst_46352;
var state_46387__$1 = (function (){var statearr_46403 = state_46387;
(statearr_46403[(8)] = inst_46321);

(statearr_46403[(17)] = inst_46351);

return statearr_46403;
})();
var statearr_46404_47483 = state_46387__$1;
(statearr_46404_47483[(2)] = null);

(statearr_46404_47483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (22))){
var inst_46378 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
var statearr_46405_47484 = state_46387__$1;
(statearr_46405_47484[(2)] = inst_46378);

(statearr_46405_47484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (6))){
var inst_46338 = (state_46387[(14)]);
var inst_46342 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46338,change);
var state_46387__$1 = state_46387;
var statearr_46406_47488 = state_46387__$1;
(statearr_46406_47488[(2)] = inst_46342);

(statearr_46406_47488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (25))){
var state_46387__$1 = state_46387;
var statearr_46407_47489 = state_46387__$1;
(statearr_46407_47489[(2)] = null);

(statearr_46407_47489[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (17))){
var inst_46338 = (state_46387[(14)]);
var inst_46330 = (state_46387[(18)]);
var inst_46360 = (inst_46330.cljs$core$IFn$_invoke$arity$1 ? inst_46330.cljs$core$IFn$_invoke$arity$1(inst_46338) : inst_46330.call(null,inst_46338));
var inst_46361 = cljs.core.not(inst_46360);
var state_46387__$1 = state_46387;
var statearr_46410_47490 = state_46387__$1;
(statearr_46410_47490[(2)] = inst_46361);

(statearr_46410_47490[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (3))){
var inst_46382 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46387__$1,inst_46382);
} else {
if((state_val_46388 === (12))){
var state_46387__$1 = state_46387;
var statearr_46411_47491 = state_46387__$1;
(statearr_46411_47491[(2)] = null);

(statearr_46411_47491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (2))){
var inst_46328 = (state_46387[(12)]);
var inst_46321 = (state_46387[(8)]);
var inst_46328__$1 = cljs.core.__destructure_map(inst_46321);
var inst_46329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46328__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46328__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46328__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46387__$1 = (function (){var statearr_46412 = state_46387;
(statearr_46412[(12)] = inst_46328__$1);

(statearr_46412[(18)] = inst_46330);

(statearr_46412[(16)] = inst_46329);

return statearr_46412;
})();
return cljs.core.async.ioc_alts_BANG_(state_46387__$1,(4),inst_46331);
} else {
if((state_val_46388 === (23))){
var inst_46369 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
if(cljs.core.truth_(inst_46369)){
var statearr_46413_47493 = state_46387__$1;
(statearr_46413_47493[(1)] = (24));

} else {
var statearr_46414_47494 = state_46387__$1;
(statearr_46414_47494[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (19))){
var inst_46364 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
var statearr_46415_47495 = state_46387__$1;
(statearr_46415_47495[(2)] = inst_46364);

(statearr_46415_47495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (11))){
var inst_46338 = (state_46387[(14)]);
var inst_46348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46338);
var state_46387__$1 = state_46387;
var statearr_46416_47496 = state_46387__$1;
(statearr_46416_47496[(2)] = inst_46348);

(statearr_46416_47496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (9))){
var inst_46338 = (state_46387[(14)]);
var inst_46355 = (state_46387[(19)]);
var inst_46329 = (state_46387[(16)]);
var inst_46355__$1 = (inst_46329.cljs$core$IFn$_invoke$arity$1 ? inst_46329.cljs$core$IFn$_invoke$arity$1(inst_46338) : inst_46329.call(null,inst_46338));
var state_46387__$1 = (function (){var statearr_46417 = state_46387;
(statearr_46417[(19)] = inst_46355__$1);

return statearr_46417;
})();
if(cljs.core.truth_(inst_46355__$1)){
var statearr_46418_47497 = state_46387__$1;
(statearr_46418_47497[(1)] = (14));

} else {
var statearr_46419_47498 = state_46387__$1;
(statearr_46419_47498[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (5))){
var inst_46339 = (state_46387[(13)]);
var state_46387__$1 = state_46387;
var statearr_46420_47499 = state_46387__$1;
(statearr_46420_47499[(2)] = inst_46339);

(statearr_46420_47499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (14))){
var inst_46355 = (state_46387[(19)]);
var state_46387__$1 = state_46387;
var statearr_46421_47500 = state_46387__$1;
(statearr_46421_47500[(2)] = inst_46355);

(statearr_46421_47500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (26))){
var inst_46374 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
var statearr_46422_47501 = state_46387__$1;
(statearr_46422_47501[(2)] = inst_46374);

(statearr_46422_47501[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (16))){
var inst_46366 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
if(cljs.core.truth_(inst_46366)){
var statearr_46423_47502 = state_46387__$1;
(statearr_46423_47502[(1)] = (20));

} else {
var statearr_46424_47503 = state_46387__$1;
(statearr_46424_47503[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (10))){
var inst_46380 = (state_46387[(2)]);
var state_46387__$1 = state_46387;
var statearr_46425_47504 = state_46387__$1;
(statearr_46425_47504[(2)] = inst_46380);

(statearr_46425_47504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (18))){
var inst_46358 = (state_46387[(15)]);
var state_46387__$1 = state_46387;
var statearr_46426_47505 = state_46387__$1;
(statearr_46426_47505[(2)] = inst_46358);

(statearr_46426_47505[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46388 === (8))){
var inst_46337 = (state_46387[(7)]);
var inst_46346 = (inst_46337 == null);
var state_46387__$1 = state_46387;
if(cljs.core.truth_(inst_46346)){
var statearr_46427_47506 = state_46387__$1;
(statearr_46427_47506[(1)] = (11));

} else {
var statearr_46428_47507 = state_46387__$1;
(statearr_46428_47507[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__45289__auto__ = null;
var cljs$core$async$mix_$_state_machine__45289__auto____0 = (function (){
var statearr_46429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46429[(0)] = cljs$core$async$mix_$_state_machine__45289__auto__);

(statearr_46429[(1)] = (1));

return statearr_46429;
});
var cljs$core$async$mix_$_state_machine__45289__auto____1 = (function (state_46387){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46387);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46430){var ex__45292__auto__ = e46430;
var statearr_46431_47508 = state_46387;
(statearr_46431_47508[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46387[(4)]))){
var statearr_46432_47509 = state_46387;
(statearr_46432_47509[(1)] = cljs.core.first((state_46387[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47510 = state_46387;
state_46387 = G__47510;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45289__auto__ = function(state_46387){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45289__auto____1.call(this,state_46387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45289__auto____0;
cljs$core$async$mix_$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45289__auto____1;
return cljs$core$async$mix_$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46433 = f__45587__auto__();
(statearr_46433[(6)] = c__45586__auto___47470);

return statearr_46433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47511 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47511(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47512 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47512(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47513 = (function() {
var G__47514 = null;
var G__47514__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47514__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47514 = function(p,v){
switch(arguments.length){
case 1:
return G__47514__1.call(this,p);
case 2:
return G__47514__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47514.cljs$core$IFn$_invoke$arity$1 = G__47514__1;
G__47514.cljs$core$IFn$_invoke$arity$2 = G__47514__2;
return G__47514;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46435 = arguments.length;
switch (G__46435) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47513(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47513(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46439 = arguments.length;
switch (G__46439) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46436_SHARP_){
if(cljs.core.truth_((p1__46436_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46436_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46436_SHARP_.call(null,topic)))){
return p1__46436_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46436_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46442 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46442 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46443){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46443 = meta46443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46444,meta46443__$1){
var self__ = this;
var _46444__$1 = this;
return (new cljs.core.async.t_cljs$core$async46442(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46443__$1));
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46444){
var self__ = this;
var _46444__$1 = this;
return self__.meta46443;
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46443","meta46443",-2079179087,null)], null);
}));

(cljs.core.async.t_cljs$core$async46442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46442");

(cljs.core.async.t_cljs$core$async46442.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46442.
 */
cljs.core.async.__GT_t_cljs$core$async46442 = (function cljs$core$async$__GT_t_cljs$core$async46442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46443){
return (new cljs.core.async.t_cljs$core$async46442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46443));
});

}

return (new cljs.core.async.t_cljs$core$async46442(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45586__auto___47525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46523){
var state_val_46524 = (state_46523[(1)]);
if((state_val_46524 === (7))){
var inst_46519 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46525_47526 = state_46523__$1;
(statearr_46525_47526[(2)] = inst_46519);

(statearr_46525_47526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (20))){
var state_46523__$1 = state_46523;
var statearr_46526_47528 = state_46523__$1;
(statearr_46526_47528[(2)] = null);

(statearr_46526_47528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (1))){
var state_46523__$1 = state_46523;
var statearr_46527_47532 = state_46523__$1;
(statearr_46527_47532[(2)] = null);

(statearr_46527_47532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (24))){
var inst_46502 = (state_46523[(7)]);
var inst_46511 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46502);
var state_46523__$1 = state_46523;
var statearr_46528_47533 = state_46523__$1;
(statearr_46528_47533[(2)] = inst_46511);

(statearr_46528_47533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (4))){
var inst_46454 = (state_46523[(8)]);
var inst_46454__$1 = (state_46523[(2)]);
var inst_46455 = (inst_46454__$1 == null);
var state_46523__$1 = (function (){var statearr_46529 = state_46523;
(statearr_46529[(8)] = inst_46454__$1);

return statearr_46529;
})();
if(cljs.core.truth_(inst_46455)){
var statearr_46530_47534 = state_46523__$1;
(statearr_46530_47534[(1)] = (5));

} else {
var statearr_46531_47537 = state_46523__$1;
(statearr_46531_47537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (15))){
var inst_46496 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46532_47538 = state_46523__$1;
(statearr_46532_47538[(2)] = inst_46496);

(statearr_46532_47538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (21))){
var inst_46516 = (state_46523[(2)]);
var state_46523__$1 = (function (){var statearr_46533 = state_46523;
(statearr_46533[(9)] = inst_46516);

return statearr_46533;
})();
var statearr_46534_47541 = state_46523__$1;
(statearr_46534_47541[(2)] = null);

(statearr_46534_47541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (13))){
var inst_46478 = (state_46523[(10)]);
var inst_46480 = cljs.core.chunked_seq_QMARK_(inst_46478);
var state_46523__$1 = state_46523;
if(inst_46480){
var statearr_46535_47542 = state_46523__$1;
(statearr_46535_47542[(1)] = (16));

} else {
var statearr_46536_47543 = state_46523__$1;
(statearr_46536_47543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (22))){
var inst_46508 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
if(cljs.core.truth_(inst_46508)){
var statearr_46537_47544 = state_46523__$1;
(statearr_46537_47544[(1)] = (23));

} else {
var statearr_46538_47545 = state_46523__$1;
(statearr_46538_47545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (6))){
var inst_46454 = (state_46523[(8)]);
var inst_46504 = (state_46523[(11)]);
var inst_46502 = (state_46523[(7)]);
var inst_46502__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46454) : topic_fn.call(null,inst_46454));
var inst_46503 = cljs.core.deref(mults);
var inst_46504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46503,inst_46502__$1);
var state_46523__$1 = (function (){var statearr_46539 = state_46523;
(statearr_46539[(11)] = inst_46504__$1);

(statearr_46539[(7)] = inst_46502__$1);

return statearr_46539;
})();
if(cljs.core.truth_(inst_46504__$1)){
var statearr_46540_47553 = state_46523__$1;
(statearr_46540_47553[(1)] = (19));

} else {
var statearr_46541_47554 = state_46523__$1;
(statearr_46541_47554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (25))){
var inst_46513 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46542_47556 = state_46523__$1;
(statearr_46542_47556[(2)] = inst_46513);

(statearr_46542_47556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (17))){
var inst_46478 = (state_46523[(10)]);
var inst_46487 = cljs.core.first(inst_46478);
var inst_46488 = cljs.core.async.muxch_STAR_(inst_46487);
var inst_46489 = cljs.core.async.close_BANG_(inst_46488);
var inst_46490 = cljs.core.next(inst_46478);
var inst_46464 = inst_46490;
var inst_46465 = null;
var inst_46466 = (0);
var inst_46467 = (0);
var state_46523__$1 = (function (){var statearr_46543 = state_46523;
(statearr_46543[(12)] = inst_46464);

(statearr_46543[(13)] = inst_46465);

(statearr_46543[(14)] = inst_46489);

(statearr_46543[(15)] = inst_46466);

(statearr_46543[(16)] = inst_46467);

return statearr_46543;
})();
var statearr_46544_47562 = state_46523__$1;
(statearr_46544_47562[(2)] = null);

(statearr_46544_47562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (3))){
var inst_46521 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46523__$1,inst_46521);
} else {
if((state_val_46524 === (12))){
var inst_46498 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46545_47563 = state_46523__$1;
(statearr_46545_47563[(2)] = inst_46498);

(statearr_46545_47563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (2))){
var state_46523__$1 = state_46523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46523__$1,(4),ch);
} else {
if((state_val_46524 === (23))){
var state_46523__$1 = state_46523;
var statearr_46546_47564 = state_46523__$1;
(statearr_46546_47564[(2)] = null);

(statearr_46546_47564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (19))){
var inst_46454 = (state_46523[(8)]);
var inst_46504 = (state_46523[(11)]);
var inst_46506 = cljs.core.async.muxch_STAR_(inst_46504);
var state_46523__$1 = state_46523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46523__$1,(22),inst_46506,inst_46454);
} else {
if((state_val_46524 === (11))){
var inst_46464 = (state_46523[(12)]);
var inst_46478 = (state_46523[(10)]);
var inst_46478__$1 = cljs.core.seq(inst_46464);
var state_46523__$1 = (function (){var statearr_46547 = state_46523;
(statearr_46547[(10)] = inst_46478__$1);

return statearr_46547;
})();
if(inst_46478__$1){
var statearr_46548_47565 = state_46523__$1;
(statearr_46548_47565[(1)] = (13));

} else {
var statearr_46549_47566 = state_46523__$1;
(statearr_46549_47566[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (9))){
var inst_46500 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46550_47567 = state_46523__$1;
(statearr_46550_47567[(2)] = inst_46500);

(statearr_46550_47567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (5))){
var inst_46461 = cljs.core.deref(mults);
var inst_46462 = cljs.core.vals(inst_46461);
var inst_46463 = cljs.core.seq(inst_46462);
var inst_46464 = inst_46463;
var inst_46465 = null;
var inst_46466 = (0);
var inst_46467 = (0);
var state_46523__$1 = (function (){var statearr_46551 = state_46523;
(statearr_46551[(12)] = inst_46464);

(statearr_46551[(13)] = inst_46465);

(statearr_46551[(15)] = inst_46466);

(statearr_46551[(16)] = inst_46467);

return statearr_46551;
})();
var statearr_46552_47568 = state_46523__$1;
(statearr_46552_47568[(2)] = null);

(statearr_46552_47568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (14))){
var state_46523__$1 = state_46523;
var statearr_46556_47569 = state_46523__$1;
(statearr_46556_47569[(2)] = null);

(statearr_46556_47569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (16))){
var inst_46478 = (state_46523[(10)]);
var inst_46482 = cljs.core.chunk_first(inst_46478);
var inst_46483 = cljs.core.chunk_rest(inst_46478);
var inst_46484 = cljs.core.count(inst_46482);
var inst_46464 = inst_46483;
var inst_46465 = inst_46482;
var inst_46466 = inst_46484;
var inst_46467 = (0);
var state_46523__$1 = (function (){var statearr_46557 = state_46523;
(statearr_46557[(12)] = inst_46464);

(statearr_46557[(13)] = inst_46465);

(statearr_46557[(15)] = inst_46466);

(statearr_46557[(16)] = inst_46467);

return statearr_46557;
})();
var statearr_46558_47570 = state_46523__$1;
(statearr_46558_47570[(2)] = null);

(statearr_46558_47570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (10))){
var inst_46464 = (state_46523[(12)]);
var inst_46465 = (state_46523[(13)]);
var inst_46466 = (state_46523[(15)]);
var inst_46467 = (state_46523[(16)]);
var inst_46472 = cljs.core._nth(inst_46465,inst_46467);
var inst_46473 = cljs.core.async.muxch_STAR_(inst_46472);
var inst_46474 = cljs.core.async.close_BANG_(inst_46473);
var inst_46475 = (inst_46467 + (1));
var tmp46553 = inst_46464;
var tmp46554 = inst_46465;
var tmp46555 = inst_46466;
var inst_46464__$1 = tmp46553;
var inst_46465__$1 = tmp46554;
var inst_46466__$1 = tmp46555;
var inst_46467__$1 = inst_46475;
var state_46523__$1 = (function (){var statearr_46559 = state_46523;
(statearr_46559[(12)] = inst_46464__$1);

(statearr_46559[(13)] = inst_46465__$1);

(statearr_46559[(17)] = inst_46474);

(statearr_46559[(15)] = inst_46466__$1);

(statearr_46559[(16)] = inst_46467__$1);

return statearr_46559;
})();
var statearr_46560_47577 = state_46523__$1;
(statearr_46560_47577[(2)] = null);

(statearr_46560_47577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (18))){
var inst_46493 = (state_46523[(2)]);
var state_46523__$1 = state_46523;
var statearr_46561_47578 = state_46523__$1;
(statearr_46561_47578[(2)] = inst_46493);

(statearr_46561_47578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46524 === (8))){
var inst_46466 = (state_46523[(15)]);
var inst_46467 = (state_46523[(16)]);
var inst_46469 = (inst_46467 < inst_46466);
var inst_46470 = inst_46469;
var state_46523__$1 = state_46523;
if(cljs.core.truth_(inst_46470)){
var statearr_46564_47579 = state_46523__$1;
(statearr_46564_47579[(1)] = (10));

} else {
var statearr_46565_47580 = state_46523__$1;
(statearr_46565_47580[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46570[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46570[(1)] = (1));

return statearr_46570;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46523){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46523);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46571){var ex__45292__auto__ = e46571;
var statearr_46572_47581 = state_46523;
(statearr_46572_47581[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46523[(4)]))){
var statearr_46573_47582 = state_46523;
(statearr_46573_47582[(1)] = cljs.core.first((state_46523[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47583 = state_46523;
state_46523 = G__47583;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46574 = f__45587__auto__();
(statearr_46574[(6)] = c__45586__auto___47525);

return statearr_46574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46580 = arguments.length;
switch (G__46580) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46590 = arguments.length;
switch (G__46590) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46592 = arguments.length;
switch (G__46592) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__45586__auto___47593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46649){
var state_val_46650 = (state_46649[(1)]);
if((state_val_46650 === (7))){
var state_46649__$1 = state_46649;
var statearr_46654_47594 = state_46649__$1;
(statearr_46654_47594[(2)] = null);

(statearr_46654_47594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (1))){
var state_46649__$1 = state_46649;
var statearr_46657_47595 = state_46649__$1;
(statearr_46657_47595[(2)] = null);

(statearr_46657_47595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (4))){
var inst_46609 = (state_46649[(7)]);
var inst_46610 = (state_46649[(8)]);
var inst_46612 = (inst_46610 < inst_46609);
var state_46649__$1 = state_46649;
if(cljs.core.truth_(inst_46612)){
var statearr_46659_47596 = state_46649__$1;
(statearr_46659_47596[(1)] = (6));

} else {
var statearr_46661_47597 = state_46649__$1;
(statearr_46661_47597[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (15))){
var inst_46635 = (state_46649[(9)]);
var inst_46640 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46635);
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46649__$1,(17),out,inst_46640);
} else {
if((state_val_46650 === (13))){
var inst_46635 = (state_46649[(9)]);
var inst_46635__$1 = (state_46649[(2)]);
var inst_46636 = cljs.core.some(cljs.core.nil_QMARK_,inst_46635__$1);
var state_46649__$1 = (function (){var statearr_46665 = state_46649;
(statearr_46665[(9)] = inst_46635__$1);

return statearr_46665;
})();
if(cljs.core.truth_(inst_46636)){
var statearr_46666_47598 = state_46649__$1;
(statearr_46666_47598[(1)] = (14));

} else {
var statearr_46667_47599 = state_46649__$1;
(statearr_46667_47599[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (6))){
var state_46649__$1 = state_46649;
var statearr_46668_47600 = state_46649__$1;
(statearr_46668_47600[(2)] = null);

(statearr_46668_47600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (17))){
var inst_46642 = (state_46649[(2)]);
var state_46649__$1 = (function (){var statearr_46675 = state_46649;
(statearr_46675[(10)] = inst_46642);

return statearr_46675;
})();
var statearr_46676_47601 = state_46649__$1;
(statearr_46676_47601[(2)] = null);

(statearr_46676_47601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (3))){
var inst_46647 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46649__$1,inst_46647);
} else {
if((state_val_46650 === (12))){
var _ = (function (){var statearr_46677 = state_46649;
(statearr_46677[(4)] = cljs.core.rest((state_46649[(4)])));

return statearr_46677;
})();
var state_46649__$1 = state_46649;
var ex46672 = (state_46649__$1[(2)]);
var statearr_46678_47602 = state_46649__$1;
(statearr_46678_47602[(5)] = ex46672);


if((ex46672 instanceof Object)){
var statearr_46679_47609 = state_46649__$1;
(statearr_46679_47609[(1)] = (11));

(statearr_46679_47609[(5)] = null);

} else {
throw ex46672;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (2))){
var inst_46608 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46609 = cnt;
var inst_46610 = (0);
var state_46649__$1 = (function (){var statearr_46681 = state_46649;
(statearr_46681[(7)] = inst_46609);

(statearr_46681[(8)] = inst_46610);

(statearr_46681[(11)] = inst_46608);

return statearr_46681;
})();
var statearr_46682_47610 = state_46649__$1;
(statearr_46682_47610[(2)] = null);

(statearr_46682_47610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (11))){
var inst_46614 = (state_46649[(2)]);
var inst_46615 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46649__$1 = (function (){var statearr_46683 = state_46649;
(statearr_46683[(12)] = inst_46614);

return statearr_46683;
})();
var statearr_46684_47611 = state_46649__$1;
(statearr_46684_47611[(2)] = inst_46615);

(statearr_46684_47611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (9))){
var inst_46610 = (state_46649[(8)]);
var _ = (function (){var statearr_46685 = state_46649;
(statearr_46685[(4)] = cljs.core.cons((12),(state_46649[(4)])));

return statearr_46685;
})();
var inst_46621 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46610) : chs__$1.call(null,inst_46610));
var inst_46622 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46610) : done.call(null,inst_46610));
var inst_46623 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46621,inst_46622);
var ___$1 = (function (){var statearr_46686 = state_46649;
(statearr_46686[(4)] = cljs.core.rest((state_46649[(4)])));

return statearr_46686;
})();
var state_46649__$1 = state_46649;
var statearr_46687_47612 = state_46649__$1;
(statearr_46687_47612[(2)] = inst_46623);

(statearr_46687_47612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (5))){
var inst_46633 = (state_46649[(2)]);
var state_46649__$1 = (function (){var statearr_46688 = state_46649;
(statearr_46688[(13)] = inst_46633);

return statearr_46688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46649__$1,(13),dchan);
} else {
if((state_val_46650 === (14))){
var inst_46638 = cljs.core.async.close_BANG_(out);
var state_46649__$1 = state_46649;
var statearr_46689_47613 = state_46649__$1;
(statearr_46689_47613[(2)] = inst_46638);

(statearr_46689_47613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (16))){
var inst_46645 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46690_47614 = state_46649__$1;
(statearr_46690_47614[(2)] = inst_46645);

(statearr_46690_47614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (10))){
var inst_46610 = (state_46649[(8)]);
var inst_46626 = (state_46649[(2)]);
var inst_46627 = (inst_46610 + (1));
var inst_46610__$1 = inst_46627;
var state_46649__$1 = (function (){var statearr_46691 = state_46649;
(statearr_46691[(14)] = inst_46626);

(statearr_46691[(8)] = inst_46610__$1);

return statearr_46691;
})();
var statearr_46700_47615 = state_46649__$1;
(statearr_46700_47615[(2)] = null);

(statearr_46700_47615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46650 === (8))){
var inst_46631 = (state_46649[(2)]);
var state_46649__$1 = state_46649;
var statearr_46702_47616 = state_46649__$1;
(statearr_46702_47616[(2)] = inst_46631);

(statearr_46702_47616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46703[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46703[(1)] = (1));

return statearr_46703;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46649){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46649);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46704){var ex__45292__auto__ = e46704;
var statearr_46705_47617 = state_46649;
(statearr_46705_47617[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46649[(4)]))){
var statearr_46706_47618 = state_46649;
(statearr_46706_47618[(1)] = cljs.core.first((state_46649[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47619 = state_46649;
state_46649 = G__47619;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46707 = f__45587__auto__();
(statearr_46707[(6)] = c__45586__auto___47593);

return statearr_46707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46710 = arguments.length;
switch (G__46710) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46742){
var state_val_46743 = (state_46742[(1)]);
if((state_val_46743 === (7))){
var inst_46721 = (state_46742[(7)]);
var inst_46722 = (state_46742[(8)]);
var inst_46721__$1 = (state_46742[(2)]);
var inst_46722__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46721__$1,(0),null);
var inst_46723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46721__$1,(1),null);
var inst_46724 = (inst_46722__$1 == null);
var state_46742__$1 = (function (){var statearr_46744 = state_46742;
(statearr_46744[(7)] = inst_46721__$1);

(statearr_46744[(9)] = inst_46723);

(statearr_46744[(8)] = inst_46722__$1);

return statearr_46744;
})();
if(cljs.core.truth_(inst_46724)){
var statearr_46745_47622 = state_46742__$1;
(statearr_46745_47622[(1)] = (8));

} else {
var statearr_46746_47623 = state_46742__$1;
(statearr_46746_47623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (1))){
var inst_46711 = cljs.core.vec(chs);
var inst_46712 = inst_46711;
var state_46742__$1 = (function (){var statearr_46747 = state_46742;
(statearr_46747[(10)] = inst_46712);

return statearr_46747;
})();
var statearr_46748_47624 = state_46742__$1;
(statearr_46748_47624[(2)] = null);

(statearr_46748_47624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (4))){
var inst_46712 = (state_46742[(10)]);
var state_46742__$1 = state_46742;
return cljs.core.async.ioc_alts_BANG_(state_46742__$1,(7),inst_46712);
} else {
if((state_val_46743 === (6))){
var inst_46738 = (state_46742[(2)]);
var state_46742__$1 = state_46742;
var statearr_46749_47625 = state_46742__$1;
(statearr_46749_47625[(2)] = inst_46738);

(statearr_46749_47625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (3))){
var inst_46740 = (state_46742[(2)]);
var state_46742__$1 = state_46742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46742__$1,inst_46740);
} else {
if((state_val_46743 === (2))){
var inst_46712 = (state_46742[(10)]);
var inst_46714 = cljs.core.count(inst_46712);
var inst_46715 = (inst_46714 > (0));
var state_46742__$1 = state_46742;
if(cljs.core.truth_(inst_46715)){
var statearr_46751_47626 = state_46742__$1;
(statearr_46751_47626[(1)] = (4));

} else {
var statearr_46752_47627 = state_46742__$1;
(statearr_46752_47627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (11))){
var inst_46712 = (state_46742[(10)]);
var inst_46731 = (state_46742[(2)]);
var tmp46750 = inst_46712;
var inst_46712__$1 = tmp46750;
var state_46742__$1 = (function (){var statearr_46753 = state_46742;
(statearr_46753[(11)] = inst_46731);

(statearr_46753[(10)] = inst_46712__$1);

return statearr_46753;
})();
var statearr_46754_47628 = state_46742__$1;
(statearr_46754_47628[(2)] = null);

(statearr_46754_47628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (9))){
var inst_46722 = (state_46742[(8)]);
var state_46742__$1 = state_46742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46742__$1,(11),out,inst_46722);
} else {
if((state_val_46743 === (5))){
var inst_46736 = cljs.core.async.close_BANG_(out);
var state_46742__$1 = state_46742;
var statearr_46755_47630 = state_46742__$1;
(statearr_46755_47630[(2)] = inst_46736);

(statearr_46755_47630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (10))){
var inst_46734 = (state_46742[(2)]);
var state_46742__$1 = state_46742;
var statearr_46756_47631 = state_46742__$1;
(statearr_46756_47631[(2)] = inst_46734);

(statearr_46756_47631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46743 === (8))){
var inst_46721 = (state_46742[(7)]);
var inst_46723 = (state_46742[(9)]);
var inst_46722 = (state_46742[(8)]);
var inst_46712 = (state_46742[(10)]);
var inst_46726 = (function (){var cs = inst_46712;
var vec__46717 = inst_46721;
var v = inst_46722;
var c = inst_46723;
return (function (p1__46708_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46708_SHARP_);
});
})();
var inst_46727 = cljs.core.filterv(inst_46726,inst_46712);
var inst_46712__$1 = inst_46727;
var state_46742__$1 = (function (){var statearr_46757 = state_46742;
(statearr_46757[(10)] = inst_46712__$1);

return statearr_46757;
})();
var statearr_46758_47636 = state_46742__$1;
(statearr_46758_47636[(2)] = null);

(statearr_46758_47636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46763 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46763[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46763[(1)] = (1));

return statearr_46763;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46742){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46742);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46764){var ex__45292__auto__ = e46764;
var statearr_46765_47637 = state_46742;
(statearr_46765_47637[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46742[(4)]))){
var statearr_46766_47638 = state_46742;
(statearr_46766_47638[(1)] = cljs.core.first((state_46742[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47639 = state_46742;
state_46742 = G__47639;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46767 = f__45587__auto__();
(statearr_46767[(6)] = c__45586__auto___47621);

return statearr_46767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46769 = arguments.length;
switch (G__46769) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46796){
var state_val_46797 = (state_46796[(1)]);
if((state_val_46797 === (7))){
var inst_46778 = (state_46796[(7)]);
var inst_46778__$1 = (state_46796[(2)]);
var inst_46779 = (inst_46778__$1 == null);
var inst_46780 = cljs.core.not(inst_46779);
var state_46796__$1 = (function (){var statearr_46798 = state_46796;
(statearr_46798[(7)] = inst_46778__$1);

return statearr_46798;
})();
if(inst_46780){
var statearr_46799_47642 = state_46796__$1;
(statearr_46799_47642[(1)] = (8));

} else {
var statearr_46800_47643 = state_46796__$1;
(statearr_46800_47643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (1))){
var inst_46773 = (0);
var state_46796__$1 = (function (){var statearr_46801 = state_46796;
(statearr_46801[(8)] = inst_46773);

return statearr_46801;
})();
var statearr_46802_47644 = state_46796__$1;
(statearr_46802_47644[(2)] = null);

(statearr_46802_47644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (4))){
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46796__$1,(7),ch);
} else {
if((state_val_46797 === (6))){
var inst_46791 = (state_46796[(2)]);
var state_46796__$1 = state_46796;
var statearr_46803_47646 = state_46796__$1;
(statearr_46803_47646[(2)] = inst_46791);

(statearr_46803_47646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (3))){
var inst_46793 = (state_46796[(2)]);
var inst_46794 = cljs.core.async.close_BANG_(out);
var state_46796__$1 = (function (){var statearr_46804 = state_46796;
(statearr_46804[(9)] = inst_46793);

return statearr_46804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46796__$1,inst_46794);
} else {
if((state_val_46797 === (2))){
var inst_46773 = (state_46796[(8)]);
var inst_46775 = (inst_46773 < n);
var state_46796__$1 = state_46796;
if(cljs.core.truth_(inst_46775)){
var statearr_46805_47648 = state_46796__$1;
(statearr_46805_47648[(1)] = (4));

} else {
var statearr_46806_47649 = state_46796__$1;
(statearr_46806_47649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (11))){
var inst_46773 = (state_46796[(8)]);
var inst_46783 = (state_46796[(2)]);
var inst_46784 = (inst_46773 + (1));
var inst_46773__$1 = inst_46784;
var state_46796__$1 = (function (){var statearr_46807 = state_46796;
(statearr_46807[(8)] = inst_46773__$1);

(statearr_46807[(10)] = inst_46783);

return statearr_46807;
})();
var statearr_46808_47650 = state_46796__$1;
(statearr_46808_47650[(2)] = null);

(statearr_46808_47650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (9))){
var state_46796__$1 = state_46796;
var statearr_46810_47651 = state_46796__$1;
(statearr_46810_47651[(2)] = null);

(statearr_46810_47651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (5))){
var state_46796__$1 = state_46796;
var statearr_46811_47652 = state_46796__$1;
(statearr_46811_47652[(2)] = null);

(statearr_46811_47652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (10))){
var inst_46788 = (state_46796[(2)]);
var state_46796__$1 = state_46796;
var statearr_46812_47654 = state_46796__$1;
(statearr_46812_47654[(2)] = inst_46788);

(statearr_46812_47654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46797 === (8))){
var inst_46778 = (state_46796[(7)]);
var state_46796__$1 = state_46796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46796__$1,(11),out,inst_46778);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46813[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46813[(1)] = (1));

return statearr_46813;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46796){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46796);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46814){var ex__45292__auto__ = e46814;
var statearr_46815_47656 = state_46796;
(statearr_46815_47656[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46796[(4)]))){
var statearr_46816_47657 = state_46796;
(statearr_46816_47657[(1)] = cljs.core.first((state_46796[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47658 = state_46796;
state_46796 = G__47658;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46817 = f__45587__auto__();
(statearr_46817[(6)] = c__45586__auto___47641);

return statearr_46817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46822 = (function (f,ch,meta46823){
this.f = f;
this.ch = ch;
this.meta46823 = meta46823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46824,meta46823__$1){
var self__ = this;
var _46824__$1 = this;
return (new cljs.core.async.t_cljs$core$async46822(self__.f,self__.ch,meta46823__$1));
}));

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46824){
var self__ = this;
var _46824__$1 = this;
return self__.meta46823;
}));

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46825 = (function (f,ch,meta46823,_,fn1,meta46826){
this.f = f;
this.ch = ch;
this.meta46823 = meta46823;
this._ = _;
this.fn1 = fn1;
this.meta46826 = meta46826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46827,meta46826__$1){
var self__ = this;
var _46827__$1 = this;
return (new cljs.core.async.t_cljs$core$async46825(self__.f,self__.ch,self__.meta46823,self__._,self__.fn1,meta46826__$1));
}));

(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46827){
var self__ = this;
var _46827__$1 = this;
return self__.meta46826;
}));

(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46821_SHARP_){
var G__46828 = (((p1__46821_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46821_SHARP_) : self__.f.call(null,p1__46821_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46828) : f1.call(null,G__46828));
});
}));

(cljs.core.async.t_cljs$core$async46825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46823","meta46823",490160407,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46822","cljs.core.async/t_cljs$core$async46822",409391885,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46826","meta46826",393654747,null)], null);
}));

(cljs.core.async.t_cljs$core$async46825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46825");

(cljs.core.async.t_cljs$core$async46825.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46825.
 */
cljs.core.async.__GT_t_cljs$core$async46825 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46825(f__$1,ch__$1,meta46823__$1,___$2,fn1__$1,meta46826){
return (new cljs.core.async.t_cljs$core$async46825(f__$1,ch__$1,meta46823__$1,___$2,fn1__$1,meta46826));
});

}

return (new cljs.core.async.t_cljs$core$async46825(self__.f,self__.ch,self__.meta46823,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46829 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46829) : self__.f.call(null,G__46829));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46823","meta46823",490160407,null)], null);
}));

(cljs.core.async.t_cljs$core$async46822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46822");

(cljs.core.async.t_cljs$core$async46822.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46822.
 */
cljs.core.async.__GT_t_cljs$core$async46822 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46822(f__$1,ch__$1,meta46823){
return (new cljs.core.async.t_cljs$core$async46822(f__$1,ch__$1,meta46823));
});

}

return (new cljs.core.async.t_cljs$core$async46822(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46830 = (function (f,ch,meta46831){
this.f = f;
this.ch = ch;
this.meta46831 = meta46831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46832,meta46831__$1){
var self__ = this;
var _46832__$1 = this;
return (new cljs.core.async.t_cljs$core$async46830(self__.f,self__.ch,meta46831__$1));
}));

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46832){
var self__ = this;
var _46832__$1 = this;
return self__.meta46831;
}));

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46831","meta46831",1332451954,null)], null);
}));

(cljs.core.async.t_cljs$core$async46830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46830");

(cljs.core.async.t_cljs$core$async46830.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46830.
 */
cljs.core.async.__GT_t_cljs$core$async46830 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46830(f__$1,ch__$1,meta46831){
return (new cljs.core.async.t_cljs$core$async46830(f__$1,ch__$1,meta46831));
});

}

return (new cljs.core.async.t_cljs$core$async46830(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46833 = (function (p,ch,meta46834){
this.p = p;
this.ch = ch;
this.meta46834 = meta46834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46835,meta46834__$1){
var self__ = this;
var _46835__$1 = this;
return (new cljs.core.async.t_cljs$core$async46833(self__.p,self__.ch,meta46834__$1));
}));

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46835){
var self__ = this;
var _46835__$1 = this;
return self__.meta46834;
}));

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46834","meta46834",1661544740,null)], null);
}));

(cljs.core.async.t_cljs$core$async46833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46833");

(cljs.core.async.t_cljs$core$async46833.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46833.
 */
cljs.core.async.__GT_t_cljs$core$async46833 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46833(p__$1,ch__$1,meta46834){
return (new cljs.core.async.t_cljs$core$async46833(p__$1,ch__$1,meta46834));
});

}

return (new cljs.core.async.t_cljs$core$async46833(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46837 = arguments.length;
switch (G__46837) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46858){
var state_val_46859 = (state_46858[(1)]);
if((state_val_46859 === (7))){
var inst_46854 = (state_46858[(2)]);
var state_46858__$1 = state_46858;
var statearr_46860_47668 = state_46858__$1;
(statearr_46860_47668[(2)] = inst_46854);

(statearr_46860_47668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (1))){
var state_46858__$1 = state_46858;
var statearr_46861_47669 = state_46858__$1;
(statearr_46861_47669[(2)] = null);

(statearr_46861_47669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (4))){
var inst_46840 = (state_46858[(7)]);
var inst_46840__$1 = (state_46858[(2)]);
var inst_46841 = (inst_46840__$1 == null);
var state_46858__$1 = (function (){var statearr_46862 = state_46858;
(statearr_46862[(7)] = inst_46840__$1);

return statearr_46862;
})();
if(cljs.core.truth_(inst_46841)){
var statearr_46863_47670 = state_46858__$1;
(statearr_46863_47670[(1)] = (5));

} else {
var statearr_46864_47671 = state_46858__$1;
(statearr_46864_47671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (6))){
var inst_46840 = (state_46858[(7)]);
var inst_46845 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46840) : p.call(null,inst_46840));
var state_46858__$1 = state_46858;
if(cljs.core.truth_(inst_46845)){
var statearr_46865_47672 = state_46858__$1;
(statearr_46865_47672[(1)] = (8));

} else {
var statearr_46866_47673 = state_46858__$1;
(statearr_46866_47673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (3))){
var inst_46856 = (state_46858[(2)]);
var state_46858__$1 = state_46858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46858__$1,inst_46856);
} else {
if((state_val_46859 === (2))){
var state_46858__$1 = state_46858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46858__$1,(4),ch);
} else {
if((state_val_46859 === (11))){
var inst_46848 = (state_46858[(2)]);
var state_46858__$1 = state_46858;
var statearr_46867_47674 = state_46858__$1;
(statearr_46867_47674[(2)] = inst_46848);

(statearr_46867_47674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (9))){
var state_46858__$1 = state_46858;
var statearr_46868_47675 = state_46858__$1;
(statearr_46868_47675[(2)] = null);

(statearr_46868_47675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (5))){
var inst_46843 = cljs.core.async.close_BANG_(out);
var state_46858__$1 = state_46858;
var statearr_46869_47676 = state_46858__$1;
(statearr_46869_47676[(2)] = inst_46843);

(statearr_46869_47676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (10))){
var inst_46851 = (state_46858[(2)]);
var state_46858__$1 = (function (){var statearr_46870 = state_46858;
(statearr_46870[(8)] = inst_46851);

return statearr_46870;
})();
var statearr_46871_47677 = state_46858__$1;
(statearr_46871_47677[(2)] = null);

(statearr_46871_47677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46859 === (8))){
var inst_46840 = (state_46858[(7)]);
var state_46858__$1 = state_46858;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46858__$1,(11),out,inst_46840);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_46872 = [null,null,null,null,null,null,null,null,null];
(statearr_46872[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_46872[(1)] = (1));

return statearr_46872;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_46858){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46858);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46873){var ex__45292__auto__ = e46873;
var statearr_46874_47678 = state_46858;
(statearr_46874_47678[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46858[(4)]))){
var statearr_46875_47679 = state_46858;
(statearr_46875_47679[(1)] = cljs.core.first((state_46858[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47680 = state_46858;
state_46858 = G__47680;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_46858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_46858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46876 = f__45587__auto__();
(statearr_46876[(6)] = c__45586__auto___47663);

return statearr_46876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46878 = arguments.length;
switch (G__46878) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45586__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_46940){
var state_val_46941 = (state_46940[(1)]);
if((state_val_46941 === (7))){
var inst_46936 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46942_47689 = state_46940__$1;
(statearr_46942_47689[(2)] = inst_46936);

(statearr_46942_47689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (20))){
var inst_46906 = (state_46940[(7)]);
var inst_46917 = (state_46940[(2)]);
var inst_46918 = cljs.core.next(inst_46906);
var inst_46892 = inst_46918;
var inst_46893 = null;
var inst_46894 = (0);
var inst_46895 = (0);
var state_46940__$1 = (function (){var statearr_46943 = state_46940;
(statearr_46943[(8)] = inst_46892);

(statearr_46943[(9)] = inst_46893);

(statearr_46943[(10)] = inst_46917);

(statearr_46943[(11)] = inst_46894);

(statearr_46943[(12)] = inst_46895);

return statearr_46943;
})();
var statearr_46944_47693 = state_46940__$1;
(statearr_46944_47693[(2)] = null);

(statearr_46944_47693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (1))){
var state_46940__$1 = state_46940;
var statearr_46945_47697 = state_46940__$1;
(statearr_46945_47697[(2)] = null);

(statearr_46945_47697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (4))){
var inst_46881 = (state_46940[(13)]);
var inst_46881__$1 = (state_46940[(2)]);
var inst_46882 = (inst_46881__$1 == null);
var state_46940__$1 = (function (){var statearr_46946 = state_46940;
(statearr_46946[(13)] = inst_46881__$1);

return statearr_46946;
})();
if(cljs.core.truth_(inst_46882)){
var statearr_46947_47698 = state_46940__$1;
(statearr_46947_47698[(1)] = (5));

} else {
var statearr_46948_47699 = state_46940__$1;
(statearr_46948_47699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (15))){
var state_46940__$1 = state_46940;
var statearr_46952_47700 = state_46940__$1;
(statearr_46952_47700[(2)] = null);

(statearr_46952_47700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (21))){
var state_46940__$1 = state_46940;
var statearr_46953_47704 = state_46940__$1;
(statearr_46953_47704[(2)] = null);

(statearr_46953_47704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (13))){
var inst_46892 = (state_46940[(8)]);
var inst_46893 = (state_46940[(9)]);
var inst_46894 = (state_46940[(11)]);
var inst_46895 = (state_46940[(12)]);
var inst_46902 = (state_46940[(2)]);
var inst_46903 = (inst_46895 + (1));
var tmp46949 = inst_46892;
var tmp46950 = inst_46893;
var tmp46951 = inst_46894;
var inst_46892__$1 = tmp46949;
var inst_46893__$1 = tmp46950;
var inst_46894__$1 = tmp46951;
var inst_46895__$1 = inst_46903;
var state_46940__$1 = (function (){var statearr_46954 = state_46940;
(statearr_46954[(8)] = inst_46892__$1);

(statearr_46954[(14)] = inst_46902);

(statearr_46954[(9)] = inst_46893__$1);

(statearr_46954[(11)] = inst_46894__$1);

(statearr_46954[(12)] = inst_46895__$1);

return statearr_46954;
})();
var statearr_46955_47709 = state_46940__$1;
(statearr_46955_47709[(2)] = null);

(statearr_46955_47709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (22))){
var state_46940__$1 = state_46940;
var statearr_46956_47710 = state_46940__$1;
(statearr_46956_47710[(2)] = null);

(statearr_46956_47710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (6))){
var inst_46881 = (state_46940[(13)]);
var inst_46890 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46881) : f.call(null,inst_46881));
var inst_46891 = cljs.core.seq(inst_46890);
var inst_46892 = inst_46891;
var inst_46893 = null;
var inst_46894 = (0);
var inst_46895 = (0);
var state_46940__$1 = (function (){var statearr_46957 = state_46940;
(statearr_46957[(8)] = inst_46892);

(statearr_46957[(9)] = inst_46893);

(statearr_46957[(11)] = inst_46894);

(statearr_46957[(12)] = inst_46895);

return statearr_46957;
})();
var statearr_46958_47711 = state_46940__$1;
(statearr_46958_47711[(2)] = null);

(statearr_46958_47711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (17))){
var inst_46906 = (state_46940[(7)]);
var inst_46910 = cljs.core.chunk_first(inst_46906);
var inst_46911 = cljs.core.chunk_rest(inst_46906);
var inst_46912 = cljs.core.count(inst_46910);
var inst_46892 = inst_46911;
var inst_46893 = inst_46910;
var inst_46894 = inst_46912;
var inst_46895 = (0);
var state_46940__$1 = (function (){var statearr_46959 = state_46940;
(statearr_46959[(8)] = inst_46892);

(statearr_46959[(9)] = inst_46893);

(statearr_46959[(11)] = inst_46894);

(statearr_46959[(12)] = inst_46895);

return statearr_46959;
})();
var statearr_46960_47712 = state_46940__$1;
(statearr_46960_47712[(2)] = null);

(statearr_46960_47712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (3))){
var inst_46938 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46940__$1,inst_46938);
} else {
if((state_val_46941 === (12))){
var inst_46926 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46961_47713 = state_46940__$1;
(statearr_46961_47713[(2)] = inst_46926);

(statearr_46961_47713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (2))){
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46940__$1,(4),in$);
} else {
if((state_val_46941 === (23))){
var inst_46934 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46962_47714 = state_46940__$1;
(statearr_46962_47714[(2)] = inst_46934);

(statearr_46962_47714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (19))){
var inst_46921 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46963_47715 = state_46940__$1;
(statearr_46963_47715[(2)] = inst_46921);

(statearr_46963_47715[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (11))){
var inst_46892 = (state_46940[(8)]);
var inst_46906 = (state_46940[(7)]);
var inst_46906__$1 = cljs.core.seq(inst_46892);
var state_46940__$1 = (function (){var statearr_46964 = state_46940;
(statearr_46964[(7)] = inst_46906__$1);

return statearr_46964;
})();
if(inst_46906__$1){
var statearr_46965_47717 = state_46940__$1;
(statearr_46965_47717[(1)] = (14));

} else {
var statearr_46966_47719 = state_46940__$1;
(statearr_46966_47719[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (9))){
var inst_46928 = (state_46940[(2)]);
var inst_46929 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46940__$1 = (function (){var statearr_46967 = state_46940;
(statearr_46967[(15)] = inst_46928);

return statearr_46967;
})();
if(cljs.core.truth_(inst_46929)){
var statearr_46968_47720 = state_46940__$1;
(statearr_46968_47720[(1)] = (21));

} else {
var statearr_46969_47721 = state_46940__$1;
(statearr_46969_47721[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (5))){
var inst_46884 = cljs.core.async.close_BANG_(out);
var state_46940__$1 = state_46940;
var statearr_46970_47722 = state_46940__$1;
(statearr_46970_47722[(2)] = inst_46884);

(statearr_46970_47722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (14))){
var inst_46906 = (state_46940[(7)]);
var inst_46908 = cljs.core.chunked_seq_QMARK_(inst_46906);
var state_46940__$1 = state_46940;
if(inst_46908){
var statearr_46971_47723 = state_46940__$1;
(statearr_46971_47723[(1)] = (17));

} else {
var statearr_46972_47724 = state_46940__$1;
(statearr_46972_47724[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (16))){
var inst_46924 = (state_46940[(2)]);
var state_46940__$1 = state_46940;
var statearr_46973_47725 = state_46940__$1;
(statearr_46973_47725[(2)] = inst_46924);

(statearr_46973_47725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46941 === (10))){
var inst_46893 = (state_46940[(9)]);
var inst_46895 = (state_46940[(12)]);
var inst_46900 = cljs.core._nth(inst_46893,inst_46895);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46940__$1,(13),out,inst_46900);
} else {
if((state_val_46941 === (18))){
var inst_46906 = (state_46940[(7)]);
var inst_46915 = cljs.core.first(inst_46906);
var state_46940__$1 = state_46940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46940__$1,(20),out,inst_46915);
} else {
if((state_val_46941 === (8))){
var inst_46894 = (state_46940[(11)]);
var inst_46895 = (state_46940[(12)]);
var inst_46897 = (inst_46895 < inst_46894);
var inst_46898 = inst_46897;
var state_46940__$1 = state_46940;
if(cljs.core.truth_(inst_46898)){
var statearr_46974_47726 = state_46940__$1;
(statearr_46974_47726[(1)] = (10));

} else {
var statearr_46975_47727 = state_46940__$1;
(statearr_46975_47727[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____0 = (function (){
var statearr_46976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46976[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__);

(statearr_46976[(1)] = (1));

return statearr_46976;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____1 = (function (state_46940){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_46940);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e46977){var ex__45292__auto__ = e46977;
var statearr_46978_47728 = state_46940;
(statearr_46978_47728[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_46940[(4)]))){
var statearr_46979_47729 = state_46940;
(statearr_46979_47729[(1)] = cljs.core.first((state_46940[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47730 = state_46940;
state_46940 = G__47730;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__ = function(state_46940){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____1.call(this,state_46940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45289__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_46980 = f__45587__auto__();
(statearr_46980[(6)] = c__45586__auto__);

return statearr_46980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));

return c__45586__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46982 = arguments.length;
switch (G__46982) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46984 = arguments.length;
switch (G__46984) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46986 = arguments.length;
switch (G__46986) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47738 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_47010){
var state_val_47011 = (state_47010[(1)]);
if((state_val_47011 === (7))){
var inst_47005 = (state_47010[(2)]);
var state_47010__$1 = state_47010;
var statearr_47012_47739 = state_47010__$1;
(statearr_47012_47739[(2)] = inst_47005);

(statearr_47012_47739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (1))){
var inst_46987 = null;
var state_47010__$1 = (function (){var statearr_47013 = state_47010;
(statearr_47013[(7)] = inst_46987);

return statearr_47013;
})();
var statearr_47014_47740 = state_47010__$1;
(statearr_47014_47740[(2)] = null);

(statearr_47014_47740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (4))){
var inst_46990 = (state_47010[(8)]);
var inst_46990__$1 = (state_47010[(2)]);
var inst_46991 = (inst_46990__$1 == null);
var inst_46992 = cljs.core.not(inst_46991);
var state_47010__$1 = (function (){var statearr_47015 = state_47010;
(statearr_47015[(8)] = inst_46990__$1);

return statearr_47015;
})();
if(inst_46992){
var statearr_47016_47741 = state_47010__$1;
(statearr_47016_47741[(1)] = (5));

} else {
var statearr_47017_47742 = state_47010__$1;
(statearr_47017_47742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (6))){
var state_47010__$1 = state_47010;
var statearr_47018_47743 = state_47010__$1;
(statearr_47018_47743[(2)] = null);

(statearr_47018_47743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (3))){
var inst_47007 = (state_47010[(2)]);
var inst_47008 = cljs.core.async.close_BANG_(out);
var state_47010__$1 = (function (){var statearr_47019 = state_47010;
(statearr_47019[(9)] = inst_47007);

return statearr_47019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47010__$1,inst_47008);
} else {
if((state_val_47011 === (2))){
var state_47010__$1 = state_47010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47010__$1,(4),ch);
} else {
if((state_val_47011 === (11))){
var inst_46990 = (state_47010[(8)]);
var inst_46999 = (state_47010[(2)]);
var inst_46987 = inst_46990;
var state_47010__$1 = (function (){var statearr_47020 = state_47010;
(statearr_47020[(10)] = inst_46999);

(statearr_47020[(7)] = inst_46987);

return statearr_47020;
})();
var statearr_47021_47744 = state_47010__$1;
(statearr_47021_47744[(2)] = null);

(statearr_47021_47744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (9))){
var inst_46990 = (state_47010[(8)]);
var state_47010__$1 = state_47010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47010__$1,(11),out,inst_46990);
} else {
if((state_val_47011 === (5))){
var inst_46990 = (state_47010[(8)]);
var inst_46987 = (state_47010[(7)]);
var inst_46994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46990,inst_46987);
var state_47010__$1 = state_47010;
if(inst_46994){
var statearr_47023_47749 = state_47010__$1;
(statearr_47023_47749[(1)] = (8));

} else {
var statearr_47024_47750 = state_47010__$1;
(statearr_47024_47750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (10))){
var inst_47002 = (state_47010[(2)]);
var state_47010__$1 = state_47010;
var statearr_47025_47751 = state_47010__$1;
(statearr_47025_47751[(2)] = inst_47002);

(statearr_47025_47751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47011 === (8))){
var inst_46987 = (state_47010[(7)]);
var tmp47022 = inst_46987;
var inst_46987__$1 = tmp47022;
var state_47010__$1 = (function (){var statearr_47026 = state_47010;
(statearr_47026[(7)] = inst_46987__$1);

return statearr_47026;
})();
var statearr_47027_47753 = state_47010__$1;
(statearr_47027_47753[(2)] = null);

(statearr_47027_47753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_47028 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47028[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_47028[(1)] = (1));

return statearr_47028;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_47010){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_47010);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e47029){var ex__45292__auto__ = e47029;
var statearr_47030_47754 = state_47010;
(statearr_47030_47754[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_47010[(4)]))){
var statearr_47031_47755 = state_47010;
(statearr_47031_47755[(1)] = cljs.core.first((state_47010[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47756 = state_47010;
state_47010 = G__47756;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_47010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_47010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_47032 = f__45587__auto__();
(statearr_47032[(6)] = c__45586__auto___47738);

return statearr_47032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47034 = arguments.length;
switch (G__47034) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_47072){
var state_val_47073 = (state_47072[(1)]);
if((state_val_47073 === (7))){
var inst_47068 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47074_47760 = state_47072__$1;
(statearr_47074_47760[(2)] = inst_47068);

(statearr_47074_47760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (1))){
var inst_47035 = (new Array(n));
var inst_47036 = inst_47035;
var inst_47037 = (0);
var state_47072__$1 = (function (){var statearr_47075 = state_47072;
(statearr_47075[(7)] = inst_47037);

(statearr_47075[(8)] = inst_47036);

return statearr_47075;
})();
var statearr_47076_47765 = state_47072__$1;
(statearr_47076_47765[(2)] = null);

(statearr_47076_47765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (4))){
var inst_47040 = (state_47072[(9)]);
var inst_47040__$1 = (state_47072[(2)]);
var inst_47041 = (inst_47040__$1 == null);
var inst_47042 = cljs.core.not(inst_47041);
var state_47072__$1 = (function (){var statearr_47077 = state_47072;
(statearr_47077[(9)] = inst_47040__$1);

return statearr_47077;
})();
if(inst_47042){
var statearr_47078_47766 = state_47072__$1;
(statearr_47078_47766[(1)] = (5));

} else {
var statearr_47079_47767 = state_47072__$1;
(statearr_47079_47767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (15))){
var inst_47062 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47080_47768 = state_47072__$1;
(statearr_47080_47768[(2)] = inst_47062);

(statearr_47080_47768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (13))){
var state_47072__$1 = state_47072;
var statearr_47081_47769 = state_47072__$1;
(statearr_47081_47769[(2)] = null);

(statearr_47081_47769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (6))){
var inst_47037 = (state_47072[(7)]);
var inst_47058 = (inst_47037 > (0));
var state_47072__$1 = state_47072;
if(cljs.core.truth_(inst_47058)){
var statearr_47082_47770 = state_47072__$1;
(statearr_47082_47770[(1)] = (12));

} else {
var statearr_47083_47771 = state_47072__$1;
(statearr_47083_47771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (3))){
var inst_47070 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47072__$1,inst_47070);
} else {
if((state_val_47073 === (12))){
var inst_47036 = (state_47072[(8)]);
var inst_47060 = cljs.core.vec(inst_47036);
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47072__$1,(15),out,inst_47060);
} else {
if((state_val_47073 === (2))){
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47072__$1,(4),ch);
} else {
if((state_val_47073 === (11))){
var inst_47052 = (state_47072[(2)]);
var inst_47053 = (new Array(n));
var inst_47036 = inst_47053;
var inst_47037 = (0);
var state_47072__$1 = (function (){var statearr_47084 = state_47072;
(statearr_47084[(10)] = inst_47052);

(statearr_47084[(7)] = inst_47037);

(statearr_47084[(8)] = inst_47036);

return statearr_47084;
})();
var statearr_47085_47772 = state_47072__$1;
(statearr_47085_47772[(2)] = null);

(statearr_47085_47772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (9))){
var inst_47036 = (state_47072[(8)]);
var inst_47050 = cljs.core.vec(inst_47036);
var state_47072__$1 = state_47072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47072__$1,(11),out,inst_47050);
} else {
if((state_val_47073 === (5))){
var inst_47040 = (state_47072[(9)]);
var inst_47037 = (state_47072[(7)]);
var inst_47036 = (state_47072[(8)]);
var inst_47045 = (state_47072[(11)]);
var inst_47044 = (inst_47036[inst_47037] = inst_47040);
var inst_47045__$1 = (inst_47037 + (1));
var inst_47046 = (inst_47045__$1 < n);
var state_47072__$1 = (function (){var statearr_47086 = state_47072;
(statearr_47086[(12)] = inst_47044);

(statearr_47086[(11)] = inst_47045__$1);

return statearr_47086;
})();
if(cljs.core.truth_(inst_47046)){
var statearr_47087_47773 = state_47072__$1;
(statearr_47087_47773[(1)] = (8));

} else {
var statearr_47088_47774 = state_47072__$1;
(statearr_47088_47774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (14))){
var inst_47065 = (state_47072[(2)]);
var inst_47066 = cljs.core.async.close_BANG_(out);
var state_47072__$1 = (function (){var statearr_47090 = state_47072;
(statearr_47090[(13)] = inst_47065);

return statearr_47090;
})();
var statearr_47091_47775 = state_47072__$1;
(statearr_47091_47775[(2)] = inst_47066);

(statearr_47091_47775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (10))){
var inst_47056 = (state_47072[(2)]);
var state_47072__$1 = state_47072;
var statearr_47092_47776 = state_47072__$1;
(statearr_47092_47776[(2)] = inst_47056);

(statearr_47092_47776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47073 === (8))){
var inst_47036 = (state_47072[(8)]);
var inst_47045 = (state_47072[(11)]);
var tmp47089 = inst_47036;
var inst_47036__$1 = tmp47089;
var inst_47037 = inst_47045;
var state_47072__$1 = (function (){var statearr_47093 = state_47072;
(statearr_47093[(7)] = inst_47037);

(statearr_47093[(8)] = inst_47036__$1);

return statearr_47093;
})();
var statearr_47094_47777 = state_47072__$1;
(statearr_47094_47777[(2)] = null);

(statearr_47094_47777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_47095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47095[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_47095[(1)] = (1));

return statearr_47095;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_47072){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_47072);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e47096){var ex__45292__auto__ = e47096;
var statearr_47097_47778 = state_47072;
(statearr_47097_47778[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_47072[(4)]))){
var statearr_47098_47779 = state_47072;
(statearr_47098_47779[(1)] = cljs.core.first((state_47072[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47780 = state_47072;
state_47072 = G__47780;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_47072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_47072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_47099 = f__45587__auto__();
(statearr_47099[(6)] = c__45586__auto___47759);

return statearr_47099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47101 = arguments.length;
switch (G__47101) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__45586__auto___47783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45587__auto__ = (function (){var switch__45288__auto__ = (function (state_47146){
var state_val_47147 = (state_47146[(1)]);
if((state_val_47147 === (7))){
var inst_47142 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47148_47784 = state_47146__$1;
(statearr_47148_47784[(2)] = inst_47142);

(statearr_47148_47784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (1))){
var inst_47102 = [];
var inst_47103 = inst_47102;
var inst_47104 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47146__$1 = (function (){var statearr_47149 = state_47146;
(statearr_47149[(7)] = inst_47103);

(statearr_47149[(8)] = inst_47104);

return statearr_47149;
})();
var statearr_47150_47788 = state_47146__$1;
(statearr_47150_47788[(2)] = null);

(statearr_47150_47788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (4))){
var inst_47107 = (state_47146[(9)]);
var inst_47107__$1 = (state_47146[(2)]);
var inst_47108 = (inst_47107__$1 == null);
var inst_47109 = cljs.core.not(inst_47108);
var state_47146__$1 = (function (){var statearr_47151 = state_47146;
(statearr_47151[(9)] = inst_47107__$1);

return statearr_47151;
})();
if(inst_47109){
var statearr_47152_47789 = state_47146__$1;
(statearr_47152_47789[(1)] = (5));

} else {
var statearr_47153_47790 = state_47146__$1;
(statearr_47153_47790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (15))){
var inst_47103 = (state_47146[(7)]);
var inst_47134 = cljs.core.vec(inst_47103);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47146__$1,(18),out,inst_47134);
} else {
if((state_val_47147 === (13))){
var inst_47129 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47154_47791 = state_47146__$1;
(statearr_47154_47791[(2)] = inst_47129);

(statearr_47154_47791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (6))){
var inst_47103 = (state_47146[(7)]);
var inst_47131 = inst_47103.length;
var inst_47132 = (inst_47131 > (0));
var state_47146__$1 = state_47146;
if(cljs.core.truth_(inst_47132)){
var statearr_47155_47792 = state_47146__$1;
(statearr_47155_47792[(1)] = (15));

} else {
var statearr_47156_47793 = state_47146__$1;
(statearr_47156_47793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (17))){
var inst_47139 = (state_47146[(2)]);
var inst_47140 = cljs.core.async.close_BANG_(out);
var state_47146__$1 = (function (){var statearr_47157 = state_47146;
(statearr_47157[(10)] = inst_47139);

return statearr_47157;
})();
var statearr_47158_47794 = state_47146__$1;
(statearr_47158_47794[(2)] = inst_47140);

(statearr_47158_47794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (3))){
var inst_47144 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47146__$1,inst_47144);
} else {
if((state_val_47147 === (12))){
var inst_47103 = (state_47146[(7)]);
var inst_47122 = cljs.core.vec(inst_47103);
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47146__$1,(14),out,inst_47122);
} else {
if((state_val_47147 === (2))){
var state_47146__$1 = state_47146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47146__$1,(4),ch);
} else {
if((state_val_47147 === (11))){
var inst_47107 = (state_47146[(9)]);
var inst_47111 = (state_47146[(11)]);
var inst_47103 = (state_47146[(7)]);
var inst_47119 = inst_47103.push(inst_47107);
var tmp47159 = inst_47103;
var inst_47103__$1 = tmp47159;
var inst_47104 = inst_47111;
var state_47146__$1 = (function (){var statearr_47160 = state_47146;
(statearr_47160[(12)] = inst_47119);

(statearr_47160[(7)] = inst_47103__$1);

(statearr_47160[(8)] = inst_47104);

return statearr_47160;
})();
var statearr_47161_47795 = state_47146__$1;
(statearr_47161_47795[(2)] = null);

(statearr_47161_47795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (9))){
var inst_47104 = (state_47146[(8)]);
var inst_47115 = cljs.core.keyword_identical_QMARK_(inst_47104,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_47146__$1 = state_47146;
var statearr_47162_47796 = state_47146__$1;
(statearr_47162_47796[(2)] = inst_47115);

(statearr_47162_47796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (5))){
var inst_47112 = (state_47146[(13)]);
var inst_47107 = (state_47146[(9)]);
var inst_47111 = (state_47146[(11)]);
var inst_47104 = (state_47146[(8)]);
var inst_47111__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47107) : f.call(null,inst_47107));
var inst_47112__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47111__$1,inst_47104);
var state_47146__$1 = (function (){var statearr_47163 = state_47146;
(statearr_47163[(13)] = inst_47112__$1);

(statearr_47163[(11)] = inst_47111__$1);

return statearr_47163;
})();
if(inst_47112__$1){
var statearr_47164_47798 = state_47146__$1;
(statearr_47164_47798[(1)] = (8));

} else {
var statearr_47165_47799 = state_47146__$1;
(statearr_47165_47799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (14))){
var inst_47107 = (state_47146[(9)]);
var inst_47111 = (state_47146[(11)]);
var inst_47124 = (state_47146[(2)]);
var inst_47125 = [];
var inst_47126 = inst_47125.push(inst_47107);
var inst_47103 = inst_47125;
var inst_47104 = inst_47111;
var state_47146__$1 = (function (){var statearr_47166 = state_47146;
(statearr_47166[(14)] = inst_47126);

(statearr_47166[(7)] = inst_47103);

(statearr_47166[(8)] = inst_47104);

(statearr_47166[(15)] = inst_47124);

return statearr_47166;
})();
var statearr_47167_47800 = state_47146__$1;
(statearr_47167_47800[(2)] = null);

(statearr_47167_47800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (16))){
var state_47146__$1 = state_47146;
var statearr_47168_47801 = state_47146__$1;
(statearr_47168_47801[(2)] = null);

(statearr_47168_47801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (10))){
var inst_47117 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
if(cljs.core.truth_(inst_47117)){
var statearr_47169_47802 = state_47146__$1;
(statearr_47169_47802[(1)] = (11));

} else {
var statearr_47170_47803 = state_47146__$1;
(statearr_47170_47803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (18))){
var inst_47136 = (state_47146[(2)]);
var state_47146__$1 = state_47146;
var statearr_47171_47804 = state_47146__$1;
(statearr_47171_47804[(2)] = inst_47136);

(statearr_47171_47804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47147 === (8))){
var inst_47112 = (state_47146[(13)]);
var state_47146__$1 = state_47146;
var statearr_47172_47805 = state_47146__$1;
(statearr_47172_47805[(2)] = inst_47112);

(statearr_47172_47805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__45289__auto__ = null;
var cljs$core$async$state_machine__45289__auto____0 = (function (){
var statearr_47173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47173[(0)] = cljs$core$async$state_machine__45289__auto__);

(statearr_47173[(1)] = (1));

return statearr_47173;
});
var cljs$core$async$state_machine__45289__auto____1 = (function (state_47146){
while(true){
var ret_value__45290__auto__ = (function (){try{while(true){
var result__45291__auto__ = switch__45288__auto__(state_47146);
if(cljs.core.keyword_identical_QMARK_(result__45291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45291__auto__;
}
break;
}
}catch (e47174){var ex__45292__auto__ = e47174;
var statearr_47175_47806 = state_47146;
(statearr_47175_47806[(2)] = ex__45292__auto__);


if(cljs.core.seq((state_47146[(4)]))){
var statearr_47176_47807 = state_47146;
(statearr_47176_47807[(1)] = cljs.core.first((state_47146[(4)])));

} else {
throw ex__45292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47808 = state_47146;
state_47146 = G__47808;
continue;
} else {
return ret_value__45290__auto__;
}
break;
}
});
cljs$core$async$state_machine__45289__auto__ = function(state_47146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45289__auto____1.call(this,state_47146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45289__auto____0;
cljs$core$async$state_machine__45289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45289__auto____1;
return cljs$core$async$state_machine__45289__auto__;
})()
})();
var state__45588__auto__ = (function (){var statearr_47177 = f__45587__auto__();
(statearr_47177[(6)] = c__45586__auto___47783);

return statearr_47177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45588__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
