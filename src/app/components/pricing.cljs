(ns app.components.pricing
  (:require [app.components.reusable.pricing-item :refer [pricing_item]]
            [app.components.reusable.text :refer [text]]))

(defn pricing []
  [:div#pricing
   [:section.pricing-section
    [:div.container
     [text
      "average"
      "Get awesome features, without extra charges"
      "The rise of mobile devices transforms the way we consume
       information entirely and the world's most elevant channels
       such as Facebook."
      "center"]
     [:div
      [:div.for_tooggle
       [:div.form_tooggle-item.item-1
        [:input#fid-1 {:type "radio" :name "sub"}]
        [:label {:for "fid-1"} "Monthly"]]
       [:div.form_tooggle-item.item-2
        [:input#fid-2 {:type "radio" :name "sub"}]
        [:label {:for "fid-2"} "Annually"]]]
      [:div.monthly
       [:div.pricing-grid
        [pricing_item
         "0"
         "Start free trial"]
        [pricing_item
         "99"
         "Subscribe now"]]]]]]])