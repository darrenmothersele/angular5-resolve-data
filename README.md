# Contacts

A demonstration of various ways to resolve data in Angular 2, 4 and 5.
Starting basic, and then progresses through using Router Resolvers, and 
NgRx Actions and Effects.

## Initial version (tag v0)

Created a `UserService` to load some dummy contact/user data.
A naive implementation that injects this service into 
components, and the components load the data they need by
making HTTP calls to the webservice via the injected service.
I added a `delay(1000)` to the service calls to simulate 
a slow network.

Components can be instantiated without data so need some way of
checking that data exists before trying to show it in the template.
Added some simple feedback to show when data is being loaded from
the server, but lots of room for improvement. 


## User List Resolver (tag v1.1)

First change is to pre-fetch the data before displaying the component.
The Angular Router supports adding resolvers. This returns an observable
that will resolve the required data. 

## User Resolver (tag v1.2)

Added another resolver for user data. This one reads the `:id` param
and resolves data for a specific user. 

Single responsibility principle broken by the fact our components are 
doing too much. We've helped by separating out the loading of data to 
the Router resolver. That's one less thing for them to do.

Routing now waits for the data to be resolved before the new route 
is displayed. Good because we know in the components that we will
always have data, but with the current setup, there's a noticeable 
delay. We no longer get the loading feedback that we designed into 
the first approach.

## Container components (tag v2)

Another popular pattern is to split components into container and 
presentational components. Let's move even closer toward single 
responsibility principle by refactoring the components split out
the bits related to presentation into separate components.






