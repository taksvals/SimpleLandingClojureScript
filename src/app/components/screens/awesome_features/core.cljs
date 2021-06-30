(ns app.components.screens.awesome-features.core
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
       {:heading-size "average"
        :heading "Awesome apps features"
        :text "Increase productivity with a simple to-do app. 
              app for managing your personal budgets."
        :align "left"}]

      [:div
       [feature_item
        {:img-link "/images/icon-1.png"
         :heading "Fast Development"
         :heading-color "pink"
         :text "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quos repellendus, enim non necessitatibus eaque 
                veniam harum voluptatibus laudantium omnis itaque."
         :align "left"
         :grid "grid"}]

       [feature_item
        {:img-link "/images/icon-2.png"
         :heading "Prototyping"
         :heading-color "blue"
         :text "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quos repellendus, enim non necessitatibus eaque 
                veniam harum voluptatibus laudantium omnis itaque."
         :align "left"
         :grid "grid"}]

       [feature_item
        {:img-link "/images/icon-3.png"
        :heading "Vector Editing"
        :heading-color "green"
        :text "Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Quos repellendus, enim non necessitatibus eaque 
               veniam harum voluptatibus laudantium omnis itaque."
        :align "left"
        :grid "grid"}]]]]]])