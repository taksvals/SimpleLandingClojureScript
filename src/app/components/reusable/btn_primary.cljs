(ns app.components.reusable.btn-primary)

(defn btn_primary [title href]
   [:a.btn-primary {:href href} title])