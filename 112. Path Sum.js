Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

function hasPathSum(root, targetSum) {
    if(root === null) return false
    let{val,left,right} = root
    if(left == null && right == null) return targetSum - val === 0
    return(hasPathSum(left,targetSum-val)||hasPathSum(right,targetSum-val))
};
