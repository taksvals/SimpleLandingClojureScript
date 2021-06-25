(ns app.components.navbar)

(defn navbar []
  [:div
   [:nav.navbar
    [:div.container
     [:div.navbar-grid
      [:a
       [:img.logo {:src "/images/logo.png"}]]
      [:div.nav-links 
       [:ul.nav 
        [:li 
         [:a {:href "#home"} "Home"]]
        [:li 
         [:a {:href "#key-features"} "Key Features"]]
        [:li 
         [:a {:href "#pricing"} "Pricing"]]
        [:li 
         [:a {:href "#testiminial"} "Testiminial"]]
        [:li 
         [:a {:href "#faq"} "FAQ"]]
        [:li 
         [:a#btn-navbar {:href "#try-for-free"} "Try for free"]]]]]]]])