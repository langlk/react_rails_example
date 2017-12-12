# Rails/React example

Example Rails app with react front end using ```react-rails``` gem. Made using [this tutorial](https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails) with a few changes listed below.

# Changes from Tutorial:

* add jquery-rails to Gemfile and application.js

* add webpacker (not sure if this did anything)

* use ```createReactClass``` instead of ```React.createClass```

* use ```<input type="text" placeholder="Name" ref={(name) => { this.name = name; }} />``` instead of ```<input ref="name" />```
