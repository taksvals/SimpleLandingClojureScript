(ns app.components.home
  (:require [app.components.reusable.text
             :refer [text]])
  (:require [app.components.reusable.btn-primary
             :refer [btn_primary]])
  (:require [app.components.reusable.btn-light
             :refer [btn_light]]))

(defn home []
  [:div#home
   [:section.home-section
    [:div.container
     [:div.home-grid
      [:div
       [:div.editor-choice
        [:div.check
         [:i.far.fa-check-circle]]
        [:p "#1 Editors Choice App of 2020"]]

       [text
        "large"
        "Best app for your modern lifestyle"
        "Increase productivity with a simple to-do app. 
        app for managing your personal budgets."
        "left"]
       
      [:div
       [btn_primary 
        "Try for free"
        "#try-for-free"]
       [btn_light 
        "Watch demo video"
        "#"]] ]
      
     [:div
      [:img {:src "/images/Phone.png" :alt "home-img"}]]]]]])