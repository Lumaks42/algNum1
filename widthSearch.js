// поиск в ширину по графу

const graph = {}
graph.a = ['a', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSerch(graph, start, end) {
    let queue = []
    queue.push(start)
    while(queue.length > 0) {
        const current = queue.shift()
        if(!graph[current]) {
            graph[current] = []
        }
        if(graph[current].includes(end)){
            return true
        }else{
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSerch(graph, 'a', 'g'))