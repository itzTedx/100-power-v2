import { IconPresentation } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    <section className="container max-w-7xl space-y-8 py-16">
      <Badge>
        <IconPresentation />
        Proven Results
      </Badge>
      <Separator />
      <div className="grid grid-cols-2 gap-28">
        <h2 className="font-helvetica text-4xl font-bold">
          Real Results. <br /> Real Impact.
        </h2>
        <p className="text-2xl tracking-tight">
          100 Power improves uptime, reduces costs, and enhances performance —
          powered by advanced U.S. anti-friction technology.
        </p>
      </div>
      <Table className="bg-card overflow-hidden rounded-sm border">
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="px-6 py-4 text-left text-lg font-semibold">
              &nbsp;
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold">
              Without 100 Power
            </TableHead>
            <TableHead className="px-6 py-4 font-semibold">
              With 100 Power
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="">
            <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
              Downtime
            </TableCell>
            <TableCell className="text-muted-foreground px-6 py-4 text-lg">
              Frequent interruptions
            </TableCell>
            <TableCell className="text-primary px-6 py-4 text-lg font-medium">
              Extended uptime
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
              Maintenance Cost
            </TableCell>
            <TableCell className="text-muted-foreground px-6 py-4 text-lg">
              High and recurring
            </TableCell>
            <TableCell className="text-primary px-6 py-4 text-lg font-medium">
              Reduced significantly
            </TableCell>
          </TableRow>
          <TableRow className="">
            <TableCell className="font-helvetica px-6 py-4 text-lg font-medium">
              Performance Consistency
            </TableCell>
            <TableCell className="text-muted-foreground px-6 py-4 text-lg">
              Inconsistent and inefficient
            </TableCell>
            <TableCell className="text-primary px-6 py-4 text-lg font-medium">
              Smooth, long-term consistency
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};
