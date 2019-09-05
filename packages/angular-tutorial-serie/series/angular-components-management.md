There is a lot of articles over internet that explain how create and use an Angular component, but really few really explain how we organize project to keep it maintenable.
Thus, to people that start coding with angular, project may become a mess in few time.

So let me present you how I keep my projects organised.

# Page vs Component
In an angular application, you can create components for 2 main purpose.
- **Page**: We assemble a set of components to produce a complete web page display. It is associated with a route.
- **Simple component or Shared component**: we create a single component that can be reusable in any pages. It isn't associated with a route. As example we can say Angular Material components are shared components.

To manage component's kind, under _src/app_, I create 2 folder: 
- _'pages'_
- _'shared'_ 

Every page component should contain a module and a routing module to manage sub path in **lazy loaded way** (**TODO**: Means what ? ex).


You can use mutiple levels in your pages organisation if you would like to suit your application route organisation. But if you have deep component, you could make source project naviagtion boring. So I prefer to keep directory flat with a good naming convention (TODO: what is a good naming convention). 





