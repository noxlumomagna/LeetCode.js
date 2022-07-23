You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

function coinChange(coins, amount) {
        let combos = Array(amount + 1).fill(amount + 1);
    combos[0] = 0;
    for (const coin of coins) {
        for (let j = coin; j <= amount; ++j) {
            combos[j] = Math.min(combos[j], combos[j - coin] + 1);
        }
    }
    return combos[amount] > amount ? -1 : combos[amount];
};
