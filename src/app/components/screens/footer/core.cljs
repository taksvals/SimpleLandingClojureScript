(ns app.components.screens.footer.core
  (:require [reitit.frontend.easy :as rfe]))

(defn footer []
  [:footer
   [:section.footer-section
    [:div.container
     [:a
      [:img.logo {:src "/images/logo.png" :alt "logo"}]]
     [:div.footer-links
      [:ul.nav
       [:li
        [:a {:href (rfe/href :app.routes/home)} "Home"]]
       [:li
        [:a {:href (rfe/href :app.routes/key-features)} "Key Features"]]
       [:li
        [:a {:href (rfe/href :app.routes/pricing)} "Pricing"]]
       [:li
        [:a {:href (rfe/href :app.routes/testiminial)} "Testiminial"]]
       [:li
        [:a {:href (rfe/href :app.routes/faq)} "FAQ"]]]]
    [:div
     [:ul.footer-icons
      [:li
       [:a
        [:i.fab.fa-facebook-f]]]
      [:li
       [:a
        [:i.fab.fa-twitter]]]
      [:li
       [:a
        [:i.fab.fa-slack-hash]]]
      [:li
       [:a
        [:i.fab.fa-github-square]]]]]
    [:p "Copyright&copy; Tanya Slavska 2021. 
         All rights reserved."]]]])