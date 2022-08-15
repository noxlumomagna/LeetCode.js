Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

function trap(height){
    let trappedWater = 0
    let leftSideArray = 0;
    let rightSideArray = height.length-1;
    
    let leftHeight = 0;
    let rightHeight = 0;
    
    while(leftSideArray<rightSideArray){
        if(height[leftSideArray]<height[rightSideArray]){
            if(height[leftSideArray]>=leftHeight){
                leftHeight = height[leftSideArray]
            } else {
                trappedWater = trappedWater + leftHeight - height[leftSideArray]
            }
            leftSideArray++
        } else {
            if(height[rightSideArray]>=rightHeight){
                rightHeight = height[rightSideArray]
            } else {
                trappedWater = trappedWater + rightHeight - height[rightSideArray]
            }
            rightSideArray--
        }
    }
    return trappedWater
}
