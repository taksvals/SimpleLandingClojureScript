(ns app.components.testiminial
  (:require [app.components.reusable.testiminial-item :refer [testiminial_item]]))

(defn testiminial []
  [:div#testiminial
   [:section.testinial-section
    [:div.container
     [:div.testinial-grid
      [:div.testinial-img
       [:img {:src "/images/testimonials.png" :alt "testiminial"}]]
      [:div
       [testiminial_item
        "John Doe"
        "SEO"
        "/images/person-2.png"]]]]]])