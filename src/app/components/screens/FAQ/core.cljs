(ns app.components.screens.faq.core
  (:require [app.components.reusable.text :refer [text]]
            [reagent.core :as r]
            [react-accessible-accordion :refer [Accordion 
                                                AccordionItem 
                                                AccordionItemHeading 
                                                AccordionItemButton 
                                                AccordionItemPanel]]))

(def accordion (r/adapt-react-class Accordion))
(def accordion-item (r/adapt-react-class AccordionItem))
(def accordion-item-heading (r/adapt-react-class AccordionItemHeading))
(def accordion-item-button (r/adapt-react-class AccordionItemButton))
(def accordion-item-panel (r/adapt-react-class AccordionItemPanel))

(defn faq []
  (js/console.log accordion)
  [:div#faq
   [:section.faq-section
    [:div.container
     [:div.faq-header
      [text
       {:heading-size "large"
        :heading "Frequently asked questions"
        :text "Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               Laudantium temporibus laboriosam dolore eius id nostrum quisquam dicta 
               iure asperiores? Est?"
        :align "center"}]]
     [accordion {:allowZeroExpanded true}
      [accordion-item {:class "accordion-item"}
       [accordion-item-heading {:class "accordion"}
        [accordion-item-button
         "How to contact with riders emergency?"]]
       [accordion-item-panel {:class "panel"}
        [:p "Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Earum reiciendis adipisci 
             impedit accusamus. Doloremque recusandae facere 
             unde! Quam necessitatibus in, sint assumenda 
             voluptates iusto aut ea eius quos consectetur 
             quo vero beatae ex distinctio! Ab."]]]

      [accordion-item {:class "accordion-item"}
       [accordion-item-heading {:class "accordion"}
        [accordion-item-button 
         "App installation failed, how to update system information?"]]
       [accordion-item-panel {:class "panel"}
        [:p "Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Earum reiciendis adipisci 
             impedit accusamus. Doloremque recusandae facere 
             unde! Quam necessitatibus in, sint assumenda 
             voluptates iusto aut ea eius quos consectetur 
             quo vero beatae ex distinctio! Ab."]]]
      
      [accordion-item {:class "accordion-item"}
       [accordion-item-heading {:class "accordion"}
        [accordion-item-button 
         "Website response taking time, how to improve?"]]
       [accordion-item-panel {:class "panel"}
        [:p "Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Earum reiciendis adipisci 
             impedit accusamus. Doloremque recusandae facere 
             unde! Quam necessitatibus in, sint assumenda 
             voluptates iusto aut ea eius quos consectetur 
             quo vero beatae ex distinctio! Ab."]]]
      
      [accordion-item {:class "accordion-item"}
       [accordion-item-heading {:class "accordion"}
        [accordion-item-button 
         "New update fixed all bug and issue"]]
       [accordion-item-panel {:class "panel"}
        [:p "Lorem ipsum dolor sit amet consectetur, 
             adipisicing elit. Earum reiciendis adipisci 
             impedit accusamus. Doloremque recusandae facere 
             unde! Quam necessitatibus in, sint assumenda 
             voluptates iusto aut ea eius quos consectetur 
             quo vero beatae ex distinctio! Ab."]]]]]]])