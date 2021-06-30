(ns app.components.screens.pricing.core
  (:require [app.components.reusable.pricing-item :refer [pricing_item]]
            [app.components.reusable.text :refer [text]]
            [reagent.core :as r]))

(def radio-value (r/atom 0))

(defn pricing []
  [:div#pricing
   [:section.pricing-section
    [:div.container
     [text
      :heading-size "average"
      :heading "Get awesome features, without extra charges"
      :text "The rise of mobile devices transforms the way we consume
             information entirely and the world's most elevant channels
             such as Facebook."
      :align "center"]
     [:div
      [:div.form-toggle
       [:div.form-toggle-item.item-1
        [:input#fid-1 
         {:type "radio" 
          :name "sub" 
          :on-change #(reset! radio-value 0) 
          :checked (= @radio-value 0)}]
        [:label {:for "fid-1"} "Monthly"]]
       
       [:div.form-toggle-item.item-2
        [:input#fid-2 
         {:type "radio" 
          :name "sub" 
          :on-change #(reset! radio-value 1) 
          :checked (= @radio-value 1)}]
        [:label {:for "fid-2"} "Annually"]]]

      (when (= @radio-value 0)[:div.monthly
       [:div.pricing-grid
        [pricing_item
         {:price "0"
          :btn-text "Start free trial"}]
        [pricing_item
         {:price "99"
          :btn-text "Subscribe now"}]]])
      
      (when (= @radio-value 1)[:div.monthly
       [:div.pricing-grid
        [pricing_item
         {:price "8.39"
          :btn-text "Start free trial"}]
        [pricing_item
         {:price "199"
          :btn-text "Subscribe now"}]]])]]]])