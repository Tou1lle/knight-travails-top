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