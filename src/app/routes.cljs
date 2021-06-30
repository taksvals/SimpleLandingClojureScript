(ns app.routes
  (:require [app.components.screens.home.core :refer [home]]
            [app.components.screens.pricing.core :refer [pricing]]
            [app.components.screens.testiminial.core :refer [testiminial]]
            [app.components.screens.faq.core :refer [faq]]
            [app.components.screens.download.core :refer [download]]
            [app.components.screens.key-features.core :refer [key-features]]))

(def routes 
  [["/"
    {:name ::home
     :view home}]
   
   ["/key-features"
    {:name ::key-features
     :view key-features}]

   ["/pricing"
    {:name ::pricing
     :view pricing}]

   ["/testiminial"
    {:name ::testiminial
     :view testiminial}]

   ["/faq"
    {:name ::faq
     :view faq}]

   ["/download"
    {:name ::download
     :view download}]
   ])