(ns app.components.screens.advantages.core
  (:require [app.components.reusable.text :refer [text]]
            [app.components.reusable.feature-item :refer [feature_item]]))

(defn advantages []
  [:section.advantages-section
   [:div.container
    [text
     {:heading-size "average"
      :heading "Why you should chous our app"
      :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Incidunt aspernatur corporis culpa reiciendis, 
             magnam non aliquam. Quasi architecto nihil magni?"
      :align "center"}]
    [:div.advantages-grid
     [feature_item
      {:img-link "/images/app-development.png"
       :heading "App Development"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
             from the news your blood tests."
       :align "center"
       :grid "simple"}]
     
     [feature_item
      {:img-link "/images/award.png"
       :heading "10 Times Award"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
             from the news your blood tests."
       :align "center"
       :grid "simple"}]
     
     [feature_item
      {:img-link "/images/cloud.png"
       :heading "Cloud Storage"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
             from the news your blood tests."
       :align "center"
       :grid "simple"}]
     
     [feature_item
      {:img-link "/images/customization.png"
       :heading "Customization"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
       :align "center"
       :grid "simple"}]
     
     [feature_item
      {:img-link "/images/ux.png"
       :heading "UX Planning"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
             from the news your blood tests."
       :align "center"
       :grid "simple"}]
     
     [feature_item
      {:img-link "/images/support.png"
       :heading "Customer Support"
       :heading-color "primary"
       :text "Get your blood tests delivered at home collect a sample
             from the news your blood tests."
       :align "center"
       :grid "simple"}]]]])