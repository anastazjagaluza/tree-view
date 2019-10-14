<h1 align="center">Detailed tree-view</h1>
<a href="https://www.npmjs.com/package/detailed-tree-view"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" height="5"/></a>
* Simple API that can return a user-friendly tree view for given data
* Works very well with JSON
* Can present even complex, nested data
* All styling can be easily customized!

<img src="https://user-images.githubusercontent.com/38051431/66752638-2979e100-ee92-11e9-8494-e205412a2180.gif">

## ➤ Table of Contents
* [➤ Description](#-description)
* [➤ 0. Installation](#-0-installation)
* [➤ 1. Set your data](#-1-set-your-data)
* [➤ 2. Feed the module with data](#-2-feed-the-module-with-data)
* [➤ 3. Customize styling](#-3-customize-styling)
* [➤ License](#-license)

## ➤ Description
Tree-view is a simple API allowing to present json data in a user-friendly way. This component uses LitHTML and LitELement. You can both use the tree-view component as a new class importing it from the file, as well as the HTML tag <tree-view>. The component has two properties: data and headline. You can use them to customize the component and to feed it with your own data.
	
## ➤ 0. Installation
Install the component...
```javascript
npm install detailed-tree-view
```
...and import it afterwards
```javascript
import "tree-view";
```
## ➤ 1. Set your data

Depending on whether you need to present a small piece of data or your whole database, you start with either fetching the data from the outside source or writing it in the json format. Below you can see, how I arranged the mock-up data, presented in the demo.

```javascript
let myData = {Component: { What: { Name: "Tree View" }, Why: { Purpose: "To present fetched data in a user-friendly way" } },Creator: { Name: "Anastazja Galuza", City: "Copenhagen" }}
```
## ➤ 2. Feed the module with data
After importing the component, you can freely use it as an HTML tag. Feed it with data using <b>data</b> as a property or attribute, depending on whether you write simple HTML and JS script or you prefer to use LitHTML library.

<b>Vanila JS</b>:
```javascript
const treeView = document.getElementById("tree-view");
treeView.data = myData;
```
<b>Using LitHTML & LitElement Library</b>:
```javascript
render(){
html`
<tree-view data="${myData}"></tree-view>
`}

```
## ➤ 3. Customize styling
The module can be easily customized according to your style needs, just like in the example below:
<img src="https://user-images.githubusercontent.com/38051431/66751824-3c8bb180-ee90-11e9-8c3a-14945d333042.png">

In order to implement your own styling, all you need is to define the css variables mentioned in the code below.
The font is inherited, so you can simply assign it to the module f.ex. through a unique id.
```css
:host{
 --tree-view-summary-background-color-open: #e0c7db;
--tree-view-summary-background-color-close: #f9d9f3;
--tree-view-summary-border-bottom: 1px solid grey;
--tree-view-value-background-color: #f9d9f3;
}
#mytreeview {
font-family: "Dosis", sans-serif;
color: purple;
}
```

If you decide not to apply any styling, the module will fallback to the default styling:
<img align="center" src="https://user-images.githubusercontent.com/38051431/66747848-d437d280-ee85-11e9-9f89-d1dcde7372b4.png">
## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
