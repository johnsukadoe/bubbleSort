import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(56);
linkedList.add(-90);
linkedList.add(1);
linkedList.sort();
linkedList.print();



const charactersCollection = new CharacterCollection('acbEdI');
charactersCollection.sort();
console.log(charactersCollection);




const collection = new NumbersCollection([1,2,3,-1,-5]);
collection.sort();
console.log(collection);

