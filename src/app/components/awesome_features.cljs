(ns app.components.awesome-features
  (:require [app.components.reusable.text
             :refer [text]]
            [app.components.reusable.feature-item
             :refer [feature_item]]))

(defn awesome_features []
  [:section.awesome-features-section
   [:div.container
    [:div.awesome-features-grid
     [:img.awesome-img {:src "/images/features-phone.png" :alt "awesome"}]
     [:div
      [text
       "average"
       "Awesome apps features"
       "Increase productivity with a simple to-do app. 
        app for managing your personal budgets."
       "left"]

      [:div
       [feature_item
        "/images/icon-1.png"
        "Fast Development"
        "pink"
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quos repellendus, enim non necessitatibus eaque 
        veniam harum voluptatibus laudantium omnis itaque."
        "left"
        "grid"]

       [feature_item
        "/images/icon-2.png"
        "Prototyping"
        "blue"
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quos repellendus, enim non necessitatibus eaque 
        veniam harum voluptatibus laudantium omnis itaque."
        "left"
        "grid"]

       [feature_item
        "/images/icon-3.png"
        "Vector Editing"
        "green"
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Quos repellendus, enim non necessitatibus eaque 
        veniam harum voluptatibus laudantium omnis itaque."
        "left"
        "grid"]]]]]])