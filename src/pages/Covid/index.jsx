import covidData from "../../constants/covid_cities.json";
import { Table, ScrollArea, Pagination, Stack } from "@mantine/core";
import TableHead from "../../components/Table/TableHead";
import TableBody from "../../components/Table/TableBody";
import { useState, useMemo } from "react";

const SIZE_PER_PAGE = 13;

const Covid = () => {
  const [activePage, setActivePage] = useState(1);

  const paginationData = useMemo(
    () => ({
      total: Math.ceil(covidData?.length / SIZE_PER_PAGE),
      initial: 1,
      boundaries: 3,
    }),
    []
  );

  const displayRecordsIndexes = useMemo(
    () => ({
      start: SIZE_PER_PAGE * activePage - SIZE_PER_PAGE,
      end:
        SIZE_PER_PAGE * activePage < covidData?.length
          ? SIZE_PER_PAGE * activePage
          : covidData?.length,
    }),
    [activePage]
  );

  return (
    <div className="scroll-area-parent">
      <ScrollArea style={{ height: 600 }}>
        <Table
          highlightOnHover="true"
          horizontalSpacing="xs"
          verticalSpacing="md"
          fontSize="sm"
        >
          <TableHead data={covidData} />
          <TableBody data={covidData} displayRange={displayRecordsIndexes} />
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
  );
};

export default Covid;
