(ns app.components.ultimate-features
  (:require [app.components.reusable.text :refer [text]]
            [app.components.reusable.feature-item :refer [feature_item]]
            [app.components.reusable.btn-primary :refer [btn_primary]]))

(defn ultimate_features []
  [:section.ultimate-features-section
   [:div.container
    [:div.ultimate-features-grid
     [:div
      [text
       "average"
       "Ultimate features that we built"
       "The rise of mobile devices transforms the way
        we consume information entirely."
       "left"]
      [:div.ultimate-feature-grid
       [feature_item
        "/images/app-development.png"
        "App Development"
        "primary"
        "Get your blood tests delivered at
        home collect a sample from the
        news your blood tests."
        "left"
        "simple"]
       [feature_item
        "/images/ux.png"
        "UX Planning"
        "primary"
        "Get your blood tests delivered at
        home collect a sample from the
        news your blood tests."
        "left"
        "simple"]
       [feature_item
        "/images/cloud.png"
        "Cloud Storage"
        "primary"
        "Get your blood tests delivered at
        home collect a sample from the
        news your blood tests."
        "left"
        "simple"]
       [feature_item
        "/images/support.png"
        "Customer Support"
        "primary"
        "Get your blood tests delivered at
        home collect a sample from the
        news your blood tests."
        "left"
        "simple"]]

      [btn_primary
       "See all"
       "#"]]

     [:div.ultimate-features-img
      [:img.ultimate-img {:src "/images/Group 92.png" :alt "ultimate"}]]]]])
