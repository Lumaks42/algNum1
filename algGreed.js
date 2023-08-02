// штаты, которые принимают сигнал
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// Станции могут обслуживать больше одного штата
const stations = {};
stations.kone = new Set(["id", "nv", "ut"]);
stations.ktwo = new Set(["wa", "id", "mt"]);
stations.kthree = new Set(["or", "nv", "ca"]);
stations.kfour = new Set(["nv", "ut"]);
stations.kfive = new Set(["ca", "az"]);

const finalStations = new Set();

// поиск станций, которые охватывают больше штатов для отпраки сигнала
while (statesNeeded.size){
    let bestStation = null;
    let statesCovered = new Set();
    Object.keys(stations).forEach(station => {
        const states = stations[station];
        const covered = new Set([...statesNeeded].filter(x => states.has(x)));
        if(covered.size > statesCovered.size){
            bestStation = station;
            statesCovered = covered;
        }
    });
    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
    finalStations.add(bestStation);
}

// результат: Выводит кол-во станций, которые представляют покрытие для большинства штатов
console.log(finalStations) 