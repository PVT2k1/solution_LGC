// Enter input container_list and neededContainer
const container_list = [
    {
        name: "Container renter A",
        container: 5,
        totalCost: 5,
    },
    {
        name: "Container renter B",
        container: 2,
        totalCost: 10,
    },
    {
        name: "Container renter C",
        container: 2,
        totalCost: 3,
    }
],
    neededContainer = 10;

// Declare variable, not edit
let min_cost = 9999999999999, cost = 0, container = 0,
    solution = [],
    result = [],
    attempted = new Array(container_list.length).fill(false);

// Use backtracking recursive
function AttemptContainer(neededContainer) {
    for (let j = 0; j < container_list.length; j++) {
        if (!attempted[j]) {
            solution.push(container_list[j]);
            cost += container_list[j].totalCost;
            container += container_list[j].container;
            attempted[j] = true;

            if (cost < min_cost)
                if (container >= neededContainer) {
                    min_cost = cost
                    result = [...solution]
                }
                else
                    AttemptContainer(neededContainer);
            cost -= container_list[j].totalCost;
            container -= container_list[j].container;
            attempted[j] = false;
            solution.pop();
        }
    }
}

// Check output
AttemptContainer(neededContainer);

let totalCost = 0;
if (result.length > 0)
    for (let j = 0; j < result.length; j++) {
        console.log('[Contract with]', result[j].name, result[j].container, 'container, price:', result[j].totalCost);
        totalCost += result[j].totalCost;
    }
else {
    for (let j = 0; j < container_list.length; j++) {
        console.log('[Contract with]', container_list[j].name, container_list[j].container, 'container, price:', container_list[j].totalCost);
        totalCost += container_list[j].totalCost;
    }
    console.log('Not enough containers');
}
console.log('[Summary] total cost', totalCost);