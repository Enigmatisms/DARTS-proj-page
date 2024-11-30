function adjustIframeHeight(iframe, iframeDoc) {
    var contentHeight = iframeDoc.body.scrollHeight; 
    iframe.style.height = contentHeight + 'px'; 
}

function setup() {
    var iframe = document.getElementById("interactiveIframe");
    var iframeDoc = iframe.contentWindow.document;
    
    // load report.css to iframe
    var link = iframeDoc.createElement("link");
    link.rel = "stylesheet";
    link.href = "./static/css/report.css";
    iframeDoc.head.appendChild(link);
    
    var content = iframeDoc.createElement("div");
    content.id = "interactiveContent";
    iframeDoc.body.appendChild(content);

    if (data['imageBoxes']) {
        new ImageBox(content, data['imageBoxes']);
    }

    // dynamic height of image box
    setTimeout(function() {
        adjustIframeHeight(iframe, iframeDoc);
    }, 500);
}
function post_content() {
    postcontent = document.getElementById("interactiveContent");
    var h1_3 = document.createElement('h1');
    h1_3.className = "title";
    h1_3.appendChild(document.createTextNode("Description"));
    postcontent.appendChild(h1_3);
    var help_3 = document.createElement('div');
    help_3.appendChild(document.createTextNode(
        "Time-gated rendering results for two different scenes. For each scene, two time points are rendered. \
        Here we also incorporated the rendering results of trabsient photon planes & photon volumes. \
        All output EXR/PFM images are normalized with its 0.99 quantile number. The shown images are in linear RGB space"
    ));
    help_3.className = "help";
    postcontent.appendChild(help_3);
}