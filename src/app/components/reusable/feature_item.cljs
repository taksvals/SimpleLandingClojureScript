(ns app.components.reusable.feature-item)

(defn feature_item [{:keys [img-link, heading, heading-color, text, align, grid]}]
  [:div.feature-item
   [:div {:class (str align " " grid)}
    [:img.icon {:src img-link :alt "feature"}]
     [:div
      [:h6 {:class heading-color} heading]
      [:p text]]]])