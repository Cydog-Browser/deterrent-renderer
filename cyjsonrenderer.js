const cydogDeterrentRendererJsonPath = document.getElementById('json-path');
const cydogDeterrentRendererJsonPathActual = cydogDeterrentRendererJsonPath.getAttribute("data-json-renderer-path");
fetchCydogDeterrentJSON(cydogDeterrentRendererJsonPathActual);
function fetchCydogDeterrentJSON(jsonFilePath){
    fetch(jsonFilePath)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(jsonData => {
        const htmlContent = reconstructHTML(jsonData).outerHTML;
        document.open("text/html", "replace"); 
        document.write(htmlContent);
        document.close();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
function reconstructHTML(node) {
    if(node.text){
      return document.createTextNode(node.text);
    }
    const element = document.createElement(node.tag);
    if (node.attrs) {
        for (const [key, value] of Object.entries(node.attrs)) {
            element.setAttribute(key, value);
        }
    }
    if (node.children) {
        for (const child of node.children) {
            const childNode = reconstructHTML(child);
            if (childNode) {
                element.appendChild(childNode);
            }
        }
    }
    return element;
}