import { observer } from "mobx-react-lite";
import SplitControls from "./SplitControls";

const Partition = observer(({ partition, store }) => {
  const isSplitVertically = partition.splitDirection === "v"; // Check split direction

  return (
    <div
      className={`relative flex ${isSplitVertically ? "flex-row" : "flex-col"
        }`}
      style={{
        backgroundColor: partition.color, // Set background color
        flexGrow: 1,
        position: "relative",
      }}
    >
      {/* If the partition has children, render them recursively */}
      {partition.children.length > 0 ? (
        partition.children.map((child) => (
          <Partition key={child.id} partition={child} store={store} />
        ))
      ) : (
        // Show controls for unsplit partitions
        <SplitControls partition={partition} store={store} />
      )}
    </div>
  );
});

export default Partition;
