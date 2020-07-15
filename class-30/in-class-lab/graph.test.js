/*

Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
An empty graph properly returns null

*/

// val: A, connections: [{B, 2}, {C, 4}]
// val: B, connections: [{A, 1}]
// val: C, connections: []
// val: D, connections: [{B, 5}]

const Graph = require('./graph');

describe('our graph works?', () => {
    it('can add a node to the graph and can give me all the nodes', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        let nodes = graph.getNodes();

        expect(nodes.length).toBe(4);
        expect(nodes).toEqual(['A', 'B', 'C', 'D']);
    });

    it('can add an edge to the graph', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');

        graph.addEdge('A', 'B', 2);

        // nodes[0] = Node = {val: 'A', connections: [{'B', 2}]}

        expect(graph.nodes[0]).toMatchObject({
            val: 'A',
            connections: [{ destVal: 'B', weight: 2 }],
        });
    });

    it('can give me all the neighbors', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        // val: A, connections: [{B, 2}, {C, 4}]
        // val: B, connections: [{A, 1}]
        // val: C, connections: []
        // val: D, connections: [{B, 5}]

        graph.addEdge('A', 'B', 2);
        graph.addEdge('A', 'C', 4);
        graph.addEdge('B', 'A', 1);
        graph.addEdge('D', 'B', 5);

        expect(graph.getNeighbors('A')).toEqual([
            { destVal: 'B', weight: 2 },
            { destVal: 'C', weight: 4 },
            { destVal: 'B', weight: 1 },
        ]);
        expect(graph.getNeighbors('B')).toEqual([
            { destVal: 'A', weight: 1 },
            { destVal: 'A', weight: 2 },
            { destVal: 'D', weight: 5 },
        ]);
    });

    it('can tell me the size of nodes', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        expect(graph.size()).toBe(4);
    });

    it('can return a graph with one node and one edge', () => {
        let graph = new Graph();

        graph.addNode('A');
        graph.addEdge('A', 'A', 5);

        expect(graph.nodes[0]).toMatchObject({
            val: 'A',
            connections: [{ destVal: 'A', weight: 5 }],
        });
    });

    it('can return an empty graph', () => {
        let graph = new Graph();

        expect(graph.nodes).not.toBeDefined();
    });
});
