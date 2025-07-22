import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Results = () => {
  return (
    <section className="container py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-helvetica mb-8 text-center text-3xl font-bold md:text-4xl">
          Real Results in Real Projects
        </h2>

        <Table className="bg-card overflow-hidden rounded-sm border">
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="px-6 py-4 text-left text-lg font-semibold">
                &nbsp;
              </TableHead>
              <TableHead className="px-6 py-4 text-center font-semibold">
                Without 100 Power
              </TableHead>
              <TableHead className="px-6 py-4 text-center font-semibold">
                With 100 Power
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="">
              <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
                Downtime
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg text-red-600">
                High
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg font-bold text-green-600">
                Low
              </TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
                Maintenance Cost
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg text-red-600">
                Expensive
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg font-bold text-green-600">
                Reduced
              </TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
                Performance Consistency
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg text-red-600">
                Variable
              </TableCell>
              <TableCell className="px-6 py-4 text-center text-lg font-bold text-green-600">
                Stable
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};
