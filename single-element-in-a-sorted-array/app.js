// first way
var singleNonDuplicate = function (nums) {
  let nArrs = [];
  for (let i = 0; i < nums.length; i++) {
    const exists = nArrs.find((n) => n.num === nums[i]);
    if (!exists) {
      nArrs.push({ num: nums[i], count: 1 });
    } else {
      const index = nArrs.indexOf(exists);
      nArrs[index].count += 1;
    }
  }
  return nArrs.find((n) => n.count === 1).num;
};

// alternative way for short array
var singleNonDuplicateAlt = function (nums) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    const count = nums.filter((n) => n == nums[i]).length;
    if (count === 1) {
      result = nums[i];
    }
  }
  return result;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
