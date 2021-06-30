(ns app.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]

            [app.routes :refer [routes]]
            [app.components.screens.footer.core :refer [footer]]))

(defonce match (r/atom nil))

(defn navigation []
  [:div
   [:nav.navbar
    [:div.container
     [:div.navbar-grid
      [:a
       {:href (rfe/href :app.routes/home)}
       [:img.logo {:src "/images/logo.png"}]]
      [:div.nav-links
       [:ul.nav
        [:li [:a {:href (rfe/href :app.routes/home)} "Home"]]
        [:li [:a {:href (rfe/href :app.routes/key-features)} "Key Features"]]
        [:li [:a {:href (rfe/href :app.routes/pricing)} "Pricing"]]
        [:li [:a {:href (rfe/href :app.routes/testiminial)} "Testiminial"]]
        [:li [:a {:href (rfe/href :app.routes/faq)} "FAQ"]]
        [:li [:a#btn-navbar {:href (rfe/href :app.routes/download)} "Try for free"]]]]]]]
   (when @match
     (let [view (:view (:data @match))]
       [view @match]))
  ;;  [:pre (with-out-str (fedn/pprint @match))]
   ])



(defn app-container []
   [:div
    [navigation]
    [footer]])

(defn ^:dev/after-load render
  "Render the toplevel component for this app." 
  [] 
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m] (reset! match m))
   {:use-fragment true})
  (rdom/render [app-container]              
               (.getElementById js/document "app")))
 
 
 (defn main[]
   (render))