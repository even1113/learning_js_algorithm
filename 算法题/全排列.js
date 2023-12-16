function permute(nums) {
  const res = [], path = []
  const dfs = (used) => {
      if (path.length === nums.length) {
          res.push([...path])
          return 
      }
      for (let i=0; i<nums.length; i++) {
          if(used[i] == true) continue
          path.push(nums[i])
          used[i] = true
          dfs(used)
          path.pop()
          used[i] = false
      }
  } 
  dfs([])
  return res
};
permute([1,2,3])