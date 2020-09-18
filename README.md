# react-dollop
Learn the react js at my on pace


What is React?

  A Open Source Java Script library for building UI.
  Not a framework like Angular
  Focus only on building the UI,dosnt focus on Routing or HTTP Requsest
  But infact it provide ecosystem to gel with other libraries to develop full UI


Why React
  Project created and Maintianed By FB.
  Huge Community

React has a compnent based arcitecture.
  Componets help to build reusable code.
  DOM updates are hadled in better way with Virtual DOM.
  ReactNative help provide support to build mobile based apps.

 Preq:

 HTML
 JavaScript	basics
 ES6 feature.



 A) Component: Component describe a part of the UI 
 	   They are Reusable and can be nested inside other componets
     Code for componet is placed in  Js file 
     2 Component types
       Stateless Comp                              StateFul Class Components
       function A(){
       return  <h1> Welcometo React!!</h1>;          class extending Componet classs for React Library
       												 They Must contaitn render method containing HTML
       }


       Functional vs Class 						Class components will have their own private data called state

       Simple JS functions					    Provide Life cycle methods 
       Absence fo this keyword
       Solution without using state
       Mainly responsible for UI



       JSX:
       JavaScript XML(JSX): Extension to JS library
       Same as XML
       Makes your React Code simpler and readable
       JSX will transpile to JavaScript 

         Jsx diffs:
         	class-> className
         	for-> htmlFor
         	camel case Naming for Event methods

       


   Props Vs State
   props get passed to the Components                     state is maneged with in the componet
   														  ex: variable declred in method

   ex: function parameters 								   state can be alterd
   
   props are imutable
