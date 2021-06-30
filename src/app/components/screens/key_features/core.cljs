(ns app.components.screens.key-features.core
  (:require [app.components.screens.awesome-features.core :refer [awesome_features]]
            [app.components.screens.jackpot.core :refer [jackpot]]
            [app.components.screens.jackpot-features.core :refer [jackpot_features]]
            [app.components.screens.integration.core :refer [integration]]
            [app.components.screens.advantages.core :refer [advantages]]
            [app.components.screens.ultimate-features.core :refer [ultimate_features]]))

(defn key-features[]
  [:<>
   [awesome_features]
   [jackpot]
   [jackpot_features]
   [integration]
   [advantages]
   [ultimate_features]])