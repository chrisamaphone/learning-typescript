
interface TreeNode<T> {
  tag: "node";
  left: TreeNode<T> | TreeLeaf<T>;
  right: TreeNode<T> | TreeLeaf<T>;
}

interface TreeLeaf<T> {
  tag: "leaf";
  data: T;
}

type Tree<T> = TreeNode<T> | TreeLeaf<T>

let myLeaf3 : Tree<number> = {tag: "leaf", data: 3}
let myLeaf4 : Tree<number> = {tag: "leaf", data: 4}
var myBranch = { tag: "node", left: myLeaf3, right: myLeaf4 };
var myTree = {tag: "node", left: myLeaf3, right: myBranch};

function traverse<T>(t: Tree<T>) {
  switch(t.tag) {
    case "leaf": return t.data;
    case "node": {
      let l = traverse(t.left);
      let r = traverse(t.right);
      return [l, r];
    }
  }

}

