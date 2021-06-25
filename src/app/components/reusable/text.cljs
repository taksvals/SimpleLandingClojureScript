(ns app.components.reusable.text)

(defn text [headingSize, heading, text, align]
  [:div.text-item
   [:div {:class align}
    [:h1 {:class headingSize} heading]
    [:p text]]])