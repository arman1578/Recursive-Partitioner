import { observer } from "mobx-react-lite";
import { partitionStore } from "./stores/PartitionStore";
import Partition from "./components/Partition";

const App = observer(() => {
  return (
    <div className="w-screen h-screen flex">
      {partitionStore.partitions.map((partition) => (
        <Partition key={partition.id} partition={partition} store={partitionStore} />
      ))}
    </div>
  );
});

export default App;
