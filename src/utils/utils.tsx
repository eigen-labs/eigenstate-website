
// Function to generate random data
const generateData = (length: number): number[] => Array.from({ length }, () => Math.floor(Math.random() * 100));

export default generateData;
