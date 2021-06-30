(ns app.components.screens.jackpot-features.core
  (:require [app.components.reusable.feature-item :refer [feature_item]]))

(defn jackpot_features []
  [:section.jackpot-section
   [:div.container
    [:div.jackpot-features-grid
     [feature_item
      {:img-link "/images/icon-4.png"
       :heading "Automatic Payload"
       :heading-color "pink"
       :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sit fuga nemo doloribus dolores autem possimus, 
              quibusdam velit laboriosam pariatur itaque!"
       :align "left"
       :grid "simple"}]

     [feature_item
      {:img-link "/images/icon-5.png"
      :heading "Network Effect"
      :heading-color "blue"
      :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Sit fuga nemo doloribus dolores autem possimus, 
             quibusdam velit laboriosam pariatur itaque!"
      :align "left"
      :grid "simple"}]

     [feature_item
      {:img-link "/images/icon-6.png"
       :heading "Bigger Rewards Method"
       :heading-color "green"
       :text "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sit fuga nemo doloribus dolores autem possimus, 
              quibusdam velit laboriosam pariatur itaque!"
       :align "left"
       :grid "simple"}]]]])