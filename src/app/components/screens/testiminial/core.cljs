(ns app.components.screens.testiminial.core
  (:require [app.components.reusable.testiminial-item :refer [testiminial_item]]
            [reagent.core :as r]
            ["react-responsive-carousel" :refer [Carousel]]))

(def carousel (r/adapt-react-class Carousel))

(defn testiminial []
  [:div#testiminial
   [:section.testiminial-section
    [:div.container
     [:div.testiminial-grid
      [:div.testiminial-img
       [:img 
        {:src "/images/testimonials.png" 
         :alt "testiminial"}]]
      [carousel
       [testiminial_item
        {:name "Kate Smith"
         :position "SEO"
         :img-link "/images/person-2.png"}]
       [testiminial_item
        {:name "James Brown"
         :position "CEO"
         :img-link "/images/client-1.png"}]]]]]])