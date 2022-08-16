import { arrayRange, keyListGenerator } from "../../utils/table.utils";
import { Text } from "@mantine/core";

const TableBody = ({ data, displayRange }) => {
  const keysList = keyListGenerator(data[0]);

  return (
    <tbody>
      {arrayRange(data, displayRange.start, displayRange.end).map(
        (trow, idx) => (
          <tr key={idx}>
            {keysList.map((_key, idx) => (
              <td key={idx}>
                <Text transform={"capitalize"} align="center">
                  {trow[_key]}
                </Text>
              </td>
            ))}
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
