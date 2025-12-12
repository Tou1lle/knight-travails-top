class Node {
  #position;
  #predecessor;
  #neighbours;

  constructor(position, predecessor, neighbours = []) {
    this.position = position;
    this.predecessor = predecessor;
    this.neighbours = neighbours;
  }

  addNeighbour(node) {
    this.neighbours.push(node);
  }

  get position() { return this.#position; }
  get neighbours() { return this.#neighbours; }
  get predecessor() { return this.#predecessor; }
  set position(position) { this.#position = position; }
  set neighbours(neighbours) { this.#neighbours = neighbours; }
  set predecessor(predecessor) { this.#predecessor = predecessor; } 
}

export { Node };