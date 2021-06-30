(ns app.components.reusable.text)

(defn text [{:keys [heading-size, heading, text, align]}]
  [:div.text-item
   [:div {:class align}
    [:h1 {:class heading-size} heading]
    [:p text]]])