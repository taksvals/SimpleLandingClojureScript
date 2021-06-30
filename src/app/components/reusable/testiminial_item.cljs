(ns app.components.reusable.testiminial-item
  (:require [app.components.reusable.text :refer [text]]))

(defn testiminial_item [{:keys [name, position, img-link]}]
  [:div.mySides
   [:div.testinial-text
    [text
     {:heading-size "large"
      :heading "Meet Client Satisfaction by using product"
      :text "The rise of mobile devices transforms the way we consume 
             elevant channels such as Facebook."
      :align "left"}]
    [:div
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]]
    [text
     {:heading-size "small"
      :heading "User friendly & Customizable"
      :text "Bring to the table win-win survival strategies to ensure proactive domination. 
             At the end of the day, going forward, a new normal that has evolved from generation 
             X is on the runway heading towards a streamlined cloud solution. 
             User generated content in real-time will have multiple touchpoints for offshoring."
      :align "left"}]
    [:div.person-grid
     [:img.icon {:src img-link :alt "Person"}]
     [:div
      [:h6 name]
      [:p position]]]]])