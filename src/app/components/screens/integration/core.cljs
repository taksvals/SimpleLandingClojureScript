(ns app.components.screens.integration.core
  (:require [app.components.reusable.btn-primary :refer [btn_primary]]
            [app.components.reusable.text :refer [text]]))

(defn integration []
  [:section.integration-section
   [:div.container
    [:div.integration-grid
     [:img {:src "/images/integration.png" :alt "integration"}]
     [:div
      [text
       {:heading-size "average"
        :heading "Designed & build by the latest code integration"
        :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Quam aperiam voluptatum hic temporibus suscipit! 
               Et debitis ut fuga ad similique."
        :align "left"}]
      [btn_primary 
       {:title "Learn More"
        :href "#"}]]]]])