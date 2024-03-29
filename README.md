# Namaste React

# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs (can host your app on HTTPs)
- Tree Shaking - remove unused code
- Transpilation
- Different dev and prod bundles

# Food order app

/**
 * Header 
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 *      - Image
 *      - Name of restaurant, Star rating, cuisines etc.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

 # two types of export import 

 - default export/import
 export default Component;
 import Component from "path";

- named export/ import
export const Component;
import {Component} from "path";

# React hooks
(Normal JS utility functions)
- useState() - superpowerful state variables in react
- useEffect()

# 2 types of routing in web apps

# LAZY Loading
- Chunking
- Code splitting
- Dynamic bundling
- on demand loading
- dynamic import

# Higher Order Component
- Input - RestaurantCard ==> RestaurantCardPromoted (Output)

# REDUX
- INSTALL @reduxjs/toolkit and react-redux
- build our store
- connect our store to our app
- Slice (cartSlice) in slice we will define reducers for different actions
- dispatch(action)
- selector

# Types of testing (Developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up testing in our app
- Install React testing library
- Install jest
- Install babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation
- jest configuration (npx jest --init)
- install jsdom library
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside my babel.config.js
- install @testing-library/jest-dom