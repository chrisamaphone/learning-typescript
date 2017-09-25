var myLeaf3 = { tag: "leaf", data: 3 };
var myLeaf4 = { tag: "leaf", data: 4 };
var myBranch = { tag: "node", left: myLeaf3, right: myLeaf4 };
var myTree = { tag: "node", left: myLeaf3, right: myBranch };
function traverse(t) {
    switch (t.tag) {
        case "leaf": return t.data;
        case "node": {
            var l = traverse(t.left);
            var r = traverse(t.right);
            return [l, r];
        }
    }
}
