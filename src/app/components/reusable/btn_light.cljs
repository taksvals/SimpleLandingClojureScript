(ns app.components.reusable.btn-light)

(defn btn_light [{:keys [title href]}]
   [:a.btn-light {:href href} title])