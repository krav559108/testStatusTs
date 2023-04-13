class TreeStore {
  items;
  constructor(
    items: {
      id: string | number;
      parent: string | number;
      type?: string | null;
    }[]
  ) {
    this.items = items;
  }

  getAll() {
    console.log(items);
  }
  getItem(id: string | number) {
    console.log(items.filter((arr) => arr.id === id));
  }
  getChildren(id: string | number) {
    console.log(items.filter((arr) => arr.parent === id));
  }
  getAllChildren(id: string | number) {
    let a = items.filter((arr) => arr.parent === id);
    a.map((e) => {
      let arr = items.filter((arr) => arr.parent === e.id);
      if (arr.length > 0) {
        a = a.concat(arr);
      }
    });
    console.log(a);
  }
  getAllParents(id: string | number) {
    let myArr = [];
    let curr = items.filter((arr) => arr.id === id)[0];
    while (true) {
      if (curr.parent === "root") {
        break;
      }
      curr = items.filter((arr) => arr.id === curr.parent)[0];
      myArr.push(curr);
    }
    console.log(myArr);
  }
}

const items: {
  id: string | number;
  parent: string | number;
  type?: string | null;
}[] = [
  { id: 1, parent: "root" },
  { id: 2, parent: 1, type: "test" },
  { id: 3, parent: 1, type: "test" },

  { id: 4, parent: 2, type: "test" },
  { id: 5, parent: 2, type: "test" },
  { id: 6, parent: 2, type: "test" },

  { id: 7, parent: 4, type: null },
  { id: 8, parent: 4, type: null },
];

const ts = new TreeStore(items);
ts.getAll();
ts.getItem(7);
ts.getChildren(4);
ts.getChildren(5);
ts.getChildren(2);
ts.getAllChildren(2);
ts.getAllParents(7);
