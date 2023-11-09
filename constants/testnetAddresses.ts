export const testnetAddresses = {
  networkA: {
    Lock: "0x00000000000000",
    Lock2: "0x00000000000000",
  },
  networkB: {
    Lock: "0x00000000000000",
    Lock2: "0x00000000000000",
  },
};

// Define a type that includes the keys of testnetAddresses
type Network = keyof typeof testnetAddresses;

export const testnetList: Network[] = ["networkA", "networkB"];

// Accessing the object by key
const networkKey = testnetList[0]; // 'networkA'
const lockAddress = testnetAddresses[networkKey].Lock; // No TypeScript error
