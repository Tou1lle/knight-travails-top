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

const board = [
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7],
  [0,1,2,3,4,5,6,7]
];

function validCoordinates(coordinates) {
  const [x,y] = coordinates;
  return ((x >= 0 && x <= 7) && (y >= 0 && y <= 7)) ? true : false;
}

function getNeighbours(coordinates) {
  const neighboursXY = [];
  const [x,y] = coordinates;
  neighboursXY.push([x+2, y+1],
                    [x+2, y-1],
                    [x+1, y+2],
                    [x+1, y-2],
                    [x-2, y+1],
                    [x-2, y-1],
                    [x-1, y+2],
                    [x-1, y-2]
  )
  return neighboursXY.filter(validCoordinates);
}