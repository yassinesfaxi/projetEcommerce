/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.sass';

//import jquery
const $ = require('jquery');

//bootstrap
require('bootstrap');

//import js file
import "./showAndHiddePassword.js";

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
