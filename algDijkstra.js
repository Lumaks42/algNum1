// Поиск крайчайшего пути
// Тут по сложнее, так что лучше комменты внесу для ясности

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    // Минимальные стоимости всех ребер
    const costs = {}
    // Массив, который хранит обработанные объекты
    const processed = []
    let neighbors = {}
    // Объект, который добавляет ближайших соседий
    Object.keys(graph).forEach(node => {
        if(node !== start){
            let value = graph[start][node]
            costs[node] = value || 10000000
        }
    })
    let node = findNodeLovestCost(costs, processed)
    while(node){
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor =>{
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLovestCost(costs, processed)
    }
    return costs
}

function findNodeLovestCost(costs, processed) {
    let lowestCost = 10000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if(cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node

        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'))