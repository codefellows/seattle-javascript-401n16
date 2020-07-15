class Node {
    constructor(val) {
        this.val = val;
        this.connections = [];
    }
}

class Graph {
    constructor() {}

    addNode(val) {
        if (!this.nodes) this.nodes = [];

        let node = new Node(val);
        this.nodes.push(node);
    }

    addEdge(originVal, destVal, weight) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].val === originVal) {
                this.nodes[i].connections.push({ destVal, weight });
                return;
            }
        }
    }

    getNodes() {
        let vals = [];

        for (let i = 0; i < this.nodes.length; i++) {
            vals.push(this.nodes[i].val);
        }

        return vals.length ? vals : null;
    }

    getNeighbors(val) {
        let node;
        let neighbors;

        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].val === val) {
                node = this.nodes[i];
            }
        }

        neighbors = [...node.connections];

        for (let i = 0; i < this.nodes.length; i++) {
            // iterate through all the other nodes (not A)

            for (let j = 0; j < this.nodes[i].connections.length; j++) {
                // given some node that is not A
                // iterate through its connections

                if (this.nodes[i].connections[j].destVal === val) {
                    // val: B, connections: [{destVal: 'A', weight: 1}]
                    // destVal ?= val >> 'A' ?= 'A'

                    neighbors.push({
                        destVal: this.nodes[i].val,
                        weight: this.nodes[i].connections[j].weight,
                    });
                    //continue;
                }
            }
        }

        return neighbors;
    }

    size() {
        return this.nodes.length;
    }
}

module.exports = Graph;
