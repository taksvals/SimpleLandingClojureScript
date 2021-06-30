(ns app.components.screens.download.core
  (:require [app.components.reusable.text :refer [text]]))

(defn download []
  [:div
   [:section.free-section
    [:div.container
     [:div.free-grid
      [:div
       [text
        {:heading-size "large"
         :heading "Download our App now!"
         :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Nobis eaque delectus consectetur suscipit perspiciatis et."
         :align "left"}]
       [:div.icons
        [:img.icon-download 
         {:src "/images/googleplay.png"}]
        
        [:img.icon-download 
         {:src "/images/ios.png"}]]]
      
      [:div.free-img
       [:img 
        {:src "/images/download.png" 
         :alt "Download"}]]]]]])