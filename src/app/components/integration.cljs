(ns app.components.integration
  (:require [app.components.reusable.btn-primary :refer [btn_primary]]
            [app.components.reusable.text :refer [text]]))

(defn integration []
  [:section.integration-section
   [:div.container
    [:div.integration-grid
     [:img {:src "/images/integration.png" :alt "integration"}]
     [:div
      [text
       "average"
       "Designed & build by the latest code integration"
       "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quam aperiam voluptatum hic temporibus suscipit! 
        Et debitis ut fuga ad similique."
       "left"]
      [btn_primary 
       "Learn More"
       "#"]]]]])