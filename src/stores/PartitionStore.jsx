import { makeAutoObservable } from "mobx";

class PartitionStore {
  partitions = [
    {
      id: 1,
      color: this.getRandomColor(),
      splitDirection: null,
      children: [],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getRandomColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A1FF33"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  addPartition(parentId, direction) {
    const parent = this.findPartitionById(parentId);
    if (!parent || parent.children.length > 0) return;

    // Log for debugging
    console.log(`Splitting partition ${parentId} ${direction === "v" ? "vertically" : "horizontally"}`);

    parent.splitDirection = direction; // Set split direction
    parent.children = [
      {
        id: Date.now(),
        color: this.getRandomColor(),
        splitDirection: null,
        children: [],
      },
      {
        id: Date.now() + 1,
        color: parent.color,
        splitDirection: null,
        children: [],
      },
    ];
  }


  removePartition(partitionId) {
    this.partitions = this.removeHelper(this.partitions, partitionId);
  }

  removeHelper(partitions, partitionId) {
    return partitions
      .map((p) => {
        if (p.id === partitionId) return null;
        if (p.children.length) {
          p.children = this.removeHelper(p.children, partitionId);
        }
        return p;
      })
      .filter(Boolean);
  }

  findPartitionById(partitionId, partitions = this.partitions) {
    for (const p of partitions) {
      if (p.id === partitionId) return p;
      const child = this.findPartitionById(partitionId, p.children);
      if (child) return child;
    }
    return null;
  }
}

export const partitionStore = new PartitionStore();
