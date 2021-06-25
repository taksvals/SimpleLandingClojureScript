(ns app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [app.components.navbar :refer [navbar]]
            [app.components.footer :refer [footer]]
            [app.components.home :refer [home]]
            [app.components.awesome-features :refer [awesome_features]]
            [app.components.jackpot :refer [jackpot]]
            [app.components.jackpot-features :refer [jackpot_features]]
            [app.components.integration :refer [integration]]
            [app.components.advantages :refer [advantages]]
            [app.components.ultimate-features :refer [ultimate_features]]
            [app.components.pricing :refer [pricing]]
            [app.components.testiminial :refer [testiminial]]
            [app.components.download :refer [download]]))

(defn app-container []
   [:div
    [navbar]
    [home]
    [awesome_features]
    [jackpot]
    [jackpot_features]
    [integration]
    [advantages]
    [ultimate_features]
    [pricing]
    [testiminial]
    
    [download]
    [footer]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app." 
  [] 
  (rdom/render [app-container]              
               (.getElementById js/document "app")))
 
 
 (defn main[]
   (js/console.log "MAIN FN Reloaded")
   (render))