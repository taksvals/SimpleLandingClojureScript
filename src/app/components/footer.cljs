(ns app.components.footer)

(defn footer []
  [:footer
   [:section.footer-section
    [:div.container
     [:a
      [:img.logo {:src "/images/logo.png" :alt "logo"}]]
     [:div.footer-links
      [:ul.nav
       [:li
        [:a {:href "#home"} "Home"]]
       [:li
        [:a {:href "#key-features"} "Key Features"]]
       [:li
        [:a {:href "#pricing"} "Pricing"]]
       [:li
        [:a {:href "#testiminisl"} "Testiminial"]]
       [:li
        [:a {:href "#faq"} "FAQ"]]]]
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
    [:p "Copyright&copy; Tanya Slavska 2021. All rights reserved."]]]])