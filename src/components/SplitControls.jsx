
const SplitControls = ({ partition, store }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
      <button
        className="bg-gray-800 text-white px-2 py-1 rounded"
        onClick={() => store.addPartition(partition.id, "v")}
      >
        v
      </button>
      <button
        className="bg-gray-800 text-white px-2 py-1 rounded"
        onClick={() => store.addPartition(partition.id, "h")}
      >
        h
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded mt-2"
        onClick={() => store.removePartition(partition.id)}
      >
        -
      </button>
    </div>
  );
};

export default SplitControls;
