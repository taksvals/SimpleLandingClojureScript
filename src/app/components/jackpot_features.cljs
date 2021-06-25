(ns app.components.jackpot-features
  (:require [app.components.reusable.feature-item :refer [feature_item]]))

(defn jackpot_features []
  [:section.jackpot-section
   [:div.container
    [:div.jackpot-features-grid
     [feature_item
      "/images/icon-4.png"
      "Automatic Payload"
      "pink"
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Sit fuga nemo doloribus dolores autem possimus, 
       quibusdam velit laboriosam pariatur itaque!"
      "left"
      "simple"]

     [feature_item
      "/images/icon-5.png"
      "Network Effect"
      "blue"
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Sit fuga nemo doloribus dolores autem possimus, 
       quibusdam velit laboriosam pariatur itaque!"
      "left"
      "simple"]

     [feature_item
      "/images/icon-6.png"
      "Bigger Rewards Method"
      "green"
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
       Sit fuga nemo doloribus dolores autem possimus, 
       quibusdam velit laboriosam pariatur itaque!"
      "left"
      "simple"]]]])