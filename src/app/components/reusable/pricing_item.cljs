(ns app.components.reusable.pricing-item
  (:require [app.components.reusable.btn-primary :refer [btn_primary]]))

(defn pricing_item [{:keys [price, btn-text]}]
  [:div.pricing-item
   [:div.pricing-item-heading
    [:p
     [:b (str "$" price)]
     "/month"]
    [:h6 "Business Class"]
    [:span "For small teams or offices"]]
   [:div.pricing-item-body
    [:ul
     [:li "Drag & Grop Builder"]
     [:li "1000's of Templates"]
     [:li "Blog Support Tools"]
     [:li "eCommerce Store"]]
    [btn_primary
     {:title btn-text
      :href "#"}]]])