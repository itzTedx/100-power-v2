import {
  TabsContent as ShadcnTabsContent,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}


export function Section({ children }: Props) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
      {children}
    </section>
  );
}

export function SplitSection({ children }: Props) {
  return (
    <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
      {children}
    </section>
  );
}


export const InformationTabs = ({ children }: Props) => {
  return (
    <Tabs defaultValue="core" className="col-span-12 items-start md:col-span-7">
      <TabsList className="text-foreground h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1">
        <TabsTrigger
          value="core"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Core Advantages
        </TabsTrigger>
        <TabsTrigger
          value="usages"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Usages
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export const DirectionsTabs = ({ children }: Props) => {
  return (
    <Tabs
      defaultValue="directions"
      className={cn("col-span-12 mt-6 items-start md:col-span-5 md:mt-0")}
    >
      <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1">
        <TabsTrigger
          value="directions"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Directions of Use
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export const SafetyTabs = ({ children }: Props) => {
  return (
    <Tabs
      defaultValue="handling"
      className="col-span-12 mt-6 items-start md:col-span-7 md:mt-0"
    >
      <TabsList className="text-foreground mb-3 h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b bg-transparent px-0 py-1">
        <TabsTrigger
          value="handling"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Handling & Safety
        </TabsTrigger>
        <TabsTrigger
          value="first-aid"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          First Aid Measures
        </TabsTrigger>
        <TabsTrigger
          value="disposal"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
          Disposal
        </TabsTrigger>
        <TabsTrigger
          value="hazardous"
          className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative flex-0 after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
        >
         Hazardous Components
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

interface TabContentProps {
  value: string;
  children: React.ReactNode
}

export const TabContent = ({value, children}: TabContentProps) => {
return <ShadcnTabsContent value={value}>{children}</ShadcnTabsContent>;
};
