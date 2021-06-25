(ns app.components.advantages
  (:require [app.components.reusable.text :refer [text]]
            [app.components.reusable.feature-item :refer [feature_item]]))

(defn advantages []
  [:section.advantages-section
   [:div.container
    [text
     "average"
     "Why you should chous our app"
     "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Incidunt aspernatur corporis culpa reiciendis, 
      magnam non aliquam. Quasi architecto nihil magni?"
     "center"]
    [:div.advantages-grid
     [feature_item
      "/images/app-development.png"
      "App Development"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]
     
     [feature_item
      "/images/award.png"
      "10 Times Award"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]
     
     [feature_item
      "/images/cloud.png"
      "Cloud Storage"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]
     
     [feature_item
      "/images/customization.png"
      "Customization"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]
     
     [feature_item
      "/images/ux.png"
      "UX Planning"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]
     
     [feature_item
      "/images/support.png"
      "Customer Support"
      "primary"
      "Get your blood tests delivered at home collect a sample
       from the news your blood tests."
      "center"
      "simple"]]]])