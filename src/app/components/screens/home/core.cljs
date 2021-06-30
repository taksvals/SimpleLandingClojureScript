(ns app.components.screens.home.core
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
        {:heading-size "large"
         :heading "Best app for your modern lifestyle"
         :text "Increase productivity with a simple to-do app. 
               app for managing your personal budgets."
         :align "left"}]
       
      [:div
       [btn_primary 
        {:title "Try for free"
         :href "#try-for-free"}]
       [btn_light 
        {:title "Watch demo video"
         :href "#"}]]]
      
     [:div
      [:img 
       {:src "/images/Phone.png" 
        :alt "home-img"}]]]]]])