(ns app.components.reusable.btn-light)

(defn btn_light [title href]
   [:a.btn-light {:href href} title])