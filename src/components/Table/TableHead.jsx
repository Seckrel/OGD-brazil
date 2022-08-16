import { useMemo } from "react";
import { Text } from "@mantine/core";

const TableHead = ({ data }) => {
  // const { data } = useContext(Data);
  const columns = useMemo(
    () => Object.keys(data[0]).map((singleRow) => singleRow.split("_")[0]),
    [data[0]]
  );
  return (
    <thead>
      <tr>
        {columns.map((column, idx) => (
          <th key={idx}>
            <Text transform="capitalize" align="center" inline>
              {column}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
