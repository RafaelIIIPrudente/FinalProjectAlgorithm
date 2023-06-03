// type Graph = Map<string, Map<string, number>>;

// function weightedBFS(
//   graph: Graph,
//   startNode: string,
//   endNode: string
// ): { path: string[]; weight: number } {
//   const queue: [string, number][] = [[startNode, 0]]; // queue of nodes to visit, along with their cumulative weights
//   const visited: Set<string> = new Set(); // set of visited nodes
//   const parents: Map<string, string> = new Map(); // map of each node to its parent in the BFS tree
//   const weights: Map<string, number> = new Map([[startNode, 0]]); // map of each node to the cumulative weight of its shortest path

//   while (queue.length > 0) {
//     const [currentNode, currentWeight] = queue.shift()!;

//     if (currentNode === endNode) {
//       return {
//         path: reconstructPath(startNode, endNode, parents),
//         weight: weights.get(endNode)!,
//       };
//     }

//     visited.add(currentNode);

//     for (const [neighbor, weight] of graph.get(currentNode) || []) {
//       const newWeight = currentWeight + weight;

//       if (
//         !visited.has(neighbor) &&
//         (!weights.has(neighbor) || newWeight < weights.get(neighbor)!)
//       ) {
//         parents.set(neighbor, currentNode);
//         weights.set(neighbor, newWeight);
//         queue.push([neighbor, newWeight]);
//       }
//     }

//     queue.sort((a, b) => a[1] - b[1]); // sort the queue by cumulative weight
//   }

//   return { path: [], weight: Infinity };
// }

// function reconstructPath(
//   startNode: string,
//   endNode: string,
//   parents: Map<string, string>
// ): string[] {
//   const path: string[] = [endNode];
//   let currentNode = endNode;

//   while (currentNode !== startNode) {
//     currentNode = parents.get(currentNode)!;
//     path.unshift(currentNode);
//   }

//   return path;
// }

