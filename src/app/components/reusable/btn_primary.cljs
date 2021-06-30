(ns app.components.reusable.btn-primary)

(defn btn_primary [{:keys [title href]}]
   [:a.btn-primary {:href href} title])