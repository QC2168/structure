import {LinkedList} from './linkedList'

const linkedList =new LinkedList();
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
console.log(linkedList)

linkedList.insert(1,'abc')
linkedList.insert(3,'bca')
console.log(linkedList)
console.log(linkedList.get(1))
console.log(linkedList.indexOf('bca'))
console.log(linkedList.removeAt(1))
console.log(linkedList.update(1,'111111'))
console.log(linkedList.isEmpty())
console.log(linkedList.size())
