(ns app.components.download
  (:require [app.components.reusable.text :refer [text]]))

(defn download []
  [:div#try-for-free
   [:section.free-section
    [:div.container
     [:div.free-grid
      [:div
       [text
        "large"
        "Download our App now!"
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Nobis eaque delectus consectetur suscipit perspiciatis et."
        "left"]
       [:div.icons
        [:img.icon-download {:src "/images/googleplay.png"}]
        [:img.icon-download {:src "/images/ios.png"}]]]
      [:div.free-img
       [:img {:src "/images/download.png" :alt "Download"}]]]]]])