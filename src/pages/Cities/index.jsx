import cities_info from "../../constants/cities_info.json";
import { Table, ScrollArea, Pagination, Stack } from "@mantine/core";
import { createContext } from "react";
import TableHead from "../../components/Table/TableHead";
import TableBody from "../../components/Table/TableBody";
import { useState, useMemo } from "react";

export const Data = createContext();
const SIZE_PER_PAGE = 13;

const Cities = () => {
  const [activePage, setActivePage] = useState(1);

  const paginationData = useMemo(
    () => ({
      total: Math.ceil(cities_info?.length / SIZE_PER_PAGE),
      initial: 1,
      boundaries: 3,
    }),
    []
  );

  const displayRecordsIndexes = useMemo(
    () => ({
      start: SIZE_PER_PAGE * activePage - SIZE_PER_PAGE,
      end:
        SIZE_PER_PAGE * activePage < cities_info?.length
          ? SIZE_PER_PAGE * activePage
          : cities_info?.length,
    }),
    [activePage]
  );

  return (
    <Data.Provider
      value={{ data: cities_info, displayRange: displayRecordsIndexes }}
    >
      <div className="scroll-area-parent">
        <ScrollArea style={{ height: 600 }}>
          <Table
            highlightOnHover="true"
            horizontalSpacing="xs"
            verticalSpacing="md"
            fontSize="sm"
          >
            <TableHead data={cities_info} />
            <TableBody
              data={cities_info}
              displayRange={displayRecordsIndexes}
            />
          </Table>
        </ScrollArea>
        <Pagination
          total={paginationData.total}
          boundaries={paginationData.boundaries}
          page={activePage}
          onChange={setActivePage}
          mt={20}
          size={"md"}
          radius={"md"}
          position={"right"}
          withEdges
        />
      </div>
    </Data.Provider>
  );
};

export default Cities;
