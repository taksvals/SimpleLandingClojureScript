(ns app.components.screens.ultimate-features.core
  (:require [app.components.reusable.text :refer [text]]
            [app.components.reusable.feature-item :refer [feature_item]]
            [app.components.reusable.btn-primary :refer [btn_primary]]))

(defn ultimate_features []
  [:section.ultimate-features-section
   [:div.container
    [:div.ultimate-features-grid
     [:div
      [text
       {:heading-size "average"
        :heading "Ultimate features that we built"
        :text "The rise of mobile devices transforms the way
               we consume information entirely."
        :align "left"}]
      [:div.ultimate-feature-grid
       [feature_item
        {:img-link "/images/app-development.png"
         :heading "App Development"
         :heading-color "primary"
         :text "Get your blood tests delivered at 
                home collect a sample from the
                news your blood tests."
         :align "left"
         :grid "simple"}]
       [feature_item
        {:img-link "/images/ux.png"
         :heading "UX Planning"
         :heading-color "primary"
         :text "Get your blood tests delivered at 
                home collect a sample from the 
                news your blood tests."
         :align "left"
         :grid "simple"}]
       [feature_item
        {:img-link "/images/cloud.png"
         :heading "Cloud Storage"
         :heading-color "primary"
         :text "Get your blood tests delivered at 
                home collect a sample from the
                news your blood tests."
         :align "left"
         :grid "simple"}]
       [feature_item
        {:img-link "/images/support.png"
         :heading "Customer Support"
         :heading-color "primary"
         :text "Get your blood tests delivered at 
                home collect a sample from the 
                news your blood tests."
         :align "left"
         :grid "simple"}]]

      [btn_primary
       {:title "See all"
        :href "#"}]]

     [:div.ultimate-features-img
      [:img.ultimate-img 
       {:src "/images/Group 92.png" 
        :alt "ultimate"}]]]]])
