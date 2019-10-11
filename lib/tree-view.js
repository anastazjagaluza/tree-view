import { css, html, LitElement } from "https://unpkg.com/lit-element/lit-element.js?module";

export class TreeView extends LitElement {
	static get properties() {
		return {
			headline: {
				type: String
			},
			data: {
				type: Object
			}
		};
	}
	constructor() {
		super();
		//In the real project replace this data with your actual data
		this.data = {
			Component: { What: { Name: "Tree View" }, Why: { Purpose: "To present fetched data in a user-friendly way" } },
			Creator: { Name: "Anastazja Galuza", City: "Copenhagen" }
		};
	}
	static get styles() {
		return [
			css`
				summary::-webkit-details-marker {
					display: none;
				}
				summary:before {
					content: "+  ";
				}
				details[open] summary:before {
					content: "-  ";
				}

				summary {
					font-weight: bold;
					cursor: pointer;
					border-bottom: 1px solid grey;
				}
				summary,
				p {
					padding: 20px 0 16px 24px;
				}
				span {
					font-weight: bold;
				}
				p {
					margin: 0;
					border-bottom: 1px solid grey;
					overflow: hidden;
				}
			`
		];
	}
	render() {
		const entries = Object.entries(this.data);
		return html`
			${this.data != null
				? entries.map(([key, value], i) => {
						if (Array.isArray(value) || (typeof value === "object" && value != null)) {
							return html`
								<details>
									<summary>${key}</summary>
									<tree-view style="margin: 0 0 0 20px; display: block;" .data="${value}"></tree-view>
								</details>
							`;
						}

						return html`
							<p><span>${key}:</span> ${value}</p>
						`;
				  })
				: undefined}
		`;
	}
}

customElements.define("tree-view", TreeView);
