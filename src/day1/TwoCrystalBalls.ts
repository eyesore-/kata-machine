export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));
    let i = jmp;

    for (; i < breaks.length; i += jmp) {
        if (breaks[i]) break;
    }

    i -= jmp;
    for (let j = i - jmp; j <= i + jmp; ++j) {
        if (breaks[j]) return j;
    }

    return -1;
}