// // Create a sample graph
// const graph: Graph = new Map([
//   ["Gate 4", new Map([["CPU Birthing Center", 29]])],
//   ["CPU Birthing Center", new Map([["Approtech", 63]])],
//   [
//     "Approtech",
//     new Map([
//       ["Senior HighSchool Parking lot", 41],
//       ["CPU Birthing Center", 63],
//     ]),
//   ],
//   [
//     "Senior HighSchool Parking lot",
//     new Map([
//       ["Approtech", 41],
//       ["Senior High School Building", 59],
//       ["Mary Thomas Hall", 17],
//     ]),
//   ],
//   [
//     "Mary Thomas Hall",
//     new Map([
//       ["Gate 3", 108],
//       ["Senior HighSchool Parking lot", 17],
//       ["Dr. Elwood Edge Building", 38],
//       ["Lopez Hall", 23],
//     ]),
//   ],
//   [
//     "Senior High School Building",
//     new Map([
//       ["Senior HighSchool Parking lot", 59],
//       ["Junior High School", 47],
//     ]),
//   ],
//   ["Dr. Elwood Edge Building", new Map([["Mary Thomas Hall", 38]])],
//   [
//     "Lopez Hall",
//     new Map([
//       ["Mary Thomas Hall", 23],
//       ["Uy Parking Lot", 32],
//     ]),
//   ],
//   [
//     "Junior High School",
//     new Map([
//       ["High School Gym", 39],
//       ["Senior High School Building", 47],
//     ]),
//   ],
//   [
//     "High School Gym",
//     new Map([
//       ["Junior High School", 39],
//       ["High School Science Building", 31],
//     ]),
//   ],
//   [
//     "High School Science Building",
//     new Map([
//       ["High School Gym", 31],
//       ["High School Canteen", 37],
//     ]),
//   ],
//   [
//     "High School Canteen",
//     new Map([
//       ["High School Science Building", 37],
//       ["Packaging Engineering", 64],
//     ]),
//   ],
//   [
//     "Gate 3",
//     new Map([
//       ["Mary Thomas Hall", 108],
//       ["Old Valentine Hall", 40],
//     ]),
//   ],
//   [
//     "Old Valentine Hall",
//     new Map([
//       ["Gate 3", 40],
//       ["Half Moon Field", 66],
//     ]),
//   ],
//   [
//     "Half Moon Field",
//     new Map([
//       ["Old Valentine Hall", 40],
//       ["New Valentine Hall", 30],
//       ["Alumni Promenade and Concert Park", 27],
//     ]),
//   ],
//   [
//     "New Valentine Hall",
//     new Map([
//       ["Half Moon Field", 30],
//       ["CPU Flag Pole", 24],
//     ]),
//   ],
//   [
//     "Student Enterprise/CPUR Office",
//     new Map([
//       ["Gate 2/ Main Gate", 63],
//       ["Admin Building", 30],
//       ["Alumni Promenade and Concert Park", 35],
//     ]),
//   ],
//   [
//     "Admin Building",
//     new Map([
//       ["Student Enterprise/CPUR Office", 30],
//       ["Gate 2/ Main Gate", 38],
//       ["Gate 1", 48],
//     ]),
//   ],
//   [
//     "Gate 2/ Main Gate",
//     new Map([
//       ["Admin Building", 38],
//       ["Student Enterprise/CPUR Office", 63],
//     ]),
//   ],
//   [
//     "Gate 1",
//     new Map([
//       ["Admin Building", 48],
//       ["Registrar", 60],
//     ]),
//   ],
//   [
//     "Registrar",
//     new Map([
//       ["Gate 1", 60],
//       ["Elementary", 18],
//     ]),
//   ],
//   [
//     "Elementary",
//     new Map([
//       ["Registrar", 18],
//       ["Excel", 27],
//     ]),
//   ],
//   [
//     "Excel",
//     new Map([
//       ["Elementary", 27],
//       ["Dining Hall", 21],
//     ]),
//   ],
//   [
//     "Dining Hall",
//     new Map([
//       ["Excel", 21],
//       ["EMC", 38],
//       ["Weston Hall", 27],
//       ["Ancheta Parking Lot", 44],
//     ]),
//   ],
//   [
//     "EMC",
//     new Map([
//       ["Dining Hall", 38],
//       ["CPU Flag Pole", 68],
//     ]),
//   ],
//   [
//     "CPU Flag Pole",
//     new Map([
//       ["New Valentine Hall", 24],
//       ["Uy Parking Lot", 69],
//       ["Roblee Science Hall", 27],
//       ["EMC", 68],
//     ]),
//   ],
//   [
//     "Roblee Science Hall",
//     new Map([
//       ["CPU Flag Pole", 27],
//       ["Franklin Hall", 58],
//     ]),
//   ],
//   [
//     "Weston Hall",
//     new Map([
//       ["Loreto D. Tupaz Building", 74],
//       ["Dining Hall", 27],
//     ]),
//   ],
//   [
//     "Loreto D. Tupaz Building",
//     new Map([
//       ["Weston Hall", 74],
//       ["Henry Luce Library III", 43],
//     ]),
//   ],
//   [
//     "Henry Luce Library III",
//     new Map([
//       ["Loreto D. Tupaz Building", 43],
//       ["Praying Park", 65],
//       ["Prayer Garden", 63],
//     ]),
//   ],
//   [
//     "Rose Memorial Auditorium",
//     new Map([
//       ["Prayer Garden", 30],
//       ["University Church", 55],
//       ["Kindergarten", 36],
//       ["University Gym", 35],
//     ]),
//   ],
//   [
//     "University Church",
//     new Map([
//       ["Engineering Parking Lot", 50],
//       ["Kindergarten", 41],
//       ["Rose Memorial Auditorium", 55],
//     ]),
//   ],
//   [
//     "Engineering Parking Lot",
//     new Map([
//       ["University Church", 50],
//       ["Engineering Building", 80],
//     ]),
//   ],
//   [
//     "Engineering Building",
//     new Map([
//       ["Engineering Parking Lot", 80],
//       ["Big Field", 20],
//     ]),
//   ],
//   [
//     "Big Field",
//     new Map([
//       ["Engineering Building", 20],
//       ["Franklin Hall", 31],
//       ["Packaging Engineering", 56],
//     ]),
//   ],
//   [
//     "Franklin Hall",
//     new Map([
//       ["Roblee Science Hall", 58],
//       ["Big Field", 31],
//     ]),
//   ],
//   [
//     "Packaging Engineering",
//     new Map([
//       ["Uy Building", 101],
//       ["High School Canteen", 64],
//       ["Big Field", 56],
//     ]),
//   ],
//   [
//     "Uy Parking Lot",
//     new Map([
//       ["Lopez Hall", 32],
//       ["Uy Building", 46],
//       ["CPU Flag Pole", 69],
//     ]),
//   ],
//   [
//     "Uy Building",
//     new Map([
//       ["Uy Parking Lot", 46],
//       ["Packaging Engineering", 101],
//     ]),
//   ],
//   [
//     "Elementary Gym",
//     new Map([
//       ["Johnson Hall", 70],
//       ["Ancheta Parking Lot", 57],
//       ["Elementary Field", 52],
//     ]),
//   ],
//   [
//     "Johnson Hall",
//     new Map([
//       ["Elementary Gym ", 70],
//       ["Ancheta Parking Lot", 89],
//     ]),
//   ],
//   ["Ancheta Hall", new Map([["Ancheta Parking Lot", 51]])],
//   [
//     "Ancheta Parking Lot",
//     new Map([
//       ["Dining Hall", 44],
//       ["Ancheta Hall", 51],
//       ["Elementary Gym", 57],
//       ["Johnson Hall", 89],
//     ]),
//   ],
//   [
//     "Elementary Field",
//     new Map([
//       ["Elementary Gym", 52],
//       ["CHM", 40],
//       ["Roselund", 29],
//       ["Gate 6", 72],
//     ]),
//   ],
//   [
//     "CHM",
//     new Map([
//       ["Elementary Field", 40],
//       ["Presidents House", 41],
//     ]),
//   ],
//   ["Presidents House", new Map([["CHM", 41]])],
//   [
//     "Gate 6",
//     new Map([
//       ["Elementary Field", 72],
//       ["American Houses", 78],
//     ]),
//   ],
//   [
//     "American Houses",
//     new Map([
//       ["Gate 6", 78],
//       ["Softball Field", 96],
//     ]),
//   ],
//   [
//     "Praying Park",
//     new Map([
//       ["Butterfly Garden", 14],
//       ["Henry Luce Library III", 65],
//     ]),
//   ],
//   [
//     "Butterfly Garden",
//     new Map([
//       ["Praying Park", 14],
//       ["Swimming Pool", 52],
//       ["Lifestyle Center", 44],
//       ["Softball Field", 96],
//     ]),
//   ],
//   [
//     "Lifestyle Center",
//     new Map([
//       ["Butterfly Garden", 44],
//       ["Softball Field", 58],
//     ]),
//   ],
//   [
//     "Swimming Pool",
//     new Map([
//       ["Butterfly Garden", 62],
//       ["Prayer Garden", 83],
//       ["Tennis Court", 54],
//     ]),
//   ],
//   [
//     "Softball Field",
//     new Map([
//       ["American Houses", 96],
//       ["Lifestyle Center", 58],
//       ["Butterfly Garden", 96],
//     ]),
//   ],
//   [
//     "Tennis Court",
//     new Map([
//       ["Swimming Pool", 54],
//       ["University Gym", 83],
//       ["Power House", 34],
//     ]),
//   ],
//   [
//     "Gate 8",
//     new Map([
//       ["Power House", 63],
//       ["Gate 7", 106],
//     ]),
//   ],
//   [
//     "Gate 7",
//     new Map([
//       ["Gate 8", 106],
//       ["Fine Arts Building", 12],
//     ]),
//   ],
//   [
//     "Fine Arts Building",
//     new Map([
//       ["Anatomy Building", 50],
//       ["Gate 7", 12],
//       ["University Gym", 82],
//     ]),
//   ],
//   [
//     "University Gym",
//     new Map([
//       ["Fine Arts Building", 82],
//       ["Anatomy Building", 87],
//       ["Tennis Court", 83],
//       ["Rose Memorial Auditorium", 35],
//     ]),
//   ],
//   [
//     "Anatomy Building",
//     new Map([
//       ["University Gym", 50],
//       ["Fine Arts Building", 87],
//     ]),
//   ],
//   [
//     "Kindergarten",
//     new Map([
//       ["Rose Memorial Auditorium", 36],
//       ["University Church", 41],
//     ]),
//   ],
//   [
//     "Alumni Promenade and Concert Park",
//     new Map([
//       ["Half Moon Field", 27],
//       ["Student Enterprise/CPUR Office", 35],
//     ]),
//   ],
//   [
//     "Power House",
//     new Map([
//       ["Tennis Court", 34],
//       ["Gate 8", 63],
//     ]),
//   ],
//   [
//     "Prayer Garden",
//     new Map([
//       ["Henry Luce Library III", 63],
//       ["Swimming Pool", 83],
//       ["Rose Memorial Auditorium", 30],
//     ]),
//   ],
//   ["Roselund", new Map([["Elementary Field", 29]])],
// ]);

// // Find the shortest path from node A to node I
// const { path, weight } = weightedBFS(graph, "Fine Arts Building", "Gate 2/ Main Gate");

// // Print the shortest path and its weight
// console.log(`${path.join(" -> ")}`); // Output: ["A", "B", "E", "I"]
// console.log(`${weight} meters`); // Output: 7
