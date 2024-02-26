function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] < pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) return;

    const pIndex = partition(arr, lo, hi);

    qs(arr, lo, pIndex - 1);
    qs(arr, pIndex + 1, hi);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
