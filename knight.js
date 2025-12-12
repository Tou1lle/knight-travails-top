/*
Node -> an object containing
- Its position
- Array of neighbours
- predescessor

-> Idea:
-When searching for the source - destination path
the source will have predescessor as null (this way we know where we started)
-So when using BSF - we go down and down until we encounter the searched
destination coordinates
-There we can go back using the predescessor property
-We will create a lot of objects (not really optimal)
-The objects will probably need to be linked 
*/

import { Node } from "./node.js";

const board = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
];

const validCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return x >= 0 && x <= 7 && y >= 0 && y <= 7 ? true : false;
};

const getNeighbours = (coordinates) => {
  const neighboursXY = [];
  const [x, y] = coordinates;
  neighboursXY.push(
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y + 2],
    [x - 1, y - 2]
  );
  return neighboursXY.filter(validCoordinates);
};

const knightMoves = (start, end) => {
  const [xStart, yStart] = start;
  const [xEnd, yEnd] = end;
  const finalPath = [];
  const current = new Node([xStart, yStart], null);
  const neighbourCoordinates = getNeighbours(current.position);
  neighbourCoordinates.forEach((xy) => {
    current.addNeighbour(new Node(xy, current));
  });
  const queue = [];
  current.neighbours.forEach((node) => queue.push(node));

  if (JSON.stringify(current.position) === JSON.stringify(end)) {
    finalPath.push(current.position);
    return finalPath;
  }

  while (finalPath.length === 0) {
    const tmp = queue.shift();
    if (JSON.stringify(tmp.position) === JSON.stringify(end)) {
      let parent = tmp.predecessor;
      finalPath.push(tmp.position);
      while (parent) {
        finalPath.push(parent.position);
        parent = parent.predecessor;
      }
      finalPath.reverse();
    }

    const neighbourCoordinates = getNeighbours(tmp.position);
    neighbourCoordinates.forEach((xy) => {
      tmp.addNeighbour(new Node(xy, tmp));
    });
    tmp.neighbours.forEach((node) => queue.push(node));
  }

  console.log(finalPath);
};

knightMoves([0,0], [7,7]);
