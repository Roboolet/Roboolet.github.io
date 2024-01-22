(function() {
    var menu = document.getElementsByClassName("menu")[0];
    function smoothScrollTo(y, l, f) {
        if (f == null) f = document.body.scrollTop;
        var s = Date.now(), p,
        h = function() {
            p = (p = (Date.now() - s) / l) > 1 ? 1 : p;
            document.body.scrollTop = f + (y - f) * p * p;
            if (p < 1) setTimeout(h, 16);
        };
        h();
    }
    function toggleArticle(name, active) {
        var node = document.getElementById(name);
        var nodeStyle = node.style;
        var nodeActive = nodeStyle.height && nodeStyle.height != "0px";
        if (active == null) {
            active = !nodeActive;
        } else if (active == nodeActive) return;
        if (active) {
            if (node.classList) {
                node.classList.add("active");
                node.classList.add("ready");
            } else node.className = "active";
            nodeStyle.display = "block";
            nodeStyle.height = ((node.scrollHeight || node.clientHeight || node.offsetHeight)) + "px";
        } else {
            if (node.classList) {
                node.classList.remove("active");
            } else node.className = "";
            nodeStyle.height = "0px";
            nodeStyle.display = "none";
        }
    }
    function getToggleArticle(name) {
        return function(e) {
            toggleArticle(name);
            return false;
        }
    }
    function openArticle(name) {
        toggleArticle(name, true);
        var node = document.getElementById(name);
        setTimeout(function() {
            var y = document.body.scrollTop;
            document.location.hash = "#" + name;
            smoothScrollTo(node.offsetTop - 32, 200, y);
        }, 0);
    }
    function getOpenArticle(name) {
        return function(e) {
            openArticle(name);
            e.preventDefault();
        }
    }

    function initMenu() {
        var list, i, node, href;
        list = document.getElementsByClassName("info-btn");
        for (i = 0; node = list[i]; i++) {
            node = node.getElementsByClassName("header")[0];
            var name = list[i].id.slice(2);
            node.onclick = getToggleArticle(name);        
        }
    }
    initMenu();
    if (document.location.hash.length > 1) {
        openArticle(document.location.hash.substr(1));
    } //else toggleArticle("about", true);
    })();