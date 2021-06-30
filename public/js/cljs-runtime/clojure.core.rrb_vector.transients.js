goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_51146 = ret;
var shift_51147__$1 = shift;
while(true){
var arr_51148 = n_51146.arr;
var subidx_51149 = (((cnt - (1)) >> shift_51147__$1) & (31));
if((shift_51147__$1 === (5))){
(arr_51148[subidx_51149] = tail_node);
} else {
var child_51150 = (arr_51148[subidx_51149]);
if((child_51150 == null)){
(arr_51148[subidx_51149] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_51147__$1 - (5)),tail_node));
} else {
var editable_child_51151 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_51150);
(arr_51148[subidx_51149] = editable_child_51151);

var G__51152 = editable_child_51151;
var G__51153 = (shift_51147__$1 - (5));
n_51146 = G__51152;
shift_51147__$1 = G__51153;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__51098 = (shift - (5));
var G__51099 = ccnt;
var G__51100 = root_edit;
var G__51101 = child;
var G__51102 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__51098,G__51099,G__51100,G__51101,G__51102) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__51098,G__51099,G__51100,G__51101,G__51102));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_51159 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_51160 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_51159,data_51160);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__51112 = (shift - (5));
var G__51113 = cnt;
var G__51114 = root_edit;
var G__51115 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__51112,G__51113,G__51114,G__51115) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__51112,G__51113,G__51114,G__51115));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__51116 = (shift - (5));
var G__51117 = child_cnt;
var G__51118 = root_edit;
var G__51119 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__51116,G__51117,G__51118,G__51119) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__51116,G__51117,G__51118,G__51119));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_51172__$1 = shift;
var node_51173 = ret;
while(true){
if((shift_51172__$1 === (0))){
var arr_51174 = node_51173.arr;
(arr_51174[(i & (31))] = val);
} else {
var arr_51175 = node_51173.arr;
var subidx_51176 = ((i >> shift_51172__$1) & (31));
var child_51177 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_51175[subidx_51176]));
(arr_51175[subidx_51176] = child_51177);

var G__51178 = (shift_51172__$1 - (5));
var G__51179 = child_51177;
shift_51172__$1 = G__51178;
node_51173 = G__51179;
continue;
}
break;
}
} else {
var arr_51180 = ret.arr;
var rngs_51181 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_51182 = ((i >> shift) & (31));
var subidx_51183__$1 = (function (){var subidx_51183__$1 = subidx_51182;
while(true){
if((i < ((rngs_51181[subidx_51183__$1]) | (0)))){
return subidx_51183__$1;
} else {
var G__51186 = (subidx_51183__$1 + (1));
subidx_51183__$1 = G__51186;
continue;
}
break;
}
})();
var i_51184__$1 = (((subidx_51183__$1 === (0)))?i:(i - (rngs_51181[(subidx_51183__$1 - (1))])));
(arr_51180[subidx_51183__$1] = (function (){var G__51129 = (shift - (5));
var G__51130 = root_edit;
var G__51131 = (arr_51180[subidx_51183__$1]);
var G__51132 = i_51184__$1;
var G__51133 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__51129,G__51130,G__51131,G__51132,G__51133) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__51129,G__51130,G__51131,G__51132,G__51133));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
