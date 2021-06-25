(ns app.components.reusable.testiminial-item
  (:require [app.components.reusable.text :refer [text]]))

(defn testiminial_item [name, position, imgLink]
  [:div.mySides
   [:div.testinial-text
    [text
     "large"
     "Meet Client Satisfaction by using product"
     "The rise of mobile devices transforms the way we consume.
     elevant channels such as Facebook."
     "left"]
    [:div
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]
     [:i.fas.fa-star]]
    [text
     "small"
     "User friendly & Customizable"
     "Bring to the table win-win survival strategies to ensure proactive domination. 
      At the end of the day, going forward, a new normal that has evolved from generation 
      X is on the runway heading towards a streamlined cloud solution. 
      User generated content in real-time will have multiple touchpoints for offshoring."
     "left"]
    [:div.person-grid
     [:img.icon {:src imgLink :alt "Person"}]
     [:div
      [:h6 name]
      [:p position]]]]])