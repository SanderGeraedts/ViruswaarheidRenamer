// Only check the body so it won't mess with any scripts
const bodies = document.getElementsByTagName('body');

for(body of bodies) {

    // Get all elements in the body
    const elements = body.getElementsByTagName('*');

    for(element of elements) {

        // Get all children of the elements
        // This is to prevent links getting broken
        for(child of element.childNodes) {

            // Check if the nodeType is of type Text
            if(child.nodeType === 3) {
                const text = child.nodeValue;
                const replacedText = text.replace(/viruswaarheid/gi, 'Viruswaanzin');

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), child);
                }
            }
        }
    }
}