class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            //swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            //update index
            idx = parentIdx
        }
    }
}


let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(20);
console.log(heap)
//[41, 39, 33, 18, 27, 12, 55]
//  0   1   2   3   4   5   6