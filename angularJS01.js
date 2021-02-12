// Intro to AngularJS
// AngularJS extends HTML with new attributes.
// Angular JS is perfect for Single Page Applications(SPAs)

/*
<div ng-app="">
  <p>Name: <input type="text" ng-model="name"></p>
  <p ng-bind="name"></p>
</div>
*/

// ng-app directive tells AngularJS that <div> element is the "owner" of  Angular app
// ng-model directive binds the value of the input field to the app variable - name
// ng-bind directive binds the content of the <p> element to the app

// Angular JS expressions are written inside double braces: {{ expression}}.
/*
<div ng-app="">
  <p>My first expression: {{ 5 + 5 }}</p>
</div>
*/

// another example
/*
<div ng-app="">
 
 <p>Input something in the input box:</p>
 <p>Name: <input type="text" ng-model="name"></p>
 <p>{{name}}</p>
 
 </div>
 */
