* Simple API that can return a user-friendly tree view for given data
* Works very well with JSON
* Can present even complex, nested data

<img align="center" src="https://user-images.githubusercontent.com/38051431/66747848-d437d280-ee85-11e9-9f89-d1dcde7372b4.png">

## ➤ Table of Contents
* [➤ Description](#-description)
* [➤ 0. Installation](#-0-installation)
* [➤ 1. Set your data](#-1-set-your-data)
* [➤ 2. Feed the module with data](#-2-feed-the-module-with-data)
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
let myData = {Component: { What: { Name: "Tree View" }, Why: { Purpose: "To present fetched data in a user-friendly way" } },
Creator: { Name: "Anastazja Galuza", City: "Copenhagen" }}
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
## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).
