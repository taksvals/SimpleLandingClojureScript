(ns app.components.reusable.feature-item)

(defn feature_item [imgLink, heading, headingColor, text, align, grid]
  [:div.feature-item
   [:div {:class (str align " " grid)}
    [:img.icon {:src imgLink :alt "feature"}]
     [:div
      [:h6 {:class headingColor} heading]
      [:p text]]]])