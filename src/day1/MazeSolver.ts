const dir = [
    [0, -1],
    [-1, 0],
    [1, 0],
    [0, 1],
];

function outOfBounds(x: number, maze: string | unknown[]): boolean {
    return x < 0 || x >= maze.length;
}

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (outOfBounds(curr.x, maze[0]) || outOfBounds(curr.y, maze)) return false;

    if (maze[curr.y][curr.x] === wall) return false;

    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }
    if (seen[curr.y][curr.x]) return false;

    path.push(curr);
    seen[curr.y][curr.x] = true;

    for (let i = 0; i < dir.length; ++i) {
        const [x, y] = dir[i];
        const next = { x: curr.x + x, y: curr.y + y };
        const res = walk(maze, wall, next, end, seen, path);
        if (res) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = maze.map((s) => Array(s.length).fill(false));
    const path: Point[] = [];

    walk(maze, wall, start, end, seen, path);

    return path;
}
